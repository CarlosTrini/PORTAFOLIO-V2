import { useState } from "react";
import Me from "./Me/Me";
import Projects from "./Projects/Projects";
import Skills from "../Skills/Skills";
import {
  User,
  FolderGit2,
  Terminal,
  Cpu,
  Briefcase,
  Code2,
  Layers,
  Trophy,
} from "lucide-react";
import { projectsInfo } from "../../data/projects";

// Stats shown below tabs — recruiters scan these in < 5s
const stats = [
  { icon: <Briefcase className="w-4 h-4" />, value: "4", label: "Años de exp." },
  { icon: <Code2 className="w-4 h-4" />, value: projectsInfo.length, label: "Proyectos" },
  { icon: <Layers className="w-4 h-4" />, value: "Siempre aprendiendo", label: "Tecnologías" },
  { icon: <Trophy className="w-4 h-4" />, value: "React, Astro, NextJs", label: "Stack principal" },
];


const AboutMe = () => {
  const [activeTab, setActiveTab] = useState<"me" | "skills" | "projects">("me");

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-dark-bg text-dark-text-main py-12 md:py-20 px-4 md:px-8 border-t border-dark-border relative"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">


        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-1.5 py-5 rounded-2xl bg-dark-card border border-dark-border hover:border-primary/40 transition-colors shadow-lg"
            >
              <span className="text-primary">{s.icon}</span>
              <span className="text-2xl font-extrabold text-dark-text-main">{s.value}</span>
              <span className="text-xs text-dark-text-muted">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-dark-surface border border-dark-border shadow-xl flex-wrap gap-1">
            <button
              onClick={() => setActiveTab("me")}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${activeTab === "me"
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "text-dark-text-muted hover:text-dark-text-main hover:bg-dark-card"
                }`}
            >
              <User className="w-4 h-4" />
              <span>Sobre mí</span>
            </button>

            <button
              onClick={() => setActiveTab("skills")}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${activeTab === "skills"
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "text-dark-text-muted hover:text-dark-text-main hover:bg-dark-card"
                }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Habilidades</span>
            </button>

            <button
              onClick={() => setActiveTab("projects")}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${activeTab === "projects"
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "text-dark-text-muted hover:text-dark-text-main hover:bg-dark-card"
                }`}
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Proyectos</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "me" && <Me />}
          {activeTab === "skills" && <Skills />}
          {activeTab === "projects" && <Projects />}
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-dark-border max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-dark-text-dim gap-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-primary" />
          <span>Carlos Trinidad &bull; Frontend Developer Portfolio</span>
        </div>
        <p>Hecho con React 18, TypeScript, Tailwind CSS v4 &amp; Lucide Icons</p>
      </footer>
    </section>
  );
};

export default AboutMe;
