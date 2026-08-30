import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Stack } from "@/components/landing/Stack";
import { Projects } from "@/components/landing/Projects";
import { Experience } from "@/components/landing/Experience";
import { Education } from "@/components/landing/Education";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { BackToTop } from "@/components/landing/BackToTop";

const description =
  "Perfil profesional de Eric Salinas, Data Analyst en Lima: SQL, Python y Power BI para modelar datos, automatizar procesos y construir tableros de decisión.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eric Salinas — Data Analyst" },
      { name: "description", content: description },
      { property: "og:title", content: "Eric Salinas — Data Analyst" },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stack />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
