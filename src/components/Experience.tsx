import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "National Technical Research Organisation (NTRO)",
    location: "New Delhi, India",
    period: "April – June 2025",
    description:
      "Architected a Windows-based application for parallel virus scanning across multiple virtual machines. Implemented a distributed system managing 10+ VMs with different antivirus engines, designed a smart file distribution algorithm improving malware detection by 85%, and built a monitoring dashboard using Tauri framework.",
    technologies: ["Rust", "Tauri", "gRPC", "Distributed Systems", "Windows"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Logify360",
    location: "Remote",
    period: "December 2024 – February 2025",
    description:
      "Developed and maintained a comprehensive cloud observability platform integrating APM, logging, alerting, and infrastructure monitoring. Implemented real-time log aggregation using Apache Pinot, reducing query response time by 70%. Configured Prometheus metrics collection and Grafana dashboards, improving incident response time by 50%.",
    technologies: [
      "Apache Pinot",
      "Prometheus",
      "Grafana",
      "Kubernetes",
      "Docker",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Narayanpur Police, Chhattisgarh",
    location: "Narayanpur, India",
    period: "May – July 2024",
    description:
      "Developed a centralized database management system for storing and organizing naxalite information, improving data accessibility by 60%. Created an Electron-based application for processing and analyzing telecom data (TDR, CDR, IPDR) to identify suspicious patterns. Built interactive dashboards for law enforcement and optimized data processing pipeline, reducing analysis time by 75% for 1M+ data points.",
    technologies: [
      "Electron",
      "Node.js",
      "PostgreSQL",
      "Data Analytics",
      "Dashboard",
    ],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="hidden md:block absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary"
          />

          {/* Experience items */}
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-4 md:left-1/2 transform md:-translate-x-1/2 items-center justify-center">
                  <motion.div
                    className="size-3 sm:size-4 rounded-full relative z-10 bg-gradient-to-br from-primary to-pink-500"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "linear-gradient(120deg, #4FC3F7, #9575CD)",
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </div>

                {/* Content card */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8 lg:pr-12" : "md:pl-8 lg:pl-12"
                  } md:pl-0`}
                >
                  <motion.div
                    className="rounded-2xl p-4 sm:p-6 glass-card transition-all duration-300 group relative overflow-hidden"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 12px 40px rgba(79, 195, 247, 0.3)",
                    }}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(79, 195, 247, 0.05), rgba(149, 117, 205, 0.05))",
                      }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-start gap-3 sm:gap-4">
                        {/* Icon */}
                        <motion.div
                          className="icon-wrapper icon-wrapper-md mb-3 sm:mb-4"
                          whileHover={{
                            rotate: [0, -10, 10, -10, 0],
                            scale: 1.15,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
                        </motion.div>

                        <div>
                          {/* Title and Company */}
                          <h3 className="text-lg sm:text-xl font-bold transition-all group-hover:text-primary">
                            <span>{exp.title}</span>
                          </h3>
                          <p className="text-sm sm:text-base mb-2 sm:mb-3 font-medium text-muted-foreground">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Location and Period */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base mb-3 sm:mb-4 text-muted-foreground">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm border border-primary text-primary bg-primary/10 backdrop-blur-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.2 + techIndex * 0.05,
                            }}
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "rgba(79, 195, 247, 0.2)",
                              boxShadow: "0 4px 12px rgba(79, 195, 247, 0.3)",
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
