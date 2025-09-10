"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Clock, CheckCircle, Users, FileText, Zap, ArrowRight, Award, BookOpen, Calendar } from "lucide-react"

export default function CiaPage() {
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
                <GraduationCap className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="text-left">
                <h2 className="text-5xl font-bold">CIA</h2>
                <p className="text-xl text-muted-foreground">Cursos de Inspecciones Acústicas</p>
              </div>
            </div>

            <div className="flex justify-center">
              <Badge variant="secondary" className="bg-primary text-primary-foreground text-lg px-6 py-2">
                Para Agentes de policía y Técnicos
              </Badge>
            </div>

            <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Formación especializada en inspecciones acústicas con certificación profesional. 
              Cursos diseñados específicamente para agentes de policía y personal técnico que requieren 
              conocimientos sólidos en mediciones sonométricas y cumplimiento normativo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/contacto">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 group">
                  Solicitar Información
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/cia/faq">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 group">
                  Ver FAQ
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Award className="h-4 w-4" />
                Certificaciones Disponibles
              </div>
              <h3 className="text-4xl font-bold mb-4">Curso de Inspecciones Acústicas</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Programa de formación progresivo con 4 niveles de certificación, desde conceptos básicos hasta especialización avanzada
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* CIA Nivel I */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/20">
                <div className="absolute -top-4 left-6">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    Nivel I
                  </Badge>
                </div>
                <CardHeader className="pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">CIA - Certificación Nivel I</CardTitle>
                      <p className="text-sm text-muted-foreground">Fundamentos básicos</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-sm">OBJETIVO:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Adquirir Conocimientos básicos para la Inspección sonométrica</li>
                      <li>• Elaboración de Actas</li>
                      <li>• Conocimientos sobre el procedimiento de Inspección de la Normativa de Aplicación</li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span><strong>Duración:</strong> 16 h - Examen teórico tipo test + Certificado de asistencia</span>
                  </div>
                </CardContent>
              </Card>

              {/* CIA Nivel II */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-accent bg-gradient-to-b from-accent/5 to-background">
                <div className="absolute -top-4 left-6">
                  <Badge className="bg-accent text-accent-foreground px-4 py-1">
                    Nivel II
                  </Badge>
                </div>
                <CardHeader className="pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">CIA - Certificación Nivel II</CardTitle>
                      <p className="text-sm text-muted-foreground">Profundización en procedimientos</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-sm">OBJETIVO:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Profundizar en los procedimientos de Inspección</li>
                      <li>• Obtener Certificado de Aptitud mediante la realización de ejercicio de Intercomparación</li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-accent" />
                    <span><strong>Duración:</strong> 24 h - Examen teórico tipo test + Ejercicio práctico + Certificados</span>
                  </div>
                </CardContent>
              </Card>

              {/* CIA Nivel III */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/20">
                <div className="absolute -top-4 left-6">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1">
                    Nivel III
                  </Badge>
                </div>
                <CardHeader className="pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">CIA - Certificación Nivel III</CardTitle>
                      <p className="text-sm text-muted-foreground">Procesado y análisis de datos</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-sm">OBJETIVO:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Procesado de Datos recogidos en la Inspección</li>
                      <li>• Elaboración de Fichas de Resultados</li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span><strong>Duración:</strong> 24 h - Examen teórico tipo test + Ejercicio práctico + Certificados + Certificado ACTUA</span>
                  </div>
                </CardContent>
              </Card>

              {/* CIA Nivel IV */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/20">
                <div className="absolute -top-4 left-6">
                  <Badge className="bg-gradient-to-r from-accent to-primary text-white px-4 py-1">
                    Nivel IV
                  </Badge>
                </div>
                <CardHeader className="pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">CIA IV - Certificación Nivel IV</CardTitle>
                      <p className="text-sm text-muted-foreground">Especialización en informes</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-sm">OBJETIVO:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Redacción de Informes</li>
                      <li>• Propuesta de Medidas Correctoras</li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-accent" />
                    <span><strong>Duración:</strong> 16 h - Examen teórico tipo test + Ejercicio práctico + Certificados + Certificado ACTUA</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Jornadas Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <Calendar className="h-4 w-4" />
                Jornadas Especializadas
              </div>
              <h3 className="text-4xl font-bold mb-4">Jornadas de Inspecciones Acústicas</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Formación específica en temas especializados para complementar tu formación base
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Jornada Ciclomotores */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Jornada Ciclomotores y Motocicletas</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Inspección de Ruidos y Protocolo de Medición</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-sm">OBJETIVO:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Adquirir Conocimientos básicos para la Inspección sonométrica de Vehículos</li>
                      <li>• Elaboración de Actas</li>
                      <li>• Conocimientos sobre el procedimiento de Inspección de la Normativa de Aplicación</li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span><strong>Duración:</strong> 8 h</span>
                  </div>
                </CardContent>
              </Card>

              {/* Jornada Vibraciones */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle className="text-lg">Jornada Vibraciones</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Inspección y Protocolo de Medición</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-sm">OBJETIVO:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Adquirir Conocimientos básicos para la Inspección sonométrica de Vehículos</li>
                      <li>• Elaboración de Actas</li>
                      <li>• Conocimientos sobre el procedimiento de Inspección de la Normativa de Aplicación</li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-accent" />
                    <span><strong>Duración:</strong> 8 h</span>
                  </div>
                </CardContent>
              </Card>

              {/* Jornada Limitadores */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Jornada Protocolo de Inspección de Limitadores</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-sm">OBJETIVO:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Adquirir Conocimientos básicos para la Inspección de Limitadores</li>
                      <li>• Elaboración de Actas y Descarga de Datos</li>
                      <li>• Conocimientos sobre el procedimiento de Inspección de la Normativa de Aplicación</li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span><strong>Duración:</strong> 8 h</span>
                  </div>
                </CardContent>
              </Card>

              {/* Jornada El Acta */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle className="text-lg">Jornada El Acta en las Inspecciones Acústicas</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-sm">OBJETIVO:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Elaboración de Actas en las Inspecciones Acústicas</li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-accent" />
                    <span><strong>Duración:</strong> 8 h</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 text-primary">
                <Users className="h-5 w-5" />
                <span className="font-medium">Asistencia máxima: 10 Agentes o Técnicos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temario General */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <BookOpen className="h-4 w-4" />
                Programa de Formación
              </div>
              <h3 className="text-4xl font-bold mb-4">Temario General</h3>
              <p className="text-xl text-muted-foreground">
                Contenidos completos que cubren todos los aspectos fundamentales de las inspecciones acústicas
              </p>
            </div>

            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      1
                    </div>
                    <span className="font-medium">Introducción a la Acústica</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      2
                    </div>
                    <span className="font-medium">Instrumentación</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      3
                    </div>
                    <span className="font-medium">Marcos Normativos y Límites de Aplicación</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      4
                    </div>
                    <span className="font-medium">Procedimiento de Inspección de Fuentes en el Ambiente Exterior</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      5
                    </div>
                    <span className="font-medium">Procedimiento de Inspección de Fuentes en el Ambiente Interior</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                      6
                    </div>
                    <span className="font-medium">Vibraciones</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                      7
                    </div>
                    <span className="font-medium">Casos Habituales de Inspección (Locales con Música, Gimnasios y Salas de Bailes, Aires Acondicionados, Ladridos de Perros, Ruidos Vecinales, Equipos Industriales, Talleres Mecánicos, Lavanderías, Ruido de Vehículos, ...)</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                      8
                    </div>
                    <span className="font-medium">Medidas Correctoras (Limitadores, Aislamientos, Pantallas Acústicas, Bancadas, Fonoabsorción, ...)</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                      9
                    </div>
                    <span className="font-medium">Actas y Estadillos de Inspección</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                      10
                    </div>
                    <span className="font-medium">Cálculos y realización de Informes</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h3 className="text-4xl font-bold">¿Listo para certificarte en Inspecciones Acústicas?</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Únete a los profesionales que ya confían en nuestra formación especializada. 
              Obtén las certificaciones que necesitas para realizar inspecciones acústicas con total garantía.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link href="/contacto">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 group">
                  Solicitar Información
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/cia/faq">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 group">
                  Ver FAQ
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="pt-6">
              <p className="text-muted-foreground">
                <strong>¿Necesitas formación a medida para tu equipo?</strong> → 
                <Link href="/contacto" className="text-primary hover:underline ml-2">
                  Contáctanos para cursos personalizados
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
