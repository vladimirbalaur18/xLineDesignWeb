import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={heroRef} id="home" className="relative h-screen flex flex-col justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,20,30,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,20,30,0.2)_1px,transparent_1px)] bg-[size:3rem_3rem]"
          style={{ y, opacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/60 to-background"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
            <span className="text-primary">Designing</span> the future
            <br /> 
            <span className="text-gray-100">one space at a time</span>
          </h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We create architectural masterpieces that blend innovation, sustainability, 
            and functional excellence for discerning clients worldwide.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 items-center"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8"
              onClick={scrollToProjects}
            >
              View Our Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-700 text-gray-200 hover:bg-gray-800"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={scrollToProjects}
      >
        <ChevronDown className="h-10 w-10 text-primary opacity-80" />
      </motion.div>
    </section>
  );
}
