const technologies = [
  { name: "Next.js", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "React Native", category: "mobile" },
  { name: "TypeScript", category: "language" },
  { name: "Node.js", category: "backend" },
  { name: "Angular", category: "frontend" },
  { name: "NestJS", category: "backend" },
  { name: "SQL", category: "database" },
  { name: "Python", category: "language" },
];

const TechStack = () => {
  return (
    <section className="py-12 px-4 bg-card/50">
      <div className="container max-w-4xl">
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <span
              key={tech.name}
              className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
