import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../assets/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-pill",
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 70%",
        },
      }
    );
  });

  return (
    <section id="skills" className="relative w-full py-40 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-10">

        <TitleHeader
          title="My Preferred Tech Stack"
          sub="The Skills I Bring to the Table"
        />

        {/*  VERTICAL PILL GRID */}
        <div className="tech-grid-pills">
          {techStackIcons.map((tech) => (
            <div key={tech.name} className="tech-pill">

              <div className="tech-icon-wrapper">
                <TechIconCardExperience model={tech} />
              </div>

              <p>{tech.name}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
