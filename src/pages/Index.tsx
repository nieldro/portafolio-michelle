import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { Projects } from "@/components/portfolio/Projects";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Laura Michelle Herrera · Diseñadora Visual & Gráfica";
    const meta = document.querySelector('meta[name="description"]');
    const desc =
      "Portafolio de Laura Michelle Herrera Bedoya — Diseñadora visual y gráfica en Bogotá. Branding, editorial, contenido digital, motion y packaging.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Services />
      <Contact />
    </main>
  );
};

export default Index;
