import React from "react";
import { Icons } from "../../assets";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center"
      key={project.id}
    >
      <a
        href={project.link || project.github}
        target="noreferrer noopener _blank"
        className={`w-full relative rounded-xl border-slate-500 border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-sky-500`}
      >
        <img className="w-full rounded-md" src={project.img} />
      </a>
      <div className="w-full mt-5">
        <div className="flex justify-between">
          <a
            href={project.link || project.github}
            target="noreferrer noopener _blank"
          >
            <h3 className="text-lg font-bold text-white">{project.title}</h3>
          </a>
          <div className="space-x-2 flex items-center justify-center">
            {project.link && (
              <a href={project.link} target="noreferrer noopener _blank">
                <img
                  src={Icons.project_link}
                  className="w-4 h-4"
                  alt="Link Icon"
                />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="noreferrer noopener _blank">
                <img
                  src={Icons.project_github}
                  className="w-4 h-4"
                  alt="Github Icon"
                />
              </a>
            )}
          </div>
        </div>
        <p className="text-gray-400 text-left text-sm mt-2">{project.desc}</p>
        <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
          {React.Children.toArray(
            project.tags.map((tag) => {
              return (
                <li>
                  <div className="m-1 rounded-lg text-sm bg-gray-800 py-1 px-2 cursor-pointer hover:opacity-75 font-normal">
                    {tag}
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
