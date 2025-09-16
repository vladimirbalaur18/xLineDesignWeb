"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import Image from "next/image";
export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/1.jpg",
    },
    {
      image: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/2.jpg",
    },
    {
      image: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/3.jpg",
    },
    {
      image: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/4.jpg",
    },
    {
      image: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/1.jpg",
    },
    {
      image: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/5.jpg",
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
          <motion.div
            initial={{ scale: 1, x: 0, y: 0 }}
            animate={(() => {
              const direction = currentSlide % 4;
              if (direction === 0) return { scale: 1.05, x: 20, y: 0 };
              if (direction === 1) return { scale: 1.05, x: 0, y: 20 };
              if (direction === 2) return { scale: 1.05, x: -20, y: 0 };
              return { scale: 1.05, x: 0, y: -20 };
            })()}
            transition={{ duration: 5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slides[currentSlide].image}
              alt={`Slide ${currentSlide + 1}`}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center ">
        <div className="max-w-2xl mx-auto text-center lg:mx-0 lg:text-left">
          {/* Static Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Eleganță în fiecare detaliu
              </span>
            </h1>

            <p className="text-md md:text-2xl font-light tracking-wide mb-8 text-white/80">
              Studio de arhitectură și design interior cu experiență în Moldova
              și România. Plan clar, buget controlat, execuție garantată
            </p>
          </motion.div>

          {/* Static Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center lg:justify-start"
          >
            {/* Explore Button with glow effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:block relative group w-fit"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white to-white/50 rounded-none opacity-30 group-hover:opacity-100 transition duration-500 blur"></div>
              <Button
                size="lg"
                className="relative bg-black border border-white/70 text-white hover:text-black hover:bg-white px-10 uppercase tracking-widest text-sm py-6 transition-all duration-300"
                onClick={scrollToProjects}
              >
                Explorează proiectele
              </Button>
            </motion.div>

            {/* Connect Button with animated border */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-fit"
            >
              <Button
                variant="outline"
                size="lg"
                className="relative border-white/40 hover:border-white text-white hover:bg-black/30 uppercase tracking-widest text-sm px-10 py-6 overflow-hidden group"
                asChild
              >
                <a href="#contact">
                  Contactează-ne
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear",
                    }}
                  />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* NEW BUTTONS */}
        </div>
      </div>

      {/* Scroll indicator*/}
      <div className="flex justify-center items-center mt-auto mb-0 absolute bottom-4 left-0 right-0 md:hidden">
        {/* Animated gradient background */}
        <motion.div
          className="absolute -inset-2 rounded-none bg-gradient-to-t from-white/20 to-transparent blur-sm"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
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
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />

          {/* Trailing light effect */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/70 to-transparent"
            animate={{
              scaleY: [0.3, 1, 0.3],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
}
