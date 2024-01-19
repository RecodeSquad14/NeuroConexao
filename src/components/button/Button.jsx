import Link from "next/link";
import React from "react";

function Button({ href, name, className }) {
  return (
    <div className={className}>
      <Link href={href}>{name}</Link>
    </div>
  );
}

export default Button;
