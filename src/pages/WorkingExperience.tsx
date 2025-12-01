import WorkExperienceCard from "../components/WorkExperienceCard"
import csLogo from "../assets/cs.png"
import htmlLogo from "../assets/html.png"
import cssLogo from "../assets/css.png"
import aspNetLogo from "../assets/asp_net.png"
import sqlServerLogo from "../assets/sql_server.png"
import entityFrameworkLogo from "../assets/entity_framework.png"

import vbaLogo from "../assets/vba.png"
import twincatLogo from "../assets/twincat.png"
import evonLogo from "../assets/evon.png"
import bacnetLogo from "../assets/bacnet.png"
import mariadbLogo from "../assets/mariadb.png"
import powerBiLogo from "../assets/power_bi.png"

const WorkingExperience = () => {
  return (
    <>
      <h1 className="mb-4">Experiencia laboral</h1>
      <div className="about-me-content mt-2">
        <WorkExperienceCard
          jobName={"Junior Full Stack Developer (FCTs de Grado Superior)"}
          dateStart={new Date(2024, 3, 1)}
          dateEnd={new Date(2024, 5, 30)}
          companyName={"All Cloud Consulting"}
          jobDescription={"Formé parte del equipo de desarrollo encargado de diseñar y desarrollar desde cero un portal web para gestión de servicios. \n"
            + "Herramientas utilizadas: ASP.NET MVC, C#, HTML, CSS, Microsoft Entity Framework, Microsoft SQL Server."}
          tools={[
            aspNetLogo,
            csLogo,
            htmlLogo,
            cssLogo,
            entityFrameworkLogo,
            sqlServerLogo,
          ]}
        />
        <WorkExperienceCard
          jobName={"Técnico de informática con especialización en ciberseguridad"}
          dateStart={new Date(2025, 2, 14)}
          dateEnd={new Date(2025, 10, 29)}
          companyName={"DICYP S.L."}
          jobDescription={
            "Durante mi experiencia en DICYP S.L. desempeñé tareas de análisis y respuesta a incidentes, además de automatizar diversos procesos mediante macros de Office desarrolladas en " +
            "<span class=\"text-body-secondary fw-bold\">Visual Basic</span>. También participé en la revisión y mejora del código de módulos de Revit utilizando " +
            "<span class=\"text-body-secondary fw-bold\">C#</span>, así como en la programación de PLC mediante " +
            "<span class=\"text-body-secondary fw-bold\">Texto Estructurado</span>, aprendiendo el uso de la herramienta <span class=\"text-body-secondary fw-bold\">TwinCAT</span>. Asimismo, contribuí al desarrollo de sistemas SCADA con " +
            "<span class=\"text-body-secondary fw-bold\">Evon XAMControl</span>, abarcando tanto el diseño de la interfaz como la conexión con el PLC a través de protocolos como " +
            "<span class=\"text-body-secondary fw-bold\">BACnet</span>, la programación de lógicas del SCADA en " +
            "<span class=\"text-body-secondary fw-bold\">C#</span> y la implementación de elementos de campo como sensores y cámaras. Finalmente, participé en la explotación y análisis de datos mediante " +
            "<span class=\"text-body-secondary fw-bold\">MariaDB</span>, <span class=\"text-body-secondary fw-bold\">SQL Server</span> y <span class=\"text-body-secondary fw-bold\">Power BI</span>."
          }
          tools={[
            vbaLogo,
            csLogo,
            twincatLogo,
            evonLogo,
            bacnetLogo,
            mariadbLogo,
            sqlServerLogo,
            powerBiLogo,
          ]}
        />
      </div>
    </>
  );
};

export default WorkingExperience;
