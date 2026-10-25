import { FadeIn } from "@/components/ui/FadeIn"
import { skills } from "@/data/skills"

function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-16 border-t border-border/60"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
            02 — Skills
          </p>
          <h2
            id="skills-heading"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Skills &amp; tools
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            The technologies and tools I reach for most often, grouped by where
            they fit in my workflow.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skills.map((group, index) => (
            <FadeIn key={group.category} delay={index * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm font-semibold tracking-wide uppercase">
                    {group.category}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(group.skills.length).padStart(2, "0")}
                  </span>
                </div>

                <ul className="mt-6 space-y-5">
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div
                        role="progressbar"
                        aria-label={`${skill.name} proficiency`}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={skill.proficiency}
                        className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted"
                      >
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Skills }
