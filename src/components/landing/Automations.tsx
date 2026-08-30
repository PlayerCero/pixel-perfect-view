import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { repoPath } from "@/lib/profile";

const automationsRepo = repoPath("Automatizaciones_IA");

type Flow = {
  title: string;
  platform: string;
  tech: string[];
  text: string;
  evidence: string;
  image?: { src: string; alt: string };
  featured?: boolean;
};

const highlights = [
  { value: "9", label: "flujos construidos y ejecutados" },
  { value: "2", label: "plataformas: n8n y Make" },
  { value: "36 s", label: "el flujo más largo, de punta a punta" },
];

const flows: Flow[] = [
  {
    title: "Agente conversacional RAG sobre documentos académicos",
    platform: "n8n",
    tech: ["n8n", "Gemini", "Vector store", "Telegram"],
    text: "Agente que responde consultas sobre sílabos y documentos universitarios usando una base vectorial como herramienta. Memoria de conversación aislada por usuario (ventana de 7 turnos), modelo de respaldo si el principal falla, y un prompt de sistema que le exige declarar cuándo la información no está en los documentos en lugar de inventarla.",
    evidence: "Entrega por Telegram con formato HTML restringido al que admite el canal.",
    image: {
      src: "/automatizaciones/n8n-agente-rag.webp",
      alt: "Workflow de n8n con un agente de IA conectado a modelo Gemini, memoria, vector store y herramienta de correo",
    },
    featured: true,
  },
  {
    title: "Pipeline de ingesta documental para RAG",
    platform: "n8n",
    tech: ["n8n", "Gemini Embeddings", "Vector store"],
    text: "Carga por lotes de PDFs desde disco, segmentación con data loader, generación de embeddings e inserción en la base vectorial. Es un ETL: extraer, transformar, cargar. Está separado del agente en un flujo propio para poder reindexar el corpus sin tocar —ni romper— la lógica de consulta.",
    evidence: "Alimenta al agente anterior. Trigger manual: la reindexación es deliberada.",
    image: {
      src: "/automatizaciones/n8n-pipeline-rag.webp",
      alt: "Workflow de n8n que lee archivos de disco, genera embeddings con Gemini y los inserta en un vector store",
    },
  },
  {
    title: "Generación documental de extremo a extremo",
    platform: "Make",
    tech: ["Make", "Forms", "Gemini", "Docs", "Drive", "Gmail"],
    text: "Una respuesta de formulario dispara la generación del contenido con IA, la creación del documento desde una plantilla de Google Docs, su publicación en Drive con enlace compartido y el envío por correo. El modelo produce el texto; la plantilla pone el formato, así el resultado es consistente aunque el modelo varíe.",
    evidence: "6 operaciones encadenadas · ~36 s por ejecución · sin intervención manual.",
    image: {
      src: "/automatizaciones/make-forms-docs.webp",
      alt: "Escenario de Make que conecta Google Forms, Gemini, Google Docs, Drive y Gmail en cadena",
    },
  },
  {
    title: "Alertas de KPI por umbral, con y sin IA",
    platform: "Make",
    tech: ["Make", "Google Sheets", "Gemini", "Gmail"],
    text: "Evalúa cada venta nueva contra un umbral y bifurca el aviso. Existe en dos versiones sobre el mismo disparador: una con plantilla fija y otra donde Gemini redacta el correo. Mantener la versión simple como línea base es lo que permite medir si el modelo aporta algo, en vez de asumirlo.",
    evidence: "El LLM se invoca solo en la rama que lo necesita: la rama normal no gasta tokens.",
  },
  {
    title: "Segmentación y enrutamiento automático de registros",
    platform: "Make",
    tech: ["Make", "Google Sheets", "Router"],
    text: "Detecta filas nuevas en una hoja maestra y las distribuye a tres hojas destino mediante un router con filtros nombrados. Es una regla de negocio convertida en pipeline —lo mismo que un CASE WHEN en SQL—, con la diferencia de que el criterio queda escrito y auditable en vez de vivir en la cabeza de quien clasifica.",
    evidence: "3 operaciones por ejecución · ~1 s.",
  },
  {
    title: "De formulario a tablero de proyecto",
    platform: "Make",
    tech: ["Make", "Google Forms", "Trello", "Iterator"],
    text: "Crea el tablero, genera las listas por estado con un router y carga las tarjetas con un iterator sobre la respuesta del formulario. El iterator es la pieza clave: convierte un campo con varios ítems en N tarjetas independientes, que es lo que hace el tablero utilizable desde el primer segundo.",
    evidence: "8 operaciones · ~2 s.",
  },
  {
    title: "Agente de correo por lenguaje natural",
    platform: "n8n",
    tech: ["n8n", "Gemini", "Gmail"],
    text: "El modelo extrae destinatario, asunto y cuerpo desde una instrucción en lenguaje natural y ejecuta el envío. No «escribe un correo»: rellena un contrato de parámetros declarado en la herramienta, que es lo que hace el resultado predecible.",
    evidence: "Memoria de contexto entre mensajes de la misma conversación.",
  },
  {
    title: "Publicación automatizada de contenido",
    platform: "Make",
    tech: ["Make", "Canva", "Google Drive", "Facebook Pages"],
    text: "Exporta el diseño, lo almacena en Drive y publica la pieza con imagen. Drive actúa como almacenamiento intermedio: si la publicación falla, el archivo ya está guardado y no hay que re-exportar. Una función de incremento lleva el control de la secuencia.",
    evidence: "4 operaciones · ~11 s · 3.3 MB transferidos.",
  },
];

function FlowCard({ flow }: { flow: Flow }) {
  return (
    <article className="card-surface card-interactive flex h-full flex-col overflow-hidden">
      {flow.image && (
        <div className="border-b border-border bg-secondary/40">
          <img
            src={flow.image.src}
            alt={flow.image.alt}
            loading="lazy"
            decoding="async"
            width={1400}
            height={660}
            className="aspect-[16/9] w-full object-cover object-center"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold md:text-lg">{flow.title}</h3>
          <span className="shrink-0 font-mono text-xs text-muted-foreground">{flow.platform}</span>
        </div>

        <ul className="mt-3 flex flex-wrap gap-2">
          {flow.tech.map((t) => (
            <li key={t} className="tag-mono">
              {t}
            </li>
          ))}
        </ul>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{flow.text}</p>

        <p className="mt-4 border-l-2 border-primary/50 pl-3 font-mono text-xs leading-relaxed text-foreground/70">
          {flow.evidence}
        </p>
      </div>
    </article>
  );
}

export function Automations() {
  return (
    <section id="automatizacion" className="py-16 md:py-20">
      <div className="section-shell">
        <SectionHeading
          title="Automatización e IA aplicada"
          subtitle="Nueve flujos construidos y ejecutados de punta a punta en n8n y Make, durante los cursos Aplicaciones de Inteligencia Artificial y Automatización de Negocios con Gemini del CTIC – UNI."
        />

        <Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((h) => (
              <li key={h.label} className="card-surface p-5">
                <p className="font-mono text-2xl font-semibold text-primary">{h.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{h.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {flows.map((f, i) => (
            <Reveal
              as="li"
              key={f.title}
              delay={i * 50}
              className={f.featured ? "md:col-span-2" : ""}
            >
              <FlowCard flow={f} />
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <a
            href={automationsRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-1.5 rounded-md text-sm text-foreground/80 transition-colors hover:text-primary"
          >
            <Github className="size-4" aria-hidden />
            Ver los nueve flujos documentados en GitHub
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
