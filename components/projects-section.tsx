"use client"

import { useState, MouseEvent, TouchEvent } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Github, FolderOpen, ArrowBigRightDashIcon, ExternalLink } from "lucide-react"
import Image from "next/image"
import { Carousel } from "@/components/ui/carousel"
import Lightbox from "@/components/ui/lightbox"

const projects = [
  {
    id: 1,
    title: "Sistema de Gestión Mayorista Javier",
    description:
      "Sistema completo con API RESTful, frontend MVC y funcionalidades avanzadas de gestión",
    images: [
      {
        src: "/images/SistemaMayoristaJavier/favicon.svg",
        alt: "Carátula del Proyecto",
        description: "Icono del sistema de gestión Mayorista Javier.",
      },
      {
        src: "/images/SistemaMayoristaJavier/MayoristaJavier-Login.png",
        alt: "Login",
        description: "Pantalla de inicio de sesión segura.",
      },
      {
        src: "/images/SistemaMayoristaJavier/MayoristaJavier-Articles.png",
        alt: "Artículos",
        description: "Gestión avanzada de artículos y stock.",
      },
      {
        src: "/images/SistemaMayoristaJavier/MayoristaJavier-Suppliers.png",
        alt: "Proveedores",
        description: "Administración de proveedores y compras.",
      },
      {
        src: "/images/SistemaMayoristaJavier/MayoristaJavier-Orders.png",
        alt: "Pedidos",
        description: "Módulo de pedidos con generación automática de órdenes.",
      },
      {
        src: "/images/SistemaMayoristaJavier/MayoristaJavier-Dashboard.png",
        alt: "Reportes",
        description: "Dashboard interactivo con reportes y métricas clave.",
      },
      {
        src: "/images/SistemaMayoristaJavier/MayoristaJavier-Users.png",
        alt: "Usuarios",
        description: "Gestión de usuarios, roles y permisos.",
      },
    ],
    technologies: [
      "C#",
      "PostgreSQL",
      "JWT",
      "BCrypt.NET",
      "PDFSharp",
      "MVC",
      "Razor Pages",
      "Tabulator",
      "Chart.js",
      "Bootstrap",
      "Neon",
      "Somee",
    ],
    longDescription:
      "Sistema integral de gestión mayorista que incluye una API RESTful desarrollada en C# con autenticación JWT, un frontend MVC con Razor Pages, tablas interactivas y visualización de datos.",
    features: [
      "API RESTful con endpoints protegidos mediante JWT",
      "Sistema de autenticación seguro con BCrypt.NET",
      "Generación automática de órdenes de pedido en PDF",
      "Frontend MVC con Razor Pages",
      "Tablas interactivas con Tabulator para gestión de datos",
      "Gráficos dinámicos con Chart.js para análisis",
      "Base de datos PostgreSQL alojada en Neon",
      "Hosting de la aplicación en Somee",
      "Dashboard de métricas y reportes",
      "Sistema de toma de pedidos e impresión para clientes",
    ],
    demoUrl: null,
    githubUrl: "https://github.com/rodrigoSuarez47",
  },
  {
    id: 2,
    title: "Web de Clientes para Mayorista Javier (PWA)",
    description:
      "Catálogo web progresivo (PWA) desarrollado en TypeScript y React para clientes mayoristas. Permite consultar productos y precios de forma rápida y offline.",
    images: [
      {
        src: "/images/WebClientesMayoristaJavier/favicon.svg",
        alt: "Favicon del proyecto",
        description: "Icono / carátula del PWA.",
      },
      {
        src: "/images/WebClientesMayoristaJavier/PWA desktop.png",
        alt: "PWA Desktop",
        description: "Vista del PWA en escritorio.",
      },
    ],
    technologies: ["TypeScript", "React", "PWA", "TailwindCSS", "Vercel"],
    longDescription:
      "Aplicación web progresiva (PWA) para clientes mayoristas, desarrollada con TypeScript y React. Permite consultar el catálogo de productos y precios de manera moderna, rápida y offline.",
    features: [
      "Catálogo de productos con búsqueda y filtros",
      "Consulta de productos y precios en tiempo real (y offline)",
      "Desarrollo completo en TypeScript",
      "Interfaz moderna y responsive con React",
      "Diseño optimizado con TailwindCSS",
      "Instalación nativa en dispositivos móviles y desktop",
      "Funciona sin conexión (offline-first)",
    ],
    demoUrl: "https://mayoristajavier.vercel.app/",
    githubUrl: "https://github.com/rodrigoSuarez47",
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [lightboxState, setLightboxState] = useState<{ projectIndex: number; current: number } | null>(null)

  // swipe states
  const [touchStartX, setTouchStartX] = useState(0)

  const openLightbox = (projectIndex: number, start = 0) =>
    setLightboxState({ projectIndex, current: start })
  const closeLightbox = () => setLightboxState(null)
  const prevLightbox = () =>
    setLightboxState((s) =>
      s ? { ...s, current: s.current === 0 ? projects[s.projectIndex].images.length - 1 : s.current - 1 } : s
    )
  const nextLightbox = () =>
    setLightboxState((s) =>
      s
        ? { ...s, current: s.current === projects[s.projectIndex].images.length - 1 ? 0 : s.current + 1 }
        : s
    )

  // Swipe detection
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartX(e.changedTouches[0].clientX)
  }
  const handleTouchEnd = (e: TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX
    if (deltaX > 50) prevLightbox()
    if (deltaX < -50) nextLightbox()
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 space-y-12 text-center">
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FolderOpen className="h-8 w-8 text-primary" />
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Proyectos</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Una selección de proyectos que demuestran mis habilidades técnicas y enfoque en soluciones escalables
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="p-0">
                {project.images && project.images.length > 0 ? (
                  <Carousel
                    images={project.images}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72"
                    onImageClick={(index) => openLightbox(idx, index)}
                  />
                ) : (
                  <Image
                    src={"/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                )}
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="mb-4 text-pretty">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full bg-transparent dark:hover:text-primary"
                  onClick={(e: MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation()
                    setSelectedProject(project)
                  }}
                >
                  Ver detalles
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">Más proyectos próximamente...</p>
          <Button variant="outline" asChild className="dark:hover:text-primary">
            <a href="https://github.com/rodrigoSuarez47" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Ver todos en GitHub
            </a>
          </Button>
        </div>
      </div>

      {/* Modal Detalles */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl mt-4">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-base mt-4">
                  {selectedProject.longDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                <div className="mt-4">
                  <h4 className="font-semibold mb-3">Características principales:</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Tecnologías utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  {selectedProject.demoUrl && (
                    <Button variant="outline" asChild className="flex-1 w-full sm:w-auto dark:hover:text-primary">
                      <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Navegar al proyecto
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Lightbox con soporte swipe */}
      {lightboxState && (
        <Lightbox open={true} onClose={closeLightbox} prev={prevLightbox} next={nextLightbox}>
          <div
            className="relative w-[95vw] h-[80vh] max-w-[95vw] max-h-[85vh] flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              src={projects[lightboxState.projectIndex].images[lightboxState.current].src}
              alt={projects[lightboxState.projectIndex].images[lightboxState.current].alt}
              fill
              className="object-contain"
              sizes="95vw"
              priority
            />
          </div>
        </Lightbox>
      )}
    </section>
  )
}
