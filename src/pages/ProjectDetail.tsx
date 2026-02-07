import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Footer } from "@/components/Footer";
import { getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import { cn } from "@/lib/utils";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");

  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Ali Haider`;
      return () => {
        document.title = "Ali Haider | Full Stack Developer";
      };
    }
  }, [project]);

  useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => setSelectedIndex(carouselApi.selectedScrollSnap());
    carouselApi.on("select", onSelect);
    onSelect();
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Project Not Found</h1>
          <p className="mb-4 text-xl text-muted-foreground">This project doesn't exist.</p>
          <Link to="/#projects" className="text-primary underline hover:text-primary/90">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const { prev, next } = getAdjacentProjects(slug!);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-background"
    >
      {/* Top Navigation Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 glass-card py-4"
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link
            to="/#projects"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-mono">Back to Projects</span>
          </Link>
          <Link to="/" className="text-xl font-bold tracking-tight">
            <span className="gradient-text">Ali</span>{"  "}
            <span className="text-foreground">Haider</span>
          </Link>
        </div>
      </motion.div>

      {/* Hero Banner */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full glass-card text-sm font-mono text-primary mb-6"
            >
              {project.featured ? "Featured Project" : "Project"}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="gradient-text">{project.title}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 text-balance"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-mono text-xs">
                  {tech}
                </Badge>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <Carousel opts={{ loop: true }} setApi={setCarouselApi} className="w-full">
              <CarouselContent>
                {project.images.map((img, index) => (
                  <CarouselItem key={index}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                      className="rounded-2xl overflow-hidden glass-card p-1"
                    >
                      <div className="aspect-video rounded-xl overflow-hidden relative group">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        {img.caption && (
                          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/60 to-transparent">
                            <p className="text-sm text-white font-medium">{img.caption}</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-4 md:-left-12 glass-card border-border" />
              <CarouselNext className="hidden sm:flex -right-4 md:-right-12 glass-card border-border" />
            </Carousel>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-3 mt-4">
              {project.images.map((img, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  onClick={() => carouselApi?.scrollTo(index)}
                  className={cn(
                    "aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300",
                    selectedIndex === index
                      ? "border-primary glow"
                      : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-bold">Project Overview</h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="p-5 sm:p-6 rounded-2xl glass-card">
                <h3 className="font-semibold mb-5 text-sm font-mono text-primary uppercase tracking-wider">
                  Quick Info
                </h3>
                <div className="space-y-5">
                  <div>
                    <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Role</span>
                    <p className="text-sm font-medium mt-1">{project.role}</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Type</span>
                    <p className="text-sm font-medium mt-1">{project.featured ? "Featured Project" : "Project"}</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Tech Stack</span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.technologies.map((t) => (
                        <Badge key={t} variant="secondary" className="font-mono text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 sm:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold mb-8"
            >
              Key Features
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="p-4 sm:p-5 rounded-xl glass-card hover-lift flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Action Links */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" variant="outline" className="w-full sm:w-auto min-w-[180px]" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View Source Code
              </a>
            </Button>
            {project.demo && (
              <Button size="lg" className="w-full sm:w-auto min-w-[180px] glow" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Previous / Next Navigation */}
      <section className="py-12 sm:py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 gap-4">
            {prev ? (
              <Link
                to={`/project/${prev.slug}`}
                className="p-4 sm:p-6 rounded-2xl glass-card hover-lift group text-left"
              >
                <span className="text-xs font-mono text-muted-foreground flex items-center gap-1 mb-2">
                  <ArrowLeft className="w-3 h-3" /> Previous
                </span>
                <p className="font-semibold group-hover:text-primary transition-colors text-sm sm:text-base">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                to={`/project/${next.slug}`}
                className="p-4 sm:p-6 rounded-2xl glass-card hover-lift group text-right"
              >
                <span className="text-xs font-mono text-muted-foreground flex items-center justify-end gap-1 mb-2">
                  Next <ArrowRight className="w-3 h-3" />
                </span>
                <p className="font-semibold group-hover:text-primary transition-colors text-sm sm:text-base">
                  {next.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default ProjectDetail;
