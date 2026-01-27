import type { Metadata } from "next"
import { AppSubNav } from "@/components/AppSubNav"

export const metadata: Metadata = {
  title: {
    template: "%s | Aplicaciones IRMA",
    default: "Aplicaciones IRMA"
  },
  description: "Aplicaciones especializadas del ecosistema IRMA para monitorización ambiental, ruido, confort y seguridad.",
  keywords: [
    "IRMA aplicaciones",
    "SoundBreak",
    "LiveComfort", 
    "WindLoad",
    "MatchGuard",
    "monitorización ruido",
    "confort ambiental",
    "carga viento",
    "seguridad eventos"
  ],
  openGraph: {
    title: "Aplicaciones IRMA | dbbasico",
    description: "Suite de aplicaciones especializadas del ecosistema IRMA",
    type: "website",
  },
}

export default function AppsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AppSubNav />
      <main className="min-h-screen">
        {children}
      </main>
    </>
  )
}
