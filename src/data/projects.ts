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
  features: string[]
}

export const projects: Project[] = [
  {
    slug: "bangla-news-24",
    title: "Bangla News 24",
    category: "Next.js",
    description: "A modern Bengali news portal featuring category-based browsing, social authentication, and protected content using Better Auth and MongoDB.",
    image: "/projects/bangla-news-24.jpg", 
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "DaisyUI", "Better Auth", "MongoDB Atlas"],
    liveLink: "https://bangla-news-24-navy.vercel.app/",
    githubLink: "https://github.com/naderarrahman/bangla-news-24", 
    challenges: "Implementing secure server-side route protection and seamlessly integrating Google and GitHub OAuth providers. Managing complex session states and ensuring secure access to protected news content was a significant learning curve.",
    improvements: "Adding a comprehensive search feature with keyword filtering, user bookmarks for saving articles, and an editorial dashboard for news management. Implementing pagination and personalized news recommendations.",
    features: [
      "Email & Social Authentication (Google, GitHub OAuth)",
      "Category-based news browsing with dynamic routes",
      "Protected article content with guest previews",
      "Scrolling headline marquee and responsive news grids",
      "User profile management with inline updates",
      "Custom 404 pages and loading states for better UX"
    ]
  },
  {
    slug: "bazardor",
    title: "BazarDor",
    category: "Next.js",
    description: "A responsive Bengali market price tracker to view daily commodity prices, compare across markets, and identify price fluctuations.",
    image: "/projects/bazar-dar.jpg",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Better Auth", "MongoDB Atlas"],
    liveLink: "https://bazar-dor-liard.vercel.app",
    githubLink: "https://github.com/naderarrahman/bazar-dor",
    challenges: "Handling numeric sorting using Bengali numerals required custom logic. Additionally, configuring complex API caching with revalidation for real-time price updates across multiple market categories was challenging.",
    improvements: "Adding historical price charts to visualize trends over time, setting up price drop alerts for users, and introducing advanced filtering by specific markets. Expanding market coverage.",
    features: [
      "Daily market price tracking for essential commodities",
      "Top price increases and decreases at a glance",
      "Compare prices across 12+ different markets",
      "Sort products by price using Bengali numerals",
      "Infinite scrolling price ticker",
      "Dynamic Bengali date formatting and typography"
    ]
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
    challenges: "Syncing saved exercises seamlessly with the daily workout plans using React Context API and handling dynamic route navigation without losing state. Ensuring build-safe routing with client-side suspense boundaries.",
    improvements: "Introducing user authentication to save data permanently across devices, generating workout history charts, and adding a social sharing feature to share workout plans with friends.",
    features: [
      "Dynamic daily workout planning with real-time tracking",
      "Saved exercises sync with header navigation badges",
      "Smart sorting by duration, calories, and user ratings",
      "Interactive workout details page with save/plan toggles",
      "Optimized UX with loading states and custom 404 pages",
      "Responsive layouts for mobile and desktop"
    ]
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
    challenges: "Managing real-time state for adding and removing technologies efficiently, preventing duplicates in the array, and ensuring smooth toast notifications for every user interaction.",
    improvements: "Implementing local storage to persist the selected tech stack across sessions, adding a search function to filter technologies, and introducing a dark mode for better accessibility.",
    features: [
      "Interactive technology selection with visual indicators",
      "Real-time add/remove to personal stack",
      "Duplicate prevention logic for technologies",
      "Toast notifications for instant user feedback",
      "Clean UI with modern gradient styling",
      "Sticky navigation and fully reusable components"
    ]
  },
]