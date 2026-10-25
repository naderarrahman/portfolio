import { Navbar } from "@/components/layout/Navbar"
import { About } from "@/components/sections/About"
import { Education } from "@/components/sections/Education"
import { Experience } from "@/components/sections/Experience"
import { Hero } from "@/components/sections/Hero"
import { Skills } from "@/components/sections/Skills"
import { FadeIn } from "@/components/ui/FadeIn"

const placeholderSections = [
  {
    id: "projects",
    label: "05 — Projects",
    title: "Projects",
    description:
      "Selected work with the problems I solved, the trade-offs I made, and what I would improve next.",
  },
  {
    id: "contact",
    label: "06 — Contact",
    title: "Contact",
    description:
      "Have a project in mind or just want to say hello? My inbox is always open.",
  },
] as const

function SectionPlaceholder({
  id,
  label,
  title,
  description,
}: (typeof placeholderSections)[number]) {
  return (
    <section
      id={id}
      className="scroll-mt-16 border-t border-border/60"
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto flex min-h-[70svh] w-full max-w-5xl flex-col justify-center px-6 py-24">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            {label}
          </p>
          <h2
            id={`${id}-heading`}
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            {description}
          </p>
          <div className="mt-10 flex min-h-48 items-center justify-center rounded-xl border border-dashed border-border/80">
            <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Coming soon
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />

        {placeholderSections.map((section) => (
          <SectionPlaceholder key={section.id} {...section} />
        ))}
      </main>
    </>
  )
}
