import Image from "next/image";
import React from "react";

interface ScrollDownIndicatorProps {
  scrollFactor: number;
}

export const ScrollDownIndicator: React.FC<ScrollDownIndicatorProps> = ({
  scrollFactor,
}) => {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 w-screen h-screen">
      <div
        className="absolute bottom-0 w-full flex justify-center p-4 z-10 select-none"
        style={{
          transform: `translateY(${scrollFactor * 100}%)`,
          opacity: scrollFactor > 0.9 ? "0" : "1",
        }}
      >
        <div className="px-6 py-4 rounded-2xl backdrop-blur scale-75 lg:scale-100">
          <div className="flex flex-col items-center opacity-60">
            <Image
              src="/assets/scroll.gif"
              alt="Scroll Down"
              width={20}
              height={30}
            />
            <div className="mt-3 font-medium text-white text-sm lowercase hidden lg:block">
              scroll down
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
