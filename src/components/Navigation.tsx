import { useState } from 'react';
import { Book, User, Briefcase, Code, Mail } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: 'home', label: 'Introduction', icon: Book },
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: User },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const Navigation = ({ currentSection, onSectionChange }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Tab Navigation */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col space-y-2">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isActive = currentSection === section.id;
            
            return (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`
                  relative group cursor-pointer transition-all duration-300
                  ${isActive 
                    ? 'bg-primary text-primary-foreground shadow-lg' 
                    : 'bg-card text-card-foreground hover:bg-primary/10'
                  }
                  w-14 h-14 rounded-l-xl flex items-center justify-center
                  paper-element
                `}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transform: isActive ? 'translateX(-8px)' : 'translateX(0)',
                }}
              >
                <Icon size={20} />
                
                {/* Tooltip */}
                <div className={`
                  absolute right-full mr-3 px-3 py-2 bg-foreground text-background
                  rounded-lg text-sm font-medium whitespace-nowrap
                  opacity-0 group-hover:opacity-100 transition-opacity duration-200
                  pointer-events-none
                `}>
                  {section.label}
                  <div className="absolute top-1/2 left-full transform -translate-y-1/2 
                                 border-l-4 border-l-foreground border-y-4 border-y-transparent">
                  </div>
                </div>

                {/* Paper clip decoration for active tab */}
                {isActive && <div className="paper-clip"></div>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-primary text-primary-foreground rounded-full 
                     flex items-center justify-center shadow-lg cursor-pointer"
        >
          <Book size={20} />
        </button>

        {isOpen && (
          <div className="absolute top-14 right-0 bg-card rounded-xl shadow-xl p-4 min-w-[200px]">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    onSectionChange(section.id);
                    setIsOpen(false);
                  }}
                  className={`
                    w-full flex items-center space-x-3 p-3 rounded-lg text-left
                    cursor-pointer transition-colors duration-200
                    ${currentSection === section.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-muted'
                    }
                  `}
                >
                  <Icon size={18} />
                  <span className="font-medium">{section.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};