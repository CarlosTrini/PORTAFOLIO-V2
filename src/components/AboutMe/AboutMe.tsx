import { Tabs } from "antd";
import './aboutme.scss';
import Me from "./Me/Me";
import Projects from "./Projects/Projects";

const AboutMe = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  

  return (
    <>
      <section className="t-bg-white pt-4 about-me">
        <div className="container">
          <Tabs
            defaultActiveKey="1"
            centered
            items={
                [
                    {
                      key: "1",
                      label: (
                        <p className="mb-0 fw-bold">
                          <i className="fas fa-user ms-1" /> Acerca de mi{" "}
                        </p>
                      ),
                      children: <Me />,
                    },
                    {
                      key: "2",
                      label: (
                        <p className="mb-0 fw-bold ">
                          <i className="fa-solid fa-thumbs-up ms-1" /> Proyectos personales{" "}
                        </p>
                      ),
                      children: <Projects />,
                    },
                    // {
                    //   key: "3",
                    //   label: (
                    //     <p className="mb-0 fw-bold ">
                    //       <i className="fa-solid fa-earth-americas ms-1"></i> Experiencia
                    //       laboral{" "}
                    //     </p>
                    //   ),
                    //   children: "Content of Tab Pane 3",
                    // },
                  ]
            }
            onChange={onChange}
          />
        </div>
      </section>
    </>
  );
};

export default AboutMe;
