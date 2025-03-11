import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Background3D from "@/components/three/Background3D";

export default function Hero() {
  const logos = [
    { src: "/images/berkeley.png", alt: "UC Berkeley" },
    { src: "/images/hpe.png", alt: "Hewlett Packard Enterprise" },
    { src: "/images/aws-ai.png", alt: "AWS AI" },
    { src: "/images/purdue.png", alt: "Purdue University" },
  ];

  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center relative overflow-hidden">
      <Background3D />
      <div className="neural-bg" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-6 slide-up relative z-10"
      >
        <h1 className="text-5xl sm:text-6xl font-bold">
          <span className="text-[#B86EFF] hover-glow">Hi, I'm </span>
          <span className="text-[#E6F1FF] font-serif italic">Shreyash</span>
        </h1>
        <p className="text-xl sm:text-2xl text-[#E6F1FF]/80 max-w-2xl">
          A passionate software engineer specializing in Machine Learning and AI. Currently pursuing my M.S. in Computer Science at Purdue University.
        </p>
        <div className="flex space-x-4">
          <Button
            asChild
            className="bg-[#B86EFF] text-[#020B1C] hover:bg-[#B86EFF]/80 page-transition"
          >
            <a href="#contact">Get in touch</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#B86EFF] text-[#B86EFF] hover:bg-[#B86EFF]/10 page-transition"
          >
            <a href="#projects">View my work</a>
          </Button>
        </div>

        {/* Logos Section */}
        <div className="mt-16">
          <div className="flex items-center gap-8 md:gap-12">
            {logos.map(({ src, alt }, index) => (
              <motion.div
                key={alt}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 mx-auto flex items-center justify-center text-[#B86EFF] hover:text-[#B86EFF]/80 transition-colors duration-300">
                  <img 
                    src={src} 
                    alt={alt} 
                    className="h-8 w-auto object-contain" 
                  />
                </div>
              </motion.div>
            ))}
          </div>
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ChevronDown className="h-8 w-8 text-[#B86EFF]" />
      </motion.div>
    </section>
  );
}