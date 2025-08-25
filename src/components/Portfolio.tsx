import { useState, useEffect } from 'react';
import { CustomCursor } from './CustomCursor';
import { LoadingCurtain } from './LoadingCurtain';
import { Navigation } from './Navigation';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';

export const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    // Handle scroll-based section detection
    const handleScroll = () => {
      const sections = ['home', 'projects', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionChange = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setCurrentSection(section);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingCurtain onAnimationComplete={handleLoadingComplete} />;
  }

  return (
    <div className="relative">
      <CustomCursor />
      <Navigation currentSection={currentSection} onSectionChange={handleSectionChange} />
      
      <main className="relative">
        <section id="home">
          <Hero />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Parallax Background Elements */}
      {/* Parallax Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: "url('/bg.webp')",
            transform: `translateY(${window.scrollY * 0.3}px)`, // parallax movement
          }}
        />
        {/* Optional overlay for readability */}
        <div className="absolute inset-0 bg-white/50 dark:bg-black/50"></div>
      </div>

    </div>
  );
};