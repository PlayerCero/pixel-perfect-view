import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { mailto, profile } from "@/lib/profile";

const highlights = [
  { key: "SQL", detail: "MySQL · PostgreSQL · SQL Server" },
  { key: "Python", detail: "Pandas · Scikit-learn" },
  { key: "Power BI", detail: "DAX · Power Query" },
];

export function Hero() {
  return (
    <section id="perfil" className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border" />
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">Disponible para prácticas preprofesionales · Lima, Perú</p>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl">
            Eric Salinas — Data Analyst
          </h1>
          <p className="mt-4 max-w-2xl text-base text-foreground/90 md:text-lg">
            Convierto datos dispersos en tableros y decisiones: SQL para modelar, Python para
            limpiar y analizar, Power BI para que el negocio lo entienda.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Estudiante de 10.º ciclo de Ingeniería Industrial y de Sistemas en la Universidad de
            Piura, becario Beca 18 por alto rendimiento, con especialización en Ciencia de Datos y
            Automatización en el CTIC de la UNI. Busco mi primera práctica preprofesional en datos,
            BI o automatización de procesos.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map((h) => (
              <li key={h.key} className="card-surface px-4 py-3">
                <p className="font-mono text-sm font-semibold text-primary">{h.key}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{h.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ver proyectos <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary"
            >
              Contactar
            </a>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md hover:text-primary"
            >
              <Linkedin className="size-4" aria-hidden /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md hover:text-primary"
            >
              <Github className="size-4" aria-hidden /> GitHub
            </a>
            <a
              href={mailto}
              className="inline-flex items-center gap-2 rounded-md hover:text-primary"
            >
              <Mail className="size-4" aria-hidden /> {profile.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
