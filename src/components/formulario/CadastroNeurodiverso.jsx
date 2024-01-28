"use client";
import React, { useState } from "react";
import { object, string } from "zod";

import { IMaskInput } from "react-imask";
import Button from "../button/Button";
import ButtonForm from "../button/ButtonForm";

const telRegex = RegExp(
  "^\\([1-9]{2}\\) (?:[2-8]|9[0-9])[0-9]{3}\\-[0-9]{4}$",
  "gm"
);

const neurodiversoFormSchema = object({
  floating_nome: string().min(3, {
    message: "Campo Obrigatório",
  }),
  floating_cpf: string().length(11, { message: "O CPF deve ter 11 dígitos" }),
  floating_birth_date: string().refine(
    value => {
      const dateOfBirth = new Date(value);
      const today = new Date();
      const age = today.getFullYear() - dateOfBirth.getFullYear();

      return age >= 18;
    },
    {
      message: "Você deve ter no mínimo 18 anos de idade",
      path: ["floating_birth_date"],
    }
  ),
  floating_divergencia: string().min(3, {
    message: "Campo Obrigatório",
  }),
  floating_email: string().email({
    message: "Por favor, insira um e-mail válido",
  }),
  floating_senha: string().min(6, {
    message: "A senha deve ter no mínimo 6 caracteres",
  }),
  floating_repeat_senha: string()
    .min(6)
    .refine((value, { floating_senha }) => value === floating_senha, {
      message: "A confirmação de senha deve ser igual à senha",
      path: ["floating_repeat_senha"],
    }),
  floating_telefone: string().regex(telRegex, {
    message: "Por favor, insira um telefone válido",
  }),
});

function CadastroNeurodiverso() {
  const [formData, setFormData] = useState({
    floating_nome: "",
    floating_cpf: "",
    floating_birth_date: "",
    floating_divergencia: "",
    floating_email: "",
    floating_senha: "",
    floating_repeat_senha: "",
    floating_telefone: "",
  });
  const [errors, setErrors] = useState({
    floating_nome: "",
    floating_cpf: "",
    floating_birth_date: "",
    floating_divergencia: "",
    floating_email: "",
    floating_senha: "",
    floating_repeat_senha: "",
    floating_telefone: "",
  });

  const [formValid, setFormValid] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
    console.log(value);
    try {
      neurodiversoFormSchema
        .pick({ [name]: neurodiversoFormSchema.shape[name] })
        .parse({ [name]: value });
      setErrors(prevErrors => ({ ...prevErrors, [name]: "" }));
    } catch (error) {
      const errorMessage = error.errors?.[0]?.message || "";
      console.log(errorMessage);
      setErrors(prevErrors => ({ ...prevErrors, [name]: errorMessage }));
    }

    if (name === "floating_repeat_senha") {
      if (value !== formData.floating_senha) {
        setErrors(prevErrors => ({
          ...prevErrors,
          passwordMatchError: "Senha não confere",
        }));
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          passwordMatchError: "",
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
      const response = await fetch("http://localhost:8080/neurodiverso/save", {
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
                  name="floating_nome"
                  value={formData.floating_nome}
                  onChange={handleChange}
                  placeholder="Insira seu nome"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
                {errors.floating_nome && (
                  <span className="text-red-600 text-xs">
                    {errors.floating_nome}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">
                  Cpf <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="floating_cpf"
                  value={formData.floating_cpf}
                  onChange={handleChange}
                  placeholder="Insira seu cpf"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
                {errors.floating_cpf && (
                  <span className="text-red-600 text-xs">
                    {errors.floating_cpf}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">
                  Data de Nascimento
                </label>
                <input
                  type="date"
                  name="floating_birth_date"
                  value={formData.floating_birth_date}
                  onChange={handleChange}
                  placeholder="XX/XX/XXXX"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
                {errors.floating_birth_date && (
                  <span className="text-red-600 text-xs">
                    {errors.floating_birth_date}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">
                  Divergencia <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="floating_divergencia"
                  value={formData.floating_divergencia}
                  onChange={handleChange}
                  placeholder="Insira sua divergencia aqui"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
                {errors.floating_divergencia && (
                  <span className="text-red-600 text-xs">
                    {errors.floating_divergencia}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">
                  Telefone <span className="text-red-500">*</span>
                </label>
                <IMaskInput
                  type="tel"
                  name="floating_telefone"
                  mask="(00) 00000-0000"
                  value={formData.floating_telefone}
                  onChange={handleChange}
                  placeholder="Insira seu telefone"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
                {errors.floating_telefone && (
                  <span className="text-red-600 text-xs">
                    {errors.floating_telefone}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="floating_email"
                  value={formData.floating_email}
                  onChange={handleChange}
                  placeholder="seuemail@exemplo.com"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
                {errors.floating_email && (
                  <span className="text-red-600 text-xs">
                    {errors.floating_email}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">
                  Senha <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="floating_senha"
                  value={formData.floating_senha}
                  onChange={handleChange}
                  placeholder="Insira sua senha"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  autoComplete="new-password"
                  required
                />
                {errors.floating_senha && (
                  <span className="text-red-600 text-xs">
                    {errors.floating_senha}
                  </span>
                )}
                <label className="block mt-2 text-gray-600">
                  Confirmar senha <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="floating_repeat_senha"
                  value={formData.floating_repeat_senha}
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
