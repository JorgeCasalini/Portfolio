import React from "react";
import ButtonProjects from "./_ButtonProjects";

const Card = ({ title, description, githubLink, linkView, isDarkMode, t }) => {
  return (
    <div className={`p-6 ${isDarkMode ? "bg-primary-950" : "bg-white"}`}>
      <h3 className={`text-2xl font-bold mb-2 encode-sans-semi-condensed-bold${isDarkMode ? "text-white" : "text-[#1A8A51] iansui-regular"}`}>
        {title}
      </h3>
      <p className={`${isDarkMode ? "text-primary-300" : "text-gray-700"} mb-4 lato-thin`}>
        {description}
      </p>

      {/* Passando githubLink, linkView, isDarkMode e t como props para ButtonProjects */}
      <ButtonProjects
        githubLink={githubLink}
        linkView={linkView}
        isDarkMode={isDarkMode}
        t={t}
      />
    </div>
  );
};

export default Card;