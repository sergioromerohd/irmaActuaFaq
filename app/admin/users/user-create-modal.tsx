"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/components/auth-context"
import { fetchApi } from "@/lib/api"
import { Loader2, X, Plus } from "lucide-react"

interface UserCreateModalProps {
  isOpen: boolean
  onClose: () => void
  onCreated: () => void
}

interface Role {
  _id: string
  nombre: string
}

export function UserCreateModal({ isOpen, onClose, onCreated }: UserCreateModalProps) {
  const { token } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [availableRoles, setAvailableRoles] = useState<Role[]>([])

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    contraseña: "",
    roles: [] as string[] // Array of Role IDs
  })

  useEffect(() => {
    if (isOpen && token) {
      // Fetch available roles when modal opens
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
      // 1. Create User
      // Note: /crear ignores roles in body (see usuarioRoutes.js around line 82), 
      // it assigns default role. We might need to assign roles *after* creation if specific roles are selected.
      
      const newUser = await fetchApi("/api/usuarios/crear", {
        method: "POST",
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          contraseña: formData.contraseña
        })
      })

      // 2. If roles selected (and different from default), we might need to update the user.
      // However, since we don't have the user's ID easily returned in a standard way that matches admin updates without re-querying or relying on name...
      // Let's check `usuarioRoutes.js`: returns `usuarioGuardado`.
      
      // If we want to assign implicit admin role or others:
      if (formData.roles.length > 0 && newUser.nombre) {
         // The endpoint `/api/usuarios/usuario/:nombre/rol` allows adding roles one by one.
         // Or we can use the admin `PUT` endpoint if we have the ID. `newUser` should have `_id`.
         
         if (newUser._id && token) {
             // Use Admin PUT to overwrite roles efficiently
             await fetchApi(`/api/admin/users/${newUser._id}`, {
                 method: "PUT",
                 headers: { Authorization: `Bearer ${token}` },
                 body: JSON.stringify({ roles: formData.roles })
             })
         }
      }

      onCreated()
      onClose()
    } catch (err: any) {
      setError(err.message || "Error al crear usuario")
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
          <h2 className="text-xl font-semibold">Crear Nuevo Usuario</h2>
          <button onClick={onClose} className="rounded-full p-1 hover:bg-muted">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Nombre</label>
            <input
              required
              value={formData.nombre}
              onChange={e => setFormData({ ...formData, nombre: e.target.value })}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              placeholder="Nombre de usuario"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              required
              type="email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              placeholder="email@ejemplo.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Contraseña</label>
            <input
              required
              type="password"
              value={formData.contraseña}
              onChange={e => setFormData({ ...formData, contraseña: e.target.value })}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              placeholder="******"
              minLength={6}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Asignar Roles</label>
            <div className="flex flex-wrap gap-2 rounded-md border p-2">
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
              Crear Usuario
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
