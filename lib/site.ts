export function getSiteUrl(): URL {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "https://about.dbblab.es").trim()

  // Ensure absolute URL; fall back to https if someone sets just a hostname.
  const normalized = raw.startsWith("http://") || raw.startsWith("https://") ? raw : `https://${raw}`

  try {
    return new URL(normalized)
  } catch {
    // Final safe fallback (should not happen in production).
    return new URL("https://about.dbblab.es")
  }
}

export function absoluteUrl(pathname: string): string {
  const base = getSiteUrl()
  return new URL(pathname, base).toString()
}
