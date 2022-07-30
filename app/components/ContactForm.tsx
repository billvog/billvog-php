import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { Form, Formik, FormikErrors } from "formik";
import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";
import { InputField } from "./InputField";
import { Spinner } from "./Spinner";

interface ContactFormProps {}

export const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const [showContactSuccessModal, setShowContactSuccessModal] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validate={(values) => {
          const errors: FormikErrors<typeof values> = {};

          // Validate name
          if (!values.name) {
            errors.name = "Name is a required field";
          }

          // Validate email
          if (!values.email) {
            errors.email = "Email is a required field";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          // Validate message
          if (!values.message) {
            errors.message = "Message is a required field";
          }

          return errors;
        }}
        onSubmit={async (values, { setErrors, resetForm }) => {
          try {
            const res = await axios.post("api/contact", values);
            if (res.data.status) {
              setShowContactSuccessModal(true);
              resetForm();
            } else {
              setErrors({
                [res.data.error.field]: res.data.error.message,
              });
            }
          } catch (error) {
            toast.error("Internal server error. Please, try again later.");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="flex flex-col space-y-3 bg-gray-200 shadow-xl px-6 py-8 md:rounded-3xl">
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
