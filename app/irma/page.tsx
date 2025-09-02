"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Activity,
  Smartphone,
  Monitor,
  Zap,
  Bell,
  BarChart3,
  ArrowLeft,
  ArrowRight,
  Cpu,
  Settings,
  Building,
  Wrench,
  Brain,
  Gauge,
} from "lucide-react"

export default function IrmaPage() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.3

      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${rate}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center group-hover:scale-105 transition-transform border">
                <Image src="/images/irma-logo.png" alt="IRMA Logo" width={32} height={32} className="object-contain" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">IRMA</h1>
                <p className="text-sm text-muted-foreground">by dbbasico</p>
              </div>
            </Link>

            <nav className="flex items-center space-x-6">
              <Link
                href="/"
                className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Inicio
              </Link>
              <Link href="/irma/faq" className="text-sm font-medium hover:text-primary transition-colors">
                FAQ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-20 w-20 rounded-3xl bg-white flex items-center justify-center border-2 border-accent/20">
                <Image src="/images/irma-logo.png" alt="IRMA Logo" width={60} height={60} className="object-contain" />
              </div>
              <div className="text-left">
                <h2 className="text-5xl font-bold">IRMA</h2>
                <p className="text-xl text-muted-foreground">Monitoreo de Vibraciones</p>
              </div>
            </div>

            <div className="flex justify-center gap-3">
              <Badge variant="secondary" className="bg-accent text-accent-foreground text-lg px-6 py-2">
                Aplicación Móvil
              </Badge>
              <Badge variant="secondary" className="bg-accent text-accent-foreground text-lg px-6 py-2">
                Aplicación Web
              </Badge>
            </div>

            <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Plataforma avanzada para mediciones y monitoreo en tiempo real de sensores acelerómetros "setas",
              especializada en la detección precisa de vibraciones y análisis de datos sísmicos.
            </p>

            <Link href="/irma/faq">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 group">
                Ver Preguntas Frecuentes
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Models Section */}
      <section className="py-20 bg-gradient-to-r from-accent/5 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-8">
              <h3 className="text-4xl font-bold">Modelos Disponibles</h3>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                IRMA cuenta con dos modelos especializados, cada uno optimizado para diferentes aplicaciones y
                requisitos de precisión
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Modelo MPU */}
              <Card className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="h-20 w-20 rounded-3xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                    <Cpu className="h-10 w-10 text-blue-600" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">IRMA MPU</h4>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Modelo Integrado
                  </Badge>
                </div>

                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-semibold mb-3 text-green-600">Ventajas</h5>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Costo más bajo</li>
                      <li>• Menor consumo energético</li>
                      <li>• Aplicaciones estándar</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h6 className="font-semibold mb-2">Especificaciones Técnicas</h6>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Rango: ±2g, ±4g, ±8g, ±16g</li>
                      <li>• Frecuencia: 0.1 Hz - 1 kHz</li>
                      <li>• Resolución: 16 bits</li>
                      <li>• Temperatura: -40°C a +85°C</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Modelo ADXL355 */}
              <Card className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="h-20 w-20 rounded-3xl bg-purple-100 flex items-center justify-center mx-auto mb-6">
                    <Settings className="h-10 w-10 text-purple-600" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">IRMA ADXL355</h4>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    Modelo Profesional
                  </Badge>
                </div>

                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-semibold mb-3 text-green-600">Ventajas</h5>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Ancho de banda más alto (1.5 kHz)</li>
                      <li>• Menor ruido de fondo (&lt;25 μg/√Hz)</li>
                      <li>• Más precisión (20 bits)</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h6 className="font-semibold mb-2">Especificaciones Técnicas</h6>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Rango: ±2g, ±4g, ±8g</li>
                      <li>• Frecuencia: DC - 1.5 kHz</li>
                      <li>• Resolución: 20 bits</li>
                      <li>• Deriva: &lt;0.1 mg/°C</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Características Principales</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              IRMA ofrece monitoreo avanzado de vibraciones con tecnología de sensores de última generación
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Activity className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Monitoreo en Tiempo Real</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Seguimiento continuo de acelerómetros "setas" con transmisión de datos en tiempo real y visualización
                  instantánea.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Detección Precisa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Algoritmos avanzados para detección de vibraciones con alta sensibilidad y filtrado de ruido
                  inteligente.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Multiplataforma</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Disponible tanto en dispositivos móviles como en navegadores web, con sincronización completa de
                  datos.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Análisis Avanzado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Procesamiento de señales con análisis espectral, detección de patrones y generación de reportes
                  técnicos.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Bell className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Sistema de Alertas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Configuración de umbrales personalizados con notificaciones instantáneas por múltiples canales.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Monitor className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Gestión Centralizada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Control y monitoreo de múltiples sensores "setas" desde una interfaz unificada y intuitiva.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sensors Section */}
      <section className="py-20 bg-gradient-to-r from-accent/5 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-8">
              <h3 className="text-4xl font-bold">Sensores "Setas" Especializados</h3>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Los sensores "setas" son dispositivos acelerómetros de alta precisión diseñados específicamente para la
                detección de vibraciones en aplicaciones industriales y de monitoreo estructural.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/irma-devices-collection.png"
                    alt="Colección de dispositivos IRMA en diferentes colores - rojo y blanco"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold mb-2">Variedad de Modelos</h4>
                  <p className="text-muted-foreground">
                    Disponibles en diferentes colores para identificación visual en instalaciones complejas
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/irma-installation.png"
                    alt="Instalación de sensor IRMA blanco con efecto de activación luminoso"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold mb-2">Instalación Profesional</h4>
                  <p className="text-muted-foreground">
                    Proceso de instalación sencillo con indicadores visuales de estado y conectividad
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <Card className="text-center p-6">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Activity className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-bold mb-4">Alta Sensibilidad</h4>
                <p className="text-muted-foreground">
                  Detección de micro-vibraciones con precisión excepcional en múltiples ejes de medición.
                </p>
              </Card>

              <Card className="text-center p-6">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-bold mb-4">Transmisión Inalámbrica</h4>
                <p className="text-muted-foreground">
                  Conectividad robusta con protocolos de comunicación optimizados para entornos industriales.
                </p>
              </Card>

              <Card className="text-center p-6">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Monitor className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-bold mb-4">Larga Duración</h4>
                <p className="text-muted-foreground">
                  Batería de larga duración con gestión inteligente de energía y alertas de mantenimiento.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-8">
              <h3 className="text-4xl font-bold">Aplicaciones Especializadas</h3>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                IRMA está diseñado para cubrir un amplio espectro de aplicaciones industriales y de investigación
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 group">
                <div className="h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Wrench className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold mb-4">Máquinas</h4>
                <p className="text-muted-foreground text-sm">
                  Monitoreo de maquinaria industrial, detección de desbalances, análisis de rodamientos y diagnóstico
                  predictivo.
                </p>
              </Card>

              <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 group">
                <div className="h-16 w-16 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Building className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold mb-4">Edificaciones</h4>
                <p className="text-muted-foreground text-sm">
                  Monitoreo estructural de edificios, puentes, torres y otras infraestructuras críticas en tiempo real.
                </p>
              </Card>

              <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 group">
                <div className="h-16 w-16 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold mb-4">Análisis IA</h4>
                <p className="text-muted-foreground text-sm">
                  Algoritmos de inteligencia artificial para detección de patrones, predicción de fallos y optimización.
                </p>
              </Card>

              <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 group">
                <div className="h-16 w-16 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Gauge className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="text-xl font-bold mb-4">Amortiguadores</h4>
                <p className="text-muted-foreground text-sm">
                  Evaluación de sistemas de amortiguación, análisis de respuesta dinámica y optimización de parámetros.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h3 className="text-4xl font-bold">Disponible en Múltiples Plataformas</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              IRMA está optimizado para funcionar tanto en dispositivos móviles como en navegadores web, ofreciendo
              flexibilidad total para el monitoreo desde cualquier ubicación.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="text-center p-8">
                <div className="h-20 w-20 rounded-3xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="h-10 w-10 text-accent" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Aplicación Móvil</h4>
                <p className="text-muted-foreground mb-6">
                  App nativa para iOS y Android con capacidades offline, notificaciones push y sincronización automática
                  de datos.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Monitoreo en tiempo real</li>
                  <li>• Notificaciones instantáneas</li>
                  <li>• Modo offline disponible</li>
                  <li>• Interfaz táctil optimizada</li>
                </ul>
              </Card>

              <Card className="text-center p-8">
                <div className="h-20 w-20 rounded-3xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Monitor className="h-10 w-10 text-accent" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Aplicación Web</h4>
                <p className="text-muted-foreground mb-6">
                  Plataforma web completa con dashboards avanzados, análisis detallado y herramientas de administración
                  empresarial.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Dashboards personalizables</li>
                  <li>• Análisis histórico completo</li>
                  <li>• Exportación de reportes</li>
                  <li>• Gestión de usuarios y permisos</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h3 className="text-4xl font-bold">¿Tienes preguntas sobre IRMA?</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Consulta nuestras preguntas frecuentes para obtener información detallada sobre sensores "setas",
              configuración de alertas, capacidades offline y casos de uso específicos.
            </p>
            <Link href="/irma/faq">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 group">
                Ver Preguntas Frecuentes
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center space-y-6">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center group-hover:scale-105 transition-transform border">
                <Image src="/images/irma-logo.png" alt="IRMA Logo" width={32} height={32} className="object-contain" />
              </div>
              <span className="text-xl font-semibold">IRMA by dbbasico</span>
            </Link>
            <p className="text-muted-foreground max-w-md mx-auto">
              IRMA - Plataforma avanzada para monitoreo de vibraciones con sensores acelerómetros especializados.
            </p>
            <p className="text-sm text-muted-foreground">© 2024 dbbasico. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
