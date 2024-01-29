import React from "react";

function ButtonForm({ name, className, type, href }) {
  return (
    <button className={className} type={type} href={href}>
      {name}
    </button>
  );
}

export default ButtonForm;
