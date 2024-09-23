import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import projects from "../../utils/data/projects";
import ProjectCard from "../projects/ProjectCard";

const ProjectsSection = () => {
  return (
    <div className="flex flex-col text-left justify-between pt-10 relative">
      <div id="projects">
        <SectionTitle title="Here are a few of my favorite projects." />
      </div>

      <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
        {projects.slice(0, 3).map((item) => {
          return <ProjectCard key={item.id} project={item} />;
        })}
      </div>

    </div>
  );
};

export default ProjectsSection;
