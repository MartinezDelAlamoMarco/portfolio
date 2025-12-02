import csLogo from "../assets/cs.png";
import javaLogo from "../assets/java.png";
import typescriptLogo from "../assets/typescript.png";
import kotlinLogo from "../assets/kotlin.png";
import dartLogo from "../assets/dart.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import javascriptLogo from "../assets/javascript.png";
import phpLogo from "../assets/php.png";
import reactLogo from "../assets/react.png";
import viteLogo from "../assets/vite.png";
import aspNetLogo from "../assets/asp_net.png";
import springBootLogo from "../assets/spring.png";
import hibernateLogo from "../assets/hibernate.png";
import flutterLogo from "../assets/flutter.png";
import mysqlWorkbenchLogo from "../assets/mysql_workbench.png";
import sqlLogo from "../assets/sql.png";
import plSqlLogo from "../assets/pl_sql.png";
import sqlServerLogo from "../assets/sql_server2.png";
import mongoDbLogo from "../assets/mongodb.png";
import javaJdbcLogo from "../assets/jdbc.png";
import intellijLogo from "../assets/intellij.png";
import androidStudioLogo from "../assets/android_studio.png";
import vStudioLogo from "../assets/vs2022.png";
import vStudioCodeLogo from "../assets/vscode.png";
import eclipseLogo from "../assets/eclipse.png";
import firebaseLogo from "../assets/firebase.png";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";
import vmwareLogo from "../assets/vmware.png";
import virtualboxLogo from "../assets/virtualbox.png";
import bootstrapLogo from "../assets/bootstrap.png";
import cvPDF from "../assets/CV_Marco_Martinez.pdf";
import pythonLogo from "../assets/python.png"

