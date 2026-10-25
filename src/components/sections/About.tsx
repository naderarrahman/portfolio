import type { LucideIcon } from "lucide-react"
import { Briefcase, Code2, MapPin } from "lucide-react"

import { FadeIn } from "@/components/ui/FadeIn"
import { profile } from "@/data/profile"

interface QuickFactProps {
  icon: LucideIcon
  label: string
  value: string
}

function QuickFact({ icon: Icon, label, value }: QuickFactProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
      <Icon className="size-4 shrink-0 text-primary" aria-hidden />
      <span className="text-muted-foreground">{label}:</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-16 border-t border-border/60"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
            01 — About
          </p>
          <h2
            id="about-heading"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            About me
          </h2>

          <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {profile.aboutMe.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
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
            <QuickFact icon={Code2} label="Focus" value={profile.designation} />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export { About }
