import React from "react";
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
} from "lucide-react";

interface Skill {
  name: string;
  proficiency: number; // 1-5
  icon: React.ReactNode;
}

interface SkillsGridProps {
  programmingLanguages?: Skill[];
  hardwareTools?: Skill[];
  designMethodologies?: Skill[];
}

const SkillsGrid = ({
  programmingLanguages = [
    { name: "SystemVerilog", proficiency: 5, icon: <Code size={18} /> },
    { name: "Python", proficiency: 4, icon: <Code size={18} /> },
    { name: "C/C++", proficiency: 4, icon: <Code size={18} /> },
    { name: "VHDL", proficiency: 3, icon: <Code size={18} /> },
    { name: "Assembly", proficiency: 3, icon: <Code size={18} /> },
    { name: "MATLAB", proficiency: 3, icon: <Code size={18} /> },
  ],
  hardwareTools = [
    { name: "FPGA Design", proficiency: 5, icon: <Cpu size={18} /> },
    { name: "Oscilloscopes", proficiency: 5, icon: <Zap size={18} /> },
    { name: "PCB Design", proficiency: 4, icon: <CircuitBoard size={18} /> },
    { name: "Logic Analyzers", proficiency: 4, icon: <Layers size={18} /> },
    { name: "Microcontrollers", proficiency: 5, icon: <Cpu size={18} /> },
    { name: "Soldering", proficiency: 3, icon: <Wrench size={18} /> },
  ],
  designMethodologies = [
    { name: "Digital Design", proficiency: 5, icon: <Cpu size={18} /> },
    { name: "Embedded Systems", proficiency: 5, icon: <Server size={18} /> },
    { name: "Real-time Control", proficiency: 4, icon: <Zap size={18} /> },
    { name: "Signal Processing", proficiency: 3, icon: <Wifi size={18} /> },
    { name: "Database Design", proficiency: 3, icon: <Database size={18} /> },
    { name: "Version Control", proficiency: 4, icon: <Layers size={18} /> },
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
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hardware" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hardwareTools.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="methodologies" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {designMethodologies.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <Card className="overflow-hidden border border-muted hover:border-primary/50 transition-colors">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-md">{skill.icon}</div>
            <h3 className="font-medium">{skill.name}</h3>
          </div>
          <Badge variant="outline" className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${i < skill.proficiency ? "bg-primary" : "bg-muted"}`}
              />
            ))}
            <ChevronRight size={12} className="ml-1" />
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsGrid;
