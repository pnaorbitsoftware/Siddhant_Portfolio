import Container from "@/components/Container";
import { useEffect, useRef, useState, useCallback } from "react";
import homeStyles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code2,
  MonitorSmartphone,
  Github,
  ExternalLink,
  BookOpen,
  Rocket,
  Mail,
  MapPin,
  Calendar,
  Award,
  Sparkles,
  Linkedin,
  Twitter,
  Zap,
  Layers,
  Globe,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";
import { motion, useScroll, useTransform } from "framer-motion";

// ============ DATA ============

const aboutStats = [
  { label: "Year of Study", value: "First Year", icon: Calendar, color: "from-blue-500 to-cyan-500" },
  { label: "Projects Built", value: "5+", icon: Award, color: "from-purple-500 to-pink-500" },
  { label: "Technologies", value: "6+", icon: Code2, color: "from-green-500 to-emerald-500" },
  { label: "College", value: "AISSMS Poly", icon: MapPin, color: "from-orange-500 to-red-500" },
];

const projects = [
  {
    title: "Personal Portfolio v2",
    description: "Modern portfolio website with smooth animations, responsive design, and optimized performance.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    href: "https://github.com/siddhant-atole/portfolio",
    live: "https://siddhant-atole.vercel.app",
    category: "Web Development",
    gradient: "from-primary to-secondary",
    icon: Code2,
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with 5-day forecast, location search, and interactive charts.",
    tech: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
    href: "https://github.com/siddhant-atole/weather-app",
    live: "#",
    category: "API Integration",
    gradient: "from-blue-500 to-cyan-500",
    icon: Globe,
  },
  {
    title: "TaskFlow - Todo App",
    description: "Feature-rich task management with local storage, dark mode, and drag-drop functionality.",
    tech: ["React", "Context API", "LocalStorage", "Tailwind CSS"],
    href: "https://github.com/siddhant-atole/taskflow",
    live: "#",
    category: "Productivity",
    gradient: "from-purple-500 to-pink-500",
    icon: Layers,
  },
  {
    title: "Modern Calculator",
    description: "Scientific calculator with history tracking, multiple themes, and keyboard support.",
    tech: ["JavaScript", "HTML5", "CSS3", "Math.js"],
    href: "https://github.com/siddhant-atole/calculator",
    live: "#",
    category: "Utility",
    gradient: "from-orange-500 to-red-500",
    icon: Zap,
  },
];

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML5/CSS3", level: 85 },
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "React.js", level: 75 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Responsive Design", level: 80 },
    ],
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Currently Learning",
    items: [
      { name: "TypeScript", level: 60 },
      { name: "Next.js", level: 65 },
      { name: "Node.js", level: 50 },
      { name: "UI/UX Principles", level: 55 },
      { name: "Figma", level: 60 },
    ],
    icon: BookOpen,
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Tools & Workflow",
    items: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Chrome DevTools", level: 75 },
      { name: "Vercel", level: 70 },
      { name: "Postman", level: 65 },
    ],
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
  },
];

// ============ COMPONENTS ============

function BackgroundEffects() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
    </div>
  );
}

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">{name}</span>
        <span className="text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
        />
      </div>
    </motion.div>
  );
}

