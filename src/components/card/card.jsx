import Image from "next/image";
import React from "react";
import Button from "../button/Button";

function Card({ src, alt, subtitle, text, className }) {
  return (
    <div className={className}>
      <Image src={src} alt={alt} width={300} height={300} className="" />

      <h2 className="text-3xl text-slate-100">{subtitle}</h2>
      <p className="max-w-sm text-slate-200">{text}</p>
      <Button
        href="/formularioNeurodiverso"
        name="Cadastre-se"
        className="bg-transparent w-32 border-white border-solid border-2 text-white  rounded-xl p-1 mt-20 text-center font-bold hover:bg-secondary"
      />
    </div>
  );
}

export default Card;
