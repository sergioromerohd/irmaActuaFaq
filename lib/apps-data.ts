export interface FeatureCard {
  title: string
  subtitle: string
  description: string
  iconName: string // Nombre del icono para renderizar dinámicamente
}

export interface AppData {
  slug: string
  name: string
  tagline: string
  description: string
  heroImage?: string
  youtubeUrl?: string
  iconName: string
  features: FeatureCard[]
  metadata: {
    title: string
    description: string
    keywords: string[]
  }
}

export const appsData: AppData[] = [
  {
    slug: "soundbreak",
    name: "SoundBreak",
    tagline: "monitoreo y analisis del indice SBI entre el altavoz y la pared",
    description: "Detecta, analiza y Gestiona el estado de la instalacion del equipo y como esta afectando al indice SBI entre el altavoz y la pared.",
    heroImage: "/images/apps/soundbreak-hero.png",
    youtubeUrl: "https://youtu.be/san3DlDB60s",
    iconName: "Volume2",
    features: [
      {
        title: "Visualizacion Simple",
        subtitle: "Interfaz intuitiva",
        description: "Panel de control claro y fácil de usar, con colores intuitivos y UX optimizada para rápida interpretación.",
        iconName: "Monitor"
      },
      
    ],
    metadata: {
      title: "SoundBreak",
      description: "Monitorización de ruido en tiempo real. Detecta y analiza eventos sonoros para gestión acústica inteligente.",
      keywords: ["SoundBreak", "monitorización ruido", "análisis acústico", "IRMA", "eventos sonoros", "gestión ruido"]
    }
  },
  {
    slug: "livecomfort",
    name: "LiveComfort",
    tagline: "Control de confort ambiental",
    description: "Monitoriza y optimiza las condiciones ambientales de cualquier espacio. LiveComfort garantiza el bienestar de las personas mediante análisis inteligente de temperatura, humedad y calidad del aire.",
    heroImage: "/images/apps/livecomfort-hero.png",
    youtubeUrl: "",
    iconName: "Thermometer",
    features: [
      {
        title: "Temperatura Óptima",
        subtitle: "Control térmico preciso",
        description: "Monitorización continua de temperatura con alertas configurables para mantener el confort ideal.",
        iconName: "Thermometer"
      },
      
    ],
    metadata: {
      title: "LiveComfort",
      description: "Control de confort ambiental en tiempo real. Monitoriza temperatura, humedad y calidad del aire.",
      keywords: ["LiveComfort", "confort ambiental", "calidad aire", "IRMA", "temperatura", "humedad", "bienestar"]
    }
  },
  {
    slug: "windload",
    name: "WindLoad",
    tagline: "Análisis de carga de viento",
    description: "Monitoriza condiciones eólicas y evalúa su impacto estructural en tiempo real. WindLoad proporciona datos críticos para la seguridad de edificios, grúas, andamios y estructuras temporales.",
    heroImage: "/images/apps/windload-hero.png",
    youtubeUrl: "",
    iconName: "Wind",
    features: [
      {
        title: "Velocidad del Viento",
        subtitle: "Medición precisa",
        description: "Anemómetros de alta precisión que capturan velocidad instantánea, ráfagas y promedios en tiempo real.",
        iconName: "Wind"
      }
    ],
    metadata: {
      title: "WindLoad",
      description: "Análisis de carga de viento para estructuras. Monitorización en tiempo real de velocidad y dirección del viento.",
      keywords: ["WindLoad", "carga viento", "análisis estructural", "IRMA", "velocidad viento", "seguridad estructural"]
    }
  },
  {
    slug: "matchguard",
    name: "MatchGuard",
    tagline: "Seguridad en eventos deportivos",
    description: "Sistema integral de monitorización y seguridad para estadios, conciertos y grandes eventos. MatchGuard combina análisis acústico, control de aforo y coordinación de equipos para garantizar experiencias seguras.",
    heroImage: "/images/apps/matchguard-hero.png",
    youtubeUrl: "",
    iconName: "Shield",
    features: [
      {
        title: "Detección de Incidentes",
        subtitle: "IA en tiempo real",
        description: "Algoritmos que identifican patrones sonoros asociados a situaciones de riesgo o conflicto.",
        iconName: "Siren"
      }
    ],
    metadata: {
      title: "MatchGuard",
      description: "Seguridad en eventos deportivos. Monitorización acústica y ambiental para estadios y recintos.",
      keywords: ["MatchGuard", "seguridad eventos", "estadios", "IRMA", "monitorización deportiva", "control masas"]
    }
  }
]

// Helper para obtener app por slug
export function getAppBySlug(slug: string): AppData | undefined {
  return appsData.find(app => app.slug === slug)
}

// Helper para obtener todos los slugs (para generateStaticParams)
export function getAllAppSlugs(): string[] {
  return appsData.map(app => app.slug)
}

// Lista simple para navegación
export const appsNavList = appsData.map(app => ({
  name: app.name,
  slug: app.slug,
  iconName: app.iconName,
  description: app.tagline
}))
