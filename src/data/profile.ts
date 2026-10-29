
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
  resumeUrl: "/resume/Nader_Ar_Rahman_Resume.pdf", 
  socials: {
    github: "https://github.com/naderarrahman",
    linkedin: "https://www.linkedin.com/in/naderarrahman",
    twitter: "https://x.com/naderArRahman03",
  },
  aboutMe:
    "I'm a full-stack developer based in Noakhali, Bangladesh, with over a year of experience turning ideas into production-ready products. I enjoy working across the stack — from shaping a clear, accessible interface in React and Next.js to designing APIs and data models that hold up over time.\n\nMy focus is on writing code that is easy to reason about, keeping performance in check, and paying attention to the small details that make a product feel considered. When I'm not building, I'm usually exploring design systems, contributing to side projects, or learning something new.",
  location: "Noakhali, Bangladesh",
  experienceYears: 1,
  email: "naderarrahman@gmail.com",
  phone: "+8801314726425",
  
  education: [
    {
      degree: "BSS (Honours) in Information Science and Library Management (ISLM)",
      institution: "Noakhali Science and Technology University (NSTU)",
      year: "2023 — Present (4th Year / 7th Semester)",
      description:
        "Studying information systems, digital preservation, database management, and web information retrieval while actively building modern full-stack web applications.",
    },
    {
      degree: "Higher Secondary Certificate (HSC) — Science",
      institution: "Mohammad Chowdhury (MC) Academy, Golapganj, Sylhet",
      year: "2022",
      description:
        "Completed higher secondary education in the science stream with a strong foundation in mathematics, physics, and computer science, achieving GPA 5.00.",
    },
  ],
  
  certifications: [
    {
      title: "Professional WordPress Mastery Zero to Hero (Online)",
      issuer: "UY LAB",
      year: "2025",
      link: "/certificates/professional-wordpress-mastery.pdf",
    },
    {
      title: "School Library Leadership Program (Fellowship)",
      issuer: "Librarian Voice",
      year: "2025",
      link: "/certificates/library-leadership.pdf",
    },
    {
      title: "Certificate of Appreciation (Campus Representative)",
      issuer: "Librarian Voice",
      year: "2025",
      link: "/certificates/campus-representative.jpg",
    },
  ],
  
  experience: [
    {
      role: "Independent Full-Stack Web Developer",
      company: "Self-Employed / Personal Projects",
      duration: "2025 — Present",
      description: [
        "Architect and develop full-stack web applications using React, Next.js, TypeScript, and MongoDB.",
        "Design clean, responsive user interfaces with Tailwind CSS following modern UI/UX principles.",
        "Implement secure client-side authentication, REST APIs, and database integrations for production-ready web apps.",
      ],
    },
    {
      role: "Trainee Full-Stack Web Engineer",
      company: "Programming Hero (Batch 14)",
      duration: "2026 — Present",
      description: [
        "Enrolled in an intensive AI-driven full-stack web engineering program focused on modern JavaScript and TypeScript ecosystems.",
        "Building hands-on, real-world web projects, mastering frontend architecture, backend RESTful APIs, and algorithmic problem-solving.",
      ],
    },
    {
      role: "WordPress Web Developer (Trainee)",
      company: "UY LAB",
      duration: "Mar 2025 — Jun 2025",
      description: [
        "Completed the 'Professional WordPress Mastery Zero to Hero' course at UY LAB.",
        "Mastered complete WordPress site building, theme customization, Elementor page design, and WooCommerce store setup.",
        "Gained hands-on expertise in performance optimization, site security, and plugin management for web applications.",
      ],
    },
  ],
}