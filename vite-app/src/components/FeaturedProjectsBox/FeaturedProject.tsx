import React from "react";
import { Project } from "@/components/FeaturedProjectsBox/ProjectsData";

interface FeaturedProjectProps {
  project: Project;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project }) => {
  return (
    <div>
      <div className="flex items-center text-base lg:text-2xl text-left font-bold">
        <div>Project:</div>
        <div className="flex items-center ml-2 space-x-2">
          <span className="underline" style={{ color: project.accentColor }}>
            {project.title}
          </span>
          {project.icon}
        </div>
      </div>
      <div className="mt-1.5 space-y-2">
        <div className="text-xs lg:text-sm font-medium space-y-2">{project.content}</div>

        <div>
          <a
            target="blank"
            href={project.repoLink}
            className="text-xs lg:text-sm font-bold"
            style={{ color: project.accentColor }}
          >
            Check {project.title} on Github.
          </a>
        </div>
      </div>
    </div>
  );
};
