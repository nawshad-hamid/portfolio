import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { HowIWork } from "@/components/HowIWork";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 min-h-screen w-full max-w-full overflow-x-hidden relative selection:bg-emerald-500 selection:text-slate-950 transition-colors duration-300">
      <Navbar />
      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <Highlights />
        <About />
        <Skills />
        <Projects />
        <HowIWork />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
