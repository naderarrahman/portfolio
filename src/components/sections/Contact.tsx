"use client"

import { useState, type FormEvent } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

import { GitHubIcon, LinkedInIcon } from "@/components/icons/social-icons"
import { FadeIn } from "@/components/ui/FadeIn"
import { buttonVariants } from "@/components/ui/button"
import { profile } from "@/data/profile"
import { cn } from "@/lib/utils"

function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    setLoading(true)
    setSuccess("")
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          message: String(formData.get("message") ?? ""),
        }),
      })

      const data = (await response.json().catch(() => null)) as {
        error?: string
        message?: string
      } | null

      if (!response.ok) {
        throw new Error(
          data?.error ?? "Unable to send your message. Please try again."
        )
      }

      setSuccess(data?.message ?? "Your message has been sent.")
      form.reset()
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to send your message. Please try again."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-32 py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-[#f7f4ee] p-8 sm:p-12 lg:p-16 dark:bg-[#151210] shadow-sm">
          
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                06 — Contact
              </p>
            </div>
            <h2
              id="contact-heading"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Get in touch
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Have a project in mind, a question, or just want to say hi? 
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            
            {/* Left Column: Contact Information */}
            <FadeIn delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Contact Information
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Feel free to reach out through the form or directly via my contact details below.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Email */}
                  <a 
                    href={`mailto:${profile.email}`}
                    className="group flex items-center gap-4 rounded-xl border border-border/60 bg-background/50 p-4 transition-colors hover:bg-background hover:border-primary/30"
                  >
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Email</p>
                      <p className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        {profile.email}
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a 
                    href={`tel:${profile.phone}`}
                    className="group flex items-center gap-4 rounded-xl border border-border/60 bg-background/50 p-4 transition-colors hover:bg-background hover:border-primary/30"
                  >
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Phone</p>
                      <p className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        {profile.phone}
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 rounded-xl border border-border/60 bg-background/50 p-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Location</p>
                      <p className="text-base font-semibold text-foreground">
                        {profile.location}
                      </p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <a 
                      href={profile.socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-center gap-3 rounded-xl border border-border/60 bg-background/50 p-4 transition-colors hover:bg-background hover:border-primary/30"
                    >
                      <GitHubIcon className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        GitHub
                      </span>
                    </a>
                    <a 
                      href={profile.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-center gap-3 rounded-xl border border-border/60 bg-background/50 p-4 transition-colors hover:bg-background hover:border-primary/30"
                    >
                      <LinkedInIcon className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        LinkedIn
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right Column: Contact Form */}
            <FadeIn delay={0.2}>
              <div className="rounded-2xl border border-border/60 bg-background/50 p-6 sm:p-8 shadow-sm">
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-border/60 bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                    {/* Email Input */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        className="w-full rounded-lg border border-border/60 bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full resize-none rounded-lg border border-border/60 bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    aria-busy={loading}
                    className={cn(buttonVariants({ size: "lg" }), "w-full gap-2")}
                  >
                    <Send className="size-4" />
                    Send Message
                  </button>

                  {loading ? (
                    <p role="status" className="text-sm text-muted-foreground">
                      Sending your message...
                    </p>
                  ) : null}
                  {success ? (
                    <p role="status" className="text-sm text-primary">
                      {success}
                    </p>
                  ) : null}
                  {error ? (
                    <p role="alert" className="text-sm text-destructive">
                      {error}
                    </p>
                  ) : null}
                </form>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  )
}

export { Contact }