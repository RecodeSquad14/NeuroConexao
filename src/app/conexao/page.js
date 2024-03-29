import Card from "@/components/card/card";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div>
      <div className="flex flex-row items-center justify-evenly flex-wrap h-auto  gap-4 mt-10 mb-10">
        <div className="max-w-max h-auto flex flex-col justify-center items-center gap-4 bg-primary p-4 rounded-md shadow-2xl shadow-indigo-700 ">
          <Card
            src="/conexao-img/neurodiverso.png"
            alt="imagem neurodiverso"
            subtitle="Neurodiverso"
            text="No mundo profissional, surge uma perspectiva inovadora: o profissional neuroatípico. Indivíduos neurodiversos trazem habilidades únicas, perspectivas e soluções criativas para desafios no trabalho. Oferecendo abordagens únicas para resolver problemas e colaborar. Abraçar a neurodiversidade promove inclusão e desbloqueia o potencial para grandes resultados."
            className="flex flex-col justify-center items-center gap-4"
          />
          <Link
            href="/formularioNeurodiverso"
            className="bg-transparent w-32 border-white border-solid border-2 text-white  rounded-xl p-1 mt-20 text-center font-bold hover:bg-secondary"
          >
            Cadastre-se
          </Link>
        </div>
        <div className="max-w-770 h-auto flex flex-col justify-center items-center gap-4 bg-primary p-4 rounded-md shadow-2xl shadow-indigo-70">
          <Card
            src="/conexao-img/psicologo.png"
            alt="imagem psicologo"
            subtitle="Psicólogo"
            text="Profissionais de saúde atuam como mediadores entre profissionais neurodiversos e empresas, auxiliando o RH corporativo e validando dados. Essa colaboração assegura uma conexão eficaz, garantindo que os talentos neurodiversos encontrem oportunidades adequadas, validadas por especialistas, para um ambiente de trabalho inclusivo e produtivo."
            className="flex flex-col justify-center items-center gap-4"
          />
          <Link
            href="/formularioProfissional"
            className="bg-transparent w-32 border-white border-solid border-2 text-white  rounded-xl p-1 mt-20 text-center font-bold hover:bg-secondary"
          >
            Cadastre-se
          </Link>
        </div>
        <div className="max-w-770 h-auto flex flex-col justify-center items-center gap-4 bg-primary p-4 rounded-md shadow-2xl shadow-indigo-700">
          <Card
            src="/conexao-img/empresa.png"
            alt="imagem empresa"
            subtitle="Empresa"
            text="Empresas comprometidas com a neurodiversidade buscam ativamente profissionais neurodiversos Elas se cadastram em nossa plataforma, onde detalham suas necessidades e requisitos. Como mediadores, facilitamos a conexão entre essas empresas e talentos neurodiversos, criando um ambiente acolhedor e inclusivo para ambos.
            "
            className="flex flex-col justify-center items-center gap-4"
          />
          <Link
            href="/formularioEmpresa"
            className="bg-transparent w-32 border-white border-solid border-2 text-white  rounded-xl p-1 mt-20 text-center font-bold hover:bg-secondary"
          >
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
