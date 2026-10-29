import { Briefcase } from "lucide-react"

import { FadeIn } from "@/components/ui/FadeIn"
import { profile } from "@/data/profile"

function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative scroll-mt-32 py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-[#f7f4ee] p-8 sm:p-12 lg:p-16 dark:bg-[#151210] shadow-sm">
          
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                03 — Experience
              </p>
            </div>
            <h2
              id="experience-heading"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Professional Experience
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              A timeline of the roles where I have built products, collaborated
              with teams, and grown as a developer.
            </p>
          </FadeIn>

          {/* Professional Two-Column Timeline */}
          <div className="relative mt-12 border-l-2 border-border/60 ml-4 md:ml-6 space-y-12 pb-4">
            {profile.experience.map((job, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="relative pl-8 md:pl-12">
                  
                  {/* Timeline Dot / Icon */}
                  <span className="absolute -left-[21px] top-1 flex size-10 items-center justify-center rounded-full bg-[#f7f4ee] dark:bg-[#151210] border-2 border-border shadow-sm">
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
                      <span className="mt-3 inline-block rounded-full bg-muted/80 border border-border/50 px-3 py-1 text-xs font-semibold text-muted-foreground">
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
      </div>
    </section>
  )
}

export { Experience }