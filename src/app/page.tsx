import { Navbar } from "@/components/layout/Navbar"
import { About } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"
import { Education } from "@/components/sections/Education"
import { Experience } from "@/components/sections/Experience"
import { Footer } from "@/components/sections/Footer"
import { Hero } from "@/components/sections/Hero"
import { Projects } from "@/components/sections/Projects"
import { Skills } from "@/components/sections/Skills"

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
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}