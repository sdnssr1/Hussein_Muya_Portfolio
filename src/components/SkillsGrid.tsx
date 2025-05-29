import React, { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CircuitBoard,
  Cpu,
  Code,
  Wrench,
  Zap,
  Layers,
  Database,
  Server,
  Wifi,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

// Define colors for programming language logos
const pyBlue = "#4584b6";
const pyYellow = "#ffde57";

// Define theme colors for different categories
const categoryThemes = {
  programming: {
    primary: "#2196f3",    // Blue theme
    secondary: "#90caf9",
    glow: "rgba(33, 150, 243, 0.5)",
    background: "rgba(33, 150, 243, 0.05)"
  },
  hardware: {
    primary: "#4caf50",    // Green theme
    secondary: "#a5d6a7",
    glow: "rgba(76, 175, 80, 0.5)",
    background: "rgba(76, 175, 80, 0.05)"
  },
  methodologies: {
    primary: "#9c27b0",    // Purple theme
    secondary: "#ce93d8",
    glow: "rgba(156, 39, 176, 0.5)",
    background: "rgba(156, 39, 176, 0.05)"
  }
};

interface Skill {
  name: string;
  proficiency: number; // 1-5
  icon: React.ReactNode;
  usageDetails?: string[];
}

interface SkillsGridProps {
  programmingLanguages?: Skill[];
  hardwareTools?: Skill[];
  designMethodologies?: Skill[];
}

const SkillsGrid = ({
  programmingLanguages = [
    { 
      name: "SystemVerilog", 
      proficiency: 5, 
      usageDetails: [
        "Digital circuit design for FPGA platforms",
        "RTL implementation of hardware acceleration algorithms",
        "Verification of complex digital systems",
        "Implementation of custom CPU architectures"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <path d="M12 2L2 7v9l10 5 10-5V7L12 2z" fill={pyBlue} />
          <path d="M12 4l-8 4v8l8 4 8-4V8l-8-4z" fill={pyYellow} />
          <path d="M12 15V9m-3-1v8m6-8v8" stroke="white" strokeWidth="1.5" />
        </svg>
      )
    },
    { 
      name: "Python", 
      proficiency: 4, 
      usageDetails: [
        "Data analysis and visualization for research projects",
        "Automation of hardware testing procedures",
        "Machine learning model development",
        "Signal processing algorithm prototyping"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <g>
            <path d="M11 6.5c-4 0-3.5 1.8-3.5 1.8v2.2h3.5v.5h-5c-1.5 0-3 1-3 3.5s1 3.5 2 4 3 .5 3 .5h1.5v-1.5c0-1 1-2 2-2h3.5c1 0 1.5-1 1.5-2v-3.5c0-1-1-2-2-2s-3.5-.5-3.5-.5z" fill={pyBlue} />
            <circle cx="8.5" cy="8.5" r=".75" fill="white" />
            <path d="M13 17.5c4 0 3.5-1.8 3.5-1.8v-2.2h-3.5v-.5h5c1.5 0 3-1 3-3.5s-1-3.5-2-4-3-.5-3-.5h-1.5v1.5c0 1-1 2-2 2h-3.5c-1 0-1.5 1-1.5 2v3.5c0 1 1 2 2 2s3.5.5 3.5.5z" fill={pyYellow} />
            <circle cx="15.5" cy="15.5" r=".75" fill="white" />
          </g>
        </svg>
      )
    },
    { 
      name: "C/C++", 
      proficiency: 4, 
      usageDetails: [
        "Embedded systems programming for microcontrollers",
        "Real-time control system implementation",
        "Performance-critical algorithm development",
        "Hardware driver development"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill={pyBlue} />
          <circle cx="12" cy="12" r="8" fill={pyYellow} />
          <path d="M11 9v6h2V9h-2z" fill={pyBlue} />
          <path d="M18 11h-2v-2h-2v2h-2v2h2v2h2v-2h2z" fill={pyBlue} />
          <path d="M8 9v6h2V9H8z" fill={pyBlue} />
        </svg>
      )
    },
    { 
      name: "VHDL", 
      proficiency: 3, 
      usageDetails: [
        "Digital system design for defense applications",
        "Implementation of error correction algorithms",
        "Radar signal processing components",
        "Legacy system maintenance and updates"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <path d="M2 4v16h3l7-13 7 13h3V4h-3v9l-6-9h-2l-6 9V4H2z" fill={pyBlue} />
          <path d="M6 16h12" stroke={pyYellow} strokeWidth="2" />
          <path d="M9 8h6" stroke={pyYellow} strokeWidth="2" />
        </svg>
      )
    },
    { 
      name: "Assembly", 
      proficiency: 3, 
      usageDetails: [
        "Optimization of critical system bottlenecks",
        "Bare-metal programming for specialized hardware",
        "Reverse engineering of proprietary protocols",
        "Low-level device driver implementation"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" fill={pyBlue} />
          <rect x="5" y="5" width="14" height="14" rx="1" fill={pyYellow} />
          <rect x="7" y="7" width="4" height="4" fill={pyBlue} />
          <rect x="13" y="7" width="4" height="4" fill={pyBlue} />
          <rect x="7" y="13" width="4" height="4" fill={pyBlue} />
          <rect x="13" y="13" width="4" height="4" fill={pyBlue} />
        </svg>
      )
    },
    { 
      name: "MATLAB", 
      proficiency: 3, 
      usageDetails: [
        "Signal processing algorithm development",
        "Data analysis and visualization for research",
        "Control system simulation and modeling",
        "Image processing for computer vision applications"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <path d="M4 20L12 4l2 4 6 12H4z" fill={pyBlue} />
          <path d="M12 10l-4 8h8l-4-8z" fill={pyYellow} />
        </svg>
      )
    },
  ],
  hardwareTools = [
    { 
      name: "FPGA Design", 
      proficiency: 5, 
      icon: <Cpu size={18} />,
      usageDetails: [
        "Design of custom digital processing systems",
        "Implementation of high-speed communication interfaces",
        "Development of hardware acceleration for ML algorithms",
        "Prototyping of ASIC designs"
      ] 
    },
    { 
      name: "Oscilloscopes", 
      proficiency: 5, 
      icon: <Zap size={18} />,
      usageDetails: [
        "Debug of high-speed digital interfaces",
        "Characterization of analog circuit performance",
        "Signal integrity analysis",
        "Protocol decoding and analysis"
      ] 
    },
    { 
      name: "PCB Design", 
      proficiency: 4, 
      icon: <CircuitBoard size={18} />,
      usageDetails: [
        "Multi-layer board design for complex systems",
        "Design for EMI/EMC compliance",
        "High-speed signal routing",
        "Power distribution network optimization"
      ] 
    },
    { 
      name: "Logic Analyzers", 
      proficiency: 4, 
      icon: <Layers size={18} />,
      usageDetails: [
        "Digital system debugging and verification",
        "Protocol analysis for custom interfaces",
        "Timing analysis and optimization",
        "Integration testing of complex digital systems"
      ] 
    },
    { 
      name: "Microcontrollers", 
      proficiency: 5, 
      icon: <Cpu size={18} />,
      usageDetails: [
        "Development of embedded control systems",
        "Firmware architecture design",
        "Low-power system implementation",
        "Integration of communication protocols"
      ] 
    },
    { 
      name: "Soldering", 
      proficiency: 3, 
      icon: <Wrench size={18} />,
      usageDetails: [
        "Prototype circuit assembly",
        "Surface-mount component rework",
        "Board repair and modification",
        "Custom cable and connector fabrication"
      ] 
    },
  ],
  designMethodologies = [
    { 
      name: "Digital Design", 
      proficiency: 5, 
      icon: <Cpu size={18} />,
      usageDetails: [
        "Architecture development for custom processors",
        "Implementation of hardware encryption systems",
        "Design of high-efficiency DSP blocks",
        "Development of timing-critical systems"
      ] 
    },
    { 
      name: "Embedded Systems", 
      proficiency: 5, 
      icon: <Server size={18} />,
      usageDetails: [
        "RTOS-based system architecture",
        "Power-optimized firmware development",
        "Secure bootloader implementation",
        "Resource-constrained application design"
      ] 
    },
    { 
      name: "Real-time Control", 
      proficiency: 4, 
      icon: <Zap size={18} />,
      usageDetails: [
        "Motor control system implementation",
        "Hard real-time system design",
        "Closed-loop feedback systems",
        "Deterministic scheduling algorithms"
      ] 
    },
    { 
      name: "Signal Processing", 
      proficiency: 3, 
      icon: <Wifi size={18} />,
      usageDetails: [
        "Digital filter design and implementation",
        "Spectral analysis algorithm development",
        "Audio processing system design",
        "Noise reduction techniques"
      ] 
    },
    { 
      name: "Database Design", 
      proficiency: 3, 
      icon: <Database size={18} />,
      usageDetails: [
        "Schema design for telemetry data storage",
        "Time-series database optimization",
        "Query optimization for large datasets",
        "Data integrity constraint implementation"
      ] 
    },
    { 
      name: "Version Control", 
      proficiency: 4, 
      icon: <Layers size={18} />,
      usageDetails: [
        "Git workflow management for team development",
        "CI/CD pipeline integration",
        "Branching strategy design",
        "Code review process implementation"
      ] 
    },
  ],
}: SkillsGridProps) => {
  return (
    <div className="w-full bg-background py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>

        <Tabs defaultValue="programming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger
              value="programming"
              className="flex items-center gap-2"
            >
              <Code size={16} />
              <span className="hidden sm:inline">Programming</span>
            </TabsTrigger>
            <TabsTrigger value="hardware" className="flex items-center gap-2">
              <CircuitBoard size={16} />
              <span className="hidden sm:inline">Hardware</span>
            </TabsTrigger>
            <TabsTrigger
              value="methodologies"
              className="flex items-center gap-2"
            >
              <Layers size={16} />
              <span className="hidden sm:inline">Methodologies</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="programming" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {programmingLanguages.map((skill, index) => (
                <SkillCard key={index} skill={skill} categoryType="programming" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hardware" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hardwareTools.map((skill, index) => (
                <SkillCard key={index} skill={skill} categoryType="hardware" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="methodologies" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {designMethodologies.map((skill, index) => (
                <SkillCard key={index} skill={skill} categoryType="methodologies" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface SkillCardProps {
  skill: Skill;
  categoryType: 'programming' | 'hardware' | 'methodologies';
}

const SkillCard = ({ skill, categoryType }: SkillCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const theme = categoryThemes[categoryType];

  // Handle mouse movement for glow effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  // Custom styles for the card
  const glowStyle = {
    '--x': `${mousePosition.x}px`,
    '--y': `${mousePosition.y}px`,
    '--glow-color': theme.glow,
    '--primary-color': theme.primary,
    '--secondary-color': theme.secondary,
    '--bg-color': theme.background,
  } as React.CSSProperties;

  return (
    <div className="group" ref={cardRef} onMouseMove={handleMouseMove}>
      <Card 
        className="overflow-hidden relative transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
        style={{
          ...glowStyle,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: `${theme.primary}20`,
          transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease'
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = `${theme.primary}80`;
          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px 2px ${theme.glow}`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = `${theme.primary}20`;
          (e.currentTarget as HTMLElement).style.boxShadow = '';
        }}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
             style={{
               background: `radial-gradient(circle 8rem at var(--x) var(--y), var(--glow-color), transparent)`,
               zIndex: 0
             }}>
        </div>
        <CardContent className="p-4 relative z-10" style={{ background: `var(--bg-color)` }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-md" style={{ background: `${theme.primary}20` }}>
                {skill.icon}
              </div>
              <h3 className="font-medium">{skill.name}</h3>
            </div>
            <Badge 
              variant="outline" 
              className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setIsExpanded(!isExpanded)}
              style={{ borderColor: theme.primary, color: theme.primary }}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full`}
                  style={{ background: i < skill.proficiency ? theme.primary : '#e2e8f0' }}
                />
              ))}
              {isExpanded ? (
                <ChevronDown size={12} className="ml-1" />
              ) : (
                <ChevronRight size={12} className="ml-1" />
              )}
            </Badge>
          </div>

          {isExpanded && skill.usageDetails && (
            <div className="mt-3 pt-3 border-t" style={{ borderColor: `${theme.primary}30` }}>
              <h4 className="text-sm font-medium mb-2">Usage & Applications</h4>
              <ul className="text-sm space-y-1.5">
                {skill.usageDetails.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 size={14} style={{ color: theme.primary }} className="mt-1 mr-2 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillsGrid;
