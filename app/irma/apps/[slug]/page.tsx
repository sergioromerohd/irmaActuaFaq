import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAppBySlug, getAllAppSlugs } from "@/lib/apps-data"
import { AppLandingClient } from "./AppLandingClient"

interface Props {
  params: Promise<{ slug: string }>
}

// Genera las rutas estáticas para todas las apps
export async function generateStaticParams() {
  return getAllAppSlugs().map((slug) => ({
    slug,
  }))
}

// Genera metadata dinámica para SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const app = getAppBySlug(slug)
  
  if (!app) {
    return {
      title: "Aplicación no encontrada",
    }
  }

  return {
    title: app.metadata.title,
    description: app.metadata.description,
    keywords: app.metadata.keywords,
    openGraph: {
      title: `${app.metadata.title} | Aplicaciones IRMA`,
      description: app.metadata.description,
      type: "website",
    },
  }
}

export default async function AppPage({ params }: Props) {
  const { slug } = await params
  const app = getAppBySlug(slug)
  
  if (!app) {
    notFound()
  }

  return <AppLandingClient app={app} />
}
