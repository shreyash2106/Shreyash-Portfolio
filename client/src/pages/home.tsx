import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import { motion } from "framer-motion";

const backgroundVariants = {
  initial: {
    backgroundPosition: "0% 0%"
  },
  animate: {
    backgroundPosition: ["0% 0%", "100% 100%"],
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
      repeatType: "mirror"
    }
  }
};

export default function Home() {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-[#130B2B] via-[#1D1147] to-[#2D1B69] text-[#E6F1FF] relative overflow-hidden"
      initial="initial"
      animate="animate"
      variants={backgroundVariants}
    >
      {/* Neural Network Animation Background */}
      <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full">
          <pattern id="neural-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="1" fill="#64FFDA" className="animate-pulse"/>
            <path d="M25 25 L50 50" stroke="#64FFDA" strokeWidth="0.5" className="animate-pulse"/>
            <path d="M25 25 L0 50" stroke="#64FFDA" strokeWidth="0.5" className="animate-pulse"/>
            <path d="M25 25 L50 0" stroke="#64FFDA" strokeWidth="0.5" className="animate-pulse"/>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#neural-pattern)"/>
        </svg>
      </div>

      <Navbar />
      <main className="container mx-auto px-4 py-16 space-y-32 relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}