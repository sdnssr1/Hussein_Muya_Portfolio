import React, { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { FileDown, Linkedin, Mail } from "lucide-react";

interface ContactSectionProps {
  email?: string;
  linkedIn?: string;
  resumeUrl?: string;
  headshot?: string;
}

const ContactSection = ({
  email = "Hussemuya.hm.hm@gmail.com",
  linkedIn = "https://linkedin.com/in/hussein-muya",
  resumeUrl = "/resume.pdf",
  headshot = "/images/husse.png",
}: ContactSectionProps) => {
  return (
    <section id="contact" className="py-16 px-4 bg-transparent relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center">
          {/* Redesigned professional contact card */}
          <div className="w-full max-w-5xl mx-auto rounded-xl border border-primary/10 shadow-lg overflow-hidden" 
               style={{
                 background: 'rgba(255, 255, 255, 0.05)',
                 backdropFilter: 'blur(12px)',
                 WebkitBackdropFilter: 'blur(12px)',
                 boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)'
               }}>
            <div className="px-6 py-8 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
              {/* Email */}
              <div 
                className="flex flex-col items-center text-center p-4 rounded-lg border border-primary/5 transition-all duration-300 hover:border-primary/20 hover:shadow-md group relative overflow-hidden"
                onMouseMove={(e) => {
                  const el = e.currentTarget;
                  const rect = el.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  el.style.setProperty('--x', `${x}%`);
                  el.style.setProperty('--y', `${y}%`);
                }}
                style={{ 
                  '--card-rgb': '220, 38, 38',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
                } as React.CSSProperties}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                  style={{
                    background: 'radial-gradient(circle 20rem at var(--x) var(--y), rgba(var(--card-rgb), 0.35), transparent 70%)',
                    zIndex: 0
                  }}
                ></div>
                <div className="w-12 h-12 mb-3 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors relative z-10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a
                    href={`mailto:${email}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-base inline-block"
                  >
                    {email}
                  </a>
                </div>
              </div>

              {/* Resume */}
              <div 
                className="flex flex-col items-center text-center p-4 rounded-lg border border-primary/5 transition-all duration-300 hover:border-primary/20 hover:shadow-md group relative overflow-hidden"
                onMouseMove={(e) => {
                  const el = e.currentTarget;
                  const rect = el.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  el.style.setProperty('--x', `${x}%`);
                  el.style.setProperty('--y', `${y}%`);
                }}
                style={{ 
                  '--card-rgb': '5, 150, 105',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
                } as React.CSSProperties}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                  style={{
                    background: 'radial-gradient(circle 20rem at var(--x) var(--y), rgba(var(--card-rgb), 0.35), transparent 70%)',
                    zIndex: 0
                  }}
                ></div>
                <div className="w-12 h-12 mb-3 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors relative z-10">
                  <FileDown className="h-6 w-6 text-primary" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-semibold text-lg mb-1">Resume</h3>
                  <p className="text-muted-foreground text-base mb-2">
                    Download my resume for more details
                  </p>
                  <Button
                    variant="outline"
                    className="border-primary/20 bg-background/70 hover:bg-primary/5 hover:border-primary transition-colors"
                    asChild
                    size="sm"
                  >
                    <a href={resumeUrl} download className="flex items-center">
                      <FileDown className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>

              {/* LinkedIn */}
              <div 
                className="flex flex-col items-center text-center p-4 rounded-lg border border-primary/5 transition-all duration-300 hover:border-primary/20 hover:shadow-md group relative overflow-hidden"
                onMouseMove={(e) => {
                  const el = e.currentTarget;
                  const rect = el.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  el.style.setProperty('--x', `${x}%`);
                  el.style.setProperty('--y', `${y}%`);
                }}
                style={{ 
                  '--card-rgb': '37, 99, 235',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
                } as React.CSSProperties}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                  style={{
                    background: 'radial-gradient(circle 20rem at var(--x) var(--y), rgba(var(--card-rgb), 0.35), transparent 70%)',
                    zIndex: 0
                  }}
                ></div>
                <div className="w-12 h-12 mb-3 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors relative z-10">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-semibold text-lg mb-1">LinkedIn</h3>
                  <a
                    href={linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-base"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Card with lavender/indigo glow effect
const ContactCard = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Lavender/indigo theme
  const theme = {
    primary: '#7b68ee',     // Medium slate blue/lavender
    secondary: '#9370db',   // Medium purple
    glow: 'rgba(123, 104, 238, 0.25)',
    background: 'rgba(123, 104, 238, 0.02)'
  };

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

  return (
    <div 
      className="group" 
      ref={cardRef} 
      onMouseMove={handleMouseMove}
    >
      <Card 
        className="overflow-hidden relative transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
        style={{
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: `${theme.primary}20`,
          background: theme.background,
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
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle 12rem at ${mousePosition.x}px ${mousePosition.y}px, ${theme.glow}, transparent 70%)`,
            zIndex: 0
          }}
        ></div>
        <div className="relative z-10">
          {children}
        </div>
      </Card>
    </div>
  );
};

export default ContactSection;
