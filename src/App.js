import { AboutMeSection } from "./components/AboutMeSection";
// import { ContactSection } from "./components/ContactSection";
import { IntroduceSection } from "./components/IntroduceSection";
import { Navbar } from "./components/Navbar";
// import { ProjectSection } from "./components/ProjectSection";
import { ServicesSection } from "./components/ServicesSection";
// import { SkillsSection } from "./components/SkillsSection";
import { useState, useEffect } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("");

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
        behavior: 'smooth'
      });
    }
  }

  return (
    <div className="container mx-auto scroll-smooth md:px-20 sm:p-0">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection}/>
      <IntroduceSection scrollToSection={scrollToSection}/>
      <AboutMeSection />
      <ServicesSection />
           {/*   <SkillsSection />
            <ProjectSection />
            <ContactSection /> */}
    </div>
  );
}

export default App;
