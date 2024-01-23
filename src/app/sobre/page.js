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
          width={400}
          height={160}
          className="w-full h-auto object-cover"
        />
       
  <p className="mt-5 text-4x1 text-white text-center max-w-2x1">
        Nosso time é liderado por uma equipe dedicada e diversificada,
          participante do bootcamp 2023 da RECODE PRO, representando o Squad 14.
          Nossos antecedentes variados e a experiência adquirida moldam uma
          equipe que acredita na capacidade de transformar o
          mundo corporativo por meio da inclusão.
        </p>
        
      </GridContainer>
      <div className="bg-secondary">
      <GridContainer className="flex gap-3 h-screen">
        <p className="grid place-items-center text-4xl text-left text-white">
        A NeuroConexão tem como missão principal resolver o desafio da
          empregabilidade para pessoas neurodiversas, criando um ambiente
          inclusivo tanto para empresas quanto para profissionais. Acreditamos
          que a diversidade é a força propulsora de um futuro mais promissor, e,
          com a ajuda de profissionais da saúde, estamos caminhando para um
          mercado de trabalho mais inclusivo.
        </p>
        <Image
          src="/heroImg.png"
          alt="imagem"
          width={300}
          height={300}
          className="w-1/2"
        />
        </GridContainer>
        </div>

        <GridContainer className="flex gap-3 h-screen">
        <Image
          src="/home-img/team.png"
          alt="imagem"
          width={300}
          height={300}
          className="w-full"
        />

      
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
