import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ContactSection from "./ContactSection";
import Navbar from "./Navbar";
import SkillsGrid from "./SkillsGrid";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

// Custom CSS for project hover effects including IBM Plex Sans font
const hoverStyles = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');

  .project-container:hover .project-card:not(:hover),
  .experience-container:hover .experience-card:not(:hover),
  .education-container:hover .education-card:not(:hover),
  .awards-container:hover .award-card:not(:hover) {
    opacity: 0.85;
    transform: scale(0.98);
  }
  
  .project-card {
    position: relative;
    font-family: 'IBM Plex Sans', system-ui, sans-serif;
  }
  
  .project-card h3 {
    font-family: 'IBM Plex Sans', system-ui, sans-serif;
    font-weight: 700;
    letter-spacing: -0.01em;
    line-height: 1.3;
  }
  
  .project-card p {
    font-family: 'IBM Plex Sans', system-ui, sans-serif;
    font-size: 15px;
    line-height: 1.6;
    font-weight: 400;
  }
  
  .project-card h4 {
    font-family: 'IBM Plex Sans', system-ui, sans-serif;
    font-weight: 600;
    letter-spacing: 0.01em;
  }
  
  .project-card::before,
  .experience-card::before {
    content: "";
    position: absolute;
    inset: -5px;
    z-index: -1;
    background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(var(--card-rgb, 29, 78, 216), 0.3) 0%, transparent 60%);
    border-radius: 16px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .project-card:hover::before,
  .experience-card:hover::before {
    opacity: 1;
  }
  
  .experience-card {
    position: relative;
    transition: all 0.3s ease;
    border-color: rgba(var(--card-rgb, 245, 242, 235), 0.4);
  }
  
  .experience-card:hover {
    transform: translateY(-5px) scale(1.02);
    border-color: rgba(var(--card-rgb, 245, 242, 235), 0.9);
    box-shadow: 0 10px 25px -5px rgba(var(--card-rgb, 245, 242, 235), 0.4), 0 0 5px 2px rgba(var(--card-rgb, 245, 242, 235), 0.3);
    z-index: 10;
  }
