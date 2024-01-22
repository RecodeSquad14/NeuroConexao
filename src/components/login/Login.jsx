import Link from "next/link";
import React from "react";

function Login() {
  return (
    <div class="max-w-md relative flex flex-col p-4 rounded-md text-black bg-slate-100 ">
      <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
        Bem vindo ao <span class="text-primary">NeuroConexão</span>
      </div>
      <div class="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
        Faça seu login
      </div>
      <form class="flex flex-col gap-3">
        <div class="block relative">
          <label
            for="email"
            class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
          />
        </div>
        <div class="block relative">
          <label
            for="password"
            class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Senha
          </label>
          <input
            type="text"
            id="password"
            class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          />
        </div>
        <button
          type="submit"
          class="bg-primary w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
        >
          Entrar
        </button>
      </form>
      <div class="text-sm text-center mt-[1.6rem]">
        Não criou sua conta?{" "}
        <Link className="text-sm text-secondary" href="#">
          Crie de graça!
        </Link>
      </div>
    </div>
  );
}

export default Login;
