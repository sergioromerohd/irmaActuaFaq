"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Cpu, Settings, Activity, Zap, Monitor, ArrowRight } from "lucide-react"
import { IrmaDigitalTwin } from "@/components/IrmaDigitalTwin"


export default function IrmaDevicePage() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.3
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${rate}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">

      {/* Main Device Showcase (Digital Twin) */}
      <IrmaDigitalTwin />

      {/* Technical Models Section */}


      

      <section className="py-20 text-center">
         <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-8">¿Listo para monitorizar tu infraestructura?</h3>
            <Link href="/contacto">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Contactar Ventas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
         </div>
      </section>

    </div>
  )
}
