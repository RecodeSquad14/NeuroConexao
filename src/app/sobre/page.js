import GridContainer from "@/components/grid/GridContainer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sobre = () => {
  return (
    <div className="bg-primary">
      <GridContainer className="flex flex-col items-center h-auto">
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
        <GridContainer className="flex flex-col gap-7 justify-center items-center h-auto md:flex-row ">
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

      <GridContainer className="flex-col flex-wrap items-center h-auto md:flex-row p-2">
        <div className="md:w-1/2 flex items-start justify-center mx-auto">
          <Image
            src="/home-img/team.png"
            alt="grupo de pessoas"
            width={600}
            height={600}
            className=" w-300 md:w-auto "
          />
        </div>

        <div className="flex flex-wrap  justify-center items-center gap-2">
          <div>
            <a href="https://www.linkedin.com/in/alfanya-a-277773bb/" target="_blank">
              <Image
                src="/squad-img/alfa.png"
                alt="Imagem 1"
                width={300}
                height={300}
                className="rounded-3xl w-195 md:w-300"
              />
            </a>
            <p className="text-white text-center">Alfannya Abrantes</p>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/anaclaracamorim/" target="_blank">
              <Image
                src="/squad-img/ana.png"
                alt="Imagem 1"
                width={300}
                height={300}
                className="rounded-3xl w-195 md:w-300"
              />
            </a>
            <p className="text-white text-center">Ana Clara Amorim</p>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/anderson-rocha-silva/" target="_blank">
              <Image
                src="/squad-img/anderson.png"
                alt="Imagem 1"
                width={300}
                height={300}
                className="rounded-3xl w-195 md:w-300"
              />
            </a>
            <p className="text-white text-center">Anderson Rocha</p>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/marcelle-s-170995163/" target="_blank">
              <Image
                src="/squad-img/marcelle.png"
                alt="Imagem 1"
                width={300}
                height={300}
                className="rounded-3xl w-195 md:w-300"
              />
            </a>
            <p className="text-white text-center">Marcelle Santos</p>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/marconi-sena/" target="_blank">
              <Image
                src="/squad-img/marconi.png"
                alt="Imagem 1"
                width={300}
                height={300}
                className="rounded-3xl w-195 md:w-300"
              />
            </a>
            <p className="text-white text-center">Marconi Sena</p>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/marcos-custodio/" target="_blank">
              <Image
                src="/squad-img/marcos.png"
                alt="Imagem 1"
                width={200}
                height={200}
                className="rounded-3xl w-195 md:w-300"
              />
            </a>
            <p className="text-white text-center">Marcos Custódio</p>
          </div>
          <div>
            <a href="#" target="_blank">
              <Image
                src="/squad-img/matheus.png"
                alt="Imagem 1"
                width={300}
                height={300}
                className="rounded-3xl w-195 md:w-300"
              />
            </a>
            <p className="text-white text-center">Matheus Albieri</p>
          </div>

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
