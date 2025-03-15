import React from "react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();

  // Função para obter o ano atual
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer
      className={`py-6 text-center border-t ${isDarkMode ? "border-gray-800 bg-primary-950 text-white" : "border-gray-200 bg-[#ddfbeb] text-gray-800"}`}
    >
      <div className="container mx-auto px-4">
        <p className="text-sm lato-thin">
        © {getCurrentYear()} Todos os direitos reservados a Jorge Casalini.
        </p>
      </div>
    </footer>
  );
};

export default Footer;