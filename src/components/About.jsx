import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  return (
    <section
      id="sobre"
      className={`pt-32 pb-20 bg-primary-100 min-h-screen flex items-center 
            ${
              isDarkMode
                ? "bg-gradient-to-b from-[#101828] to-[#1A8A51]"
                : "bg-gradient-to-b from-[#ffffff] to-[#1A8A51]"
            }`}
    >
      <div className="container mx-auto px-4 sm:px-8 md:px-16 flex flex-col md:flex-row items-center justify-center">
        {/* Texto */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 text-center md:text-left">
          <h2
            className="text-7xl font-bold text-green-400 mb-6 caveat"
            data-aos="fade-up-right"
            data-aos-duration="2500"
          >
            {t("aboutTitle")}
          </h2>
          <p
            className="mb-10 text-primary-700 text-lg break-words text-start lato-thin "
            data-aos="fade-up-right"
            data-aos-duration="3000"
          >
            {t("aboutTextDev")} <br />
            {t("aboutTextCourse")} <br />
            {t("aboutTextInterested")} <br />
            {t("aboutTextSeeking")} <br />
          </p>
        </div>

        {/* Div com Foto */}
        <div
          className="w-full md:w-1/2 relative flex justify-center"
          data-aos="fade-up-left"
          data-aos-duration="2000"
        >
          {/* Div com bordas personalizadas */}
          <div className="custom-border w-48 h-48 md:w-64 md:h-64 ">
            <img
              src="/img/About.png"
              alt="Foto Jorge"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-72 md:h-72 object-cover z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
