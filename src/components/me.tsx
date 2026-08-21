"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MeData {
  name: string;
  location: string;
  hometown: string;
  currentRole: string;
  background: string;
  interests: string;
  photo: string;
  expertise: string[];
  experience: string[];
}

interface MeProps {
  data?: MeData;
}

const DEFAULT_ME: MeData = {
  name: "Fathima Sumreen",
  location: "Pittsburgh, PA, USA",
  hometown: "Hyderabad, India",
  currentRole: "Software Engineer, Asset Management @ Salesforce · Agentic AI Builder · MISM @ Carnegie Mellon",
  background:
    "Hey! I'm Sumreen — I spent two years at Salesforce as a Software Engineer on Asset Management, then a Summer 2026 internship on the Agentforce AI Cloud Ray/inference team in San Francisco. I owned a production Agentforce inference migration, deprecated legacy NVIDIA Triton with open source Ray Serve, and cut GPU compute by 75% across the TensorFlow models. I'm now at Carnegie Mellon in the MISM program (Business Intelligence & Data Analytics) and co-founding Naviyo, an adaptive AI travel assistant.",
  interests:
    "Outside of work and school, I'm someone who loves exploring new places and cultures — travel is genuinely my reset button. I'm also into keeping up with the latest in AI and tech, and I enjoy diving into competitive strategy whether that's in product thinking or just life in general. Ask me about Naviyo, the adaptive AI travel assistant I'm building, and you'll see how those two worlds collide!",
  photo: "/new-image.png",
  expertise: [
    "Salesforce",
    "Agentforce & Agentic AI",
    "Data Analytics",
    "Python, SQL, SOQL",
    "Product Thinking",
    "RAG & Multi-Agent Systems",
  ],
  experience: [
    "Salesforce - Software Engineering Intern, Agentforce AI Cloud (Jun 2026 – Aug 2026)",
    "Founder & Builder - Naviyo (Adaptive AI Travel Partner) — Active",
    "Salesforce - Software Engineer, Asset Management (Business Technology)",
    "Salesforce - Summer Analyst Intern (Global Enterprise Operations)",
    "SRM Films - Product Analytics & Insights Intern",
  ],
};

export default function Me({ data = DEFAULT_ME }: MeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-4xl mx-auto p-4"
    >
      <Card className="bg-background/50 backdrop-blur-sm border-border shadow-xl">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative w-48 h-48 lg:w-64 lg:h-64 mx-auto lg:mx-0">
                <img
                  src={data.photo}
                  alt={data.name}
                  className="w-full h-full rounded-2xl object-cover shadow-lg"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-1 space-y-4"
            >
              <div className="space-y-2">
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                  {data.name}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {data.currentRole}
                </p>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  📍 {data.location} (Originally from {data.hometown})
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-3"
              >
                <p className="text-foreground leading-relaxed">
                  {data.background}
                </p>
                <p className="text-foreground leading-relaxed">
                  {data.interests}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-3"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.expertise.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="space-y-3"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  Experience
                </h3>
                <div className="space-y-2">
                  {data.experience.map((exp, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {exp}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
