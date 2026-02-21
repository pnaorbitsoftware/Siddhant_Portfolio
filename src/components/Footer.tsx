"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { MailIcon, GithubIcon, LinkedinIcon, HeartIcon, ArrowUpIcon } from "lucide-react";
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
    { href: "https://github.com/siddhant-atole", icon: GithubIcon, label: "GitHub", username: "@siddhant-atole" },
    { href: "https://linkedin.com/in/siddhant-atole", icon: LinkedinIcon, label: "LinkedIn", username: "in/siddhant-atole" },
    { href: "mailto:siddhant.atole@email.com", icon: MailIcon, label: "Email", username: "siddhant.atole" },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <footer className="relative w-full bg-gradient-to-t from-primary/[0.02] via-primary/[0.01] to-transparent border-t border-border/40">
        
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="container mx-auto px-4 py-12">
          
          {/* Simple Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            
            {/* About Column */}
            <div>
              <Link href="/" className="inline-block mb-4">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
                >
                  Siddhant Atole
                </motion.span>
              </Link>

              <p className="text-muted-foreground mb-2">
                First-year IT Diploma student passionate about web development.
              </p>
              <p className="text-sm text-muted-foreground/60">
                Always learning, always growing.
              </p>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-muted-foreground hover:text-primary transition"
                      onClick={(e) => {
                        e.preventDefault();
                        const section = document.querySelector(link.href);
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Column */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Connect With Me</h3>

              <div className="flex flex-col space-y-3">
                {socialLinks.map(({ href, icon: Icon, label, username }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="group flex items-center justify-between text-sm text-muted-foreground hover:text-primary transition border-b border-border/40 pb-2"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="h-4 w-4" />
                      <span>{label}</span>
                    </div>
                    <span className="text-xs text-muted-foreground/40 group-hover:text-primary/60">
                      {username}
                    </span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-6">
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href="#contact">
                    Send me a message
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-border/40">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
              <p className="text-muted-foreground">
                © {currentYear} Siddhant Atole. All rights reserved.
              </p>

              <p className="flex items-center text-xs text-muted-foreground">
                Built with <HeartIcon className="h-3 w-3 mx-1 text-red-500 fill-red-500" /> using Next.js
              </p>

              <div className="flex items-center space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  GitHub Repo
                </Link>
                <span>•</span>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Resume
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom glow effect */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </footer>

      {/* Scroll Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-primary-foreground shadow-lg z-50 hover:bg-primary/90 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <ArrowUpIcon className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}