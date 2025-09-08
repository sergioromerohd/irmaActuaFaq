"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Building2, 
  Users, 
  MessageSquare, 
  ExternalLink,
  Linkedin
} from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <MessageSquare className="h-10 w-10 text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-5xl font-bold">Contacto</h2>
                <p className="text-xl text-muted-foreground">¿En qué podemos ayudarte?</p>
              </div>
            </div>

            <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Ponte en contacto con nuestro equipo especializado para resolver cualquier duda sobre ACTUA 2.0, IRMA 
              o cualquiera de nuestros servicios de acústica y análisis de vibraciones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="https://dbbasico.es/contactar-con-dbbasico/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 group">
                  Formulario de Contacto
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="mailto:contacto@dbbasico.es">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 group">
                  Enviar Email
                  <Mail className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4">Información de Contacto</h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Múltiples formas de ponerte en contacto con nosotros
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Phone */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Teléfonos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center space-y-2">
                    <div>
                      <p className="font-semibold text-primary">Comercial</p>
                      <Link href="tel:+34667072911" className="text-muted-foreground hover:text-foreground transition-colors">
                        667 07 29 11
                      </Link>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Administración</p>
                      <Link href="tel:+34925811128" className="text-muted-foreground hover:text-foreground transition-colors">
                        925 81 11 28
                      </Link>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Madrid</p>
                      <Link href="tel:+34914454565" className="text-muted-foreground hover:text-foreground transition-colors">
                        914 45 45 65
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <Link 
                      href="mailto:contacto@dbbasico.es" 
                      className="text-accent hover:text-accent/80 transition-colors font-medium"
                    >
                      contacto@dbbasico.es
                    </Link>
                    <p className="text-sm text-muted-foreground mt-2">
                      Respuesta en menos de 24 horas
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* LinkedIn */}
              <Card className="group hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
                <CardHeader className="text-center">
                  <div className="h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Linkedin className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">LinkedIn</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <Link 
                      href="https://es.linkedin.com/company/dbbásico-servicios-de-acústica" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-500 transition-colors font-medium inline-flex items-center gap-2"
                    >
                      Síguenos en LinkedIn
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                    <p className="text-sm text-muted-foreground mt-2">
                      Últimas noticias y actualizaciones
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4">Nuestras Oficinas</h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Encuentra la oficina más cercana a ti
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Talavera Office */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Talavera de la Reina</CardTitle>
                      <Badge variant="secondary" className="mt-1">Oficina Principal</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="font-medium">Paseo de la Florida, nº 8</p>
                      <p className="text-muted-foreground">45600 Talavera de la Reina</p>
                      <p className="text-muted-foreground">Toledo</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <Link href="tel:+34925811128" className="text-muted-foreground hover:text-foreground transition-colors">
                      925 81 11 28
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Madrid Office */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Madrid</CardTitle>
                      <Badge variant="secondary" className="mt-1 bg-accent/20 text-accent">Delegación</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="font-medium">C/ San Hermenegildo, 11</p>
                      <p className="text-muted-foreground">28015 Madrid</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <Link href="tel:+34914454565" className="text-muted-foreground hover:text-foreground transition-colors">
                      914 45 45 65
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h3 className="text-4xl font-bold">¿Cómo podemos ayudarte?</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nuestro equipo especializado puede asistirte con consultas sobre nuestras aplicaciones y servicios
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 group">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Image
                    src="/images/actua-sonometer.png"
                    alt="ACTUA 2.0"
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <h4 className="text-2xl font-bold mb-4">ACTUA 2.0</h4>
                <p className="text-muted-foreground mb-6">
                  Consultas sobre análisis de sonometría, generación de actas técnicas y procedimientos oficiales
                </p>
                <div className="flex flex-col gap-2">
                  <Link href="/actua">
                    <Button variant="outline" className="w-full">Ver información</Button>
                  </Link>
                  <Link href="https://actua2.dbblab.es/" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full">Usar aplicación</Button>
                  </Link>
                </div>
              </Card>

              <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 group">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Image
                    src="/images/irma-logo.png"
                    alt="IRMA"
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <h4 className="text-2xl font-bold mb-4">IRMA</h4>
                <p className="text-muted-foreground mb-6">
                  Ayuda con sensores "setas", monitoreo de vibraciones y configuración de alertas
                </p>
                <div className="flex flex-col gap-2">
                  <Link href="/irma">
                    <Button variant="outline" className="w-full">Ver información</Button>
                  </Link>
                  <Link href="https://irmaweb.dbblab.es/" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-accent hover:bg-accent/90">Usar aplicación web</Button>
                  </Link>
                </div>
              </Card>
            </div>

            <div className="pt-8">
              <p className="text-muted-foreground mb-6">
                <strong>Otros servicios:</strong> Certificados acústicos, ensayos in situ, acondicionamiento acústico, 
                consultoría especializada en ruido y vibraciones.
              </p>
              <Link href="https://dbbasico.es/contactar-con-dbbasico/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg px-8 py-6 group">
                  Contacta con nosotros
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer moved to global layout */}
    </div>
  )
}
