import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Database,
  Server,
  Palette,
  Shield,
  GitBranch,
  Layers,
} from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Palette,
    color: "#61DAFB",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap CSS",
      "MUI",
      "Shadcn UI",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "#339933",
    technologies: [
      "Node.js",
      "Express.js",
      "REST API",
      "GraphQL",
      "Socket.IO",
    ],
  },
  {
    title: "Database & ORM",
    icon: Database,
    color: "#47A248",
    technologies: ["MongoDB", "SQL", "Mongoose", "Prisma"],
  },
  {
    title: "State Management",
    icon: Layers,
    color: "#764ABC",
    technologies: ["Redux / RTK Query", "Context API"],
  },
  {
    title: "Auth & Security",
    icon: Shield,
    color: "#F59E0B",
    technologies: ["JWT", "OAuth"],
  },
  {
    title: "Tools",
    icon: GitBranch,
    color: "#F05032",
    technologies: ["Git & GitHub"],
  },
];

export const TechnologiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="technologies" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Technologies</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            I work with a modern tech stack focused on performance, developer
            experience, and scalability. Here's what I bring to the table.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="p-6 rounded-2xl glass-card hover-lift group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <category.icon
                      className="w-5 h-5"
                      style={{ color: category.color }}
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay:
                          categoryIndex * 0.1 + techIndex * 0.05 + 0.3,
                      }}
                      className="px-3 py-1.5 text-sm rounded-lg border border-border bg-secondary/50 text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
