import { Link } from "react-router";
import "./ProjectsCard.css";
import Project from "../../interfaces/Project";

interface ProjectsCardProps {
  project: Project;
}

const ProjectsCard = ({
  project: {
    id,
    cardTitle,
    cardDescription,
    imagePath,
    liveDemoLink = "#",
    liveDemoButtonText = "Live Demo",
    moreInfoLink = false,
  },
}: ProjectsCardProps) => {
  return (
    <div className="card mb-3 p-2">
      <div className="image-container">
        <img src={imagePath} className="custom-image-centered" alt="Project" />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text flex-grow-1">{cardDescription}</p>
        
        {/* Contenedor de botones modificado */}
        <div className="button-group mt-auto d-flex flex-wrap gap-2">
          {liveDemoLink && liveDemoLink !== "#" ? (
            <a
              href={liveDemoLink}
              target="_blank"
              className="btn btn-primary rounded-2"
            >
              {liveDemoButtonText && liveDemoButtonText !== "Live Demo"
                ? liveDemoButtonText
                : "Live Demo"}
            </a>
          ) : null}
          {moreInfoLink ? (
            <Link
              to={`/projects/${id}`}
              className="btn btn-secondary rounded-2"
            >
              Más información
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
