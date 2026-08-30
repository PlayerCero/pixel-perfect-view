import { mailto, profile } from "@/lib/profile";

const links = [
  { label: "LinkedIn", href: profile.linkedin, external: true },
  { label: "GitHub", href: profile.github, external: true },
  { label: "Portafolio de datos", href: profile.portfolioRepo, external: true },
  { label: "Correo", href: mailto, external: false },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold">{profile.name}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            {profile.role} · {profile.location}
          </p>
        </div>
        <nav aria-label="Enlaces de contacto" className="flex flex-wrap gap-4 text-sm">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="rounded-md text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <p className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
