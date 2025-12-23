"use client"

import { useRef, useState, useEffect } from "react"
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
  CheckCircle,
  Shield,
  Users
} from "lucide-react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { IrmaLiveSimulator } from "@/components/IrmaLiveSimulator"
import { IrmaDigitalTwin } from "@/components/IrmaDigitalTwin"

const DEVICE_VARIANTS = [
  {
    src: "/images/setarojasf.png",
    color: "from-red-500/20",
    glow: "bg-red-500/10",
    name: "IRMA RED"
  },
  {
    src: "/images/setablancaSF.png", 
    color: "from-blue-500/20",
    glow: "bg-blue-500/10",
    name: "IRMA WHITE"
  },
  {
    src: "/images/setagrissf.png",
    color: "from-zinc-500/20",
    glow: "bg-zinc-500/10",
    name: "IRMA GREY"
  }
]

export default function IrmaPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentDevice, setCurrentDevice] = useState(0)

  // Auto-cycle devices
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDevice((prev) => (prev + 1) % DEVICE_VARIANTS.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

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
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 via-background to-accent/10" />
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
            className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium border border-accent/20 backdrop-blur-sm">
                <Activity className="h-5 w-5" />
                <span>PLATAFORMA IRMA</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-accent via-blue-600 to-accent">
                Monitorización Inteligente de Vibraciones
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Plataforma en la nube para la gestión centralizada de sensores. Visualiza datos en tiempo real, gestiona alertas y genera informes técnicos con precisión milimétrica.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="https://irmaweb.dbblab.es/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300 hover:-translate-y-1">
                    Acceso Web
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/irma/faq">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto backdrop-blur-sm bg-background/50 hover:bg-background/80 transition-all duration-300">
                    Saber Más
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
              className="relative hidden lg:block h-[600px] flex items-center justify-center"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                 <AnimatePresence mode="wait">
                    <motion.div
                      key={currentDevice}
                      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.5 }}
                      className="relative z-20 w-[500px] h-[500px]"
                    >
                       <Image
                        src={DEVICE_VARIANTS[currentDevice].src}
                        alt="IRMA Device"
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                      />
                    </motion.div>
                 </AnimatePresence>

                 {/* Dynamic Glow Background */}
                 <AnimatePresence mode="wait">
                    <motion.div 
                        key={`glow-${currentDevice}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b ${DEVICE_VARIANTS[currentDevice].color} to-transparent rounded-full blur-3xl -z-10`} 
                    />
                 </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Simulation Section */}
      <IrmaLiveSimulator />

      {/* Features Grid with Scroll Reveal */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Potencia de Análisis en la Nube</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Herramientas avanzadas para convertir datos brutos de vibración en decisiones informadas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: Monitor, title: "Dashboard Unificado", desc: "Controla todos tus dispositivos desde una sola pantalla. Estado de conexión, batería y últimas lecturas." },
              { icon: BarChart3, title: "Análisis Espectral", desc: "Visualización avanzada de espectros de frecuencia (FFT) para diagnóstico de fallos en maquinaria." },
              { icon: Bell, title: "Alertas Inteligentes", desc: "Configura umbrales de alarma personalizados. Recibe notificaciones instantáneas vía Email, SMS o Push." },
              { icon: Smartphone, title: "Movilidad Total", desc: "App nativa para gestión en campo. Sincronización automática de datos cuando recuperas conexión." },
              { icon: Brain, title: "Algoritmos Predictivos", desc: "Detección automática de patrones anómalos mediante IA para predecir fallos antes de que ocurran." },
              { icon: CheckCircle, title: "Reportes Automáticos", desc: "Generación de informes periódicos en PDF. Históricos de datos exportables en CSV/Excel." }
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
                    <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 text-accent">
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

      {/* Applications Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 -skew-y-3 transform origin-top-left scale-110" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto space-y-12">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center space-y-8"
            >
              <h3 className="text-4xl font-bold">Casos de Uso</h3>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                La plataforma IRMA se adapta a múltiples verticales de negocio.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Wrench, bgClass: "bg-blue-100", textClass: "text-blue-600", title: "Mantenimiento Predictivo", desc: "Control de estado de motores, bombas y ventiladores." },
                { icon: Building, bgClass: "bg-green-100", textClass: "text-green-600", title: "Salud Estructural", desc: "Monitorización de grietas, inclinaciones y vibraciones." },
                { icon: Activity, bgClass: "bg-purple-100", textClass: "text-purple-600", title: "Confort Humano", desc: "Evaluación de vibraciones según normativa ISO 2631." },
                { icon: Gauge, bgClass: "bg-orange-100", textClass: "text-orange-600", title: "Rendimiento", desc: "Optimización de maquinaria y procesos industriales." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center p-6 hover:shadow-2xl transition-all duration-300 group bg-background/80 backdrop-blur border-accent/10 hover:border-accent/30 h-full">
                    <div className={`h-16 w-16 rounded-2xl ${item.bgClass} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                      <item.icon className={`h-8 w-8 ${item.textClass}`} />
                    </div>
                    <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {item.desc}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cross Platform Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h3 className="text-4xl font-bold">Disponible donde estés</h3>
            <p className="text-xl text-muted-foreground">Accede a tus datos desde cualquier dispositivo y lugar.</p>
    
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-8 h-full hover:shadow-xl transition-all duration-300">
                  <div className="h-20 w-20 rounded-3xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <Smartphone className="h-10 w-10 text-accent" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">App Móvil</h4>
                  <p className="text-muted-foreground mb-6">
                    Lleva el control en tu bolsillo. Ideal para técnicos de campo e instalaciones rápidas. Disponible para iOS y Android.
                  </p>
                   <Button variant="outline" className="w-full">Descargar App</Button>
                </Card>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
              >
                <Card className="text-center p-8 h-full hover:shadow-xl transition-all duration-300">
                  <div className="h-20 w-20 rounded-3xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <Monitor className="h-10 w-10 text-accent" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">
                      Web App
                  </h4>
                  <p className="text-muted-foreground mb-6">
                     La potencia completa de análisis en tu navegador de escritorio. Gestión de flotas y configuración avanzada.
                  </p>
                  <Link href="https://irmaweb.dbblab.es/" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Ir a la Web</Button>
                  </Link>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-3xl p-12 border border-accent/10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Tienes preguntas sobre la Plataforma?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está listo para ayudarte a integrar IRMA en tus procesos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/irma/faq">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 w-full sm:w-auto shadow-lg">
                  Ver Preguntas Frecuentes
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto bg-background">
                  Contactar Soporte
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
