import axios from "axios";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import "./CV.scss";
import { LoadingModal } from "../SupportComponents/LoadingModal/LoadingModal";
import ChartHorizontalLine from "../SupportComponents/ChartHorizontalLine/ChartHorizontalLine";

const CV = (props: any) => {
  const [textContent, setTextContent] = useState<any>(null);
  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/cv/cv_text_content.json`)
      .then(async (res) => {
        console.log(res.data)
        await setTextContent(
          props.global.languageSetting === "eng" ? res.data.eng : res.data.hun
        );
      });
  }, [props.global.languageSetting]);
  return (
    <div className="cv-container">
      {textContent ? (
        <>
          <div className={"personal-informations"}>
            <div className="me-picture-holder">
              <img
                src={`${process.env.PUBLIC_URL}/cv/me.png`}
                alt={
                  props.global.languageSetting === "eng"
                    ? "A picture of Martin Bacsur"
                    : "Egy kép Bacsur Martin-ról"
                }
              />
            </div>
            <div className="arrow-decoration"></div>
            <div className="about-me">
              <h3>{textContent.aboutMe.title}</h3>
              {textContent.aboutMe.content.map((p: string, i: number) => {
                return <p key={i}>{p}</p>;
              })}
            </div>
            <div className="skills"></div>
          </div>
          <div className="main-informations">
            <div className="header">
              <h1>bacsur martin</h1>
              <h4>{textContent.title}</h4>
            </div>
            <div className="work-experience">
              <h3 className="cv-content-title">
                {textContent.workExperience.inJobExperience.title}
              </h3>
              {textContent.workExperience.inJobExperience.content.map(
                (exp: string, i: number) => {
                  return (
                    <span key={i} className={i % 2 === 0 ? "company" : "job"}>
                      {exp}
                    </span>
                  );
                }
              )}

              <span
                className="company"
                style={{ margin: ".1rem auto .1rem 4rem" }}
              >
                {textContent.workExperience.firstHandExperience.title}
              </span>
              {textContent.workExperience.firstHandExperience.content.map(
                (exp: any, i: number) => {
                  return (
                    <a
                      style={{ cursor: "pointer" }}
                      className="firsthand-job"
                      key={i}
                      href={`${exp.link}`}
                      target="_blank"
                    >
                      {exp.title}
                    </a>
                  );
                }
              )}
            </div>
            <div className="technology-skills">
              <h3 className="cv-content-title">
                {textContent.technologySkills}
              </h3>
              <div className="front-end">
                <h3 className="development-side">front-end</h3>
                <img
                  src={`${process.env.PUBLIC_URL}/cv/frontend/js.png`}
                  alt="Javascript"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/cv/frontend/typescript.png`}
                  alt="Typescript"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/cv/frontend/react.png`}
                  alt="ReactJs"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/cv/frontend/jquery.png`}
                  alt="jQuery"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/cv/frontend/Sass.svg`}
                  alt="Sass Script"
                />
              </div>
              <div className="back-end">
                <h3 className="development-side">back-end</h3>
                <img
                  src={`${process.env.PUBLIC_URL}/cv/backend/node.png`}
                  alt="Node"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/cv/backend/netCore.png`}
                  alt="dotNetCore"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/cv/backend/mysql.png`}
                  alt="mySql"
                />
              </div>
            </div>
            <div className="skills">
              <h3 className="cv-content-title">
                {textContent.skills.title}
              </h3>
              <ChartHorizontalLine data={textContent.skills.content}></ChartHorizontalLine>
            </div>

          </div>
        </>
      ) : (
        <LoadingModal />
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    global: state.global,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CV);
