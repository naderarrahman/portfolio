"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code2, Database, Rocket, ChevronDown, MousePointer2 } from "lucide-react"

import { FadeIn } from "@/components/ui/FadeIn"
import { IconCloud } from "@/components/ui/icon-cloud"
import { skills } from "@/data/skills"

const categorySlugs: Record<string, string[]> = {
  Frontend: ["react", "nextdotjs", "typescript", "tailwindcss", "html5", "css3", "javascript"],
  Backend: ["nodedotjs", "express", "postgresql", "prisma", "mongodb"],
  Tools: ["git", "github", "docker", "vercel", "figma", "linux"],
}

const allSlugs = [...new Set(Object.values(categorySlugs).flat())]

const categoryStyles = {
  Frontend: { icon: Code2, color: "text-purple-500", bg: "bg-purple-500/10" },
  Backend: { icon: Database, color: "text-blue-500", bg: "bg-blue-500/10" },
  Tools: { icon: Rocket, color: "text-rose-500", bg: "bg-rose-500/10" },
}

function Skills() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const activeSlugs = useMemo(() => {
    if (activeCategory === "All") return allSlugs
    return categorySlugs[activeCategory] || allSlugs
  }, [activeCategory])

  const handleCardClick = (index: number, category: string) => {
    setOpenIndex(openIndex === index ? null : index)
    setActiveCategory(category) 
  }

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative scroll-mt-32 py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-[#f7f4ee] p-8 sm:p-12 lg:p-16 dark:bg-[#151210] shadow-sm">
          
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                02 — Skills
              </p>
            </div>
            <h2
              id="skills-heading"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Skills &amp; tools
            </h2>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            
            <FadeIn delay={0.1}>
              <div className="relative flex flex-col items-center justify-center">
                <div className="relative w-full max-w-md">
                  <IconCloud key={activeCategory} iconSlugs={activeSlugs} />
                </div>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-xs text-muted-foreground font-mono backdrop-blur-sm pointer-events-none shadow-sm">
                  <MousePointer2 className="size-3 text-primary" />
                  <span>
                    {activeCategory === "All" 
                      ? "Drag to explore all skills" 
                      : `Showing ${activeCategory} skills`}
                  </span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col gap-4">
                {skills.map((group, index) => {
                  const style = categoryStyles[group.category as keyof typeof categoryStyles] || categoryStyles.Frontend
                  const Icon = style.icon
                  const isOpen = openIndex === index
                  const isActive = activeCategory === group.category

                  return (
                    <div 
                      key={group.category}
                      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                        isActive 
                          ? "border-primary/50 bg-primary/5 shadow-md" 
                          : isOpen ? "border-border/80 bg-background shadow-sm" : "border-border/60 bg-background/50 hover:bg-background"
                      }`}
                    >
                      <button
                        onClick={() => handleCardClick(index, group.category)}
                        className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${style.bg} ${style.color}`}>
                            <Icon className="size-6" />
                          </div>
                          <div>
                            <h3 className={`text-lg font-semibold ${isActive ? "text-primary" : "text-foreground"}`}>
                              {group.category}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {group.skills.length} skills
                            </p>
                          </div>
                        </div>
                        <ChevronDown 
                          className={`size-5 text-muted-foreground transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`} 
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
                              <p className="mb-4 text-sm text-muted-foreground">
                                Experienced in building modern solutions using these technologies.
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                  <span 
                                    key={skill.name} 
                                    className="inline-flex items-center rounded-full border border-border/60 bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                                  >
                                    {skill.name}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}

                {/* Show All Button */}
                <button
                  onClick={() => {
                    setActiveCategory("All")
                    setOpenIndex(null)
                  }}
                  className={`mt-2 w-full rounded-xl border border-dashed py-3 text-sm font-medium transition-colors ${
                    activeCategory === "All" 
                      ? "border-primary/50 bg-primary/5 text-primary" 
                      : "border-border/60 text-muted-foreground hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  Show All Skills in Cloud
                </button>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  )
}

export { Skills }