import type { Metadata } from "next"
import { getSiteUrl } from "@/lib/site"

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: "Contacto - dbbasico",
  description:
    "Contacta con dbbasico para consultas sobre ACTUA 2.0, IRMA, CIA y servicios de acústica y vibraciones.",
  keywords: ["contacto", "dbbasico", "acústica", "vibraciones", "ACTUA", "IRMA"],
  metadataBase: siteUrl,
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/contacto",
    siteName: "dbbasico",
    title: "Contacto | dbbasico",
    description:
      "Formulario, email y teléfonos para información sobre ACTUA 2.0, IRMA y formación CIA.",
    images: [
      {
        url: "/images/dbbasico-logo.png",
        width: 1200,
        height: 630,
        alt: "dbbasico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | dbbasico",
    description:
      "Ponte en contacto para información sobre ACTUA 2.0, IRMA y CIA.",
    images: ["/images/dbbasico-logo.png"],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
