"use client"
import { ExternalLink, Building2 } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "SIEDCO",
    organization: "Policía Nacional de Colombia",
    description:
      "Sistema de Información Estadístico, Delincuencial, Contravencional y Operativo. Desarrollado con Next.js, Material UI, Axios y Redux.",
    tags: ["Next.js", "Material UI", "Redux", "Axios"],
  },
  {
    title: "SIDENCO",
    organization: "Policía Nacional de Colombia",
    description:
      "Sistema de denuncias y contravenciones. Aplicación web moderna con Next.js, Material UI, Axios y Redux.",
    tags: ["Next.js", "Material UI", "Redux", "Axios"],
  },
  {
    title: "SIEVI",
    organization: "Policía Nacional de Colombia",
    description:
      "Sistema de Información Estadístico Vial. Enfocado en rendimiento y mantenibilidad.",
    tags: ["Next.js", "Material UI", "Redux"],
  },
  {
    title: "SITIES",
    organization: "Policía Nacional de Colombia",
    description:
      "Sistema Único de Información sobre Tráfico Ilegal de Especies Silvestres.",
    tags: ["Next.js", "Material UI", "Redux"],
  },
  {
    title: "SIPSE",
    organization: "Policía Nacional de Colombia",
    description:
      "Sistema de Información Estadístico, Delincuencial, Contravencional y Operativo.",
    tags: ["Next.js", "Material UI", "Redux"],
  },
  {
    title: "SIGIC",
    organization: "Policía Nacional de Colombia",
    description:
      "Sistema Integral para la Gestión de la Investigación Criminal.",
    tags: ["Next.js", "Material UI", "Redux"],
  },
  {
    title: "DCCAE",
    organization: "Comando General Fuerzas Militares",
    description:
      "Sistema de control de armas, municiones y explosivos. Incluye PWA y reCAPTCHA.",
    tags: ["Next.js", "Material UI", "Redux", "PWA"],
    url: "https://dccae.cgfm.mil.co/dccae/",
  },
  {
    title: "SIAEM",
    organization: "Comando General Fuerzas Militares",
    description:
      "Sistema de control de armas SIAEM 2.0 con enfoque en seguridad.",
    tags: ["Next.js", "Material UI", "Redux", "PWA"],
  },
  {
    title: "KAMPOTIC",
    organization: "HEWTEC – VERY HIGH TECHNOLOGY FOR WORLD SAS",
    description:
      "Aplicación web orientada a la comercialización directa de productos agrícolas, permitiendo a productores publicar su oferta y a los usuarios consultar, negociar precios y comunicarse en tiempo real con los vendedores.",
    tags: ["Next.js", "Tailwind CSS", "Redux", "Axios", "WebSockets"],
  }


]


const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Experiencia & Proyectos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent flex-shrink-0">
                  <Building2 className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.organization}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/*  <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver más en GitHub
            </a>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
