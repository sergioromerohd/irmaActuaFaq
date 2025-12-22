"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Shield, Users, FileText, Zap, CheckCircle, ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ActuaPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div ref={containerRef} className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-background to-primary/10" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, -45, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              style={{ y: heroY, opacity: heroOpacity }}
              className="space-y-8 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium border border-primary/20 backdrop-blur-sm">
                <BarChart3 className="h-5 w-5" />
                <span>ACTUA 2.0</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-primary">
                Análisis Acústico Profesional
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                La herramienta definitiva para inspecciones acústicas. Generación automática de actas y cálculos precisos para técnicos y agentes de policía.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="https://actua2.dbblab.es/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 h-auto shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1">
                    Comenzar Ahora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/actua/faq">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto backdrop-blur-sm bg-background/50 hover:bg-background/80 transition-all duration-300">
                    Ver Tutoriales
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: [0, -20, 0] // Floating effect
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.2 },
                scale: { duration: 0.8, delay: 0.2 },
                y: { 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }
              }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                 <Image
                  src="/images/actua-playmobil-v2.png"
                  alt="Actua Playmobil"
                  width={600}
                  height={800}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
              {/* Decorative elements behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid with Scroll Reveal */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Potencia y Simplicidad</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Todo lo que necesitas para realizar mediciones profesionales en una sola plataforma
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: BarChart3, title: "Análisis Avanzado", desc: "Algoritmos especializados para análisis espectral y temporal de alta precisión." },
              { icon: FileText, title: "Actas Automáticas", desc: "Generación instantánea de documentación legal y técnica lista para firmar." },
              { icon: Shield, title: "Normativa al Día", desc: "Actualizado constantemente con las últimas regulaciones nacionales y locales." },
              { icon: Users, title: "Interfaz Intuitiva", desc: "Diseñado para ser usado por cualquier profesional, sin necesidad de ser experto." },
              { icon: Zap, title: "Resultados en Tiempo Real", desc: "Procesamiento inmediato de grandes volúmenes de datos acústicos." },
              { icon: CheckCircle, title: "Validación Técnica", desc: "Control de calidad automático para garantizar la validez de cada medición." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-none shadow-md bg-card/50 backdrop-blur-sm hover:-translate-y-1">
                  <CardHeader>
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      <feature.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left scale-110" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold mb-6">Domina la herramienta en minutos</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Nuestro tutorial paso a paso te guiará desde la configuración inicial hasta la emisión de tu primera acta técnica. Sin complicaciones.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Configuración del sonómetro",
                    "Subida de archivos",
                    "Análisis de resultados",
                    "Exportación de informes PDF"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/actua/faq">
                  <Button variant="outline" className="group">
                    Ver todos los tutoriales
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border"
              >
                <video
                  controls
                  className="w-full h-auto bg-black"
                  poster="/images/actua-sonometer.png"
                  preload="metadata"
                >
                  <source src="/TutorialACTUA.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Planes Flexibles</h2>
            <p className="text-xl text-muted-foreground">Elige la solución que mejor se adapte a tu flujo de trabajo</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {[
              {
                title: "Básico",
                price: "Esencial",
                desc: "Cálculo de Niveles de Transmisión Lk según RD 1367/2007",
                features: ["Actas de Medición", "Histórico de Mediciones", "Fichas de Resultados"],
                highlight: false
              },
              {
                title: "Técnico",
                price: "Más Popular",
                desc: "Incluye RD 1367/2007 + 1 Ordenanza Municipal a elección",
                features: ["Todo lo del plan Básico", "Evaluación de Cumplimiento", "Informe de Inspección", "Soporte Prioritario"],
                highlight: true
              },
              {
                title: "Avanzado",
                price: "Completo",
                desc: "La suite completa con RD 1367/2007 + 10 Ordenanzas",
                features: ["Todo lo del plan Técnico", "Multi-ordenanza", "Gestión Avanzada", "Consultoría Técnica"],
                highlight: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`relative h-full transition-all duration-300 hover:shadow-2xl ${plan.highlight ? 'border-primary shadow-lg scale-105 z-10' : 'hover:scale-105'}`}>
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm">
                        Recomendado
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pt-8">
                    <CardTitle className="text-2xl font-bold mb-2">{plan.title}</CardTitle>
                    <div className="text-primary font-medium mb-2">{plan.price}</div>
                    <p className="text-sm text-muted-foreground min-h-[3rem]">{plan.desc}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3 text-sm">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className={`h-4 w-4 flex-shrink-0 ${plan.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Link href="/contacto" className="w-full">
                        <Button variant={plan.highlight ? "default" : "outline"} className="w-full group">
                          Solicitar Información
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience - Simple Version */}
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

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para modernizar tus inspecciones?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a los cientos de profesionales que ya confían en ACTUA 2.0 para sus mediciones acústicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://actua2.dbblab.es/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 w-full sm:w-auto shadow-lg">
                  Acceder a la Plataforma
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto bg-background">
                  Contactar Soporte
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
