import { Col, Row } from "reactstrap";
import "./me.scss";

const Me = () => {
  return (
    <>
    <div className="me-container">
      <Row className="">
        <Col md={6} className="me-left t-text-white ">
        <div>

          <h3>Qué hay! <i className="fas fa-hand ms-1 t-text-yellow"></i> </h3>
          <div className="t-fs-16">
            <p className="mb-2"><i className="fa-solid fa-feather-pointed me-1 t-fs-12 t-text-yellow"></i> Me llamo Carlos Trinidad, pero es muy común que me digan Trinidad.</p>
            <p className="mb-2"><i className="fa-solid fa-feather-pointed me-1 t-fs-12 t-text-yellow"></i> Tengo 29 años, con una carrera en Ingeniería es sistemas computacionales.</p>
            <p className="mb-2"><i className="fa-solid fa-feather-pointed me-1 t-fs-12 t-text-yellow"></i> Estudié en el instituto tecnológico de iztapalapa.</p>
            <p className="mb-2"><i className="fa-solid fa-feather-pointed me-1 t-fs-12 t-text-yellow"></i> Tengo gusto por la lectura y de vez en cuando escribo.</p>
          </div>
        </div>
        </Col>
        <Col md={6} className="me-right">
        <div>

        <h3>Mis intereses <i className="fa-solid fa-lightbulb ms-1 t-text-blue"></i> </h3>
          <div className="t-fs-16">
            <p className="mb-2"><i className="fa-solid fa-feather-pointed me-1 t-fs-12 t-text-blue"></i> Lo principal es el desarrollo con <span className="t-text-blue fw-bold">Javascript. ReactJs.</span></p>
            <p className="mb-2"><i className="fa-solid fa-feather-pointed me-1 t-fs-12 t-text-blue"></i> A pesar de pocos acercamientos, el área del BackEnd me llama la atención, lo he usado muy poco con <span className="t-text-blue fw-bold">Node.js y Next.js</span></p>
            <p className="mb-2"><i className="fa-solid fa-feather-pointed me-1 t-fs-12 t-text-blue"></i> En la parte de base de datos no es mi fuerte, y he tenido pocos acercamientos debido a mis proyectos personales con <span className="t-text-blue fw-bold">MongoDb</span></p>
            <p className="mb-2"><i className="fa-solid fa-feather-pointed me-1 t-fs-12 t-text-blue"></i> Aprender lenguajes como: <span className="t-text-blue fw-bold">Python, C++ están en mis intereses</span></p>
        </div>
          </div>
        </Col>
      </Row>
    </div>
    </>
  );
};

export default Me;
