import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <Image
              src="/images/dbbasico-logo.png"
              alt="dbbasico"
              width={150}
              height={40}
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <span className="text-xl font-semibold">dbbasico</span>
          </Link>
          <p className="text-muted-foreground max-w-2xl">
            Soluciones técnicas especializadas en medición y análisis para profesionales que requieren precisión y
            confiabilidad.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/actua" className="text-muted-foreground hover:text-foreground transition-colors">
              ACTUA 2.0
            </Link>
            <Link href="/irma" className="text-muted-foreground hover:text-foreground transition-colors">
              IRMA
            </Link>
            <Link href="/contacto" className="text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </Link>
            <Link href="https://dbbasico.es/aviso-legal/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              Aviso Legal
            </Link>
            <Link href="https://dbbasico.es/politica-de-privacidad/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidad
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} dbbasico. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
