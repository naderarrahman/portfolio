// Placeholder content — replace the contact details, links, and resume with real ones.

export interface Socials {
  github: string
  linkedin: string
  twitter: string
}

export interface EducationEntry {
  degree: string
  institution: string
  year: string
  description: string
}

export interface CertificationEntry {
  title: string
  issuer: string
  year: string
  link: string
}

export interface ExperienceEntry {
  role: string
  company: string
  duration: string
  description: string[]
}

export interface Profile {
  name: string
  designation: string
  intro: string
  resumeUrl: string
  socials: Socials
  aboutMe: string
  location: string
  experienceYears: number
  email: string
  phone: string
  education: EducationEntry[]
  certifications: CertificationEntry[]
  experience: ExperienceEntry[]
}

export const profile: Profile = {
  name: "Nader Ar Rahman",
  designation: "Full-Stack Web Developer",
  intro:
    "I build fast, accessible web applications with clean interfaces, thoughtful interactions, and dependable backends.",
  resumeUrl: "#",
  socials: {
    github: "https://github.com/naderarrahman",
    linkedin: "https://www.linkedin.com/in/naderarrahman",
    twitter: "https://x.com/naderarrahman",
  },
  aboutMe:
    "I'm a full-stack developer based in Noakhali, Bangladesh, with over a year of experience turning ideas into production-ready products. I enjoy working across the stack — from shaping a clear, accessible interface in React and Next.js to designing APIs and data models that hold up over time.\n\nMy focus is on writing code that is easy to reason about, keeping performance in check, and paying attention to the small details that make a product feel considered. When I'm not building, I'm usually exploring design systems, contributing to side projects, or learning something new.",
  location: "Noakhali, Bangladesh",
  experienceYears: 1,
  email: "hello@naderarrahman.dev",
  phone: "+880 1XXX-XXXXXX",
  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "University of Dhaka",
      year: "2020 — 2024",
      description:
        "Studied software engineering, data structures, algorithms, and database systems. Graduated with a final-year project focused on building an accessible, full-stack web application.",
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Notre Dame College, Dhaka",
      year: "2017 — 2019",
      description:
        "Completed the science stream with a focus on mathematics, physics, and computer science.",
    },
  ],
  certifications: [
    {
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Coursera",
      year: "2025",
      link: "https://example.com/certificates/meta-front-end-developer",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
      link: "https://example.com/certificates/aws-cloud-practitioner",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      year: "2023",
      link: "https://example.com/certificates/javascript-algorithms",
    },
  ],
  experience: [
    {
      role: "Full-Stack Developer",
      company: "Independent / Freelance",
      duration: "2025 — Present",
      description: [
        "Build and maintain responsive web applications with Next.js, TypeScript, and PostgreSQL.",
        "Translate Figma designs into accessible, reusable components with Tailwind CSS.",
        "Work directly with clients to scope features, estimate work, and ship on schedule.",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "SoftUp Technologies",
      duration: "2024 — 2025",
      description: [
        "Developed responsive marketing pages and dashboard views for early-stage SaaS products.",
        "Collaborated with senior developers on component architecture and API integration.",
        "Wrote reusable form and table patterns that reduced repeated UI work.",
      ],
    },
  ],
}
