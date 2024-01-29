"use client";
import React, { useState } from "react";
import { object, string } from "zod";

import ButtonForm from "../button/ButtonForm";

const neurodiversoFormSchema = object({
  nome: string().min(3, {
    message: "Campo Obrigatório",
  }),
  cpf: string().length(11, { message: "O CPF deve ter 11 dígitos" }),
  dataNascimento: string().refine(
    value => {
      const dateOfBirth = new Date(value);
      const today = new Date();
      const age = today.getFullYear() - dateOfBirth.getFullYear();

      return age >= 18;
    },
    {
      message: "Você deve ter no mínimo 18 anos de idade",
      path: ["dataNascimento"],
    }
  ),
  neurodiversidade: string().min(3, {
    message: "Campo Obrigatório",
  }),
  email: string().email({
    message: "Por favor, insira um e-mail válido",
  }),
  senha: string().min(6, {
    message: "A senha deve ter no mínimo 6 caracteres",
  }),
  repeat_senha: string()
    .min(6)
    .refine((value, context) => value === context["senha"], {
      message: "A confirmação de senha deve ser igual à senha",
      path: ["repeat_senha"],
    }),
  telefone: string().length(11, {
    message: "Digite apenas os números exemplo: 61998742544",
  }),
});

function CadastroNeurodiverso() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    neurodiversidade: "",
    email: "",
    senha: "",
    repeat_senha: "",
    telefone: "",
  });
  const [errors, setErrors] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    neurodiversidade: "",
    email: "",
    senha: "",
    repeat_senha: "",
    telefone: "",
  });

  const [formValid, setFormValid] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(newFormData);

    try {
      neurodiversoFormSchema
        .pick({ [name]: neurodiversoFormSchema.shape[name] })
        .parse({ [name]: value });
      setErrors(prevErrors => ({ ...prevErrors, [name]: "" }));
    } catch (error) {
      const errorMessage = error.errors?.[0]?.message || "";
      setErrors(prevErrors => ({ ...prevErrors, [name]: errorMessage }));
    }

    if (name === "senha") {
      if (value !== newFormData.repeat_senha) {
        setErrors(prevErrors => ({
          ...prevErrors,
          repeat_senha: "Senha não confere",
        }));
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          repeat_senha: "",
        }));
      }
    } else if (name === "repeat_senha") {
      if (value !== newFormData.senha) {
        setErrors(prevErrors => ({
          ...prevErrors,
          repeat_senha: "Senha não confere",
        }));
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          repeat_senha: "",
        }));
      }
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
      const response = await fetch("http://localhost:8080/neurodiversos/save", {
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
            Cadastro Neurodiverso
          </h3>
          <div className="bg-white shadow-md rounded-md mb-10">
            <form onSubmit={handleSubmit} className="cadastro-form p-7">
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
                  required
                />
                {errors.nome && (
                  <span className="text-red-600 text-xs">{errors.nome}</span>
                )}
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
                  required
                />
                {errors.cpf && (
                  <span className="text-red-600 text-xs">{errors.cpf}</span>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">
                  Data de Nascimento
                </label>
                <input
                  type="date"
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleChange}
                  placeholder="XX/XX/XXXX"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
                {errors.dataNascimento && (
                  <span className="text-red-600 text-xs">
                    {errors.dataNascimento}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">
                  Neurodiversidade <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="neurodiversidade"
                  value={formData.neurodiversidade}
                  onChange={handleChange}
                  placeholder="Insira sua neurodiversidade aqui"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
                {errors.neurodiversidade && (
                  <span className="text-red-600 text-xs">
                    {errors.neurodiversidade}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">
                  Telefone <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="Insira seu telefone"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
                {errors.telefone && (
                  <span className="text-red-600 text-xs">
                    {errors.telefone}
                  </span>
                )}
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
                  required
                />
                {errors.email && (
                  <span className="text-red-600 text-xs">{errors.email}</span>
                )}
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
                  required
                />
                {errors.senha && (
                  <span className="text-red-600 text-xs">{errors.senha}</span>
                )}
                <label className="block mt-2 text-gray-600">
                  Confirmar senha <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="repeat_senha"
                  value={formData.repeat_senha}
                  onChange={handleChange}
                  placeholder="Confirme sua senha"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  autoComplete="new-password"
                  required
                />
                {errors.passwordMatchError && (
                  <span className="text-red-600 text-xs">
                    {errors.passwordMatchError}
                  </span>
                )}
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
}
export default CadastroNeurodiverso;
