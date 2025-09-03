"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Shield, Smartphone, Monitor, Users, ArrowRight, Zap, Target } from "lucide-react"

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const productsRef = useRef<HTMLElement>(null)

  useEffect(() => {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
  if (mq.matches) return

  const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5

      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${rate}px)`
      }

      if (productsRef.current) {
        const productsRate = (scrolled - 400) * -0.3
        productsRef.current.style.transform = `translateY(${productsRate}px)`
      }
    }

  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
  {/* Hero Section with Parallax */}
  <section ref={heroRef} className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Zap className="h-4 w-4" />
              Tecnología de Vanguardia
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              Soluciones Técnicas para{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Medición y Análisis
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Descubre nuestras dos aplicaciones especializadas: ACTUA 2.0 para análisis de sonometría e IRMA para
              monitoreo de vibraciones con acelerómetros de última generación.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/actua">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 group">
                Explorar ACTUA 2.0
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/irma">
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6 group bg-transparent"
              >
                Descubrir IRMA
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid with Parallax */}
      <section ref={productsRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Target className="h-4 w-4" />
              Nuestros Productos
            </div>
            <h3 className="text-4xl font-bold mb-4">Tecnología Especializada</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada aplicación está diseñada para resolver desafíos específicos con precisión técnica
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* ACTUA 2.0 Card */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-card/50">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-6 right-6">
                <Badge variant="secondary" className="bg-primary text-primary-foreground shadow-lg">
                  Web App
                </Badge>
              </div>
              <CardHeader className="space-y-6 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-bold">ACTUA 2.0</CardTitle>
                    <CardDescription className="text-lg">Análisis de Sonometría</CardDescription>
                  </div>
                </div>
                <div className="relative h-48 w-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/actua-sonometer.png"
                    alt="Dispositivo sonómetro profesional ACTUA 2.0"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Aplicación web especializada para el análisis de mediciones de sonometría, diseñada para generar actas
                  técnicas dirigidas a personal técnico y policial.
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    Características Principales
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      Análisis avanzado de mediciones acústicas
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      Generación automática de actas técnicas
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      Interface optimizada para personal técnico
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      Cumplimiento de normativas policiales
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-accent" />
                    <span className="font-medium">Personal Técnico y Policial</span>
                  </div>
                  <Link href="/actua">
                    <Button className="group">
                      Ver más
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* IRMA Card */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-card/50">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-6 right-6 flex gap-2">
                <Badge variant="secondary" className="bg-accent text-accent-foreground shadow-lg">
                  Mobile
                </Badge>
                <Badge variant="secondary" className="bg-accent text-accent-foreground shadow-lg">
                  Web
                </Badge>
              </div>
              <CardHeader className="space-y-6 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-2xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-2">
                    <Image
                      src="/images/irma-logo.png"
                      alt="IRMA Logo"
                      width={48}
                      height={48}
                      className="h-12 w-12 object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-bold">IRMA</CardTitle>
                    <CardDescription className="text-lg">Monitoreo de Vibraciones</CardDescription>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-32 rounded-xl overflow-hidden">
                    <Image
                      src="/images/irma-devices-collection.png"
                      alt="Dispositivos IRMA - Sensores acelerómetros en diferentes colores"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-32 rounded-xl overflow-hidden">
                    <Image
                      src="/images/irma-installation.png"
                      alt="Instalación profesional de sensor IRMA"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Aplicación móvil y web para mediciones y monitoreo en tiempo real de "setas" (acelerómetros)
                  especializadas en la detección de vibraciones.
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-3">
                    <div className="h-5 w-5 flex items-center justify-center">
                      <Image
                        src="/images/irma-logo.png"
                        alt="IRMA"
                        width={20}
                        height={20}
                        className="h-5 w-5 object-contain"
                      />
                    </div>
                    Características Principales
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                      Monitoreo en tiempo real de acelerómetros
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                      Detección precisa de vibraciones
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                      Disponible en móvil y web
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                      Gestión de múltiples sensores "setas"
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-primary" />
                      <span className="font-medium">Móvil</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Monitor className="h-5 w-5 text-primary" />
                      <span className="font-medium">Web</span>
                    </div>
                  </div>
                  <Link href="/irma">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6 group bg-transparent"
                    >
                      Ver más
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className="py-20 bg-gradient-to-r from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h3 className="text-4xl font-bold">¿Necesitas más información?</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explora las preguntas frecuentes de cada producto para obtener información detallada sobre
              funcionalidades, requisitos técnicos y casos de uso específicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link href="/actua/faq">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 group">
                  FAQ ACTUA 2.0
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/irma/faq">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6 group bg-transparent"
                >
                  FAQ IRMA
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
