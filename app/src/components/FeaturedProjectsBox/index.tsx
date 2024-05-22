import { FeaturedProject } from "@/components/FeaturedProjectsBox/FeaturedProject";
import { Projects } from "@/components/FeaturedProjectsBox/ProjectsData";
import { useIsMobile } from "@/hooks/useIsMobile";
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

import CurvedArrowSvg from "@/assets/curved-arrow.svg";

export const FeaturedProjectsBox: React.FC = () => {
  const isMobile = useIsMobile();

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

  const swipeableHandlers = useSwipeable({
    onSwipedLeft: () => {
      setSelectedProjectIdx((prev) => (prev + 1) % Projects.length);
    },
    onSwipedRight: () => {
      setSelectedProjectIdx((prev) => (prev - 1 + Projects.length) % Projects.length);
    },
  });

  return (
    <div className="relative">
      {isMobile && (
        <div className="absolute -top-[80px] -right-4 flex">
          <span className="font-bold text-xs text-gray-200">
            Swipe to see all the projects!
          </span>
          <img src={CurvedArrowSvg} alt="" width={40} className="-ml-5" />
        </div>
      )}

      {/* 
				We use this to calculate the height of the FeaturedProject component 
				with the new data, so we can animate to it smoothly.
			*/}
      <div className="opacity-0 absolute -z-50" ref={invisibleProjectRef}>
        <FeaturedProject project={selectedProject} />
      </div>

      <div {...swipeableHandlers}>
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
