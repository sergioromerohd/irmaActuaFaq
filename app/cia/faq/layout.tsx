import type { Metadata } from "next"
import { getSiteUrl } from "@/lib/site"

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: "CIA FAQ - Cursos de Inspecciones Acústicas",
  description:
    "Preguntas frecuentes sobre CIA: niveles de certificación, metodología, duración, modalidad y jornadas especializadas.",
  metadataBase: siteUrl,
  alternates: {
    canonical: "/cia/faq",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/cia/faq",
    siteName: "dbbasico",
    title: "CIA FAQ | Certificaciones y Metodología",
    description:
      "Respuestas sobre niveles (I-IV), duración, modalidad presencial y jornadas especializadas del programa CIA.",
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
    title: "CIA FAQ",
    description:
      "Dudas frecuentes sobre certificaciones, metodología y jornadas del programa CIA.",
    images: ["/images/dbbasico-logo.png"],
  },
}

export default function CiaFaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
