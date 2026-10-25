export interface Skill {
  name: string
  /** Proficiency percentage from 0 to 100. */
  proficiency: number
}

export interface SkillCategory {
  category: string
  skills: Skill[]
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", proficiency: 92 },
      { name: "Next.js", proficiency: 90 },
      { name: "TypeScript", proficiency: 88 },
      { name: "Tailwind CSS", proficiency: 95 },
      { name: "HTML & CSS", proficiency: 95 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", proficiency: 85 },
      { name: "Express", proficiency: 82 },
      { name: "PostgreSQL", proficiency: 80 },
      { name: "Prisma", proficiency: 78 },
      { name: "REST APIs", proficiency: 88 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub", proficiency: 92 },
      { name: "Docker", proficiency: 70 },
      { name: "Vercel", proficiency: 85 },
      { name: "Figma", proficiency: 65 },
      { name: "Linux", proficiency: 72 },
    ],
  },
]
