import type { Metadata } from "next"
import { getSiteUrl } from "@/lib/site"

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: "ACTUA 2.0 - Análisis de Sonometría y Actas Técnicas",
  description:
    "Aplicación web para inspecciones acústicas: analiza sonometría y genera actas técnicas con cálculos precisos para técnicos y agentes de policía.",
  keywords: [
    "sonometría",
    "actas técnicas",
    "análisis acústico",
    "ruido ambiental",
    "inspección acústica",
    "ACTUA 2.0",
  ],
  metadataBase: siteUrl,
  alternates: {
    canonical: "/actua",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/actua",
    siteName: "dbbasico",
    title: "ACTUA 2.0 | Análisis Acústico Profesional",
    description:
      "Herramienta profesional para análisis de mediciones acústicas y generación de actas para inspecciones.",
    images: [
      {
        url: "/images/actua-sonometer.png",
        width: 1200,
        height: 630,
        alt: "ACTUA 2.0",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACTUA 2.0 | Análisis de Sonometría",
    description:
      "Análisis acústico y generación de actas técnicas para inspecciones profesionales.",
    images: ["/images/actua-sonometer.png"],
  },
}

export default function ActuaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
