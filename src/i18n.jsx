// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Arquivos de tradução
import translationPT from "./locales/translationPT.json";
import translationES from "./locales/translationAR.json";

i18n
  .use(LanguageDetector) // Detecta o idioma do navegador
  .use(initReactI18next) // Inicializa o i18next para React
  .init({
    resources: {
      pt: {
        translation: translationPT, // Traduções em português
      },
      es: {
        translation: translationES, // Traduções em espanhol
      },
    },
    fallbackLng: "pt", // Idioma padrão
    interpolation: {
      escapeValue: false, // Permite o uso de HTML nas traduções
    },
  });

export default i18n;