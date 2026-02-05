"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/components/auth-context"
import { fetchApi } from "@/lib/api"
import { Loader2, X, Plus } from "lucide-react"

interface User {
  _id: string
  nombre: string
  email: string
  roles: any[]
  subscriptionStatus: string
  subscriptionPlan: string
  subscriptionEndDate: string
}

interface Role {
  _id: string
  nombre: string
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
  const [availableRoles, setAvailableRoles] = useState<Role[]>([])

  // Initialize roles: map existing user roles to their IDs if they are objects, or use them directly if strings
  // Although backend returns populated roles usually.
  const initialRoleIds = user.roles.map((r: any) => 
    typeof r === 'object' && r._id ? r._id : r
  )

  const [formData, setFormData] = useState({
    nombre: user.nombre || "",
    email: user.email || "",
    subscriptionStatus: user.subscriptionStatus || "free",
    subscriptionPlan: user.subscriptionPlan || "",
    subscriptionEndDate: user.subscriptionEndDate ? new Date(user.subscriptionEndDate).toISOString().split('T')[0] : "",
    roles: initialRoleIds as string[]
  })

  useEffect(() => {
    if (isOpen && token) {
      // Fetch available roles
      fetchApi("/api/usuarios/roles", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(data => setAvailableRoles(data))
      .catch(console.error)
    }
  }, [isOpen, token])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const payload: any = {
        ...formData,
        subscriptionEndDate: formData.subscriptionEndDate || null
      }
      
      // Send roles as array of IDs. Admin Routes PUT handles this if we trust it blindly updates the field.
      // If the backend expects IDs, this is perfect.
      
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

  const toggleRole = (roleId: string) => {
    setFormData(prev => {
      const roles = prev.roles.includes(roleId)
        ? prev.roles.filter(id => id !== roleId)
        : [...prev.roles, roleId]
      return { ...prev, roles }
    })
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
            <label className="text-sm font-medium">Roles</label>
            <div className="flex flex-wrap gap-2 rounded-md border p-2 min-h-[50px]">
              {availableRoles.length === 0 ? (
                <span className="text-xs text-muted-foreground p-1">Cargando roles...</span>
              ) : (
                availableRoles.map(role => (
                  <button
                    key={role._id}
                    type="button"
                    onClick={() => toggleRole(role._id)}
                    className={`text-xs px-2 py-1 rounded-full border transition-colors ${
                      formData.roles.includes(role._id)
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background hover:bg-muted"
                    }`}
                  >
                    {role.nombre}
                    {formData.roles.includes(role._id) && <Plus className="ml-1 h-3 w-3 inline" />}
                  </button>
                ))
              )}
            </div>
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
