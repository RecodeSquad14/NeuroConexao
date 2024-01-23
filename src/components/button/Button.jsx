import Link from "next/link";
import React from "react";

function Button({ href, name, className, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      <Link href={href}>{name}</Link>
    </div>
  );
}

export default Button;
