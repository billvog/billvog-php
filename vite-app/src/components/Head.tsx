import React from "react";
import ReactDOM from "react-dom";

const headRoot = document.head;

type HeadProps = {
  children: React.ReactNode[];
};

export default function Head({ children }: HeadProps) {
  return ReactDOM.createPortal(children, headRoot);
}
