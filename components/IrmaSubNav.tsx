"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Radio } from "lucide-react"

export function IrmaSubNav() {
  const pathname = usePathname()

  const tabs = [
    {
      name: "Plataforma IRMA",
      href: "/irma",
      icon: LayoutDashboard,
      isActive: pathname === "/irma"
    },
    {
      name: "Dispositivo (Seta)",
      href: "/irma/dispositivo",
      icon: Radio,
      isActive: pathname === "/irma/dispositivo"
    }
  ]

  return (
    <div className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-16 z-40">
      <div className="container mx-auto px-4">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                "group inline-flex items-center py-4 border-b-2 text-sm font-medium transition-colors hover:text-accent",
                tab.isActive
                  ? "border-accent text-accent"
                  : "border-transparent text-muted-foreground"
              )}
            >
              <tab.icon className={cn("m-2 h-4 w-4", tab.isActive ? "text-accent" : "text-muted-foreground group-hover:text-accent")} />
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
