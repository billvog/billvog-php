import Head from "next/head";
import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Controller, Scene } from "react-scrollmagic";
import { ContactForm } from "../components/ContactForm";

const Index: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>Βασίλης Βογιατζής (Vasilis Voyadjis)</title>
        <meta
          name="keywords"
          content="basiles, bogiatzhs, bogiatzis, billvog, βασιλης, βογιατζης, programmer, about me"
        />
      </Head>
      <Controller>
        {/* About me */}
        <Scene duration="100%" triggerHook="onLeave" pin>
          {(progress) => {
            const normalizedProgress = 1 - Math.abs(progress);
            return (
              <div className="overflow-x-hidden overflow-y-hidden">
                <div
                  style={{
                    backgroundImage: "url(assets/background.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                  }}
                >
                  <div
                    className="h-screen w-screen p-12 flex justify-center items-center"
                    style={{
                      backdropFilter: `blur(${normalizedProgress * 32}px)`,
                    }}
                  >
                    <div
                      className="flex justify-center items-center flex-col md:flex-row"
                      style={{
                        opacity: normalizedProgress,
                        transform: `translateY(${progress * -100}vh)`,
                      }}
                    >
                      <div className="flex justify-center align-middle">
                        <div className="p-6 bg-gray-800 text-white rounded-3xl shadow-md">
                          <div className="flex items-center flex-col">
                            <img
                              src="assets/profile.jpg"
                              className="w-28 rounded-full"
                            />
                            <div className="mt-3 leading-tight">
                              Βασίλης Βογιατζής
                            </div>
                            <div className="text-gray-400 text-xs font-mono w-full leading-tight">
                              Vasilis Voyadjis
                            </div>
                            <div className="flex flex-col text-sm text-gray-400 mt-3 space-y-1">
                              <a
                                target="blank"
                                href="https://github.com/billvog"
                                className="font-bold hover:underline flex items-center"
                                style={{
                                  color: "#ededed",
                                }}
                              >
                                <FaGithub className="mr-1" />
                                github
                              </a>
                              <a
                                target="blank"
                                href="https://twitter.com/voyiadjis"
                                className="font-bold hover:underline flex items-center"
                                style={{
                                  color: "#08a0e9",
                                }}
                              >
                                <FaTwitter className="mr-1" />
                                twitter
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="max-w-md text-white flex items-center flex-col">
                          <div className="text-sm font-semibold">
                            <span>
                              My name is Vasilis, I'm from Greece and I am{" "}
                              {new Date().getFullYear() - 2004} years old.
                              Currently, I'm a studying at University of Piraeus
                              Digital Systems.
                            </span>
                            <div className="my-2" />
                            <span>
                              I have been dealing with programming for a long
                              time, about {new Date().getFullYear() - 2015}{" "}
                              years. In that time, I've work with a numerous
                              languages and technologies. By watching YouTube
                              hundrend of tutorials, experimenting and following
                              the “trial and error“ method, I've came where I
                              am.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </Scene>
        {/* What do you code? */}
        <Scene duration="100%" triggerHook="onLeave" pin>
          {(progress) => {
            const normalizedProgress = 1 - Math.abs(progress);
            const zoomFactor = 1 + Math.abs(progress * 8);

            return (
              <div className="overflow-x-hidden overflow-y-hidden">
                <div
                  className="h-screen w-screen flex justify-center items-center"
                  style={{
                    backgroundImage: "url(assets/colorful-background.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                  }}
                >
                  <div
                    className="h-screen w-screen p-12 flex justify-center items-center"
                    style={{
                      backdropFilter: `blur(${normalizedProgress * 24}px)`,
                    }}
                  >
                    <div className="flex justify-center items-center">
                      <div
                        className="flex justify-center align-middle max-w-lg"
                        style={{
                          transform: `scale(${zoomFactor})`,
                        }}
                      >
                        <div
                          style={{
                            opacity: normalizedProgress,
                          }}
                        >
                          <div className="text-white flex items-center flex-col bg-gray-700 px-8 py-6 rounded-2xl">
                            <div className="text-2xl text-center font-bold w-full">
                              This is the title
                            </div>
                            <div className="text-sm mt-1.5">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </Scene>
        {/* Contact */}
        <Scene duration="100%" triggerHook="onLeave" pin>
          {(progress) => {
            const normalizedProgress = 1 - Math.abs(progress);

            return (
              <div className="overflow-x-hidden overflow-y-hidden">
                <div className="h-screen w-screen px-0 py-6 md:p-12 bg-gradient-to-br from-yellow-500 to-red-500">
                  <div className="flex justify-center items-center flex-col">
                    <div className="max-w-full md:max-w-xl w-full">
                      {/* Normal Heading */}
                      <h1
                        className="font-bold text-6xl text-transparent text-white mb-6 md:block hidden"
                        style={{
                          textIndent: normalizedProgress * 130,
                          opacity: progress,
                        }}
                      >
                        Contact me
                      </h1>
                      {/* Mobile Heading */}
                      <h1 className="font-bold text-center text-6xl text-transparent bg-clip-text bg-gradient-to-bl from-yellow-500 to-red-500 mb-6 block md:hidden">
                        Contact me
                      </h1>
                      <div
                        style={{
                          opacity: progress,
                          transform: `translateY(${
                            normalizedProgress * 100
                          }vh)`,
                        }}
                      >
                        <ContactForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </Scene>
      </Controller>
    </>
  );
};

export default Index;
