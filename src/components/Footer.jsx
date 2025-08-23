import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { isDarkMode } = useTheme();
    const { t } = useTranslation();

    // Função para obter o ano atual
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <footer
            className={`py-6 text-center border-t ${isDarkMode ? "border-gray-800 bg-primary-950 text-white" : "border-gray-200 bg-[#dbe8e0] text-gray-800"}`}
        >
            <div className="container mx-auto px-4">
                <p className="text-sm lato-thin">
                    {getCurrentYear()} {t("footerText")}
                </p>
            </div>
        </footer>
    );
};

export default Footer;