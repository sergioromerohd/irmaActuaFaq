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
  ArrowRight,
  Building,
  Wrench,
  Brain,
  Gauge,
} from "lucide-react"
import { IrmaLiveSimulator } from "@/components/IrmaLiveSimulator"

export default function IrmaPage() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
  if (mq.matches) return

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
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-20 w-20 rounded-3xl bg-white flex items-center justify-center border-2 border-accent/20">
                <Image src="/images/irma-logo.png" alt="IRMA Logo" width={60} height={60} className="object-contain" />
              </div>
              <div className="text-left">
                <h2 className="text-5xl font-bold">Plataforma IRMA</h2>
                <p className="text-xl text-muted-foreground">Sistema Integral de Monitorización</p>
              </div>
            </div>

            <div className="flex justify-center gap-3">
              <Link href="https://irmaweb.dbblab.es/" target="_blank" rel="noopener noreferrer">
                <Badge variant="secondary" className="bg-accent text-accent-foreground text-lg px-6 py-2 hover:bg-accent/80 transition-colors cursor-pointer">
                  Acceso Web
                </Badge>
              </Link>
               <Badge variant="outline" className="text-lg px-6 py-2">
                  iOS & Android
               </Badge>
            </div>

            <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Plataforma en la nube para la gestión centralizada de sensores de vibración. 
              Visualiza datos en tiempo real, gestiona alertas y genera informes técnicos desde cualquier lugar.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/irma/faq">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 group">
                  Ver Preguntas Frecuentes
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/irma/dispositivo">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 group border-accent text-accent hover:bg-accent hover:text-white">
                  Ver Hardware (Seta)
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Simulation Section */}
      <IrmaLiveSimulator />

      {/* Features Section (Software Focused) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Potencia de Análisis en la Nube</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Herramientas avanzadas para convertir datos brutos de vibración en decisiones informadas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Monitor className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Dashboard Unificado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Controla todos tus dispositivos desde una sola pantalla. Estado de conexión, batería y últimas lecturas de un vistazo.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Análisis Espectral</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Visualización avanzada de espectros de frecuencia (FFT) para diagnóstico de fallos en maquinaria y estructuras.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Bell className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Alertas Inteligentes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Configura umbrales de alarma personalizados. Recibe notificaciones instantáneas vía Email, SMS o Push.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Movilidad Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  App nativa para gestión en campo. Sincronización automática de datos cuando recuperas conexión.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Algoritmos Predictivos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Detección automática de patrones anómalos mediante IA para predecir fallos antes de que ocurran.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Monitor className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Reportes Automáticos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Generación de informes periódicos en PDF. Históricos de datos exportables en CSV/Excel para post-proceso.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-8">
              <h3 className="text-4xl font-bold">Casos de Uso</h3>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                La plataforma IRMA se adapta a múltiples verticales de negocio.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 group bg-background">
                <div className="h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Wrench className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold mb-4">Mantenimiento Predictivo</h4>
                <p className="text-muted-foreground text-sm">
                  Control de estado de motores, bombas y ventiladores.
                </p>
              </Card>

              <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 group bg-background">
                <div className="h-16 w-16 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Building className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold mb-4"> Salud Estructural (SHM)</h4>
                <p className="text-muted-foreground text-sm">
                  Monitorización de grietas, inclinaciones y vibraciones en edificación.
                </p>
              </Card>

              <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 group bg-background">
                <div className="h-16 w-16 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Activity className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold mb-4">Confort Humano</h4>
                <p className="text-muted-foreground text-sm">
                  Evaluación de vibraciones según normativa ISO 2631 para confort en edificios.
                </p>
              </Card>

              <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 group bg-background">
                <div className="h-16 w-16 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Gauge className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="text-xl font-bold mb-4">Rendimiento</h4>
                <p className="text-muted-foreground text-sm">
                  Optimización de maquinaria y procesos industriales.
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
            <h3 className="text-4xl font-bold">Disponible donde estés</h3>
    
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="text-center p-8">
                <div className="h-20 w-20 rounded-3xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="h-10 w-10 text-accent" />
                </div>
                <h4 className="text-2xl font-bold mb-4">App Móvil</h4>
                <p className="text-muted-foreground mb-6">
                  Lleva el control en tu bolsillo. Ideal para técnicos de campo e instalaciones rápidas.
                </p>
                 <Button variant="outline" className="w-full">Descargar App</Button>
              </Card>

              <Card className="text-center p-8">
                <div className="h-20 w-20 rounded-3xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Monitor className="h-10 w-10 text-accent" />
                </div>
                <h4 className="text-2xl font-bold mb-4">
                    Web App
                </h4>
                <p className="text-muted-foreground mb-6">
                   La potencia completa de análisis en tu navegador de escritorio.
                </p>
                <Link href="https://irmaweb.dbblab.es/" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full">Ir a la Web</Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

  {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h3 className="text-4xl font-bold">¿Tienes preguntas sobre la Plataforma?</h3>
            <Link href="/irma/faq">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 group">
                Ver Preguntas Frecuentes
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
