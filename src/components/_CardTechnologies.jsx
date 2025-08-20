import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiRefinedgithub, SiTailwindcss, SiNestjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const CardTechnologies = ({ isDarkMode }) => {
  const technologies = [
    { id: 1, name: "React", icon: <FaReact /> },
    { id: 2, name: "Node.js", icon: <FaNodeJs /> },
    { id: 3, name: "HTML5", icon: <FaHtml5 /> },
    { id: 4, name: "CSS3", icon: <FaCss3Alt /> },
    { id: 5, name: "JavaScript", icon: <SiJavascript /> },
    { id: 6, name: "GitHub", icon: <SiRefinedgithub /> },
    { id: 7, name: "Git", icon: <FaGitAlt /> },
    { id: 8, name: "Tailwind", icon: <SiTailwindcss /> },
    { id: 9, name: "PostgreSQL", icon: <BiLogoPostgresql /> },
    { id: 10, name: "NestJs", icon: <SiNestjs /> },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" data-aos="fade-up"
      data-aos-anchor-placement="top-center" data-aos-duration="2000">
      {technologies.map((tech) => (
        <div
          key={tech.id}
          className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 ${isDarkMode ? "bg-primary-950" : "bg-white"
            }`}
        >
          <div className={`text-6xl mb-4 ${isDarkMode ? "text-green-400" : "text-[#1A8A51]"}`}>
            {tech.icon}
          </div>
          <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-800 lato-thin"}`}>
            {tech.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default CardTechnologies;