`;

const Home = () => {
  // Dark mode state - default to true for dark mode
  const [darkMode, setDarkMode] = useState(true);

  // Apply dark mode to document
  useEffect(() => {
    // Check localStorage only after initial render to avoid overriding the default dark mode
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    } else {
      // If no saved preference, enforce dark mode
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", JSON.stringify(true));
    }
  }, []);

  // Update document class whenever dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Wireless Sensor System for Air Leak Detection",
      image:
        "https://images.unsplash.com/photo-1580584126903-c17d41830450?w=800&q=80",
      description:
        "Developed a wireless sensor network to detect and locate air leaks in industrial environments.",
      technologies: ["ESP32", "CTP IP", "C++", "PCB Design"],
      goals:
        "Create a scalable, low-power wireless sensor network capable of detecting air leaks in industrial settings.",
      challenges:
        "Optimizing power consumption for battery-operated sensors and ensuring reliable wireless communication in noisy environments.",
      outcomes:
        "Successfully deployed a network of 12 sensors covering 5000 sq ft with 95% detection accuracy and 6-month battery life.",
    },
    {
      id: 2,
      title: "RISC-V Processor in SystemVerilog",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      description:
        "Designed and implemented a RISC-V processor core using SystemVerilog.",
      technologies: [
        "SystemVerilog",
        "FPGA",
        "Digital Design",
        "Computer Architecture",
      ],
      goals:
        "Implement a fully functional RISC-V processor core capable of executing the RV32I instruction set.",
      challenges:
        "Optimizing the pipeline design to minimize hazards while maintaining high clock frequency.",
      outcomes:
        "Achieved a 5-stage pipelined processor running at 100MHz on a Xilinx Artix-7 FPGA with successful benchmark performance.",
    },
    {
      id: 3,
      title: "Traffic Light Simulation with RTOS",
      image:
        "https://images.unsplash.com/photo-1517328894681-0f5dfabd463c?w=800&q=80",
      description:
        "Built a real-time traffic light control system using an RTOS framework.",
      technologies: ["FreeRTOS", "STM32", "Embedded C", "Real-time Systems"],
      goals:
        "Create a reliable traffic light controller with real-time response to changing traffic conditions.",
      challenges:
        "Ensuring deterministic timing and proper task prioritization in a multi-tasking environment.",
      outcomes:
        "Developed a system with <1ms response time to sensor inputs and fail-safe operation modes for various error conditions.",
    },
  ];

  // Education data
  const education = [
    {
      degree: "B.S. Electrical Engineering",
      institution: "University of Washington",
      year: "2020",
      description: "Focus on embedded systems and digital design",
    },
    {
      degree: "A.S. Chemical Engineering",
      institution: "Bellevue College",
      year: "2018",
      description: "Foundation in process control systems",
    },
  ];

  // Experience data
  const experience = [
    {
      title: "Electrical Engineer",
      company: "Sea-Tac Electric",
      period: "2020 - Present",
      responsibilities: [
        "Lead embedded systems development for industrial control applications",
        "Design and implement FPGA-based signal processing solutions",
        "Develop and maintain firmware for microcontroller-based systems",
        "Collaborate with cross-functional teams to integrate electrical systems with mechanical components",
      ],
    },
  ];

  // Awards data
  const awards = [
    {
      title: "Capstone Project Showcase Winner",
      organization: "University of Washington",
      year: "2020",
      description: "First place for innovative embedded systems design",
    },
    {
      title: "Dean's List",
      organization: "University of Washington",
      year: "2018-2020",
      description: "Maintained GPA above 3.8 for 4 consecutive semesters",
    },
  ];

  // Handle mouse tracking and card effects safely after render
  useEffect(() => {
    // Safety check to ensure we're in the browser environment
    if (typeof window === 'undefined') return;
    
    // Create a safe handler for mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      // Handle both project and experience cards
      const allCards = document.querySelectorAll('.project-card, .experience-card');
      if (!allCards || allCards.length === 0) return;
      
      allCards.forEach(card => {
        try {
          const htmlCard = card as HTMLElement;
          const rect = htmlCard.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          htmlCard.style.setProperty('--x', `${x}%`);
          htmlCard.style.setProperty('--y', `${y}%`);
        } catch (err) {
          // Silently handle any errors with individual cards
          console.debug('Error updating card:', err);
        }
      });
    };

    // Apply colors after a short delay to ensure DOM is ready
    const applyCardColors = () => {
      try {
        // Set different color themes for each project card
        const projectCards = document.querySelectorAll('.project-card');
        if (projectCards && projectCards.length > 0) {
          projectCards.forEach((card, index) => {
            try {
              const htmlCard = card as HTMLElement;
              
              // Assign different colors based on index
              if (index === 0) {
                // First project - reddish
                htmlCard.style.setProperty('--card-rgb', '220, 38, 38');
                htmlCard.style.setProperty('--card-border', 'rgba(220, 38, 38, 0.3)');
              } else if (index === 1) {
                // Second project - greenish
                htmlCard.style.setProperty('--card-rgb', '22, 163, 74');
                htmlCard.style.setProperty('--card-border', 'rgba(22, 163, 74, 0.3)');
              } else {
                // Third project - blue (default)
                htmlCard.style.setProperty('--card-rgb', '29, 78, 216');
                htmlCard.style.setProperty('--card-border', 'rgba(29, 78, 216, 0.3)');
              }
            } catch (err) {
              console.debug('Error setting card color:', err);
            }
          });
        }
      } catch (err) {
        console.debug('Error applying card colors:', err);
      }
    };
    
    // Add event listener with proper error handling
    document.addEventListener('mousemove', handleMouseMove);
    
    // Apply colors after a short delay to ensure DOM is fully rendered
    const colorTimer = setTimeout(applyCardColors, 100);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(colorTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Inject custom CSS */}
      <style dangerouslySetInnerHTML={{ __html: hoverStyles }} />
      <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />

      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hussein Muya
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Electrical Engineer
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg">
              Specializing in embedded systems, digital design, and real-time
              control solutions with a focus on reliability and performance.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    // Get the height of the navbar to offset the scrolling
                    const navbarHeight = document.querySelector('nav')?.clientHeight || 0;
                    const elementPosition = projectsSection.getBoundingClientRect().top + window.scrollY;
                    
                    // Scroll to the projects section with offset for the navbar
                    window.scrollTo({
                      top: elementPosition - navbarHeight,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer"
              >
                View Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div 
              className="profile-container relative group max-w-sm mx-auto mt-8"
              style={{ width: '100%', aspectRatio: '1/1' }}
            >
              {/* Always visible background glow - more subtle version */}
              <div 
                className="absolute inset-0 rounded-full z-0 animate-pulse"
                style={{ 
                  background: 'radial-gradient(circle, rgba(79, 70, 229, 0.3) 0%, rgba(79, 70, 229, 0.1) 50%, rgba(79, 70, 229, 0) 70%)',
                  transform: 'scale(1.25)',
                  filter: 'blur(25px)',
                  animation: 'pulse 4s infinite alternate'
                }}
              ></div>
              
              {/* Subtle accent glow */}
              <div 
                className="absolute inset-0 rounded-full z-0 animate-pulse"
                style={{ 
                  background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(236, 72, 153, 0) 60%)',
                  transform: 'scale(1.2)',
                  filter: 'blur(35px)',
                  animation: 'pulse 5s infinite alternate-reverse'
                }}
              ></div>
              
              {/* Enhanced glow on hover */}
              <div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                style={{ 
                  background: 'radial-gradient(circle, rgba(79, 70, 229, 0.4) 0%, rgba(79, 70, 229, 0.15) 50%, rgba(79, 70, 229, 0) 75%)',
                  transform: 'scale(1.3)',
                  filter: 'blur(20px)'
                }}
              ></div>
              
              {/* The actual image container */}
              <div className="aspect-square rounded-full overflow-hidden border-4 border-primary/20 shadow-xl relative z-10 transition-transform duration-500 group-hover:transform group-hover:scale-105">
                <img
                  src="/images/husse.png"
                  alt="Hussein Muya"
                  className="w-full h-full object-cover"
                  style={{
                    objectFit: 'cover',
                    objectPosition: '35% center',
                    transform: 'scale(1.25)'
                  }}
                />
              </div>
            </div>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden">
          <svg
            className="absolute right-0 top-0 h-full w-1/2 translate-x-1/2 transform text-primary opacity-5"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
          >
            <path d="M0 0 L50 100 L100 0 Z" fill="currentColor" />
          </svg>
          <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            Explore my technical projects showcasing expertise in embedded
            systems, digital design, and real-time control.
          </p>
        </div>

        <div className="flex flex-col space-y-16 project-container">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center bg-card/50 rounded-xl p-6 border-2 shadow-sm project-card transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:z-10 hover:relative`}
              style={{ 
                borderColor: 'var(--card-border, rgba(29, 78, 216, 0.1))', 
                // @ts-ignore - Using custom CSS variables
                '--card-rgb': index === 0 ? '220, 38, 38' : index === 1 ? '22, 163, 74' : '29, 78, 216' 
              }}
            >
              <div className="w-full md:w-2/5 rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="w-full md:w-3/5 space-y-7">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground/90">{project.title}</h3>
                  <p className="text-foreground/80 text-base">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 my-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-primary/10 text-sm py-1 px-3">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 gap-6 mt-4">
                  {/* Goals with dropdown effect */}
                  <div 
                    className="border-l-4 pl-5 cursor-pointer group" 
                    style={{ borderColor: `rgba(var(--card-rgb), 0.5)` }}
                  >
                    <h4 className="font-semibold text-base mb-2 text-foreground/90 flex items-center">
                      Goals
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:rotate-180" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </h4>
                    <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-40">
                      <p className="text-foreground/80 leading-relaxed">{project.goals}</p>
                    </div>
                  </div>
                  
                  {/* Challenges with dropdown effect */}
                  <div 
                    className="border-l-4 pl-5 cursor-pointer group" 
                    style={{ borderColor: `rgba(var(--card-rgb), 0.5)` }}
                  >
                    <h4 className="font-semibold text-base mb-2 text-foreground/90 flex items-center">
                      Challenges
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:rotate-180" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </h4>
                    <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-40">
                      <p className="text-foreground/80 leading-relaxed">{project.challenges}</p>
                    </div>
                  </div>
                  
                  {/* Outcomes with dropdown effect */}
                  <div 
                    className="border-l-4 pl-5 cursor-pointer group" 
                    style={{ borderColor: `rgba(var(--card-rgb), 0.5)` }}
                  >
                    <h4 className="font-semibold text-base mb-2 text-foreground/90 flex items-center">
                      Outcomes
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:rotate-180" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </h4>
                    <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-40">
                      <p className="text-foreground/80 leading-relaxed">{project.outcomes}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Experience Section */}
      <section
        id="experience"
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            My professional journey in electrical engineering and embedded
            systems development.
          </p>
        </div>

        <div className="space-y-8 experience-container">
          {experience.map((job, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border p-6 shadow-sm transition-all hover:shadow-lg experience-card"
              style={{ 
                // @ts-ignore - Using custom CSS variables
                '--card-rgb': '130, 110, 165' 
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-muted-foreground">{job.company}</p>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                  {job.period}
                </span>
              </div>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            My technical toolkit spanning programming languages, hardware tools,
            and design methodologies.
          </p>
        </div>

        <SkillsGrid />
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Education Section */}
      <section
        id="education"
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          <p className="text-muted-foreground max-w-3xl">
            My academic background and qualifications in engineering
            disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 education-container">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="education-card group relative rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                '--x': '50%',
                '--y': '50%',
                '--gold-primary': '#d4af37',
                '--gold-secondary': '#f0c75e',
                '--gold-glow': 'rgba(212, 175, 55, 0.25)',
                '--gold-bg': 'rgba(212, 175, 55, 0.02)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgba(212, 175, 55, 0.1)',
                transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease'
              } as React.CSSProperties}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--x', `${x}px`);
                e.currentTarget.style.setProperty('--y', `${y}px`);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)';
                e.currentTarget.style.boxShadow = '0 0 20px 2px rgba(212, 175, 55, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.1)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle 12rem at var(--x) var(--y), var(--gold-glow), transparent 70%)',
                  zIndex: 0
                }}
              ></div>
              <div className="bg-card p-6 relative z-10" style={{ background: 'var(--gold-bg)' }}>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <span className="text-sm text-muted-foreground">
                    {edu.year}
                  </span>
                </div>
                <p className="mt-4 text-muted-foreground">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Awards Section */}
      <section
        id="awards"
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Awards & Achievements
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            Recognition received for academic and professional excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 awards-container">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="award-card group relative rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                '--x': '50%',
                '--y': '50%',
                '--teal-primary': '#008080',
                '--teal-secondary': '#20b2aa',
                '--teal-glow': 'rgba(0, 128, 128, 0.25)',
                '--teal-bg': 'rgba(0, 128, 128, 0.02)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgba(0, 128, 128, 0.1)',
                transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease'
              } as React.CSSProperties}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--x', `${x}px`);
                e.currentTarget.style.setProperty('--y', `${y}px`);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 128, 128, 0.5)';
                e.currentTarget.style.boxShadow = '0 0 20px 2px rgba(0, 128, 128, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 128, 128, 0.1)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle 12rem at var(--x) var(--y), var(--teal-glow), transparent 70%)',
                  zIndex: 0
                }}
              ></div>
              <div className="bg-card p-6 relative z-10" style={{ background: 'var(--teal-bg)' }}>
                <h3 className="text-xl font-semibold">{award.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-muted-foreground">{award.organization}</p>
                  <span className="text-sm text-muted-foreground">
                    {award.year}
                  </span>
                </div>
                <p className="mt-4 text-muted-foreground">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
          <p className="text-muted-foreground max-w-3xl">
            Interested in working together? Feel free to reach out through any
            of the channels below.
          </p>
        </div>

        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 lg:px-16 border-t">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hussein Muya. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
