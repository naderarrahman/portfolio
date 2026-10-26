export interface Project {
  slug: string
  title: string
  category: "Full Stack" | "React" | "Next.js"
  description: string
  image: string
  techStack: string[]
  liveLink: string
  githubLink: string
  challenges: string
  improvements: string
}

export const projects: Project[] = [
  {
    slug: "bangla-news-24",
    title: "Bangla News 24",
    category: "Next.js",
    description: "A modern Bengali news portal featuring category-based browsing, social authentication, and protected content using Better Auth and MongoDB.",
    image: "/projects/bangla-news-24.jpg", 
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "DaisyUI", "Better Auth", "MongoDB"],
    liveLink: "https://bangla-news-24-navy.vercel.app/",
    githubLink: "https://github.com/naderarrahman/bangla-news-24", 
    challenges: "Implementing secure server-side route protection and seamlessly integrating Google and GitHub OAuth providers with Better Auth.",
    improvements: "Adding a search feature with keyword filtering, bookmarks for saving articles, and a personalized news recommendation engine.",
  },
  {
    slug: "bazardor",
    title: "BazarDor",
    category: "Next.js",
    description: "A responsive Bengali market price tracker to view daily commodity prices, compare across markets, and identify price fluctuations.",
    image: "/projects/bazar-dar.jpg",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Better Auth", "MongoDB"],
    liveLink: "https://bazar-dor-liard.vercel.app",
    githubLink: "https://github.com/naderarrahman/bazar-dor",
    challenges: "Handling numeric sorting using Bengali numerals and configuring complex API caching with revalidation for real-time price updates.",
    improvements: "Adding historical price charts to visualize trends, setting up price alerts, and introducing advanced filtering.",
  },
  {
    slug: "fitlog",
    title: "FITLOG",
    category: "Next.js",
    description: "A modern fitness tracking application to browse workouts, manage daily training plans, and track calories and duration.",
    image: "/projects/fit-log.jpg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Context API", "Lucide React"],
    liveLink: "https://fit-log-gamma-jet.vercel.app/",
    githubLink: "https://github.com/naderarrahman/fit-log",
    challenges: "Syncing saved exercises seamlessly with the daily workout plans and handling dynamic route navigation without page reloads.",
    improvements: "Introducing user authentication to save data permanently, generating workout history charts, and adding a social sharing feature.",
  },
  {
    slug: "devstack",
    title: "DevStack",
    category: "React",
    description: "An interactive technology stack builder allowing developers to discover, organize, and manage their favorite tech stack.",
    image: "/projects/dev-stack.jpg",
    techStack: ["React.js", "Vite", "TypeScript", "Tailwind CSS", "React Toastify"],
    liveLink: "https://devstack-nader.vercel.app/",
    githubLink: "https://github.com/naderarrahman/devstack",
    challenges: "Managing real-time state for adding and removing technologies, preventing duplicates, and ensuring smooth toast notifications.",
    improvements: "Implementing local storage for saving user stacks, adding a search function, and introducing dark mode.",
  },
]