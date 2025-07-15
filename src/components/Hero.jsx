import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiDesktopMouse2 } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

  React.useEffect(() => {
    AOS.init();
    AOS.refresh(); // Reinicializa AOS após a mudança de tema
  }, [isDarkMode]);

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gradient-to-b from-[#1A8A51] to-[#101828]' : 'bg-gradient-to-b from-[#1A8A51] to-[#f9fefa]'} text-white`}
    >
      <div className="text-center">
        {/* Texto principal */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in lato-thin" data-aos="zoom-in" data-aos-duration="2000">
          {t("heroTitle")}
        </h1>
        <p className={`caveat text-2xl md:text-4xl mb-8 animate-fade-in animate-delay-1 ${isDarkMode ? 'text-[#f9fefa]' : 'text-[#1A8A51]'}`} data-aos="zoom-in" data-aos-duration="3000">
          {t("heroText")}
        </p>

        {/* Ícones do GitHub e LinkedIn */}
        <div className="flex justify-center space-x-6 animate-fade-in animate-delay-2">
          <a
            href="https://github.com/JorgeCasalini"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-4xl hover:text-[#1A8A51] transition-colors duration-300 ${isDarkMode ? 'text-[#f9fefa]' : 'text-[#f9fefa]'}`}
            data-aos="flip-right" data-aos-duration="2000">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jorgecasalini"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-4xl hover:text-[#1A8A51] transition-colors duration-300 ${isDarkMode ? 'text-[#f9fefa]' : 'text-[#f9fefa]'}`}
            data-aos="flip-left" data-aos-duration="2000">
            <FaLinkedin />
          </a>
        </div>
        <div className={`mt-12 flex flex-col items-center justify-center animate-bounce ${isDarkMode ? 'text-[#f9fefa]' : 'text-[#1A8A51]'}`}>
          <CiDesktopMouse2 className="text-4xl" />
          <p className="mt-2 text-lg lato-thin">
            {t("heroMouseText")}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
