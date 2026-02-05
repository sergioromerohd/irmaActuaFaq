"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/components/auth-context"
import { fetchApi } from "@/lib/api"
import { Loader2, Trash2, Edit, ChevronLeft, ChevronRight, Search } from "lucide-react"
import { UserEditModal } from "./user-edit-modal"

interface User {
  _id: string
  nombre: string
  email: string
  roles: any[]
  subscriptionStatus: string
  subscriptionPlan: string
  subscriptionEndDate: string
  createdAt: string
}

export default function AdminUsersPage() {
  const { token } = useAuth()
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalUsers, setTotalUsers] = useState(0)
  
  // Edit State
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const fetchUsers = async (pageNum: number) => {
    setLoading(true)
    setError("")
    try {
      if (!token) return
      
      const response = await fetchApi(`/api/admin/users?page=${pageNum}&limit=10`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      
      setUsers(response.data)
      setTotalPages(response.pagination.pages)
      setTotalUsers(response.pagination.total)
    } catch (err: any) {
      setError(err.message || "Error al cargar usuarios")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers(page)
  }, [page, token])

  const handleDelete = async (id: string) => {
    if (!confirm("¿Estás seguro de que quieres eliminar este usuario?")) return

    try {
      await fetchApi(`/api/admin/users/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      })
      // Refresh list
      fetchUsers(page)
    } catch (err: any) {
      alert(err.message || "Error al eliminar usuario")
    }
  }

  const handleEdit = (user: User) => {
    setEditingUser(user)
    setIsEditModalOpen(true)
  }

  const handleUserUpdated = () => {
    setIsEditModalOpen(false)
    setEditingUser(null)
    fetchUsers(page)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Usuarios</h1>
          <p className="text-muted-foreground">Gestión de usuarios y permisos.</p>
        </div>
        <div className="flex items-center gap-2">
           <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
             Total: {totalUsers}
           </span>
        </div>
      </div>

      <div className="rounded-md border bg-card">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Nombre / Email</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Roles</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Suscripción</th>
                <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Acciones</th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {loading ? (
                <tr>
                  <td colSpan={4} className="h-24 text-center">
                    <div className="flex justify-center items-center">
                      <Loader2 className="h-6 w-6 animate-spin text-primary" />
                    </div>
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={4} className="h-24 text-center text-red-500">
                    {error}
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={4} className="h-24 text-center text-muted-foreground">
                    No se encontraron usuarios.
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user._id} className="border-b transition-colors hover:bg-muted/50">
                    <td className="p-4 align-middle">
                      <div className="font-medium">{user.nombre}</div>
                      <div className="text-xs text-muted-foreground">{user.email}</div>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex gap-1 flex-wrap">
                        {user.roles.map((role: any, i) => {
                          const roleName = typeof role === 'string' ? role : role.nombre
                          return (
                            <span key={i} className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${roleName === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-secondary text-secondary-foreground'}`}>
                              {roleName}
                            </span>
                          )
                        })}
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex flex-col gap-1">
                        <span className={`inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                            user.subscriptionStatus === 'premium' ? 'bg-green-100 text-green-800' : 
                            user.subscriptionStatus === 'trial' ? 'bg-blue-100 text-blue-800' : 
                            'bg-gray-100 text-gray-800'
                        }`}>
                          {user.subscriptionStatus || 'free'}
                        </span>
                        {user.subscriptionEndDate && (
                          <span className="text-[10px] text-muted-foreground">
                            Exp: {new Date(user.subscriptionEndDate).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-4 align-middle text-right">
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => handleEdit(user)}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-md border bg-background hover:bg-muted"
                          title="Editar"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(user._id)}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-md border bg-background hover:bg-red-50 hover:text-red-600"
                          title="Eliminar"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-end space-x-2 py-4">
          <button
            className="inline-flex h-9 items-center justify-center rounded-md border bg-background px-3 text-sm font-medium hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1 || loading}
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Anterior
          </button>
          <div className="text-sm font-medium">
            Página {page} de {totalPages}
          </div>
          <button
            className="inline-flex h-9 items-center justify-center rounded-md border bg-background px-3 text-sm font-medium hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages || loading}
          >
            Siguiente
            <ChevronRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && editingUser && (
        <UserEditModal 
          user={editingUser} 
          isOpen={isEditModalOpen} 
          onClose={() => setIsEditModalOpen(false)}
          onUpdate={handleUserUpdated}
        />
      )}
    </div>
  )
}
