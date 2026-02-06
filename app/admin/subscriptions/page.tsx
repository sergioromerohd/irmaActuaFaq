"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/components/auth-context"
import { fetchApi } from "@/lib/api"
import { Loader2, Trash2, Plus, CreditCard } from "lucide-react"

interface SubscriptionType {
  _id: string
  nombre: string
  description?: string
  createdAt?: string
}

export default function AdminSubscriptionsPage() {
  const { token } = useAuth()
  const [subs, setSubs] = useState<SubscriptionType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  
  const [formData, setFormData] = useState({ nombre: "", description: "" })
  const [createLoading, setCreateLoading] = useState(false)

  const fetchSubs = async () => {
    try {
      setLoading(true)
      const data = await fetchApi("/api/admin/subscriptions", {
        headers: { Authorization: `Bearer ${token}` }
      })
      setSubs(data)
    } catch (err: any) {
      setError(err.message || "Error cargando suscripciones")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (token) fetchSubs()
  }, [token])

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.nombre.trim()) return

    try {
      setCreateLoading(true)
      await fetchApi("/api/admin/subscriptions", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: JSON.stringify(formData)
      })
      setFormData({ nombre: "", description: "" })
      fetchSubs()
    } catch (err: any) {
      alert(err.message || "Error al crear tipo de suscripción")
    } finally {
      setCreateLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!window.confirm("¿Seguro que quieres eliminar este tipo de suscripción?")) return

    try {
      await fetchApi(`/api/admin/subscriptions/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      })
      fetchSubs()
    } catch (err: any) {
      alert(err.message || "Error eliminando")
    }
  }

  if (loading && subs.length === 0) {
    return (
      <div className="flex justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Gestión de Suscripciones</h1>
        <p className="text-muted-foreground">Configura los tipos de planes de suscripción disponibles.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* List */}
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
               Tipos de Suscripción
            </h3>
            
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

            <div className="space-y-3">
              {subs.map((sub) => (
                <div 
                  key={sub._id}
                  className="flex items-start justify-between p-3 rounded-lg border bg-background hover:bg-muted/50 transition-colors"
                >
                  <div>
                      <div className="font-medium">{sub.nombre}</div>
                      {sub.description && (
                          <div className="text-xs text-muted-foreground">{sub.description}</div>
                      )}
                  </div>
                  <button 
                    onClick={() => handleDelete(sub._id)}
                    className="p-2 text-muted-foreground hover:text-red-600 transition-colors"
                    title="Eliminar"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
              
              {subs.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No hay tipos de suscripción definidos.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Create Form */}
        <div>
          <div className="rounded-xl border bg-card text-card-foreground shadow p-6 sticky top-6">
            <h3 className="text-lg font-semibold mb-4">Crear Nuevo Tipo</h3>
            <form onSubmit={handleCreate} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nombre (ID)</label>
                <input
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  placeholder="ej. gold, enterprise"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Descripción</label>
                 <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Descripción del plan..."
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm min-h-[80px]"
                />
              </div>
              <button
                type="submit"
                disabled={createLoading || !formData.nombre.trim()}
                className="w-full flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
              >
                {createLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
                Crear Tipo
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
