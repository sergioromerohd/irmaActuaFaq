import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/auth-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { getSiteUrl } from "@/lib/site"
import "./globals.css"

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: {
    default: "dbbasico - Soluciones Acústicas y de Vibraciones",
    template: "%s | dbbasico"
  },
  description:
    "Soluciones técnicas para inspecciones acústicas y monitorización de vibraciones: ACTUA 2.0 (sonometría y actas), IRMA (sensores y análisis en la nube) y CIA (formación y certificación).",
  keywords: [
    "inspección acústica",
    "sonometría",
    "actas técnicas",
    "monitorización de vibraciones",
    "sensor IoT",
    "mantenimiento predictivo",
    "IRMA",
    "ACTUA 2.0",
    "CIA",
    "acústica",
  ],
  authors: [{ name: "dbbasico Team" }],
  creator: "dbbasico",
  metadataBase: siteUrl,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    title: "dbbasico - Soluciones Acústicas y de Vibraciones",
    description:
      "ACTUA 2.0 para análisis de sonometría y actas, IRMA para monitorización de vibraciones y CIA para formación en inspecciones acústicas.",
    siteName: "dbbasico",
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
    title: "dbbasico - ACTUA 2.0, IRMA y CIA",
    description:
      "Aplicaciones y formación para inspecciones acústicas y monitorización de vibraciones.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "dbbasico",
    url: siteUrl.toString().replace(/\/$/, ""),
    logo: new URL("/images/dbbasico-logo.png", siteUrl).toString(),
  }

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "dbbasico",
    url: siteUrl.toString().replace(/\/$/, ""),
  }

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <AuthProvider>
            <SiteHeader />
            <Suspense fallback={null}>{children}</Suspense>
            <ScrollToTop />
            <SiteFooter />
            <Analytics />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
