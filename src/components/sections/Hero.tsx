import { useEffect, useState } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="book-page relative overflow-hidden">
      {/* Background Lights */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-soft rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-accent-soft rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-secondary-soft rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Pixel Notification Box */}
          <div
            className={`pixel-box mt-12 mb-8 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
          >
            {/* Header Bar */}
            <div className="pixel-box-header -mt-8 mb-8 ">
              <span className="pixel-box-title">Portfolio.exe</span>
              <div className="pixel-box-close">X</div>
            </div>
            
            {/* Name */}
            <div className="text-3xl md:text-5xl font-[Press Start 2P] leading-relaxed text-foreground mb-6">
              <span
                className={`inline-block ${isVisible ? 'slide-in-left' : 'opacity-0'}`}
                style={{ animationDelay: '0.2s' }}
              >
                Taniya
              </span>
              <br />
              <span
                className={`inline-block text-primary ${isVisible ? 'slide-in-left' : 'opacity-0'}`}
                style={{ animationDelay: '0.4s' }}
              >
                Maheshwari
              </span>
            </div>

            {/* Subtitle */}
            <div
              className={`text-sm md:text-base text-muted-foreground mb-8 font-dotgothic ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.6s' }}
            >
              Software Development Engineer
              <br />
              <span className="text-primary font-">
                Crafting Digital Experiences
              </span>
            </div>
            


            {/* Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${
                isVisible ? 'bounce-in' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.8s' }}
            >
              <a
                href="/TaniyaMah_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Button
                  size="lg"
                  className="cursor-pointer group bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-4 rounded-none shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Download
                    size={20}
                    className="mr-2 group-hover:animate-bounce"
                  />
                  Download Resume
                </Button>
              </a>

              <a href="#projects">
                <Button
                  variant="outline"
                  size="lg"
                  className="cursor-pointer group border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-4 rounded-none"
                >
                  View Projects
                  <ArrowDown
                    size={20}
                    className="ml-2 group-hover:animate-bounce"
                  />
                </Button>
              </a>
            </div>
          </div>

         {/* Profile Avatar with Image */}
          <div
            className={`pixel-box inline-block p-4 ${isVisible ? 'bounce-in' : 'opacity-0'}`}
            style={{ animationDelay: '1s' }}
          >
            <img
              src="/profile.jpeg"   // <- put your profile photo in public/profile.png
              alt="Taniya Profile"
              className="w-32 h-32 object-cover pixelated"
            />
          </div>

        </div>
      </div>
{/* Left Side - Avatar with Pixel Speech Bubble */}
            <div className="absolute bottom-12 left-12 flex flex-col items-center">
              {/* Pixel Speech Bubble */}
              <div className="pixel-speech flex -top-6 left-1/2 -translate-x-1/2">
                <span className="font-[Press Start 2P] text-xs">Hello there! <br/>
                  Welcome to my Portfolio.
                </span>
                
              </div>

              {/* Avatar Image */}
              <img
                src="/avatar.png" // <- place your avatar image in public/avatar.png
                alt="Taniya Avatar"
                className="w-48 h-auto object-contain pixelated"
              />
            </div>
{/* Decorative Elements */}
<div className="absolute top-1/4 left-8 rotate-12">
  <div className="paper-element w-25 h-20 bg-accent-soft rounded-lg flex items-center justify-center">
    <img 
      src="/comp.png" 
      alt="Laptop Icon" 
      className="w-20 h-20 object-contain pixelated"
    />
  </div>
</div>

<div className="absolute bottom-1/4 right-8 -rotate-12">
  <div className="paper-element w-25 h-20 bg-primary-muted rounded-lg flex items-center justify-center">
    <img 
      src="/rocket.png" 
      alt="Rocket Icon" 
      className="w-20 h-20 object-contain pixelated"
    />
  </div>
</div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary flex justify-center items-start">
          <div className="w-1 h-3 bg-primary mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
