import Link from "next/link";
import React from "react";

function Button({ href, name, className, onClick, type }) {
  return (
    <div className={className} type={type} onClick={onClick}>
      <Link href={href}>{name}</Link>
    </div>
  );
}

export default Button;
