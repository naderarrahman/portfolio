"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button, buttonVariants } from "@/components/ui/button"
import { profile } from "@/data/profile"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const pathname = usePathname()

  useEffect(() => {
    if (!isOpen) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isOpen])

  useEffect(() => {
    if (pathname !== "/") return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -80% 0px" }
    )

    navLinks.forEach((link) => {
      const element = document.querySelector(link.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [pathname])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false)
    
    if (pathname === "/") {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        const offset = 100 
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth"
        })
      }
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      
      <div 
        className={cn(
          "mx-auto flex w-full max-w-5xl flex-col border border-border/80 bg-white/80 shadow-lg shadow-black/5 backdrop-blur-2xl transition-all duration-300 dark:border-white/20 dark:bg-[#1a1a1a]/80 dark:shadow-white/5",
          isOpen ? "rounded-3xl" : "rounded-[2rem] lg:rounded-full"
        )}
      >
        <div className="flex h-14 sm:h-16 w-full items-center justify-between px-5 sm:px-8">
          
          <Link
            href="/#home"
            className="text-sm sm:text-base font-bold tracking-tight text-foreground transition-colors hover:text-primary"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            {profile.name}
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === "/" && activeSection === link.href.substring(1)
              return (
                <Link
                  key={link.href}
                  href={`/${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-muted/60 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_8px_rgba(194,122,62,0.8)]" />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "hidden lg:inline-flex rounded-full px-5 font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              )}
            >
              Let&apos;s Talk
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "grid overflow-hidden transition-all duration-300 ease-in-out lg:hidden",
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="min-h-0">
            <div className="flex flex-col border-t border-border/50 px-4 pb-4 pt-2 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === "/" && activeSection === link.href.substring(1)
                return (
                  <Link
                    key={link.href}
                    href={`/${link.href}`}
                    className={`flex items-center justify-between rounded-full px-4 py-2.5 text-sm transition-colors hover:bg-muted/60 ${
                      isActive
                        ? "text-foreground font-medium bg-muted/50"
                        : "text-muted-foreground"
                    }`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    )}
                  </Link>
                )
              })}

              <Link
                href="/#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className={cn(
                  buttonVariants({ variant: "default", size: "default" }),
                  "mt-4 w-full rounded-full font-semibold"
                )}
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export { Navbar }