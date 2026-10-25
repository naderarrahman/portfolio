import { Download, UserRound } from "lucide-react"

import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons/social-icons"
import { buttonVariants } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/FadeIn"
import { profile } from "@/data/profile"
import { cn } from "@/lib/utils"

const socials = [
  { label: "GitHub", href: profile.socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: LinkedInIcon },
  { label: "Twitter", href: profile.socials.twitter, Icon: XIcon },
]

function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate scroll-mt-16 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl sm:h-[40rem] sm:w-[40rem]"
      />

      <div className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-5xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-28">
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
          <p className="mt-4 text-xl font-medium sm:text-2xl">
            {profile.designation}
          </p>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.resumeUrl}
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              <Download className="size-4" />
              Download Resume
            </a>

            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "gap-2"
                )}
              >
                <Icon className="size-4" />
                {label}
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2.5rem] bg-primary/10 blur-2xl"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card">
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-br from-muted via-background to-accent/60"
              />
              <div className="relative flex h-full flex-col items-center justify-center gap-4">
                <div className="flex size-24 items-center justify-center rounded-full border border-border bg-background/70">
                  <UserRound
                    className="size-10 text-muted-foreground"
                    strokeWidth={1.5}
                  />
                </div>
                <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Photo placeholder
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export { Hero }
