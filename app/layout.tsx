import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "dbbasico - Soluciones Acústicas y de Vibraciones",
    template: "%s | dbbasico"
  },
  description: "Expertos en monitorización de ruido y vibraciones. Descubre nuestra plataforma IRMA y el sistema ACTUA para gestión ambiental.",
  keywords: ["monitorización vibraciones", "control ruido", "sensor IoT", "mantenimiento predictivo", "IRMA", "ACTUA", "acústica"],
  authors: [{ name: "dbbasico Team" }],
  creator: "dbbasico",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.dbbasico.com",
    title: "dbbasico - Tecnología de Monitorización Avanzada",
    description: "Soluciones integrales para la medición y control de vibraciones y ruido en tiempo real.",
    siteName: "dbbasico",
  },
  twitter: {
    card: "summary_large_image",
    title: "dbbasico - IRMA & ACTUA",
    description: "Tecnología punta en sensores de vibración y gestión acústica.",
    creator: "@dbbasico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SiteHeader />
          <Suspense fallback={null}>{children}</Suspense>
          <ScrollToTop />
          <SiteFooter />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
