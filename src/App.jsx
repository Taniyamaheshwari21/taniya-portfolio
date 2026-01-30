import React, { useRef } from "react";
import Home3D from "./components/Home3D";
import HomeLogo from "./components/HomeLogo";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import FloatingSocials from "./components/FloatingSocials";

import VantaCursor from "./components/VantaCursor";

const App = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="relative bg-slate-950 overflow-x-hidden">
      {/* Fixed UI */}
      <VantaCursor />
      <HomeLogo heroRef={heroRef} />
      <NavBar
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <FloatingSocials />

      {/* ===== PARALLAX SCROLL CONTAINER ===== */}
      <div className="relative w-full">

        {/* HERO (PINNED) */}
        <section
          ref={heroRef}
          className="sticky top-0 h-screen w-full z-10 overflow-hidden"
        >
          <Home3D />
        </section>
      </div>
      
      <section ref={aboutRef} className="relative z-30 min-h-screen">
        <About />
      </section>
      
      <section ref={projectsRef} className="relative z-30 min-h-screen">
        <Projects />
      </section>

      <section ref={contactRef} className="relative z-30 min-h-screen">
        <Contact />
      </section>
      
    </div>
  );
};

export default App;
