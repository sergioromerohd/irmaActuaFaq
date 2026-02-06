"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/components/auth-context"
import { fetchApi } from "@/lib/api"
import { Loader2, Trash2, Plus, Shield } from "lucide-react"

interface Role {
  _id: string
  nombre: string
  createdAt?: string
}

export default function AdminRolesPage() {
  const { token } = useAuth()
  const [roles, setRoles] = useState<Role[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  
  const [newRoleName, setNewRoleName] = useState("")
  const [createLoading, setCreateLoading] = useState(false)

  const fetchRoles = async () => {
    try {
      setLoading(true)
      const data = await fetchApi("/api/admin/roles", {
        headers: { Authorization: `Bearer ${token}` }
      })
      // Backend returns array of roles directly
      setRoles(data)
    } catch (err: any) {
      setError(err.message || "Error cargando roles")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (token) fetchRoles()
  }, [token])

  const handleCreateRole = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newRoleName.trim()) return

    try {
      setCreateLoading(true)
      await fetchApi("/api/admin/roles", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: JSON.stringify({ nombre: newRoleName })
      })
      setNewRoleName("")
      fetchRoles()
    } catch (err: any) {
      alert(err.message || "Error al crear rol")
    } finally {
      setCreateLoading(false)
    }
  }

  const handleDeleteRole = async (id: string) => {
    if (!window.confirm("¿Seguro que quieres eliminar este rol?")) return

    try {
      await fetchApi(`/api/admin/roles/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      })
      fetchRoles()
    } catch (err: any) {
      alert(err.message || "Error eliminando rol")
    }
  }

  if (loading && roles.length === 0) {
    return (
      <div className="flex justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Gestión de Roles</h1>
        <p className="text-muted-foreground">Crea y administra los roles disponibles en el sistema.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* List of Roles */}
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Roles Existentes
            </h3>
            
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

            <div className="space-y-2">
              {roles.map((role) => (
                <div 
                  key={role._id}
                  className="flex items-center justify-between p-3 rounded-lg border bg-background hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium">{role.nombre}</span>
                  <button 
                    onClick={() => handleDeleteRole(role._id)}
                    className="p-2 text-muted-foreground hover:text-red-600 transition-colors"
                    title="Eliminar Rol"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
              
              {roles.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No hay roles definidos.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Create Role Form */}
        <div>
          <div className="rounded-xl border bg-card text-card-foreground shadow p-6 sticky top-6">
            <h3 className="text-lg font-semibold mb-4">Crear Nuevo Rol</h3>
            <form onSubmit={handleCreateRole} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nombre del Rol</label>
                <input
                  value={newRoleName}
                  onChange={(e) => setNewRoleName(e.target.value)}
                  placeholder="ej. editor, soporte"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  El nombre debe ser único.
                </p>
              </div>
              <button
                type="submit"
                disabled={createLoading || !newRoleName.trim()}
                className="w-full flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
              >
                {createLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
                Crear Rol
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
