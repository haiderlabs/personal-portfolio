import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Database,
  Server,
  Palette,
  Shield,
  Cloud,
  GitBranch,
  Layers,
  Zap,
} from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Palette,
    technologies: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Next.js", level: 85 },
      { name: "shadcn/ui", level: 90 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    technologies: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "GraphQL", level: 75 },
      { name: "REST APIs", level: 92 },
      { name: "Prisma", level: 80 },
      { name: "tRPC", level: 70 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    technologies: [
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "Redis", level: 75 },
      { name: "Supabase", level: 85 },
    ],
  },
  {
    title: "Auth & Payments",
    icon: Shield,
    technologies: [
      { name: "JWT", level: 90 },
      { name: "OAuth 2.0", level: 85 },
      { name: "Stripe", level: 80 },
      { name: "NextAuth", level: 82 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    technologies: [
      { name: "Docker", level: 78 },
      { name: "AWS", level: 72 },
      { name: "Vercel", level: 90 },
      { name: "CI/CD", level: 85 },
    ],
  },
  {
    title: "Tools",
    icon: GitBranch,
    technologies: [
      { name: "Git & GitHub", level: 95 },
      { name: "VS Code", level: 92 },
      { name: "Figma", level: 75 },
      { name: "Postman", level: 88 },
    ],
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
            I work with a modern tech stack focused on performance, developer experience, 
            and scalability. Here's what I bring to the table.
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
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + techIndex * 0.05 + 0.3,
                      }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium">{tech.name}</span>
                        <span className="text-xs font-mono text-muted-foreground">
                          {tech.level}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${tech.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + techIndex * 0.05 + 0.5,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
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
