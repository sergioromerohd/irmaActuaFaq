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
  AlertTriangle,
  Download,
  Upload
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// @ts-ignore
import { ESPLoader, Transport } from "esptool-js"

interface Firmware {
  version: string
  name: string
  filename: string
  releaseDate: string
  description: string
}

export function DeviceConfigModal() {
  const [port, setPort] = React.useState<any>(null)
  const [isConnected, setIsConnected] = React.useState(false)
  const [logs, setLogs] = React.useState<string[]>([])
  const [newId, setNewId] = React.useState("")
  const [currentId, setCurrentId] = React.useState<string | null>(null)
  const [reader, setReader] = React.useState<ReadableStreamDefaultReader | null>(null)
  const [writer, setWriter] = React.useState<WritableStreamDefaultWriter | null>(null)
  const logEndRef = React.useRef<HTMLDivElement>(null)
  
  // Flasher state
  const [isFlashing, setIsFlashing] = React.useState(false)
  const [flashProgress, setFlashProgress] = React.useState(0)
  const [firmwares, setFirmwares] = React.useState<Firmware[]>([])
  const [selectedFirmware, setSelectedFirmware] = React.useState<string>("")

  // Load firmwares
  React.useEffect(() => {
    fetch('/firmware/manifest.json')
      .then(res => res.json())
      .then(data => setFirmwares(data))
      .catch(err => console.error("Error loading firmware manifest:", err))
  }, [])

  // Scroll to bottom of logs
  React.useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [logs])

  const addLog = (message: string, type: 'tx' | 'rx' | 'sys' = 'sys') => {
    const timestamp = new Date().toLocaleTimeString()
    const prefix = type === 'tx' ? '>> ' : type === 'rx' ? '<< ' : '[SYS] '
    // Filter redundant progress logs if needed, but keeping simple for now
    setLogs(prev => [...prev.slice(-49), `${timestamp} ${prefix}${message}`]) 
    
    // Parse ID from response if it looks like an ID
    if (type === 'rx') {
      if (message.includes("ID actual:")) {
         setCurrentId(message.split("ID actual:")[1].trim())
      } else if (message.includes("ID:")) {
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

      // Setup streams for terminal usage
      startTerminalStreams(port)
      
    } catch (err: any) {
      console.error(err)
      addLog(`Error de conexión: ${err.message}`, 'sys')
    }
  }

  const startTerminalStreams = async (portInstance: any) => {
      try {
        const textDecoder = new TextDecoderStream()
        const readableStreamClosed = portInstance.readable.pipeTo(textDecoder.writable)
        const reader = textDecoder.readable.getReader()
        setReader(reader)

        const textEncoder = new TextEncoderStream()
        const writableStreamClosed = textEncoder.readable.pipeTo(portInstance.writable)
        const writer = textEncoder.writable.getWriter()
        setWriter(writer)

        // Initial query
        setTimeout(() => writeToPort(writer, "GET_ID"), 500)
        
        // Read loop
        readLoop(reader)
      } catch (err) {
        console.error("Error starting streams", err)
      }
  }

  const stopTerminalStreams = async () => {
      // Must release locks by canceling reader and closing writer
      if (reader) {
          await reader.cancel()
          setReader(null)
      }
      if (writer) {
          await writer.close()
          setWriter(null)
      }
      // Note: Do NOT close the port itself, or esptool cannot use it.
  }

  const disconnectSerial = async () => {
      await stopTerminalStreams()
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
      setTimeout(() => handleCommand("GET_ID"), 500)
  }

  const handleFlashFirmware = async () => {
      if (!selectedFirmware || !port) return
      
      const fw = firmwares.find(f => f.filename === selectedFirmware)
      if (!fw) return

      try {
          setIsFlashing(true)
          setFlashProgress(0)
          addLog("Iniciando proceso de flasheo...", 'sys')
          addLog("Deteniendo terminal...", 'sys')
          
          // 1. Release locks on the port so esptool can use it
          await stopTerminalStreams()

          // 2. Load the binary file
          addLog(`Descargando firmware: ${fw.filename}...`, 'sys')
          const response = await fetch(`/firmware/${fw.filename}`)
          const blob = await response.blob()
          const data = await blob.arrayBuffer()
           // Use Uint8Array directly if supported, or conversion. 
           // Modern esptool-js accepts Uint8Array in fileArray.data?
           // Actually, let's keep it safe: cleanBinaryString is reliable for older versions, 
           // but let's try just passing the buffer if we can, or improve the string conversion.
          const fileData = new Uint8Array(data)
          const fileString = cleanBinaryString(fileData)
          addLog(`Firmware descargado (${fileData.byteLength} bytes)`, 'sys')

          // 3. Initialize esptool
          const transport = new Transport(port)
          
          // Manual Reset Sequence to ensure bootloader mode
          addLog("Reseteando a modo bootloader...", 'sys')
          await transport.setDTR(false)
          await transport.setRTS(true)
          await new Promise(r => setTimeout(r, 100))
          await transport.setDTR(true)
          await transport.setRTS(false)
          await new Promise(r => setTimeout(r, 100))
          await transport.setDTR(false)

          // ESPLoader requires a terminal-like object for logging
          const term = {
            clean: () => {},
            writeLine: (data: string) => { /* console.log(data) */ },
            write: (data: string) => { /* console.log(data) */ }
          }
           
          // @ts-ignore
          const espLoader = new ESPLoader(transport, 115200, term)
          
          addLog("Conectando al Bootloader...", 'sys')
          
          // Try to connect with explicit mode if possible, but main_fn is standard
          await espLoader.main_fn()
          addLog("Bootloader conectado!", 'sys')

          // 4. Flash
          addLog("Escribiendo flash... (Esto puede tardar)", 'sys')
          const fileArray = [{ data: fileString, address: 0x10000 }] 
          
          await espLoader.write_flash({
              fileArray: fileArray,
              flash_size: "keep",
              erase_all: false,
              compress: true,
              reportProgress: (current: number, total: number) => {
                  setFlashProgress(Math.round((current / total) * 100))
              },
              calculateMD5Hash: (image: string) => image 
          })

          addLog("Flasheo completado exitosamente!", 'sys')
          addLog("Reiniciando dispositivo...", 'sys')
          
          // Hard reset to run app
          await transport.setDTR(false)
          await transport.setRTS(true)
          await new Promise(resolve => setTimeout(resolve, 100))
          await transport.setRTS(false)
          
      } catch (err: any) {
          console.error(err)
          addLog(`Error flasheando: ${err.message}`, 'sys')
      } finally {
          setIsFlashing(false)
          // Re-enable terminal
          addLog("Reconectando terminal...", 'sys')
          // We might need to close and re-open port entirely if state is messed up, 
          // but usually starting streams again checks out.
          // Ideally: await port.close(); await port.open(...)
          // But user permission persists. 
          try {
             await startTerminalStreams(port)
          } catch (e) {
             addLog("Error reconectando terminal. Por favor reconecta USB.", 'sys')
             setIsConnected(false)
          }
      }
  }
  
  function cleanBinaryString(data: Uint8Array): string {
      let str = "";
      for (let i = 0; i < data.length; i++) {
          str += String.fromCharCode(data[i]);
      }
      return str;
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
             Conecta tu dispositivo vía USB para gestionar su ID o actualizar el firmware.
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
                             <Button variant="destructive" size="sm" onClick={disconnectSerial} className="h-7 text-xs" disabled={isFlashing}>
                                 Desconectar
                             </Button>
                        ) : (
                             <Button size="sm" onClick={connectSerial} className="h-7 text-xs gap-2">
                                <Cable className="h-3 w-3" /> Conectar USB
                             </Button>
                        )}
                    </div>
                 </Card>

                 {/* Config Tabs */}
                 <Tabs defaultValue="config" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="config" disabled={!isConnected || isFlashing}>Configuración</TabsTrigger>
                        <TabsTrigger value="firmware" disabled={!isConnected}>Firmware</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="config" className="space-y-4 pt-4">
                         <div className="space-y-1">
                            <Label className="text-xs text-muted-foreground uppercase tracking-wider">ID Actual</Label>
                            <div className="text-2xl font-mono font-bold text-foreground">
                                {currentId || "---"}
                            </div>
                         </div>
                         <Separator />
                         <div className="space-y-2">
                            <Label>Establecer Nuevo ID</Label>
                            <div className="flex gap-2">
                                <Input 
                                    placeholder="Ej: SALA_TECNICA_01" 
                                    value={newId}
                                    onChange={(e) => setNewId(e.target.value.toUpperCase())}
                                    className="font-mono text-sm"
                                    disabled={!isConnected}
                                />
                                <Button onClick={handleSetId} disabled={!newId || !isConnected}>
                                    <Save className="h-4 w-4" />
                                </Button>
                            </div>
                         </div>
                         <div className="grid grid-cols-2 gap-2 mt-4">
                             <Button variant="outline" onClick={() => handleCommand("GET_ID")} disabled={!isConnected} className="justify-start gap-2">
                                 <RefreshCw className="h-4 w-4 text-blue-500" /> Leer ID
                             </Button>
                             <Button variant="outline" onClick={() => handleCommand("CLEAR_ID")} disabled={!isConnected} className="justify-start gap-2 hover:bg-orange-100 hover:text-orange-600 dark:hover:bg-orange-900/20">
                                 <Trash2 className="h-4 w-4 text-orange-500" /> Borrar ID
                             </Button>
                             <Button variant="outline" onClick={() => handleCommand("FACTORY_RESET")} disabled={!isConnected} className="col-span-2 justify-center gap-2 border-red-200 hover:bg-red-100 hover:text-red-700 dark:border-red-900/30 dark:hover:bg-red-900/20">
                                 <AlertTriangle className="h-4 w-4 text-red-500" /> Reset de Fábrica
                             </Button>
                         </div>
                    </TabsContent>

                    <TabsContent value="firmware" className="space-y-4 pt-4">
                        <div className="space-y-4">
                           <Label>Versiones Disponibles</Label>
                           <ScrollArea className="h-[200px] border rounded-md p-2">
                             {firmwares.map((fw) => (
                               <div 
                                 key={fw.filename} 
                                 className={`p-3 rounded-lg mb-2 cursor-pointer transition-colors border ${selectedFirmware === fw.filename ? 'bg-primary/10 border-primary' : 'bg-card border-border hover:bg-accent'}`}
                                 onClick={() => !isFlashing && setSelectedFirmware(fw.filename)}
                               >
                                 <div className="flex justify-between items-start mb-1">
                                    <span className="font-bold">{fw.version}</span>
                                    <Badge variant="outline" className="text-[10px]">{fw.releaseDate}</Badge>
                                 </div>
                                 <div className="text-sm font-medium">{fw.name}</div>
                                 <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{fw.description}</p>
                               </div>
                             ))}
                           </ScrollArea>
                           
                           {isFlashing ? (
                               <div className="space-y-2">
                                   <div className="flex justify-between text-xs text-muted-foreground">
                                       <span>Flasheando...</span>
                                       <span>{flashProgress}%</span>
                                   </div>
                                   <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                       <div 
                                         className="h-full bg-primary transition-all duration-300"
                                         style={{ width: `${flashProgress}%` }} 
                                       />
                                   </div>
                               </div>
                           ) : (
                               <Button 
                                  className="w-full gap-2" 
                                  disabled={!selectedFirmware || !isConnected}
                                  onClick={handleFlashFirmware}
                               >
                                  {selectedFirmware ? <Upload className="h-4 w-4" /> : <Download className="h-4 w-4" />}
                                  {selectedFirmware ? "Instalar Firmware Seleccionado" : "Selecciona una versión"}
                               </Button>
                           )}
                           
                           <div className="text-[10px] text-muted-foreground text-center bg-yellow-500/10 p-2 rounded border border-yellow-500/20">
                               <AlertTriangle className="h-3 w-3 inline-block mr-1 -mt-0.5 text-yellow-500" />
                               No desconectes el cable USB durante el proceso.
                           </div>
                        </div>
                    </TabsContent>
                 </Tabs>
            </div>

            {/* Right Column: Terminal */}
            <div className="flex flex-col h-[450px] bg-zinc-950 rounded-lg border border-zinc-800 p-2 font-mono text-xs overflow-hidden shadow-inner">
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
