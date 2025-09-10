"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { GraduationCap, ArrowRight, HelpCircle, Clock, Users, Award } from "lucide-react"

export default function CiaFaqPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl font-bold">CIA - FAQ</h1>
                <p className="text-lg text-muted-foreground">Preguntas Frecuentes sobre Cursos de Inspecciones Acústicas</p>
              </div>
            </div>

            <Badge variant="secondary" className="bg-primary text-primary-foreground px-4 py-2">
              Formación Profesional Especializada
            </Badge>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Resuelve todas tus dudas sobre nuestros cursos de formación en inspecciones acústicas para agentes de policía y personal técnico.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* General */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                Información General
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="que-es-cia">
                  <AccordionTrigger>¿Qué es CIA - Cursos de Inspecciones Acústicas?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    CIA es nuestro programa de formación especializada en inspecciones acústicas, diseñado específicamente para agentes de policía y personal técnico. 
                    Ofrecemos una formación progresiva con 4 niveles de certificación, desde conceptos básicos hasta especialización avanzada, 
                    complementada con jornadas temáticas específicas sobre casos especiales como vehículos, vibraciones, limitadores y elaboración de actas.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="a-quien-dirigido">
                  <AccordionTrigger>¿A quién está dirigida la formación CIA?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <div className="space-y-3">
                      <p><strong>Público objetivo principal:</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Agentes de Policía:</strong> Especialmente aquellos encargados de realizar inspecciones acústicas en el ámbito municipal</li>
                        <li><strong>Personal Técnico:</strong> Profesionales de ayuntamientos y administraciones públicas</li>
                        <li><strong>Técnicos de consultorías:</strong> Profesionales que necesitan certificación para inspecciones oficiales</li>
                        <li><strong>Ingenieros y técnicos ambientales:</strong> Especialistas que requieren formación específica en normativa acústica</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="niveles-certificacion">
                  <AccordionTrigger>¿Cuáles son los niveles de certificación disponibles?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-foreground">Nivel I - Fundamentos (16h)</h4>
                        <p>Conocimientos básicos, elaboración de actas, normativa de aplicación. Incluye examen teórico y certificado de asistencia.</p>
                      </div>
                      <div className="border-l-4 border-accent pl-4">
                        <h4 className="font-semibold text-foreground">Nivel II - Profundización (24h)</h4>
                        <p>Procedimientos avanzados, ejercicio de intercomparación. Incluye examen teórico, ejercicio práctico y certificado de aptitud.</p>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-foreground">Nivel III - Procesado de Datos (24h)</h4>
                        <p>Análisis de datos, fichas de resultados. Incluye certificación ACTUA para uso de nuestra aplicación profesional.</p>
                      </div>
                      <div className="border-l-4 border-accent pl-4">
                        <h4 className="font-semibold text-foreground">Nivel IV - Informes y Medidas (16h)</h4>
                        <p>Redacción de informes técnicos y propuesta de medidas correctoras. Certificación completa.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Metodología */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Metodología y Duración
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="metodologia">
                  <AccordionTrigger>¿Cómo se desarrollan los cursos?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <div className="space-y-3">
                      <p>Nuestros cursos combinan teoría y práctica con una metodología probada:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Sesiones teóricas:</strong> Conceptos fundamentales, normativa vigente, casos prácticos</li>
                        <li><strong>Ejercicios prácticos:</strong> Simulaciones reales de inspección, uso de instrumentación</li>
                        <li><strong>Intercomparación:</strong> Ejercicios de validación entre participantes</li>
                        <li><strong>Evaluación continua:</strong> Seguimiento personalizado del progreso</li>
                        <li><strong>Material especializado:</strong> Documentación técnica y casos de estudio reales</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="duraciones">
                  <AccordionTrigger>¿Cuál es la duración total de la formación completa?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <div className="space-y-4">
                      <p><strong>Formación básica completa (Niveles I-IV):</strong> 80 horas</p>
                      <p><strong>Jornadas especializadas adicionales:</strong> 32 horas (4 jornadas de 8h cada una)</p>
                      <p><strong>Total formación completa:</strong> 112 horas</p>
                      
                      <div className="bg-muted/50 rounded-lg p-4 mt-4">
                        <p className="text-sm"><strong>Nota:</strong> Los cursos se pueden realizar de forma modular, no es necesario completar toda la formación de una vez. 
                        Puedes adaptar el ritmo a tus necesidades profesionales.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="modalidad">
                  <AccordionTrigger>¿Los cursos son presenciales u online?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <div className="space-y-3">
                      <p><strong>Modalidad principal:</strong> Presencial</p>
                      <p>Nuestros cursos CIA se imparten principalmente de forma presencial para garantizar:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Práctica real con equipos de medición sonométrica</li>
                        <li>Ejercicios de intercomparación entre participantes</li>
                        <li>Resolución inmediata de dudas técnicas complejas</li>
                        <li>Networking profesional entre agentes y técnicos</li>
                      </ul>
                      <p className="mt-3"><strong>Ubicación:</strong> Instalaciones en Talavera de la Reina (Toledo) o desplazamiento a vuestras instalaciones para grupos.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Jornadas Especializadas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Jornadas Especializadas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="jornadas-tematicas">
                  <AccordionTrigger>¿Qué jornadas temáticas específicas ofrecéis?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="border rounded-lg p-3 bg-muted/30">
                          <h4 className="font-semibold text-foreground mb-1">Ciclomotores y Motocicletas</h4>
                          <p className="text-sm">Inspección de ruidos y protocolo específico para vehículos de dos ruedas</p>
                          <span className="text-xs text-primary font-medium">8 horas</span>
                        </div>
                        <div className="border rounded-lg p-3 bg-muted/30">
                          <h4 className="font-semibold text-foreground mb-1">Vibraciones</h4>
                          <p className="text-sm">Inspección y protocolo de medición de vibraciones</p>
                          <span className="text-xs text-accent font-medium">8 horas</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="border rounded-lg p-3 bg-muted/30">
                          <h4 className="font-semibold text-foreground mb-1">Limitadores Acústicos</h4>
                          <p className="text-sm">Protocolo de inspección, elaboración de actas y descarga de datos</p>
                          <span className="text-xs text-primary font-medium">8 horas</span>
                        </div>
                        <div className="border rounded-lg p-3 bg-muted/30">
                          <h4 className="font-semibold text-foreground mb-1">El Acta en Inspecciones</h4>
                          <p className="text-sm">Elaboración correcta de actas en inspecciones acústicas</p>
                          <span className="text-xs text-accent font-medium">8 horas</span>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cuando-jornadas">
                  <AccordionTrigger>¿Cuándo es recomendable realizar las jornadas especializadas?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <div className="space-y-3">
                      <p><strong>Recomendación general:</strong> Después de completar al menos el Nivel II de certificación básica.</p>
                      <p><strong>Casos específicos:</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Jornada de Limitadores:</strong> Especialmente útil para agentes que trabajan con locales de ocio</li>
                        <li><strong>Jornada de Vehículos:</strong> Fundamental para agentes de tráfico y policía local</li>
                        <li><strong>Jornada de Vibraciones:</strong> Recomendable para zonas con actividad industrial</li>
                        <li><strong>Jornada de Actas:</strong> Imprescindible para todos los niveles, puede realizarse en paralelo</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Certificaciones y Validez */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Certificaciones y Reconocimiento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="validez-certificados">
                  <AccordionTrigger>¿Qué validez tienen los certificados CIA?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <div className="space-y-3">
                      <p><strong>Reconocimiento profesional:</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Certificados expedidos por DBBASICO - Servicios de Acústica S.L.</li>
                        <li>Reconocidos por ayuntamientos y administraciones públicas</li>
                        <li>Válidos para acreditación en procedimientos oficiales</li>
                        <li>Certificación específica ACTUA para uso de nuestra aplicación profesional</li>
                      </ul>
                      
                      <div className="bg-primary/10 rounded-lg p-4 mt-4">
                        <p className="text-sm text-primary"><strong>Importante:</strong> Nuestros certificados están respaldados por más de 15 años de experiencia 
                        en el sector acústico y el reconocimiento de numerosos ayuntamientos en toda España.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="certificado-actua">
                  <AccordionTrigger>¿Qué incluye el certificado ACTUA?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <div className="space-y-3">
                      <p>El certificado ACTUA se obtiene al completar los Niveles III y IV, e incluye:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Licencia de uso:</strong> Acceso completo a la aplicación ACTUA 2.0</li>
                        <li><strong>Formación específica:</strong> Conocimiento detallado del software</li>
                        <li><strong>Soporte técnico:</strong> Asistencia especializada durante el primer año</li>
                        <li><strong>Actualizaciones:</strong> Acceso a nuevas funcionalidades y normativas</li>
                        <li><strong>Documentación técnica:</strong> Manuales y guías de usuario</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="renovacion">
                  <AccordionTrigger>¿Necesitan renovarse los certificados?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <div className="space-y-3">
                      <p><strong>Certificados CIA:</strong> No tienen fecha de caducidad, pero recomendamos:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Cursos de actualización cada 3-5 años debido a cambios normativos</li>
                        <li>Jornadas de reciclaje cuando hay nuevas normativas</li>
                        <li>Sesiones de actualización en nuevas tecnologías</li>
                      </ul>
                      
                      <p><strong>Certificado ACTUA:</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Se mantiene activo mientras tengas suscripción a ACTUA 2.0</li>
                        <li>Actualizaciones automáticas incluidas</li>
                        <li>Formación adicional gratuita en nuevas funcionalidades</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Aspectos Prácticos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Aspectos Prácticos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="grupos-tamano">
                  <AccordionTrigger>¿Cuál es el tamaño máximo de los grupos?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <div className="space-y-3">
                      <p><strong>Máximo por grupo:</strong> 10 participantes</p>
                      <p><strong>Razones del límite:</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Garantizar atención personalizada a cada participante</li>
                        <li>Permitir práctica individual con equipos de medición</li>
                        <li>Facilitar ejercicios de intercomparación efectivos</li>
                        <li>Asegurar resolución de dudas específicas</li>
                      </ul>
                      
                      <div className="bg-accent/10 rounded-lg p-4 mt-4">
                        <p className="text-sm text-accent-foreground"><strong>Grupos grandes:</strong> Para organizaciones con más de 10 personas, 
                        organizamos múltiples sesiones o cursos consecutivos.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="requisitos-previos">
                  <AccordionTrigger>¿Hay requisitos previos para participar?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <div className="space-y-3">
                      <p><strong>Para Nivel I:</strong> No se requieren conocimientos previos</p>
                      <p><strong>Para niveles superiores:</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Nivel II: Haber completado Nivel I o tener experiencia básica</li>
                        <li>Nivel III: Haber completado Nivel II</li>
                        <li>Nivel IV: Haber completado Nivel III</li>
                      </ul>
                      
                      <p><strong>Recomendaciones generales:</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Conocimientos básicos de matemáticas</li>
                        <li>Familiaridad con uso de equipos técnicos</li>
                        <li>Experiencia en procedimientos administrativos (recomendable)</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="material-incluido">
                  <AccordionTrigger>¿Qué material está incluido en los cursos?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <div className="space-y-3">
                      <p><strong>Material didáctico:</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Manual técnico específico de cada nivel</li>
                        <li>Documentación normativa actualizada</li>
                        <li>Casos prácticos y ejercicios resueltos</li>
                        <li>Plantillas de actas e informes</li>
                        <li>Acceso a recursos digitales</li>
                      </ul>
                      
                      <p><strong>Equipos de práctica:</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Sonómetros profesionales para ejercicios</li>
                        <li>Calibradores acústicos</li>
                        <li>Software de análisis (incluido ACTUA en niveles correspondientes)</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8 text-center space-y-6">
              <h3 className="text-2xl font-bold">¿Listo para comenzar tu formación en CIA?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Si tienes más preguntas o necesitas información personalizada sobre nuestros cursos, 
                no dudes en contactarnos. Estaremos encantados de ayudarte a elegir la formación que mejor se adapte a tus necesidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/contacto">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 group">
                    Contactar para más información
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/cia">
                  <Button size="lg" variant="outline" className="group">
                    Ver información completa de CIA
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
