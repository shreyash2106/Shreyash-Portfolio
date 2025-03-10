import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16">
      <SectionHeading
        title="Skills"
        subtitle="Technologies I work with"
        className="mb-12"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-[#64FFDA]">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <Badge
                  key={item}
                  className="bg-[#171738] text-[#E6F1FF] hover:bg-[#171738]/80"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
