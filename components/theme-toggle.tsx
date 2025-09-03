"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = (theme ?? resolvedTheme) === "dark"

  return (
    <button
      aria-label="Cambiar tema"
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-muted"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
