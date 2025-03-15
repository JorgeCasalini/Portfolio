import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  const form = useRef();

  // Função para enviar o e-mail
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1iq9dxq", // Substitua pelo seu Service ID do EmailJS
        "template_ten4v5f", // Substitua pelo seu Template ID do EmailJS
        form.current,
        "eSimdhT2nEaL_mUe5" // Substitua pelo seu User ID do EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensagem enviada com sucesso!"); // Feedback para o usuário
        },
        (error) => {
          console.log(error.text);
          alert("Ocorreu um erro ao enviar a mensagem. Tente novamente."); // Feedback para o usuário
        }
      );

    // Limpa o formulário após o envio
    e.target.reset();
  };

  return (
    <section
  id="contato"
  className={`pt-32 pb-20 min-h-screen ${isDarkMode ? "bg-gradient-to-b from-[#101828] to-[#1A8A51]" : "bg-gradient-to-b from-[#FFFFFF] to-[#1A8A51]"
    }`}
>
  <div className="container mx-auto px-4 sm:px-8 md:px-16">
    {/* Título da Seção */}
    <h2 className={`text-5xl md:text-7xl font-bold mb-12 text-center caveat ${isDarkMode ? "text-green-400" : "text-[#1A8A51]"}`} data-aos="zoom-out-up" data-aos-duration="2000">
      {t("contact")}
    </h2>

    {/* Formulário de Contato */}
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full space-y-6 lato-thin"
    >
      {/* Campo Nome */}
      <div>
        <label
          htmlFor="name"
          className={`block text-lg font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}
        >
          {t("nameContact")}
        </label>
        <input
          type="text"
          id="name"
          name="user_name"
          required
          className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none focus:border-2 focus:border-green-400 rounded-xl ${isDarkMode ? "border-green-400 text-white" : "border-green-400 text-gray-800"
            }`}
        />
      </div>

      {/* Campo E-mail */}
      <div>
        <label
          htmlFor="email"
          className={`block text-lg font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}
        >
          {t("emailContact")}
        </label>
        <input
          type="email"
          id="email"
          name="user_email"
          required
          className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none focus:border-2 focus:border-green-400 rounded-xl ${isDarkMode ? "border-green-400 text-white" : "border-green-400 text-gray-800"
            }`}
        />
      </div>

      {/* Campo Assunto */}
      <div>
        <label
          htmlFor="subject"
          className={`block text-lg font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}
        >
          {t("subjectContact")}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none focus:border-2 focus:border-green-400 rounded-xl ${isDarkMode ? "border-green-400 text-white" : "border-green-400 text-gray-800"
            }`}
        />
      </div>

      {/* Campo Mensagem */}
      <div>
        <label
          htmlFor="message"
          className={`block text-lg font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}
        >
          {t("messageContact")}
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none focus:border-2 focus:border-green-400 rounded-xl ${isDarkMode ? "border-green-400 text-white" : "border-green-400 text-gray-800"
            }`}
        />
      </div>

      {/* Botão de Envio */}
      <div className="text-center lato-thin">
        <button
          type="submit"
          className="bg-green-400 text-primary-950 px-6 py-3 rounded-lg hover:bg-green-500 transition-colors"
        >
          {t("sendMessageContact")}
        </button>
      </div>
    </form>
  </div>
</section>
  );
};

export default Contact;