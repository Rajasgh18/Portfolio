import { motion, useScroll, useTransform } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Layout, Server, Database } from "lucide-react";

const skillsData = [
  {
    category: "Languages",
    icon: Code2,
    skills: ["C++", "Java", "Python", "JavaScript", "TypeScript", "Rust", "Dart", "SQL"],
    gradient: "linear-gradient(135deg, #4FC3F7, #5DADE2)",
  },
  {
    category: "Frontend",
    icon: Layout,
    skills: ["React", "Next.js", "TailwindCSS", "Bootstrap", "Flutter"],
    gradient: "linear-gradient(135deg, #9575CD, #B39DDB)",
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Flask", "gRPC"],
    gradient: "linear-gradient(135deg, #4FC3F7, #9575CD)",
  },
  {
    category: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Apache Pinot"],
    gradient: "linear-gradient(135deg, #9575CD, #4FC3F7)",
  },
];

export function Skills() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-12 sm:py-16 md:py-20 px-4"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16 gradient-text py-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillsData.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
                whileHover={{ y: -8 }}
              >
                <div className="relative rounded-2xl p-4 sm:p-6 overflow-hidden glass-card transition-all duration-300 h-full">
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: category.gradient,
                      opacity: 0.05,
                    }}
                  />

                  <div className="flex items-center gap-3 sm:gap-4">
                  {/* Icon */}
                  <motion.div 
                    className="icon-wrapper icon-wrapper-md mb-3 sm:mb-4 relative z-10"
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.15
                    }}
                    transition={{ duration: 0.5 }}
                    >
                    <Icon className="w-6 h-6" />
                  </motion.div>

                  {/* Category name */}
                  <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 relative z-10 text-primary">
                    {category.category}
                  </h3>
                    </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-2 sm:px-3 py-1 shrink-0 rounded-lg text-xs sm:text-sm transition-all cursor-default text-foreground hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ 
                          scale: 1.05,
                          y: -2,
                          boxShadow: "0 4px 12px rgba(79, 195, 247, 0.2)"
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional technologies */}
        <div className="relative mt-8 sm:mt-12 flex justify-center">
          <motion.div
            className="flex gap-2 sm:gap-4 flex-wrap justify-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            // style={{ y }}
          >
            {[
              "Git",
              "Docker",
              "Kubernetes",
              "Prometheus",
              "Grafana",
              "Tauri",
              "Electron",
              "Prisma",
              "WebSocket",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                className="px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm glass-card text-muted-foreground hover:text-primary hover:border-primary transition-colors relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                  boxShadow: "0 8px 25px rgba(149, 117, 205, 0.3)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
