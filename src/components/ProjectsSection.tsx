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

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory, payment processing via Stripe, and an admin dashboard. Built with Next.js, TypeScript, and MongoDB.",
    longDescription:
      "This comprehensive e-commerce solution handles everything from product management to order fulfillment. Features include real-time inventory tracking, multiple payment gateways, customer authentication, wishlists, and a powerful admin dashboard with analytics.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A Notion-inspired task management application with drag-and-drop, real-time collaboration, and markdown support. Built with React and Supabase.",
    longDescription:
      "This productivity tool enables teams to manage projects with Kanban boards, rich text editing, and real-time updates. Includes features like task assignments, due dates, labels, and integrations with popular tools.",
    image: "/placeholder.svg",
    technologies: ["React", "Supabase", "dnd-kit", "TypeScript", "shadcn/ui"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true,
  },
  {
    title: "AI Chat Interface",
    description:
      "A ChatGPT-like interface with streaming responses, conversation history, and multiple AI model support. Features code syntax highlighting and markdown rendering.",
    longDescription:
      "This AI-powered chat application provides a seamless conversational experience with support for multiple language models. Includes conversation branching, export functionality, and custom system prompts.",
    image: "/placeholder.svg",
    technologies: ["React", "OpenAI API", "Node.js", "Redis", "Framer Motion"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true,
  },
];

const otherProjects = [
  {
    title: "Weather Dashboard",
    description: "Real-time weather app with 7-day forecasts and location search.",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Portfolio CMS",
    description: "Headless CMS for managing portfolio content with Markdown support.",
    technologies: ["Next.js", "Sanity", "TypeScript"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Budget Tracker",
    description: "Personal finance app with expense categorization and insights.",
    technologies: ["React Native", "SQLite", "Redux"],
    github: "https://github.com",
  },
  {
    title: "Code Snippet Manager",
    description: "Organize and share code snippets with syntax highlighting.",
    technologies: ["Vue.js", "Firebase", "Prism.js"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Markdown Editor",
    description: "Live preview Markdown editor with export and theme options.",
    technologies: ["React", "CodeMirror", "Tailwind CSS"],
    github: "https://github.com",
  },
  {
    title: "URL Shortener",
    description: "Custom short links with analytics and QR code generation.",
    technologies: ["Node.js", "MongoDB", "Redis"],
    github: "https://github.com",
    demo: "https://demo.example.com",
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
