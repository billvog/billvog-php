import React, { useEffect, useState } from "react";

interface FeaturedProjectsBoxProps {}

type Project = {
  title: string;
  repoLink: string;
  accentColor: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
};

const Projects: Project[] = [
  {
    title: "Ferman",
    repoLink: "https://github.com/billvog/ferman",
    accentColor: "#fde047",
    icon: (
      <img
        src="https://raw.githubusercontent.com/billvog/ferman/master/packages/web/public/favicon.ico"
        className="w-8"
      />
    ),
    content: (
      <>
        <p>
          Ferman is the project I'm currently most proud of, being the one I've
          dedicated plenty of my free time and one of my first attempts to use
          React as well as GraphQL.
        </p>
        <p>
          It's a social media, at its simplest form, where you can create and
          like posts as well as following other users with which you have share
          common opinions.
        </p>
      </>
    ),
  },
  {
    title: "Sarf",
    repoLink: "https://github.com/billvog/sarf",
    accentColor: "#ff6363",
    content: (
      <>
        <p>
          SARF stands for Simple Archive Format and it is yet another way to
          archive files.
        </p>
        <p>
          It comes with a simple utility command line program that helps you
          add, remove and stat files from an archive.
        </p>
        <p>
          I started creating this little tool as a course of improving my
          knowledge upon the C language.
        </p>
      </>
    ),
  },
  {
    title: "Todoc",
    repoLink: "https://github.com/billvog/todoc-ios",
    accentColor: "#937ae6",
    content: (
      <>
        <p>
          Todoc is officially my first (and currently only) app I've built for
          iOS. For that, I used Swift, UIKit and of course Xcode.
        </p>
        <p>
          The app is, as you guessed, a todo list application. It lets you
          create a reminder which you provide with a title, date, etc. and
          notifies you the given date and time to do the task.
        </p>
      </>
    ),
  },
  {
    title: "Glipus",
    repoLink: "https://github.com/billvog/glipus",
    accentColor: "#52a8ff",
    content: (
      <>
        <p>
          Glipus is a program that helps you encrypt and decrypt files using the
          AES algorithm.
        </p>
        <p>
          The application is written in C++. For the GUI I used wxWidgets and
          for the encryption the Crypto++ library.
        </p>
      </>
    ),
  },
];

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
