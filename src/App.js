import { useRef, useState, useEffect } from "react";
import Header from "./components/Header";
import GlobalStyle from "./globalStyles";
import Banner from "./components/Banner"
import About from "./components/About"
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  const [activeSection, setActiveSection] = useState("home");
  const bannerRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const sections = [
      { ref: bannerRef, id: "home" },
      { ref: aboutRef, id: "about" },
      { ref: skillsRef, id: "skills" },
      { ref: projectsRef, id: "projects" },
      { ref: contactRef, id: "contact" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section.ref.current);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section.ref.current);
      });
    };
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Header activeSection={activeSection} />
      <div id="home" ref={bannerRef}>
        <Banner />
      </div>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <div id="skills" ref={skillsRef}>
        <Skills />
      </div>
      <div id="projects" ref={projectsRef}>
        <Projects />
      </div>
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}


export default App;
