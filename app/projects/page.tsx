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
import NotFoundIllustration from "../components/NotFoundIllustration";
import * as _ from "lodash";
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

  // Group projects by year
  const projectsByYear = useMemo(() => {
    const grouped: { [year: string]: typeof filteredProjects } = {};
    filteredProjects.forEach((project) => {
      if (!grouped[project.year]) grouped[project.year] = [];
      grouped[project.year].push(project);
    });
    // Sort years descending
    return Object.entries(grouped)
      .sort((a, b) => parseInt(a[0]) - parseInt(a[0]))
      .reduce((acc, [year, projects]) => {
        acc[year] = projects;
        return acc;
      }, {} as { [year: string]: typeof filteredProjects });
  }, [filteredProjects]);

  const years = _.orderBy(
    Object.keys(projectsByYear),
    [(y) => parseInt(y)],
    ["desc"]
  );

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;

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
      <section className="py-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-background/90 -z-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] -z-10"></div>
        <div className="absolute h-full w-[1px] bg-white/10 -left-10 top-0 rotate-12 -z-10"></div>
        <div className="absolute h-full w-[1px] bg-white/10 -right-10 top-0 -rotate-12 -z-10"></div>

        <div className="container mx-auto px-4 relative space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center relative"
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
            <div className="relative max-w-2xl mx-auto">
              {" "}
              {/* Slightly less wide */}
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white/50 h-6 w-6" />{" "}
              {/* Slightly smaller icon */}
              <Input
                type="text"
                placeholder="Caută proiecte..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-14 pr-6 py-5 h-16 text-lg bg-black/50 border-white/20 text-white placeholder:text-white/50 focus:border-white/50 rounded-full shadow-xl" // Slightly smaller, still rounded, moderate shadow
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
                        
                      `}
                      onClick={() => {
                        setActiveFilter(key);
                        setCurrentPage(1);
                      }}
                    >
                      {filtersMap[key]}
                    </Badge>
                  </motion.div>
                ))}
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
        <div className="container mx-auto px-4 flex flex-col gap-12 relative">
          {/* Desktop timeline line (only render for lg and up) */}
          {filteredProjects?.length > 0 && (
            <div className="hidden lg:block absolute top-0 bottom-0 w-1 left-16 bg-white rounded-full" />
          )}
          {/* Not Found Illustration */}
          {filteredProjects.length === 0 && (
            <div className="flex flex-col items-center justify-center">
              <NotFoundIllustration />
              <h3 className="text-2xl font-bold text-white mb-2">
                Niciun proiect găsit
              </h3>
              <p className="text-white/70 mb-6 text-center max-w-md">
                Nu am găsit proiecte care să corespundă criteriilor tale de
                căutare sau filtrare. Încearcă să resetezi filtrele sau să cauți
                altceva.
              </p>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:border-white hover:bg-white/10"
                onClick={resetFilters}
              >
                Resetează filtrele
              </Button>
            </div>
          )}

          {years.map((year, idx) => (
            <div key={year} className="relative z-10">
              {/* Mobile: year heading and cards in column */}
              <div className="block lg:hidden w-full mb-4">
                <h2 className="text-xl font-bold text-white/90 mb-2">{year}</h2>
                <div className="grid grid-cols-1 gap-6">
                  {projectsByYear[year].map((project) => (
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
                                repeat:
                                  hoveredProject === project.id ? Infinity : 0,
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
                                repeat:
                                  hoveredProject === project.id ? Infinity : 0,
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
                </div>
              </div>
              {/* Desktop: timeline and cards in flex row */}
              <div className="hidden lg:flex flex-row gap-8 items-start">
                {/* Timeline marker */}
                <div className="flex flex-col items-end w-32 relative">
                  <div
                    className="flex items-center min-h-[2.5rem]"
                    style={{ minHeight: "2.5rem" }}
                  >
                    {/* Year label: normal flow, to the right of the line */}
                    <span className="text-white text-lg font-bold ml-8">
                      {year}
                    </span>
                  </div>
                </div>
                {/* Cards */}
                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {projectsByYear[year].map((project) => (
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
                                  repeat:
                                    hoveredProject === project.id
                                      ? Infinity
                                      : 0,
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
                                  repeat:
                                    hoveredProject === project.id
                                      ? Infinity
                                      : 0,
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
                                  {project.tags
                                    .slice(0, 3)
                                    .map((tag, index) => (
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
