import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Sparkles, Rocket } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const textY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-12 sm:py-16 md:py-20 px-4"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative floating"
            style={{ y: imageY }}
          >
            <div
              className="relative overflow-hidden rounded-3xl group glass-card"
            >
              <ImageWithFallback
                src="/Raja.jpeg"
                alt="Raja Kumar Singh"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(45deg, rgba(79, 195, 247, 0.2), rgba(149, 117, 205, 0.2))",
                }}
              />
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow" />
            </div>

            {/* Animated floating orbs */}
            <motion.div
              className="absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 rounded-full blur-2xl"
              style={{
                background: "#4FC3F7",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 rounded-full blur-2xl"
              style={{
                background: "#9575CD",
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
            style={{ y: textY }}
          >
            <p
              className="text-base sm:text-lg leading-relaxed text-muted-foreground"
            >
              I love bringing ideas to life through technology — from
              interactive web platforms to fluid mobile apps. My focus is always
              on building experiences that are fast, reliable, and enjoyable to
              use. For me, development isn't just about code — it's about
              creating impact.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <motion.div
                className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl glass-card relative overflow-hidden group"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 30px rgba(79, 195, 247, 0.3)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <div className="relative z-10 flex items-start gap-3 sm:gap-4 w-full">
                  <motion.div
                    className="icon-wrapper icon-wrapper-sm"
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Code2 className="w-4 h-4 sm:w-5 sm:h-5 icon-primary" />
                  </motion.div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold">
                      B.Tech in Computer Science Engineering
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Bhilai Institute of Technology, Durg (2022 - 2026)
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl glass-card relative overflow-hidden group"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 30px rgba(149, 117, 205, 0.3)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <div className="relative z-10 flex items-start gap-3 sm:gap-4 w-full">
                  <motion.div
                    className="icon-wrapper icon-wrapper-sm"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 icon-primary" />
                  </motion.div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold">
                      Full Stack Developer with passion for innovation
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Creating impactful digital experiences
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl glass-card relative overflow-hidden group"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 30px rgba(79, 195, 247, 0.3)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <div className="relative z-10 flex items-start gap-3 sm:gap-4 w-full">
                  <motion.div
                    className="icon-wrapper icon-wrapper-sm"
                    whileHover={{ 
                      y: -5,
                      scale: 1.15
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Rocket className="w-4 h-4 sm:w-5 sm:h-5 icon-primary" />
                  </motion.div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold">
                      Experienced in Cloud Observability & Distributed Systems
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Specialized in APM, logging, and infrastructure monitoring
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="pt-4 sm:pt-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.div
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base glass-card relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(79, 195, 247, 0.1), transparent)"
                  }}
                  animate={{
                    x: ["-100%", "100%"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <p className="text-primary font-medium italic relative z-10">
                  "Building the future, one line of code at a time"
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
