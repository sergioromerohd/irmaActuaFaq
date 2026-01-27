"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Play, ExternalLink } from "lucide-react"

export interface FeatureCard {
  title: string
  subtitle: string
  description: string
  icon?: React.ReactNode
}

export interface AppLandingProps {
  /** App name displayed in hero */
  name: string
  /** Short tagline/description */
  tagline: string
  /** Longer description for hero section */
  description: string
  /** Hero image path (relative to /public) */
  heroImage?: string
  /** YouTube video URL (optional) */
  youtubeUrl?: string
  /** Feature cards array */
  features: FeatureCard[]
  /** Custom accent color (defaults to app-primary green) */
  accentColor?: string
}

function getYoutubeEmbedUrl(url: string): string | null {
  if (!url) return null
  
  // Handle different YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s?]+)/,
    /youtube\.com\/shorts\/([^&\s?]+)/
  ]
  
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) {
      return `https://www.youtube.com/embed/${match[1]}?rel=0&modestbranding=1`
    }
  }
  return null
}

export function AppLandingTemplate({
  name,
  tagline,
  description,
  heroImage,
  youtubeUrl,
  features,
}: AppLandingProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  const embedUrl = youtubeUrl ? getYoutubeEmbedUrl(youtubeUrl) : null

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-app-primary/5 via-background to-app-primary/10"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-app-primary/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-app-primary/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <motion.div 
          style={{ y, opacity }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative text-center lg:text-left"
            >
              <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center lg:justify-start">
                <Image
                  src="/images/irma-logo.png"
                  alt="IRMA"
                  width={520}
                  height={520}
                  className="opacity-10 dark:opacity-15 blur-[1px]"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-app-primary/10 text-app-primary text-sm font-medium mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-app-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-app-primary"></span>
                </span>
                Aplicación IRMA
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              >
                <span className="bg-gradient-to-r from-app-primary via-app-primary-light to-app-primary bg-clip-text text-transparent">
                  {name}
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-app-primary/80 font-medium mb-4"
              >
                {tagline}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0"
              >
                {description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start"
              >
                <a 
                  href="#video"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-app-primary text-white font-medium rounded-xl hover:bg-app-primary/90 transition-all hover:scale-105 shadow-lg shadow-app-primary/25"
                >
                  <Play className="h-5 w-5" />
                  Ver demo
                </a>
                <a 
                  href="#features"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-app-primary/20 text-foreground font-medium rounded-xl hover:border-app-primary/50 transition-all hover:scale-105"
                >
                  Características
                  <ExternalLink className="h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Media */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative max-w-3xl mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-app-primary/20 rounded-3xl blur-2xl transform rotate-6" />

                {embedUrl ? (
                  <div className="relative z-10 w-full aspect-video rounded-3xl overflow-hidden bg-card border border-app-primary/20 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-app-primary/10 to-transparent pointer-events-none" />
                    <div className="absolute top-0 left-0 right-0 h-10 bg-muted/40 border-b border-border flex items-center px-4">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <span className="mx-auto text-xs text-muted-foreground font-mono">
                        {name} · Demo
                      </span>
                    </div>
                    <div className="absolute inset-0 pt-10">
                      <iframe
                        src={embedUrl}
                        title={`${name} Demo Video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                ) : heroImage ? (
                  <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden">
                    <Image
                      src={heroImage}
                      alt={name}
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                ) : (
                  <div className="relative z-10 w-full aspect-square rounded-3xl bg-gradient-to-br from-app-primary/20 to-app-primary/5 border border-app-primary/20 flex items-center justify-center">
                    <span className="text-8xl font-bold text-app-primary/30">
                      {name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Características de{" "}
              <span className="text-app-primary">{name}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Funcionalidades diseñadas para optimizar tu experiencia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCardComponent feature={feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCardComponent({ feature }: { feature: FeatureCard }) {
  return (
    <Card className={cn(
      "group relative overflow-hidden p-6 h-full",
      "bg-card/50 backdrop-blur-sm",
      "border border-border/50",
      "transition-all duration-500 ease-out",
      "hover:border-app-primary/50 hover:shadow-xl hover:shadow-app-primary/10",
      "hover:-translate-y-1"
    )}>
      {/* Hover gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-app-primary/0 via-app-primary/0 to-app-primary/0 group-hover:from-app-primary/5 group-hover:via-transparent group-hover:to-app-primary/10 transition-all duration-500" />
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-app-primary/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        {feature.icon && (
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-app-primary/10 text-app-primary mb-4 group-hover:scale-110 group-hover:bg-app-primary/20 transition-all duration-300">
            {feature.icon}
          </div>
        )}
        
        <h3 className="text-xl font-semibold mb-2 group-hover:text-app-primary transition-colors duration-300">
          {feature.title}
        </h3>
        
        <p className="text-sm text-app-primary/70 font-medium mb-3">
          {feature.subtitle}
        </p>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Bottom border animation */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-app-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </Card>
  )
}
