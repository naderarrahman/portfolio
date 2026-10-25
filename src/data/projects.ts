export interface Project {
  id: string
  title: string
  image: string
  techStack: string[]
  description: string
  liveLink: string
  githubLink: string
  challenges: string[]
  improvements: string[]
}

// Links and image paths are placeholders — point them at real assets when ready.
export const projects: Project[] = [
  {
    id: "devflow",
    title: "DevFlow",
    image: "/images/projects/devflow.png",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Socket.IO"],
    description:
      "A collaborative workspace where small teams plan sprints, track issues, and discuss work in real time.",
    liveLink: "https://devflow.example.com",
    githubLink: "https://github.com/naderarrahman/devflow",
    challenges: [
      "Keeping board state in sync across clients without race conditions.",
      "Designing a permissions model that stays simple for small teams.",
    ],
    improvements: [
      "Add offline support with optimistic updates and a sync queue.",
      "Introduce keyboard shortcuts and a command palette.",
    ],
  },
  {
    id: "shoplane",
    title: "ShopLane",
    image: "/images/projects/shoplane.png",
    techStack: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL", "Zod"],
    description:
      "A lightweight storefront with server-rendered product pages, cart persistence, and a Stripe checkout flow.",
    liveLink: "https://shoplane.example.com",
    githubLink: "https://github.com/naderarrahman/shoplane",
    challenges: [
      "Handling inventory changes between checkout creation and payment confirmation.",
      "Keeping product pages fast while supporting dynamic pricing and stock.",
    ],
    improvements: [
      "Add saved addresses and a customer account area.",
      "Improve search with typo tolerance and faceted filters.",
    ],
  },
  {
    id: "taskpilot",
    title: "TaskPilot",
    image: "/images/projects/taskpilot.png",
    techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    description:
      "A personal task manager with recurring tasks, focus sessions, and a weekly review dashboard.",
    liveLink: "https://taskpilot.example.com",
    githubLink: "https://github.com/naderarrahman/taskpilot",
    challenges: [
      "Modelling recurring tasks without duplicating large numbers of records.",
      "Keeping the weekly review useful without overwhelming the user.",
    ],
    improvements: [
      "Add calendar sync and natural-language task capture.",
      "Build a mobile-friendly PWA with background reminders.",
    ],
  },
]
