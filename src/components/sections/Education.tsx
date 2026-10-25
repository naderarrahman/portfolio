import { FadeIn } from "@/components/ui/FadeIn"
import { profile } from "@/data/profile"

import { Timeline, type TimelineItem } from "./Timeline"

function Education() {
  const educationItems: TimelineItem[] = profile.education.map((entry) => ({
    title: entry.degree,
    subtitle: entry.institution,
    date: entry.year,
    description: entry.description,
  }))

  const certificationItems: TimelineItem[] = profile.certifications.map(
    (certification) => ({
      title: certification.title,
      subtitle: certification.issuer,
      date: certification.year,
      href: certification.link,
    })
  )

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-16 border-t border-border/60"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
            04 — Education
          </p>
          <h2
            id="education-heading"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Education &amp; Certifications
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            The academic foundation and formal credentials behind my work.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold tracking-wide uppercase">
                  Education
                </p>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(educationItems.length).padStart(2, "0")}
                </span>
              </div>
              <Timeline items={educationItems} className="mt-6" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold tracking-wide uppercase">
                  Certifications
                </p>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(certificationItems.length).padStart(2, "0")}
                </span>
              </div>
              <Timeline items={certificationItems} className="mt-6" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export { Education }
