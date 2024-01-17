import React from "react";
import { twMerge } from "tailwind-merge";

function GridContainer({ children, className }) {
  const defaultClass = "w-full max-w-grid mx-auto px-3 ";
  const combinedClass = twMerge(defaultClass, className);
  return <div className={combinedClass}>{children}</div>;
}

export default GridContainer;
