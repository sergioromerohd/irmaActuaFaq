"use client"

import { useState, useEffect } from "react"
import { Activity, Battery, Wifi, Settings, RefreshCw, Power, Play, RotateCw, BarChart3, List } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function IrmaLiveSimulator() {
  const [isOn, setIsOn] = useState(true)
  const [activeTab, setActiveTab] = useState<"resumen" | "grafico" | "analisis">("resumen")
  const [currentTime, setCurrentTime] = useState("")
  
  // Data states
  const [fPeak, setFPeak] = useState(104.43)
  const [rms, setRms] = useState(0.0506)

  // Update time and data
  useEffect(() => {
    const update = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString("es-ES", { hour12: false }))
      
      if (isOn) {
        // Simulate slight fluctuations for realism
        setFPeak(prev => Number((104.43 + (Math.random() - 0.5) * 0.5).toFixed(2)))
        setRms(prev => Number((0.0506 + (Math.random() - 0.5) * 0.001).toFixed(4)))
      }
    }
    
    update()
    const timer = setInterval(update, 1000)
    return () => clearInterval(timer)
  }, [isOn])

  // Generate random data for the chart path
  const [chartPath, setChartPath] = useState("")
  
  useEffect(() => {
    if (!isOn) return

    const generatePath = () => {
       let path = "M 0 100 "
       for (let i = 0; i <= 100; i += 2) {
           const x = i * 4 // Width scaling
           const noise = Math.random() * 80
           const y = 100 - noise
           path += `L ${x} ${y} `
       }
       setChartPath(path)
    }

    generatePath() // Initial render
    const interval = setInterval(generatePath, 800) 
    return () => clearInterval(interval)
  }, [isOn])


  return (
    <section className="py-24 bg-zinc-950 text-white overflow-hidden relative font-sans">
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
             Experiencia de Usuario Real
          </h3>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Interfaz potente e intuitiva. Visualiza el espectro de vibraciones en tiempo real con nuestra tecnología WebSocket de baja latencia.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch justify-center">
            
            {/* Context Left: Device Info (The "Cloud" side sending data) */}
            <div className="hidden lg:flex flex-col justify-center items-end pr-8 border-r border-zinc-800/50 w-1/3 relative">
                 
                 {/* Emitting Device Visualization */}
                 <div className="relative w-48 h-48 mb-8 group">
                    {/* Pulsing effects to simulate data transmission */}
                    <div className={cn("absolute inset-0 bg-blue-500/20 rounded-full blur-3xl transition-opacity duration-1000", isOn ? "opacity-100 animate-pulse" : "opacity-0")} />
                    
                    {isOn && (
                        <>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-blue-500/30 rounded-full animate-[ping_3s_linear_infinite]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-blue-500/20 rounded-full animate-[ping_3s_linear_infinite_1s]" />
                        </>
                    )}

                    <div className="relative z-10 w-full h-full transition-transform duration-500 group-hover:scale-105">
                        <Image 
                            src="/images/setablancaSF.png" 
                            alt="Sensor IRMA Emisor"
                            fill
                            className="object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                        />
                    </div>
                 </div>

                 <div className="text-right space-y-6 relative z-10">
                    <div className="space-y-2">
                        <div className="text-accent font-mono text-xs uppercase tracking-wider">Dispositivo Activo</div>
                        <h4 className="text-3xl font-bold">Seta Roja #4</h4>
                        <div className="flex items-center justify-end gap-2 text-zinc-400 text-sm">
                            <Wifi className={cn("h-4 w-4 text-green-500", isOn && "animate-pulse")} />
                            Conectado vía Wi-Fi
                        </div>
                    </div>
                    
                    
                 </div>
            </div>

            {/* Main Simulator UI (The Black Card) */}
            <div className="w-full lg:w-2/3 max-w-2xl">
                {/* Fake Browser/App Toolbar */}
                <div className="flex items-center gap-2 mb-4">
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded text-xs text-zinc-300 hover:text-white transition-colors">
                        <RotateCw className="h-3 w-3" />
                        Actualizar
                    </button>
                    <button 
                        onClick={() => setIsOn(!isOn)}
                        className={cn("flex items-center gap-2 px-4 py-1.5 rounded text-xs transition-colors font-medium border", isOn ? "bg-white text-black border-white hover:bg-zinc-200" : "bg-transparent text-white border-zinc-700")}
                    >
                        <Play className="h-3 w-3 fill-current" />
                        {isOn ? "Grabar" : "Pausado"}
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded text-xs text-zinc-300 hover:text-white transition-colors ml-auto">
                        <Activity className="h-3 w-3" />
                        Aceleración
                    </button>
                </div>

                {/* The "IrmaWeb" Card */}
                <div className="bg-[#0a0a0a] rounded-xl border border-zinc-800 shadow-2xl p-6 relative overflow-hidden ring-1 ring-white/5 min-h-[420px] flex flex-col">
                    {/* Card Header */}
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-1">Roja_4</h2>
                            <div className="text-zinc-500 text-sm font-mono">975 Hz, 512 muestras - Módulo</div>
                            <div className="text-zinc-600 text-xs mt-2">Última actualización: {currentTime}</div>
                        </div>
                        <div className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded text-xs text-zinc-400 font-mono">
                            Módulo → X
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="grid grid-cols-3 gap-1 bg-zinc-900 p-1 rounded-lg mb-8">
                        {["Resumen", "Gráfico", "Análisis"].map((tab) => {
                             const tabKey = tab.toLowerCase().replace('á','a') as "resumen" | "grafico" | "analisis";
                             const isActive = activeTab === tabKey;
                             return (
                                 <button
                                    key={tab}
                                    onClick={() => setActiveTab(tabKey)}
                                    className={cn(
                                        "py-2 text-sm font-medium rounded-md transition-all",
                                        isActive 
                                        ? "bg-[#1a1a1a] text-white shadow-sm ring-1 ring-zinc-700"
                                        : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50"
                                    )}
                                 >
                                    {tab}
                                 </button>
                             )
                        })}
                    </div>

                    {/* Content Area Based on Active Tab */}
                    <div className="flex-1 relative">
                        {activeTab === "resumen" && (
                            <div className="grid grid-cols-2 gap-8 animate-in fade-in zoom-in-95 duration-200">
                                <div className="space-y-2">
                                    <div className="text-zinc-500 text-sm font-medium">f Peak (Hz)</div>
                                    <div className="text-5xl font-bold text-white tracking-tight tabular-nums">
                                        {fPeak}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-zinc-500 text-sm font-medium">RMS m/s²</div>
                                    <div className="text-5xl font-bold text-white tracking-tight tabular-nums">
                                        {rms}
                                    </div>
                                </div>
                                <div className="col-span-2 pt-4 border-t border-zinc-800/50 mt-4">
                                    <div className="grid grid-cols-3 gap-4">
                                        
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "grafico" && (
                             <div className="relative h-64 w-full bg-[#050505] rounded-lg border border-zinc-800/50 p-4 animate-in fade-in zoom-in-95 duration-200">
                                {/* Grid Lines (Vertical Dashed) */}
                                <div className="absolute inset-0 flex justify-between px-8 pointer-events-none">
                                    <div className="h-full w-px border-l border-dashed border-zinc-800/60" />
                                    <div className="h-full w-px border-l border-dashed border-zinc-800/60" />
                                    <div className="h-full w-px border-l border-dashed border-zinc-800/60" />
                                    <div className="h-full w-px border-l border-dashed border-zinc-800/60" />
                                </div>
                                 {/* Grid Lines (Horizontal Dashed) */}
                                <div className="absolute inset-0 flex flex-col justify-between py-8 pointer-events-none">
                                     <div className="w-full h-px border-t border-dashed border-zinc-800/60" />
                                     <div className="w-full h-px border-t border-dashed border-zinc-800/60" />
                                     <div className="w-full h-px border-t border-dashed border-zinc-800/60" />
                                     <div className="w-full h-px border-t border-dashed border-zinc-800/60" />
                                </div>

                                {/* Y-Axis Labels */}
                                <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[10px] text-zinc-500 font-mono text-right pr-1 py-8 h-full">
                                    <span>0.01</span>
                                    <span>0.0075</span>
                                    <span>0.005</span>
                                    <span>0.0025</span>
                                    <span>0</span>
                                </div>

                                {/* The Graph */}
                                <div className="absolute inset-0 left-8 bottom-6 right-2 top-4">
                                    <svg className="h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 100">
                                        {/* Gradient Def */}
                                        <defs>
                                            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        {/* Area Fill */}
                                        <path 
                                            d={`${chartPath} V 100 H 0 Z`} 
                                            fill="url(#chartGradient)" 
                                            className="transition-all duration-300 ease-linear"
                                        />
                                        {/* Line Stroke */}
                                        <path 
                                            d={chartPath} 
                                            fill="none" 
                                            stroke="#3b82f6" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                            className="drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300 ease-linear"
                                        />
                                    </svg>
                                </div>
                                
                                 {/* X-Axis Labels */}
                                 <div className="absolute bottom-1 left-8 right-2 flex justify-between text-[10px] text-zinc-500 font-mono">
                                    <span>11.43</span>
                                    <span>51.42</span>
                                    <span>93.31</span>
                                    <span>139.01</span>
                                    <span>179</span>
                                    <span>241.85</span>
                                </div>
                            </div>
                        )}
                        
                        {activeTab === "analisis" && (
                            <div className="animate-in fade-in zoom-in-95 duration-200 space-y-2">
                                <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded border border-zinc-800">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">H1</div>
                                        <div>
                                            <div className="text-sm font-medium text-white">1er Armónico</div>
                                            <div className="text-xs text-zinc-500">Fundamental</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-mono text-white">50.00 Hz</div>
                                        <div className="text-xs text-zinc-500">0.024 g</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded border border-zinc-800">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-400/80 font-bold text-xs">H2</div>
                                        <div>
                                            <div className="text-sm font-medium text-zinc-200">2do Armónico</div>
                                            <div className="text-xs text-zinc-500">Desequilibrio</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-mono text-zinc-200">100.00 Hz</div>
                                        <div className="text-xs text-zinc-500">0.008 g</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded border border-zinc-800">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-400/80 font-bold text-xs">H3</div>
                                        <div>
                                            <div className="text-sm font-medium text-zinc-200">3er Armónico</div>
                                            <div className="text-xs text-zinc-500">Alineación</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-mono text-zinc-200">150.00 Hz</div>
                                        <div className="text-xs text-zinc-500">0.003 g</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded border border-zinc-800 mt-4">
                                     <div className="text-xs text-zinc-500">Estado de Alarma</div>
                                     <div className="px-2 py-0.5 rounded bg-green-900/30 text-green-400 text-xs border border-green-900/50 uppercase tracking-wider font-medium">Normal</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
