import React, { useState } from "react";
import { Card, Modal, Popover } from "antd";
import { ProjectsInfoT } from "../../interfacesTypes/types";
import { isNil } from "lodash";

const { Meta } = Card;

type PropsT = {
  projectInfo: ProjectsInfoT;
};

const CardProject: React.FC<PropsT> = ({ projectInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [infoProjec] = useState<ProjectsInfoT>(projectInfo);

  
  const handleShowModal = (isOpen: boolean) => {
    setIsModalOpen(isOpen);
  }

  return (
    <>
      <Card
        // hoverable
        style={{ width: 350, height: 200 }}
        cover={
          <img width={250} height={200} alt="example" src={projectInfo.img} />
        }
      >
        <Meta
          title={
            <>
              <div>
                <p className="mb-0 fw-bold">
                  <i className="fa-solid fa-circle-check me-1 t-text-blue"></i>{" "}
                  {projectInfo.name}{" "}
                  <span className="t-fs-12">({projectInfo.year})</span>{" "}
                </p>
                <hr />
                <div className="d-flex justify-content-evenly flex-wrap">
                  {projectInfo.techs.map((t) => (
                    <div>
                      <Popover content={t} title="">
                        <img
                          src={`/img/techsIcons/${t}.png`}
                          alt=""
                          width={25}
                          height={25}
                        />
                      </Popover>
                    </div>
                  ))}
                </div>
                <hr />
                <div className="d-flex justify-content-evenly">
                  <Popover
                    content={
                      <span>Resolución recomendada: {projectInfo.size}</span>
                    }
                  >
                    <a href={projectInfo.url} target="_blank">
                      <button className="btn btn-sm btn-outline-primary">
                        {" "}
                        <i className="fa-solid fa-globe me-1"></i>Ir al sitio
                      </button>
                    </a>
                  </Popover>
                  <button className="btn btn-sm btn-outline-dark"
                    onClick={() => {
                      handleShowModal(true);
                    }}
                  >
                    {" "}
                    <i className="fa-solid fa-plus me-1"></i> Ver más
                  </button>
                </div>
              </div>
            </>
          }
          description="CarlosTrinidad"
        />
      </Card>

      <Modal
        width={700}
        centered
        title=""
        open={isModalOpen}
        destroyOnClose
        footer={false}
        // onOk={() => handleShowModal(false)}
        // onCancel={() => handleShowModal(false)}
        closable={false}
        
      >
        <header className="d-flex justify-content-between">
          <p className="fw-bold t-fs-26 mb-1"> <i className="fa-solid fa-bookmark mr-1 t-text-blue"></i> {infoProjec.name}</p>
          <p className="t-fs-22 text-danger mb-1 "  onClick={() => handleShowModal(false)} > <i className="fas fa-times-circle t-pointer" ></i> </p>
        </header>
        
        
          <section className="">
            <div className="">

              <p className="fw-bold t-text-blue t-fs-16 mb-1"> Hosting: <span className="fw-normal t-text-dark t-fs-14"> {projectInfo.hosting} </span> </p>
              <hr />
              <p className="fw-bold t-text-blue t-fs-16 mb-1"> Descripción: <span className="fw-normal t-text-dark t-fs-14"> {projectInfo.description} </span> </p>
              <hr />
              <p className="fw-bold t-text-blue t-fs-16 mb-1"> Tags: </p>
              <div className="d-flex justify-content-evenly flex-wrap">
                {
                  isNil(infoProjec) === false &&
                  infoProjec.tags.map( t => 
                    <p className="mb-0 mt-1 badge bg-primary">{t}</p>
                  )
                }
              </div>
              <hr />
              <div className="d-flex justify-content-evenly">
                <a href={projectInfo.github.front} target="_blank">
                  <button className="btn btn-outline-dark"> <i className="fa-brands fa-github me-1"></i> Git FrontEnd </button>
                </a>

                {
                  projectInfo.github?.back && (
                    <a href={projectInfo.github.back} target="_blank">
                      <button className="btn btn-outline-dark"> <i className="fa-brands fa-github me-1"></i> Git BackEnd </button>
                    </a>
                  )
                }

                <a href={projectInfo.url} target="_blank">
                  <button className="btn btn-outline-success"> <i className="fa-solid fa-arrow-right me-1"></i> Ir al sitio </button>
                </a>
              </div>
            </div> 
          </section>

      </Modal>
    </>
  );
};

export default CardProject;
