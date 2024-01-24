import GridContainer from "@/components/grid/GridContainer";
import Image from "next/image";
import React from "react";

const Sobre = () => {
  return (
    <div className="bg-primary">
      <GridContainer className="flex flex-col items-center h-screen">
        <Image
          src="/home-img/equipeneura.png"
          alt="imagem de equipe"
          width={1000}
          height={1000}
          className="w-full md:w-auto"
        />
        <div className="md:w-auto">
          <p className="mt-6 font-normal text-3xl leading-normal text-slate-100  md:text-4xl md:leading-normal">
            Nosso time é liderado por uma equipe dedicada e diversificada,
            participante do bootcamp 2023 da RECODE PRO, representando o Squad
            14. Nossos antecedentes variados e a experiência adquirida moldam
            uma equipe que acredita na capacidade de transformar o mundo
            corporativo por meio da inclusão.
          </p>
        </div>
      </GridContainer>

      <div className="bg-secondary">
        <GridContainer className="flex flex-col gap-7 justify-center items-center h-screen md:flex-row ">
          <div className="md:w-1/2 ">
            <Image
              src="/home-img/equipe.png"
              alt="telas com imagens"
              width={800}
              height={800}
              className="w-full h-auto md:w-auto"
            />
          </div>

          <div className="md:w-1/2">
            <p className="mt-6 font-normal text-3xl leading-normal text-slate-100  md:text-4xl md:leading-normal text-rigth">
              A NeuroConexão tem como missão principal resolver o desafio da
              empregabilidade para pessoas neurodiversas, criando um ambiente
              inclusivo tanto para empresas quanto para profissionais.
              Acreditamos na diversidade, e, com a ajuda de profissionais da
              saúde, estamos caminhando para um mercado de trabalho mais
              inclusivo.
            </p>
          </div>
        </GridContainer>
      </div>

      <GridContainer className="flex flex-col gap-7 h-screen md:flex-row">
        <div className="md:w-1/2 flex items-start justify-center mx-auto">
          <Image
            src="/home-img/team.png"
            alt="grupo de pessoas"
            width={600}
            height={600}
            className=" w-195 md:w-auto "
          />
        </div>
      </GridContainer>

      <GridContainer className="grid grid-cols-4 gap-4">
        <div className="rounded-full overflow-hidden mb-2">
          <Image
            src="/squad-img/alfa.jpeg"
            alt="Imagem 1"
            width={50}
            height={50}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="rounded-full overflow-hidden mb-2">
          <Image
            src="/squad-img/alfa.jpeg"
            alt="Imagem 1"
            width={50}
            height={50}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="rounded-full overflow-hidden mb-2">
          <Image
            src="/squad-img/alfa.jpeg"
            alt="Imagem 1"
            width={50}
            height={50}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="rounded-full overflow-hidden mb-2">
          <Image
            src="/squad-img/alfa.jpeg"
            alt="Imagem 1"
            width={50}
            height={50}
            className="w-full h-full object-cover"
          />
        </div>
      </GridContainer>

      <GridContainer className="grid grid-cols-3 gap-4">
        <div className="rounded-full overflow-hidden mb-2">
          <Image
            src="/squad-img/alfa.jpeg"
            alt="Imagem 1"
            width={50}
            height={50}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="rounded-full overflow-hidden mb-2">
          <Image
            src="/squad-img/alfa.jpeg"
            alt="Imagem 1"
            width={50}
            height={50}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="rounded-full overflow-hidden mb-2">
          <Image
            src="/squad-img/alfa.jpeg"
            alt="Imagem 1"
            width={50}
            height={50}
            className="w-full h-full object-cover"
          />
        </div>
      </GridContainer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Sobre />
    </div>
  );
}

export default App;
