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
          neuridoversos golpistas?
        </div>
        <div className="w-1/3 h-40 bg-tertiary text-black text-2xl grid place-items-center ">
          informaçoes sobre desemprego
        </div>
        <div className="w-1/3 h-40 bg-tertiary text-black text-2xl grid place-items-center ">
          outro tópico pra encher linguiça
        </div>
      </div>
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
            className="bg-transparent border-white border-solid border-2 text-white w-32 rounded-xl p-1 mt-20 text-center font-bold hover:bg-secondary "
          />
        </div>
      </GridContainer>
    </div>
  );
}
