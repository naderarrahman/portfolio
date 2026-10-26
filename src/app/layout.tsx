import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar" // নতুন ইমপোর্ট
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nader Ar Rahman | Portfolio",
  description: "Professional Full Stack Developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgressBar />
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}
