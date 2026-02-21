"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Heart, 
  ArrowUp,
  Sparkles,
  Code,
  Coffee,
  MapPin
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://github.com/siddhant-atole", icon: Github, label: "GitHub", username: "@siddhant-atole" },
    { href: "https://linkedin.com/in/siddhant-atole", icon: Linkedin, label: "LinkedIn", username: "in/siddhant-atole" },
    { href: "mailto:siddhantatole9115@gmail.com", icon: Mail, label: "Email", username: "siddhantatole9115" },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const resources = [
    { label: "Resume", href: "/resume.pdf" },
    { label: "Blog", href: "/blog" },
    { label: "GitHub Repo", href: "https://github.com/siddhant-atole/portfolio" },
  ];

  return (
    <>
      <footer className="relative w-full bg-gradient-to-t from-primary/[0.02] via-primary/[0.01] to-transparent border-t border-border/40 overflow-hidden">
        
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
        </div>

        {/* Top gradient line with animation */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent origin-left"
        />

        <div className="container mx-auto px-4 py-16 relative z-10">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            
            {/* Brand Column - 4 cols */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link href="/" className="inline-block mb-4 group">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="text-3xl font-bold bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient"
                  >
                    Siddhant Atole
                  </motion.span>
                </Link>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  First-year IT Diploma student passionate about creating 
                  beautiful and functional web experiences. Always learning, 
                  always growing.
                </p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Pune, India</span>
                  <span className="w-1 h-1 rounded-full bg-primary/40 mx-2" />
                  <span className="flex items-center gap-1">
                    <Coffee className="w-3 h-3" /> Available for work
                  </span>
                </div>

                {/* Social Links with hover effects */}
                <div className="flex gap-3">
                  {socialLinks.map(({ href, icon: Icon, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(123,130,254,0.3)]"
                      aria-label={label}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links - 2 cols */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li 
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link 
                        href={link.href} 
                        className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                        onClick={(e) => {
                          e.preventDefault();
                          const section = document.querySelector(link.href);
                          if (section) {
                            section.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                      >
                        <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary group-hover:w-2 transition-all duration-300" />
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Resources - 2 cols */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Code className="w-4 h-4 text-primary" />
                  Resources
                </h3>
                <ul className="space-y-3">
                  {resources.map((link, index) => (
                    <motion.li 
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link 
                        href={link.href} 
                        target={link.href.startsWith('http') ? "_blank" : undefined}
                        className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary group-hover:w-2 transition-all duration-300" />
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Connect Column - 4 cols */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="lg:pl-8 lg:border-l border-white/10"
              >
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Let's Connect
                </h3>

                <div className="space-y-4 mb-6">
                  {socialLinks.map(({ href, icon: Icon, label, username }, index) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="group flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{label}</p>
                          <p className="text-xs text-muted-foreground">{username}</p>
                        </div>
                      </div>
                      <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </div>
                    </motion.a>
                  ))}
                </div>

                <Button 
                  variant="default" 
                  size="lg" 
                  className="w-full group relative overflow-hidden"
                  onClick={() => {
                    window.location.href = "mailto:siddhantatole9115@gmail.com?subject=Let's%20connect";
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send me a message
                    <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t border-border/40"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Siddhant Atole. All rights reserved.
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Built with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                </motion.div>
                <span>and</span>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Coffee className="w-4 h-4 text-amber-600" />
                </motion.div>
                <span>using Next.js</span>
              </div>

              <div className="flex items-center gap-6">
                <Link 
                  href="https://github.com/siddhant-atole/portfolio" 
                  target="_blank"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  <Github className="w-3 h-3" /> Source
                </Link>
                <Link 
                  href="/resume.pdf" 
                  className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  Resume
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom glow effect */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/40 via-purple-500/40 to-transparent animate-pulse-slow" />
      </footer>

      {/* Scroll Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg z-50 hover:shadow-[0_0_30px_rgba(123,130,254,0.5)] transition-shadow"
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}