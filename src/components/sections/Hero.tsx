import Image from "next/image"
import { Download } from "lucide-react"

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
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "MongoDB",
  "Express.js",
  "PostgreSQL",
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
      className="relative isolate flex min-h-[calc(100svh-4rem)] flex-col justify-center overflow-hidden pt-20 pb-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="animate-blob-1 absolute -top-24 -left-24 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-[100px] dark:bg-primary/10" />
        <div className="animate-blob-2 absolute top-1/2 -right-24 h-[25rem] w-[25rem] rounded-full bg-accent/30 blur-[100px] dark:bg-accent/10" />
        <div className="animate-blob-3 absolute -bottom-24 left-1/3 h-[35rem] w-[35rem] rounded-full bg-orange-200/40 blur-[100px] dark:bg-orange-900/20" />
      </div>

      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
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

            {/* Optional: Small floating badge (like the green dot) */}
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

      {/* Skills Marquee */}
      <div className="mt-16 w-full overflow-hidden border-y border-border/50 bg-background/50 py-4 backdrop-blur-sm">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="mx-8 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
              <span className="font-mono text-sm font-medium tracking-wider text-muted-foreground uppercase">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Hero }