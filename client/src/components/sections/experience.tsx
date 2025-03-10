import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16">
      <SectionHeading
        title="Work Experience"
        subtitle="Where I've worked"
        className="mb-12"
      />
      <div className="space-y-8">
        {experience.map((job, index) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#0A192F] border-[#171738]">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#64FFDA]">
                      {job.title}
                    </h3>
                    <p className="text-[#E6F1FF]">{job.company}</p>
                  </div>
                  <p className="text-[#E6F1FF]/60">{job.period}</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-[#E6F1FF]/80">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
