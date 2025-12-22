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

export function IrmaDigitalTwin() {
  const [activeTab, setActiveTab] = useState("features")

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Product Header / Main Showase */}
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center mb-20 max-w-6xl mx-auto">
          
          {/* Left Column: Product Image (The "Seta") */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-[500px] bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-100 p-8 flex items-center justify-center">
               {/* Decorative background elements to simulate premium feel */}
               <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl transform scale-75" />
               
               <div className="relative w-full h-full transform hover:scale-105 transition-transform duration-500">
                  {/* Using the white seta image as requested */}
                  <Image 
                    src="/images/setablancaSF.png" // Updated to the new uploaded image
                    alt="Sensor IRMA Seta - Dispositivo de vibración"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
               </div>
            </div>
            {/* Optional: Small thumbnails or additional views could go here */}
          </div>

          {/* Right Column: Product Info (Cesva Style) */}
          <div className="w-full lg:w-1/2 space-y-6 pt-4">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight">IRMA Seta</h2>
              <div className="h-1 w-20 bg-primary mt-4 mb-4 rounded-full" />
              <p className="text-2xl text-primary font-medium">
                Sensor de vibraciones triaxial inteligente
              </p>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Sensor acelerómetro de alta precisión diseñado para la monitorización continua de estructuras y maquinaria. 
              Combina tecnología loT con una robustez industrial para ofrecer datos fiables en tiempo real.
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
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-6">
              <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50 text-gray-700 gap-2 h-12 px-6">
                <FileText className="h-5 w-5" />
                Ficha Técnica (PDF)
              </Button>
              <Link href="/contacto">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 h-12 px-8 shadow-lg shadow-primary/20">
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
            <div className="border-b border-gray-200 mb-8">
              <TabsList className="flex h-auto p-0 bg-transparent gap-8 justify-start overflow-x-auto">
                <TabsTrigger 
                  value="features"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary px-4 py-3 text-lg font-medium text-gray-500 hover:text-gray-700 transition-all bg-transparent shadow-none"
                >
                  Características principales
                </TabsTrigger>
                <TabsTrigger 
                  value="norms" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary px-4 py-3 text-lg font-medium text-gray-500 hover:text-gray-700 transition-all bg-transparent shadow-none"
                >
                  Normas y certificados
                </TabsTrigger>
                <TabsTrigger 
                  value="support" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary px-4 py-3 text-lg font-medium text-gray-500 hover:text-gray-700 transition-all bg-transparent shadow-none"
                >
                  Soporte y descargas
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="features" className="space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Precisión y Control</h3>
                  <p className="text-gray-600 leading-relaxed">
                    La seta IRMA permite la verificación de niveles de vibración en entornos críticos. 
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Su diseño ergonómico y compacto facilita la instalación en puntos de difícil acceso, 
                    mientras que su conectividad inalámbrica lo hace ideal para aplicaciones industriales. 
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                   <h4 className="font-semibold text-gray-900 mb-4">Especificaciones Destacadas</h4>
                   <dl className="space-y-4">
                     <div className="flex justify-between border-b border-gray-200 pb-2">
                       <dt className="text-gray-500">Rango de Frecuencia</dt>
                       <dd className="font-medium text-gray-900">0.5 Hz - 2000 Hz</dd>
                     </div>
                     <div className="flex justify-between border-b border-gray-200 pb-2">
                       <dt className="text-gray-500">Rango de Medición</dt>
                       <dd className="font-medium text-gray-900">±16 g</dd>
                     </div>
                     <div className="flex justify-between border-b border-gray-200 pb-2">
                       <dt className="text-gray-500">Conectividad</dt>
                       <dd className="font-medium text-gray-900">Bluetooth 5.0 / LTE-M</dd>
                     </div>
                   </dl>
                </div>
              </div>

              {/* Modelos Disponibles Section Moved Here */}
              <div className="pt-8 border-t border-gray-100">
                 <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Modelos Disponibles</h3>
                 <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                   IRMA cuenta con dos gamas de modelos especializados, optimizados para diferentes aplicaciones.
                 </p>

                 <div className="grid lg:grid-cols-2 gap-8">
                   {/* Modelo RED */}
                   <Card className="hover:shadow-lg transition-all duration-300 border-gray-200">
                     <CardContent className="p-8">
                       <div className="text-center mb-8">
                         <div className="h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                           <Cpu className="h-8 w-8 text-blue-600" />
                         </div>
                         <h4 className="text-xl font-bold mb-2 text-gray-900">IRMA RED BIG y RED LITE</h4>
                         <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                           Modelo Integrado
                         </Badge>
                       </div>
                       <div className="space-y-6">
                         <div>
                           <h5 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Ventajas</h5>
                           <ul className="space-y-2 text-gray-600 text-sm">
                             <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-blue-500"/>para despliegues masivos</li>
                             <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-blue-500"/>Menor consumo energético</li>
                             <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-blue-500"/>Ideal para aplicaciones estándar</li>
                           </ul>
                         </div>
                         <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                           <h6 className="font-semibold text-gray-900 mb-2 text-sm">Especificaciones Técnicas</h6>
                           <ul className="text-sm text-gray-600 space-y-1 font-mono">
                             <li>Rango: ±2g, ±4g, ±8g, ±16g</li>
                             <li>Frecuencia: 0.1 Hz - 1 kHz</li>
                             <li>Resolución: 16 bits</li>
                             <li>Temperatura: -40°C a +85°C</li>
                           </ul>
                         </div>
                       </div>
                     </CardContent>
                   </Card>

                   {/* Modelo WHITE Y GREY */}
                   <Card className="hover:shadow-lg transition-all duration-300 border-gray-200">
                     <CardContent className="p-8">
                       <div className="text-center mb-8">
                         <div className="h-16 w-16 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-6">
                           <Settings className="h-8 w-8 text-purple-600" />
                         </div>
                         <h4 className="text-xl font-bold mb-2 text-gray-900">IRMA WHITE BIG, WHITE LITE Y GREY</h4>
                         <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                           Modelo Profesional
                         </Badge>
                       </div>
                       <div className="space-y-6">
                         <div>
                            <h5 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Ventajas</h5>
                            <ul className="space-y-2 text-gray-600 text-sm">
                              <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-purple-500"/>Ancho de banda extendido (1.5 kHz)</li>
                              <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-purple-500"/>Ruido de fondo ultra-bajo (&lt;25 μg/√Hz)</li>
                              <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-purple-500"/>Máxima precisión (20 bits)</li>
                            </ul>
                         </div>
                         <div className="bg-purple-50/50 p-4 rounded-lg border border-purple-100">
                           <h6 className="font-semibold text-gray-900 mb-2 text-sm">Especificaciones Técnicas</h6>
                           <ul className="text-sm text-gray-600 space-y-1 font-mono">
                             <li>Rango: ±2g, ±4g, ±8g</li>
                             <li>Frecuencia: DC - 1.5 kHz</li>
                             <li>Resolución: 20 bits</li>
                             <li>Deriva térmica: &lt;0.1 mg/°C</li>
                           </ul>
                         </div>
                       </div>
                     </CardContent>
                   </Card>
                 </div>
              </div>
            </TabsContent>

            <TabsContent value="norms" className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="prose max-w-none text-gray-600">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Cumplimiento Normativo</h3>
                <div className="space-y-6">
                  <div className="flex gap-4 p-4 border rounded-lg hover:border-primary/50 transition-colors">
                    <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">ISO 8041:2005</h4>
                      <p className="text-sm">Respuesta humana a las vibraciones - Instrumentos de medida.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 border rounded-lg hover:border-primary/50 transition-colors">
                    <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">UNE-EN ISO 5349</h4>
                      <p className="text-sm">Medición y evaluación de la exposición humana a las vibraciones transmitidas por la mano.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 border rounded-lg hover:border-primary/50 transition-colors">
                    <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Marcado CE</h4>
                      <p className="text-sm">Cumplimiento con directivas europeas de seguridad y compatibilidad electromagnética.</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="support" className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                   <h3 className="text-xl font-bold text-gray-900 mb-6">Descargas y Documentación</h3>
                   <div className="space-y-4">
                     <Button variant="ghost" className="w-full justify-start gap-4 h-14 border border-gray-100 hover:bg-gray-50 hover:text-primary">
                        <Download className="h-5 w-5" />
                        <div className="text-left">
                          <div className="font-semibold">Datasheet (v2.1)</div>
                          <div className="text-xs text-muted-foreground">PDF - 2.4 MB</div>
                        </div>
                     </Button>
                     <Button variant="ghost" className="w-full justify-start gap-4 h-14 border border-gray-100 hover:bg-gray-50 hover:text-primary">
                        <BookOpen className="h-5 w-5" />
                        <div className="text-left">
                          <div className="font-semibold">Manual de Usuario</div>
                          <div className="text-xs text-muted-foreground">PDF - 5.1 MB</div>
                        </div>
                     </Button>
                   </div>
                </div>
                
                <div className="bg-blue-50/50 p-8 rounded-xl border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">¿Necesitas ayuda técnica?</h3>
                  <p className="text-gray-600 mb-6">
                    Nuestro equipo de ingenieros está disponible para resolver dudas sobre instalación, calibración o integración.
                  </p>
                  <Button className="w-full bg-white text-primary border border-primary hover:bg-blue-50">
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
