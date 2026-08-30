import { GraduationCap } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const academic = [
  {
    title: "Universidad de Piura (UDEP)",
    text: "Ingeniería Industrial y de Sistemas, 10.º ciclo. Becario Beca 18 (PRONABEC), beca integral por alto rendimiento académico.",
    period: "Agosto 2021 – diciembre 2026 (egreso previsto)",
  },
  {
    title: "CTIC – UNI",
    text: "Programa de Innovación Tecnológica (PIT). Cursos completados: Aplicaciones de Inteligencia Artificial, Automatización de Negocios con Gemini, Machine Learning con Python, y Finanzas para la toma de decisiones tecnológicas. En programa: Inferencia estadística y Series de tiempo con Python, Big Data y Cloud Computing.",
    period: "2024 – presente",
  },
];

export function Education() {
  return (
    <section id="formacion" className="py-16 md:py-20">
      <div className="section-shell">
        <SectionHeading title="Formación académica" />
        <Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {academic.map((it) => (
              <article key={it.title} className="card-surface p-5">
                <GraduationCap className="size-5 text-primary" aria-hidden />
                <h3 className="mt-3 text-base font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
                <p className="mt-3 font-mono text-xs text-muted-foreground">{it.period}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 font-mono text-xs text-muted-foreground">
            Idiomas: español nativo · inglés intermedio (lectura técnica fluida).
          </p>
        </Reveal>
      </div>
    </section>
  );
}
