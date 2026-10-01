import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CardProject from "../../Card/CardProject";
import { projectsInfo } from "../../../data/projects";
import { isEmpty, isNil } from "lodash";
import { Sparkles, Layers } from "lucide-react";

const Projects = () => {
  return (
    <div className="w-full py-6">
      {/* Section Header inside Tab */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-dark-text-main flex items-center gap-2">
            <Layers className="w-6 h-6 text-primary" />
            <span>Algunos de mis Proyectos</span>
          </h3>


        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-card border border-dark-border text-xs text-accent">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{projectsInfo.length} Proyectos disponibles</span>
        </div>
      </div>

      {/* Swiper Carousel */}
      <div className="relative projects-swiper-wrapper">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="pb-14!"
        >
          {!isNil(projectsInfo) &&
            !isEmpty(projectsInfo) &&
            projectsInfo.map((p) => (
              <SwiperSlide key={p.id} className="h-auto flex">
                <CardProject projectInfo={p} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;

