export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold">Eric Bekim Salinas Cajaleón</p>
          <p className="mt-1 text-xs text-muted-foreground">Data Analyst · Lima, Perú</p>
        </div>
        <nav aria-label="Enlaces de contacto" className="flex flex-wrap gap-4 text-sm">
          <a href="#" className="text-muted-foreground hover:text-primary">
            LinkedIn
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary">
            GitHub
          </a>
          <a
            href="mailto:eric.salinas@alum.udep.edu.pe"
            className="text-muted-foreground hover:text-primary"
          >
            Correo
          </a>
        </nav>
        <p className="font-mono text-xs text-muted-foreground">© 2026</p>
      </div>
    </footer>
  );
}
