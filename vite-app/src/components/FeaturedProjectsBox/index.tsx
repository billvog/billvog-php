import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Projects } from "./ProjectsData";
import { FeaturedProject } from "./FeaturedProject";

interface FeaturedProjectsBoxProps {}
export const FeaturedProjectsBox: React.FC<FeaturedProjectsBoxProps> = ({}) => {
  const [selectedProjectIdx, setSelectedProjectIdx] = useState(0);
  const [selectedProject, setSelectedProject] = useState(
    Projects[selectedProjectIdx]
  );

  const projectInvisibleRef = useRef<HTMLDivElement>(null);
  const [newProjectInvisibleHeight, setNewProjectInvisibleHeight] = useState(0);

  const featuredProjectContainerRef = useRef<HTMLDivElement>(null);

  // Handle animation-related stuff.
  useLayoutEffect(() => {
    if (projectInvisibleRef.current) {
      setNewProjectInvisibleHeight(projectInvisibleRef.current.offsetHeight);
    }

    if (featuredProjectContainerRef.current) {
      featuredProjectContainerRef.current.animate(
        [{ opacity: 0 }, { opacity: 1 }],
        {
          duration: 500,
          iterations: 1,
          easing: "ease",
        }
      );
    }
  }, [selectedProject]);

  useEffect(() => {
    setSelectedProject(Projects[selectedProjectIdx]);
  }, [selectedProjectIdx]);

  return (
    <div className="relative">
      {/* 
				We use this to calculate the height of the FeaturedProject component 
				with the new data, so we can animate to it smoothly.
			*/}
      <div className="opacity-0 absolute -z-50" ref={projectInvisibleRef}>
        <FeaturedProject project={selectedProject} />
      </div>

      <div
        ref={featuredProjectContainerRef}
        style={{
          maxHeight: newProjectInvisibleHeight || 0,
          minHeight: newProjectInvisibleHeight || 0,
          transition: "max-height, min-height",
          transitionDuration: ".35s",
          transitionTimingFunction: "ease",
        }}
      >
        <FeaturedProject project={selectedProject} />
      </div>

      <div className="flex justify-center space-x-3 pt-6">
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
    </div>
  );
};
