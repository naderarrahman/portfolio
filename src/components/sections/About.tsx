import type { LucideIcon } from "lucide-react"
import { Briefcase, Code2, MapPin, Sparkles } from "lucide-react"

import { FadeIn } from "@/components/ui/FadeIn"
import { profile } from "@/data/profile"

interface QuickFactProps {
  icon: LucideIcon
  label: string
  value: string
}

function QuickFact({ icon: Icon, label, value }: QuickFactProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border/60 bg-background/60 p-4 shadow-sm transition-all hover:bg-muted/40 hover:border-primary/30 hover:shadow-md">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden />
      </div>
      <div>
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {label}
        </p>
        <p className="mt-1 text-sm font-semibold text-foreground">{value}</p>
      </div>
    </div>
  )
}

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-32 py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* পুরো সেকশনের জন্য হালকা বর্ডার এবং ওয়ার্ম ব্যাকগ্রাউন্ড */}
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-[#f7f4ee] p-8 sm:p-12 lg:p-16 dark:bg-[#151210] shadow-sm">
          
          {/* Background Soft Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-[20rem] w-[20rem] rounded-full bg-primary/10 blur-[100px]"
          />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 relative z-10">
            
            <FadeIn>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="size-4" />
                </span>
                <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                  01 — About Me
                </p>
              </div>
              
              <h2
                id="about-heading"
                className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                My journey &amp; passion
              </h2>

              <div className="mt-8 space-y-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {profile.aboutMe.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex h-full flex-col justify-center lg:pt-10">
                <h3 className="mb-6 font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Quick Facts
                </h3>
                <div className="flex flex-col gap-4">
                  <QuickFact
                    icon={MapPin}
                    label="Location"
                    value={profile.location}
                  />
                  <QuickFact
                    icon={Briefcase}
                    label="Experience"
                    value={`${profile.experienceYears}+ ${
                      profile.experienceYears === 1 ? "year" : "years"
                    }`}
                  />
                  <QuickFact 
                    icon={Code2} 
                    label="Focus" 
                    value={profile.designation} 
                  />
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  )
}

export { About }