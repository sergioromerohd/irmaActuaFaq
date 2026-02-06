"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useAuth } from "@/components/auth-context"
import { fetchApi } from "@/lib/api"
import { Users, UserPlus, Shield, CreditCard } from "lucide-react"

export default function AdminDashboardPage() {
  const { token } = useAuth()
  const [stats, setStats] = useState({
    usersCount: 0,
    loading: true
  })

  useEffect(() => {
    if (token) {
      fetchApi("/api/admin/users?limit=1", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        setStats({
          usersCount: res.pagination?.total || 0,
          loading: false
        })
      })
      .catch(err => {
        console.error("Dashboard stats error", err)
        setStats(prev => ({ ...prev, loading: false }))
      })
    }
  }, [token])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Bienvenido al panel de administración de IRMA/ACTUA.</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* User Stats Card */}
        <Link 
          href="/admin/users" 
          className="rounded-xl border bg-card text-card-foreground shadow transition-colors hover:bg-muted/50 block group"
        >
          <div className="p-6 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">Gestión de Usuarios</h3>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
            
            <div className="flex items-baseline gap-2 mt-2">
              <div className="text-3xl font-bold">
                 {stats.loading ? "..." : stats.usersCount}
              </div>
              <span className="text-xs text-muted-foreground">usuarios registrados</span>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              Ver, editar y eliminar usuarios.
            </p>
          </div>
        </Link>

        {/* Roles Management Card */}
        <Link 
          href="/admin/roles" 
          className="rounded-xl border bg-card text-card-foreground shadow transition-colors hover:bg-muted/50 block group"
        >
          <div className="p-6 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">Roles</h3>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </div>
            
            <div className="flex items-center justify-center py-4">
              <Shield className="h-10 w-10 text-muted-foreground/20" />
            </div>
            
            <p className="text-xs text-muted-foreground mt-2">
              Configurar roles y permisos del sistema.
            </p>
          </div>
        </Link>

        {/* Subscriptions Management Card */}
        <Link 
          href="/admin/subscriptions" 
          className="rounded-xl border bg-card text-card-foreground shadow transition-colors hover:bg-muted/50 block group"
        >
          <div className="p-6 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">Suscripciones</h3>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </div>
            
             <div className="flex items-center justify-center py-4">
              <CreditCard className="h-10 w-10 text-muted-foreground/20" />
            </div>
            
            <p className="text-xs text-muted-foreground mt-2">
              Gestionar tipos y planes de suscripción.
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}
