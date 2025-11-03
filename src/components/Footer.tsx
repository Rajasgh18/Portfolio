import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-10 md:py-12 px-4 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Branding */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl mb-2" style={{
              background: 'linear-gradient(120deg, #4FC3F7, #9575CD)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Raja Kumar Singh
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">Computer Science Engineer | Full Stack Developer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/Rajasgh18"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-wrapper icon-wrapper-md"
              whileHover={{ 
                scale: 1.15,
                rotate: 360,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/rajasgh18"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-wrapper icon-wrapper-md"
              whileHover={{ 
                scale: 1.15,
                rotate: 360,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
            <motion.a
              href="mailto:rajasgh18@gmail.com"
              className="icon-wrapper icon-wrapper-md"
              whileHover={{ 
                scale: 1.15,
                rotate: 360,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-6 sm:my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Copyright */}
        <motion.div
          className="text-center text-xs sm:text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} Raja Kumar Singh
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
