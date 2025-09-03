"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BarChart3, ArrowLeft } from "lucide-react"

export default function ActuaFAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Main Content */}
  <main className="container mx-auto px-4 py-24 pt-28">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-12">
            <div className="flex items-center justify-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-4xl font-bold">FAQ - ACTUA 2.0</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Preguntas frecuentes sobre la aplicación de análisis de sonometría
            </p>
          </div>

          {/* FAQ Content */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Preguntas Frecuentes</CardTitle>
              <CardDescription className="text-lg">
                Encuentra respuestas a las preguntas más comunes sobre ACTUA 2.0
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full space-y-2">
                <AccordionItem value="item-1" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold">¿Qué es ACTUA 2.0?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    ACTUA 2.0 es una aplicación web especializada en el análisis de mediciones de sonometría. Está
                    diseñada específicamente para personal técnico y Agentes de policía que necesitan generar actas técnicas con cálculos de resultados basadas en mediciones acústicas precisas sin realizar ningún cálculo laborioso. La aplicación combina algoritmos avanzados de
                    procesamiento de señales con interfaces optimizadas para uso profesional, conforme a la Normativa de Aplicación.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Qué tipo de mediciones puede analizar?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    La aplicación puede procesar diversos tipos de mediciones acústicas incluyendo niveles de ruido
                    ambiental, específicamente niveles de Transmisión al Ambiente Interior e inmisión al ambiente Exterior de fuentes Sonoras, permitiendo generar reportes técnicos detallados.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Cómo se generan las actas técnicas?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    El sistema analiza automáticamente los datos de sonometría ingresados y genera actas técnicas
                    siguiendo los estándares requeridos por la Normativa de Aplicación. El proceso incluye validación de datos,
                    análisis de datos, tablas, conclusiones técnicas de CONFORMIDAD o NO CONFORMIDAD automatizadas siguiendo las normativas legales aplicables. Las actas incluyen metadatos y
                    trazabilidad completa del proceso de medición.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Qué formatos de archivo soporta?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    ACTUA 2.0 soporta múltiples formatos de entrada incluyendo CSV, Excel (.xlsx, .xls), formatos
                    específicos de sonómetros profesionales, archivos de
                    texto delimitados, y formatos propietarios de equipos de medición. Se identifican automáticamente distintos modelos de Sonómetros ( CESVA, BRÜEL,… ). Se debe consultar al fabricante sobre el modelo de Sonómetro que pretende utilizar. Los reportes se pueden exportar en Word (.docx) y TXT (para análisis adicional) para la elaboración de Informes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Requiere instalación especial?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    No, ACTUA 2.0 es una aplicación web que funciona directamente desde el navegador. Solo necesitas una
                    conexión a internet estable y un navegador moderno (Chrome, Firefox, Safari, Edge). No requiere
                    instalación de software adicional, plugins especiales, ni configuraciones complejas en tu equipo. La
                    aplicación es compatible con sistemas Windows, macOS y Linux.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Qué normativas cumple la aplicación?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    ACTUA 2.0 interacciona con las normativas internacionales de medición acústica como ISO 1996 (descripción,
                    medición y evaluación del ruido ambiental), IEC 61672 (sonómetros), y estándares nacionales
                    específicos para procedimientos policiales y técnicos como el Real Decreto 1367/2007 y la Ley 37/2003. La aplicación también incorpora protocolos de
                    seguridad de datos y trazabilidad requeridos en procedimientos legales.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Cómo se garantiza la precisión de los análisis?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    La aplicación utiliza algoritmos validados científicamente, implementa controles de calidad
                    automáticos en cada etapa del análisis, realiza verificaciones cruzadas de datos, y mantiene
                    trazabilidad completa de todos los cálculos. Además, incluye herramientas de calibración y
                    validación que permiten verificar la precisión de los resultados contra estándares conocidos.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Qué soporte técnico está disponible?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Ofrecemos soporte técnico especializado que incluye documentación técnica detallada, tutoriales paso
                    a paso, soporte por email para consultas técnicas, capacitación para equipos de trabajo, y
                    asistencia en la implementación de procedimientos específicos. También proporcionamos
                    actualizaciones regulares y mantenimiento continuo de la aplicación.
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
