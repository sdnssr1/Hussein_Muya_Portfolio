import React from "react";
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
  email = "hussein.muya@example.com",
  linkedIn = "https://linkedin.com/in/hussein-muya",
  resumeUrl = "/resume.pdf",
  headshot = "/images/husse.png",
}: ContactSectionProps) => {
  return (
    <section id="contact" className="py-16 px-4 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Headshot and brief text */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative mb-6">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 bg-transparent">
                <img
                  src={headshot}
                  alt="Hussein Muya"
                  className="w-full h-full object-cover"
                  style={{
                    objectFit: 'cover',
                    objectPosition: '35% center',
                    transform: 'scale(1.25)'
                  }}
                />
              </div>
              {/* Circuit design accent */}
              <div className="absolute -z-10 w-56 h-56 -top-4 -left-4 rounded-full border border-primary/30"></div>
              <div className="absolute -z-10 w-52 h-52 -top-2 -left-2 rounded-full border border-primary/20"></div>
            </div>

            <p className="text-lg text-center md:text-left mb-6">
              I'm always open to discussing new projects, opportunities, or
              collaborations. Feel free to reach out through any of the channels
              below.
            </p>
          </div>

          {/* Right side - Contact card */}
          <Card className="overflow-hidden border border-primary/20 bg-card/50">
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href={`mailto:${email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <Separator className="bg-primary/10" />

                {/* LinkedIn */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <a
                      href={linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>

                <Separator className="bg-primary/10" />

                {/* Resume */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <FileDown className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Resume</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Download my resume for more details
                    </p>
                    <Button
                      variant="outline"
                      className="border-primary/20 hover:border-primary transition-colors"
                      asChild
                    >
                      <a href={resumeUrl} download>
                        <FileDown className="mr-2 h-4 w-4" />
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Circuit board design elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute top-12 right-12 w-24 h-24 border border-primary/10 rounded-full opacity-30"></div>
      <div className="absolute bottom-12 left-12 w-16 h-16 border border-primary/10 rounded-full opacity-30"></div>
    </section>
  );
};

export default ContactSection;
