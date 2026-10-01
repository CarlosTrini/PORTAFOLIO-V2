import React, { useState } from "react";
import { Modal, Popover } from "antd";
import { ProjectsInfoT } from "../../interfacesTypes/types";
import { isNil } from "lodash";
import {
  ExternalLink,
  Info,
  X,
  FolderGit2,
  Server,
  Monitor,
  Calendar,
  Layers,
  Sparkles
} from "lucide-react";
import { GithubIcon } from "../Icons/SocialIcons";

type PropsT = {
  projectInfo: ProjectsInfoT;
};

const CardProject: React.FC<PropsT> = ({ projectInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowModal = (isOpen: boolean) => {
    setIsModalOpen(isOpen);
  };

  return (
    <>
      <div className="group relative bg-dark-card border border-dark-border hover:border-primary/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 flex flex-col h-full mx-2 my-2">
        {/* Project Thumbnail Image with Overlay */}
        <div className="relative h-48 w-full overflow-hidden bg-dark-surface">
          <img
            src={projectInfo.img}
            alt={projectInfo.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-dark-card via-transparent to-transparent opacity-80" />

          {/* Badges on image */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-dark-surface/90 border border-dark-border text-xs font-semibold text-primary backdrop-blur-md">
            <Calendar className="w-3 h-3 text-amber-300" />
            <span className="text-amber-300">{projectInfo.year}</span>
          </div>

          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-dark-surface/90 border border-dark-border text-xs font-medium text-dark-text-muted capitalize backdrop-blur-md">
            {projectInfo.hosting}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <h4 className="text-lg font-bold text-dark-text-main group-hover:text-primary transition-colors flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-accent shrink-0" />
              <span>{projectInfo.name}</span>
            </h4>

            <p className="mt-2 text-xs md:text-sm text-dark-text-muted line-clamp-2 leading-relaxed">
              {projectInfo.description}
            </p>
          </div>

          {/* Tech Stack Icons */}
          <div className="pt-2 border-t border-dark-border">
            <div className="flex items-center gap-2 flex-wrap">
              {projectInfo.techs.map((t) => (
                <Popover key={t} content={<span className="text-xs capitalize">{t}</span>} title="">
                  <div className="w-7 h-7 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center p-1 hover:border-primary/40 hover:scale-110 transition-all cursor-pointer">
                    <img
                      src={`/img/techsIcons/${t}.png`}
                      alt={t}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </Popover>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center gap-2">
            <button
              onClick={() => handleShowModal(true)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-dark-surface hover:bg-dark-card border border-dark-border hover:border-primary/40 text-xs md:text-sm font-medium text-dark-text-main hover:text-primary transition-colors cursor-pointer"
            >
              <Info className="w-3.5 h-3.5" />
              <span>Detalles</span>
            </button>

            <Popover
              content={
                <span className="text-xs">Resolución recomendada: {projectInfo.size}</span>
              }
              title=""
            >
              <a
                href={projectInfo.url}
                target="_blank"
                rel="noreferrer noopener"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs md:text-sm font-medium transition-colors shadow-sm cursor-pointer"
              >
                <span>Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </Popover>
          </div>
        </div>
      </div>

      {/* Modal with Details */}
      <Modal
        width={720}
        centered
        open={isModalOpen}
        destroyOnClose
        footer={null}
        closable={false}
        styles={{
          content: {
            padding: 0,
            overflow: "hidden",
            backgroundColor: "#111827",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }
        }}
      >
        <div className="bg-dark-surface text-dark-text-main">
          {/* Modal Header */}
          <div className="p-6 border-b border-dark-border flex items-center justify-between bg-dark-card/50">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-dark-text-main">
                  {projectInfo.name}
                </h3>
                <span className="text-xs text-accent font-mono">Año: {projectInfo.year}</span>
              </div>
            </div>

            <button
              onClick={() => handleShowModal(false)}
              className="p-2 rounded-xl bg-dark-surface hover:bg-dark-card border border-dark-border text-dark-text-muted hover:text-white transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 space-y-6">
            {/* Meta info boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-dark-card border border-dark-border flex items-center gap-3">
                <Server className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="text-xs text-dark-text-muted block">Hosting & Despliegue</span>
                  <strong className="text-sm text-dark-text-main capitalize">{projectInfo.hosting}</strong>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-dark-card border border-dark-border flex items-center gap-3">
                <Monitor className="w-5 h-5 text-accent shrink-0" />
                <div>
                  <span className="text-xs text-dark-text-muted block">Resolución óptima</span>
                  <strong className="text-sm text-dark-text-main">{projectInfo.size}</strong>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h5 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Descripción del Proyecto
              </h5>
              <p className="text-sm md:text-base text-dark-text-muted leading-relaxed p-4 rounded-xl bg-dark-card/50 border border-dark-border">
                {projectInfo.description}
              </p>
            </div>

            {/* Tags / Stack */}
            <div>
              <h5 className="text-xs font-semibold text-accent uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Tecnologías y Librerías
              </h5>
              <div className="flex flex-wrap gap-2">
                {isNil(projectInfo.tags) === false &&
                  projectInfo.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-primary/10 border border-primary/20 text-primary-light"
                    >
                      {t.replace("/sites/", "").replace(".png", "")}
                    </span>
                  ))}
              </div>
            </div>

            {/* Tech Icons row */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs text-dark-text-dim">Stack icons:</span>
              <div className="flex items-center gap-2 flex-wrap">
                {projectInfo.techs.map((t) => (
                  <div
                    key={t}
                    className="w-7 h-7 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center p-1"
                    title={t}
                  >
                    <img
                      src={`/img/techsIcons/${t}.png`}
                      alt={t}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer / Actions */}
          <div className="p-6 border-t border-dark-border bg-dark-card/50 flex flex-wrap items-center justify-end gap-3">
            <a
              href={projectInfo.github.front}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-surface hover:bg-dark-card border border-dark-border hover:border-primary/40 text-xs md:text-sm font-medium text-dark-text-main hover:text-primary transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Git FrontEnd</span>
            </a>

            {projectInfo.github?.back && (
              <a
                href={projectInfo.github.back}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-surface hover:bg-dark-card border border-dark-border hover:border-primary/40 text-xs md:text-sm font-medium text-dark-text-main hover:text-primary transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Git BackEnd</span>
              </a>
            )}

            <a
              href={projectInfo.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs md:text-sm font-medium transition-colors shadow-lg shadow-primary/20"
            >
              <span>Visitar Sitio</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CardProject;

