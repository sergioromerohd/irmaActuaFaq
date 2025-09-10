"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Shield, Users, FileText, Zap, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react"

export default function ActuaPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
  <section ref={heroRef} className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <BarChart3 className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="text-left">
                <h2 className="text-5xl font-bold">ACTUA 2.0</h2>
                <p className="text-xl text-muted-foreground">Análisis de Sonometría</p>
              </div>
            </div>

            <div className="flex justify-center">
              <Badge variant="secondary" className="bg-primary text-primary-foreground text-lg px-6 py-2">
                Aplicación Web Especializada
              </Badge>
            </div>

            <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Herramienta profesional para el análisis de mediciones sonométricas en tareas de Inspecciones acústicas de fuentes y actividades ruidosas y generación automática de cálculos y actas técnicas. Diseñada específicamente para personal técnico y Agentes de Policía.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="https://actua2.dbblab.es/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 group">
                  Usar ACTUA 2.0
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/actua/faq">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 group">
                  Ver FAQ
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Video Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <FileText className="h-4 w-4" />
                Tutorial Completo
              </div>
              <h3 className="text-4xl font-bold mb-4">Aprende a usar ACTUA 2.0</h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tutorial paso a paso que te guía por todas las funcionalidades principales de la aplicación
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl bg-card border">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Tutorial ACTUA 2.0</h4>
                    <p className="text-sm text-muted-foreground">Guía completa de uso</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <video
                  controls
                  className="w-full h-auto rounded-lg"
                  poster="/images/actua-sonometer.png"
                  preload="metadata"
                >
                  <source src="/TutorialACTUA.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                  <a href="/TutorialACTUA.mp4" className="text-primary hover:underline">
                    Descargar video tutorial
                  </a>
                </video>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    💡 <strong>Recomendaciones:</strong> Utiliza los controles del video para pausar en las secciones que necesites revisar con más detalle. El tutorial cubre desde la configuración inicial hasta la generación de actas técnicas.
                  </p>
                </div>
              </div>
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
              ACTUA 2.0 ofrece herramientas avanzadas para el análisis profesional de sonometría
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Análisis Avanzado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Procesamiento de mediciones acústicas con algoritmos especializados para análisis espectral y temporal.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Generación de Actas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Creación automática de actas técnicas siguiendo estándares legales y normativas oficiales aplicables.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Cumplimiento Normativo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Diseñado para cumplir con las normativas nacionales, regionales y locales en procedimientos municipales
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Interface Especializada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Diseño optimizado para personal técnico y agentes de policía con poca experiencia o formación en acústica, con flujos de trabajo intuitivos y eficientes.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Procesamiento Rápido</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Análisis en tiempo real de grandes volúmenes de datos acústicos con resultados instantáneos.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Validación Técnica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Verificación automática de la calidad de los datos y validación de resultados según estándares
                  técnicos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <BarChart3 className="h-4 w-4" />
                Planes de Suscripción
              </div>
              <h3 className="text-4xl font-bold mb-4">Aplicación para Inspecciones Acústicas</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Para Agentes de policía, Técnicos e Ingenierías. Elige el plan que mejor se adapte a tus necesidades profesionales.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* ACTUA BÁSICO */}
              <Card className="relative group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/20">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    Básico
                  </Badge>
                </div>
                <CardHeader className="text-center pt-8 pb-6">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">ACTUA BÁSICO</CardTitle>
                  <p className="text-muted-foreground">Aplicación para el Procesado de Datos para el cálculo de los Niveles de Transmisión Lk según RD 1367/2007</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Elaboración de Actas de la Medición</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Registro Histórico de Mediciones</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Fichas de Resultados</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Link href="/contacto">
                      <Button variant="outline" className="w-full group">
                        IR A SUSCRIPCIÓN
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* ACTUA TÉCNICO - Destacado */}
              <Card className="relative group hover:shadow-2xl transition-all duration-500 border-2 border-accent bg-gradient-to-b from-accent/5 to-background scale-105">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground px-4 py-1">
                    Más Popular
                  </Badge>
                </div>
                <CardHeader className="text-center pt-8 pb-6">
                  <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl font-bold">ACTUA TÉCNICO</CardTitle>
                  <p className="text-muted-foreground">Aplicación para el Procesado de Datos para el cálculo de los Niveles de Transmisión Lk según RD 1367/2007 + una Ordenanza a seleccionar</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Elaboración de Actas de Medición</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Registro Histórico de Mediciones</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Fichas de Resultados y Evaluación de CUMPLIMIENTO o INCUMPLIMIENTO DE NORMA</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Informe de la Inspección realizada</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Link href="/contacto">
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group">
                        IR A SUSCRIPCIÓN
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* ACTUA AVANZADO */}
              <Card className="relative group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/20">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1">
                    Avanzado
                  </Badge>
                </div>
                <CardHeader className="text-center pt-8 pb-6">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">ACTUA AVANZADO</CardTitle>
                  <p className="text-muted-foreground">Aplicación para el Procesado de Datos para el cálculo de los Niveles de Transmisión Lk según RD 1367/2007 + 10 Ordenanzas</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Elaboración de Actas de Medición</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Registro Histórico de Mediciones</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Fichas de Resultados y Evaluación de CUMPLIMIENTO o INCUMPLIMIENTO DE NORMA</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Informe de la Inspección realizada</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Link href="/contacto">
                      <Button variant="outline" className="w-full group border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        IR A SUSCRIPCIÓN
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12 space-y-4">
              <p className="text-muted-foreground">
                <strong>¿Necesitas más información sobre los planes?</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto">
                  <Button variant="outline" className="group">
                    Contactar con Ventas
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/actua/faq">
                  <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                    Ver FAQ sobre funcionalidades
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h3 className="text-4xl font-bold">Dirigido a Profesionales</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              ACTUA 2.0 está específicamente diseñado para satisfacer las necesidades de personal técnico y Agentes de policía que requieren herramientas precisas y confiables para sus procedimientos oficiales.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="text-center p-8">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Agentes de Policía</h4>
                <p className="text-muted-foreground">
                  Herramientas especializadas para procedimientos oficiales, generación de actas legales y cumplimiento de normativas nacional, regional y local en materia de acústica.
                </p>
              </Card>

              <Card className="text-center p-8">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Personal Técnico</h4>
                <p className="text-muted-foreground">
                  Análisis avanzado de sonometría para profesionales técnicos que requieren precisión y documentación
                  detallada en sus mediciones acústicas.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h3 className="text-4xl font-bold">¿Tienes preguntas sobre ACTUA 2.0?</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Consulta nuestras preguntas frecuentes para obtener información detallada sobre funcionalidades,
              requisitos técnicos, formatos soportados y casos de uso específicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link href="https://actua2.dbblab.es/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 group">
                  Usar ACTUA 2.0
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/actua/faq">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 group">
                  Ver FAQ
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="pt-6">
              <Link href="/contacto">
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                  ¿Necesitas soporte personalizado? → Contáctanos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

  {/* Footer moved to global layout */}
    </div>
  )
}
