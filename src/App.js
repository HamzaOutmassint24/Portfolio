import { AboutMeSection } from "./components/AboutMeSection";
import { ContactSection } from "./components/ContactSection";
import { IntroduceSection } from "./components/IntroduceSection";
import Model from "./components/Model";
import { Navbar } from "./components/Navbar";
import { ProjectSection } from "./components/ProjectSection";
import { ServicesSection } from "./components/ServicesSection";
import { SkillsSection } from "./components/SkillsSection";
import { useState, useEffect } from "react";
import {Github, Linkedin} from "react-bootstrap-icons";


function App() {
  const [activeSection, setActiveSection] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      let sectionId = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          sectionId = section.getAttribute("id");
        }
      });

      setActiveSection(sectionId);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  }

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  if(isModalOpen){
    return (
      <Model isModalOpen={isModalOpen} handleModalToggle={handleModalToggle}/>
    )
  }else{
    return (
      <>
        <div className="container mx-auto scroll-smooth md:px-20 sm:p-0">
          <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
          <IntroduceSection scrollToSection={scrollToSection} />
          <AboutMeSection />
          <ServicesSection />
          <SkillsSection />
          <ProjectSection handleModalToggle={handleModalToggle}/>
          <ContactSection /> 
          <div className="font-second-font pb-4 flex justify-between">
            <span> © Designed and Developed by me :) </span>
            <span className="flex xl:mr-16">
            <a title="github" href="https://github.com/HamzaOutmassint" className="group">
              <Github
                size={30}
                className="text-fourth-color group-hover:text-main-color transition duration-200 ease-linear p-1"
              />
            </a>
            <a title="linkdin" href="https://www.linkedin.com/in/hamza-outmassint/" className="group">
              <Linkedin
                size={30}
                className="text-fourth-color group-hover:text-main-color transition duration-200 ease-linear p-1"
              />
            </a>
            </span>
          </div>
        </div>
      </>
    )
  }
}

export default App;
