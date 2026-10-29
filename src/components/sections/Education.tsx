import { GraduationCap, Award } from "lucide-react"

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
      className="relative scroll-mt-32 py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-[#f7f4ee] p-8 sm:p-12 lg:p-16 dark:bg-[#151210] shadow-sm">
          
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                04 — Education
              </p>
            </div>
            <h2
              id="education-heading"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Education &amp; Certifications
            </h2>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            
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
      </div>
    </section>
  )
}

export { Education }