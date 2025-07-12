"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ExternalLink, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import ProjectScene3D from "./ProjectScene3D";
import { properties } from "../lib/properties";
import Image from "next/image";
import Link from "next/link";

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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  const filtersMap = {
    all: "Toate lucrările",
    interiorDesign: "Design interior",
    architecture: "Arhitectură",
    landscapeDesign: "Peisagistică",
  };

  const filters = Object.keys(filtersMap) as Array<keyof typeof filtersMap>;

  const filteredProjects =
    activeFilter === "all"
      ? properties
      : properties.filter((project) => project.category === activeFilter);

  const loadLess = () => {
    setVisibleProjects((prev) => Math.max(3, prev - 3));
  };

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
                variant={
                  activeFilter === filtersMap[key] ? "default" : "outline"
                }
                className={`
                  relative text-sm py-2.5 px-6 cursor-pointer uppercase tracking-wider backdrop-blur-sm
                  ${
                    activeFilter === filtersMap[key]
                      ? "bg-black border border-white text-white hover:bg-white/10"
                      : "border-white/20 text-white/70 hover:text-white hover:border-white/50"
                  }
                `}
                onClick={() => {
                  setActiveFilter(key);
                  setVisibleProjects(3);
                }}
              >
                {filtersMap[key]}

                {/* Active indicator line */}
                {activeFilter === filtersMap[key] && (
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/30 via-white to-white/30"
                    layoutId="activeFilterLine"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-2"
          viewport={{ once: true }}
        >
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group"
            >
              <Link href={`property/${project.id}`}>
                <div className="relative group h-full cursor-pointer">
                  {/* Glowing effect on hover */}
                  <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"
                    animate={{
                      boxShadow:
                        hoveredProject === project.id
                          ? [
                              "0 0 5px 2px rgba(255, 255, 255, 0.1)",
                              "0 0 10px 3px rgba(255, 255, 255, 0.15)",
                              "0 0 5px 2px rgba(255, 255, 255, 0.1)",
                            ]
                          : "none",
                    }}
                    transition={{
                      duration: 2,
                    }}
                  />

                  <Card className="overflow-hidden bg-black/80 backdrop-blur-sm border-white/10 h-full hover:border-white/30 transition-all duration-300 relative rounded-none">
                    {/* Project number indicator */}
                    <div className="absolute top-3 right-3 z-30">
                      <div className="bg-black/70 backdrop-blur-sm border border-white/20 w-8 h-8 flex items-center justify-center">
                        <span className="text-white/80 font-mono text-xs">
                          0{project.id}
                        </span>
                      </div>
                    </div>

                    {/* Corner accent */}
                    <motion.div
                      className="absolute top-0 left-0 w-10 h-10 border-t border-l border-white/20 z-10"
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        borderColor:
                          hoveredProject === project.id
                            ? [
                                "rgba(255,255,255,0.2)",
                                "rgba(255,255,255,0.4)",
                                "rgba(255,255,255,0.2)",
                              ]
                            : "rgba(255,255,255,0.2)",
                      }}
                      transition={{
                        duration: 2,
                        repeat: hoveredProject === project.id ? Infinity : 0,
                      }}
                    />
                    <motion.div
                      className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-white/20 z-10"
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        borderColor:
                          hoveredProject === project.id
                            ? [
                                "rgba(255,255,255,0.2)",
                                "rgba(255,255,255,0.4)",
                                "rgba(255,255,255,0.2)",
                              ]
                            : "rgba(255,255,255,0.2)",
                      }}
                      transition={{
                        duration: 2,
                        repeat: hoveredProject === project.id ? Infinity : 0,
                      }}
                    />

                    <div className="relative overflow-hidden aspect-[3/2]">
                      <motion.div className="h-full w-full">
                        <Image
                          src={`${project.image}`}
                          alt={project.title}
                          width={1200}
                          height={800}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        />
                      </motion.div>

                      {/* Overlay gradient with grid pattern */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 group-hover:opacity-90 transition-opacity">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>
                      </div>

                      {/* Project title content */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 backdrop-blur-sm">
                        <div className="overflow-hidden">
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            <span className="text-white/70 text-xs tracking-widest uppercase font-light block mb-1">
                              {
                                filtersMap[
                                  project.category as keyof typeof filtersMap
                                ]
                              }
                            </span>
                            <div className="flex justify-between items-baseline">
                              <h3 className="text-xl font-bold text-white uppercase tracking-wider bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                                {project.title}
                              </h3>
                              <span className="text-white/80 font-mono text-xs">
                                {project.year}
                              </span>
                            </div>

                            {/* Animated line */}
                            <motion.div
                              className="h-[1px] bg-gradient-to-r from-white/80 via-white/40 to-transparent mt-2"
                              initial={{ scaleX: 0, originX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              transition={{ duration: 0.8 }}
                              viewport={{ once: true }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-5 bg-black/60 backdrop-blur-sm">
                      <div className="flex items-start gap-2 mb-4">
                        <div className="text-white/50 text-xs uppercase tracking-wider min-w-[80px]">
                          {project.location}
                        </div>
                        <p className="text-white/80 text-sm font-light leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Link>
            </motion.div>
          ))}
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
