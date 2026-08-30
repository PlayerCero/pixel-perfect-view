import { useCallback, useEffect, useState } from "react";
import { BadgeCheck, ExternalLink, X } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/lib/profile";

type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  detail: string;
  /** Ruta en /public/certificados. Si falta, la tarjeta muestra un marcador. */
  image?: string;
  /** URL pública de verificación del emisor. Dejar vacío si no existe. */
  credentialUrl?: string;
};

const certifications: Certification[] = [
  {
    title: "Microsoft Power Apps & Power Automate",
    issuer: "Datux Perú · Microsoft Partner Network",
    date: "Agosto 2026",
    credentialId: "APP-MY6-D14",
    detail:
      "30 horas, niveles básico, intermedio y avanzado. Aplicaciones de captura de datos y flujos automatizados. Nota final: 20.",
    image: "/certificados/power-apps-automate.webp",
  },
  {
    title: "Associate Data Analyst in SQL",
    issuer: "DataCamp",
    date: "Agosto 2026",
    credentialId: "906548",
    detail:
      "Programa de carrera de 39 horas y 11 cursos, desde fundamentos de SQL hasta funciones de ventana en PostgreSQL.",
    image: "/certificados/associate-data-analyst-sql.webp",
  },
  {
    title: "Especialista en Microsoft Excel + Herramientas Avanzadas",
    issuer: "Cámara de Comercio Exterior",
    date: "Febrero 2026",
    credentialId: "COD33140",
    detail:
      "Especialización de 127 horas en automatización de procesos y análisis de grandes volúmenes de datos con Power Query.",
    image: "/certificados/excel-avanzado.webp",
  },
  {
    title: "Power BI + Business Intelligence",
    issuer: "Cámara de Comercio Exterior",
    date: "Febrero 2026",
    credentialId: "COD33290",
    detail:
      "Formación técnica en Business Intelligence: modelos de datos eficientes y reportes dinámicos para gestión.",
    image: "/certificados/power-bi.webp",
  },
  {
    title: "Análisis de Datos – Fundamentos de Estadística",
    issuer: "DataCamp",
    date: "Abril 2026",
    detail:
      "Estadística descriptiva e inferencial aplicada al análisis de datos: distribuciones, correlación y pruebas de hipótesis.",
    image: "/certificados/fundamentos-estadistica.webp",
  },
  {
    title: "Python para Finanzas – Modelado y Fundamentos",
    issuer: "DataCamp",
    date: "Febrero 2026",
    detail:
      "Modelado financiero con Python: series de tiempo, cálculo de retornos y evaluación cuantitativa de escenarios.",
    image: "/certificados/python-finanzas.webp",
  },
];

function CertCard({ cert, onOpen }: { cert: Certification; onOpen: (c: Certification) => void }) {
  const [imageOk, setImageOk] = useState(Boolean(cert.image));

  return (
    <article className="card-surface card-interactive flex h-full flex-col overflow-hidden">
      {imageOk && cert.image ? (
        <button
          type="button"
          onClick={() => onOpen(cert)}
          className="group block w-full border-b border-border bg-secondary/40"
          aria-label={`Ampliar el certificado ${cert.title}`}
        >
          <img
            src={cert.image}
            alt={`Certificado: ${cert.title}, emitido por ${cert.issuer}`}
            loading="lazy"
            decoding="async"
            onError={() => setImageOk(false)}
            className="aspect-[4/3] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </button>
      ) : (
        <div
          aria-hidden
          className="flex items-center gap-2 border-b border-border bg-secondary/40 px-5 py-4"
        >
          <BadgeCheck className="size-5 text-primary" />
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Certificado
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-sm font-semibold leading-snug">{cert.title}</h3>
        <p className="mt-1 text-sm text-foreground/80">{cert.issuer}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{cert.detail}</p>

        <dl className="mt-4 space-y-1 font-mono text-xs text-muted-foreground">
          <div className="flex gap-2">
            <dt className="sr-only">Fecha de expedición</dt>
            <dd>{cert.date}</dd>
          </div>
          {cert.credentialId && (
            <div className="flex flex-wrap gap-x-2">
              <dt>ID:</dt>
              <dd className="break-all text-foreground/80">{cert.credentialId}</dd>
            </div>
          )}
        </dl>

        <a
          href={cert.credentialUrl ?? `${profile.linkedin}details/certifications/`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 self-start rounded-md text-sm text-foreground/80 transition-colors hover:text-primary"
        >
          {cert.credentialUrl ? "Verificar credencial" : "Ver en LinkedIn"}
          <ExternalLink className="size-3.5" aria-hidden />
          <span className="sr-only">— {cert.title}</span>
        </a>
      </div>
    </article>
  );
}

function Lightbox({ cert, onClose }: { cert: Certification; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Certificado ${cert.title}`}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute right-4 top-4 rounded-md border border-border bg-card p-2 text-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <X className="size-5" aria-hidden />
      </button>
      <img
        src={cert.image}
        alt={`Certificado: ${cert.title}, emitido por ${cert.issuer}`}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] w-auto max-w-full rounded-lg border border-border object-contain shadow-2xl"
      />
    </div>
  );
}

export function Certifications() {
  const [active, setActive] = useState<Certification | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section id="certificados" className="py-16 md:py-20">
      <div className="section-shell">
        <SectionHeading
          title="Certificaciones"
          subtitle="Seis certificaciones obtenidas entre febrero y agosto de 2026, con su ID de credencial para verificación."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 50}>
              <CertCard cert={c} onOpen={setActive} />
            </Reveal>
          ))}
        </ul>
      </div>

      {active?.image && <Lightbox cert={active} onClose={close} />}
    </section>
  );
}
