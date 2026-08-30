import { Briefcase, FlaskConical } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { repoPath } from "@/lib/profile";

type Entry = {
  period: string;
  org: string;
  title: string;
  mode?: string;
  tech: string[];
  text: string;
  href?: string;
};

/** Experiencia declarada en LinkedIn. Mantener ambas fuentes sincronizadas. */
const work: Entry[] = [
  {
    period: "ene. 2025 – ene. 2026",
    org: "Gestión de portafolio personal",
    title: "Analista de inversiones y mercados globales",
    mode: "Autónomo · Remoto",
    tech: ["Análisis cuantitativo", "Gestión de riesgo", "Python", "Excel"],
    text: "Gestión y optimización de un portafolio diversificado en mercados globales, combinando análisis cuantitativo y cualitativo para sustentar decisiones. De aquí sale mi hábito de trabajar con series de tiempo, medir resultados contra un escenario base y documentar cada criterio de decisión.",
  },
  {
    period: "mar. 2024 – may. 2024",
    org: "Universidad de Piura",
    title: "Analista de datos y procesos (proyecto académico)",
    mode: "Jornada parcial · Presencial",
    tech: ["Teoría de colas (M/M/s)", "SPC", "Excel", "Levantamiento en campo"],
    text: "Lideré el análisis del sistema de colas del buffet al peso de Tottus (sedes Canaval y Moreyra): toma de tiempos en campo, modelado M/M/s y control estadístico de procesos para ubicar los cuellos de botella y sustentar las mejoras propuestas.",
    href: repoPath("Ingenieria_Proyectos/OptiQueue_Tottus"),
  },
];

/** Casos de curso sobre operaciones de empresas reales. NO son puestos de trabajo. */
const academic: Entry[] = [
  {
    period: "2025",
    org: "Conservación de clavecín — UDEP",
    title: "Optimización de microclima con IoT",
    tech: ["Control estadístico I-MR", "ESP32", "Telemetría"],
    text: "Diagnóstico estadístico con gráficos I-MR sobre datos de telemetría en tiempo real: la protección del instrumento fallaba 14,5 horas al día, algo invisible en las revisiones puntuales.",
    href: repoPath("Ingenieria_Proyectos/Microclimate_Control_IoT_UDEP"),
  },
  {
    period: "2025",
    org: "Gas Andina S.A.",
    title: "Diseño de sistema logístico",
    tech: ["UML", "BPM", "SQL", "Arquitectura de datos"],
    text: "Modelo conceptual, diagramas de estados, paquetes y despliegue, más el diseño de la base de datos para una aplicación de gestión logística.",
    href: repoPath("Ingenieria_Proyectos/ADS_GasAndina_Logistica"),
  },
  {
    period: "2025",
    org: "Cadena de suministro",
    title: "Diseño de red mono y multirregión",
    tech: ["Optimización", "Simulación", "Solver"],
    text: "Modelos de localización y asignación para una y varias regiones, con simulación de escenarios de demanda y comparación de costos totales de red.",
    href: repoPath("Ingenieria_Proyectos/Gestion_Cadena_Suministro"),
  },
  {
    period: "2023",
    org: "Restaurante La Tapadita",
    title: "Rediseño de procesos y calidad de servicio",
    tech: ["Lean", "Pareto", "Ishikawa", "5 porqués"],
    text: "Levantamiento y rediseño de procesos con herramientas Lean para reducir errores y mermas operativas.",
    href: repoPath("Ingenieria_Proyectos/Service_Quality_Analytics_LaTapadita"),
  },
  {
    period: "2023",
    org: "Playa del Sol",
    title: "Mejora continua de operaciones",
    tech: ["PDCA", "5S", "Indicadores"],
    text: "Definición de indicadores y ciclos de mejora para elevar la eficiencia del área.",
    href: repoPath("Ingenieria_Proyectos/Process_Optimization_PlayaDelSol"),
  },
];

function Timeline({ items }: { items: Entry[] }) {
  return (
    <ol className="mt-6 border-l border-border pl-5 md:pl-8">
      {items.map((it, i) => (
        <Reveal
          as="li"
          key={`${it.org}-${it.title}`}
          delay={i * 60}
          className="relative pb-8 last:pb-0"
        >
          <span
            aria-hidden
            className="absolute -left-[1.6rem] top-1.5 size-2.5 rounded-full bg-primary md:-left-[2.35rem]"
          />
          <p className="font-mono text-xs text-primary">{it.period}</p>
          <h4 className="mt-1 text-base font-semibold">{it.title}</h4>
          <p className="mt-0.5 text-sm text-foreground/80">
            {it.org}
            {it.mode && <span className="text-muted-foreground"> · {it.mode}</span>}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {it.tech.map((t) => (
              <li key={t} className="tag-mono">
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{it.text}</p>
          {it.href && (
            <a
              href={it.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block rounded-md text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              Ver documentación ↗<span className="sr-only"> de {it.title} en GitHub</span>
            </a>
          )}
        </Reveal>
      ))}
    </ol>
  );
}

export function Experience() {
  return (
    <section id="experiencia" className="py-16 md:py-20">
      <div className="section-shell">
        <SectionHeading title="Experiencia" />

        <div className="mt-8">
          <h3 className="flex items-center gap-2 text-base font-semibold">
            <Briefcase className="size-5 text-primary" aria-hidden />
            Trayectoria profesional
          </h3>
          <Timeline items={work} />
        </div>

        <div className="mt-12">
          <h3 className="flex items-center gap-2 text-base font-semibold">
            <FlaskConical className="size-5 text-primary" aria-hidden />
            Casos aplicados en cursos
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Proyectos de curso desarrollados sobre operaciones de empresas reales, con levantamiento
            de información en campo. No son puestos de trabajo: los incluyo porque el análisis y los
            entregables sí son míos y están documentados.
          </p>
          <Timeline items={academic} />
        </div>
      </div>
    </section>
  );
}
