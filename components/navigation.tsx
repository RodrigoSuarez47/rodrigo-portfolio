"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Code2, User, Wrench, FolderOpen, Phone } from "lucide-react"
import { useTheme } from "next-themes"

const navItems = [
  { name: "Sobre mí", href: "#about", icon: User },
  { name: "Habilidades", href: "#skills", icon: Wrench },
  { name: "Proyectos", href: "#projects", icon: FolderOpen },
  { name: "Contacto", href: "#contact", icon: Phone },
]

export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Code2 className="h-6 w-6 text-primary" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors duration-200"
                  >
                    <Icon className="h-4 w-4 text-primary group-hover:text-dark dark:group-hover:text-primary" />
                    {item.name}
                  </a>
                );
              })}
              <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="dark:hover:text-primary">
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="dark:hover:text-primary">
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="dark:hover:text-primary">
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-4 w-4 text-primary group-hover:text-white dark:group-hover:text-white" />
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16" />
    </>
  )
}
