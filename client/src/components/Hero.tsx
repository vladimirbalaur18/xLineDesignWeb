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
      {/* Futuristic background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Grid pattern */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:2rem_2rem]"
          style={{ y, opacity }}
        />
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem]"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "40%"]), opacity }}
        />
        
        {/* Abstract geometric shapes */}
        <motion.div 
          className="absolute top-1/4 left-10 w-32 h-32 border border-white/20"
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ opacity: 0.4, rotate: 0 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-20 w-20 h-20 border border-white/30"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.6, rotate: 45 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
        
        {/* Light effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/70 to-background"></div>
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 blur-[100px]" 
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-white/5 blur-[80px]"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        />
        
        {/* Angular lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="mb-6">
            <div className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase relative mb-2">
              <motion.span 
                className="text-white relative z-10 inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                ARCHITECT
              </motion.span>
              <motion.span 
                className="text-gray-300 relative z-10 inline-block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                ING
              </motion.span>
              <motion.div 
                className="absolute -bottom-2 left-0 h-1 bg-white" 
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </div>
            <motion.div 
              className="text-3xl md:text-4xl lg:text-6xl font-bold uppercase text-white/90 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="inline-block border-b border-t border-white/30 py-1 px-6">THE FUTURE</span>
            </motion.div>
          </h1>
          
          <motion.p 
            className="text-md md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Pushing the boundaries of design with innovative architectural solutions 
            that seamlessly blend form, function, and sustainability for a better tomorrow.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-6 items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-200 text-black px-10 uppercase tracking-widest text-sm py-6"
                onClick={scrollToProjects}
              >
                EXPLORE WORK
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/40 hover:border-white text-white hover:bg-white/10 uppercase tracking-widest text-sm px-10 py-6"
                asChild
              >
                <a href="#contact">CONNECT</a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToProjects}
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-xs uppercase tracking-widest mb-2 font-light">Explore</span>
          <div className="relative h-12 w-6 border border-white/30 rounded-none flex items-center justify-center">
            <motion.div 
              className="h-2 w-2 bg-white"
              animate={{ 
                y: [0, 12, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut" 
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
