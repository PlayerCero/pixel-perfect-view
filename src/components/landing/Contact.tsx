import { Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { mailto, profile } from "@/lib/profile";

const actions = [
  { icon: Mail, label: "Correo", href: mailto, external: false },
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin, external: true },
  { icon: Github, label: "GitHub", href: profile.github, external: true },
];

export function Contact() {
  return (
    <section id="contacto" className="py-16 md:py-20">
      <div className="section-shell">
        <Reveal>
          <div className="card-surface mx-auto max-w-3xl px-6 py-10 text-center md:px-10 md:py-12">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Conversemos</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Estoy buscando mi primera práctica preprofesional en datos, BI o automatización de
              procesos. Si tienes una vacante o quieres ver el detalle de algún proyecto, escríbeme.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {actions.map((a) => (
                <li key={a.label}>
                  <a
                    href={a.href}
                    {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex w-full items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                  >
                    <a.icon className="size-4" aria-hidden />
                    {a.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">
              {profile.location} · Disponible para modalidad presencial, híbrida o remota.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
