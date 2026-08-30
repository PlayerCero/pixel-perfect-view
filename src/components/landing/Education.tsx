import { GraduationCap, BadgeCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const academic = [
  {
    title: "Universidad de Piura (UDEP)",
    text: "Ingeniería Industrial y de Sistemas, 10.º ciclo. Becario Beca 18 (PRONABEC), beca integral por alto rendimiento académico.",
    period: "2022 – presente · egreso previsto diciembre 2026",
  },
  {
    title: "CTIC – UNI",
    text: "Especialización en Ciencia de Datos y Automatización: Machine Learning con Python y SQL Server.",
    period: "2024 – presente",
  },
];

const certs = [
  {
    title: "Datux",
    text: "Power Apps y Power Automate.",
    period: "Agosto 2026",
  },
  {
    title: "DataCamp",
    text: "Associate Data Analyst: SQL, PostgreSQL avanzado, Python para finanzas y estadística.",
    period: "Agosto 2026",
  },
  {
    title: "Cámara de Comercio Exterior",
    text: "Especialista en Excel Avanzado (127 h).",
    period: "Febrero 2026",
  },
  {
    title: "Cámara de Comercio Exterior",
    text: "Power BI + Business Intelligence (22 h).",
    period: "Febrero 2026",
  },
];

function Column({
  icon: Icon,
  heading,
  items,
}: {
  icon: typeof GraduationCap;
  heading: string;
  items: { title: string; text: string; period: string }[];
}) {
  return (
    <div>
      <h3 className="flex items-center gap-2 text-base font-semibold">
        <Icon className="size-5 text-primary" aria-hidden />
        {heading}
      </h3>
      <ul className="mt-4 space-y-3">
        {items.map((it, i) => (
          <li key={`${it.title}-${i}`} className="card-surface p-4">
            <p className="text-sm font-semibold">{it.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
            <p className="mt-2 font-mono text-xs text-muted-foreground">{it.period}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Education() {
  return (
    <section id="formacion" className="py-16 md:py-20">
      <div className="section-shell">
        <SectionHeading title="Formación" />
        <Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <Column icon={GraduationCap} heading="Formación académica" items={academic} />
            <Column icon={BadgeCheck} heading="Certificaciones" items={certs} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
