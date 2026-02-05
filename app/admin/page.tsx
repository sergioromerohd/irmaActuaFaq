export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Bienvenido al panel de administración de IRMA/ACTUA.</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-col gap-2">
            <h3 className="text-sm font-medium text-muted-foreground">Gestión de Usuarios</h3>
            <div className="text-2xl font-bold">Administrar</div>
            <p className="text-xs text-muted-foreground">
              Ver, editar y eliminar usuarios del sistema.
            </p>
          </div>
        </div>
        {/* Add more stats cards here if endpoints available */}
      </div>
    </div>
  )
}
