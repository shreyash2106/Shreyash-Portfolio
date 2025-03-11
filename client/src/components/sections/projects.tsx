import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SectionHeading from "@/components/shared/section-heading";
import ProjectCard from "@/components/shared/project-card";
import { LoadingState } from "@/components/ui/loading-state";
import { projects } from "@/data/content";

export default function Projects() {
  const [loading, setLoading] = useState(true);

  // Simulate loading for demo
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Increased to 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section id="projects" className="scroll-mt-16">
        <SectionHeading
          title="Featured Projects"
          subtitle="Some things I've built"
          className="mb-12"
        />
        <LoadingState message="Loading projects..." />
      </section>
    );
  }

  return (
    <section id="projects" className="scroll-mt-16">
      <SectionHeading
        title="Featured Projects"
        subtitle="Some things I've built"
        className="mb-12"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}