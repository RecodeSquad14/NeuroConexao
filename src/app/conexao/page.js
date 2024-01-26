import Card from "@/components/card/card";
import React from "react";
import Image from "next/image";
import Button from "@/components/button/Button";

function Page() {
  return (
    <div className="bg-primary min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        {
          <div className="flex flex-wrap items-center justify-between">
            <Image
              src="/conexao-img/profissionalSaude.png"
              alt="grupo de pessoas"
              width={300}
              height={300}
              className="mx-auto w-full sm:w-1/2 md:w-1/3 h-auto p-1 mb-4"
            />
            <Image
              src="/conexao-img/profissionalNeuroatipico.png"
              alt="grupo de pessoas"
              width={300}
              height={300}
              className="mx-auto w-full sm:w-1/2 md:w-1/3 h-auto p-1 mb-4"
            />
            <Image
              src="/conexao-img/empresa.png"
              alt="grupo de pessoas"
              width={300}
              height={300}
              className="mx-auto w-full sm:w-1/2 md:w-1/3 h-auto p-1 mb-4"
            />
          </div>
        }

        <Card />
      </div>
      <div className="mt-6">
        <Button
          name="Cadastre-se"
          href="/formularioNeurodiverso"
          className="bg-transparent w-32 border-white border-solid border-2 text-white rounded-xl p-1 text-center font-bold hover:bg-secondary"
        />
      </div>
    </div>
  );
}

export default Page;
