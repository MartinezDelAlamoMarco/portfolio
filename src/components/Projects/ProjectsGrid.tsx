import Project from "../../interfaces/Project";
import ProjectsCard from "./ProjectsCard";

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <div className="projects-content">
      {projects.map((project, _index) => {
        return (
            <ProjectsCard project={project} />
        );
      })}
    </div>
  );
};

export default ProjectsGrid;
