import Card from "@/components/card/card";
import React from "react";
import Image from "next/image";
import Button from "@/components/button/Button";

function Page() {
  return (
    <div className="bg-primary min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <Image
          src="/conexao-img/profissionalNeurotipico.png"
          alt="grupo de pessoas"
          width={300}
          height={300}
          className="mx-auto max-w-full h-auto p-1 mb-4"
        />
        
        <Card />
      </div>
      <div className="mt-6">
        <Button
          name="Cadastre-se"
          href="#"
          className="bg-transparent w-32 border-white border-solid border-2 text-white rounded-xl p-1 text-center font-bold hover:bg-secondary"
        />
      </div>
    </div>
  );
}

export default Page;
