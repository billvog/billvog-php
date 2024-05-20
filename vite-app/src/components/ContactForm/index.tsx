import { Button } from "@/components/ContactForm/Button";
import { InputField } from "@/components/ContactForm/InputField";
import { TContactForm } from "@/types/Contact";
import { Dialog, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import axios from "axios";
import React, { ChangeEvent, FormEvent, Fragment, useState } from "react";

type ContactFormErrors<T> = {
  [K in keyof T]?: string;
};

export const ContactForm: React.FC = () => {
  const [isFormLoading, setIsFormLoading] = useState(false);

  const [formValues, setFormValues] = useState<TContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<
    ContactFormErrors<TContactForm & { server: string }>
  >({});

  const [showContactSuccessModal, setShowContactSuccessModal] = useState(false);

  function resetForm() {}

  function onFieldChange(event: ChangeEvent<HTMLInputElement>) {
    setFormValues((v) => ({ ...v, [event.target.id]: event.target.value }));
  }

  function validateForm() {
    let hasError = false;

    // Following DRY as if some old asian master have taught me that.
    function addError(field: keyof TContactForm, error: string) {
      setFormErrors((v) => ({ ...v, [field]: error }));
      hasError = true;
    }

    // Validate name
    if (!formValues.name) {
      addError("name", "Name is a required field");
    }

    // Validate email
    if (!formValues.email) {
      addError("email", "Email is a required field");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
      addError("email", "Invalid email address");
    }

    // Validate message
    if (!formValues.message) {
      addError("message", "Message is a required field");
    }

    return hasError;
  }

  async function submitForm(event: FormEvent) {
    // Old-school js jazz
    event.preventDefault();

    // Validation
    const hasError = validateForm();
    if (hasError) {
      return;
    }

    // Update loading state
    setIsFormLoading(true);

    // Send to backend
    axios
      .post("/api/contact", formValues)
      .then((res) => {
        if (res.status === 200) {
          setShowContactSuccessModal(true);
          resetForm();
        } else {
          setFormErrors({
            [res.data.error.field]: res.data.error.message,
          });
        }
      })
      .catch((e) => {
        setFormErrors({
          server: "Something went wrong on my side. Please, try again later :^)",
        });
      })
      .finally(() => {
        setIsFormLoading(false);
      });
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <div className="flex flex-col space-y-3 bg-zinc-800 shadow-xl px-6 py-8">
          {typeof formErrors.server === "string" && (
            <div className="p-4 text-red-500">{formErrors.server}</div>
          )}
          <div className="space-y-6 mt-3">
            <InputField
              label="Name"
              name="name"
              type="text"
              placeholder="Your name"
              error={formErrors.name}
              onChange={onFieldChange}
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="Your email"
              error={formErrors.email}
              onChange={onFieldChange}
            />
            <InputField
              label="Message"
              name="message"
              placeholder="Message..."
              error={formErrors.message}
              onChange={onFieldChange}
              textarea
            />
          </div>
          <Button type="submit" isLoading={isFormLoading}>
            Send
          </Button>
        </div>
      </form>
      {/* Contact message sent dialog */}
      <Transition show={showContactSuccessModal} as={Fragment}>
        <Dialog
          open={showContactSuccessModal}
          onClose={() => setShowContactSuccessModal(false)}
          className="fixed inset-0 z-10 overflow-y-auto backdrop-filter backdrop-blur-md"
          static
        >
          <div className="min-h-screen px-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0" />
            </TransitionChild>
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-zinc-800 shadow-xl">
                <DialogTitle
                  as="h3"
                  className="text-xl font-bold leading-6 text-purple-400"
                >
                  Message sent
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-sm text-zinc-200">
                    Thanks for contacting me, I&apos;ll get in touch with you as soon as I
                    can!
                  </p>
                </div>
                <div className="mt-4">
                  <Button type="button" onClick={() => setShowContactSuccessModal(false)}>
                    Got it, thanks!
                  </Button>
                </div>
              </div>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
