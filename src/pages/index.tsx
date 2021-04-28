import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { Form, Formik } from "formik";
import React, { Fragment, useState } from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { Controller, Scene } from "react-scrollmagic";
import { InputField } from "../components/InputField";
import { Spinner } from "../components/Spinner";

const Index: React.FC<{}> = () => {
  const [showContactSuccessModal, setShowContactSuccessModal] = useState(false);
  return (
    <>
      <Controller>
        {/* About me */}
        <Scene duration="100%" triggerHook="onLeave" pin>
          {(progress) => {
            const normalizedProgress = 1 - Math.abs(progress);
            return (
              <div className="overflow-x-hidden overflow-y-hidden">
                <div
                  style={{
                    backgroundImage: "url(assets/profile.jpg)",
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
                        <div className="p-6 bg-gray-700 text-white rounded-3xl shadow-md">
                          <div className="flex items-center flex-col">
                            <img
                              src="assets/profile.jpg"
                              className="w-28 rounded-full ring-4 ring-gray-800"
                            />
                            <div className="mt-3 leading-tight">
                              Βασίλης Βογιατζής
                            </div>
                            <div className="text-gray-400 text-xs w-full leading-tight">
                              @BasilesBoyatzhs
                            </div>
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
                                <img
                                  src="assets/ferman-icon.ico"
                                  className="w-3.5 mr-1"
                                />
                                ferman
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="max-w-md text-white flex items-center flex-col">
                          <div className="text-sm font-semibold">
                            <span>
                              My name is Basiles, I'm from Greece and I am{" "}
                              {new Date().getFullYear() - 2004} years old.
                              Currently, I'm a student, but one of my major
                              hobbies is programming.
                            </span>
                            <div className="my-2" />
                            <span>
                              I have been dealing with programming for a long
                              time. I've learned several languages the last ⁓5
                              years (Javascript, C++, C, Python, Java, etc.).
                              Currently, I'm kept busy by ReactJS and the
                              project I'm working on called Ferman (
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
                              I upload any new project of mine on Github. Find
                              me there @{" "}
                              <a
                                target="blank"
                                href="https://github.com/billvog"
                                className="font-bold hover:underline"
                                style={{
                                  color: "#353c42",
                                }}
                              >
                                github.com/billvog
                              </a>
                              .
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
                <div className="h-screen w-screen p-12 flex justify-center items-center bg-gradient-to-bl from-yellow-500 to-red-500">
                  <div className="flex justify-center items-center">
                    <div
                      className="flex justify-center align-middle max-w-lg"
                      style={{
                        transform: `scale(${zoomFactor})`,
                      }}
                    >
                      <div className="text-white flex items-center flex-col bg-gray-700 px-6 py-4 rounded-sm">
                        <div
                          style={{
                            opacity: normalizedProgress,
                          }}
                        >
                          <div className="text-xl font-bold w-full">
                            What do you code?
                          </div>
                          <div className="text-sm">
                            I used to enjoy experimenting with C++ (with Qt or
                            wxWidgets) and Java (Swing or SWT). I also, do some
                            old classic C when I have spare time.
                            <br />
                            But for the most time I do web.{" "}
                            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
                              My favourite backend stack:
                            </span>{" "}
                            node, expressjs, postgres, graphql{" "}
                            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-600">
                              and frontend:
                            </span>{" "}
                            reactjs, tailwindcss, apollo.
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
                <div className="h-screen w-screen px-0 py-4 md:p-12 bg-gray-700">
                  <div className="flex justify-center items-center flex-col">
                    <div className="max-w-full md:max-w-xl w-full">
                      {/* Normal Heading */}
                      <h1
                        className="font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-bl from-yellow-500 to-red-500 mb-6 md:block hidden"
                        style={{
                          textIndent: normalizedProgress * 130,
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
                        <Formik
                          initialValues={{
                            name: "",
                            email: "",
                            message: "",
                          }}
                          onSubmit={async (
                            values,
                            { setErrors, resetForm }
                          ) => {
                            setShowContactSuccessModal(true);
                            axios
                              .post("api/contact", values)
                              .then((res) => {
                                if (res.data.status) {
                                  setShowContactSuccessModal(true);
                                  resetForm();
                                } else {
                                  return setErrors({
                                    [res.data.error.field]:
                                      res.data.error.message,
                                  });
                                }
                              })
                              .catch((reason) => {
                                console.log("ERROR:", reason);
                              });
                          }}
                        >
                          {({ isSubmitting }) => (
                            <Form>
                              <div className="flex flex-col space-y-3 bg-gray-200 shadow-xl px-6 py-8 md:rounded-2xl">
                                <div className="space-y-6 mt-3">
                                  <InputField
                                    label="Name"
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                  />
                                  <InputField
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Your email"
                                  />
                                  <InputField
                                    label="Message"
                                    name="message"
                                    placeholder="Message..."
                                    textarea
                                  />
                                </div>
                                <button
                                  disabled={isSubmitting}
                                  type="submit"
                                  className="flex flex-row items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-blue-600 p-2 font-semibold text-md text-white hover:from-blue-400 focus:outline-none focus:ring-4 ring-offset-2 ring-offset-gray-700"
                                >
                                  {isSubmitting ? (
                                    <>
                                      <Spinner />
                                      Sending...
                                    </>
                                  ) : (
                                    "Send"
                                  )}
                                </button>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </Scene>
      </Controller>
      {/* Contact message sent dialog */}
      <Transition show={showContactSuccessModal} as={Fragment}>
        <Dialog
          open={showContactSuccessModal}
          onClose={() => setShowContactSuccessModal(false)}
          className="fixed inset-0 z-10 overflow-y-auto backdrop-filter backdrop-blur-md"
          static
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Message sent
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Thanks for contacting me, I'll get in touch with you as soon
                    as I can!
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => setShowContactSuccessModal(false)}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Index;
