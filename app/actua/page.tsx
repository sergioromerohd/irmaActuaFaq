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
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-primary-foreground font-bold text-lg">db</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">dbbasico</h1>
                <p className="text-sm text-muted-foreground">ACTUA 2.0</p>
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
              <Link href="/actua/faq" className="text-sm font-medium hover:text-primary transition-colors">
                FAQ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-16 overflow-hidden">
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

            <Link href="/actua/faq">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 group">
                Ver Preguntas Frecuentes
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
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
            <Link href="/actua/faq">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 group">
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
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-primary-foreground font-bold text-lg">db</span>
              </div>
              <span className="text-xl font-semibold">dbbasico</span>
            </Link>
            <p className="text-muted-foreground max-w-md mx-auto">
              ACTUA 2.0 - Solución profesional para análisis de sonometría y generación de actas técnicas.
            </p>
            <p className="text-sm text-muted-foreground">© 2024 dbbasico. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
