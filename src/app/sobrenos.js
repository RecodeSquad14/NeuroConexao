import Button from "@/components/button/Button";
import GridContainer from "@/components/grid/GridContainer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-primary">
      <GridContainer className="flex gap-7 justify-center items-center  h-screen ">
        <Image
          src="/home-img/"
          alt="grupo de pessoas"
          width={500}
          height={600}
        />

        <div>
          <p className="font-normal text-5xl text-slate-100 leading-normal">
          Sobre Nós - NeuroConexão
História: A NeuroConexão nasceu da ideia por criar oportunidades e promover a inclusão no mercado de trabalho para pessoas neurodiversas. Identificamos uma lacuna significativa nesse cenário e nos inspiramos a preenchê-la, destacando-nos como uma plataforma dedicada e comprometida com a diversidade.
Formação: Somos liderados por uma equipe dedicada e diversificada que faz parte do bootcamp 2023 da RECODE PRO, representando o Squad 14. Nossos antecedentes variados e a experiência adquirida moldam uma liderança que acredita profundamente na capacidade de transformar o mundo corporativo por meio da inclusão.
Evolução da Empresa: Desde o início, enfrentamos obstáculos desafiadores, como comunicação e divergências de ideias. No entanto, cada obstáculo se tornou uma oportunidade para crescer e aprimorar nosso projeto. Estamos constantemente evoluindo, aprendendo com cada desafio, e hoje, orgulhamo-nos de oferecer uma plataforma cheia de personalidade e cumprindo seu papel.
Missão e Visão: A NeuroConexão tem como missão principal resolver o desafio da empregabilidade para pessoas neurodiversas, criando um ambiente inclusivo tanto para empresas quanto para profissionais. Acreditamos que a diversidade é a força propulsora de um futuro mais promissor e, com a ajuda de profissionais da saúde, estamos caminhando para um mercado de trabalho mais inclusivo.
Compromisso com a Diversidade: Comprometemo-nos não apenas a fornecer soluções inovadoras, mas também a criar um ambiente que celebre as diferenças.
Ao escolher a NeuroConexão, você não apenas investe em uma plataforma de empregabilidade, mas se junta a uma comunidade determinada a construir um futuro onde todos tenham oportunidades. Juntos, estamos transformando o mundo do trabalho, um passo inclusivo de cada vez.
          </p>
          <Button
            name="Conecte-se"
            href="/conexao"
            className="bg-transparent border-white border-solid border-2 text-white w-32 rounded-xl p-1 mt-20 text-center font-bold hover:bg-secondary "
          />
        </div>
      </GridContainer>
  );
}