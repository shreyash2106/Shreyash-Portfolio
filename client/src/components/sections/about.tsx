import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16">
      <SectionHeading
        title="About Me"
        subtitle="Get to know me better"
        className="mb-12"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-[#0A192F] border-[#171738] h-full">
            <CardContent className="pt-6">
              <p className="text-[#E6F1FF]/80 whitespace-pre-line">
                {about.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-[#0A192F] border-[#171738] h-full">
            <CardContent className="pt-6 space-y-6">
              {Object.entries(about.interests).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-[#B86EFF] mb-2">
                    {category}
                  </h3>
                  <ul className="list-disc list-inside text-[#E6F1FF]/80">
                    {items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}