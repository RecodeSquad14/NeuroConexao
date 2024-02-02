"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="text-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-32">
            <div className="flex items-center">
              <div className="flex-shrink-0 ">
                <Link
                  href="/"
                  className="text-black flex items-center justify-center gap-3"
                >
                  <Image
                    src="/logopurple.png"
                    alt="logo"
                    width={50}
                    height={55}
                  />
                  <p className="font-semibold">NeuroConexão</p>
                </Link>
              </div>
            </div>
            <div className=" hidden md:block ">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href="/"
                  className="text-black hover:bg-primary  hover:text-white  rounded-lg p-2"
                >
                  Inicio
                </Link>
                <Link
                  href="/conexao"
                  className="text-black hover:bg-primary  hover:text-white  rounded-lg p-2"
                >
                  Conexão
                </Link>
                <Link
                  href="/vagas"
                  className="text-black hover:bg-primary  hover:text-white  rounded-lg p-2"
                >
                  Vagas
                </Link>
                <Link
                  href="/sobre"
                  className="text-black hover:bg-primary hover:text-white  rounded-lg p-2"
                >
                  Sobre Nós
                </Link>

                <Link
                  href="/login"
                  className="text-black hover:bg-primary hover:text-white  rounded-lg p-2 flex items-center gap-1"
                >
                  <Image
                    src="/loginIcon.svg"
                    alt="login icon"
                    width={20}
                    height={20}
                  ></Image>
                  Login
                </Link>
              </div>
            </div>
            <div className=" block md:hidden items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white
                 hover:text-white focus outline-none 
                 focus:ring-2 focus:ring-inset focus:ring-white
              "
                onClick={toggleNavbar}
              >
                {!isClick ? (
                  <Image
                    src="/burgerMenu.svg"
                    alt="menu"
                    width={25}
                    height={25}
                  />
                ) : (
                  <Image src="/close.svg" alt="menu" width={25} height={25} />
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="block">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-black block hover:bg-primary hover:text-white rounded-lg p-2"
              >
                Inicio
              </Link>
              <Link
                href="/conexao"
                className="text-black block hover:bg-primary  hover:text-white rounded-lg p-2"
              >
                Conexão
              </Link>
              <Link
                href="/vagas"
                className="text-black block hover:bg-primary  hover:text-white rounded-lg p-2"
              >
                Vagas
              </Link>
              <Link
                href="/sobre"
                className="text-black block hover:bg-primary  hover:text-white rounded-lg p-2"
              >
                Sobre Nós
              </Link>

              <Link
                href="/login"
                className="text-black block hover:bg-primary  hover:text-white rounded-lg p-2"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
