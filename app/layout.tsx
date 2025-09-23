import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "../styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Rodrigo Suárez | Full Stack Developer Portfolio",
  description:
    "Rodrigo Suárez, Full Stack Developer de Montevideo, Uruguay. Graduado de la Universidad ORT con escolaridad destacada. Apasionado por la tecnología, especializado en React, Next.js, C#, Java y PostgreSQL. Desarrollo soluciones web escalables, PWAs y sistemas de gestión empresarial.",
  generator: "Next.js",
  keywords: [
    "Full Stack Developer Uruguay",
    "Desarrollador Web Montevideo",
    "React Developer",
    "Next.js",
    "TypeScript",
    "C# ASP.NET Core",
    "PostgreSQL",
    "Java",
    "PWA Developer",
    "API REST",
    "JWT Authentication",
    "BCrypt.NET",
    "AWS",
    "Azure",
    "Vercel",
    "Neon Database",
    "Universidad ORT Uruguay",
    "Analista TI",
    "Desarrollo Web Profesional",
    "Portfolio Desarrollador",
  ],
  authors: [{ name: "Rodrigo Suárez", url: "https://linkedin.com/in/rodrigo-suarez" }],
  creator: "Rodrigo Suárez",
  publisher: "Rodrigo Suárez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Rodrigo Suárez | Full Stack Developer Portfolio",
    description:
      "Portfolio de Rodrigo Suárez, Full Stack Developer especializado en React, Next.js, C#, Java, PostgreSQL y más. Montevideo, Uruguay.",
    type: "website",
    locale: "es_UY",
    siteName: "Rodrigo Suárez Portfolio",
    url: "https://RodrigoSuarez.vercel.app",
    images: [
      {
        url: "https://RodrigoSuarez.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rodrigo Suárez Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodrigo Suárez | Full Stack Developer",
    description:
      "Portfolio de Rodrigo Suárez, Full Stack Developer de Uruguay con experiencia en React, Next.js, C#, PostgreSQL y más.",
    images: ["https://tuusuario.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
