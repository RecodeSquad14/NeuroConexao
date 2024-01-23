import React from "react";

function CardInfo({ text }) {
  return (
    <div className="h-52 w-400 p-2 bg-secondary text-black text-center grid place-items-center rounded-md">
      {text}
    </div>
  );
}

export default CardInfo;
