import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Stack } from "@/components/landing/Stack";
import { Projects } from "@/components/landing/Projects";
import { Experience } from "@/components/landing/Experience";
import { Certifications } from "@/components/landing/Certifications";
import { Education } from "@/components/landing/Education";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { BackToTop } from "@/components/landing/BackToTop";
import { absoluteUrl, profile } from "@/lib/profile";

const title = "Eric Salinas — Data Analyst";
const description =
  "Perfil profesional de Eric Salinas, Data Analyst en Lima: SQL, Python y Power BI para modelar datos, automatizar procesos y construir tableros de decisión.";
const ogImage = absoluteUrl("/og-image.jpg");

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.shortName,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lima",
    addressCountry: "PE",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidad de Piura",
  },
  knowsAbout: [
    "SQL",
    "Python",
    "Power BI",
    "Business Intelligence",
    "Automatización de procesos",
    "Investigación de operaciones",
  ],
  sameAs: [profile.linkedin, profile.github],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Eric Salinas — Data Analyst · SQL, Python, Power BI" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(personSchema),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#perfil"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main>
        <Hero />
        <Stack />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
