import type { Metadata } from "next"
import { getSiteUrl } from "@/lib/site"

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: "IRMA - Monitorización Inteligente de Vibraciones",
  description:
    "Plataforma en la nube para gestionar sensores de vibración: datos en tiempo real, alertas, análisis espectral (FFT) e informes técnicos.",
  keywords: [
    "monitorización de vibraciones",
    "sensor acelerómetro",
    "fft",
    "alertas",
    "mantenimiento predictivo",
    "monitorización estructural",
    "IoT",
    "IRMA",
  ],
  metadataBase: siteUrl,
  alternates: {
    canonical: "/irma",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/irma",
    siteName: "dbbasico",
    title: "IRMA | Monitorización de Vibraciones en Tiempo Real",
    description:
      "Visualiza datos de vibración en tiempo real, configura alertas y analiza espectros de frecuencia (FFT) desde web y móvil.",
    images: [
      {
        url: "/images/irma-device.png",
        width: 1200,
        height: 630,
        alt: "IRMA - Monitorización de vibraciones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IRMA | Monitorización de Vibraciones",
    description:
      "Plataforma cloud para sensores de vibración: tiempo real, alertas y análisis FFT.",
    images: ["/images/irma-device.png"],
  },
}

export default function IrmaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
