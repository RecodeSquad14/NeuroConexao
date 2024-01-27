import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-black24 h-56 p-4 flex flex-col items-center justify-center">
      <div className="grid place-items-center">
        <Image src="/logopurple.png" alt="logo" width={50} height={50} />
        <p className="text-footertext">NeuroConexão</p>
      </div>
      <p className="text-footertext">&copy;2024 NeuroConexão.</p>
    </footer>
  );
}

export default Footer;
