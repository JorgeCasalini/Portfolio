import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const { isDarkMode, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu

    const toggleLanguage = () => {
        const newLanguage = i18n.language === "pt" ? "es" : "pt";
        i18n.changeLanguage(newLanguage);
    };

    return (
        <nav id=" " className="bg-primary-950 p-4 shadow-lg fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-primary-50">
                    <a href="# "><img src="/img/Logo.png" alt="Logo" className="w-12 h-12"/></a>
                </div>

                {/* Links de Navegação (visíveis em telas maiores que 639px) */}
                <ul className="hidden sm:flex space-x-6 lato-thin">
                    <li>
                        <a
                            href="#sobre"
                            className="text-primary-50 hover:text-primary-300 underline-animation"
                        >
                            {t("aboutTitle")}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projetos"
                            className="text-primary-50 hover:text-primary-300 underline-animation"
                        >
                            {t("projects")}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className="text-primary-50 hover:text-primary-300 underline-animation"
                        >
                            {t("skills")}
                        </a>
                    </li>
                </ul>

                {/* Seletor de Idioma e Botão de Tema */}
                <div className="flex items-center space-x-4">
                    {/* Seletor de Idioma (Bandeira) */}
                    <button
                        onClick={toggleLanguage}
                        className="text-primary-50 hover:text-primary-300"
                    >
                        <img
                            src={i18n.language === "pt" ? "/img/brasil.png" : "/img/argentina.png"}
                            alt={i18n.language === "pt" ? "Bandeira Brasil" : "Bandeira Argentina"}
                            className="w-6 h-6"
                        />
                    </button>

                    {/* Botão de Tema (Modo Claro/Escuro) */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 bg-primary-600 text-primary-50 rounded-lg hover:bg-primary-700 transition-colors"
                    >
                        {isDarkMode ? "🌙" : "☀️"}
                    </button>

                    {/* Botão de Menu (visível em telas menores que 639px) */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="sm:hidden p-2 bg-primary-600 text-primary-50 rounded-lg hover:bg-primary-700 transition-colors"
                    >
                        {isMenuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Menu de Links (visível em telas menores que 639px) */}
            {isMenuOpen && (
                <div className="sm:hidden fixed inset-0 z-40 flex justify-center mt-0.5">
                    {/* Overlay para fechar o menu ao clicar fora */}
                    <div
                        className="sm:hidden fixed inset-0 z-40 flex justify-center w-auto"
                        onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar fora
                    />

                    {/* Contêiner do Menu com Efeito de Desfoque */}
                    <div
                        className="bg-primary-950 bg-opacity-90 backdrop-blur-sm w-svh h-50 p-6 shadow-lg mt-17.5"
                        onClick={(e) => e.stopPropagation()} // Impede que o menu feche ao clicar nele
                    >
                        <ul className="flex flex-col items-center space-y-4">
                            <li>
                                <a
                                    href="#sobre"
                                    className="text-primary-50 hover:text-primary-300 underline-animation"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t("aboutTitle")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projetos"
                                    className="text-primary-50 hover:text-primary-300 underline-animation"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t("projects")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className="text-primary-50 hover:text-primary-300 underline-animation"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t("skills")}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;