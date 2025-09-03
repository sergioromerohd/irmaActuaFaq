"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft } from "lucide-react"

export default function IrmaFAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Main Content */}
  <main className="container mx-auto px-4 py-24 pt-28">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-12">
            <div className="flex items-center justify-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-white flex items-center justify-center p-3">
                <Image
                  src="/images/irma-logo.png"
                  alt="IRMA Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h2 className="text-4xl font-bold">FAQ - IRMA</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Preguntas frecuentes sobre la aplicación de monitoreo de vibraciones
            </p>
          </div>

          {/* FAQ Content */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Preguntas Frecuentes</CardTitle>
              <CardDescription className="text-lg">
                Encuentra respuestas a las preguntas más comunes sobre IRMA
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full space-y-2">
                <AccordionItem value="item-1" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold">¿Qué es IRMA?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    IRMA es una plataforma avanzada disponible tanto en móvil como en{" "}
                    <Link href="https://irmaweb.dbblab.es/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      web
                    </Link>{" "}
                    que permite realizar mediciones y monitoreo en tiempo real de sensores acelerómetros especializados llamados "setas". La
                    aplicación está diseñada para la detección precisa de vibraciones, análisis de datos de vibraciones y
                    monitoreo estructural en aplicaciones industriales y de investigación.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Qué son las "setas" y cómo funcionan?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Las "setas" son dispositivos acelerómetros especializados que detectan vibraciones y movimientos en
                    múltiples ejes. Su nombre proviene de su forma característica similar a una seta. Estos sensores
                    utilizan tecnología MEMS (Micro-Electro-Mechanical Systems) de alta precisión para detectar
                    aceleraciones desde micro-vibraciones hasta movimientos sísmicos significativos. Transmiten los
                    datos de forma inalámbrica a la{" "}
                    <Link href="https://irmaweb.dbblab.es/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      aplicación IRMA
                    </Link>{" "}
                    mediante protocolos de comunicación robustos.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Cómo funciona el monitoreo en tiempo real?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    IRMA se conecta de forma inalámbrica con los sensores "setas" utilizando protocolos de comunicación
                    optimizados para baja latencia.{" "}
                    <Link href="https://irmaweb.dbblab.es/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      La aplicación
                    </Link>{" "}
                    recibe datos continuamente a frecuencias de muestreo
                    configurables (desde 1 Hz hasta 1000 Hz según el modelo de sensor). Los datos se procesan en tiempo
                    real mostrando gráficos dinámicos, análisis espectral, detección de eventos, y manteniendo un
                    historial completo con timestamps precisos para análisis posterior.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Cuántas "setas" puedo monitorear simultáneamente?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    IRMA puede gestionar múltiples sensores "setas" de forma simultánea. La versión básica soporta hasta
                    10 sensores, la versión profesional hasta 50 sensores, y la versión empresarial puede manejar redes
                    de más de 100 dispositivos.{" "}
                    <Link href="https://irmaweb.dbblab.es/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      La aplicación
                    </Link>{" "}
                    está optimizada para manejar grandes volúmenes de datos
                    con procesamiento distribuido y almacenamiento eficiente, permitiendo monitoreo de instalaciones
                    desde pequeñas hasta grandes redes industriales.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold">¿Está disponible offline?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <Link href="https://irmaweb.dbblab.es/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      La aplicación móvil de IRMA
                    </Link>{" "}
                    tiene capacidades offline robustas que incluyen visualización de datos
                    históricos previamente sincronizados, configuración de parámetros de sensores, análisis de datos
                    almacenados localmente, y generación de reportes básicos. Los sensores pueden almacenar datos
                    localmente durante períodos sin conectividad y sincronizar automáticamente cuando se restablece la
                    conexión. Para el monitoreo en tiempo real y funciones avanzadas se requiere conexión a internet.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Qué tipos de alertas puedo configurar?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    IRMA ofrece un sistema de alertas altamente configurable que incluye: alertas por umbral de
                    vibración (con múltiples niveles de severidad), alertas por pérdida de conexión con sensores,
                    alertas por batería baja en las "setas", alertas por patrones de vibración anómalos detectados por
                    IA, alertas por eventos sísmicos, y alertas personalizadas basadas en combinaciones de parámetros.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Qué análisis avanzados ofrece la aplicación?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    IRMA incluye herramientas de análisis avanzado como análisis espectral FFT para identificar
                    frecuencias dominantes, detección de patrones mediante machine learning, análisis de tendencias
                    temporales, correlación entre múltiples sensores, detección de anomalías automática, análisis de
                    fatiga estructural, y generación de reportes técnicos detallados. También ofrece herramientas de
                    visualización 3D para representar datos de múltiples sensores en contexto espacial mediante IRMADATA, aplicación de escritorio.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Cómo se instalan y configuran los sensores "setas"?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Los sensores "setas" están diseñados para instalación sencilla. Incluyen bases magnéticas para
                    superficies metálicas, sistemas de montaje con tornillos para instalación permanente, y opciones de
                    montaje adhesivo para superficies especiales. La configuración se realiza a través de{" "}
                    <Link href="https://irmaweb.dbblab.es/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      la aplicación IRMA
                    </Link>{" "}
                    mediante un proceso de emparejamiento automático. Cada sensor se puede configurar
                    individualmente con parámetros como frecuencia de muestreo, sensibilidad, filtros, y identificación
                    personalizada.{" "}
                    <Link href="https://irmaweb.dbblab.es/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      La aplicación
                    </Link>{" "}
                    incluye asistentes de configuración y herramientas de calibración.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Qué duración tiene la batería de los sensores?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    La batería tiene una carga de aproximadamente 6h a máximo rendimiento ampliable hasta 48-72h en 
                    función de la configuración de sueño. Los sensores incluyen gestión inteligente
                    de energía con modos de bajo consumo, hibernación automática durante períodos de inactividad, y
                    alertas tempranas de batería baja. Algunos modelos ofrecen opciones de carga solar o conexión a
                    fuentes de alimentación externa para instalaciones permanentes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </main>

  {/* Footer moved to global layout */}
    </div>
  )
}
