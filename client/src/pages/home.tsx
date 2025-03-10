import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import Background3D from "@/components/three/Background3D";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020B1C] text-[#E6F1FF]">
      <Background3D />
      <div className="neural-bg" />
      <Navbar />
      <main className="container mx-auto px-4 py-16 space-y-32">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}