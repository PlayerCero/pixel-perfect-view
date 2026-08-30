import { Database, LineChart, BarChart3, Workflow } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const groups = [
  {
    icon: Database,
    title: "Bases de datos",
    text: "Diseño de esquemas relacionales normalizados (3FN), joins, subconsultas, funciones de agregación y consultas para KPIs de negocio.",
    tech: ["MySQL", "PostgreSQL", "SQL Server"],
  },
  {
    icon: LineChart,
    title: "Análisis y programación",
    text: "Limpieza y análisis de datos, modelos de clasificación y segmentación, reducción de dimensionalidad y validación cruzada.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
  },
  {
    icon: BarChart3,
    title: "BI y visualización",
    text: "Modelo en estrella, medidas DAX (no columnas calculadas), transformación en Power Query y alertas condicionales sobre desvíos.",
    tech: ["Power BI", "Excel avanzado", "Looker Studio"],
  },
  {
    icon: Workflow,
    title: "Automatización",
    text: "Aplicaciones de captura de datos y flujos que reemplazan registro manual y avisos por mensaje.",
    tech: ["Power Apps", "Power Automate", "SharePoint", "openpyxl"],
  },
];

export function Stack() {
  return (
    <section id="stack" className="py-16 md:py-20">
      <div className="section-shell">
        <SectionHeading
          title="Stack técnico"
          subtitle="Herramientas con las que trabajo el ciclo completo del dato."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal as="li" key={g.title} delay={i * 60}>
              <article className="card-surface card-interactive h-full p-5">
                <g.icon className="size-5 text-primary" aria-hidden />
                <h3 className="mt-3 text-base font-semibold">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.text}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.tech.map((t) => (
                    <li key={t} className="tag-mono">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>
        <p className="mt-6 font-mono text-xs text-muted-foreground">
          Idiomas: español nativo · inglés intermedio (lectura técnica fluida).
        </p>
      </div>
    </section>
  );
}
