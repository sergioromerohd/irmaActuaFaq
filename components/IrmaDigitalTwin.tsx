"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  FileText, 
  Mail, 
  Check, 
  ChevronRight, 
  Download, 
  ShieldCheck, 
  Headphones, 
  BookOpen,
  Cpu,
  Settings 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { DeviceConfigModal } from "@/components/DeviceConfigModal"

export function IrmaDigitalTwin() {
  const [activeTab, setActiveTab] = useState("features")

  return (
    <section className="py-16 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Product Header / Main Showase */}
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center mb-20 max-w-6xl mx-auto">
          
          {/* Left Column: Product Image (The "Seta") */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-[500px] bg-gradient-to-b from-muted/50 to-background rounded-2xl border border-border p-8 flex items-center justify-center dark:from-muted/10 dark:to-background">
               {/* Decorative background elements to simulate premium feel */}
               <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl transform scale-75 dark:bg-blue-500/20" />
               
               <div className="relative w-full h-full transform hover:scale-105 transition-transform duration-500">
                  {/* Using the white seta image as requested */}
                  <Image 
                    src="/images/setablancaSF.png" 
                    alt="Sensor IRMA Seta - Dispositivo de vibración"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
               </div>
            </div>
          </div>

          {/* Right Column: Product Info (Cesva Style) */}
          <div className="w-full lg:w-1/2 space-y-6 pt-4">
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-4xl font-bold text-foreground tracking-tight">IRMA Seta</h2>
                <DeviceConfigModal />
              </div>
              <div className="h-1 w-20 bg-primary mt-4 mb-4 rounded-full" />
              <p className="text-2xl text-primary font-medium">
                Sensor de vibraciones triaxial inteligente
              </p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Sensor acelerómetro de alta precisión diseñado para la monitorización continua de estructuras y maquinaria. 
              Combina tecnología IoT con una robustez industrial para ofrecer datos fiables en tiempo real.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                "Acelerómetro triaxial MEMS de bajo ruido",
                "Conectividad inalámbrica",
                "Batería recargable de larga duración",
                "Instalación magnética, tornillería o adhesiva",
                "Sincronización automática con plataforma Cloud"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-6">
              <a href="/Datasheet_IRMA.pdf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-border hover:bg-muted text-foreground gap-2 h-12 px-6">
                  <FileText className="h-5 w-5" />
                  Ficha Técnica (PDF)
                </Button>
              </a>
              <Link href="/contacto">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-12 px-8 shadow-lg shadow-primary/20">
                  <Mail className="h-5 w-5" />
                  Pedir Oferta
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Sections Navigation (Tabs Style) */}
        <div className="max-w-6xl mx-auto">
           <Tabs defaultValue="features" className="w-full">
            <div className="border-b border-border mb-8">
              <TabsList className="flex h-auto p-0 bg-transparent gap-8 justify-start overflow-x-auto">
                {["features", "norms", "support"].map((tab) => (
                  <TabsTrigger 
                    key={tab}
                    value={tab}
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-all bg-transparent shadow-none"
                  >
                   {tab === "features" ? "Características principales" : tab === "norms" ? "Normas y certificados" : "Soporte y descargas"}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="features" className="space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Precisión y Control</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    La seta IRMA permite la verificación de niveles de vibración en entornos críticos. 
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Su diseño ergonómico y compacto facilita la instalación en puntos de difícil acceso, 
                    mientras que su conectividad inalámbrica lo hace ideal para aplicaciones industriales. 
                  </p>
                </div>
                <div className="bg-muted/30 rounded-xl p-8 border border-border">
                   <h4 className="font-semibold text-foreground mb-4">Especificaciones Destacadas</h4>
                   <dl className="space-y-4">
                     <div className="flex justify-between border-b border-border pb-2">
                       <dt className="text-muted-foreground">Rango de Frecuencia</dt>
                       <dd className="font-medium text-foreground">0.5 Hz - 2000 Hz</dd>
                     </div>
                     <div className="flex justify-between border-b border-border pb-2">
                       <dt className="text-muted-foreground">Rango de Medición</dt>
                       <dd className="font-medium text-foreground">±16 g</dd>
                     </div>
                     <div className="flex justify-between border-b border-border pb-2">
                       <dt className="text-muted-foreground">Conectividad</dt>
                       <dd className="font-medium text-foreground">Bluetooth 5.0 / LTE-M</dd>
                     </div>
                   </dl>
                </div>
              </div>

              {/* Modelos Disponibles Section */}
              <div className="pt-8 border-t border-border">
                 <h3 className="text-3xl font-bold text-foreground text-center mb-8">Modelos Disponibles</h3>
                 <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                   IRMA cuenta con dos gamas de modelos especializados, optimizados para diferentes aplicaciones.
                 </p>

                 <div className="grid md:grid-cols-3 gap-6">
                   {/* Modelo RED */}
                   <Card className="hover:shadow-lg transition-all duration-300 border-border bg-gradient-to-b from-card to-red-500/5 dark:to-red-900/10">
                     <CardContent className="p-6">
                       <div className="text-center mb-6">
                         <div className="relative w-32 h-32 mx-auto mb-4 hover:scale-105 transition-transform duration-300">
                            <Image 
                              src="/images/setarojasf.png"
                              alt="IRMA RED - Monitoreo"
                              fill
                              className="object-contain drop-shadow-xl"
                            />
                         </div>
                         <h4 className="text-lg font-bold mb-2 text-foreground">IRMA RED</h4>
                         <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-200 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-900/50">
                           Monitoreo y Predictivo
                         </Badge>
                       </div>
                       <div className="space-y-4">
                         <div>
                           <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Ideal Para</h5>
                           <p className="text-sm text-foreground leading-relaxed">
                             Mantenimiento predictivo de maquinaria rotativa y detección temprana de fallos.
                           </p>
                         </div>
                         <div className="bg-background/80 p-3 rounded-lg border border-border">
                           <ul className="text-xs text-muted-foreground space-y-1 font-medium">
                             <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-red-500"/>Análisis de vibraciones</li>
                             <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-red-500"/>Detección de desequilibrios</li>
                           </ul>
                         </div>
                       </div>
                     </CardContent>
                   </Card>

                   {/* Modelo WHITE */}
                   <Card className="hover:shadow-lg transition-all duration-300 border-border bg-gradient-to-b from-card to-blue-500/5 dark:to-blue-900/10">
                     <CardContent className="p-6">
                       <div className="text-center mb-6">
                         <div className="relative w-32 h-32 mx-auto mb-4 hover:scale-105 transition-transform duration-300">
                            <Image 
                              src="/images/setablancaSF.png"
                              alt="IRMA WHITE - Molestias"
                              fill
                              className="object-contain drop-shadow-xl"
                            />
                         </div>
                         <h4 className="text-lg font-bold mb-2 text-foreground">IRMA WHITE</h4>
                         <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-900/50">
                           Confort y Molestias
                         </Badge>
                       </div>
                       <div className="space-y-4">
                         <div>
                           <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Ideal Para</h5>
                           <p className="text-sm text-foreground leading-relaxed">
                             Evaluación de confort humano y vibraciones en entornos laborales o residenciales.
                           </p>
                         </div>
                         <div className="bg-background/80 p-3 rounded-lg border border-border">
                           <ul className="text-xs text-muted-foreground space-y-1 font-medium">
                             <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-blue-500"/>Normativa ISO 18041</li>  
                             <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-blue-500"/>Alta sensibilidad</li>
                           </ul>
                         </div>
                       </div>
                     </CardContent>
                   </Card>

                   {/* Modelo GREY */}
                   <Card className="hover:shadow-lg transition-all duration-300 border-border bg-gradient-to-b from-card to-zinc-500/5 dark:to-zinc-900/10">
                     <CardContent className="p-6">
                       <div className="text-center mb-6">
                         <div className="relative w-32 h-32 mx-auto mb-4 hover:scale-105 transition-transform duration-300">
                            <Image 
                              src="/images/setagrissf.png"
                              alt="IRMA GREY - Edificación"
                              fill
                              className="object-contain drop-shadow-xl"
                            />
                         </div>
                         <h4 className="text-lg font-bold mb-2 text-foreground">IRMA GREY</h4>
                         <Badge variant="secondary" className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700">
                           Edificación
                         </Badge>
                       </div>
                       <div className="space-y-4">
                         <div>
                           <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Ideal Para</h5>
                           <p className="text-sm text-foreground leading-relaxed">
                             Monitorización de salud estructural en edificios, puentes y grandes obras civiles.
                           </p>
                         </div>
                         <div className="bg-background/80 p-3 rounded-lg border border-border">
                           <ul className="text-xs text-muted-foreground space-y-1 font-medium">
                             <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-zinc-500"/>Bajas frecuencias</li>
                             <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-zinc-500"/>Estructuras críticas</li>
                           </ul>
                         </div>
                       </div>
                     </CardContent>
                   </Card>
                 </div>
              </div>
            </TabsContent>

            <TabsContent value="norms" className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="prose max-w-none text-muted-foreground">
                <h3 className="text-xl font-bold text-foreground mb-6">Cumplimiento Normativo</h3>
                <div className="space-y-6">
                  {[
                    { title: "ISO 8041:2005", desc: "Respuesta humana a las vibraciones - Instrumentos de medida." },
                    { title: "UNE-EN ISO 5349", desc: "Medición y evaluación de la exposición humana a las vibraciones transmitidas por la mano." },
                    { title: "Marcado CE", desc: "Cumplimiento con directivas europeas de seguridad y compatibilidad electromagnética." }
                  ].map((norm, i) => (
                    <div key={i} className="flex gap-4 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors bg-card">
                      <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                      <div>
                        <h4 className="font-bold text-foreground">{norm.title}</h4>
                        <p className="text-sm text-muted-foreground">{norm.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="support" className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                   <h3 className="text-xl font-bold text-foreground mb-6">Descargas y Documentación</h3>
                   <div className="space-y-4">
                     <a href="/Datasheet_IRMA.pdf" target="_blank" rel="noopener noreferrer" className="w-full">
                       <Button variant="ghost" className="w-full justify-start gap-4 h-14 border border-border hover:bg-muted hover:text-primary">
                          <Download className="h-5 w-5" />
                          <div className="text-left">
                            <div className="font-semibold text-foreground">Datasheet (v2.1)</div>
                            <div className="text-xs text-muted-foreground">PDF - 2.4 MB</div>
                          </div>
                       </Button>
                     </a>
                     <Button variant="ghost" className="w-full justify-start gap-4 h-14 border border-border hover:bg-muted hover:text-primary">
                        <BookOpen className="h-5 w-5" />
                        <div className="text-left">
                          <div className="font-semibold text-foreground">Manual de Usuario</div>
                          <div className="text-xs text-muted-foreground">PDF - 5.1 MB</div>
                        </div>
                     </Button>
                   </div>
                </div>
                
                <div className="bg-primary/5 p-8 rounded-xl border border-primary/10">
                  <h3 className="text-xl font-bold text-foreground mb-4">¿Necesitas ayuda técnica?</h3>
                  <p className="text-muted-foreground mb-6">
                    Nuestro equipo de ingenieros está disponible para resolver dudas sobre instalación, calibración o integración.
                  </p>
                  <Button className="w-full bg-card text-foreground border border-border hover:bg-muted">
                    <Headphones className="mr-2 h-4 w-4" />
                    Contactar Soporte
                  </Button>
                </div>
              </div>
            </TabsContent>

           </Tabs>
        </div>

      </div>
    </section>
  )
}
