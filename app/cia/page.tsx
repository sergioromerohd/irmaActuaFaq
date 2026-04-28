"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Clock, CheckCircle, Users, FileText, Zap, ArrowRight, Award, BookOpen, Calendar, Target, Shield, Signal, Layers, ChevronRight } from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function CiaPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const yHero = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden" ref={containerRef}>
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] mix-blend-normal opacity-50" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px] mix-blend-normal opacity-50" />
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] rounded-full bg-primary/10 blur-[100px] mix-blend-normal opacity-50" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <motion.div 
          style={{ y: yHero, opacity: opacityHero }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp} className="flex justify-center mb-8">
                <div className="relative group cursor-default">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-50 blur-md group-hover:opacity-75 transition duration-500"></div>
                  <Badge variant="outline" className="relative bg-background/80 backdrop-blur-sm text-primary text-sm px-6 py-2 border-primary/20 shadow-xl uppercase tracking-wider">
                    <Shield className="w-4 h-4 mr-2" />
                    Para Agentes de Policía y Técnicos
                  </Badge>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4 mb-6">
                <div className="h-24 w-24 rounded-[2rem] bg-gradient-to-br from-primary to-accent p-[2px] shadow-2xl">
                  <div className="h-full w-full bg-background/90 backdrop-blur-xl rounded-[2rem] flex items-center justify-center">
                    <GraduationCap className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mt-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                    Formación 
                  </span>
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-accent">
                    CIA
                  </span>
                </h1>
                <p className="text-2xl font-medium text-foreground/80 mt-2">
                  Cursos de Inspecciones Acústicas
                </p>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Formación especializada con <span className="text-foreground font-semibold">certificación profesional</span>. 
                Adquiere conocimientos sólidos en mediciones sonométricas y cumplimiento normativo.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
                <Link href="/contacto">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8 rounded-2xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all group">
                    Solicitar Información
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
                  </Button>
                </Link>
                <Link href="/cia/faq">
                  <Button size="lg" variant="outline" className="text-lg h-14 px-8 rounded-2xl border-primary/20 hover:bg-primary/5 transition-all group bg-background/50 backdrop-blur-sm">
                    Ver Preguntas Frecuentes
                    <BookOpen className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Certificaciones Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-20 space-y-4">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wide uppercase">
                <Award className="h-4 w-4" />
                Programa Progresivo
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Niveles de Certificación
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Desde conceptos básicos hasta especialización avanzada. Un recorrido completo para dominar las inspecciones.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
              {/* Connecting Line for Desktop */}
              <div className="hidden md:block absolute left-1/2 top-[10%] bottom-[10%] w-px bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 -translate-x-1/2 z-0" />

              {/* Nivel I */}
              <motion.div variants={fadeInUp} className="relative z-10 md:mt-0">
                <Card className="h-full bg-background/60 backdrop-blur-xl border-primary/10 shadow-2xl hover:border-primary/30 transition-colors group overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 text-[10rem] font-black leading-none pointer-events-none group-hover:scale-110 transition-transform duration-700">I</div>
                  <CardHeader className="relative pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/10">
                        <BookOpen className="h-7 w-7 text-primary" />
                      </div>
                      <Badge className="bg-primary hover:bg-primary text-primary-foreground px-4 py-1.5 text-sm font-bold shadow-md shadow-primary/20">Nivel I</Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold">Fundamentos Básicos</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 relative">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <p className="text-foreground/80 font-medium">Conocimientos básicos para inspección sonométrica.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <p className="text-foreground/80 font-medium">Elaboración detallada de actas.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <p className="text-foreground/80 font-medium">Procedimiento de normativa de aplicación.</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 border-t border-border/50 bg-muted/20">
                    <div className="flex items-center gap-3 w-full text-sm font-medium text-muted-foreground">
                      <div className="p-2 rounded-lg bg-background shadow-sm border border-border/50">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <span>16 h • Examen tipo test • Certificado de asistencia</span>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Nivel II */}
              <motion.div variants={fadeInUp} className="relative z-10 md:mt-24">
                <Card className="h-full bg-background/60 backdrop-blur-xl border-accent/10 shadow-2xl hover:border-accent/30 transition-colors group overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 text-[10rem] font-black leading-none pointer-events-none group-hover:scale-110 transition-transform duration-700">II</div>
                  <CardHeader className="relative pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center border border-accent/10">
                        <Layers className="h-7 w-7 text-accent" />
                      </div>
                      <Badge className="bg-accent hover:bg-accent text-accent-foreground px-4 py-1.5 text-sm font-bold shadow-md shadow-accent/20">Nivel II</Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold">Profundización de Procedimientos</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 relative">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                        <p className="text-foreground/80 font-medium">Profundizar en métodos complejos de inspección.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                        <p className="text-foreground/80 font-medium">Certificado de Aptitud mediante ejercicio de Intercomparación.</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 border-t border-border/50 bg-muted/20">
                    <div className="flex items-center gap-3 w-full text-sm font-medium text-muted-foreground">
                      <div className="p-2 rounded-lg bg-background shadow-sm border border-border/50">
                        <Clock className="h-4 w-4 text-accent" />
                      </div>
                      <span>24 h • Examen test + Práctico • Certificados</span>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Nivel III */}
              <motion.div variants={fadeInUp} className="relative z-10 md:-mt-12">
                <Card className="h-full bg-background/60 backdrop-blur-xl border-primary/20 shadow-2xl shadow-primary/5 hover:border-primary/40 transition-colors group overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 text-[10rem] font-black leading-none pointer-events-none group-hover:scale-110 transition-transform duration-700">III</div>
                  <CardHeader className="relative pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/10 flex items-center justify-center border border-primary/20">
                        <Signal className="h-7 w-7 text-primary" />
                      </div>
                      <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-1.5 text-sm font-bold shadow-md shadow-primary/20">Nivel III</Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold">Procesado y Análisis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 relative">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <p className="text-foreground/80 font-medium">Procesado de datos recogidos en la inspección.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <p className="text-foreground/80 font-medium">Elaboración de Fichas de Resultados técnicas.</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 border-t border-border/50 bg-muted/20">
                    <div className="flex items-center gap-3 w-full text-sm font-medium text-muted-foreground">
                      <div className="p-2 rounded-lg bg-background shadow-sm border border-border/50">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <span>24 h • Examen test + Práctico • Certificados + ACTUA</span>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Nivel IV */}
              <motion.div variants={fadeInUp} className="relative z-10 md:mt-12">
                <Card className="h-full bg-gradient-to-b from-background/80 to-accent/5 backdrop-blur-xl border-accent/20 shadow-2xl shadow-accent/5 hover:border-accent/40 transition-colors group overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 text-[10rem] font-black leading-none pointer-events-none group-hover:scale-110 transition-transform duration-700">IV</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardHeader className="relative pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-accent/30 to-primary/10 flex items-center justify-center border border-accent/20 shadow-inner">
                        <Award className="h-7 w-7 text-accent" />
                      </div>
                      <Badge className="bg-gradient-to-r from-accent to-primary text-white px-4 py-1.5 text-sm font-bold shadow-md shadow-accent/20">Nivel IV</Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold">Especialización en Informes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 relative">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                        <p className="text-foreground/80 font-medium">Redacción avanzada de Informes periciales.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                        <p className="text-foreground/80 font-medium">Diseño y propuesta de Medidas Correctoras.</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 border-t border-border/50 bg-muted/20">
                    <div className="flex items-center gap-3 w-full text-sm font-medium text-muted-foreground">
                      <div className="p-2 rounded-lg bg-background shadow-sm border border-border/50">
                        <Clock className="h-4 w-4 text-accent" />
                      </div>
                      <span>16 h • Examen test + Práctico • Certificados + ACTUA</span>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Jornadas Section */}
      <section className="py-24 relative z-10 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-background border border-border shadow-sm text-foreground text-sm font-bold tracking-wide uppercase">
                <Calendar className="h-4 w-4 text-primary" />
                Formación Complementaria
              </div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Jornadas Especializadas</h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Formación intensiva de 8 horas en áreas específicas de alta demanda
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Ciclomotores y Motos",
                  desc: "Inspección de ruidos y protocolo de medición para vehículos.",
                  icon: Zap,
                  color: "primary"
                },
                {
                  title: "Vibraciones",
                  desc: "Inspección y protocolo de medición específica de vibraciones.",
                  icon: Signal,
                  color: "accent"
                },
                {
                  title: "Limitadores",
                  desc: "Protocolo de inspección, descarga de datos y normativa.",
                  icon: CheckCircle,
                  color: "primary"
                },
                {
                  title: "El Acta",
                  desc: "Redacción y elaboración impecable de actas de inspección.",
                  icon: FileText,
                  color: "accent"
                }
              ].map((jornada, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="h-full">
                  <Card className="h-full group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-background/80 backdrop-blur-sm border-border/60">
                    <CardHeader className="p-6">
                      <div className={`h-12 w-12 rounded-xl bg-${jornada.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <jornada.icon className={`h-6 w-6 text-${jornada.color}`} />
                      </div>
                      <CardTitle className="text-lg leading-tight">{jornada.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-6 pt-0">
                      <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                        {jornada.desc}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-semibold bg-muted/50 p-2 rounded-lg w-fit text-foreground/80">
                        <Clock className="h-4 w-4" />
                        8 Horas
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-16 flex justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 shadow-sm backdrop-blur-md">
                <div className="p-2 bg-background rounded-full shadow-sm">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <span className="font-semibold text-lg">Asistencia máxima: <span className="text-primary">10 Agentes o Técnicos</span></span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Temario General */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16 space-y-4">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Temario General</h3>
              <p className="text-xl text-muted-foreground">
                Contenidos completos que cubren todos los aspectos fundamentales
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-background/40 backdrop-blur-xl border-border overflow-hidden relative">
                {/* Decorative background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
                
                <CardContent className="p-8 md:p-12 relative z-10">
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                    {[
                      "Introducción a la Acústica",
                      "Instrumentación y Equipos",
                      "Marcos Normativos y Límites",
                      "Inspección de Fuentes en Exterior",
                      "Inspección de Fuentes en Interior",
                      "Vibraciones: Casos prácticos",
                      "Casos Habituales: Locales, Aires Acondicionados, Vehículos, etc.",
                      "Medidas Correctoras: Limitadores, Aislamientos",
                      "Actas y Estadillos de Inspección",
                      "Cálculos y Realización de Informes"
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 items-start group">
                        <div className="shrink-0 h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-sm">
                          {idx + 1}
                        </div>
                        <span className="font-medium text-foreground/90 leading-tight pt-1.5 group-hover:text-primary transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10 bg-primary text-primary-foreground overflow-hidden">
        {/* Abstract shapes for CTA */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-black/10 rounded-full blur-[60px]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-10"
          >
            <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight">¿Listo para especializarte?</h3>
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed font-medium">
              Únete a los profesionales que ya confían en nuestra formación. 
              Obtén las certificaciones necesarias con total garantía.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
              <Link href="/contacto">
                <Button size="lg" className="bg-background text-primary hover:bg-background/90 text-lg h-16 px-10 rounded-2xl shadow-xl hover:scale-105 transition-all group font-bold">
                  Solicitar Información
                  <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="pt-8 flex items-center justify-center gap-3 text-primary-foreground/90 bg-black/10 w-fit mx-auto px-6 py-3 rounded-full backdrop-blur-md">
              <Shield className="w-5 h-5" />
              <span>¿Formación a medida para equipos?</span>
              <Link href="/contacto" className="font-bold underline hover:text-white transition-colors">
                Contáctanos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

