import { ContactForm } from "@/components/ContactForm";
import CreateHead from "@/components/CreateHead";
import { FeaturedProjectsBox } from "@/components/FeaturedProjectsBox";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";
import { SocialMediaItem } from "@/components/SocialMediaItem";
import { useIsMobile } from "@/hooks/useIsMobile";
import { shuffleArray } from "@/utils/shuffleArray";
import { useMemo } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiSoundcloudLogoFill } from "react-icons/pi";
import { Controller, Scene } from "react-scrollmagic";

// Assets
import aboutBackgroundImage from "@/assets/background.jpg";
import projectsBackgroundImageDesktop from "@/assets/background2-desktop.jpg";
import projectsBackgroundImageMobile from "@/assets/background2-mobile.jpg";
import contactBackgroundImage from "@/assets/blurred_background.jpg";
import profileImage from "@/assets/profile.jpg";

export default function App() {
  const isMobile = useIsMobile();

  const bioTextColors = useMemo(() => {
    return shuffleArray<string>(["bisque", "aquamarine", "yellow"]);
  }, []);

  const parallaxStyles = useMemo(
    () => ({
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: isMobile ? "scroll" : "fixed",
    }),
    [isMobile]
  );

  return (
    <>
      <CreateHead />
      <Controller>
        {/* About me */}
        <Scene duration="100%" triggerHook="onLeave" pin>
          {(progress: number) => {
            const normalizedProgress = 1 - Math.abs(progress);

            const blurAmount = normalizedProgress * 32;
            const blurAmountWebKit = normalizedProgress * 24;

            return (
              <div className="overflow-x-hidden overflow-y-hidden">
                <ScrollDownIndicator scrollFactor={progress} />
                <div
                  style={{
                    backgroundImage: `url(${aboutBackgroundImage})`,
                    ...parallaxStyles,
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
                              alt="A profile picture of Vasilis"
                              width={120}
                              height={120}
                              src={profileImage}
                              className="w-18 lg:w-30 h-auto object-cover rounded-full"
                            />
                            <div className="text-sm lg:text-lg font-extrabold mt-3 leading-tight">
                              Βασίλης Βογιατζής
                            </div>
                            <div className="text-gray-400 text-xs lg:text-sm font-mono w-full leading-tight">
                              Vasilis Voyiadjis
                            </div>
                            <div className="flex flex-col text-sm lg:text-base text-gray-400 mt-4 space-y-2">
                              <SocialMediaItem
                                icon={FaGithub}
                                text="Github"
                                link="https://github.com/billvog"
                                website="github.com"
                                accentColor="#ededed"
                              />
                              <SocialMediaItem
                                icon={FaLinkedin}
                                text="LinkedIn"
                                link="https://www.linkedin.com/in/vasilis-voyiadjis/"
                                website="linkedin.com"
                                accentColor="#107be6"
                              />
                              <SocialMediaItem
                                icon={PiSoundcloudLogoFill}
                                text="Soundcloud"
                                link="https://soundcloud.com/billvog"
                                website="soundcloud.com"
                                accentColor="#fe6a20"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="max-w-lg flex items-center flex-col">
                          <div className="text-sm lg:text-base font-semibold">
                            <span
                              style={{
                                color: bioTextColors[0],
                              }}
                            >
                              I&apos;m Vasilis, a {new Date().getFullYear() - 2004}yo from
                              Greece, currently studying CS at the University of Thessaly,
                              love building stuff and trying out new technologies.
                            </span>
                            <div className="my-2" />
                            <span
                              style={{
                                color: bioTextColors[1],
                              }}
                            >
                              I've been into programming since a young age, and have
                              experimented with a variety of sectors, including web,
                              mobile and desktop development, but the first (web) is my
                              passion. All my projects are on my Github.
                            </span>
                            <div className="my-2" />
                            <span
                              style={{
                                color: bioTextColors[2],
                              }}
                            >
                              Apart from programming, music is a significant passion of
                              mine. I enjoy composing and playing the piano, a skill I've
                              developed over the past four years, starting with my
                              education at the Music School of Veria during high school.
                              You can take a look of my work on my Soundcloud profile.
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
        {/* Projects */}
        <Scene duration="100%" triggerHook="onLeave" pin>
          {(progress: number) => {
            const normalizedProgress = 1 - Math.abs(progress);
            const zoomFactor = 1 + Math.abs(progress * 8);

            const blurAmount = Math.min(progress * 100, 10);
            const blurAmountWebKit = Math.min(progress * 75, 5);

            return (
              <div className="overflow-x-hidden overflow-y-hidden">
                <div
                  className="h-screen w-screen flex justify-center items-center"
                  style={{
                    backgroundImage: `url(${
                      isMobile
                        ? projectsBackgroundImageMobile
                        : projectsBackgroundImageDesktop
                    })`,
                    ...parallaxStyles,
                  }}
                >
                  <div
                    style={
                      isMobile
                        ? {}
                        : {
                            backdropFilter: `blur(${blurAmount}px)`,
                            WebkitBackdropFilter: `blur(${blurAmountWebKit}px)`,
                          }
                    }
                    className="h-screen w-screen p-12 flex justify-center items-center"
                  >
                    <div className="flex justify-center items-center">
                      <div
                        className="flex justify-center align-middle max-w-lg"
                        style={{
                          transform: `scale(${zoomFactor})`,
                        }}
                      >
                        <div className="filter text-white flex items-center flex-col bg-gray-700 px-8 py-6 rounded-2xl">
                          <div
                            style={{
                              opacity: normalizedProgress * 1.25,
                            }}
                          >
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
          {(progress: number) => {
            const normalizedProgress = 1 - Math.abs(progress);

            return (
              <div className="overflow-x-hidden overflow-y-hidden">
                <div className="h-screen w-screen bg-gray-700">
                  <div
                    className="absolute w-screen h-screen z-0"
                    style={{
                      backgroundImage: `url(${contactBackgroundImage})`,
                      opacity: progress,
                      ...parallaxStyles,
                    }}
                  >
                    <div className="h-screen w-screen md:p-12 flex justify-center items-center">
                      <div className="max-w-full md:max-w-xl w-full">
                        {/* Normal Heading */}
                        <h1
                          className="font-bold text-6xl text-white mb-6 md:block hidden"
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
                            transform: `translateY(${normalizedProgress * 100}vh)`,
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
}
