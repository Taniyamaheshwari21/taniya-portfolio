import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import GlowCard from "../components/glowCard";
import AnimatedGirl from "../components/AnimatedGirl";
import Model2 from "../components/Model2";
import Model3 from "../components/Model3";

/* ---------------------------------
   ICONS
---------------------------------- */
const ICONS = {
  about: "/icons/user.svg",
  education: "/icons/education.svg",
  experience: "/icons/work.svg",
};

/* ---------------------------------
   CONTENT
---------------------------------- */
const TIMELINE_STEPS = [
  {
    id: "about",
    title: "ABOUT ME",
    text: "I’m a Computer Science (AI) undergraduate passionate about building intelligent, user-focused digital experiences. I love blending AI engineering, NLP, and interactive web development to turn complex ideas into practical, real-world solutions.",
    model: "model1",
  },
  {
    id: "education",
    title: "EDUCATION",
    text: ["B.Tech in Computer Science (Artificial Intelligence)", "Netaji Subhas University of Technology (2026) — CGPA: 8.5", "XII CBSE, Abu Dhabi Indian School — 96.4%", "X CBSE, ADIS — 97.2%"],
    model: "model2",
  },
  {
    id: "experience",
    title: "EXPERIENCE",
  text: [
    "**Digi-X Intern** — NatWest Group (Jun–Jul 2025)","• AI security assessments & vulnerability mitigation\n• Built RAG system for automated security workflows\n• Contributed to compliance automation pipelines",

    "**Data Analyst Intern** — TechSaksham (Microsoft · SAP · EduNet) (Dec 2024–Jan 2025)","• ML models for shopping trend prediction\n• Data preprocessing & feature engineering\n• Statistical analysis on unstructured datasets",

    "**JPMorganChase** — Software Engineering Simulation (Forage, Jan 2026)","• Kafka-based microservices architecture\n• Spring Boot REST services\n• Transaction processing systems\n• API integration workflows"
  ],


    model: "model3",
  },
];

const About = () => {
  const sectionRef = useRef(null);
  const [visibleSteps, setVisibleSteps] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => ({
              ...prev,
              [entry.target.dataset.step]: true,
            }));
          }
        });
      },
      { threshold: 0.35 }
    );

    const nodes = document.querySelectorAll(".journey-step");
    nodes.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const progress = Object.keys(visibleSteps).length / TIMELINE_STEPS.length;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-[250vh] bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white overflow-hidden"
    >
      {/* soft glow background */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-indigo-500/20 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-10 py-40">

        {/* Timeline Line */}
        <div className="absolute left-10 top-40 bottom-40 w-[4px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="journey-progress w-full bg-blue-400 origin-top transition-transform duration-500"
            style={{
              transform: `scaleY(${progress})`,
            }}
          />
        </div>

        <div className="space-y-40">

          {TIMELINE_STEPS.map((step, index) => {
            const isVisible = visibleSteps[step.id];

            return (
              <div
                key={step.id}
                data-step={step.id}
                className={`journey-step relative flex gap-20 items-center transition-all duration-1000 pointer-events-auto ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-24"
                }`}
              >
                {/* Icon Node */}
                <div className="relative right-7 z-20">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center border transition-all duration-500
                    ${
                      isVisible
                        ? "bg-blue-400/20 border-blue-400 shadow-[0_0_30px_rgba(96,165,250,0.6)]"
                        : "bg-white/10 border-white/20"
                    }`}
                  >
                    <img
                      src={ICONS[step.id]}
                      alt={step.title}
                      className="w-8 h-8 opacity-90 filter invert brightness-200"
                    />

                  </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-2 gap-20 items-center w-full">

                <GlowCard className="pointer-events-auto">
                  <h2 className="text-3xl font-semibold tracking-wide mb-4 text-white">
                    {step.title}
                  </h2>

                  <div className="mt-2 space-y-3 text-sm leading-[1.5] text-white/80">
                    {Array.isArray(step.text) ? (
                      step.text.map((para, i) => (
                        <p key={i}>
                          {para.split("**").map((part, idx) =>
                            idx % 2 === 1 ? (
                              <span key={idx} className="font-semibold text-white">
                                {part}
                              </span>
                            ) : (
                              part
                            )
                          )}
                        </p>
                      ))
                    ) : (
                      <p>
                        {step.text.split("**").map((part, idx) =>
                          idx % 2 === 1 ? (
                            <span key={idx} className="font-semibold text-white">
                              {part}
                            </span>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    )}
                  </div>
                </GlowCard>


                  {/* 3D Model Card */}
                  <div className="relative h-[400px] overflow-hidden pointer-events-none z-0">
                    <Canvas camera={{ position: [0, 1.2, 3], fov: 45 }} style={{ pointerEvents: "none" }}>
                      <ambientLight intensity={0.8} />
                      <directionalLight position={[2, 4, 3]} intensity={1.2} />

                      <Suspense fallback={null}>
                        {step.model === "model1" && <group scale={1.5}><AnimatedGirl /></group>}
                        {step.model === "model2" && <group scale={1.3}><Model2 /></group>}
                        {step.model === "model3" && <group scale={1.3}><Model3 /></group>}
                      </Suspense>

                      <ContactShadows
                        position={[0, -1.1, 0]}
                        opacity={0.35}
                        scale={2.5}
                        blur={2}
                        far={2}
                      />
                    </Canvas>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default About;
