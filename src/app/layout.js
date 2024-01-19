import "../styles/globals.css";
import Header from "@/components/header/Header";
import { Epilogue } from "next/font/google";

import Footer from "@/components/footer/Footer";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: "NeuroConexão",
  description: "Site de inclusão neurodiversa ao mercado de trabalho",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={epilogue.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
