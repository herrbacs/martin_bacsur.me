import axios from "axios";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import "./CV.scss";
import { LoadingModal } from "../SupportComponents/LoadingModal/LoadingModal";
import { text } from "@fortawesome/fontawesome-svg-core";

const CV = (props: any) => {
  const [textContent, setTextContent] = useState<any>(null);
  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/cv/cv_text_content.json`)
      .then(async (res) => {
        console.log(res.data.hun.technologySkills);
        await setTextContent(
          props.global.languageSetting === "eng" ? res.data.eng : res.data.hun
        );
      });
  }, [props.global.languageSetting]);
  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
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
            <div className="work-experiencee">
              <h3>{textContent.workExperience.inJobExperience.title}</h3>
              {textContent.workExperience.inJobExperience.content.map(
                (exp: string, i: number) => {
                  return (
                    <span key={i} className={i % 2 !== 0 ? "company" : "job"}>
                      {exp}
                    </span>
                  );
                }
              )}

              <h3>{textContent.workExperience.firstHandExperience.title}</h3>
              {textContent.workExperience.firstHandExperience.content.map(
                (exp: string, i: number) => {
                  return <span key={i}>{exp}</span>;
                }
              )}
            </div>
            <div className="technology-skills">
              <h3>{textContent.technologySkills}</h3>
              <div className="front-end">
                <h3>front-end</h3>

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
                <h3>back-end</h3>
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
            <div className="education">
              <h3>{textContent.education.title}</h3>
              <h3>{textContent.education.first.date}</h3>
              <span>{textContent.education.first.school}</span>
              <span>{textContent.education.first.faculty}</span>
            </div>
            <div className="language">
              <h3>{textContent.language.title}</h3>
              {textContent.language.content.map(
                (lang:any) => {
                  return (<span>{lang}</span>)
                }
              )}
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
