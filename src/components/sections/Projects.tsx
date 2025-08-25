import { useState } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: "Trender ",
    description: "Created a new feature to allow left-right swipe on clothes according to customer's preferences. Using a machine learning model to build a recommendation engine during the shopping experience to increase the customer conversion rate. Features include user authentication, payment processing, and admin dashboard.",
    tech: ["Flutter", "Node.js", "MongoDB", "Python"],
    image: "🛒",
    color: "from-primary-soft to-primary-muted",
    featured: true
  },
  {
    id: 2,
    title: "Intraday Stock Price Predictor",
    description: "Built a Kafka-based real-time pipeline that streams candlestick data from financial sources. Trained an ML model on historical data to predict the next 15-minute stock movement. Integrated NLP using scraped Twitter data and financial news headlines to adjust predictions based on market sentiment.",
    tech: ["Kafka", "Python", "NLP"],
    image: "📈",
    color: "from-accent-soft to-accent",
    featured: false
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics. Utilized APIs to fetch and display current weather conditions.",
    tech: ["React", "Weather API", "Chart.js"],
    image: "🌤️",
    color: "from-secondary-soft to-secondary",
    featured: true
  },
  {
    id: 4,
    title: "TnP Website",
    description: " Implemented database connectivity to reflect live changes in job postings and student registrations. Designed a user-friendly interface for students and recruiters to access and update information efficiently.",
    tech: ["CSS", "JavaScript", "PHP", "Apache Spark"],
    image: "🎨",
    color: "from-primary-muted to-cream", 
    featured: false
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section className="book-page py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="sticky-note inline-block mb-8 -rotate-2">
            <div className="text-sm font-medium">My Work</div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6 text-shadow">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating digital solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`
                paper-element relative p-6 rounded-2xl cursor-pointer
                transform transition-all duration-500 hover:scale-105
                ${selectedProject === project.id ? 'scale-105 z-10' : ''}
                ${project.featured ? 'md:col-span-2' : ''}
              `}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Paper Clip for Featured Projects */}
              {project.featured && <div className="paper-clip"></div>}

              <div className="relative z-10">
                {/* Project Icon */}
                <div className={`
                  w-20 h-20 rounded-2xl bg-gradient-to-br ${project.color}
                  flex items-center justify-center text-4xl mb-6
                  shadow-lg
                `}>
                  {project.image}
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center">
                    <Star size={12} className="mr-1" />
                    Featured
                  </div>
                )}

                {/* Project Info */}
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Actions */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>

                {/* Expanded Details */}
                {selectedProject === project.id && (
                  <div className="mt-6 pt-6 border-t border-border animate-fadeInUp">
                    <h4 className="font-playfair font-bold text-lg mb-3">Project Highlights</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Responsive design with mobile-first approach</li>
                      <li>• Optimized performance and accessibility</li>
                      <li>• Clean, maintainable code structure</li>
                      <li>• Comprehensive testing and documentation</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="cursor-pointer border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-4 rounded-xl"
          >
            View All Projects
            <ExternalLink size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};