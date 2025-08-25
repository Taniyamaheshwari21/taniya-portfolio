import { useState } from 'react';
import { Code, Palette, Database, Globe, Zap, Heart } from 'lucide-react';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Globe,
    color: 'from-primary-soft to-primary-muted',
    skills: [
      { name: 'React', level: 90, experience: '2 years' },
      { name: 'TypeScript', level: 85, experience: '1.5 years' },
      { name: 'JavaScript', level: 95, experience: '3 years' },
      { name: 'HTML/CSS', level: 98, experience: '3 years' },
      { name: 'Tailwind CSS', level: 90, experience: '1 year' },
      { name: 'Vue.js', level: 70, experience: '8 months' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: Database,
    color: 'from-accent-soft to-accent',
    skills: [
      { name: 'Node.js', level: 80, experience: '1.5 years' },
      { name: 'Express.js', level: 85, experience: '1.5 years' },
      { name: 'MongoDB', level: 75, experience: '1 year' },
      { name: 'PostgreSQL', level: 70, experience: '8 months' },
      { name: 'REST APIs', level: 88, experience: '2 years' },
      { name: 'GraphQL', level: 60, experience: '6 months' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Technologies',
    icon: Zap,
    color: 'from-secondary-soft to-secondary',
    skills: [
      { name: 'Git/GitHub', level: 92, experience: '3 years' },
      { name: 'VS Code', level: 95, experience: '3 years' },
      { name: 'Figma', level: 80, experience: '2 years' },
      { name: 'Docker', level: 65, experience: '6 months' },
      { name: 'AWS', level: 60, experience: '4 months' },
      { name: 'Webpack/Vite', level: 75, experience: '1 year' }
    ]
  },
  {
    id: 'design',
    title: 'Design & UX',
    icon: Palette,
    color: 'from-primary-muted to-cream',
    skills: [
      { name: 'UI/UX Design', level: 85, experience: '2 years' },
      { name: 'Responsive Design', level: 95, experience: '3 years' },
      { name: 'Accessibility', level: 80, experience: '1.5 years' },
      { name: 'Animation', level: 75, experience: '1 year' },
      { name: 'Color Theory', level: 85, experience: '2 years' },
      { name: 'Typography', level: 80, experience: '2 years' }
    ]
  }
];

const softSkills = [
  'Problem Solving', 'Team Collaboration', 'Communication', 'Time Management',
  'Adaptability', 'Creativity', 'Attention to Detail', 'Continuous Learning'
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const getSkillBarColor = (level: number) => {
    if (level >= 90) return 'bg-primary';
    if (level >= 80) return 'bg-accent';
    if (level >= 70) return 'bg-secondary';
    return 'bg-muted-foreground';
  };

  return (
    <section className="book-page py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="sticky-note inline-block mb-8 -rotate-1">
            <div className="text-sm font-medium">What I Know</div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6 text-shadow">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    paper-element px-6 py-4 rounded-xl cursor-pointer
                    transition-all duration-300 flex items-center space-x-3
                    ${isActive 
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                      : 'hover:scale-105'
                    }
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon size={20} />
                  <span className="font-medium">{category.title}</span>
                  {isActive && <div className="paper-clip"></div>}
                </button>
              );
            })}
          </div>

          {/* Active Category Skills */}
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className={`
                ${activeCategory === category.id ? 'block' : 'hidden'}
                page-flip-enter
              `}
            >
              <div className="paper-element p-8 rounded-2xl mb-8">
                <div className="paper-clip"></div>
                
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className={`
                    w-16 h-16 rounded-xl bg-gradient-to-br ${category.color}
                    flex items-center justify-center mr-4 shadow-lg
                  `}>
                    <category.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Skill Header */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-muted-foreground">{skill.experience}</span>
                          <span className="text-sm font-bold text-primary">{skill.level}%</span>
                        </div>
                      </div>

                      {/* Skill Bar */}
                      <div className="h-3 bg-muted rounded-full overflow-hidden shadow-inner">
                        <div
                          className={`
                            h-full rounded-full transition-all duration-1000 ease-out
                            ${getSkillBarColor(skill.level)}
                          `}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.2}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Soft Skills */}
          <div className="mt-16">
            <h3 className="text-2xl font-playfair font-bold text-center text-foreground mb-8">
              Soft Skills
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill, index) => (
                <div
                  key={skill}
                  className="paper-element px-4 py-2 rounded-full bg-card text-card-foreground
                           hover:bg-primary hover:text-primary-foreground transition-all duration-300
                           cursor-pointer bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-sm font-medium flex items-center">
                    <Heart size={14} className="mr-2 text-primary" />
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Goals */}
          <div className="mt-16 text-center">
            <div className="paper-element inline-block p-6 rounded-xl max-w-md">
              <h4 className="font-playfair font-bold text-lg text-foreground mb-3">
                Currently Learning
              </h4>
              <div className="flex flex-wrap justify-center gap-2">
                {['Next.js', 'Python', 'Machine Learning', 'DevOps'].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium
                             animate-pulse"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};