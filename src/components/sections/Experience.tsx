import { Calendar, MapPin, Award } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Software Developer Intern",
    company: "NatWest Group",
    location: "Gurugram, Haryana",
    period: "Jun 2025 - July 2025",
    description: "Conducted comprehensive security assessments for AI-related changes, analyzed potential risks, coordinated with development teams, and suggested mitigation strategies, ensuring compliance before go-live. Created a RAG model to automate the security questionnaire generation task in assessment procedure",
    achievements: [
      "Reduced the assessment time by 25%",
      "Won 2nd prize in a company-hackathon",
      "Implemented a multi agent AI system"
    ],
    color: "from-primary-soft to-primary-muted",
    type: "work"
  },
  {
    id: 2,
    title: "Data Analyst Intern",
    company: "TechSaksham Initiative by Microsoft, SAP, EduNet",
    location: "Remote",
    period: "Dec 2024 - Jan 2025",
    description: "Developed and evaluated machine learning models (using Python and Scikit-learn) for shopping trend analysis, applying statistical methods and hypothesis testing to identify key consumer patterns. Generated actionable insights from complex, unstructured data to drive market strategy decisions.",
    achievements: [

    ],
    color: "from-accent-soft to-accent",
    type: "education"
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    company: "1Stop.ai",
    location: "Remote",
    period: "Dec 2022 -Feb 2023",
    description: "Intensive full-stack development program covering modern web technologies, databases, and deployment strategies.",
    achievements: [
      "Collaboratively worked to develop and manage a multi-page site, enhancing the final design's uniqueness and user experience."
    ],
    color: "from-accent-soft to-accent",
    type: "education"
  },
  {
    id: 4,
    title: "Computer Science Student",
    company: "Netaji Subhas University of Technology",
    location: "Dwarka, Delhi",
    period: "Nov 2022 - May 2026",
    description: "Bachelor's degree in Computer Science with focus on Artificial Intelligence and web development.",
    achievements: [
      "Director-Enactus NSUT",
      "Executive Comittee member- IEEE NSUT"
    ],
    color: "from-secondary-soft to-secondary",
    type: "education"
  }
];

export const Experience = () => {
  return (
    <section className="book-page py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="sticky-note inline-block mb-8 rotate-1">
            <div className="text-sm font-medium">Journey So Far</div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6 text-shadow">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background that shaped my skills as a developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`
                relative flex items-center mb-12
                ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
              `}
              style={{
                animationDelay: `${index * 0.3}s`,
              }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10 shadow-lg">
                <div className="w-full h-full bg-primary rounded-full animate-pulse"></div>
              </div>

              {/* Content Card */}
              <div className={`
                paper-element w-full md:w-5/12 ml-20 md:ml-0 p-6 rounded-2xl
                ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}
                fade-in-up
              `}>
                {/* Paper Clip for work experiences */}
                {exp.type === 'work' && <div className="paper-clip"></div>}

                {/* Experience Icon */}
                <div className={`
                  w-16 h-16 rounded-xl bg-gradient-to-br ${exp.color}
                  flex items-center justify-center mb-4 shadow-lg
                `}>
                  {exp.type === 'work' ? (
                    <span className="text-2xl">💼</span>
                  ) : (
                    <span className="text-2xl">🎓</span>
                  )}
                </div>

                {/* Period Badge */}
                <div className="inline-flex items-center bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Calendar size={14} className="mr-1" />
                  {exp.period}
                </div>

                {/* Title & Company */}
                <h3 className="text-xl font-playfair font-bold text-foreground mb-2">
                  {exp.title}
                </h3>
                <div className="flex items-center text-primary font-medium mb-2">
                  <span>{exp.company}</span>
                </div>
                <div className="flex items-center text-muted-foreground text-sm mb-4">
                  <MapPin size={14} className="mr-1" />
                  {exp.location}
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground flex items-center">
                    <Award size={16} className="mr-2 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-lg"></div>
              </div>

              {/* Mobile Timeline Extension */}
              <div className="hidden md:block w-5/12">
                {/* Empty space for alternating layout */}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { number: "10+", label: "Projects Completed", icon: "🚀" },
            { number: "4+", label: "Years Learning", icon: "📚" },
            { number: "10+", label: "Technologies Used", icon: "⚡" },
          ].map((stat, index) => (
            <div
              key={index}
              className="paper-element text-center p-6 rounded-xl bounce-in"
              style={{ animationDelay: `${index * 0.2 + 1}s` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-playfair font-bold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};