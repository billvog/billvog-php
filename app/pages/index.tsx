import Head from "next/head";
import React, { useEffect, useState } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { PiSoundcloudLogoFill } from "react-icons/pi";
import { Controller, Scene } from "react-scrollmagic";
import { ContactForm } from "../components/ContactForm";
import { shuffleArray } from "../utils/shuffleArray";
import { SocialMediaItem } from "../components/SocialMediaItem";
import { FeaturedProjectsBox } from "../components/FeaturedProjectsBox";

const Index: React.FC<{}> = () => {
  const bioTextColors = shuffleArray<string>([
    "burlywood",
    "aquamarine",
    "yellow",
  ]);

  const [webNavigator, setWebNavigator] = useState<Navigator | null>(null);

  useEffect(() => {
    if (navigator) {
      setWebNavigator(navigator);
    }
  }, []);

  const backgroundParallaxStyles = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: webNavigator?.userAgent.match(
      /(iPad|iPhone|iPod|Android|Silk)/gi
    )
      ? "scroll"
      : "fixed",
  };

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
                    ...backgroundParallaxStyles,
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
                              className="w-28 h-28 object-cover rounded-full"
                            />
                            <div className="mt-3 leading-tight">
                              Βασίλης Βογιατζής
                            </div>
                            <div className="text-gray-400 text-xs font-mono w-full leading-tight">
                              Vasilis Voyiadjis
                            </div>
                            <div className="flex flex-col text-sm text-gray-400 mt-3 space-y-1">
                              <SocialMediaItem
                                icon={FaGithub}
                                text="Github"
                                link="https://github.com/billvog"
                                website="github.com"
                                accentColor="#ededed"
                              />
                              <SocialMediaItem
                                icon={FaTwitter}
                                text="Twitter"
                                link="https://twitter.com/voyiadjis"
                                website="twitter.com"
                                accentColor="#08a0e9"
                              />
                              <SocialMediaItem
                                icon={PiSoundcloudLogoFill}
                                text="Soundcloud"
                                link="https://soundcloud.com/voyajis"
                                website="soundcloud.com"
                                accentColor="#fe6a20"
                              />
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
                              music. I like music consuming-and-producing-wise,
                              meaning I listen to lots of music but also compose
                              my own. I also play the piano the last{" "}
                              {new Date().getFullYear() - 2019} years. In fact,
                              I studied at the Music School of Veria during my
                              high school years. You can find sample of my
                              musical work on my Soundcloud.
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
                    ...backgroundParallaxStyles,
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
                            <div className="text-sm text-white font-medium italic opacity-30 mb-2">
                              A few words about some of my projects:
                            </div>
                            <FeaturedProjectsBox />
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
                      ...backgroundParallaxStyles,
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
