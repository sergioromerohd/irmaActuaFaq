"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BarChart3, ArrowLeft } from "lucide-react"

export default function ActuaFAQPage() {
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
                <p className="text-sm text-muted-foreground">FAQ ACTUA 2.0</p>
              </div>
            </Link>

            <nav className="flex items-center space-x-6">
              <Link
                href="/actua"
                className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                ACTUA 2.0
              </Link>
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Inicio
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-24">
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
                    diseñada específicamente para personal técnico y policial que necesita generar actas técnicas
                    basadas en mediciones acústicas precisas. La aplicación combina algoritmos avanzados de
                    procesamiento de señales con interfaces optimizadas para uso profesional.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Qué tipo de mediciones puede analizar?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    La aplicación puede procesar diversos tipos de mediciones acústicas incluyendo niveles de ruido
                    ambiental, mediciones de decibeles en diferentes frecuencias, análisis espectral de sonido,
                    mediciones de ruido ocupacional, y evaluaciones de contaminación acústica. También soporta análisis
                    temporal y frecuencial para generar reportes técnicos detallados.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Cómo se generan las actas técnicas?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    El sistema analiza automáticamente los datos de sonometría ingresados y genera actas técnicas
                    siguiendo los estándares requeridos por las autoridades. El proceso incluye validación de datos,
                    análisis estadístico, generación de gráficos y tablas, conclusiones técnicas automatizadas, y
                    cumplimiento con las normativas legales aplicables. Las actas incluyen metadatos, certificaciones y
                    trazabilidad completa del proceso de medición.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Qué formatos de archivo soporta?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    ACTUA 2.0 soporta múltiples formatos de entrada incluyendo CSV, Excel (.xlsx, .xls), formatos
                    específicos de sonómetros profesionales (como archivos .wav para análisis acústico), archivos de
                    texto delimitados, y formatos propietarios de equipos de medición. Los reportes se pueden exportar
                    en PDF (para distribución oficial), Word (.docx), Excel (para análisis adicional), y formatos de
                    imagen (PNG, JPG) para gráficos individuales.
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
                    ACTUA 2.0 cumple con normativas internacionales de medición acústica como ISO 1996 (descripción,
                    medición y evaluación del ruido ambiental), IEC 61672 (sonómetros), y estándares nacionales
                    específicos para procedimientos policiales y técnicos. La aplicación también incorpora protocolos de
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
