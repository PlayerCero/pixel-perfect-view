import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    year: "2025",
    company: "Cámara de Comercio Exterior",
    title: "Dashboards operativos de indicadores de gestión",
    tech: ["Power BI", "DAX", "Power Query"],
    text: "Tableros para seguimiento de indicadores, integrando y depurando datos de varias fuentes, con actualización programada de los reportes recurrentes.",
  },
  {
    year: "2024",
    company: "Tottus",
    title: "Optimización de sistemas de colas",
    tech: ["Teoría de colas", "SPC"],
    text: "Análisis de tiempos de atención con teoría de colas y control estadístico de procesos para ubicar cuellos de botella y proponer mejoras con sustento en datos.",
  },
  {
    year: "2023",
    company: "Restaurante La Tapadita",
    title: "Rediseño de procesos y calidad",
    tech: ["Lean", "Pareto", "Ishikawa", "5 porqués"],
    text: "Levanté y rediseñé procesos con herramientas Lean para reducir errores y mermas operativas.",
  },
  {
    year: "2023",
    company: "Playa del Sol",
    title: "Mejora continua de operaciones",
    tech: ["PDCA", "5S"],
    text: "Definí indicadores y apliqué ciclos de mejora para elevar la eficiencia del área.",
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="py-16 md:py-20">
      <div className="section-shell">
        <SectionHeading
          title="Experiencia aplicada en empresas reales"
          subtitle="Casos de curso desarrollados sobre operaciones de empresas reales, con levantamiento de información en campo."
        />
        <ol className="mt-8 border-l border-border pl-5 md:pl-8">
          {items.map((it, i) => (
            <Reveal as="li" key={it.company} delay={i * 60} className="relative pb-8 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[1.6rem] top-1.5 size-2.5 rounded-full bg-primary md:-left-[2.35rem]"
              />
              <p className="font-mono text-xs text-primary">{it.year}</p>
              <h3 className="mt-1 text-base font-semibold">
                {it.company} — {it.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {it.tech.map((t) => (
                  <li key={t} className="tag-mono">
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {it.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
