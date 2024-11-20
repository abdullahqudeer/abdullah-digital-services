import { React, useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  // Create refs for each menu item
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll function that scrolls to a specific ref
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className="App">
        <Navbar
          onLinkClick={scrollToSection}
          refs={{
            home: homeRef,
            about: aboutRef,
            services: servicesRef,
            skills: skillsRef,
            resume: resumeRef,
            contact: contactRef,
          }}
        />

        <section ref={homeRef} id="home">
          <Home  onLinkClick={scrollToSection}
          refs={{
            about: aboutRef,
            contact: contactRef,
          }} />
        </section>
        <section ref={aboutRef} id="about">
          <About />
        </section>
        <section ref={servicesRef} id="services">
          <Services />
        </section>

        <section ref={skillsRef} id="skills">
          <Skills />
        </section>
        <section ref={resumeRef} id="resume">
          <Resume />
        </section>
        <section ref={contactRef} id="contact">
          <Contact />
        </section>
        <Footer
          onLinkClick={scrollToSection}
          refs={{
            home: homeRef,
            about: aboutRef,
            services: servicesRef,
            skills: skillsRef,
            resume: resumeRef,
            contact: contactRef,
          }}
        />
      </div>

      <ScrollToTopButton />
    </>
  );
}

export default App;
