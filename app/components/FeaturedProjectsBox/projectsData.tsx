import Image from "next/image";

export type Project = {
  title: string;
  repoLink: string;
  accentColor: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
};

export const Projects: Project[] = [
  {
    title: "Ferman",
    repoLink: "https://github.com/billvog/ferman",
    accentColor: "#fde047",
    icon: (
      <Image
        alt="Ferman logo"
        width={32}
        height={32}
        src="https://raw.githubusercontent.com/billvog/ferman/master/packages/web/public/favicon.ico"
      />
    ),
    content: (
      <>
        <p>
          Ferman is the project I&apos;m currently most proud of, being the one
          I&apos;ve dedicated plenty of my free time and one of my first
          attempts to use React as well as GraphQL.
        </p>
        <p>
          It&apos;s a social media, at its simplest form, where you can create
          and like posts as well as following other users with which you have
          share common opinions.
        </p>
      </>
    ),
  },
  {
    title: "Bongo Cloud",
    repoLink: "https://github.com/billvog/bongo-cloud",
    accentColor: "#87CEEB",
    icon: (
      <Image
        alt="Bongo Cloud logo"
        width={32}
        height={32}
        src="https://raw.githubusercontent.com/billvog/bongo-cloud/master/web/public/images/bongo.png"
      />
    ),
    content: (
      <>
        <p>Bongo Cloud is a comic project of mine.</p>
        <p>
          Let&apos;s just say there was an old laptop I didn&apos;t use and
          decided to turn into a cloud storage server.
        </p>
        <p>
          The app implements a full filesystem, custom user authentication with
          JWT and much more and consists of a Django API{" "}
          <span title="Django Rest Framework">(with DRF)</span> and a React
          frontend <span title="Create React App">(with CRA)</span>.
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
          Todoc is officially my first (and currently only) app I&apos;ve built
          for iOS. For that, I used Swift, UIKit and of course Xcode.
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