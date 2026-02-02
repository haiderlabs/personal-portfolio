import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Folder, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  github: string;
  demo?: string;
  featured?: boolean;
}

const featuredProjects: Project[] = [
  {
    title: "The Tax Truths",
    description:
      "A Tax Advisory & Management Platform with multiple dashboards for Admin, Client, Super Admin, and Operations — each tailored with relevant tools, workflows, and data visibility.",
    longDescription:
      "Developed multiple role-based dashboards with a responsive, intuitive frontend using React.js, Material-UI, and Tailwind CSS. Designed secure client interfaces for managing tax filings, payments, financial reports, and document uploads. Enabled collaboration through seamless document sharing and real-time updates between clients and advisors. Implemented efficient workflow designs for admins and operations to monitor activities, manage payments, and oversee tax compliance tasks.",
    image: "/placeholder.svg",
    technologies: ["React.js", "Material-UI", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com",
    featured: true,
  },
  {
    title: "ApoTek",
    description:
      "A Laboratory Management System with role-based dashboards and panels for Admin, Lab Admin, Sales, Logistics, Customer Service, and Clients.",
    longDescription:
      "Built role-based dashboards and panels for multiple roles. Developed interactive and responsive UIs using React.js, Material-UI, and Tailwind CSS for smooth workflows. Implemented client profile management with secure access to lab records, orders, and communications. Enabled real-time updates and notifications across dashboards for lab reports, orders, and tasks. Designed frontend to support efficient multi-role interactions and seamless user experience.",
    image: "/placeholder.svg",
    technologies: ["React.js", "Material-UI", "Tailwind CSS", "REST API", "Socket.IO"],
    github: "https://github.com",
    featured: true,
  },
  {
    title: "Kordia – Musical Academy",
    description:
      "A platform connecting musicians, students, and event organizers with course management, real-time chat, and event booking capabilities.",
    longDescription:
      "Built a responsive, interactive UI connecting musicians, students, and event organizers. Developed student-facing modules for browsing, enrolling, and accessing courses. Created musician dashboards to manage courses, events, and performances. Enabled real-time updates and notifications for course progress, events, and bookings. Implemented a real-time chat system to facilitate communication between students, musicians, and organizers.",
    image: "/placeholder.svg",
    technologies: ["React.js", "Socket.IO", "Node.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com",
    featured: true,
  },
];

const otherProjects: Project[] = [
  {
    title: "RHS – School Management System",
    description: "Interactive dashboards for managing students, guardians, and staff with academic tracking, attendance, grades, and behavior monitoring.",
    technologies: ["React.js", "Material-UI", "Tailwind CSS", "Node.js"],
    github: "https://github.com",
  },
  {
    title: "XPMO – Project Management SaaS",
    description: "A SaaS project management platform with task tracking, team collaboration, and workflow automation.",
    technologies: ["React.js", "Shadcn UI", "Tailwind CSS"],
    github: "https://github.com",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
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
                <div
                  className={`md:col-span-7 ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div className="relative group overflow-hidden rounded-2xl">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary to-primary/10 flex items-center justify-center">
                      <Folder className="w-16 h-16 text-primary/40" />
                    </div>
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                <div
                  className={`md:col-span-5 ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <span className="text-primary font-mono text-sm">Featured Project</span>
                  <h3 className="text-2xl font-bold mt-2 mb-4">{project.title}</h3>

                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="p-6 rounded-xl glass-card mb-4 cursor-pointer hover-lift">
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl glass-card border-border">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                        <DialogDescription className="text-muted-foreground pt-4 leading-relaxed">
                          {project.longDescription}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="font-mono text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4 pt-4">
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        {project.demo && (
                          <Button size="sm" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>

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
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="p-6 rounded-2xl glass-card hover-lift group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Folder className="w-10 h-10 text-primary" />
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
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
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
