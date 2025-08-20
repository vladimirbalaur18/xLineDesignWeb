"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { Badge } from "./ui/badge";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import type { Property } from "../lib/properties";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Projects() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  const filtersMap = {
    all: "Toate lucrările",
    interiorDesign: "Design interior",
    architecture: "Arhitectură",
    landscapeDesign: "Peisagistică",
  };

  const filters = Object.keys(filtersMap) as Array<keyof typeof filtersMap>;

  // Fetch properties from API
  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("/api/projects");

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();
        setProperties(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(
          err instanceof Error ? err.message : "Failed to load projects"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? properties
      : properties.filter((project) => project.category === activeFilter);

  // Autoplay: advance slide every 3s, pause on hover
  useEffect(() => {
    if (!carouselApi) return;
    const id = setInterval(() => {
      if (isAutoplayPaused) return;
      try {
        carouselApi.scrollNext();
      } catch (_) {
        // noop
      }
    }, 3000);
    return () => clearInterval(id);
  }, [carouselApi, isAutoplayPaused]);

  // Reset to first slide when filter changes
  useEffect(() => {
    if (!carouselApi) return;
    try {
      carouselApi.scrollTo(0);
    } catch (_) {
      // noop
    }
  }, [activeFilter, carouselApi]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-background/90 -z-10"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] -z-10"></div>

      {/* Diagonal line */}
      <div className="absolute h-full w-[1px] bg-white/10 -left-10 top-0 rotate-12 -z-10"></div>
      <div className="absolute h-full w-[1px] bg-white/10 -right-10 top-0 -rotate-12 -z-10"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center relative"
        >
          {/* Section heading with modern styling */}
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight uppercase relative">
              <motion.span
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                LUCRĂRILE NOASTRE
              </motion.span>

              {/* Underline */}
              <motion.span
                className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-white via-white/80 to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              />

              {/* Vertical accents */}
              <div className="absolute -left-4 top-0 h-full w-[1px] bg-white/30"></div>
              <div className="absolute -right-4 top-0 h-full w-[1px] bg-white/30"></div>
            </h2>
          </div>

          <motion.p
            className="text-gray-300 max-w-2xl mx-auto font-light tracking-wide backdrop-blur-sm py-2 px-4 border-l border-r border-white/10 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Explorează portofoliul nostru de proiecte arhitecturale inovatoare,
            realizate la diferite scări și în diverse tipologii.
          </motion.p>
        </motion.div>

        {/* Filters with futuristic styling */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Decorative line */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

          {filters.map((key) => (
            <motion.div
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                variant={activeFilter === key ? "default" : "outline"}
                className={`
                  relative text-sm py-2.5 px-6 cursor-pointer uppercase tracking-wider backdrop-blur-sm
                 
                `}
                onClick={() => {
                  setActiveFilter(key);
                }}
              >
                {filtersMap[key]}

                {/* Active indicator line */}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Carousel */}
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          viewport={{ once: true }}
        >
          {loading && (
            <div className="flex justify-center items-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-white/70" />
              <span className="ml-3 text-white/70">
                Se încarcă proiectele...
              </span>
            </div>
          )}

          {error && !loading && (
            <div className="text-center py-16">
              <p className="text-red-400 mb-4">{error}</p>
              <Button
                onClick={() => window.location.reload()}
                variant="outline"
                className="border-white/30 text-white hover:border-white/60"
              >
                Reîncarcă
              </Button>
            </div>
          )}

          {!loading && !error && (
            <Carousel
              className="relative"
              opts={{ align: "start", containScroll: "trimSnaps", loop: true }}
              setApi={setCarouselApi}
              onMouseEnter={() => setIsAutoplayPaused(true)}
              onMouseLeave={() => setIsAutoplayPaused(false)}
            >
              <CarouselContent>
                {filteredProjects.map((project) => (
                  <CarouselItem
                    key={project.slug}
                    className="basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <Link href={`/property/${project.slug}`}>
                      <ProjectCard
                        project={project}
                        projectCategory={
                          filtersMap[
                            project.category as keyof typeof filtersMap
                          ]
                        }
                        showTags={false}
                      />
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-white/30 text-white hover:border-white/60 bg-black/40 hover:bg-black/60" />
              <CarouselNext className="border-white/30 text-white hover:border-white/60 bg-black/40 hover:bg-black/60" />
            </Carousel>
          )}
        </motion.div>
        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center my-6"
        >
          <Link href="/projects">
            <Button
              variant="outline"
              className="border-white/30 text-white hover:border-white gap-2 uppercase tracking-wider text-sm px-6 py-3 transition-all duration-300 backdrop-blur-sm hover:bg-black/50"
            >
              <span>Vezi toate proiectele</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
