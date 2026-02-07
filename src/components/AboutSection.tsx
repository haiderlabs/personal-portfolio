import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiSocketdotio,
} from "react-icons/si";

const techIcons = [
  { Icon: SiReact, color: "#61DAFB", label: "React" },
  { Icon: SiNodedotjs, color: "#339933", label: "Node.js" },
  { Icon: SiMongodb, color: "#47A248", label: "MongoDB" },
  { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  { Icon: SiNextdotjs, color: "#ffffff", label: "Next.js" },
  { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind" },
  { Icon: SiRedux, color: "#764ABC", label: "Redux" },
  { Icon: SiSocketdotio, color: "#010101", label: "Socket.IO" },
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-documented code that scales.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex challenges into elegant solutions.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed, accessibility, and user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams across time zones.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
            <div className="md:col-span-3 space-y-6">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I'm a proactive and detail-oriented <span className="text-foreground font-medium">MERN Stack Developer</span> with
                a solid background in web app development. Known for strong analytical skills
                and a commitment to delivering high-quality software solutions.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I specialize in the <span className="text-foreground font-medium">MERN stack</span> (MongoDB, Express, React, Node.js)
                along with TypeScript, Next.js, Redux, Tailwind CSS, Material-UI, and real-time
                technologies like Socket.IO. I'm capable of thriving in fast-paced environments
                and collaborating effectively within cross-functional teams.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Adept at learning new technologies quickly and applying them to solve complex
                problems, with a focus on continuous improvement and innovation. I speak Urdu,
                Punjabi, and English.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 flex items-center justify-center"
            >
              <div className="relative flex items-center justify-center w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px]">
                {/* Circular avatar in center */}
                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 z-10 shrink-0">
                  <img src="/avatar.jpeg" alt="Avatar" className="w-full h-full object-cover" />
                </div>

                {/* Rotating orbit ring with icons */}
                <div className="absolute inset-0">
                  <motion.div
                    className="w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ position: "relative" }}
                  >
                    {techIcons.map((tech, i) => {
                      const angle = (i / techIcons.length) * 2 * Math.PI;
                      // Use percentage-based positioning for responsiveness
                      const radiusPct = 43; // percentage of container
                      const cx = `calc(50% + ${radiusPct * Math.cos(angle)}% - 16px)`;
                      const cy = `calc(50% + ${radiusPct * Math.sin(angle)}% - 16px)`;
                      return (
                        <motion.div
                          key={tech.label}
                          className="absolute w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center shadow-lg"
                          style={{ left: cx, top: cy }}
                          animate={{ rotate: -360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          title={tech.label}
                        >
                          <tech.Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: tech.color }} />
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl glass-card hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
