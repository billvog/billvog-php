import Head from "next/head";
import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Controller, Scene } from "react-scrollmagic";
import { ContactForm } from "../components/ContactForm";
import { shuffleArray } from "../utils/shuffleArray";

const Index: React.FC<{}> = () => {
  const bioTextColors = shuffleArray<string>([
    "burlywood",
    "aquamarine",
    "yellow",
  ]);

  return (
    <>
      <Head>
        <title>Βασίλης Βογιατζής (Vasilis Voyiadjis)</title>
        <link rel="shortcut icon" href="favicon.jpg" type="image/jpeg" />
        <meta
          name="keywords"
          content="basiles, bogiatzhs, bogiatzis, billvog, vasilis, voyiadjis, βασιλης, βογιατζης, programmer, about me"
        />
      </Head>
      <Controller>
        {/* About me */}
        <Scene duration="100%" triggerHook="onLeave" pin>
          {(progress) => {
            const normalizedProgress = 1 - Math.abs(progress);

            const blurAmount = normalizedProgress * 32;
            const blurAmountWebKit = normalizedProgress * 24;

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
                    className="min-h-screen w-screen flex justify-center items-center"
                    style={{
                      backdropFilter: `blur(${blurAmount}px)`,
                      WebkitBackdropFilter: `blur(${blurAmountWebKit}px)`,
                    }}
                  >
                    <div
                      className="flex justify-center items-center flex-col pt-12 lg:pt-0 lg:flex-row"
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
                              Vasilis Voyiadjis
                            </div>
                            <div className="flex flex-col text-sm text-gray-400 mt-3 space-y-1">
                              <a
                                target="blank"
                                href="https://github.com/billvog"
                                title="Find @ github.com"
                                className="font-bold hover:underline flex items-center"
                                style={{
                                  color: "#ededed",
                                }}
                              >
                                <FaGithub className="mr-1" />
                                GitHub
                              </a>
                              <a
                                target="blank"
                                href="https://twitter.com/voyiadjis"
                                title="Find @ twitter.com"
                                className="font-bold hover:underline flex items-center"
                                style={{
                                  color: "#08a0e9",
                                }}
                              >
                                <FaTwitter className="mr-1" />
                                Twitter
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="max-w-lg text-white flex items-center flex-col">
                          <div className="text-md font-semibold">
                            <span
                              style={{
                                color: bioTextColors[0],
                              }}
                            >
                              My name is Vasilis, I'm from Greece and I am{" "}
                              {new Date().getFullYear() - 2004} years old.
                              Currently, I'm a studying at the Digital Systems
                              Department of University of Piraeus.
                            </span>
                            <div className="my-2" />
                            <span
                              style={{
                                color: bioTextColors[1],
                              }}
                            >
                              I have been dealing with programming for a long
                              time, about {new Date().getFullYear() - 2015}{" "}
                              years. In that time, I've worked with numerous
                              languages and technologies and built some simple
                              and other slightly more complex projects that
                              helped me understand the nature of Computer
                              Science.
                            </span>
                            <div className="my-2" />
                            <span
                              style={{
                                color: bioTextColors[2],
                              }}
                            >
                              Beyond programming, one of my major hobbies is
                              music. I like listening to music, the most of the
                              genres, but mostly classical. I also play the
                              piano the last {new Date().getFullYear() - 2019}{" "}
                              years. In fact, I studied at the Music School of
                              Veria during my high school years.
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
        {/* About Ferman? */}
        <Scene duration="100%" triggerHook="onLeave" pin>
          {(progress) => {
            const normalizedProgress = 1 - Math.abs(progress);
            const zoomFactor = 1 + Math.abs(progress * 8);

            return (
              <div className="overflow-x-hidden overflow-y-hidden">
                <div
                  className="h-screen w-screen flex justify-center items-center"
                  style={{
                    backgroundImage: "url(assets/background2.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                  }}
                >
                  <div className="h-screen w-screen p-12 flex justify-center items-center">
                    <div className="flex justify-center items-center">
                      <div
                        className="flex justify-center align-middle max-w-lg"
                        style={{
                          transform: `scale(${zoomFactor})`,
                        }}
                      >
                        <div className="text-white flex items-center flex-col bg-gray-700 px-8 py-6 rounded-2xl">
                          <div
                            style={{
                              opacity: normalizedProgress * 1.25,
                            }}
                          >
                            <div className="flex items-center text-2xl text-left font-bold">
                              <div>Project:</div>
                              <div className="flex items-center ml-2 space-x-2">
                                <span className="underline text-yellow-300">
                                  Ferman
                                </span>
                                <img
                                  src="https://raw.githubusercontent.com/billvog/ferman/master/packages/web/public/favicon.ico"
                                  className="w-8"
                                />
                              </div>
                            </div>
                            <div className="text-sm mt-1.5 font-medium space-y-2">
                              <p>
                                Ferman, is a project I started while learning
                                ReactJS and GraphQL. During its development I
                                learned a lot of new cool stuff, as it was my
                                first commercial-like project that reached to a
                                quite impressing point (for my then-standards).
                              </p>
                              <p>
                                I've also implemented the basic functionality of
                                Ferman on a mobile app built with React Native
                                and Expo -- that was my introduction to mobile
                                hybrid development.
                              </p>
                              <p>
                                You can find the whole Ferman project on{" "}
                                <a
                                  title="Check Ferman on GitHub"
                                  target="blank"
                                  href="https://github.com/billvog/ferman"
                                  className="text-blue-300 underline"
                                >
                                  GitHub
                                </a>
                                .
                              </p>
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
                <div className="h-screen w-screen bg-gray-700">
                  <div
                    className="absolute w-screen h-screen z-0"
                    style={{
                      backgroundImage: "url(assets/background3.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundAttachment: "fixed",
                      opacity: progress,
                    }}
                  >
                    <div className="h-screen w-screen md:p-12 flex justify-center items-center">
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
                        <h1
                          className="font-bold text-center text-6xl text-white mb-6 block md:hidden"
                          style={{
                            opacity: progress,
                          }}
                        >
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
              </div>
            );
          }}
        </Scene>
      </Controller>
    </>
  );
};

export default Index;
