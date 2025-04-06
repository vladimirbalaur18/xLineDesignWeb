import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ProjectGallery from "@/components/ProjectGallery";
import PropertyForSale from "@/components/PropertyForSale";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    // Set dark theme colors
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = 'hsl(222.2, 84%, 4.9%)';
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="min-h-screen font-sans"
    >
      <Header />
      <main>
        <Hero />
        <Projects />
        <ProjectGallery />
        <PropertyForSale />
        <About />
        <Services />
        <Team />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}
