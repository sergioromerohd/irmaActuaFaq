"use client"

import { AppLandingTemplate } from "@/components/AppLandingTemplate"
import type { AppData } from "@/lib/apps-data"
import { DynamicIcon } from "@/components/DynamicIcon"

interface Props {
  app: AppData
}

export function AppLandingClient({ app }: Props) {
  // Convertir los iconNames a elementos React
  const featuresWithIcons = app.features.map(feature => ({
    ...feature,
    icon: <DynamicIcon name={feature.iconName} className="w-6 h-6" />
  }))

  return (
    <AppLandingTemplate
      name={app.name}
      tagline={app.tagline}
      description={app.description}
      heroImage={app.heroImage}
      youtubeUrl={app.youtubeUrl}
      features={featuresWithIcons}
    />
  )
}
