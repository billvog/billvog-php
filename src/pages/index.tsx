import React from "react";

const Index: React.FC<{}> = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-center align-middle p-8 bg-gradient-to-r from-gray-700 to-gray-800">
        <div className="p-6 bg-gray-700 text-white flex items-center flex-col rounded-3xl">
          <img
            src="assets/profile.jpg"
            className="w-28 rounded-full ring-4 ring-gray-800 ring-offset-gray-700 ring-offset-2"
          />
          <span className="mt-3">Basiles Bogiatzis</span>
          <span className="text-sm text-gray-400">
            Find me @{" "}
            <a
              target="blank"
              href="https://github.com/billvog"
              className="text-blue-400 font-bold hover:underline"
            >
              github
            </a>
            ,{" "}
            <a
              target="blank"
              href="https://twitter.com/BasilesBoyatzhs"
              className="text-blue-300 font-bold hover:underline"
            >
              twitter
            </a>
            ,{" "}
            <a
              target="blank"
              href="https://ferman.ga/user/voyager"
              className="text-yellow-700 font-bold hover:underline"
            >
              ferman
            </a>
          </span>
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
