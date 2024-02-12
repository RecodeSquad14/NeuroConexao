"use client";
import React, { useState } from "react";
import ButtonForm from "../button/ButtonForm";

const CadastroProfissional = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    areaAtuacao: "",
    crp: "",
    email: "",
    senha: "",
  });

  const [errors, setErrors] = useState({});

  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    try {

      profissionalFormSchema.pick({ [name]: profissionalFormSchema.shape[name] }).parse({ [name]: value });

      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } catch (error) {
      const errorMessage = error.errors?.[0]?.message || "";
      setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
    }

    validateForm();
  };
  const validateForm = () => {
    const formErrors = Object.values(errors).filter(error => error !== "");
    setFormValid(formErrors.length === 0);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/profissionais/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.location.replace("/");
      } else {
        console.error("Erro ao cadastrar o pacote:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao cadastrar o pacote:", error);
    }
  };

  return (
    <div className="wrapper bg-primary">
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md">
          <h3
            style={{ marginTop: "20px" }}
            className="text-2xl font-bold mb-6 text-center"
          >
            Cadastro Profissional
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
                  placeholder="Insira seu nome"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">
                  Cpf <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  placeholder="Insira seu cpf"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mt-2 text-gray-600">
                  Área de atuação
                </label>
                <input
                  type="text"
                  name="areaAtuacao"
                  value={formData.areaAtuacao}
                  onChange={handleChange}
                  placeholder="área de atuação"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">
                  Crp <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="crp"
                  value={formData.crp}
                  onChange={handleChange}
                  placeholder="Insira seu crp aqui"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seuemail@exemplo.com"
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
                  placeholder="Insira sua senha"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  autoComplete="new-password"
                />
                <label className="block mt-2 text-gray-600">
                  Confirmar senha <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="confirmarSenha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  placeholder="Confirme sua senha"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  autoComplete="new-password"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2 text-right">
                <span className="text-red-500">*</span> campos obrigatórios
              </p>
              <ButtonForm
                type="submit"
                name="Cadastrar"
                className="mx-auto bg-black text-white w-32 h-10 rounded-lg p-2 mt-20 mb-4 
              text-center hover:bg-gray-700 focus:outline-none"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroProfissional;
