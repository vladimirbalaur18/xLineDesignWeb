"use client";

import { useState, useRef, useMemo } from "react";
import { motion, useInView } from "motion/react";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import {
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Search,
  Filter,
  ChevronLeft,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { properties } from "../lib/properties";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

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

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  const filtersMap = {
    all: "Toate lucrările",
    interiorDesign: "Design interior",
    architecture: "Arhitectură",
    landscapeDesign: "Peisagistică",
  };

  const filters = Object.keys(filtersMap) as Array<keyof typeof filtersMap>;

  // Filter and search projects
  const filteredProjects = useMemo(() => {
    let filtered = properties;

    // Apply category filter
    if (activeFilter !== "all") {
      filtered = filtered.filter(
        (project) => project.category === activeFilter
      );
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.location.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "newest":
        filtered.sort((a, b) => parseInt(b.year) - parseInt(a.year));
        break;
      case "oldest":
        filtered.sort((a, b) => parseInt(a.year) - parseInt(b.year));
        break;
      case "name":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "location":
        filtered.sort((a, b) => a.location.localeCompare(b.location));
        break;
    }

    return filtered;
  }, [activeFilter, searchQuery, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const resetFilters = () => {
    setActiveFilter("all");
    setSearchQuery("");
    setSortBy("newest");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <Button
              variant="outline"
              className="border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300 group"
            >
              <ChevronLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Înapoi la pagina principală
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Header Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-background/90 -z-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] -z-10"></div>
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
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight uppercase relative">
                <motion.span
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  PORTOFOLIU COMPLET
                </motion.span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-white via-white/80 to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                />
                <div className="absolute -left-4 top-0 h-full w-[1px] bg-white/30"></div>
                <div className="absolute -right-4 top-0 h-full w-[1px] bg-white/30"></div>
              </h1>
            </div>

            <motion.p
              className="text-gray-300 max-w-3xl mx-auto font-light tracking-wide backdrop-blur-sm py-2 px-4 border-l border-r border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Explorează întregul nostru portofoliu de proiecte arhitecturale
              inovatoare. Filtrează și caută prin lucrările noastre pentru a
              găsi exact ceea ce cauți.
            </motion.p>
          </motion.div>

          {/* Search and Filter Controls */}
          <motion.div
            className="mb-12 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
              <Input
                type="text"
                placeholder="Caută proiecte..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-10 bg-black/50 border-white/20 text-white placeholder:text-white/50 focus:border-white/50"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap justify-center items-center gap-4">
              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3">
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
                        ${
                          activeFilter === key
                            ? "bg-black border border-white text-white hover:bg-white/10"
                            : "border-white/20 text-white/70 hover:text-white hover:border-white/50"
                        }
                      `}
                      onClick={() => {
                        setActiveFilter(key);
                        setCurrentPage(1);
                      }}
                    >
                      {filtersMap[key]}
                      {activeFilter === key && (
                        <motion.span
                          className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/30 via-white to-white/30"
                          layoutId="activeFilterLine"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              {/* Sort Controls */}
              <div className="flex items-center gap-4">
                <Select
                  value={sortBy}
                  onValueChange={(value) => {
                    setSortBy(value);
                    setCurrentPage(1);
                  }}
                >
                  <SelectTrigger className="w-40 bg-black/50 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-white/20">
                    <SelectItem value="newest">Cele mai noi</SelectItem>
                    <SelectItem value="oldest">Cele mai vechi</SelectItem>
                    <SelectItem value="name">Nume</SelectItem>
                    <SelectItem value="location">Locație</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  onClick={resetFilters}
                  className="border-white/30 text-white hover:border-white text-sm"
                >
                  Resetează
                </Button>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <p className="text-white/70 text-sm">
                {filteredProjects.length} proiecte găsite
                {searchQuery && ` pentru "${searchQuery}"`}
                {activeFilter !== "all" &&
                  ` în categoria "${
                    filtersMap[activeFilter as keyof typeof filtersMap]
                  }"`}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid/List */}
      <section className="pb-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            ref={sectionRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            viewport={{ once: true }}
          >
            {currentProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group"
              >
                <Link href={`/property/${project.id}`}>
                  <div className="relative group h-full cursor-pointer">
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
                      transition={{ duration: 2 }}
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

                      {/* Corner accents */}
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

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs border-white/20 text-white/60"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              className="flex justify-center items-center mt-16 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button
                variant="outline"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="border-white/30 text-white hover:border-white disabled:opacity-50"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Anterior
              </Button>

              <div className="flex gap-2">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      onClick={() => goToPage(pageNum)}
                      className={`w-10 h-10 p-0 ${
                        currentPage === pageNum
                          ? "bg-white text-black"
                          : "border-white/30 text-white hover:border-white"
                      }`}
                    >
                      {pageNum}
                    </Button>
                  );
                })}
              </div>

              <Button
                variant="outline"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="border-white/30 text-white hover:border-white disabled:opacity-50"
              >
                Următor
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </motion.div>
          )}

          {/* No results message */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* SVG Illustration */}
              <motion.div
                className="mb-8 flex justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  {/* Background circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.3"
                  />

                  {/* Search magnifying glass */}
                  <path
                    d="M70 70 L90 90 M90 70 L70 90"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  <circle
                    cx="85"
                    cy="85"
                    r="15"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                  />

                  {/* Building/architecture elements */}
                  <rect
                    x="120"
                    y="80"
                    width="20"
                    height="30"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.4"
                  />
                  <rect
                    x="125"
                    y="85"
                    width="10"
                    height="10"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.4"
                  />

                  {/* Decorative lines */}
                  <line
                    x1="40"
                    y1="130"
                    x2="160"
                    y2="130"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.2"
                  />
                  <line
                    x1="50"
                    y1="140"
                    x2="150"
                    y2="140"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.2"
                  />

                  {/* Question mark */}
                  <text
                    x="100"
                    y="170"
                    textAnchor="middle"
                    fill="currentColor"
                    fontSize="24"
                    opacity="0.5"
                    fontFamily="Arial, sans-serif"
                  >
                    ?
                  </text>
                </svg>
              </motion.div>

              <p className="text-white/70 text-lg mb-4">
                Nu s-au găsit proiecte care să corespundă criteriilor tale.
              </p>
              <Button
                variant="outline"
                onClick={resetFilters}
                className="border-white/30 text-white hover:border-white"
              >
                Resetează filtrele
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
