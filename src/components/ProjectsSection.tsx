import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { featuredProjects, otherProjects } from "@/data/projects";

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Featured Projects */}
          <div className="space-y-16 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`grid md:grid-cols-12 gap-6 items-center ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                <Link
                  to={`/project/${project.slug}`}
                  className={`md:col-span-7 ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div className="relative group overflow-hidden rounded-2xl">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.images[0]?.src}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>

                <div
                  className={`md:col-span-5 ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <span className="text-primary font-mono text-sm">Featured Project</span>
                  <h3 className="text-xl sm:text-2xl font-bold mt-2 mb-4">{project.title}</h3>

                  <Link to={`/project/${project.slug}`}>
                    <div className="p-4 sm:p-6 rounded-xl glass-card mb-4 cursor-pointer hover-lift">
                      <p className="text-sm sm:text-base text-muted-foreground">{project.description}</p>
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-primary mt-3">
                        View Details <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-8">Other Noteworthy Projects</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project, index) => (
                <Link to={`/project/${project.slug}`} key={project.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="p-4 sm:p-6 rounded-2xl glass-card hover-lift group h-full"
                  >
                    <div className="aspect-video rounded-xl overflow-hidden mb-4 -mx-1 -mt-1 sm:-mx-2 sm:-mt-2">
                      <img
                        src={project.images[0]?.src}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs font-mono text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
