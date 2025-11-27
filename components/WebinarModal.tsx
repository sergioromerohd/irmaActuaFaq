"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function WebinarModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show modal after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-background rounded-3xl shadow-2xl overflow-hidden border border-primary/20"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header Image/Gradient */}
            <div className="relative h-40 bg-gradient-to-r from-primary to-blue-600 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('/images/playmobil-city.png')] bg-cover bg-center opacity-30 mix-blend-overlay" />
              <div className="relative z-10 text-center p-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-2 backdrop-blur-md border border-white/20">
                    EVENTO EN VIVO
                  </span>
                  <h2 className="text-3xl font-bold text-white drop-shadow-md">Webinar ACTUA 2.0</h2>
                </motion.div>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 space-y-6">
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-semibold text-foreground">Domina la herramienta definitiva</h3>
                <p className="text-muted-foreground">
                  Aprende a utilizar ACTUA 2.0, generar actas y cumplir la normativa en una sesión práctica con nuestros expertos.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground bg-muted/50 p-4 rounded-xl">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>16 de Diciembre</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border" />
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Hora por confirmar</span>
                </div>
              </div>

              <div className="space-y-3">
                <Link 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd763RLVpM-TbN7hmXXe48KmRaN5Tp0vK9jnpIQvzIU_eNNPw/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button className="w-full text-lg h-12 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg shadow-primary/25 group">
                    Inscribirme Gratis
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  className="w-full text-muted-foreground hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  No, gracias
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
