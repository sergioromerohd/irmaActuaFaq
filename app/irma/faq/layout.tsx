import type { Metadata } from "next"
import { getSiteUrl } from "@/lib/site"

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: "IRMA FAQ - Preguntas Frecuentes",
  description:
    "Preguntas frecuentes sobre IRMA: sensores (setas), monitorización en tiempo real, alertas, análisis FFT, instalación y configuración.",
  metadataBase: siteUrl,
  alternates: {
    canonical: "/irma/faq",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/irma/faq",
    siteName: "dbbasico",
    title: "IRMA FAQ | Ayuda y Guía de Uso",
    description:
      "Respuestas sobre sensores, monitorización, alertas y análisis en la plataforma IRMA (web y móvil).",
    images: [
      {
        url: "/images/irma-logo.png",
        width: 1200,
        height: 630,
        alt: "IRMA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IRMA FAQ | Preguntas Frecuentes",
    description:
      "Ayuda sobre sensores, monitorización en tiempo real, alertas y análisis FFT.",
    images: ["/images/irma-logo.png"],
  },
}

export default function IrmaFaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
