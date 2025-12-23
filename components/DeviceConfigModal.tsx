"use client"

import * as React from "react"
import { 
  Settings, 
  RefreshCw, 
  Trash2, 
  Smartphone, 
  Cable, 
  Power,
  RotateCcw,
  Terminal,
  Wifi,
  Save,
  Loader2,
  AlertTriangle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function DeviceConfigModal() {
  const [port, setPort] = React.useState<any>(null)
  const [isConnected, setIsConnected] = React.useState(false)
  const [logs, setLogs] = React.useState<string[]>([])
  const [newId, setNewId] = React.useState("")
  const [currentId, setCurrentId] = React.useState<string | null>(null)
  const [reader, setReader] = React.useState<ReadableStreamDefaultReader | null>(null)
  const [writer, setWriter] = React.useState<WritableStreamDefaultWriter | null>(null)
  const logEndRef = React.useRef<HTMLDivElement>(null)

  // Scroll to bottom of logs
  React.useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [logs])

  const addLog = (message: string, type: 'tx' | 'rx' | 'sys' = 'sys') => {
    const timestamp = new Date().toLocaleTimeString()
    const prefix = type === 'tx' ? '>> ' : type === 'rx' ? '<< ' : '[SYS] '
    setLogs(prev => [...prev.slice(-49), `${timestamp} ${prefix}${message}`]) 
    
    // Parse ID from response if it looks like an ID
    if (type === 'rx') {
      if (message.includes("ID:")) {
         setCurrentId(message.split("ID:")[1].trim())
      }
    }
  }

  const connectSerial = async () => {
    try {
      if (!("serial" in navigator)) {
        alert("Tu navegador no soporta Web Serial API. Usa Chrome o Edge.")
        return
      }

      // @ts-ignore
      const port = await navigator.serial.requestPort()
      await port.open({ baudRate: 115200 })
      setPort(port)
      setIsConnected(true)
      addLog("Dispositivo conectado", 'sys')

      // Setup reader
      const textDecoder = new TextDecoderStream()
      const readableStreamClosed = port.readable.pipeTo(textDecoder.writable)
      const reader = textDecoder.readable.getReader()
      setReader(reader)

      // Setup writer
      const textEncoder = new TextEncoderStream()
      const writableStreamClosed = textEncoder.readable.pipeTo(port.writable)
      const writer = textEncoder.writable.getWriter()
      setWriter(writer)

      // Initial query
      await writeToPort(writer, "GET_ID")
      
      // Read loop
      readLoop(reader)
      
    } catch (err: any) {
      console.error(err)
      addLog(`Error de conexión: ${err.message}`, 'sys')
    }
  }

  const disconnectSerial = async () => {
      if (reader) {
          await reader.cancel()
          setReader(null)
      }
      if (writer) {
          await writer.close()
          setWriter(null)
      }
      if (port) {
          await port.close()
          setPort(null)
      }
      setIsConnected(false)
      setCurrentId(null)
      addLog("Dispositivo desconectado", 'sys')
  }

  const readLoop = async (reader: ReadableStreamDefaultReader) => {
    try {
      while (true) {
        const { value, done } = await reader.read()
        if (done) break
        if (value) {
            // Split by lines just in case
            const lines = value.split('\n')
            lines.forEach((line: string) => {
                if(line.trim()) addLog(line.trim(), 'rx')
            })
        }
      }
    } catch (err) {
      console.error(err)
    }
  }

  const writeToPort = async (writerInstance: any, data: string) => {
     if (!writerInstance) return
     try {
         await writerInstance.write(data + "\n")
         addLog(data, 'tx')
     } catch (err: any) {
         addLog(`Error enviando: ${err.message}`, 'sys')
     }
  }

  const handleCommand = async (cmd: string) => {
      await writeToPort(writer, cmd)
  }

  const handleSetId = async () => {
      if (!newId) return
      await handleCommand(`SET_ID:${newId}`)
      setNewId("")
      // Read back to confirm
      setTimeout(() => handleCommand("GET_ID"), 500)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 border-dashed">
          <Settings className="h-4 w-4" />
          Configurar Dispositivo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl bg-card border-border shadow-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
             <Smartphone className="h-6 w-6 text-primary" />
             Configurador IRMA Seta
          </DialogTitle>
          <DialogDescription>
             Conecta tu dispositivo vía USB para gestionar su ID y configuración interna.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
            {/* Left Column: Controls */}
            <div className="space-y-6">
                 {/* Connection Status */}
                 <Card className="p-4 border-l-4 border-l-primary/50 bg-secondary/10">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                             <div className={`h-3 w-3 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                             <span className="font-medium text-sm">
                                 {isConnected ? "Conectado" : "Desconectado"}
                             </span>
                        </div>
                        {isConnected ? (
                             <Button variant="destructive" size="sm" onClick={disconnectSerial} className="h-7 text-xs">
                                 Desconectar
                             </Button>
                        ) : (
                             <Button size="sm" onClick={connectSerial} className="h-7 text-xs gap-2">
                                <Cable className="h-3 w-3" /> Conectar USB
                             </Button>
                        )}
                    </div>
                    
                    <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground uppercase tracking-wider">ID Actual</Label>
                        <div className="text-2xl font-mono font-bold text-foreground">
                            {currentId || "---"}
                        </div>
                    </div>
                 </Card>

                 {/* Actions */}
                 <div className="space-y-4 opacity-100 transition-opacity duration-300" style={{ opacity: isConnected ? 1 : 0.5, pointerEvents: isConnected ? 'auto' : 'none' }}>
                     
                     <div className="space-y-2">
                        <Label>Establecer Nuevo ID</Label>
                        <div className="flex gap-2">
                            <Input 
                                placeholder="Ej: SALA_TECNICA_01" 
                                value={newId}
                                onChange={(e) => setNewId(e.target.value.toUpperCase())}
                                className="font-mono text-sm"
                            />
                            <Button onClick={handleSetId} disabled={!newId}>
                                <Save className="h-4 w-4" />
                            </Button>
                        </div>
                     </div>

                     <Separator />

                     <div className="grid grid-cols-2 gap-2">
                         <Button variant="outline" onClick={() => handleCommand("GET_ID")} className="justify-start gap-2">
                             <RefreshCw className="h-4 w-4 text-blue-500" />
                             Leer ID
                         </Button>
                         <Button variant="outline" onClick={() => handleCommand("CLEAR_ID")} className="justify-start gap-2 hover:bg-orange-100 hover:text-orange-600 dark:hover:bg-orange-900/20">
                             <Trash2 className="h-4 w-4 text-orange-500" />
                             Borrar ID
                         </Button>
                         <Button variant="outline" onClick={() => handleCommand("FACTORY_RESET")} className="col-span-2 justify-center gap-2 border-red-200 hover:bg-red-100 hover:text-red-700 dark:border-red-900/30 dark:hover:bg-red-900/20">
                             <AlertTriangle className="h-4 w-4 text-red-500" />
                             Reset de Fábrica
                         </Button>
                     </div>
                 </div>
            </div>

            {/* Right Column: Terminal */}
            <div className="flex flex-col h-[400px] bg-zinc-950 rounded-lg border border-zinc-800 p-2 font-mono text-xs overflow-hidden shadow-inner">
                <div className="flex items-center gap-2 text-zinc-400 border-b border-zinc-800 pb-2 mb-2 px-2">
                    <Terminal className="h-3 w-3" />
                    <span>Serial Output</span>
                </div>
                <ScrollArea className="flex-1 w-full p-2">
                    <div className="space-y-1">
                        {logs.length === 0 && <span className="text-zinc-600 italic">Esperando conexión...</span>}
                        {logs.map((log, i) => (
                            <div key={i} className={`break-all ${log.includes(">>") ? 'text-blue-400' : log.includes("<<") ? 'text-green-400' : 'text-zinc-500'}`}>
                                {log}
                            </div>
                        ))}
                        <div ref={logEndRef} />
                    </div>
                </ScrollArea>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
