import CardVagas from "@/components/cardVagas/CardVagas";
import GridContainer from "@/components/grid/GridContainer";
import React from "react";

function page() {
  return (
    <div className="bg-primary h-auto md:h-screen grid place-items-center p-4">
      <h1 className="text-slate-100 text-5xl">Vagas Disponíveis </h1>
      <GridContainer className=" h-auto  flex flex-wrap items-center gap-4 p-2 justify-center mt-3">
        <CardVagas
          title="Desenvolvedor Frontend"
          description="Responsável pelo desenvolvimento de soluções em react.js usando tailwind"
        />
        <CardVagas
          title="Desenvolvedor Backend"
          description="Responsável pelo desenvolvimento de soluções em java usando Spring"
        />
        <CardVagas
          title="UI/UX design"
          description="Responsável pelo desenvolvimento de interfaces responsivas seguindo todos os padrões de acessibilidade"
        />
        <CardVagas
          title="UI/UX design"
          description="Responsável pelo desenvolvimento de interfaces responsivas seguindo todos os padrões de acessibilidade"
        />
        <CardVagas
          title="UI/UX design"
          description="Responsável pelo desenvolvimento de interfaces responsivas seguindo todos os padrões de acessibilidade"
        />
        <CardVagas
          title="UI/UX design"
          description="Responsável pelo desenvolvimento de interfaces responsivas seguindo todos os padrões de acessibilidade"
        />
      </GridContainer>
    </div>
  );
}

export default page;
