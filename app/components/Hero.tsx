"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/hero/1.jpg",
    },
    {
      image: "/hero/2.jpg",
    },
    {
      image: "/hero/3.jpg",
    },
    {
      image: "/hero/4.jpg",
    },
    {
      image: "/hero/5.jpg",
    },
    {
      image: "/hero/6.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="max-w-2xl mx-auto text-center lg:mx-0 lg:text-left">
          {/* Static Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                DESIGN MODERN
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold uppercase mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                ARHITECTURĂ INOVATIVĂ
              </span>
            </h2>
            <p className="text-md md:text-2xl font-light tracking-wide mb-8 text-white/80">
              Arhitectură și design interior contemporan, creat cu viziune,
              funcționalitate și suflet.
            </p>
          </motion.div>

          {/* Static Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="relative bg-black border border-white/70 text-white hover:text-black hover:bg-white px-10 uppercase tracking-widest text-sm py-6 transition-all duration-300 group overflow-hidden"
              onClick={scrollToProjects}
            >
              <span className="relative z-10">EXPLOREAZĂ</span>
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="relative border-white/40 hover:border-white text-white hover:bg-black/30 uppercase tracking-widest text-sm px-10 py-6 transition-all duration-300 group overflow-hidden"
              asChild
            >
              <a href="#contact">
                <span className="relative z-10">CONTACTEAZĂ-NE</span>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
