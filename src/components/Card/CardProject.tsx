import React from "react";
import { Card, Popover } from "antd";
import { ProjectsInfoT } from "../../interfacesTypes/types";

const {Meta} = Card;

type PropsT = {
  projectInfo: ProjectsInfoT;
};

const CardProject: React.FC<PropsT> = ({ projectInfo }) => {
  return (
    <>
      <Card
        hoverable
        style={{ width: 350, height: 200}}
        cover={
          <img
            width={250}
            height={200}
            alt="example"
            src={projectInfo.img}
          />
        }
      >
        <Meta title={
          <>
            <div>
              <p className="mb-2 fw-bold"><i className="fa-solid fa-circle-check me-1 t-text-blue"></i> {projectInfo.name} <span className="t-fs-12">({projectInfo.year})</span> </p>
              <hr/>
              <div className="d-flex justify-content-evenly flex-wrap">

                {
                  projectInfo.techs.map(t =>
                    <div>
                      <Popover content={t} title="">
                        <img src={`/img/techsIcons/${t}.png`} alt="" width={25} height={25}/>
                      </Popover>
                    </div>
                  )
                }
              </div>
              <hr />
              <div className="d-flex justify-content-evenly">
                <button className="btn btn-sm btn-outline-primary"> <i className="fa-solid fa-globe me-1"></i> Ir al sitio</button>
                <button className="btn btn-sm btn-outline-dark"> <i className="fa-solid fa-plus me-1"></i> Ver más</button>
              </div>
            </div>
          </>
        } description="www.instagram.com" />
      </Card>
    </>
  );
};

export default CardProject;
