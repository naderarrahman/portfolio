import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar"; // নতুন ইমপোর্ট
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

// মেটাডাটা এখন নিরাপদে থাকবে (Server Component)
export const metadata: Metadata = {
  title: "Nader Ar Rahman | Portfolio",
  description: "Professional Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ScrollProgressBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}