import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-5xl sm:text-6xl font-bold">
          <span className="text-[#64FFDA]">Hi, I'm </span>
          <span className="text-[#E6F1FF]">Shreyash</span>
        </h1>
        <p className="text-xl sm:text-2xl text-[#E6F1FF]/80 max-w-2xl">
          A passionate software engineer specializing in Machine Learning, AI, and Full-Stack Development. Currently pursuing my M.S. in Computer Science at Purdue University.
        </p>
        <div className="flex space-x-4">
          <Button
            asChild
            className="bg-[#64FFDA] text-[#0A192F] hover:bg-[#64FFDA]/80"
          >
            <a href="#contact">Get in touch</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10"
          >
            <a href="#projects">View my work</a>
          </Button>
        </div>
      </motion.div>
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 text-[#64FFDA]" />
      </motion.div>
    </section>
  );
}
