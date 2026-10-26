import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Globe, CheckCircle2, AlertTriangle, Rocket, Code2 } from "lucide-react"

import { GitHubIcon } from "@/components/icons/social-icons"
import { buttonVariants } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/FadeIn"
import { projects } from "@/data/projects"
import { cn } from "@/lib/utils"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

interface ProjectDetailsProps {
  params: Promise<{ slug: string }>
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background pt-24 pb-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        
        {/* Top Back Button */}
        <FadeIn>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary mb-8"
          >
            <ArrowLeft className="size-4" />
            Back to Projects
          </Link>
        </FadeIn>

        {/* Header Section */}
        <FadeIn delay={0.1}>
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
                {project.category}
              </span>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
                {project.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "gap-2 rounded-full")}
              >
                <Globe className="size-4" />
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2 rounded-full")}
              >
                <GitHubIcon className="size-4" />
                GitHub
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Main Project Image */}
        <FadeIn delay={0.2}>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/60 bg-muted shadow-lg mb-16">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </FadeIn>

        {/* Content Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Main Content (Takes 8 columns) */}
          <div className="lg:col-span-8 space-y-12">
            <FadeIn delay={0.3}>
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Code2 className="size-4" />
                  </span>
                  Key Features
                </h2>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground bg-card p-4 rounded-xl border border-border/50">
                      <CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={0.4}>
              <section className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <AlertTriangle className="size-6 text-amber-500" />
                    Challenges Faced
                  </h2>
                  <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.challenges}
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <Rocket className="size-6 text-emerald-500" />
                    Future Improvements
                  </h2>
                  <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.improvements}
                    </p>
                  </div>
                </div>
              </section>
            </FadeIn>
          </div>

          {/* Right Column: Sticky Tech Stack Sidebar (Takes 4 columns) */}
          <div className="lg:col-span-4">
            <FadeIn delay={0.5}>
              <div className="sticky top-24 rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                  Tech Stack
                </h3>
                <div className="flex flex-col gap-3">
                  {project.techStack.map((tech) => (
                    <div 
                      key={tech}
                      className="flex items-center gap-3 rounded-lg border border-border/50 bg-background px-4 py-2.5"
                    >
                      <div className="size-2 rounded-full bg-primary" />
                      <span className="text-sm font-medium text-foreground">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

        {/* Bottom Back Button */}
        <FadeIn delay={0.6}>
          <div className="mt-20 flex justify-center border-t border-border/50 pt-10">
            <Link
              href="/#projects"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2 rounded-full")}
            >
              <ArrowLeft className="size-4" />
              Back to Projects
            </Link>
          </div>
        </FadeIn>

      </div>
    </main>
  )
}