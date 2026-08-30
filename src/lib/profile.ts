/**
 * Fuente única de verdad para enlaces y datos de contacto.
 * Si cambia un perfil o un correo, se cambia AQUÍ y se propaga a toda la landing.
 */

export const profile = {
  name: "Eric Bekim Salinas Cajaleón",
  shortName: "Eric Salinas",
  role: "Data Analyst",
  location: "Pueblo Libre, Lima, Perú",
  email: "eric.salinas@alum.udep.edu.pe",
  linkedin: "https://www.linkedin.com/in/eric-bekim-salinas-cajaleon-30153232b/",
  github: "https://github.com/PlayerCero",
  portfolioRepo: "https://github.com/PlayerCero/Portfolio-Data-Analytics",
  siteUrl: "https://ericsalinas-data.lovable.app",
} as const;

export const mailto = `mailto:${profile.email}`;

/** Construye un enlace a una carpeta del repositorio de portafolio. */
export function repoPath(path: string) {
  const encoded = path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
  return `${profile.portfolioRepo}/tree/main/${encoded}`;
}

/** URL absoluta si hay dominio configurado; si no, ruta relativa. */
export function absoluteUrl(path: string) {
  return profile.siteUrl ? `${profile.siteUrl}${path}` : path;
}
