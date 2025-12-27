import type { Metadata } from "next"
import { getSiteUrl } from "@/lib/site"

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: "Sensor IRMA (Seta) - Acelerómetro Triaxial IoT",
  description:
    "Sensor de vibraciones inalámbrico (seta IRMA) para monitorización continua. Acelerómetro triaxial MEMS para infraestructura y maquinaria.",
  keywords: [
    "sensor de vibración",
    "acelerómetro triaxial",
    "MEMS",
    "IoT industrial",
    "monitorización estructural",
    "monitorización de maquinaria",
    "IRMA",
    "dbbasico",
  ],
  metadataBase: siteUrl,
  alternates: {
    canonical: "/irma/dispositivo",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/irma/dispositivo",
    siteName: "dbbasico",
    title: "IRMA Seta | Sensor de Vibraciones IoT",
    description:
      "Sensor robusto para monitorización continua de vibraciones. Integración con la plataforma IRMA en la nube.",
    images: [
      {
        url: "/images/setablancaSF.png",
        width: 1200,
        height: 630,
        alt: "Sensor IRMA Seta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IRMA Seta | Sensor de Vibraciones",
    description:
      "Acelerómetro triaxial para monitorización continua e integración cloud con IRMA.",
    images: ["/images/setablancaSF.png"],
  },
}

export default function IrmaDeviceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
