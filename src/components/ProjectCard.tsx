import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  goals: string;
  challenges: string;
  outcomes: string;
  link?: string;
}

const ProjectCard = ({
  title = "Wireless Sensor System for Air Leak Detection",
  description = "Developed a wireless sensor network to detect and locate air leaks in industrial environments",
  image = "https://images.unsplash.com/photo-1580584126903-c17d41830450?w=800&q=80",
  technologies = ["Arduino", "C++", "RF Communication", "Sensor Fusion"],
  goals = "Design and implement a cost-effective wireless sensor network capable of detecting air leaks in industrial settings with high accuracy and minimal false positives.",
  challenges = "Overcoming RF interference in industrial environments, optimizing power consumption for battery-operated sensors, and developing robust algorithms for leak detection amid background noise.",
  outcomes = "Successfully deployed a network of 12 sensors covering 5,000 sq ft with 95% detection accuracy. Reduced leak detection time by 75% compared to manual inspections, resulting in estimated annual savings of $45,000.",
  link = "#",
}: ProjectCardProps) => {
  return (
    <Card className="w-full max-w-md overflow-hidden border border-border bg-card hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50"></div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-primary/10">
              {tech}
            </Badge>
          ))}
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="goals">
            <AccordionTrigger className="text-sm font-medium">
              Goals
            </AccordionTrigger>
            <AccordionContent className="text-sm">{goals}</AccordionContent>
          </AccordionItem>

          <AccordionItem value="challenges">
            <AccordionTrigger className="text-sm font-medium">
              Challenges
            </AccordionTrigger>
            <AccordionContent className="text-sm">
              {challenges}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="outcomes">
            <AccordionTrigger className="text-sm font-medium">
              Outcomes
            </AccordionTrigger>
            <AccordionContent className="text-sm">{outcomes}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>

      <CardFooter className="flex justify-end border-t pt-4">
        {link && (
          <Button variant="outline" size="sm" className="gap-2">
            View Details
            <ExternalLink size={16} />
          </Button>
        )}
      </CardFooter>

      {/* Circuit-inspired decorative element */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M10,30 L40,30 L40,10 L60,10 L60,30 L90,30"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M10,50 L90,50"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M10,70 L30,70 L30,90 L70,90 L70,70 L90,70"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="40" cy="30" r="3" fill="currentColor" />
          <circle cx="60" cy="30" r="3" fill="currentColor" />
          <circle cx="30" cy="70" r="3" fill="currentColor" />
          <circle cx="70" cy="70" r="3" fill="currentColor" />
        </svg>
      </div>
    </Card>
  );
};

export default ProjectCard;
