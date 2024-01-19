import Button from "@/components/button/Button";
import GridContainer from "@/components/grid/GridContainer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-primary">
      <GridContainer className="flex gap-7 justify-center items-center  h-screen ">
        <Image
          src="/home-img/heroImage.png"
          alt="grupo de pessoas"
          width={500}
          height={600}
        />

        <div>
          <p className="font-normal text-5xl text-slate-100 leading-normal">
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
