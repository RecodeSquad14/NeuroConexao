import Button from "@/components/button/Button";
import GridContainer from "@/components/grid/GridContainer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-primary">
      <GridContainer className="flex flex-col gap-7 justify-center items-center  h-screen md:flex-row ">
        <div className="md:w-1/2">
          <Image
            src="/home-img/heroImage.png"
            alt="grupo de pessoas"
            width={600}
            height={600}
            className=" w-195 md:w-auto "
          />
        </div>

        <div className="md:w-1/2">
          <p className="font-normal text-4xl leading-normal text-slate-100  md:text-5xl md:leading-normal">
            NeuroConexão, a plataforma que impulsiona a empregabilidade para
            pessoas neurodiversas
          </p>
          <Button
            name="Conecte-se"
            href="/conexao"
            className="bg-transparent w-32 border-white border-solid border-2 text-white  rounded-xl p-1 mt-20 text-center font-bold hover:bg-secondary "
          />
        </div>
      </GridContainer>
      <div className="h-96 flex justify-evenly items-center gap-4 bg-white p-4">
        <div className=" w-1/3 h-40 bg-tertiary text-black text-2xl grid place-items-center ">
        "Muitas vezes o processo de exclusão começa na porta das empresas, que perdem talentos ainda no processo seletivo, justamente por conduzi-lo de forma não inclusiva"
        </div>
        <div className="w-1/3 h-40 bg-tertiary text-black text-2xl grid place-items-center ">
        “A diversidade vence: como a inclusão é importante”, produzido pela McKinsey em 2020, as equipes neurodivergentes superam as homogêneas em 36%, em termos de rentabilidade.
        </div>
        <div className="w-1/3 h-40 bg-tertiary text-black text-2xl grid place-items-center ">
          A pesquisa da McKinsey indica que empresas mais diversas têm 21% mais chances de alcançar rentabilidade acima da média de mercado, destacando o impacto positivo da diversidade nos resultados financeiros das organizações.
        </div>
        
      </div>
      <GridContainer className="flex flex-col gap-7 justify-center items-center  h-screen md:flex-row ">
        <div className="md:w-1/2">
          <Image
            src="/home-img/squad14.png"
            alt="grupo de pessoas"
            width={600}
            height={600}
            className=" w-195 md:w-auto "
          />
        </div>

        <div className="md:w-1/2">
          <p className="font-normal text-4xl leading-normal text-slate-100  md:text-5xl md:leading-normal">
          Nossa missão é criar oportunidades e conexões significativas, promovendo um ambiente de trabalho inclusivo. 
          </p>
          <Button
            name="Conecte-se"
            href="/conexao"
            className="bg-transparent border-white border-solid border-2 text-white w-32 rounded-xl p-1 mt-20 text-center font-bold hover:bg-secondary "
          />
        </div>
      </GridContainer>
    </div>
  );
}
