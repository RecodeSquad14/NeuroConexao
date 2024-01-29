"use client";
import React, { useState } from "react";
import ButtonForm from "../button/ButtonForm";

const CadastroEmpresa = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cnpj: "",
    endereco: "",
    emailCorporativo: "",
    senha: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // add API
    console.log("Dados do formulário:", formData);
  };

  return (
    <div className="wrapper bg-primary">
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md">
          <h3
            style={{ marginTop: "20px" }}
            className="text-2xl font-bold mb-6 text-center"
          >
            Cadastro Empresa
          </h3>
          <div className="bg-white shadow-md rounded-md p-6">
            <form onSubmit={handleSubmit} className="cadastro-form">
              <div className="mb-4">
                <label className="block text-gray-600">
                  Nome <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Insira o nome da empresa"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">
                  CNPJ <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="cnpj"
                  value={formData.cpf}
                  onChange={handleChange}
                  placeholder="Insira o CNPJ"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">
                  E-mail Corporativo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="emailCorporativo"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@exemplo.com"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">
                  Senha <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  placeholder="Insira a senha"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  autoComplete="new-password"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2 text-right">
                <span className="text-red-500">*</span> campos obrigatórios
              </p>
              <ButtonForm
                name="Cadastrar"
                type="submit"
                className="mx-auto bg-black text-white w-32 h-10 rounded-lg cursor-pointer p-2 mt-20 mb-4
              text-center hover:bg-gray-700 focus:outline-none"
              >
                Cadastrar
              </ButtonForm>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroEmpresa;
