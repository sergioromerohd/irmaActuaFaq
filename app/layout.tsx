import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "dbbasico - ACTUA 2.0 & IRMA",
  description: "Información y FAQ de los productos ACTUA 2.0 y IRMA de dbbasico",
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
          <SiteFooter />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
