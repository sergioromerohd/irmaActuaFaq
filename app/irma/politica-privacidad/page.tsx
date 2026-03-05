import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Mail, Calendar, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Privacidad – IRMA",
  description:
    "Política de privacidad de la aplicación móvil IRMA de dbbasico. Información sobre qué datos recogemos, cómo los usamos y cómo protegemos tu privacidad.",
  alternates: {
    canonical: "/irma/politica-privacidad",
  },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = "5 de marzo de 2025"
const CONTACT_EMAIL = "info@dbbasico.es"
const COMPANY_NAME = "dbbasico – Servicios de Acústica SL"
const COMPANY_ADDRESS = "España"
const APP_NAME = "IRMA"

interface Section {
  id: string
  title: string
  content: React.ReactNode
}

const sections: Section[] = [
  {
    id: "introduccion",
    title: "1. Introducción",
    content: (
      <>
        <p>
          Bienvenido/a a la aplicación <strong>{APP_NAME}</strong>, desarrollada por{" "}
          <strong>{COMPANY_NAME}</strong>. Nos comprometemos a proteger tu privacidad y a tratar tus
          datos personales de forma responsable, transparente y conforme al Reglamento General de
          Protección de Datos (RGPD) de la UE y a la legislación española vigente.
        </p>
        <p className="mt-3">
          Esta Política de Privacidad describe qué información recopilamos cuando usas la
          aplicación IRMA, cómo la utilizamos, con quién la compartimos y cuáles son tus derechos.
          Al descargar y usar la aplicación, aceptas las prácticas descritas en este documento.
        </p>
      </>
    ),
  },
  {
    id: "responsable",
    title: "2. Responsable del Tratamiento",
    content: (
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <tbody>
            {[
              ["Responsable", COMPANY_NAME],
              ["Actividad", "Desarrollo de soluciones de monitorización acústica y de vibraciones"],
              ["País", COMPANY_ADDRESS],
              ["Contacto", CONTACT_EMAIL],
            ].map(([label, value]) => (
              <tr key={label} className="border-b border-border last:border-0">
                <td className="py-2 pr-4 font-medium text-foreground/70 w-40 align-top">{label}</td>
                <td className="py-2 text-foreground">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "datos-recogidos",
    title: "3. Datos que Recogemos",
    content: (
      <>
        <p>La aplicación IRMA puede recopilar los siguientes tipos de información:</p>

        <h3 className="mt-4 mb-2 font-semibold text-foreground">3.1 Datos de cuenta y perfil</h3>
        <ul className="list-disc pl-5 space-y-1 text-foreground/80">
          <li>Nombre completo</li>
          <li>Dirección de correo electrónico</li>
          <li>Nombre de la empresa / organización</li>
          <li>Contraseña (almacenada de forma encriptada, nunca en texto plano)</li>
        </ul>

        <h3 className="mt-4 mb-2 font-semibold text-foreground">3.2 Datos de uso de la aplicación</h3>
        <ul className="list-disc pl-5 space-y-1 text-foreground/80">
          <li>Registros de inicio/cierre de sesión y marcas temporales</li>
          <li>Configuración y preferencias de la aplicación</li>
          <li>Identificadores de dispositivos y sensores vinculados a tu cuenta</li>
        </ul>

        <h3 className="mt-4 mb-2 font-semibold text-foreground">3.3 Datos de medición y sensores</h3>
        <ul className="list-disc pl-5 space-y-1 text-foreground/80">
          <li>Lecturas de vibración y ruido ambiental procedentes de los sensores IRMA</li>
          <li>Marcas de tiempo y metadatos de las mediciones</li>
          <li>Datos de localización de la instalación del sensor (introducidos manualmente, no GPS automático)</li>
        </ul>

        <h3 className="mt-4 mb-2 font-semibold text-foreground">3.4 Datos técnicos y de diagnóstico</h3>
        <ul className="list-disc pl-5 space-y-1 text-foreground/80">
          <li>Versión del sistema operativo y del dispositivo</li>
          <li>Registros de errores y fallos de la aplicación (logs anónimos)</li>
          <li>Dirección IP (gestionada por el servidor, no almacenada de forma permanente)</li>
        </ul>

        <div className="mt-4 p-3 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 text-sm">
          <strong>Nota importante:</strong> La aplicación IRMA <strong>NO</strong> accede a tu micrófono,
          cámara, galería de fotos, agenda de contactos ni a ningún sensor del teléfono más allá de lo
          estrictamente necesario para la conectividad con los dispositivos IRMA (Bluetooth/Wi-Fi).
        </div>
      </>
    ),
  },
  {
    id: "finalidad",
    title: "4. Finalidad y Base Legal del Tratamiento",
    content: (
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-border">
              <th className="py-2 pr-4 text-left font-semibold">Finalidad</th>
              <th className="py-2 pr-4 text-left font-semibold">Base Legal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              ["Prestación del servicio: acceso a la plataforma IRMA", "Ejecución del contrato (art. 6.1.b RGPD)"],
              ["Autenticación segura de usuarios", "Ejecución del contrato (art. 6.1.b RGPD)"],
              ["Almacenamiento y visualización de datos de los sensores", "Ejecución del contrato (art. 6.1.b RGPD)"],
              ["Envío de alertas y notificaciones relacionadas con el servicio", "Interés legítimo / consentimiento (art. 6.1.a RGPD)"],
              ["Soporte técnico y atención al cliente", "Interés legítimo (art. 6.1.f RGPD)"],
              ["Cumplimiento de obligaciones legales", "Obligación legal (art. 6.1.c RGPD)"],
              ["Mejora del servicio mediante análisis anónimo de uso", "Interés legítimo (art. 6.1.f RGPD)"],
            ].map(([purpose, basis]) => (
              <tr key={purpose}>
                <td className="py-2 pr-4 align-top text-foreground/80">{purpose}</td>
                <td className="py-2 text-foreground/70 italic">{basis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "permisos",
    title: "5. Permisos de la Aplicación",
    content: (
      <>
        <p>La aplicación IRMA solicita únicamente los permisos imprescindibles para su funcionamiento:</p>
        <div className="mt-4 space-y-3">
          {[
            {
              perm: "Internet (INTERNET)",
              uso: "Comunicación con el servidor para sincronizar datos de sensores y autenticación de usuarios.",
            },
            {
              perm: "Bluetooth (BLUETOOTH, BLUETOOTH_ADMIN, BLUETOOTH_CONNECT, BLUETOOTH_SCAN)",
              uso: "Detección y conexión con los dispositivos sensor IRMA cercanos. Requerido solo si utilizas la función de configuración por Bluetooth.",
            },
            {
              perm: "Red Wi-Fi (ACCESS_NETWORK_STATE, ACCESS_WIFI_STATE)",
              uso: "Verificación de conectividad para determinar si la sincronización de datos es posible.",
            },
            {
              perm: "Notificaciones (POST_NOTIFICATIONS – Android 13+)",
              uso: "Envío de alertas de umbral cuando los sensores detectan valores fuera del rango configurado.",
            },
          ].map(({ perm, uso }) => (
            <div key={perm} className="p-3 rounded-lg border border-border bg-muted/30">
              <p className="font-mono text-xs font-semibold text-primary mb-1">{perm}</p>
              <p className="text-sm text-foreground/80">{uso}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-foreground/70">
          No solicitamos permisos de acceso a la ubicación GPS, cámara, micrófono, almacenamiento
          interno de fotos ni contactos del dispositivo.
        </p>
      </>
    ),
  },
  {
    id: "almacenamiento",
    title: "6. Almacenamiento y Seguridad",
    content: (
      <>
        <p>
          Los datos se almacenan en servidores seguros ubicados en la <strong>Unión Europea</strong>.
          Aplicamos medidas técnicas y organizativas apropiadas para proteger tu información frente a
          accesos no autorizados, pérdida, alteración o divulgación indebida:
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-1 text-foreground/80">
          <li>Cifrado de las comunicaciones mediante <strong>HTTPS/TLS</strong></li>
          <li>Contraseñas almacenadas con funciones de hash seguras (bcrypt)</li>
          <li>Acceso a datos restringido al personal autorizado mediante roles</li>
          <li>Copias de seguridad cifradas con carácter periódico</li>
          <li>Logs de auditoría para actividades críticas</li>
        </ul>
        <p className="mt-3 text-sm text-foreground/70">
          A pesar de nuestras medidas, ningún sistema es 100 % infalible. En caso de brecha de
          seguridad que afecte a tus datos, te notificaremos conforme obliga el RGPD.
        </p>
      </>
    ),
  },
  {
    id: "retencion",
    title: "7. Conservación de los Datos",
    content: (
      <>
        <p>Conservamos los datos durante el tiempo necesario para cada finalidad:</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="py-2 pr-4 text-left font-semibold">Tipo de dato</th>
                <th className="py-2 text-left font-semibold">Período de conservación</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Datos de cuenta", "Durante la vigencia de la cuenta + 2 años tras su cierre"],
                ["Datos de medición de sensores", "Durante la vigencia del contrato de servicio + 5 años"],
                ["Logs técnicos y de diagnóstico", "90 días en modo activo, luego anonimizados"],
                ["Facturas e información económica", "6 años (obligación fiscal española)"],
              ].map(([tipo, periodo]) => (
                <tr key={tipo}>
                  <td className="py-2 pr-4 align-top text-foreground/80">{tipo}</td>
                  <td className="py-2 text-foreground/70">{periodo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "comparticion",
    title: "8. Compartición de Datos con Terceros",
    content: (
      <>
        <p>
          <strong>No vendemos ni cedemos tus datos personales a terceros con fines comerciales.</strong>{" "}
          Podemos compartir información únicamente en los siguientes casos:
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-foreground/80">
          <li>
            <strong>Proveedores de servicios técnicos</strong> (hosting, infraestructura en la nube)
            que actúan como encargados del tratamiento bajo contrato y con las garantías exigidas por
            el RGPD.
          </li>
          <li>
            <strong>Obligación legal:</strong> cuando sea requerido por autoridades competentes,
            orden judicial o normativa aplicable.
          </li>
          <li>
            <strong>Dentro de tu organización:</strong> si tu empresa tiene varios usuarios de IRMA,
            los datos de medición pueden ser visibles para los administradores de tu cuenta corporativa.
          </li>
        </ul>
        <p className="mt-3 text-sm text-foreground/70">
          Los proveedores técnicos utilizados están certificados bajo el marco EU-U.S. Data Privacy
          Framework o cumplen con las cláusulas contractuales tipo de la Comisión Europea cuando
          aplique.
        </p>
      </>
    ),
  },
  {
    id: "derechos",
    title: "9. Tus Derechos",
    content: (
      <>
        <p>
          De conformidad con el RGPD y la LOPDGDD, tienes los siguientes derechos sobre tus datos:
        </p>
        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          {[
            { right: "Acceso", desc: "Conocer qué datos tenemos sobre ti." },
            { right: "Rectificación", desc: "Corregir datos inexactos o incompletos." },
            { right: "Supresión", desc: "Solicitar que eliminemos tus datos ("derecho al olvido")." },
            { right: "Limitación", desc: "Restringir el tratamiento de tus datos en ciertos supuestos." },
            { right: "Portabilidad", desc: "Recibir tus datos en formato estructurado y usable." },
            { right: "Oposición", desc: "Oponerte al tratamiento basado en interés legítimo." },
            { right: "Retirar el consentimiento", desc: "En cualquier momento, sin que afecte a lo ya tratado." },
            { right: "Reclamación ante la AEPD", desc: "Si consideras que vulneramos tu privacidad." },
          ].map(({ right, desc }) => (
            <div key={right} className="p-3 rounded-lg border border-border bg-muted/20">
              <p className="font-semibold text-sm text-primary">{right}</p>
              <p className="text-sm text-foreground/70 mt-0.5">{desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm">
          Para ejercer cualquiera de estos derechos, escríbenos a{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline-offset-4 hover:underline">
            {CONTACT_EMAIL}
          </a>
          . Responderemos en el plazo máximo de <strong>30 días</strong>. Podemos solicitarte
          una prueba de identidad para proteger tu privacidad.
        </p>
      </>
    ),
  },
  {
    id: "menores",
    title: "10. Menores de Edad",
    content: (
      <p>
        La aplicación IRMA está destinada exclusivamente a profesionales y empresas. No está
        dirigida a menores de 16 años. No recopilamos conscientemente datos de menores. Si
        detectamos que hemos recogido datos de un menor sin el consentimiento del tutor legal,
        los eliminaremos de inmediato. Si eres tutor/a de un menor cuyos datos hayan podido
        ser facilitados, contáctanos en{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline-offset-4 hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    ),
  },
  {
    id: "cookies",
    title: "11. Cookies y Tecnologías Similares",
    content: (
      <p>
        La aplicación móvil IRMA <strong>no utiliza cookies</strong>. Puede utilizar
        almacenamiento local del dispositivo (SharedPreferences / AsyncStorage) exclusivamente
        para guardar preferencias de usuario como el tema visual o las credenciales de sesión
        cifradas. Estos datos nunca se comparten con terceros.
      </p>
    ),
  },
  {
    id: "cambios",
    title: "12. Cambios en esta Política",
    content: (
      <p>
        Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios
        en nuestras prácticas o en la legislación. Te notificaremos cambios significativos
        mediante una notificación dentro de la aplicación o por correo electrónico al menos
        15 días antes de que entren en vigor. La fecha de última actualización siempre
        aparecerá al inicio de este documento. El uso continuado de la aplicación tras la
        fecha de entrada en vigor implica la aceptación de la política actualizada.
      </p>
    ),
  },
  {
    id: "contacto",
    title: "13. Contacto",
    content: (
      <>
        <p>
          Si tienes preguntas, dudas o deseas ejercer tus derechos, puedes contactarnos por
          cualquiera de estas vías:
        </p>
        <ul className="mt-3 space-y-2 text-foreground/80">
          <li>
            📧 <strong>Correo electrónico:</strong>{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline-offset-4 hover:underline">
              {CONTACT_EMAIL}
            </a>
          </li>
          <li>
            🌐 <strong>Web:</strong>{" "}
            <a
              href="https://dbbasico.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              dbbasico.es
            </a>
          </li>
          <li>
            📋 <strong>Autoridad de control:</strong>{" "}
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              Agencia Española de Protección de Datos (AEPD)
            </a>
          </li>
        </ul>
      </>
    ),
  },
]

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b bg-gradient-to-br from-primary/5 via-background to-background py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/irma" className="hover:text-primary transition-colors">IRMA</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Política de Privacidad</span>
          </div>
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-primary/10 p-3 shrink-0">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Política de Privacidad
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                Aplicación móvil <strong>IRMA</strong> – {COMPANY_NAME}
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  Última actualización: <strong className="text-foreground">{LAST_UPDATED}</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="h-4 w-4" />
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline underline-offset-4">
                    {CONTACT_EMAIL}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="container mx-auto px-4 max-w-4xl py-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Table of contents */}
          <aside className="lg:w-56 shrink-0">
            <div className="sticky top-24 rounded-xl border border-border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                Índice
              </p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-xs text-foreground/70 hover:text-primary py-1 transition-colors leading-snug"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <article className="flex-1 space-y-10">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="text-xl font-bold mb-4 pb-2 border-b border-border">{s.title}</h2>
                <div className="text-foreground/80 leading-relaxed">{s.content}</div>
              </section>
            ))}

            {/* Footer note */}
            <div className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-5 text-sm text-foreground/70">
              <Shield className="h-5 w-5 text-primary mb-2" />
              <p>
                Esta política de privacidad ha sido redactada conforme al{" "}
                <strong>Reglamento (UE) 2016/679 (RGPD)</strong>, la{" "}
                <strong>Ley Orgánica 3/2018 (LOPDGDD)</strong> y las directrices de publicación
                de aplicaciones en <strong>Google Play</strong> y <strong>App Store</strong>.
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
