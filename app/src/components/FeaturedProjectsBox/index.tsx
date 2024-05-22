import { FeaturedProject } from "@/components/FeaturedProjectsBox/FeaturedProject";
import { Projects } from "@/components/FeaturedProjectsBox/ProjectsData";
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";

export const FeaturedProjectsBox: React.FC = () => {
  const [selectedProjectIdx, setSelectedProjectIdx] = useState(0);

  const selectedProject = useMemo(() => {
    return Projects[selectedProjectIdx];
  }, [selectedProjectIdx]);

  const invisibleProjectRef = useRef<HTMLDivElement>(null);
  const featuredProjectContainerRef = useRef<HTMLDivElement>(null);

  const [newInvisibleProjectHeight, setNewInvisibleProjectHeight] = useState(0);

  // Handle animation-related stuff.
  useLayoutEffect(() => {
    if (invisibleProjectRef.current) {
      setNewInvisibleProjectHeight(invisibleProjectRef.current.offsetHeight);
    }

    if (featuredProjectContainerRef.current) {
      featuredProjectContainerRef.current.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 500,
        iterations: 1,
        easing: "ease",
      });
    }
  }, [selectedProject]);

  return (
    <div className="relative">
      {/* 
				We use this to calculate the height of the FeaturedProject component 
				with the new data, so we can animate to it smoothly.
			*/}
      <div className="opacity-0 absolute -z-50" ref={invisibleProjectRef}>
        <FeaturedProject project={selectedProject} />
      </div>

      <div
        ref={featuredProjectContainerRef}
        style={{
          maxHeight: newInvisibleProjectHeight || 0,
          minHeight: newInvisibleProjectHeight || 0,
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
