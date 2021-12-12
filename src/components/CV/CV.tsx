import "./CV.scss";

const CV = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className={"personal-informations"}>
        <div>
          <img src={`${process.env.PUBLIC_URL}/cv/me.png`} alt="" />
        </div>
        <div className="arrow-decoration"></div>
        <div className="about-me">
          <p>
            Szenvedélyes szegedi fejlesztőként imádok web technológiákkal
            foglalkozni, alig várom hogy minden nap fejlődjek bennük.
          </p>
          <p>
            Nagyon szeretek csapatban dolgozni, de egyedül is helytállok a
            kihívásokkal szemben.
          </p>
          <p>
            Szeretem ahogy a terveket követve valami alakul a kezem alatt, de ha
            a váratlan keresztül húzza a számításokat, akkor sem esem kétségbe.
          </p>
          <p>
            Produktív munkavégzést szemelőt tartva, bátran kérek segítséget
            csapattársaimtól, kollégáimtól.
          </p>
        </div>
        <div className="skills"></div>
      </div>
      <div className="main-informations">
        <div className="header">
          <h1>bacsur martin</h1>
          <h4>Full Stack Webfejlesztő</h4>
        </div>
        <div className="work-experiencee">
          <h3>szakmai tapasztalatok</h3>
          <span>Szeged Sunilium Kft. :</span>
          <span>Szakmai gyakorlat - full stack .NET fejlesztő</span>
          <span>Egyéni Projektek: </span>
          <span>www.docutrend.hu</span>
        </div>
        <div className="technology-skills">
          <h3>ismeretek</h3>
          <div className="front-end">
            <h3>front-end</h3>

            <img src={`${process.env.PUBLIC_URL}/cv/frontend/js.png`} alt="" />
            <img
              src={`${process.env.PUBLIC_URL}/cv/frontend/typescript.png`}
              alt=""
            />
            <img
              src={`${process.env.PUBLIC_URL}/cv/frontend/react.png`}
              alt=""
            />
            <img
              src={`${process.env.PUBLIC_URL}/cv/frontend/jquery.png`}
              alt=""
            />
            <img
              src={`${process.env.PUBLIC_URL}/cv/frontend/Sass.svg`}
              alt=""
            />
          </div>
          <div className="back-end">
            <h3>back-end</h3>
            <img src={`${process.env.PUBLIC_URL}/cv/backend/node.png`} alt="" />
            <img
              src={`${process.env.PUBLIC_URL}/cv/backend/netCore.png`}
              alt=""
            />
            <img
              src={`${process.env.PUBLIC_URL}/cv/backend/mysql.png`}
              alt=""
            />
          </div>
        </div>
        <div className="education">
        <h3>2019-2021</h3>
        <span>Szegedi Tudományegyetem - Juhász Gyula Pedagógusképző Kar</span>
        </div>
        <div className="language">
          <h3>back-end</h3>
          <span>B2 Angol - Középfok/Általános kommunikáció szint</span>
          <span>Programtervező Informatikus Fejlesztő</span>
        </div>
        <div className="hobbies">
            <span>Motorozás</span>
            <span>Sportolás</span>
            <span>Közös Időtöltés Családdal, Barátokkal</span>
            <span>Olvasás, Önfejlesztés</span>
        </div>
      </div>
    </div>
  );
};

export default CV;
