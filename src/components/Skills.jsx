import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import CardTechnologies from "./_CardTechnologies";
import TextAnimationSkills from "./_TextAnimationSkills";

const Skills = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

  return (
    <section
      id="skills"
      className={`pt-32 pb-20 min-h-screen ${isDarkMode
        ? "bg-gradient-to-b from-[#101828] to-[#1A8A51]"
        : "bg-gradient-to-b from-[#f5f6f6] to-[#1A8A51]"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-8 md:px-16">
        {/* Título da Seção */}
        <h2
          className={`text-5xl md:text-7xl font-bold mb-12 text-center caveat ${isDarkMode ? "text-green-400" : "text-[#1A8A51]"
            }`}
          data-aos="zoom-out-up"
          data-aos-duration="2000"
        >
          {t("skills")}
        </h2>

        {/* Animação de Textos Passando */}
        <TextAnimationSkills />

        {/* Componente CardTechnologies com isDarkMode passado como prop */}
        <CardTechnologies isDarkMode={isDarkMode} />
      </div>
    </section>
  );
};

export default Skills;
