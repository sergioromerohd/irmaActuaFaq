import type { Metadata } from "next"
import { getSiteUrl } from "@/lib/site"

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: "CIA - Cursos de Inspecciones Acústicas",
  description:
    "Formación presencial en inspecciones acústicas con certificación profesional: 4 niveles y jornadas especializadas para agentes de policía y personal técnico.",
  keywords: [
    "cursos inspecciones acústicas",
    "formación acústica",
    "certificación acústica",
    "policía",
    "sonometría",
    "CIA",
  ],
  metadataBase: siteUrl,
  alternates: {
    canonical: "/cia",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/cia",
    siteName: "dbbasico",
    title: "CIA | Cursos de Inspecciones Acústicas",
    description:
      "Cursos presenciales con certificación: niveles progresivos (I-IV) y jornadas temáticas para casos especiales.",
    images: [
      {
        url: "/images/dbbasico-logo.png",
        width: 1200,
        height: 630,
        alt: "CIA - dbbasico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CIA | Cursos de Inspecciones Acústicas",
    description:
      "Formación presencial con certificación (niveles I-IV) y jornadas especializadas.",
    images: ["/images/dbbasico-logo.png"],
  },
}

export default function CiaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
