import React from "react";

function CardVagas({ title, description }) {
  return (
    <div className="flex flex-col justify-evenly items-center h-60 p-4 w-300 bg-secondary rounded-md shadow-2xl shadow-indigo-500">
      <h2 className="font-bold text-slate-100 text-lg">{title}</h2>
      <p>{description}</p>
      <button className="bg-transparent w-32 border-white border-solid border-2 text-white  rounded-xl p-1  text-center font-bold hover:bg-footertext">
        Candidatar
      </button>
    </div>
  );
}
export default CardVagas;
