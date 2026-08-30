import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { repoPath } from "@/lib/profile";

type Project = {
  title: string;
  year?: string;
  tech: string[];
  text: string;
  metric?: { value: string; label: string };
  image?: { src: string; alt: string };
  href: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Control presupuestario y análisis gerencial",
    year: "2026",
    tech: ["Power BI", "DAX", "Power Query"],
    text: "Tablero de seguimiento presupuestario sobre un dataset financiero 2018–2019, con arquitectura de medidas DAX en tres capas (agregación → lógica → KPI) y alertas condicionales sobre desvíos. Hace visible en el mes una caída de saldo que en seguimiento manual solo aparecería al cierre del ejercicio.",
    metric: { value: "133 %", label: "cumplimiento de utilidad — y una alerta de saldo al 93 %" },
    image: {
      src: "/proyectos/powerbi-finanzas.webp",
      alt: "Dashboard de Power BI con medidores de cuota de ingresos, gastos, utilidad y saldo",
    },
    href: repoPath("PowerBI_Proyectos/Finanzas_Empresariales_2018_2019"),
    featured: true,
  },
  {
    title: "People Analytics: gestión de talento",
    year: "2025",
    tech: ["Power BI", "DAX", "Mapas"],
    text: "Tablero de RR. HH. con segmentación demográfica, por estado y por banda salarial, para seguir evaluación de desempeño y compensación media por segmento con navegación entre reportes.",
    image: {
      src: "/proyectos/powerbi-hr.webp",
      alt: "Dashboard de recursos humanos con mapa, distribución por edad y tabla de empleados",
    },
    href: repoPath("PowerBI_Proyectos/Gestion_Talento_Humano_HR"),
  },
  {
    title: "Automatización de reportes comerciales en Excel",
    tech: ["Excel avanzado", "VBA", "Power Query", "Solver"],
    text: "Dashboard de ventas con segmentadores y línea de tiempo sobre S/ 249 mil de facturación, más macros VBA para envío de correos desde Outlook, formularios de captura y gráficos dinámicos automatizados. Reemplaza el armado manual del reporte mensual.",
    metric: {
      value: "S/ 249,721",
      label: "ventas analizadas por mes, categoría, región y vendedor",
    },
    image: {
      src: "/proyectos/excel-dashboard.webp",
      alt: "Dashboard de ventas en Excel con evolución mensual, top 5 vendedores y formas de pago",
    },
    href: repoPath("Exel_Proyectos"),
  },
  {
    title: "Machine learning y previsión de demanda",
    tech: ["Python", "Pandas", "Scikit-learn", "TensorFlow"],
    text: "Siete laboratorios: segmentación con K-Means, clasificación con KNN y árboles de decisión, reducción de dimensionalidad con PCA, validación cruzada con K-Folds, serialización con Pickle y una red neuronal para relaciones no lineales en datos industriales.",
    href: repoPath("Python_Data_Science/Laboratorios_ML"),
  },
  {
    title: "Diseño de base de datos y consultas de negocio",
    tech: ["SQL", "PostgreSQL", "SQL Server", "ETL"],
    text: "Esquemas relacionales normalizados en 3FN para casos de retail e inventario, y consultas multitabla (joins, subconsultas, GROUP BY / HAVING) para KPIs de almacén: ranking de productividad, rotación de productos y detección de inactividad.",
    href: repoPath("SQL_Proyectos"),
  },
  {
    title: "Optimización de operaciones e ingeniería industrial",
    tech: ["Teoría de colas", "SPC", "Simulación", "IoT"],
    text: "Trece casos documentados: optimización de colas en Tottus con modelos M/M/s, control estadístico I-MR para conservación de un clavecín con telemetría ESP32, diseño de red logística mono y multirregión, programación lineal y simulación Montecarlo.",
    href: repoPath("Ingenieria_Proyectos"),
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-surface card-interactive flex h-full flex-col overflow-hidden">
      {project.image && (
        <div className="border-b border-border bg-secondary/40">
          <img
            src={project.image.src}
            alt={project.image.alt}
            loading="lazy"
            decoding="async"
            width={1400}
            height={810}
            className="aspect-[16/9] w-full object-cover object-top"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 md:p-6">
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
          <div className="mt-4 rounded-md border border-primary/40 bg-primary/10 px-4 py-3">
            <p className="font-mono text-xl font-semibold text-primary">{project.metric.value}</p>
            <p className="mt-1 text-xs leading-relaxed text-foreground/80">
              {project.metric.label}
            </p>
          </div>
        )}

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.text}</p>

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 self-start rounded-md text-sm text-foreground/80 transition-colors hover:text-primary"
        >
          <Github className="size-4" aria-hidden />
          Ver código y documentación
          <ArrowUpRight className="size-4" aria-hidden />
          <span className="sr-only">de {project.title} en GitHub</span>
        </a>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="proyectos" className="py-16 md:py-20">
      <div className="section-shell">
        <SectionHeading
          title="Proyectos"
          subtitle="Trabajos de cursos universitarios y de especialización. Cada tarjeta enlaza a la carpeta del repositorio con el archivo fuente, los datos y la documentación."
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
