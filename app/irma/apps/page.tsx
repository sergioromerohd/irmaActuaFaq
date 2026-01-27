"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { appsNavList } from "@/lib/apps-data"
import { DynamicIcon } from "@/components/DynamicIcon"
import { ArrowRight } from "lucide-react"

export default function AppsIndexPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-app-primary/10 text-app-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-app-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-app-primary"></span>
            </span>
            Ecosistema IRMA
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-app-primary via-app-primary-light to-app-primary bg-clip-text text-transparent">
              Aplicaciones
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Suite de aplicaciones especializadas para monitorización ambiental, 
            análisis de ruido, confort y seguridad en eventos
          </p>
        </motion.div>

        {/* Apps Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {appsNavList.map((app, index) => {
            return (
              <motion.div
                key={app.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/irma/apps/${app.slug}`}>
                  <Card className="group relative overflow-hidden p-8 h-full bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-500 ease-out hover:border-app-primary/50 hover:shadow-xl hover:shadow-app-primary/10 hover:-translate-y-2 cursor-pointer">
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-app-primary/0 to-app-primary/0 group-hover:from-app-primary/5 group-hover:to-app-primary/10 transition-all duration-500" />
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-app-primary/10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500" />
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-app-primary/10 text-app-primary mb-6 group-hover:scale-110 group-hover:bg-app-primary/20 transition-all duration-300">
                        <DynamicIcon name={app.iconName} className="w-8 h-8" />
                      </div>
                      
                      {/* Content */}
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-app-primary transition-colors duration-300">
                        {app.name}
                      </h2>
                      
                      <p className="text-muted-foreground mb-6">
                        {app.description}
                      </p>
                      
                      {/* CTA */}
                      <div className="flex items-center gap-2 text-app-primary font-medium">
                        <span>Explorar</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Bottom border animation */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-app-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Coming soon teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground">
            Más aplicaciones próximamente...
          </p>
        </motion.div>
      </div>
    </div>
  )
}
