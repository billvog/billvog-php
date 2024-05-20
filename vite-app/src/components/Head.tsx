import * as React from "react";
import * as ReactDOM from "react-dom";

const headRoot = document.head;

type HeadProps = {
  children: React.ReactNode[];
};

export default function Head({ children }: HeadProps) {
  return ReactDOM.createPortal(children, headRoot);
}
