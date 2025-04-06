import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown, Building2, Layers, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorActive, setCursorActive] = useState(false);
  
  // Animation elements to cycle through
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const animationElements = [
    { icon: <Building2 className="h-8 w-8 text-white" />, title: "INNOVATION" },
    { icon: <Layers className="h-8 w-8 text-white" />, title: "PRECISION" },
    { icon: <Wand2 className="h-8 w-8 text-white" />, title: "CREATIVITY" },
  ];
  
  // Cycle through animation elements
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimation((prev) => (prev + 1) % animationElements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  // Track mouse movement for 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setCursorActive(true);
    };
    
    const handleMouseLeave = () => setCursorActive(false);
    
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  
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
      {/* Background Video */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover filter grayscale"
          style={{ opacity: 0.4 }}
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-architectural-structures-in-black-and-white-13112-large.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      {/* Futuristic background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Overlaying gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
        
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
        
        {/* Enhanced glow effects */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-white/10 to-white/5 blur-[120px]" 
          initial={{ opacity: 0.3, scale: 1 }}
          animate={{ opacity: 0.7, scale: 1.2 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-tr from-white/5 to-white/10 blur-[80px]"
          initial={{ opacity: 0.2, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1.1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        />
        
        {/* Angular lines with gradients */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      </div>

      {/* 3D Floating Animation Elements */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
        <AnimatePresence>
          <motion.div
            key={currentAnimation}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="absolute top-1/4 right-[15%]"
            style={{
              perspective: 1000,
              transform: cursorActive
                ? `rotateY(${(mousePosition.x - window.innerWidth / 2) / 50}deg) 
                   rotateX(${-(mousePosition.y - window.innerHeight / 2) / 50}deg)`
                : "none",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="w-64 h-64 relative">
              {/* 3D floating container */}
              <div className="absolute inset-0 border border-white/20 backdrop-blur-sm bg-black/20 
                            transform-gpu preserve-3d flex flex-col items-center justify-center">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0], 
                    rotateZ: [0, 5, 0, -5, 0],
                    z: [0, 30, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="p-8 flex flex-col items-center gap-5"
                >
                  <div className="p-3 border border-white/30 rounded-full backdrop-blur-md">
                    {animationElements[currentAnimation].icon}
                  </div>
                  <div className="text-white font-bold tracking-widest text-xl">
                    {animationElements[currentAnimation].title}
                  </div>
                </motion.div>
              </div>
              
              {/* Animated glow effect */}
              <motion.div 
                className="absolute -inset-3 bg-white/5 rounded-none opacity-50 blur-md -z-10"
                animate={{ 
                  opacity: [0.3, 0.5, 0.3],
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              {/* Geometric decorative elements */}
              <motion.div
                className="absolute -right-10 -bottom-10 w-20 h-20 border border-white/20"
                animate={{ 
                  rotate: [0, 45, 0], 
                  scale: [0.9, 1.1, 0.9],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Another floating 3D element */}
        <motion.div
          className="absolute bottom-1/3 left-[10%]"
          style={{
            perspective: 1000,
            transform: cursorActive
              ? `rotateY(${(mousePosition.x - window.innerWidth / 2) / 60}deg) 
                 rotateX(${-(mousePosition.y - window.innerHeight / 2) / 60}deg)`
              : "none",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative w-44 h-44">
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-black/50 to-black/30 border border-white/10 backdrop-blur-sm"
              animate={{ 
                rotateY: [0, 10, 0, -10, 0],
                rotateX: [0, 5, 0, -5, 0],
                z: [0, 20, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div 
                className="h-full w-full flex items-center justify-center"
                animate={{ 
                  rotateZ: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1 
                }}
              >
                <div className="p-4 text-white/80 text-center">
                  <motion.div 
                    className="w-16 h-16 mx-auto border-t border-r border-white/30 mb-4"
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                  />
                  <div className="text-xs tracking-widest uppercase">
                    Future Living
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Animated shadow/glow */}
            <motion.div 
              className="absolute -inset-4 bg-white/5 blur-lg -z-10"
              animate={{ 
                opacity: [0.2, 0.4, 0.2],
                scale: [0.9, 1.1, 0.9]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </div>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="mb-10">
            <div className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase relative mb-4 backdrop-blur-sm py-2">
              <motion.span 
                className="relative z-10 inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                ARCHITECT
              </motion.span>
              <motion.span 
                className="relative z-10 inline-block bg-clip-text text-transparent bg-gradient-to-r from-white/80 to-white/60"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                ING
              </motion.span>
              
              {/* Animated line under title */}
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-white via-white/80 to-transparent" 
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              
              {/* Glitch effect */}
              <motion.div
                className="absolute inset-0 bg-white/5 backdrop-blur-md -z-10 skew-x-12 translate-x-full"
                initial={{ translateX: '100%' }}
                animate={{ translateX: ['-100%', '100%'] }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  duration: 5, 
                  ease: "linear",
                  repeatDelay: 5
                }}
              />
            </div>
            
            {/* Second title line with gradient border */}
            <motion.div 
              className="text-3xl md:text-4xl lg:text-6xl font-bold uppercase flex items-center justify-center backdrop-blur-sm relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="relative px-12 py-2">
                {/* Gradient background for text */}
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">THE FUTURE</span>
                
                {/* Animated borders */}
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                />
                <motion.span 
                  className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                />
              </span>
            </motion.div>
          </h1>
          
          <motion.div 
            className="relative mb-14 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Background blur element */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm -z-10 rounded-none"></div>
            
            {/* Text content with gradient */}
            <motion.p 
              className="text-md md:text-lg font-light tracking-wide px-6 py-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Pushing the boundaries of design with innovative architectural solutions 
              that seamlessly blend form, function, and sustainability for a better tomorrow.
            </motion.p>
            
            {/* Decorative lines */}
            <motion.div 
              className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-white/50 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            ></motion.div>
            <motion.div 
              className="absolute right-0 bottom-0 h-full w-[1px] bg-gradient-to-t from-white/50 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            ></motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-8 items-center"
          >
            {/* Explore Button with glow effect */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white to-white/50 rounded-none opacity-30 group-hover:opacity-100 transition duration-500 blur"></div>
              <Button 
                size="lg" 
                className="relative bg-black border border-white/70 text-white hover:text-black hover:bg-white px-10 uppercase tracking-widest text-sm py-6 transition-all duration-300"
                onClick={scrollToProjects}
              >
                EXPLORE WORK
              </Button>
            </motion.div>
            
            {/* Connect Button with animated border */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="relative border-white/40 hover:border-white text-white hover:bg-black/30 uppercase tracking-widest text-sm px-10 py-6 overflow-hidden group"
                asChild
              >
                <a href="#contact">
                  CONNECT
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2,
                      ease: "linear"
                    }}
                  />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        onClick={scrollToProjects}
        whileHover={{ y: 3 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <div className="flex flex-col items-center relative">
          {/* Text label with revealing effect */}
          <div className="overflow-hidden mb-2">
            <motion.span 
              className="text-white text-xs uppercase tracking-widest font-light block bg-gradient-to-r from-white/80 to-white bg-clip-text text-transparent"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Explore
            </motion.span>
          </div>
          
          {/* Futuristic scroll indicator */}
          <div className="relative">
            {/* Animated gradient background */}
            <motion.div 
              className="absolute -inset-2 rounded-none bg-gradient-to-t from-white/20 to-transparent blur-sm"
              animate={{ 
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut" 
              }}
            />
            
            {/* Scroll container */}
            <div className="relative h-14 w-8 border border-white/50 backdrop-blur-sm flex items-center justify-center">
              {/* Animated dot */}
              <motion.div 
                className="h-2 w-2 bg-white"
                animate={{ 
                  y: [-3, 12, -3],
                  opacity: [0.5, 1, 0.5],
                  scale: [0.8, 1, 0.8]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut" 
                }}
              />
              
              {/* Trailing light effect */}
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/70 to-transparent"
                animate={{ 
                  scaleY: [0.3, 1, 0.3],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut" 
                }}
              />
            </div>
            
            {/* Animated lines */}
            <motion.div 
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
              animate={{ 
                opacity: [0.2, 0.5, 0.2],
                scaleX: [0.5, 1, 0.5]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut" 
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
