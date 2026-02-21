import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import Preloader from "@/components/Preloader";
import { Menu, X, Github, Mail, Linkedin } from "lucide-react";

type ContainerProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
};

const navLinks = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#skills", text: "Skills" },
  { href: "#projects", text: "Projects" },
  { href: "#contact", text: "Contact" },
];

export default function Container(props: ContainerProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>("home");

  const { children, ...customMeta } = props;
  const router = useRouter();
  
  const meta = {
    title: "Siddhant Atole - IT Diploma Student & Web Developer",
    description: `First-year Information Technology diploma student passionate about building modern web applications.`,
    image: "/assets/logo.webp",
    type: "website",
    ...customMeta,
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id") || "home";
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="theme-color" content="#7B82FE" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://siddhant-atole.vercel.app${router.asPath}`} />
        <link rel="canonical" href={`https://siddhant-atole.vercel.app${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Siddhant Atole" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </Head>

      {/* Navbar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled 
            ? "bg-background/80 backdrop-blur-xl border-b border-white/10 py-4" 
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              SA
            </motion.span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "nav-link",
                  activeSection === link.href.substring(1) && "nav-active"
                )}
              >
                {link.text}
              </button>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="https://github.com/siddhant-atole" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={18} />
            </Link>
            <Link href="https://linkedin.com/in/siddhant-atole" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={18} />
            </Link>
            <Link href="mailto:siddhantatole9115@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 }
              }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-xl pt-24"
          >
            <div className="container mx-auto px-6 flex flex-col h-full">
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => scrollToSection(link.href)}
                    className={cn(
                      "text-left text-2xl font-light py-2 border-b border-white/10",
                      activeSection === link.href.substring(1) ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {link.text}
                  </motion.button>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex space-x-6 py-8 mt-auto"
              >
                <Link href="https://github.com/siddhant-atole" target="_blank" className="text-muted-foreground hover:text-primary">
                  <Github size={24} />
                </Link>
                <Link href="https://linkedin.com/in/siddhant-atole" target="_blank" className="text-muted-foreground hover:text-primary">
                  <Linkedin size={24} />
                </Link>
                <Link href="mailto:siddhantatole9115@gmail.com" className="text-muted-foreground hover:text-primary">
                  <Mail size={24} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      {/* Main content */}
      <main className={cn("pt-20", props.className)}>{children}</main>
      
      <Footer />
    </>
  );
}