import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "KingKart - E-commerce Platform",
    description:
      "Full-stack e-commerce platform with ReactJS, Node.js, and MongoDB. Implemented secure payment gateway (Stripe), real-time inventory management, and advanced search. Created responsive UI with TailwindCSS achieving 98% mobile compatibility.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
    github: "https://github.com/Rajasgh18/KingKart",
    live: "#",
  },
  {
    title: "Livestream App",
    description:
      "Scalable live streaming platform using Next.js, TypeScript, and TailwindCSS. Implemented real-time chat with WebSocket, integrated OBS and LiveKit for streaming. Developed role-based access control and optimized database queries with Prisma ORM.",
    tags: ["Next.js", "TypeScript", "Prisma", "LiveKit", "WebSocket"],
    github: "https://github.com/Rajasgh18/Livestream-app",
    live: "#",
  },
  {
    title: "Cloud Observability Platform",
    description:
      "Comprehensive monitoring solution integrating APM, logging, and alerting. Implemented log aggregation with Apache Pinot, configured Prometheus and Grafana dashboards, and built automated alerting systems for Kubernetes infrastructure.",
    tags: ["Apache Pinot", "Prometheus", "Grafana", "Kubernetes", "Docker"],
    github: "#",
    live: "#",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -12 }}
            >
              <div className="rounded-2xl overflow-hidden glass-card transition-all duration-300 group h-full flex flex-col relative p-4 sm:p-6">
                {/* Animated glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  style={{
                    background: "linear-gradient(45deg, rgba(79, 195, 247, 0.1), rgba(149, 117, 205, 0.1))",
                    filter: "blur(20px)",
                  }}
                />

                {/* Project Details */}
                <div className="flex-1 flex flex-col relative z-10">
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 transition-colors"
                    animate={{
                      color: hoveredIndex === index ? "var(--primary)" : "var(--foreground)"
                    }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-sm sm:text-base mb-3 sm:mb-4 flex-1 text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className="px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm transition-all bg-primary/10 border border-primary/30 text-primary backdrop-blur-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.15 + tagIndex * 0.05 }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "rgba(79, 195, 247, 0.2)",
                          boxShadow: "0 4px 12px rgba(79, 195, 247, 0.3)"
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl glass-card border border-primary/30 text-primary font-medium text-sm sm:text-base transition-all group/btn"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 4px 20px rgba(79, 195, 247, 0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover/btn:rotate-12" />
                      <span>GitHub</span>
                    </motion.a>
                    
                    {project.live !== "#" && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-medium text-sm sm:text-base transition-all group/btn"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 4px 20px rgba(79, 195, 247, 0.5)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.15 + 0.25 }}
                      >
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
