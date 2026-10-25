"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { profile } from "@/data/profile"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" }, // নতুন
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Handle Escape key for mobile menu
  useEffect(() => {
    if (!isOpen) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isOpen])

  // Handle Active Section Highlighting on Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -80% 0px" } // Triggers when section is near top
    )

    navLinks.forEach((link) => {
      const element = document.querySelector(link.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      // Smooth scroll to element with offset for sticky navbar
      const offset = 64 // Navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-sm font-semibold tracking-tight"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          {profile.name}
        </a>

        {/* Desktop Menu */}
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative rounded-md px-2 py-2 text-sm transition-colors hover:text-foreground ${
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
                
                {/* Active Indicator (Warm Dot) */}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />
                )}
              </a>
            )
          })}
        </nav>

        {/* Right side (Theme Toggle & Mobile Menu Button) */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile"
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "border-t border-border/60 max-h-96" : "max-h-0"
        }`}
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col px-6 py-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between rounded-md px-2 py-3 text-sm transition-colors hover:bg-muted/60 hover:text-foreground ${
                  isActive
                    ? "text-foreground font-medium bg-muted/30"
                    : "text-muted-foreground"
                }`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
                {/* Mobile Active Indicator */}
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                )}
              </a>
            )
          })}
        </div>
      </nav>
    </header>
  )
}

export { Navbar }