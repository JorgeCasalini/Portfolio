import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import Card from "./_Card";

const Projects = ({ projects }) => {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  const [showAll, setShowAll] = useState(false);

  // Exibe apenas os primeiros 4 projetos inicialmente
  const visibleProjects = showAll ? projects : (projects || []).slice(0, 3);

  return (
    <section
      id="projetos"
      className={`pt-32 pb-20 min-h-screen ${isDarkMode ? "bg-gradient-to-b from-[#101828] to-[#1A8A51]" : "bg-gradient-to-b from-[#ffffff] to-[#1A8A51]"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-8 md:px-16" data-aos="fade-up-right" data-aos-duration="1500">
        {/* Título da Seção */}
        <h2 className={`text-5xl md:text-7xl font-bold mb-12 text-center caveat ${isDarkMode ? "text-green-400" : "text-[#1A8A51]"}`} data-aos="zoom-out-up" data-aos-duration="2000">
          {t("projects")}
        </h2>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className={`${isDarkMode ? "bg-primary-950" : "bg-white"} bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105`}
            >
              {/* Imagem do Projeto */}
              <img
                src={project.image}
                alt={t("projectTitle" + project.id)} // Usando a chave de tradução
                className="w-full h-48 object-cover"
              />

              {/* Card do Projeto */}
              <Card
                title={t("projectTitle" + project.id)}
                description={t("projectDes" + project.id)}
                linkView={project.linkView}
                githubLink={project.linkGitHub}
                isDarkMode={isDarkMode} // Passando isDarkMode como prop
                t={t} // Passando a função de tradução como prop
              />
            </div>
          ))}
        </div>

        {/* Botão "Ver Mais" */}
        {!showAll && projects && projects.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="bg-green-400 text-primary-950 px-6 py-3 rounded-lg hover:bg-green-500 transition-colors"
            >
              {t("viewMore")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;