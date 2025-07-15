import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./context/ThemeContext";
import AOS from 'aos';
import 'aos/dist/aos.css';
import projectsData from "../src/locales/projects.json";

AOS.init({
  offset: 0
});

const App = () => {
  const [projects, setProjects] = useState([]);
  const { isDarkMode } = useTheme();

  // Método que vai buscar os dados da API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setProjects(Array.isArray(projectsData) ? projectsData : []);
      } catch (error) {
        console.log("Erro ao carregar os dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-primary-50 text-primary-950"} overflow-x-hidden`}>
        <Navbar />
        <Hero />
        <About />
        <Projects projects={projects} /> {/* Passando projects como prop */}
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div >
  );
};

export default App;