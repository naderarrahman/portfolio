import { Briefcase } from "lucide-react"

import { FadeIn } from "@/components/ui/FadeIn"
import { profile } from "@/data/profile"

function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative scroll-mt-16 border-t border-border/60 bg-muted/5"
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
        </FadeIn>

        {/* Professional Two-Column Timeline */}
        <div className="relative mt-16 border-l-2 border-border/50 ml-4 md:ml-6 space-y-12 pb-4">
          {profile.experience.map((job, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="relative pl-8 md:pl-12">
                
                {/* Timeline Dot / Icon */}
                <span className="absolute -left-[21px] top-1 flex size-10 items-center justify-center rounded-full bg-background border-2 border-border shadow-sm">
                  <Briefcase className="size-4 text-primary" />
                </span>

                <div className="flex flex-col gap-6 md:flex-row md:gap-12">
                  {/* Left Column: Role & Company */}
                  <div className="md:w-5/12">
                    <h3 className="text-xl font-bold text-foreground">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-base font-medium text-primary">
                      {job.company}
                    </p>
                    <span className="mt-3 inline-block rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                      {job.duration}
                    </span>
                  </div>

                  {/* Right Column: Responsibilities */}
                  <div className="md:w-7/12">
                    <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {job.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/60" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Experience }