"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutGrid } from "lucide-react"
import { appsNavList } from "@/lib/apps-data"
import { DynamicIcon } from "@/components/DynamicIcon"

export function AppSubNav() {
  const pathname = usePathname()
  const isAppsRoot = pathname === "/irma/apps"

  return (
    <div className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-16 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center overflow-x-auto scrollbar-hide">
          {/* All Apps link */}
          <Link
            href="/irma/apps"
            className={cn(
              "group inline-flex items-center py-4 px-3 border-b-2 text-sm font-medium transition-all hover:text-app-primary whitespace-nowrap",
              isAppsRoot
                ? "border-app-primary text-app-primary"
                : "border-transparent text-muted-foreground"
            )}
          >
            <LayoutGrid className={cn(
              "mr-2 h-4 w-4 transition-colors",
              isAppsRoot ? "text-app-primary" : "text-muted-foreground group-hover:text-app-primary"
            )} />
            Todas
          </Link>

          <div className="h-6 w-px bg-border mx-2" />

          {/* Individual app links */}
          {appsNavList.map((app) => {
            const isActive = pathname === `/irma/apps/${app.slug}`
            
            return (
              <Link
                key={app.slug}
                href={`/irma/apps/${app.slug}`}
                className={cn(
                  "group inline-flex items-center py-4 px-3 border-b-2 text-sm font-medium transition-all hover:text-app-primary whitespace-nowrap",
                  isActive
                    ? "border-app-primary text-app-primary"
                    : "border-transparent text-muted-foreground"
                )}
              >
                <DynamicIcon
                  name={app.iconName}
                  className={cn(
                    "mr-2 h-4 w-4 transition-colors",
                    isActive ? "text-app-primary" : "text-muted-foreground group-hover:text-app-primary"
                  )}
                />
                {app.name}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
