import Image from "next/image";
import React from "react";

export type Project = {
  title: string;
  repoLink: string;
  accentColor: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
};

// Shared properties for Next's Image component.
const imageProps: Omit<React.ComponentProps<typeof Image>, "alt" | "src"> = {
  // Using eager loading, because with lazy loading
  // there where cases where a new featured project
  // was in viewport and for half a second the old
  // project's logo was in the place of the new one.
  // Eager loading seems that fixex that.
  loading: "eager",
  width: 32,
  height: 32,
  className: "w-6 lg:w-8 h-auto",
};

export const Projects: Project[] = [
  {
    title: "Ferman",
    repoLink: "https://github.com/billvog/ferman",
    accentColor: "#fde047",
    icon: (
      <Image
        alt="Ferman logo"
        src="https://raw.githubusercontent.com/billvog/ferman/master/packages/web/public/favicon.ico"
        {...imageProps}
      />
    ),
    content: (
      <>
        <p>
          A content sharing, text-based platform, made for educational purposes,
          successfully deployed using Dokku and Docker at AWS and, later on,
          Heroku. It features a complete authentication system, real-time chat,
          sophisticated frontend with SEO in mind and a mobile app.
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
        src="https://raw.githubusercontent.com/billvog/bongo-cloud/master/web/public/images/bongo.png"
        {...imageProps}
      />
    ),
    content: (
      <>
        <p>Bongo Cloud is cloud storage solution.</p>
        <p>
          The idea occured, when I found an old laptop in the basement and
          decided to turn into a cloud storage server.
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
          SARF stands for Simple ARchive Format, and is yet another way to
          archive your files.
        </p>
        <p>
          Written in C and without any dependencies, SARF provides a consistent
          and simple-to-use API, being able to be ported to any platform.
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
          Todoc is an iOS application made with Swift and UIKit that helps you
          manage your tasks by providing a simple To-Do list.
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
          Glipus is a Windows application useful for encrypting and decrypting
          files with the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard"
            target="blank"
          >
            AES algorithm
          </a>
          .
        </p>
        <p>It is built with C++, wxWidgets and the Crypto++ library.</p>
      </>
    ),
  },
];
