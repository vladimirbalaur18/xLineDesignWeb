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
import ProjectCard from "./ProjectCard";

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
  const [visibleProjects, setVisibleProjects] = useState(2);
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
            <Link key={project.slug} href={`/property/${project.slug}`}>
              <ProjectCard
                project={project}
                projectCategory={
                  filtersMap[project.category as keyof typeof filtersMap]
                }
                showTags={false}
                className=""
              />
            </Link>
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
