import { FadeIn } from "@/components/ui/FadeIn"
import { profile } from "@/data/profile"

import { Timeline, type TimelineItem } from "./Timeline"

const fallbackExperience: TimelineItem = {
  title: "Full-Stack Developer",
  subtitle: "Your company",
  date: "2025 — Present",
  description: [
    "Add a short summary of your responsibilities and the impact you had in this role.",
    "Replace this placeholder with your own experience in src/data/profile.ts.",
  ],
}

function Experience() {
  const items: TimelineItem[] =
    profile.experience.length > 0
      ? profile.experience.map((job) => ({
          title: job.role,
          subtitle: job.company,
          date: job.duration,
          description: job.description,
        }))
      : [fallbackExperience]

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-16 border-t border-border/60"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
            03 — Experience
          </p>
          <h2
            id="experience-heading"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Professional Experience
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            A timeline of the roles where I have built products, collaborated
            with teams, and grown as a developer.
          </p>

          <div className="mt-12 max-w-3xl">
            <Timeline items={items} />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export { Experience }
