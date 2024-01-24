import Button from "@/components/button/Button";
import GridContainer from "@/components/grid/GridContainer";
import React from "react";

function page() {
  return (
    <div>
      <GridContainer className="h-screen flex-col items-center justify-center mt-14">
        <h1 className="text-center text-3xl mt-10">Área administrativa</h1>
        <div className="flex justify-evenly items-center mt-10">
          <div>
            <Button
              href="/admEmpresa"
              className="bg-secondary w-auto p-2 rounded-md hover:bg-tertiary"
              name="Cadastro de Empresas"
            />
          </div>
          <div>
            <Button
              href="/admProfissional"
              className="bg-secondary w-auto p-2 rounded-md  hover:bg-tertiary"
              name="Cadastro de Profissionais"
            />
          </div>
        </div>
      </GridContainer>
    </div>
  );
}

export default page;
