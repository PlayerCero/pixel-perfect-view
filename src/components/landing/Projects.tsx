import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Project = {
  title: string;
  year?: string;
  tech: string[];
  text: string;
  metric?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Control presupuestario y análisis gerencial",
    year: "2026",
    tech: ["Power BI", "DAX", "Power Query"],
    text: "Modelé un tablero de seguimiento presupuestario sobre un dataset financiero 2018–2019, con medidas DAX y alertas condicionales sobre desvíos. El tablero hace visible una caída de saldo de US$122.4K esperado a US$82K que en seguimiento manual solo aparece al cierre.",
    metric: "US$122.4K → US$82K",
    featured: true,
  },
  {
    title: "Automatización de registro y avisos con Power Platform",
    year: "2026",
    tech: ["Power Apps", "Power Automate", "SharePoint"],
    text: "Aplicación de captura de datos de empleados, clientes y productos que escribe en listas de SharePoint, con flujos que envían correos de aviso al registrarse un empleado o cliente nuevo. Reemplaza el registro manual en Excel y el aviso por mensaje.",
  },
  {
    title: "Diseño de base de datos y consultas de negocio",
    tech: ["MySQL", "PostgreSQL", "SQL Server"],
    text: "Esquemas relacionales normalizados en 3FN con claves primarias y foráneas para casos de retail e inventario, y consultas multitabla (joins, subconsultas, GROUP BY / HAVING) para KPIs: ranking de productividad, rotación de productos y detección de inactividad.",
  },
  {
    title: "Machine learning y previsión de demanda",
    tech: ["Python", "Scikit-learn", "TensorFlow/Keras"],
    text: "Segmentación con K-Means, clasificación por similitud con KNN con el modelo serializado en Pickle para reutilizarlo, y una red neuronal para relaciones no lineales en datos industriales. Proyección de demanda sobre series de tiempo con suavizamiento exponencial (ETS) y regresión lineal, con intervalos de confianza para planeamiento y presupuesto.",
  },
  {
    title: "People Analytics: gestión de talento",
    year: "2025",
    tech: ["Power BI"],
    text: "Tablero con segmentación demográfica y por área sobre un dataset de 194 empleados, para seguir evaluación de desempeño y compensación media por segmento.",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`card-surface card-interactive flex h-full flex-col p-5 md:p-6 ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold md:text-lg">{project.title}</h3>
        {project.year && (
          <span className="shrink-0 font-mono text-xs text-muted-foreground">{project.year}</span>
        )}
      </div>

      <ul className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li key={t} className="tag-mono">
            {t}
          </li>
        ))}
      </ul>

      {project.metric && (
        <p className="mt-4 rounded-md border border-primary/40 bg-primary/10 px-4 py-3 font-mono text-lg font-semibold text-primary md:text-xl">
          {project.metric}
        </p>
      )}

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.text}</p>

      <a
        href="#"
        className="mt-5 inline-flex items-center gap-1.5 self-start text-sm text-foreground/80 transition-colors hover:text-primary"
      >
        Ver en GitHub <ArrowUpRight className="size-4" aria-hidden />
      </a>
    </article>
  );
}

export function Projects() {
  return (
    <section id="proyectos" className="py-16 md:py-20">
      <div className="section-shell">
        <SectionHeading
          title="Proyectos"
          subtitle="Proyectos construidos en cursos universitarios y de especialización. Código y documentación en GitHub."
        />
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 50}
              className={p.featured ? "md:col-span-2" : ""}
            >
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
