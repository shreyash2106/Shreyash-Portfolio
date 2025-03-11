import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github, Link as LinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  github?: string;
  skills: string[];
}

export default function ProjectCard({
  title,
  description,
  link,
  github,
  skills,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="bg-[#0A192F] border-[#171738] h-full min-h-[400px] flex flex-col">
        <CardHeader>
          <CardTitle className="text-[#B86EFF]">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow">
          <div className="space-y-4">
            <p className="text-[#E6F1FF]/80">{description}</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-[#171738] text-[#E6F1FF]"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E6F1FF] hover:text-[#B86EFF] transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E6F1FF] hover:text-[#B86EFF] transition-colors"
              >
                <LinkIcon className="h-5 w-5" />
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}