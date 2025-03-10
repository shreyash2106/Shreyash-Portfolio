import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16">
      <SectionHeading
        title="Get in Touch"
        subtitle="Let's connect"
        className="mb-12"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card className="bg-[#0A192F] border-[#171738]">
          <CardContent className="pt-6">
            <div className="text-center space-y-6">
              <p className="text-[#E6F1FF]/80 max-w-2xl mx-auto">
                I'm always open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="flex justify-center space-x-4">
                <Button
                  asChild
                  variant="outline"
                  className="border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10"
                >
                  <a href="mailto:shreyash.sridhar@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10"
                >
                  <a
                    href="https://www.linkedin.com/in/shreyashsridhariyengar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10"
                >
                  <a
                    href="https://github.com/shreyash2106"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
