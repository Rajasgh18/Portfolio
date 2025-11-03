import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Github, Linkedin, Send, Phone } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock form submission
    toast.success("Message sent successfully! I'll get back to you soon.", {
      duration: 4000,
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4">
                Let's work together
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach
                out!
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-3 sm:space-y-4">
              <motion.a
                href="mailto:rajasgh18@gmail.com"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all group glass-card border-primary/30 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 30px rgba(79, 195, 247, 0.3)"
                }}
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div 
                  className="icon-wrapper icon-wrapper-md relative z-10"
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 icon-primary" />
                </motion.div>
                <div className="min-w-0 relative z-10">
                  <p className="text-xs sm:text-sm font-semibold">Email</p>
                  <p className="text-sm sm:text-base truncate">
                    rajasgh18@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+919752159633"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all group glass-card border-primary/30 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 30px rgba(79, 195, 247, 0.3)"
                }}
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div 
                  className="icon-wrapper icon-wrapper-md relative z-10"
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 icon-primary" />
                </motion.div>
                <div className="min-w-0 relative z-10">
                  <p className="text-xs sm:text-sm font-semibold">Phone</p>
                  <p className="text-sm sm:text-base truncate">
                    +91 9752159633
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/Rajasgh18"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all group glass-card border-primary/30 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 30px rgba(79, 195, 247, 0.3)"
                }}
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div 
                  className="icon-wrapper icon-wrapper-md relative z-10"
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 icon-primary" />
                </motion.div>
                <div className="min-w-0 relative z-10">
                  <p className="text-xs sm:text-sm font-semibold">GitHub</p>
                  <p className="text-sm sm:text-base truncate">
                    github.com/Rajasgh18
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/rajasgh18"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all group glass-card border-primary/30 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 30px rgba(79, 195, 247, 0.3)"
                }}
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div 
                  className="icon-wrapper icon-wrapper-md relative z-10"
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 icon-primary" />
                </motion.div>
                <div className="min-w-0 relative z-10">
                  <p className="text-xs sm:text-sm font-semibold">LinkedIn</p>
                  <p className="text-sm sm:text-base truncate">
                    linkedin.com/in/rajasgh18
                  </p>
                </div>
              </motion.a>
            </div>

            {/* Decorative element */}
            <motion.div
              className="relative p-4 sm:p-6 rounded-xl bg-primary/10 border border-primary/30"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p
                className="text-center italic text-sm sm:text-base text-primary"
              >
                "Innovation distinguishes between a leader and a follower."
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="relative">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-muted border-border placeholder:text-muted-foreground transition-all focus:shadow-[0_0_20px_rgba(79,195,247,0.2)] focus:border-primary"
                />
              </div>

              <div className="relative">
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-muted border-border placeholder:text-muted-foreground transition-all focus:shadow-[0_0_20px_rgba(79,195,247,0.2)] focus:border-primary"
                />
              </div>

              <div className="relative">
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-muted border-border placeholder:text-muted-foreground transition-all resize-none focus:shadow-[0_0_20px_rgba(79,195,247,0.2)] focus:border-primary"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 sm:py-4 rounded-xl relative overflow-hidden group bg-primary"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 40px rgba(79, 195, 247, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                  }}
                />

                <span className="relative flex items-center justify-center gap-2 text-sm sm:text-base">
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Send Message
                </span>
              </motion.button>
            </form>

            {/* Additional info */}
            <motion.div
              className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p>I typically respond within 24 hours</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
