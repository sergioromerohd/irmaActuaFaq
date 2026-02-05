"use client"

import { useState } from "react"
import { useAuth } from "@/components/auth-context"
import { fetchApi } from "@/lib/api"
import { Loader2, X } from "lucide-react"

interface User {
  _id: string
  nombre: string
  email: string
  roles: any[]
  subscriptionStatus: string
  subscriptionPlan: string
  subscriptionEndDate: string
}

interface UserEditModalProps {
  user: User
  isOpen: boolean
  onClose: () => void
  onUpdate: () => void
}

export function UserEditModal({ user, isOpen, onClose, onUpdate }: UserEditModalProps) {
  const { token } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const [formData, setFormData] = useState({
    nombre: user.nombre || "",
    email: user.email || "",
    subscriptionStatus: user.subscriptionStatus || "free",
    subscriptionPlan: user.subscriptionPlan || "",
    subscriptionEndDate: user.subscriptionEndDate ? new Date(user.subscriptionEndDate).toISOString().split('T')[0] : ""
  })

  // Basic role management - just checking/checking "admin"
  // Note: API doc says "currently modifies the role array", so we should be careful.
  // Assuming roles is an array of strings or objects.
  const hasAdminRole = user.roles.some((r: any) => 
    (typeof r === 'string' ? r === 'admin' : r.nombre === 'admin')
  )
  const [isAdmin, setIsAdmin] = useState(hasAdminRole)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Prepare payload
      // Note: Managing roles via this simple checkbox might be tricky depending on how the backend expects it.
      // API Doc says: "Para gestionar roles, actualmente se modifica el array de roles".
      // We will try to preserve existing roles structure but toggle admin.
      
      // Since the request is risky regarding roles structure without full type definition, 
      // I'll focus on subscription and basic data as per requirements + user role request.
      
      const payload: any = {
        ...formData,
        // If date is empty string, send null
        subscriptionEndDate: formData.subscriptionEndDate || null
      }
      
      // Role logic: simple approach
      // If we want to add admin, we add "admin" string or object? 
      // The API response showed objects: [{"nombre": "user"}]. 
      // The login response showed strings: ["admin", "user"].
      // I will send an array of strings for simplicity if the backend supports it, 
      // OR reconstruct the object array.
      // Let's assume the backend handles mixed or we stick to what we received. 
      // Safe bet: Don't touch roles if we are unsure, OR send what we want.
      // User asked for "management of users and roles".
      
      let newRoles = [...user.roles]
      if (isAdmin && !hasAdminRole) {
         // Add admin
         // Check format of first role to guess format
         const firstRole = user.roles[0]
         if (firstRole && typeof firstRole === 'object') {
             newRoles.push({ nombre: 'admin' })
         } else {
             newRoles.push('admin')
         }
      } else if (!isAdmin && hasAdminRole) {
         // Remove admin
         newRoles = newRoles.filter((r: any) => 
             (typeof r === 'string' ? r !== 'admin' : r.nombre !== 'admin')
         )
      }
      
      payload.roles = newRoles

      await fetchApi(`/api/admin/users/${user._id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      })

      onUpdate()
    } catch (err: any) {
      setError(err.message || "Error al actualizar usuario")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg rounded-lg border bg-card p-6 shadow-lg animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Editar Usuario</h2>
          <button onClick={onClose} className="rounded-full p-1 hover:bg-muted">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nombre</label>
              <input
                value={formData.nombre}
                onChange={e => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
             <label className="flex items-center gap-2 cursor-pointer">
               <input 
                 type="checkbox" 
                 checked={isAdmin}
                 onChange={e => setIsAdmin(e.target.checked)}
                 className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
               />
               <span className="text-sm font-medium">Es Administrador</span>
             </label>
          </div>

          <div className="border-t pt-4 mt-4">
             <h3 className="text-sm font-medium mb-3">Suscripción</h3>
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Estado</label>
                  <select
                    value={formData.subscriptionStatus}
                    onChange={e => setFormData({ ...formData, subscriptionStatus: e.target.value })}
                    className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                  >
                    <option value="free">Free</option>
                    <option value="trial">Trial</option>
                    <option value="premium">Premium</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Plan</label>
                  <input
                    value={formData.subscriptionPlan}
                    onChange={e => setFormData({ ...formData, subscriptionPlan: e.target.value })}
                    placeholder="e.g. yearly"
                    className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                  />
                </div>
                 <div className="space-y-2 col-span-2">
                  <label className="text-sm font-medium">Fecha Fin Suscripción</label>
                  <input
                    type="date"
                    value={formData.subscriptionEndDate}
                    onChange={e => setFormData({ ...formData, subscriptionEndDate: e.target.value })}
                    className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                  />
                </div>
             </div>
          </div>

          {error && <div className="text-sm text-red-500">{error}</div>}

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
