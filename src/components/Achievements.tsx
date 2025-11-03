import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Trophy, Award, Medal, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const achievements = [
  {
    title: "Smart India Hackathon (SIH) 2024",
    position: "winner",
    icon: Trophy,
    gradient: "linear-gradient(135deg, #FFD700, #FFA500)",
    description: "Winner at India's biggest national level hackathon",
  },
  {
    title: "OpinHacks",
    position: "first-runner-up",
    icon: Award,
    gradient: "linear-gradient(135deg, #C0C0C0, #A8A8A8)",
    description: "1st Runner Up at OpinHacks, BIT Durg",
  },
  {
    title: "KU Hackathon",
    position: "second-runner-up",
    icon: Medal,
    gradient: "linear-gradient(135deg, #CD7F32, #B87333)",
    description: "2nd Runner Up at Kalinga University Hackathon",
  },
  {
    title: "R1 Code Fiesta",
    position: "second-runner-up",
    icon: Star,
    gradient: "linear-gradient(135deg, #CD7F32, #B87333)",
    description: "2nd Runner Up at R1 Code Fiesta, Rungta College",
  },
];

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const getBorderColor = (position: string) => {
    switch (position) {
      case "winner":
        return "border-yellow-500 dark:border-yellow-400";
      case "first-runner-up":
        return "border-gray-500 dark:border-gray-400";
      case "second-runner-up":
        return "border-amber-700 dark:border-amber-600";
      default:
        return "border-primary";
    }
  };

  const getBgColor = (position: string) => {
    switch (position) {
      case "winner":
        return "bg-yellow-500/10 dark:bg-yellow-400/10";
      case "first-runner-up":
        return "bg-gray-500/10 dark:bg-gray-400/10";
      case "second-runner-up":
        return "bg-amber-700/10 dark:bg-amber-600/10";
      default:
        return "bg-primary/10";
    }
  };
  const getTextColor = (position: string) => {
    switch (position) {
      case "winner":
        return "text-yellow-600 dark:text-yellow-400";
      case "first-runner-up":
        return "text-gray-600 dark:text-gray-400";
      case "second-runner-up":
        return "text-amber-700 dark:text-amber-500";
      default:
        return "text-primary";
    }
  };

  const getPosition = (position: string) => {
    switch (position) {
      case "winner":
        return "Winner";
      case "first-runner-up":
        return "1st Runner-Up";
      case "second-runner-up":
        return "2nd Runner-Up";
      default:
        return position;
    }
  };

  return (
    <section
      id="achievements"
      className="py-12 sm:py-16 md:py-20 px-4"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 cursor-default">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{
                  duration: 0.3,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                className="relative group"
                whileHover={{ 
                  y: -8,
                  scale: 1.02
                }}
              >
                <div
                  className={cn(
                    "rounded-2xl w-[320px] shrink-0 p-4 sm:p-6 glass-card transition-all duration-300 h-full flex flex-col items-center text-center relative overflow-hidden border",
                    getBgColor(achievement.position),
                    getBorderColor(achievement.position),
                  )}
                >
                  {/* Animated glow effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: achievement.gradient,
                      filter: "blur(40px)",
                      opacity: 0.15
                    }}
                  />
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Icon with animated ring */}
                    <motion.div
                      className={cn(
                        "w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 rounded-full flex items-center justify-center relative border shadow-lg",
                        getBgColor(achievement.position),
                        getTextColor(achievement.position),
                        getBorderColor(achievement.position),
                      )}
                      whileHover={{
                        scale: 1.1,
                        rotate: 360
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                    >
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10" />

                      {/* Pulsing ring effect */}
                      <motion.div
                        className={cn(
                          "absolute inset-0 rounded-full border",
                          getBorderColor(achievement.position),
                        )}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>

                    {/* Position badge */}
                    <motion.div
                      className={cn(
                        "px-3 sm:px-4 py-1 rounded-full mb-2 sm:mb-3 text-xs sm:text-sm border",
                        getBgColor(achievement.position),
                        getBorderColor(achievement.position),
                        getTextColor(achievement.position),
                      )}
                      whileHover={{ scale: 1.1 }}
                    >
                      {getPosition(achievement.position)}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl mb-2">
                      {achievement.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats summary */}
        <motion.div
          className="mt-10 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center p-4 sm:p-6 rounded-2xl bg-muted border">
            <motion.div
              className="text-3xl sm:text-4xl mb-2 text-yellow-600 dark:text-yellow-400"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1, type: "spring" }}
            >
              1
            </motion.div>
            <p className="text-xs sm:text-sm text-muted-foreground">Winner</p>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-2xl bg-muted border">
            <motion.div
              className="text-3xl sm:text-4xl mb-2 text-gray-600 dark:text-gray-400"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.1, type: "spring" }}
            >
              1
            </motion.div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Runner-Up
            </p>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-2xl bg-muted border">
            <motion.div
              className="text-3xl sm:text-4xl mb-2 text-amber-700 dark:text-amber-500"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
            >
              2
            </motion.div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Runner-Ups
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