function HeroPlaceholder() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative h-[400px] xl:h-[600px] flex items-center justify-center"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-600/20 to-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
      
      {/* Main orb */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative w-80 h-80"
      >
        {/* Rotating rings */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
        <div className="absolute inset-4 rounded-full border-2 border-dashed border-purple-600/30 animate-spin-slower" />
        <div className="absolute inset-8 rounded-full border-2 border-dashed border-secondary/30 animate-spin-reverse" />
        
        {/* Center with icons */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-32 h-32">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <Code2 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-primary" />
              <MonitorSmartphone className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 text-purple-600" />
              <Rocket className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-secondary" />
              <Zap className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-6 h-6 text-yellow-500" />
            </motion.div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary/60" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          initial={{
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200,
          }}
          animate={{
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200,
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </motion.div>
  );
}

// ============ MAIN COMPONENT ============

export default function Home() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  // Carousel setup
 // Vanilla Tilt effect (TYPE SAFE)
useEffect(() => {
  if (typeof window === "undefined") return;

  const tiltElements = Array.from(
    document.querySelectorAll<HTMLElement>("[data-tilt]")
  );

  if (tiltElements.length > 0) {
    VanillaTilt.init(tiltElements, {
      max: 8,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      gyroscope: true,
      perspective: 900,
      scale: 1.02,
    });
  }

  return () => {
    tiltElements.forEach((el) => {
      const tilt = (el as any).vanillaTilt;
      if (tilt) {
        tilt.destroy();
      }
    });
  };
}, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <Container>
      <div data-scroll-container>
        <BackgroundEffects />

        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          id="home"
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative min-h-screen flex items-center pt-20 xl:pt-0 overflow-hidden"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap gap-3 mb-6"
                >
                  <span className="px-4 py-1.5 text-xs font-medium border border-primary/30 rounded-full text-primary bg-primary/5 backdrop-blur-sm">
                    🎓 First Year
                  </span>
                  <span className="px-4 py-1.5 text-xs font-medium border border-purple-600/30 rounded-full text-purple-600 bg-purple-600/5 backdrop-blur-sm">
                    💻 IT Diploma
                  </span>
                  <span className="px-4 py-1.5 text-xs font-medium border border-secondary/30 rounded-full text-secondary bg-secondary/5 backdrop-blur-sm">
                    ⚡ Web Developer
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-7xl xl:text-8xl font-light tracking-tight mb-6"
                >
                  <span className="block">Hi, I'm</span>
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
                    Siddhant Atole
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
                >
                  First-year Information Technology diploma student at AISSMS Polytechnic. 
                  Passionate about building modern web applications and solving real-world problems through elegant code.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-4 mb-12"
                >
                  <Button 
                    size="lg" 
                    onClick={() => scrollToSection("#contact")}
                    className="group"
                  >
                    <span>Get in touch</span>
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollToSection("#projects")}
                    className="group"
                  >
                    <span>View my work</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>

                {/* Social links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-6"
                >
                  <span className="text-sm text-muted-foreground">Find me on:</span>
                  <div className="flex gap-4">
                    <Link href="https://github.com/siddhant-atole" target="_blank" 
                      className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={20} />
                    </Link>
                    <Link href="https://linkedin.com/in/siddhant-atole" target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin size={20} />
                    </Link>
                    <Link href="https://twitter.com/siddhant_atole" target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors">
                      <Twitter size={20} />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Content - 3D Placeholder */}
              <HeroPlaceholder />
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-5 h-9 border-2 border-primary/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-primary rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-32 relative"
        >
          <div className="container mx-auto px-6">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <span className="text-sm uppercase tracking-[0.2em] text-primary mb-4 block">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-light mb-8">
                Passionate about creating{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
                  digital experiences
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a first-year diploma student with a strong interest in web development. 
                My journey started a year ago, and since then I've been building projects 
                that help me learn and grow. I believe in writing clean code and creating 
                intuitive user experiences.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {aboutStats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group relative"
                  >
                    <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-primary/30 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <div className="text-3xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent relative"
        >
          <div className="container mx-auto px-6">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <span className="text-sm uppercase tracking-[0.2em] text-primary mb-4 block">
                Technical Skills
              </span>
              <h2 className="text-4xl md:text-5xl font-light mb-4">
                What I work with
              </h2>
              <p className="text-muted-foreground text-lg">
                Here are the technologies and tools I'm currently learning and using in my projects.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {skills.map((skillGroup, groupIdx) => {
                const Icon = skillGroup.icon;
                return (
                  <motion.div
                    key={skillGroup.category}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                    whileHover={{ y: -5 }}
                    data-tilt
                    className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${skillGroup.color} bg-opacity-10`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                      </div>
                    </div>

                    <div className="space-y-5">
                      {skillGroup.items.map((skill, idx) => (
                        <SkillBar key={skill.name} name={skill.name} level={skill.level} index={idx} />
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-32"
        >
          <div className="container mx-auto px-6">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <span className="text-sm uppercase tracking-[0.2em] text-primary mb-4 block">
                Featured Projects
              </span>
              <h2 className="text-4xl md:text-5xl font-light mb-4">
                Things I've built
              </h2>
              <p className="text-muted-foreground text-lg">
                A collection of projects that showcase my learning journey and technical skills.
              </p>
            </motion.div>

            <div className="mt-14">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {projects.map((project, idx) => {
                    const Icon = project.icon;
                    return (
                      <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/3">
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: { opacity: 1, scale: 1 }
                          }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                          <Card data-tilt className="h-full overflow-hidden group">
                            <CardHeader className="p-0 relative">
                              <div className={`aspect-video bg-gradient-to-br ${project.gradient} bg-opacity-20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                                <Icon size={48} className="text-white/40 group-hover:text-white/60 transition-colors" />
                              </div>
                              <span className="absolute top-4 left-4 px-3 py-1 text-xs bg-background/80 backdrop-blur rounded-full border border-white/10">
                                {project.category}
                              </span>
                            </CardHeader>
                            <CardContent className="p-6">
                              <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                              </CardTitle>
                              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                {project.description}
                              </p>
                              <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech) => (
                                  <span key={tech} className="text-xs px-3 py-1 bg-primary/10 rounded-full text-primary/80">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              <div className="flex gap-4 pt-4 border-t border-border/40">
                                <Link 
                                  href={project.href} 
                                  target="_blank" 
                                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link"
                                >
                                  <Github size={16} className="group-hover/link:rotate-12 transition-transform" />
                                  <span>Code</span>
                                </Link>
                                {project.live !== "#" && (
                                  <Link 
                                    href={project.live} 
                                    target="_blank" 
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link"
                                  >
                                    <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                    <span>Live Demo</span>
                                  </Link>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12" />
                <CarouselNext className="hidden md:flex -right-12" />
              </Carousel>
              
              {count > 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center gap-2 mt-8"
                >
                  {Array.from({ length: count }).map((_, i) => (
                    <motion.div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i + 1 === current ? 'w-8 bg-primary' : 'w-4 bg-primary/30'
                      }`}
                      animate={i + 1 === current ? { scale: 1.1 } : { scale: 1 }}
                    />
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        {/* Contact Section */}
<motion.section
  id="contact"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  className="py-32 relative"
>
  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
  
  <div className="container mx-auto px-6 relative z-10">
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-16">
        <span className="text-sm uppercase tracking-[0.2em] text-primary mb-4 block">
          Get In Touch
        </span>
        <h2 className="text-5xl md:text-6xl font-light mb-6">
          Let's{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
            work together
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I'm currently looking for internship opportunities and am open to collaborating on interesting projects. 
          Feel free to reach out!
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
        {/* Email Card - Fixed with working mailto */}
        <motion.a
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ delay: 0.2 }}
          href="mailto:siddhantatole9115@gmail.com?subject=Let's%20work%20together&body=Hi%20Siddhant%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0A%0A"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 text-center cursor-pointer"
          whileHover={{ y: -5 }}
          onClick={(e) => {
            // Fallback if mailto doesn't work
            window.location.href = "mailto:siddhantatole9115@gmail.com?subject=Let's%20work%20together&body=Hi%20Siddhant%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0A%0A";
          }}
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="text-sm text-muted-foreground">siddhantatole9115@gmail.com</p>
        </motion.a>

        {/* GitHub Card */}
        <motion.a
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ delay: 0.3 }}
          href="https://github.com/siddhant-atole"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 text-center cursor-pointer"
          whileHover={{ y: -5 }}
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Github className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">GitHub</h3>
          <p className="text-sm text-muted-foreground">@siddhant-atole</p>
        </motion.a>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
      >
        <span className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" /> Pune, India
        </span>
        <span className="w-1 h-1 rounded-full bg-primary/40" />
        <span className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" /> First Year IT
        </span>
        <span className="w-1 h-1 rounded-full bg-primary/40" />
        <span className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-primary" /> Available for internships
        </span>
      </motion.div>
    </motion.div>
  </div>
</motion.section>
      </div>
    </Container>
  );
}