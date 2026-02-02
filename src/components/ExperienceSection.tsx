import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Briefcase, GraduationCap, Heart, Clock } from "lucide-react";

const bioData = [
  { icon: MapPin, label: "Location", value: "Sialkot, Pakistan" },
  { icon: Briefcase, label: "Experience", value: "2+ Years" },
  { icon: Clock, label: "Availability", value: "Open to work" },
  { icon: Heart, label: "Interests", value: "Problem Solving, Tech Community" },
];

const timeline = [
  {
    year: "Sep 2024 - Present",
    title: "Full Stack Developer",
    company: "Fabulous Technology Solutions",
    description: "Collaborating with cross-functional teams to design and develop software products. Building RESTful APIs using Express.js and Node.js, implementing secure authentication with JWT, OAuth, and bcrypt. Managing state with Context API and Redux, and translating wireframes into pixel-perfect interfaces.",
    type: "work",
  },
  {
    year: "Feb 2024 - Aug 2024",
    title: "Junior React Developer",
    company: "Techno Soft Solution",
    description: "Developed responsive, interactive UIs using React.js, Material-UI, and Tailwind CSS. Collaborated with backend and design teams to integrate APIs, manage state, and handle routing. Contributed to agile sprints, code reviews, and UI/UX improvements.",
    type: "work",
  },
  {
    year: "2020 - 2024",
    title: "BS Information Technology",
    company: "University of Gujrat",
    description: "Focused on software engineering, OOP, data structures & algorithms, database design, and full-stack web development.",
    type: "education",
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Bio Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {bioData.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 rounded-xl glass-card hover-lift"
              >
                <div className="flex items-center gap-3 mb-2">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
                <p className="text-lg font-semibold">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                  index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-1 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2 ring-4 ring-background" />

                <div className="p-6 rounded-2xl glass-card hover-lift group">
                  <div className="flex items-center gap-2 mb-3">
                    {item.type === "work" ? (
                      <Briefcase className="w-4 h-4 text-primary" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-primary" />
                    )}
                    <span className="text-xs font-mono text-primary">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.company}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
