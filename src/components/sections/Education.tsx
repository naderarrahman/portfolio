import { GraduationCap, Award, Briefcase } from "lucide-react"

import { FadeIn } from "@/components/ui/FadeIn"
import { profile } from "@/data/profile"
import { Timeline, type TimelineItem } from "./Timeline"

function Education() {
  const educationItems: TimelineItem[] = profile.education.map((entry) => ({
    title: entry.degree,
    subtitle: entry.institution,
    date: entry.year,
    description: entry.description,
    icon: GraduationCap,
  }))

  const certificationItems: TimelineItem[] = profile.certifications.map((cert) => ({
    title: cert.title,
    subtitle: cert.issuer,
    date: cert.year,
    href: cert.link,
    icon: Award,
  }))

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative scroll-mt-16 border-t border-border/60"
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
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column: Education Timeline */}
          <FadeIn delay={0.1}>
            <div>
              <div className="mb-8 flex items-center gap-3 border-b border-border/50 pb-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="size-5" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">Academic Background</h3>
              </div>
              <Timeline items={educationItems} />
            </div>
          </FadeIn>

          {/* Right Column: Certifications Timeline */}
          <FadeIn delay={0.2}>
            <div>
              <div className="mb-8 flex items-center gap-3 border-b border-border/50 pb-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Award className="size-5" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">Certifications</h3>
              </div>
              <Timeline items={certificationItems} />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}

export { Education }