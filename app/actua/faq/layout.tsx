import type { Metadata } from "next"
import { getSiteUrl } from "@/lib/site"

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: "ACTUA 2.0 FAQ - Tutoriales y Preguntas Frecuentes",
  description:
    "Ayuda y tutoriales de ACTUA 2.0: análisis de sonometría, generación de actas, formatos de entrada y exportación, normativa y soporte.",
  metadataBase: siteUrl,
  alternates: {
    canonical: "/actua/faq",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/actua/faq",
    siteName: "dbbasico",
    title: "ACTUA 2.0 FAQ | Tutoriales y Soporte",
    description:
      "Respuestas sobre actas técnicas, formatos (CSV/Excel), normativa y uso de ACTUA 2.0.",
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
    title: "ACTUA 2.0 FAQ",
    description:
      "Tutoriales y preguntas frecuentes sobre análisis de sonometría y actas técnicas.",
    images: ["/images/actua-sonometer.png"],
  },
}

export default function ActuaFaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
