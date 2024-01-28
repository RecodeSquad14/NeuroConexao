import React from "react";

function ButtonForm({ name, className, type }) {
  return (
    <button className={className} type={type}>
      {name}
    </button>
  );
}

export default ButtonForm;
