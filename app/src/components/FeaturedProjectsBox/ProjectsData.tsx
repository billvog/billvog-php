import React, { ImgHTMLAttributes } from "react";

export type Project = {
  title: string;
  repoLink: string;
  accentColor: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
};

// Shared properties for Next's Image component.
const imageProps: Omit<ImgHTMLAttributes<any>, "alt" | "src"> = {
  // Using eager loading, because with lazy loading
  // there where cases where a new featured project
  // was in viewport and for half a second the old
  // project's logo was in the place of the new one.
  // Eager loading seems that fixes that.
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
      <img
        alt="Ferman logo"
        src="https://raw.githubusercontent.com/billvog/ferman/master/packages/web/public/favicon.ico"
        {...imageProps}
      />
    ),
    content: (
      <>
        <p>
          A content sharing, text-based platform, featuring a complete authentication
          system, real-time chat, sophisticated frontend with i18n translations for Greek
          and English, SEO in mind and a mobile app.
        </p>
      </>
    ),
  },
  {
    title: "Bongo Cloud",
    repoLink: "https://github.com/billvog/bongo-cloud",
    accentColor: "#87CEEB",
    icon: (
      <img
        alt="Bongo Cloud logo"
        src="https://raw.githubusercontent.com/billvog/bongo-cloud/master/web/public/images/bongo.png"
        {...imageProps}
      />
    ),
    content: (
      <>
        <p>
          A cloud storage application, made for fun, after I discovered an old laptop that
          was incapable of running anything but Linux. So, I decided to turn it into a
          server and create this project to store files on it.
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
          SARF stands for Simple ARchive Format, and is yet another way to archive your
          files.
        </p>
        <p>
          Written in C and without any dependencies, SARF provides a consistent and
          simple-to-use API, being able to be ported to any platform.
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
          Todoc is an iOS application made with Swift and UIKit that helps you manage your
          tasks by providing a simple To-Do list.
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
          Glipus is a Windows application useful for encrypting and decrypting files with
          the{" "}
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
