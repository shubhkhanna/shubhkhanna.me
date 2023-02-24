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

      <div className="relative w-full mt-2">
        <Link to="/projects">
          <div className="mt-8 max-w-sm md:max-w-2xl border border-sky-500 mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-sky-500 bg-darkshade1 hover:bg-sky-500 hover:text-white transition-colors cursor-pointer">
            View All
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSection;
