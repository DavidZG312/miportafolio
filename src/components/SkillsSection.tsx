"use client"

import { useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Angular", level: 60 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "NestJS", level: 75 },
      { name: "Python", level: 55 },
      { name: "Java", level: 55 },
    ],
  },
  {
    title: "Bases de datos",
    skills: [
      { name: "SQL", level: 70 },
      { name: "NoSQL", level: 65 },
    ],
  },
  {
    title: "Herramientas",
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 60 },
      { name: "Scrum", level: 80 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="mb-4"
      ref={(el) => {
        if (el) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setTimeout(() => setIsVisible(true), delay);
                observer.disconnect();
              }
            },
            { threshold: 0.1 }
          );
          observer.observe(el);
        }
      }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{
            width: isVisible ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="habilidades" className="py-20 px-4">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo día a día
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                {category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={(catIndex * 100) + (skillIndex * 100)}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 bg-card rounded-xl p-8 shadow-soft">
          <h3 className="text-lg font-semibold text-foreground mb-6">Habilidades complementarias</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Desarrollo de interfaces escalables",
              "Sistemas de componentes reutilizables",
              "Consumo y creación de APIs REST",
              "Comunicación en tiempo real (WebSockets)",
              "Control de versiones (Git/GitHub)",
              "Metodologías ágiles (Scrum)",
              "Optimización de rendimiento frontend",
              "Desarrollo mobile-first y responsive",
              "Sistemas de autenticación (JWT, OAuth)",
              "PWAs y aplicaciones offline",
            ].map((skill, index) => (
              <div
                key={skill}
                className="flex items-center gap-3 p-3 rounded-lg bg-accent/50 text-sm text-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
