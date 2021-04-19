import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";

const Index: React.FC<{}> = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-center align-middle p-8 bg-gradient-to-r from-gray-700 to-gray-800">
        <div className="p-6 bg-gray-700 text-white flex items-center flex-col rounded-3xl">
          <img src="assets/profile.jpg" className="w-28 rounded-full" />
          <div className="mt-2">Βασίλης Βογιατζής</div>
          <div className="text-gray-400 text-xs w-full">Basiles Bogiatzis</div>
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
              <img src="assets/ferman-icon.ico" className="w-3.5 mr-1" />
              ferman
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-600 text-white p-8">
        <h1 className="text-xl font-bold">Who am I?</h1>
        <div className="text-sm">
          <span>
            My name is Basiles, I'm from Greece and I am 17 years old.
            Currently, I'm a student, but one of my major hobbies is
            programming.
          </span>
          <div className="my-2" />
          <span>
            I have been dealing with programming for a long time. I've learned
            several languages the last ⁓5 years (Javascript, C++, C, Python,
            Java, etc.). Currently, I'm kept busy by ReactJS and project I'm
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
            I'm upload any new project of mine on Github. Find me there @{" "}
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
      <div className="bg-yellow-400 text-white p-8">
        <h1 className="text-xl font-bold">Who am I?</h1>
        <div className="text-sm">
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            numquam soluta explicabo eligendi dicta natus alias quae? Facilis,
            doloribus saepe sunt natus ipsam eveniet rem itaque repudiandae,
            debitis obcaecati corrupti! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Dolorem numquam soluta explicabo eligendi dicta
            natus alias quae?
          </span>
          <div className="my-2" />
          <span>
            Facilis, doloribus saepe sunt natus ipsam eveniet rem itaque
            repudiandae, debitis obcaecati corrupti!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
