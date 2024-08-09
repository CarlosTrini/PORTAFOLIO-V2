import { socialInfo } from "../../data/social";
import { isNil } from "lodash";

import "./header.scss";

import PROFILE_IMG from "/img/profile2.jpg";
import { simpleAlertTimer } from "../../helpers/alerts";
import { Popover } from "antd";

const Header = () => {
  const copyEmail = () => {
    navigator.clipboard
      .writeText("carlostrinidad952@gmail.com")
      .then(() => {
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
    <>
      <header className="bg">
        <div className="info-cont">
          <div className="info-cont-img">
            <img className="" src={PROFILE_IMG} alt="" />
          </div>

          <div className="info">
            <div className="info-cont-text ms-3 text-center">
              <h1 className="fw-bold t-fs-34 ">
                {`{ PORTAFOLIO `} <i className="fa-solid fa-briefcase"></i>{" "}
                {"}"}
              </h1>
              <h5 className="t-fs-20 t-text-yellow">FrontEnd Development</h5>
              <div className="t-fs-16 text-center mt-4">
                <p className="mb-0">
                  Mi nombre es{" "}
                  <span className="fw-bold t-text-yellow">
                    {" "}
                    Carlos Trinidad <i className="fa-solid fa-user-tie"></i>
                  </span>{" "}
                  .
                </p>
                <p className="mb-0">
                  Me presento como: desarrollador FrontEnd.
                </p>
                <p className="mb-0">
                  En especial con{" "}
                  <span className="fw-bold t-text-yellow">
                    ReactJs <i className="fa-brands fa-react"></i>{" "}
                  </span>
                </p>
              </div>
            </div>

            <div className="info-cont-social mt-3">
              {isNil(socialInfo) === false &&
                socialInfo.map((s) => {
                  return (
                    <div className="info-cont-social-block text-center">
                      <p className="mb-0 t-text-white t-fs-26">
                        <i className={s.icon}></i>
                      </p>
                      {s.copy === false ? (
                        <a href={s.link} target="_blank">
                          <span className="t-text-yellow">{s.socialName}</span>
                        </a>
                      ) : (
                        <Popover content={s.link} title="">
                          <p
                            onClick={copyEmail}
                            className="t-text-yellow copy-message"
                          >
                            {s.socialName}
                          </p>
                        </Popover>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
       
        </div>
      </header>
    </>
  );
};

export default Header;
