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
    youtubeUrl: "https://youtu.be/EQJjehLiSrI?si=D7WuPzm2vI0I4yJX",
    iconName: "Volume2",
    features: [
      {
        title: "Validación de Anclajes",
        subtitle: "Índice SBI",
        description: "Permite validar anclajes y sistemas de fijación de altavoces mediante un índice propio que cuantifica la transmisión vibratoria estructural.",
        iconName: "Anchor"
      },
      {
        title: "Evaluación de Molestia",
        subtitle: "Clasificación del impacto",
        description: "Determina el nivel de molestia estructural generado en el receptor, facilitando una interpretación clara del comportamiento del sistema.",
        iconName: "Gauge"
      },
      {
        title: "Base Predictiva",
        subtitle: "Ensayos y algoritmo propio",
        description: "Integra un algoritmo desarrollado a partir de múltiples ensayos para anticipar el comportamiento del sistema en el receptor.",
        iconName: "BrainCircuit"
      },
      {
        title: "Experiencia de Uso Ágil",
        subtitle: "Navegación sencilla",
        description: "Diseñada para que técnicos e instaladores accedan rápidamente a las mediciones, resultados y conclusiones sin complejidad operativa.",
        iconName: "Navigation"
      },
      {
        title: "Lectura Rápida",
        subtitle: "Indicadores directos",
        description: "Muestra la información clave mediante indicadores visuales que permiten evaluar el comportamiento del anclaje de un solo vistazo.",
        iconName: "Eye"
      }

      
    ],
    metadata: {
      title: "SoundBreak",
      description: "Monitorización de ruido en tiempo real. Detecta y analiza eventos sonoros para gestión acústica inteligente.",
      keywords: ["SoundBreak", "monitorización ruido", "análisis acústico", "IRMA", "eventos sonoros", "gestión ruido"]
    }
  },
  {
    slug: "WallFit",
    name: "WallFit",
    tagline: "Identificacion de Paredes de Edificios",
    description: "WallFit identifica y analiza las características estructurales de las paredes de edificios mediante sensores avanzados de vibración.",
    heroImage: "/images/apps/wallfit-hero.png",
    youtubeUrl: "",
    iconName: "Activity",
    features: [
      {
        title: "Identificación por Impacto",
        subtitle: "Ensayo no invasivo",
        description: "Permite identificar el tipo de pared mediante un impacto controlado y el análisis de su respuesta vibratoria.",
        iconName: "ScanSearch"
      },
      {
        title: "Interfaz Intuitiva",
        subtitle: "Visualización clara",
        description: "Presenta los resultados de forma sencilla para facilitar la interpretación técnica durante la inspección.",
        iconName: "LayoutDashboard"
      },
      {
        title: "Medición Rápida",
        subtitle: "Resultados en campo",
        description: "Facilita una identificación ágil directamente sobre el elemento constructivo, sin necesidad de ensayos destructivos.",
        iconName: "Timer"
      }
    ],
    metadata: {
      title: "WallFit",
      description: "Identificacion de paredes de edificios mediante análisis de vibración.",
      keywords: ["WallFit", "monitorización vibración", "IRMA",  "infraestructuras"]
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
        title: "Evaluación Continua",
        subtitle: "Medición en forjado",
        description: "Realiza mediciones continuas sobre el forjado para evaluar el comportamiento vibratorio del espacio en condiciones reales de uso.",
        iconName: "Activity"
      },
      {
        title: "Interfaz Clara",
        subtitle: "Resultados comprensibles",
        description: "Presenta los resultados de forma sencilla para facilitar la interpretación técnica del confort vibratorio.",
        iconName: "MonitorCheck"
      },
      {
        title: "Viviendas y actividad",
        subtitle: "Ámbitos de aplicación",
        description: "Diseñada para analizar el confort vibratorio tanto en recintos residenciales como en locales con actividad.",
        iconName: "Home"
      }
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
    youtubeUrl: "https://youtu.be/BaSypoH3UcQ?si=Jlpf8igxxMBTRYKt",
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
  },
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