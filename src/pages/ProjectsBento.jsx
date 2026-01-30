import React from "react";

const ProjectsBento = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="mb-16 text-center">
          <p className="text-white/60 mb-2"> My Work</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Selected Projects
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">

          {/* BIG FEATURED */}
          <div className="bento-card bento-big">
            <div className="bento-content">
              <h3>AI Portfolio Platform</h3>
              <p>3D interactive portfolio with AI + Three.js</p>
              <button>View Project</button>
            </div>
          </div>

          {/* SMALL RIGHT */}
          <div className="bento-card bento-small">
            <h3>FinTech App</h3>
          </div>

          {/* BOTTOM LEFT */}
          <div className="bento-card bento-wide">
            <h3>E-commerce AI Recommender</h3>
          </div>

          {/* BOTTOM MIDDLE */}
          <div className="bento-card bento-wide">
            <h3>Chatbot Platform</h3>
          </div>

          {/* RIGHT TALL */}
          <div className="bento-card bento-tall">
            <h3>Data Analytics Dashboard</h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsBento;
