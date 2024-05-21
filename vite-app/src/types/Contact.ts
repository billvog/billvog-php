export type TContactForm = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormErrors<T> = {
  [K in keyof T]?: string;
};
