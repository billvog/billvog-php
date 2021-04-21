import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { Controller, Scene } from "react-scrollmagic";

const Index: React.FC<{}> = () => {
  return (
    <div
      className="overflow-x-hidden"
      style={{
        backgroundImage: "url(assets/profile.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Controller>
        <Scene duration="100%" triggerHook="onLeave" pin>
          {(progress) => {
            const normalizedProgress = 1 - Math.abs(progress);

            return (
              <div
                className="h-screen w-screen p-12 flex justify-center items-center"
                style={{
                  backdropFilter: `blur(${normalizedProgress * 32}px)`,
                }}
              >
                <div
                  className="flex justify-center items-center transition-all duration-200"
                  style={{
                    opacity: normalizedProgress,
                    transform: `translateY(${progress * -100}vh)`,
                  }}
                >
                  <div className="flex justify-center align-middle">
                    <div className="p-6 bg-gray-700 text-white flex items-center flex-col rounded-3xl shadow-md">
                      <img
                        src="assets/profile.jpg"
                        className="w-28 rounded-full ring-4 ring-gray-800"
                      />
                      <div className="mt-3 leading-tight">
                        Βασίλης Βογιατζής
                      </div>
                      <div className="text-gray-400 text-xs w-full leading-tight">
                        @BasilesBoyatzhs
                      </div>
                      <div className="text-sm text-gray-400 mt-3">
                        <a
                          target="blank"
                          href="https://github.com/billvog"
                          className="font-bold hover:underline flex items-center"
                          style={{
                            color: "#24292D",
                          }}
                        >
                          <FaGithub className="mr-1" />
                          github
                        </a>
                        <a
                          target="blank"
                          href="https://twitter.com/BasilesBoyatzhs"
                          className="font-bold hover:underline flex items-center"
                          style={{
                            color: "#08a0e9",
                          }}
                        >
                          <FaTwitter className="mr-1" />
                          twitter
                        </a>
                        <a
                          target="blank"
                          href="https://ferman.ga/user/voyager"
                          className="font-bold hover:underline flex items-center"
                          style={{
                            color: "#deb786",
                          }}
                        >
                          <img
                            src="assets/ferman-icon.ico"
                            className="w-3.5 mr-1"
                          />
                          ferman
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex justify-center align-middle">
                    <div className="max-w-md text-white flex items-center flex-col rounded-3xl">
                      <div className="text-sm">
                        <span>
                          My name is Basiles, I'm from Greece and I am 17 years
                          old. Currently, I'm a student, but one of my major
                          hobbies is programming.
                        </span>
                        <div className="my-2" />
                        <span>
                          I have been dealing with programming for a long time.
                          I've learned several languages the last ⁓5 years
                          (Javascript, C++, C, Python, Java, etc.). Currently,
                          I'm kept busy by ReactJS and the project I'm
                          developing called Ferman (
                          <a
                            href="https://ferman.ga"
                            target="blank"
                            className="text-yellow-300 font-bold hover:underline"
                          >
                            ferman.ga
                          </a>
                          ).
                        </span>
                        <div className="my-2" />
                        <span>
                          I upload any new project of mine on Github. Find me
                          there @{" "}
                          <a
                            target="blank"
                            href="https://github.com/billvog"
                            className="text-blue-400 font-bold hover:underline"
                          >
                            github.com/billvog
                          </a>
                          .
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </Scene>
      </Controller>
    </div>
  );
};

export default Index;
