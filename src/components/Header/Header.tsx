import { useState } from "react";
import { socialInfo } from "../../data/social";
import { isNil } from "lodash";
import PROFILE_IMG from "/img/profile2.jpg";
import { simpleAlertTimer } from "../../helpers/alerts";
import { Popover } from "antd";
import {
  Mail,
  FileText,
  Copy,
  Check,
  Code2,
  Sparkles,
  ArrowUpRight,
  Briefcase,
  FolderGit2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../Icons/SocialIcons";

const getSocialIcon = (name: string) => {
  const normalized = name.toLowerCase();
  if (normalized.includes("linkedin")) return <LinkedinIcon className="w-5 h-5 text-accent" />;
  if (normalized.includes("github")) return <GithubIcon className="w-5 h-5" />;
  if (normalized.includes("email") || normalized.includes("correo")) return <Mail className="w-5 h-5" />;
  if (normalized.includes("cv") || normalized.includes("c.v.")) return <FileText className="w-5 h-5" />;
  return <Briefcase className="w-5 h-5" />;
};

const Header = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard
      .writeText("carlostrinidad952@gmail.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
        simpleAlertTimer({
          title: "Correo copiado al portapapeles",
          icon: "info",
          position: "bottom-end",
          timer: 2000,
        });
      })
      .catch(() => {
        simpleAlertTimer({
          title: "El correo no fue copiado correctamente",
          icon: "error",
          position: "bottom-end",
          timer: 2000,
        });
      });
  };

  return (
    <header className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden py-16 px-4 md:px-8">
      {/* Background layer with subtle blur and tech grid/glow */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity filter blur-sm scale-105 pointer-events-none"
        style={{ backgroundImage: `url('/img/moon-blur.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/95 to-dark-bg pointer-events-none" />

      {/* Decorative ambient radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14">

        {/* Profile Avatar Card */}
        <div className="relative group shrink-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-500"></div>
          <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full p-1 bg-dark-surface/90 border border-dark-border overflow-hidden shadow-2xl">
            <img
              src={PROFILE_IMG}
              alt="Carlos Trinidad"
              className="w-full h-full object-cover rounded-full grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            />
          </div>
          {/* Status badge */}
          <div className="absolute bottom-2 right-4 bg-dark-surface/90 border border-dark-border px-3 py-1 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-dark-text-muted">Disponible</span>
          </div>
        </div>

        {/* Info Column */}
        <div className="flex-1 text-center md:text-left space-y-5">
          {/* Eyebrow tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portafolio Web</span>
          </div>

          {/* Title */}
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-dark-text-main flex flex-wrap items-center justify-center md:justify-start gap-3">
              <span>Carlos Trinidad</span>
              <span className="text-accent text-2xl md:text-4xl font-mono">{"// Dev"}</span>
            </h1>
            <p className="mt-2 text-lg md:text-xl font-medium text-primary flex items-center justify-center md:justify-start gap-2">
              <Code2 className="w-5 h-5 text-accent" />
              Frontend Developer
            </p>
            <p className="text-white"> &bull; React &bull; Astro &bull; Next &bull; HTML & CSS</p>
          </div>

          {/* Description */}
          <div className="text-dark-text-muted text-sm md:text-base leading-relaxed max-w-xl mx-auto md:mx-0 space-y-2">
            <p>
              Desarrollador FrontEnd con más de <strong className="text-dark-text-main">3.5 años de experiencia</strong> construyendo aplicaciones web con React.js, TypeScript y SCSS.
            </p>
            <p className="text-dark-text-main font-medium">
              He desarrollado desde sistemas de autenticación con JWT hasta plataformas con{" "}
              <span className="text-accent font-semibold">Firebase</span> y arquitecturas full-stack MERN.
            </p>
          </div>

          {/* Primary CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-primary/25 cursor-pointer"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Ver proyectos</span>
            </a>
            <a
              href="/img/CarlosTrinidad-CV.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-dark-surface hover:bg-dark-card border border-dark-border hover:border-primary/40 text-dark-text-main text-sm font-semibold transition-all duration-300 shadow-sm"
            >
              <FileText className="w-4 h-4 text-accent" />
              <span>Descargar CV</span>
            </a>
          </div>

          {/* Social links — secondary */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            {isNil(socialInfo) === false &&
              socialInfo.map((s) => {
                if (s.copy) {
                  return (
                    <Popover
                      key={s.id}
                      content={
                        <span className="text-xs font-mono text-dark-text-muted">
                          {s.link} (Click para copiar)
                        </span>
                      }
                      title=""
                    >
                      <button
                        onClick={copyEmail}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-surface hover:bg-dark-card border border-dark-border hover:border-primary/40 text-dark-text-main hover:text-primary transition-all duration-300 shadow-sm cursor-pointer"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : getSocialIcon(s.socialName)}
                        <span className="text-xs md:text-sm font-medium">
                          {copied ? "¡Copiado!" : s.socialName}
                        </span>
                        <Copy className="w-3.5 h-3.5 text-dark-text-dim" />
                      </button>
                    </Popover>
                  );
                }

                return (
                  <a
                    key={s.id}
                    href={s.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-surface hover:bg-dark-card border border-dark-border hover:border-primary/40 text-dark-text-main hover:text-primary transition-all duration-300 shadow-sm group"
                  >
                    {getSocialIcon(s.socialName)}
                    <span className="text-xs md:text-sm font-medium">{s.socialName}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-dark-text-dim group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                );
              })}
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;

