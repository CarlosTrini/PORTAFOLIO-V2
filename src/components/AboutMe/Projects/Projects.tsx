import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./projects.scss";
import CardProject from "../../Card/CardProject";
import { projectsInfo } from "../../../data/projects";
import { isEmpty, isNil } from "lodash";

const Projects = () => {

  return (
    <>
      <div>
          <Swiper
            style={{ minHeight: 400 }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={3}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
        { isNil(projectsInfo) === false && isEmpty(projectsInfo) === false && projectsInfo.map(p => (

          <SwiperSlide>
            <CardProject projectInfo={p} key={p.id} />
          </SwiperSlide>
        ))
        }
         
        </Swiper>
      </div>
    </>
  );
};

export default Projects;
