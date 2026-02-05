"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu"
import { appsNavList } from "@/lib/apps-data"
import { DynamicIcon } from "@/components/DynamicIcon"
import { User, LogOut, Settings, LayoutDashboard } from "lucide-react"
import { useAuth } from "@/components/auth-context"
import {
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"

function UserNav() {
  const { user, logout, isAdmin } = useAuth()

  if (!user) {
    return (
      <Link href="/login" className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted transition-colors" title="Iniciar sesión">
        <User className="h-5 w-5" />
      </Link>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted transition-colors outline-none">
          <User className="h-5 w-5 text-primary" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.nombre}</p>
            <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {isAdmin && (
          <>
            <DropdownMenuItem asChild>
              <Link href="/admin" className="cursor-pointer">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Panel Admin
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuItem onClick={logout} className="cursor-pointer text-red-600 focus:text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [appsExpanded, setAppsExpanded] = useState(false)
  const [progress, setProgress] = useState(0)
  const [elevated, setElevated] = useState(false)

  useEffect(() => {
    const calc = () => {
      const doc = document.documentElement
      const total = Math.max(0, doc.scrollHeight - window.innerHeight)
      const current = Math.min(total, Math.max(0, window.scrollY))
      const pct = total === 0 ? 0 : (current / total) * 100
      setProgress(pct)
      setElevated(current > 2)
    }
    calc()
    window.addEventListener("scroll", calc, { passive: true })
    window.addEventListener("resize", calc)
    return () => {
      window.removeEventListener("scroll", calc)
      window.removeEventListener("resize", calc)
    }
  }, [])

  const isActive = (href: string) => (pathname === href || pathname?.startsWith(href + "/") ? "text-primary" : "text-foreground/80 hover:text-primary")

  return (
    <header
      className={`sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b transition-shadow ${
        elevated ? "shadow-sm" : "shadow-none"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/dbbasico-logo.png"
              alt="dbbasico - Servicios de Acústica SL"
              width={160}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className={`text-sm font-medium transition-colors ${isActive("/") === "text-primary" && pathname === "/" ? "text-primary" : "text-foreground/80 hover:text-primary"}`}>Inicio</Link>
            <Link href="/actua" className={`text-sm font-medium transition-colors ${isActive("/actua")}`}>
              ACTUA 2.0
            </Link>
            
            {/* IRMA Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium transition-colors outline-none ${isActive("/irma")}`}>
                IRMA <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52">
                <DropdownMenuItem asChild>
                  <Link href="/irma" className="cursor-pointer">Sistema IRMA</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/irma/dispositivo" className="cursor-pointer">Dispositivo (Seta)</Link>
                </DropdownMenuItem>
                
                {/* Aplicaciones - Submenú colapsable */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="cursor-pointer">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-app-primary"></span>
                      Aplicaciones
                    </span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="w-48">
                      {appsNavList.map((app) => (
                        <DropdownMenuItem key={app.slug} asChild>
                          <Link href={`/irma/apps/${app.slug}`} className="cursor-pointer flex items-center gap-2">
                            <DynamicIcon name={app.iconName} className="h-4 w-4 text-app-primary" />
                            {app.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/cia" className={`text-sm font-medium transition-colors ${isActive("/cia")}`}>CIA</Link>
            <Link href="/contacto" className={`text-sm font-medium transition-colors ${isActive("/contacto")}`}>Contacto</Link>
          </nav>

          <div className="flex items-center gap-2">
            <UserNav />
            <ThemeToggle />
            <button
              aria-label="Abrir menú"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-muted"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-3 grid gap-2">
            <Link
              href="/"
              className="block py-2 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/actua"
              className="block py-2 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              ACTUA 2.0
            </Link>
            
            <div className="py-2">
               <div className="text-sm font-medium text-foreground/80 mb-2">IRMA</div>
               <div className="pl-4 border-l-2 border-muted space-y-2">
                  <Link
                    href="/irma"
                    className="block text-sm text-foreground/70 hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    Sistema IRMA
                  </Link>
                  <Link
                    href="/irma/dispositivo"
                    className="block text-sm text-foreground/70 hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    Dispositivo (Seta)
                  </Link>
                  
                  {/* Aplicaciones - Colapsable en móvil */}
                  <button
                    onClick={() => setAppsExpanded(!appsExpanded)}
                    className="flex items-center justify-between w-full text-xs font-semibold text-muted-foreground mt-3 mb-1 hover:text-app-primary transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-app-primary"></span>
                      Aplicaciones
                    </span>
                    <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${appsExpanded ? 'rotate-90' : ''}`} />
                  </button>
                    {typeof window !== "undefined" &&
                    (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") && (
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${appsExpanded ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="pl-4 border-l-2 border-app-primary/30 space-y-2 py-1">
                        {appsNavList.map((app) => (
                        <Link
                          key={app.slug}
                          href={`/irma/apps/${app.slug}`}
                          className="flex items-center gap-2 text-sm text-foreground/70 hover:text-app-primary transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          <DynamicIcon name={app.iconName} className="h-3.5 w-3.5" />
                          {app.name}
                        </Link>
                        ))}
                      </div>
                      </div>
                    )}
               </div>
            </div>

            <Link
              href="/cia"
              className="block py-2 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              CIA
            </Link>
            <Link
              href="/contacto"
              className="block py-2 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
      {/* Scroll progress bar */}
      <progress
        className="scroll-progress w-full h-0.5"
        value={progress}
        max={100}
        aria-hidden
      />
    </header>
  )
}
