import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sensor IRMA Seta - Acelerómetro Triaxial IoT",
  description: "Sensor de vibraciones inalámbrico de alta precisión. Acelerómetro triaxial MEMS con conectividad LTE/Wi-Fi para monitorización estructural y de maquinaria.",
  keywords: ["sensor vibración", "acelerómetro triaxial", "iot industrial", "mems", "monitorización estructural", "shm", "cesva", "dbbasico"],
  openGraph: {
    title: "IRMA Seta | Sensor de Vibraciones IoT",
    description: "Hardware robusto para monitorización continua. Precisión de laboratorio, resistencia industrial.",
    images: [
      {
        url: "/images/setablancaSF.png",
        width: 800,
        height: 600,
        alt: "Sensor IRMA Seta",
      },
    ],
  },
}

export default function IrmaDeviceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
