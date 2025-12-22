import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Plataforma IRMA - Monitorización de Vibraciones en la Nube",
  description: "Gestione sus sensores de vibración en tiempo real. Análisis espectral, alertas inteligentes y mantenimiento predictivo con la plataforma IRMA.",
  keywords: ["plataforma vibraciones", "fft online", "monitorización remota", "mantenimiento predictivo", "ISO 8041", "nube iot"],
  openGraph: {
    title: "Plataforma IRMA | Control Total de Vibraciones",
    description: "Visualice y analice datos de vibración desde cualquier lugar. La solución definitiva para ingeniería civil e industrial.",
    images: [
      {
        url: "/images/irma-dashboard-preview.jpg", // Placeholder image path
        width: 1200,
        height: 630,
        alt: "Dashboard de Plataforma IRMA",
      },
    ],
  },
}

export default function IrmaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
