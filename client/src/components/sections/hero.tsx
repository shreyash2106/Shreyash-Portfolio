import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, -0.01, 0.9]
    }
  }
};

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-6xl font-bold"
        >
          <span className="text-[#64FFDA]">Hi, I'm </span>
          <span className="text-[#E6F1FF]">Yash</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-xl sm:text-2xl text-[#E6F1FF]/80 max-w-2xl"
        >
          A passionate software engineer specializing in Machine Learning, AI, and Full-Stack Development. Currently pursuing my M.S. in Computer Science at Purdue University.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex space-x-4"
        >
          <Button
            asChild
            className="bg-[#64FFDA] text-[#2D1B69] hover:bg-[#64FFDA]/80 transition-all duration-300"
          >
            <a href="#contact">Get in touch</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10 transition-all duration-300"
          >
            <a href="#projects">View my work</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: [0, 10, 0],
          transition: {
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: {
              duration: 0.5,
              delay: 1.5
            }
          }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 text-[#64FFDA]" />
      </motion.div>
    </section>
  );
}