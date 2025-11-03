import { motion, useScroll, useTransform } from "motion/react";
import { Github, Linkedin, LucideCode, Mail } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(79, 195, 247, 0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(149, 117, 205, 0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          color: "var(--foreground)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full"
        style={{ opacity, scale, y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center w-fit mx-auto gap-x-3 mb-4 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base border font-medium text-primary bg-primary/10 border-primary/30 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05, borderColor: "var(--primary)" }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <LucideCode className="text-primary" />
            </motion.div>
            Full Stack Developer
          </motion.div>

          <motion.h1
            className="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 px-2 py-2 gradient-text"
            style={{ backgroundSize: "200% auto" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.2 },
              y: { duration: 0.8, delay: 0.2 },
              backgroundPosition: { duration: 5, repeat: Infinity, ease: "linear" }
            }}
          >
            Raja Kumar Singh
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-sm sm:text-lg md:text-xl mb-8 sm:mb-12 px-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Turning ideas into elegant digital experiences — whether on the web or
          mobile. I’m a developer who blends creativity, precision, and
          performance to craft meaningful solutions.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8 sm:mb-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl relative overflow-hidden group w-full sm:w-auto bg-primary"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(79, 195, 247, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              Contact Me
            </span>
            <div className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </motion.div>

        <motion.div
          className="flex gap-4 sm:gap-6 justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.a
            href="https://github.com/Rajasgh18"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-wrapper icon-wrapper-md"
            whileHover={{
              scale: 1.15,
              rotate: 360
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <Github className="h-5 w-5 sm:h-6 sm:w-6" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/rajasgh18"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-wrapper icon-wrapper-md"
            whileHover={{
              scale: 1.15,
              rotate: 360
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
