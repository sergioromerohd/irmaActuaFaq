import * as LucideIcons from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface DynamicIconProps {
  name: string
  className?: string
}

export function DynamicIcon({ name, className }: DynamicIconProps) {
  // Obtener el icono del objeto de iconos de Lucide
  const Icon = (LucideIcons as Record<string, LucideIcon>)[name]
  
  if (!Icon) {
    // Fallback a un icono genérico si no se encuentra
    return <LucideIcons.Circle className={className} />
  }

  return <Icon className={className} />
}
