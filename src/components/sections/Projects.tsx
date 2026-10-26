"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Globe, FolderX } from "lucide-react"

import { GitHubIcon } from "@/components/icons/social-icons"
import { FadeIn } from "@/components/ui/FadeIn"
import { projects } from "@/data/projects"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = ["All", "Full Stack", "React", "Next.js"]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  )

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative scroll-mt-16 border-t border-border/60 bg-muted/5 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                05 — Projects
              </p>
              
              <div className="mt-4 flex items-center gap-4">
                <h2
                  id="projects-heading"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Featured Projects
                </h2>
                <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-sm font-semibold text-primary">
                  {String(filteredProjects.length).padStart(2, "0")}
                </span>
              </div>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border text-muted-foreground hover:bg-muted"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="mt-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border/80 bg-card py-24 text-center"
              >
                <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <FolderX className="size-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">No projects found</h3>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  I am currently working on some exciting Full Stack projects. 
                  They will be added here soon!
                </p>
                <button
                  onClick={() => setActiveCategory("All")}
                  className="mt-6 rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  View All Projects
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all hover:shadow-md"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                      <p className="mt-2 line-clamp-3 text-sm text-muted-foreground flex-1">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack Tags */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span key={tech} className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Actions (View Details + Live + GitHub) */}
                      <div className="mt-6 flex items-center gap-2">
                        <Link 
                          href={`/projects/${project.slug}`}
                          className={cn(buttonVariants({ variant: "default" }), "flex-1 gap-2")}
                        >
                          View Details
                          <ArrowUpRight className="size-4" />
                        </Link>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Live Demo"
                          className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
                        >
                          <Globe className="size-4" />
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="GitHub Repository"
                          className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
                        >
                          <GitHubIcon className="size-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}