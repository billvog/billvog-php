import React, { useEffect, useState } from "react";
import { Projects } from "./projectsData";

interface FeaturedProjectsBoxProps {}

export const FeaturedProjectsBox: React.FC<FeaturedProjectsBoxProps> = ({}) => {
  const [selectedProjectIdx, setSelectedProjectIdx] = useState(0);
  const [selectedProject, setSelectedProject] = useState(
    Projects[selectedProjectIdx]
  );

  useEffect(() => {
    setSelectedProject(Projects[selectedProjectIdx]);
  }, [selectedProjectIdx]);

  return (
    <>
      <div className="flex items-center text-2xl text-left font-bold">
        <div>Project:</div>
        <div className="flex items-center ml-2 space-x-2">
          <span
            className="underline"
            style={{ color: selectedProject.accentColor }}
          >
            {selectedProject.title}
          </span>
          {selectedProject.icon}
        </div>
      </div>
      <div className="mt-1.5 space-y-2">
        <div className="text-sm font-medium space-y-2">
          {selectedProject.content}
        </div>
        <div>
          <a
            target="blank"
            href={selectedProject.repoLink}
            className="text-sm font-bold"
            style={{ color: selectedProject.accentColor }}
          >
            Check {selectedProject.title} on Github.
          </a>
        </div>
      </div>
      <div className="flex justify-center space-x-3 mt-6">
        {Projects.map((p, idx) => (
          <div
            key={p.title}
            className={`w-2 h-2 rounded-full hover:opacity-80 cursor-pointer hover:scale-125`}
            style={
              selectedProjectIdx == idx
                ? {
                    backgroundColor: selectedProject.accentColor,
                    opacity: 0.7,
                  }
                : {
                    backgroundColor: "rgb(0, 0, 0, .2)",
                  }
            }
            onClick={() => setSelectedProjectIdx(idx)}
          />
        ))}
      </div>
    </>
  );
};
