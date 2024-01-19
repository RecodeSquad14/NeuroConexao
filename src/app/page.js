import Button from "@/components/button/Button";
import GridContainer from "@/components/grid/GridContainer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-primary">
      <GridContainer className="flex gap-7 justify-center items-center mt-1 h-screen ">
        <Image
          src="/home-img/heroImage.png"
          alt="grupo de pessoas"
          width={500}
          height={600}
        />

        <div>
          <p className="font-semibold text-6xl ">
            Buscando conectar a neurodiversidade à alguma coisa
          </p>
          <Button
            name="Conecte-se"
            href="#"
            className="bg-white text-black w-32 rounded-lg p-1 mt-20 text-center font-bold hover:bg-slate-300 "
          />
        </div>
      </GridContainer>
      
    </div>
    
  );
}
