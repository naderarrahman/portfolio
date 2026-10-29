import Image from "next/image"
import { Download } from "lucide-react"
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiExpress, 
  SiPostgresql,
  SiGit,
  SiGithub
} from "react-icons/si"

import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons/social-icons"
import { buttonVariants } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/FadeIn"
import { Typewriter } from "@/components/ui/Typewriter"
import { profile } from "@/data/profile"
import { cn } from "@/lib/utils"

const socials = [
  { label: "GitHub", href: profile.socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: LinkedInIcon },
  { label: "Twitter", href: profile.socials.twitter, Icon: XIcon },
]

const skills = [
  { name: "React.js", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Express.js", Icon: SiExpress },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
]

const designations = [
  "Full-Stack Web Developer",
  "Next.js Developer",
  "React Specialist",
  "UI/UX Enthusiast",
]

function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate flex scroll-mt-32 flex-col overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24"
    >
      {/* Background Effects Container */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-background"
      >
        {/* 1. Clockwise Rotating Rectangular Box (Helge Style - Sharp & Visible) */}
        <div className="animate-rotate-shade absolute flex h-[150vh] w-[150vw] items-center justify-center">
          <div className="h-[80vh] w-[120vw] bg-gradient-to-r from-transparent via-primary/10 to-transparent dark:via-primary/5" />
        </div>

        {/* 2. Subtle Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]" 
          style={{
            backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            color: "var(--foreground)"
          }}
        />

        {/* 3. Small Floating Geometric Shapes */}
        <div className="absolute top-[20%] left-[10%] h-12 w-12 rotate-12 rounded-sm bg-primary/5 blur-sm dark:bg-primary/10" />
        <div className="absolute top-[60%] right-[15%] h-20 w-20 -rotate-12 rounded-sm bg-primary/5 blur-sm dark:bg-primary/10" />
        <div className="absolute bottom-[20%] left-[30%] h-16 w-16 rotate-45 rounded-sm bg-primary/5 blur-sm dark:bg-primary/10" />
      </div>

      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Left Content */}
        <FadeIn>
          <p className="font-mono text-sm tracking-[0.2em] text-primary uppercase">
            Hello, I&apos;m
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </h1>

          <div className="mt-4 h-8 text-xl font-medium text-foreground/80 sm:text-2xl">
            <Typewriter words={designations} />
          </div>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {profile.intro}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={profile.resumeUrl}
              className={cn(
                buttonVariants({ size: "lg" }),
                "gap-2 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              )}
            >
              <Download className="size-4" />
              Download Resume
            </a>

            <div className="ml-2 flex items-center gap-2 border-l border-border pl-4">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "icon" }),
                    "rounded-full transition-colors hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Right Content (Image) */}
        <FadeIn delay={0.12}>
          <div className="relative mx-auto flex w-full max-w-sm items-center justify-center lg:max-w-md">
            
            <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-tr from-primary/10 via-accent/5 to-transparent blur-2xl" />

            <div className="relative aspect-square w-full overflow-hidden rounded-full border-[6px] border-background shadow-xl ring-1 ring-border/50 bg-muted">
              <Image
                src="/hero-image/nader.png" 
                alt={profile.name}
                fill
                className="object-cover object-top scale-105" 
                priority
              />
            </div>

            <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-foreground">Available for work</span>
            </div>
            
          </div>
        </FadeIn>
      </div>

      {/* Premium Skills Marquee */}
      <div className="relative mt-24 w-full overflow-hidden border-y border-border/40 bg-background/40 py-8 backdrop-blur-md">
        
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        
        <div className="animate-marquee flex w-max items-center whitespace-nowrap hover:[animation-play-state:paused] group">
          
          {[...skills, ...skills].map((skill, index) => {
            const Icon = skill.Icon
            return (
              <div 
                key={index} 
                className="mx-3 flex items-center gap-3 rounded-full border border-border/60 bg-background/80 px-6 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:bg-muted/60 hover:shadow-md"
              >
                <Icon className="size-5 text-foreground/70 transition-colors group-hover:text-primary" />
                <span className="font-mono text-sm font-semibold tracking-wider text-muted-foreground uppercase transition-colors group-hover:text-foreground">
                  {skill.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export { Hero }