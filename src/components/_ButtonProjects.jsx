import React from "react";
import { FaGithub } from "react-icons/fa";

const ButtonProjects = ({ githubLink, linkView, isDarkMode, t }) => {
    return (
        <div className="flex space-x-4" >
            {/* Botão do GitHub */}
            <a
                href={githubLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-4xl hover:text-[#1A8A51] transition-colors duration-300 ${isDarkMode ? "text-[#bcf6d7]" : "text-[#bcf6d7]"
                    } ${!githubLink ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={!githubLink ? (e) => e.preventDefault() : undefined}
            >
                <FaGithub />
            </a>

            {/* Botão "Ver Projeto" */}
            <a
                href={linkView} // Usando linkView passado como prop
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-400 text-primary-950 px-4 py-2 rounded-lg hover:bg-green-500 transition-colors"
            >
                {t("viewProject")}
            </a>
        </div>
    );
};

export default ButtonProjects;