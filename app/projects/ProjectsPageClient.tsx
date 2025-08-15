"use client";

import { useState, useRef, useMemo } from "react";
import { motion } from "motion/react";
import { Badge } from "../components/ui/badge";
import { Search, ChevronLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { DebouncedInput } from "../components/ui/debounced-input";
import { properties } from "../lib/properties";
import Link from "next/link";
import Footer from "../components/Footer";
import NotFoundIllustration from "../components/NotFoundIllustration";
import * as _ from "lodash";
import ProjectCard from "../components/ProjectCard";
import { filtersMap } from "../../shared/filtersMap";

import { useUrlStates } from "../hooks/use-url-state";
// Animation variants

export default function ProjectsPage() {
  const [filters, updateFilters, resetFilter] = useUrlStates({
    filter: "all",
    search: "",
    sort: "newest",
    page: "1",
  });

  const filtersList = Object.keys(filtersMap) as Array<keyof typeof filtersMap>;

  // Filter and search projects
  const filteredProjects = useMemo(() => {
    let filtered = properties;

    // Apply category filter
    if (filters.filter !== "all") {
      filtered = filtered.filter(
        (project) => project.category === filters.filter
      );
    }

    // Apply search filter
    if (filters.search) {
      const query = filters.search.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project?.location?.toLowerCase().includes(query) ||
          project?.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Apply sorting
    switch (filters.sort) {
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
        filtered.sort(
          (a, b) => a?.location?.localeCompare(b?.location || "") || 0
        );
        break;
    }

    return filtered;
  }, [filters.filter, filters.search, filters.sort]);

  // Group projects by year
  const projectsByYear = useMemo(() => {
    const grouped: { [year: string]: typeof filteredProjects } = {};
    filteredProjects.forEach((project) => {
      if (!grouped[project.year]) grouped[project.year] = [];
      grouped[project.year].push(project);
    });
    // Sort years descending
    return Object.entries(grouped)
      .sort((a) => parseInt(a[0]) - parseInt(a[0]))
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

  const resetFilters = () => {
    updateFilters({
      filter: "all",
      search: "",
      sort: "newest",
      page: "1",
    });
  };

  return (
    <div className="min-h-screen pt-24 bg-black">
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
              <DebouncedInput
                type="text"
                placeholder="Caută proiecte..."
                value={filters.search}
                onChange={(value) => {
                  updateFilters({ search: value, page: "1" });
                }}
                debounceMs={500}
                className="pl-14 pr-6 py-5 h-16 text-lg bg-black/50 border-white/20 text-white placeholder:text-white/50 focus:border-white/50 rounded-full shadow-xl" // Slightly smaller, still rounded, moderate shadow
              />
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap justify-center items-center gap-4">
              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3">
                {filtersList.map((key) => (
                  <motion.div
                    key={key}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge
                      variant={filters.filter === key ? "default" : "outline"}
                      className={`
                        relative text-sm py-2.5 px-6 cursor-pointer uppercase tracking-wider backdrop-blur-sm
                        
                      `}
                      onClick={() => updateFilters({ filter: key, page: "1" })}
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
                {filters.search && ` pentru "${filters.search}"`}
                {filters.filter !== "all" &&
                  ` în categoria "${
                    filtersMap[filters.filter as keyof typeof filtersMap]
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

          {years.map((year) => (
            <div key={year} className="relative z-10">
              {/* Mobile: year heading and cards in column */}
              <div className="block lg:hidden w-full mb-4">
                <h2 className="text-xl font-bold text-white/90 mb-2">{year}</h2>
                <div className="grid grid-cols-1 gap-6">
                  {projectsByYear[year].map((project) => (
                    <Link key={project.slug} href={`/property/${project.slug}`}>
                      <ProjectCard
                        key={project.slug}
                        project={project}
                        projectCategory={
                          filtersMap[
                            project.category as keyof typeof filtersMap
                          ]
                        }
                        showTags={true}
                        className=""
                      />
                    </Link>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-2">
                    {projectsByYear[year].map((project) => (
                      <Link
                        key={project.slug}
                        href={`/property/${project.slug}`}
                      >
                        <ProjectCard
                          project={project}
                          projectCategory={
                            filtersMap[
                              project.category as keyof typeof filtersMap
                            ]
                          }
                          showTags={true}
                          className=""
                        />
                      </Link>
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
