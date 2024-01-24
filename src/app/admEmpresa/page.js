import React from "react";
import Button from "@/components/button/Button";
import GridContainer from "@/components/grid/GridContainer";

function page() {
  return (
    <div className="h-screen bg-primary">
      <GridContainer>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl mb-10 mt-10">Administração de Empresas</h2>
          <Button
            href="/formularioProfissional"
            className="bg-green-500 hover:bg-green-700 text-white px-2 py-1 rounded"
            name="Adicionar Empresa"
          ></Button>
        </div>

        <table class="w-full table-auto">
          <thead>
            <tr>
              <th class="bg-gray-200 border text-left px-4 py-2">Nome</th>
              <th class="bg-gray-200 border text-left px-4 py-2">CPF</th>
              <th class="bg-gray-200 border text-left px-4 py-2">
                Área de Atuação
              </th>
              <th class="bg-gray-200 border text-left px-4 py-2">CRP</th>
              <th class="bg-gray-200 border text-left px-4 py-2">Email</th>
              <th class="bg-gray-200 border text-left px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-4 py-2">Nome 1</td>
              <td class="border px-4 py-2">CPF 1</td>
              <td class="border px-4 py-2">Área 1</td>
              <td class="border px-4 py-2">CRP 1</td>
              <td class="border px-4 py-2">email1@example.com</td>
              <td class="border px-4 py-2 flex space-x-2">
                <Button
                  href="#"
                  name="Atualizar"
                  className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded"
                >
                  Atualizar
                </Button>
                <Button
                  href="#"
                  name="Excluir"
                  className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded"
                >
                  Excluir
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </GridContainer>
    </div>
  );
}

export default page;
