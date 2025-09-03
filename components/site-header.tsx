"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => (pathname === href ? "text-primary" : "text-foreground/80 hover:text-primary")

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
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
            <Link href="/" className={`text-sm font-medium transition-colors ${isActive("/")}`}>Inicio</Link>
            <Link href="/actua" className={`text-sm font-medium transition-colors ${isActive("/actua")}`}>
              ACTUA 2.0
            </Link>
            <Link href="/irma" className={`text-sm font-medium transition-colors ${isActive("/irma")}`}>IRMA</Link>
          </nav>

          <div className="flex items-center gap-2">
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
              className={`block py-2 text-sm font-medium ${isActive("/")}`}
              onClick={() => setOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/actua"
              className={`block py-2 text-sm font-medium ${isActive("/actua")}`}
              onClick={() => setOpen(false)}
            >
              ACTUA 2.0
            </Link>
            <Link
              href="/irma"
              className={`block py-2 text-sm font-medium ${isActive("/irma")}`}
              onClick={() => setOpen(false)}
            >
              IRMA
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
