import ProjectsGrid from "../../components/Projects/ProjectsGrid"
import Project from "../../interfaces/Project"
import "./Projects.css"
import secondLifeHubScreenshot from "../../assets/second_life_hub.png"
import aspNetLogo from "../../assets/asp_net.png"
import djMarWenScreenshot from "../../assets/djmarwen_web.png"
//import SneakerzScreenshot from "../../assets/sneakerz.png"

const projectsList: Project[] = [
  {
    id: "dj-marwen",
    cardTitle:"Web DJMARWEN",
    cardDescription: "Página web de ejemplo para DJMARWEN. Página web informativa y con formulario de contacto. Programada con React + Vite y Bootstrap, programada con TypeScript y CSS.",
    imagePath: djMarWenScreenshot,
    moreInfoLink: true,
    liveDemoLink: "https://sample-dj-web.web.app/",
  },
  {
    id: "second-life-hub",
    cardTitle:"SecondLifeHub (TFG)",
    cardDescription: "Trabajo de Fin de Grado. Marketplace de productos de segunda mano programado con Flutter y Google Firebase.",
    imagePath: secondLifeHubScreenshot,
    moreInfoLink: true,
  },
  {
    id: "portal-web",
    cardTitle: "Portal Web para gestión de servicios",
    cardDescription: "Desarrollo de portal web para la gestión, administración y monitoreo de servicios ofrecidos por la empresa.",
    imagePath: aspNetLogo,
    moreInfoLink: true,
  },
  /*
  {
    id: "sneakerz",
    cardTitle: "SneakerZ",
    cardDescription: "Web programada con Vite, React y Typescript.",
    imagePath: SneakerzScreenshot,
    moreInfoLink: true,
  }
    */
]

const Projects = () => {
  return (
    <>
      <h1 className="mb-2">Proyectos</h1>
      <ProjectsGrid projects={projectsList} />
    </>  
  )
}

export default Projects