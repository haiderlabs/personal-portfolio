import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiSocketdotio,
  SiMongodb,
  SiPrisma,
  SiRedux,
  SiJsonwebtokens,
  SiGit,
} from "react-icons/si";
import { Database, Layers, ShieldCheck } from "lucide-react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

type TechItem = {
  name: string;
  icon: IconType | LucideIcon;
  color: string;
};

type Category = {
  title: string;
  items: TechItem[];
};

const categories: Category[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "MUI", icon: SiMui, color: "#007FFF" },
      { name: "Shadcn", icon: Layers, color: "#ffffff" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#ffffff" },
      { name: "REST API", icon: Database, color: "#06B6D4" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQL", icon: Database, color: "#336791" },
      { name: "Mongoose", icon: SiMongodb, color: "#880000" },
      { name: "Prisma", icon: SiPrisma, color: "#5A67D8" },
    ],
  },
  {
    title: "Other",
    items: [
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#FB015B" },
      { name: "OAuth", icon: ShieldCheck, color: "#F59E0B" },
      { name: "Git", icon: SiGit, color: "#F05032" },
    ],
  },
];

export const TechnologiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  let globalIdx = 0;

  return (
    <section id="technologies" className="py-16 sm:py-24 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Technologies</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mb-16">
            I work with a modern tech stack focused on performance, developer
            experience, and scalability. Here's what I bring to the table.
          </p>

          <div className="space-y-12">
            {categories.map((cat, catIdx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              >
                <h3 className="text-sm font-mono text-primary mb-6 tracking-wider uppercase">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
                  {cat.items.map((tech) => {
                    const Icon = tech.icon;
                    const idx = globalIdx++;
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, delay: idx * 0.04 + 0.2 }}
                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                        className="flex flex-col items-center gap-2 sm:gap-3 group cursor-default"
                      >
                        <div
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl border border-border bg-secondary/20 flex items-center justify-center group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb,100,100,255),0.15)] transition-all duration-300"
                          style={{
                            boxShadow: undefined,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = `0 0 25px ${tech.color}20, 0 0 10px ${tech.color}10`;
                            e.currentTarget.style.borderColor = `${tech.color}50`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "";
                            e.currentTarget.style.borderColor = "";
                          }}
                        >
                          <Icon
                            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110"
                            style={{ color: tech.color }}
                          />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                          {tech.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