const Skills = () => {
  return (
    <>
      <h1 className="mb-4">Habilidades</h1>
      <div className="about-me-content">
        <p className="mb-4">
          Desde que comencé mi formación en{" "}
          <span className="important">
            Desarrollo de Aplicaciones Multiplataforma
          </span>
          , he continuado desarrollando y perfeccionando mis habilidades, y he
          ido adquiriendo nuevos conocimientos.
          <span className="important">
            {" "}
            Estas son las competencias en las que más destaco:
          </span>
        </p>

        <div className="row g-4 mb-4">
          {/* Lenguajes de Programación */}
          <div className="col-12 col-lg-6 mb-3">
            <h3 className="font-bold mb-3">Lenguajes de Programación</h3>
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="my-3">
                    <img height="42" className="me-3" src={csLogo} alt="C#" /> C#
                  </li>
                  <li className="my-3">
                    <img height="45" className="me-3" src={javaLogo} alt="Java" /> Java
                  </li>
                  <li className="my-3">
                    <img height="45" className="me-3" src={kotlinLogo} alt="Kotlin" /> Kotlin
                  </li>
                  <li className="my-3">
                    <img height="45" className="me-3" src={dartLogo} alt="Dart" /> Dart
                  </li>
                  <li className="my-3">
                    <img height="45" className="me-3" src={htmlLogo} alt="HTML5" /> HTML5
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="my-3">
                    <img height="45" className="me-3" src={cssLogo} alt="CSS3" /> CSS3
                  </li>
                  <li className="my-3">
                    <img height="45" className="me-3" src={javascriptLogo} alt="JavaScript" /> JavaScript
                  </li>
                  <li className="my-3">
                    <img height="45" className="me-3" src={typescriptLogo} alt="TypeScript" /> TypeScript
                  </li>
                  <li className="my-4">
                    <img height="28" className="me-3" src={phpLogo} alt="PHP" /> PHP
                  </li>
                  <li className="my-3">
                    <img height="45" className="me-3" src={pythonLogo} alt="Python" /> Python
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Frameworks */}
          <div className="col-12 col-lg-6 mb-3">
            <h3 className="font-bold mb-3">Frameworks</h3>
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="my-3">
                    <img height="45" className="me-3" src={reactLogo} alt="React" /> React
                  </li>
                  <li className="my-3">
                    <img height="45" className="me-3" src={viteLogo} alt="Vite" /> Vite
                  </li>
                  <li className="my-3">
                    <img height="36" className="me-3" src={bootstrapLogo} alt="Bootstrap" /> Bootstarp
                  </li>
                  <li className="my-4">
                    <img height="40" className="me-3" src={aspNetLogo} alt="ASP.NET" /> ASP.NET
                  </li>
                  <li className="my-3">
                    <img height="45" className="me-3" src={springBootLogo} alt="Spring Boot" /> Spring Boot
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="my-3">
                    <img height="45" className="me-3" src={hibernateLogo} alt="Hibernate" /> Hibernate
                  </li>
                  <li className="my-3">
                    <img height="45" className="me-3" src={flutterLogo} alt="Flutter" /> Flutter
                  </li>
                  <li className="my-3">
                    <img height="40" className="me-3" src={aspNetLogo} alt="Entity Framework" /> Entity Framework
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bases de Datos */}
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <h3 className="font-bold mb-3">Bases de Datos</h3>
            <ul className="list-unstyled">
              <li className="my-3">
                <img height="45" className="me-3" src={mysqlWorkbenchLogo} alt="MySQL Workbench" /> MySQL Workbench
              </li>
              <li className="my-3">
                <img height="25" className="me-3" src={sqlLogo} alt="SQL" /> SQL
              </li>
              <li className="my-3">
                <img height="45" className="me-3" src={plSqlLogo} alt="PL/SQL" /> PL/SQL
              </li>
              <li className="my-3">
                <img height="45" className="me-3" src={sqlServerLogo} alt="SQL Server" /> SQL Server
              </li>
              <li className="my-3">
                <img height="45" className="me-3" src={mongoDbLogo} alt="MongoDB" /> MongoDB
              </li>
              <li className="my-3">
                <img height="29" className="me-3" src={javaJdbcLogo} alt="Java JDBC" /> Java JDBC
              </li>
            </ul>
          </div>

          {/* IDEs */}
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <h3 className="font-bold mb-3">IDEs</h3>
            <ul className="list-unstyled">
              <li className="my-3"><img height="45" className="me-3" src={intellijLogo} alt="IntelliJ" /> IntelliJ</li>
              <li className="my-3"><img height="45" className="me-3" src={androidStudioLogo} alt="Android Studio" /> Android Studio</li>
              <li className="my-3"><img height="45" className="me-3" src={vStudioLogo} alt="Visual Studio 2022" /> Visual Studio 2022</li>
              <li className="my-3"><img height="45" className="me-3" src={vStudioCodeLogo} alt="VS Code" /> Visual Studio Code</li>
              <li className="my-3"><img height="45" className="me-3" src={eclipseLogo} alt="Eclipse" /> Eclipse</li>
            </ul>
          </div>

          {/* Extra */}
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <h3 className="font-bold mb-3">Extra</h3>
            <ul className="list-unstyled">
              <li className="my-3"><img height="45" className="me-3" src={firebaseLogo} alt="Firebase" /> Firebase</li>
              <li className="my-3"><img height="45" className="me-3" src={gitLogo} alt="Git" /> Git</li>
              <li className="my-3"><img height="45" className="me-3" src={githubLogo} alt="GitHub" /> GitHub</li>
              <li className="my-3"><img height="45" className="me-3" src={vmwareLogo} alt="VMware" /> VMware</li>
              <li className="my-3"><img height="39" className="me-3" src={virtualboxLogo} alt="VirtualBox" /> VirtualBox</li>
            </ul>
          </div>

          {/* Certificaciones */}
          <div className="col-12">
            <h3 className="font-bold mb-3">Certificaciones</h3>
            <ul className="list-unstyled">
              <li className="my-3">
                Certificado oficial de Cambridge (FCE) — Nivel de Inglés B2
              </li>
            </ul>
          </div>
        </div>

        <p>
          Por otro lado, tengo experiencia en otras áreas,{" "}
          <span className="important">te invito a revisar mi CV</span> para
          conocer más detalles sobre mí y otras{" "}
          <span className="important">habilidades adicionales</span> que
          dispongo.
        </p>
        <a
          href={cvPDF}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary rounded-5"
        >
          <i className="bi bi-file-earmark-text me-2"></i>
          Ver Currículum
        </a>
      </div>
    </>
  );
};

export default Skills;
