import Image from "next/image";
import React from "react";

function Card({ src, alt, subtitle, text, className }) {
  return (
    <div className={className}>
      <Image src={src} alt={alt} width={300} height={300} className="" />

      <h2 className="text-3xl text-slate-100">{subtitle}</h2>
      <p className="max-w-sm text-slate-200">{text}</p>
    </div>
  );
}

export default Card;
