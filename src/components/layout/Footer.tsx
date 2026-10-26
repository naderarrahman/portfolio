import Link from "next/link"
import { ArrowUp, Download, Mail, Send } from "lucide-react"

import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons/social-icons"
import { buttonVariants } from "@/components/ui/button"
import { profile } from "@/data/profile"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          
          {/* Column 1: Brand & Intro */}
          <div className="flex flex-col gap-4">
            <Link href="/#home" className="text-xl font-bold tracking-tight text-foreground">
              {profile.name}
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Full-Stack Web Developer based in {profile.location}. 
              Building modern, accessible, and user-friendly web experiences.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-wider text-foreground uppercase">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Connect & Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-wider text-foreground uppercase">
              Connect
            </h3>
            <div className="flex items-center gap-3">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="group flex size-9 items-center justify-center rounded-full border border-border/60 bg-card transition-colors hover:border-primary/50 hover:bg-primary/5"
              >
                <GitHubIcon className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="group flex size-9 items-center justify-center rounded-full border border-border/60 bg-card transition-colors hover:border-primary/50 hover:bg-primary/5"
              >
                <LinkedInIcon className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
              <a
                href={profile.socials.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="group flex size-9 items-center justify-center rounded-full border border-border/60 bg-card transition-colors hover:border-primary/50 hover:bg-primary/5"
              >
                <XIcon className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            </div>
            <div className="mt-2">
              <a 
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="size-4" />
                {profile.email}
              </a>
            </div>
          </div>

          {/* Column 4: Call to Action (Resume & Contact) */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-wider text-foreground uppercase">
              Let&apos;s Talk
            </h3>
            <p className="text-sm text-muted-foreground">
              Looking for a developer? Let&apos;s build something great together.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <a
                href={profile.resumeUrl}
                className={cn(buttonVariants({ variant: "default" }), "w-full gap-2")}
              >
                <Download className="size-4" />
                Download Resume
              </a>
              <Link
                href="/#contact"
                className={cn(buttonVariants({ variant: "outline" }), "w-full gap-2")}
              >
                <Send className="size-4" />
                Contact Me
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js & Tailwind CSS
          </p>
          
          {/* Back to Top Button */}
          <Link
            href="/#home"
            className="group flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Back to top
            <span className="flex size-6 items-center justify-center rounded-full border border-border/60 bg-card transition-colors group-hover:border-primary/50">
              <ArrowUp className="size-3" />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}