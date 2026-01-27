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
    tagline: "Monitorización de ruido en tiempo real",
    description: "Detecta, analiza y gestiona eventos sonoros con precisión. SoundBreak transforma datos acústicos en información accionable para una gestión inteligente del ruido ambiental.",
    heroImage: "/images/apps/soundbreak-hero.png",
    youtubeUrl: "https://www.youtube.com/watch?v=AlRrmLhkNPY",
    iconName: "Volume2",
    features: [
      {
        title: "Monitorización 24/7",
        subtitle: "Vigilancia continua",
        description: "Sistema de monitorización activo las 24 horas del día, los 7 días de la semana, capturando cada evento sonoro relevante.",
        iconName: "Clock"
      },
      {
        title: "Detección Inteligente",
        subtitle: "IA aplicada al sonido",
        description: "Algoritmos avanzados que identifican y clasifican automáticamente tipos de ruido y sus fuentes de origen.",
        iconName: "Volume2"
      },
      {
        title: "Detección Inteligente",
        subtitle: "IA aplicada al sonido",
        description: "Algoritmos avanzados que identifican y clasifican automáticamente tipos de ruido y sus fuentes de origen.",
        iconName: "Volume2"
      },
      {
        title: "Detección Inteligente",
        subtitle: "IA aplicada al sonido",
        description: "Algoritmos avanzados que identifican y clasifican automáticamente tipos de ruido y sus fuentes de origen.",
        iconName: "Volume2"
      },
      {
        title: "Detección Inteligente",
        subtitle: "IA aplicada al sonido",
        description: "Algoritmos avanzados que identifican y clasifican automáticamente tipos de ruido y sus fuentes de origen.",
        iconName: "Volume2"
      },
      
      {
        title: "Alertas en Tiempo Real",
        subtitle: "Notificaciones instantáneas",
        description: "Recibe alertas inmediatas cuando se superan los umbrales establecidos o se detectan patrones anómalos.",
        iconName: "Bell"
      },
      {
        title: "Análisis Detallado",
        subtitle: "Métricas y estadísticas",
        description: "Visualiza tendencias, genera informes y analiza datos históricos para toma de decisiones informada.",
        iconName: "BarChart3"
      },
      {
        title: "Conectividad Total",
        subtitle: "Integración IoT",
        description: "Conexión seamless con dispositivos IRMA y otros sensores del ecosistema para cobertura completa.",
        iconName: "Wifi"
      },
      {
        title: "Cumplimiento Normativo",
        subtitle: "Certificación garantizada",
        description: "Datos validados según normativas vigentes para informes oficiales y certificaciones acústicas.",
        iconName: "Shield"
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
      {
        title: "Humedad Relativa",
        subtitle: "Equilibrio perfecto",
        description: "Seguimiento de niveles de humedad para prevenir problemas de salud y deterioro de materiales.",
        iconName: "Droplets"
      },
      {
        title: "Calidad del Aire",
        subtitle: "Respira mejor",
        description: "Análisis de partículas, CO2 y otros contaminantes para garantizar ambientes saludables.",
        iconName: "Wind"
      },
      {
        title: "Índice de Confort",
        subtitle: "Métrica unificada",
        description: "Algoritmo propietario que combina todas las variables en un índice de bienestar fácil de interpretar.",
        iconName: "Gauge"
      },
      {
        title: "App Móvil",
        subtitle: "Control desde cualquier lugar",
        description: "Accede a todos los datos y configuraciones desde tu smartphone con nuestra aplicación nativa.",
        iconName: "Smartphone"
      },
      {
        title: "Predicciones",
        subtitle: "Anticípate al cambio",
        description: "Machine learning para predecir condiciones futuras y optimizar sistemas de climatización.",
        iconName: "TrendingUp"
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
    youtubeUrl: "",
    iconName: "Wind",
    features: [
      {
        title: "Velocidad del Viento",
        subtitle: "Medición precisa",
        description: "Anemómetros de alta precisión que capturan velocidad instantánea, ráfagas y promedios en tiempo real.",
        iconName: "Wind"
      },
      {
        title: "Análisis Estructural",
        subtitle: "Seguridad garantizada",
        description: "Cálculo automático de cargas de viento según normativas para evaluar el impacto en estructuras.",
        iconName: "Building2"
      },
      {
        title: "Sistema de Alertas",
        subtitle: "Prevención activa",
        description: "Notificaciones configurables por umbrales de velocidad para activar protocolos de seguridad.",
        iconName: "AlertTriangle"
      },
      {
        title: "Histórico y Tendencias",
        subtitle: "Datos para decisiones",
        description: "Registro completo de condiciones eólicas con análisis estadístico y visualización de patrones.",
        iconName: "LineChart"
      },
      {
        title: "Mapeo de Zonas",
        subtitle: "Cobertura espacial",
        description: "Visualización geográfica de condiciones de viento en múltiples puntos de monitorización.",
        iconName: "MapPin"
      },
      {
        title: "Informes Técnicos",
        subtitle: "Documentación oficial",
        description: "Generación automática de informes según estándares para proyectos de ingeniería y construcción.",
        iconName: "FileText"
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
      },
      {
        title: "Control de Aforo",
        subtitle: "Gestión de multitudes",
        description: "Monitorización de densidad de público en diferentes zonas para prevenir aglomeraciones peligrosas.",
        iconName: "Users"
      },
      {
        title: "Coordinación de Seguridad",
        subtitle: "Comunicación integrada",
        description: "Sistema centralizado que conecta equipos de seguridad, emergencias y gestión del evento.",
        iconName: "Radio"
      },
      {
        title: "Vigilancia Ambiental",
        subtitle: "Monitorización 360°",
        description: "Integración con cámaras y sensores para cobertura completa de las instalaciones.",
        iconName: "Camera"
      },
      {
        title: "Protocolos Automatizados",
        subtitle: "Respuesta inmediata",
        description: "Activación automática de procedimientos de seguridad según niveles de alerta predefinidos.",
        iconName: "Shield"
      },
      {
        title: "Informes de Evento",
        subtitle: "Documentación completa",
        description: "Registro detallado de incidencias, tiempos de respuesta y análisis post-evento.",
        iconName: "ClipboardCheck"
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
