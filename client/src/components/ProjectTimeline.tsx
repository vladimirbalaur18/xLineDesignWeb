import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

// Timeline project data with dates
const timelineProjects = [
  {
    id: 1,
    title: "Azure Sky Tower",
    description: "A modern skyscraper with sustainable features and panoramic views of the city skyline.",
    category: "Commercial",
    location: "Singapore",
    date: "2023-04",
    displayDate: "April 2023",
    image: "https://images.unsplash.com/photo-1646917939502-5f124b08bd97",
    tags: ["Sustainable", "High-rise", "Urban"],
    milestones: [
      { title: "Design Competition", date: "2023-01", displayDate: "Jan 2023" },
      { title: "Concept Development", date: "2023-02", displayDate: "Feb 2023" },
      { title: "Final Design", date: "2023-04", displayDate: "Apr 2023" }
    ]
  },
  {
    id: 2,
    title: "Oceanfront Residence",
    description: "A luxurious beachfront home that seamlessly blends indoor and outdoor living spaces.",
    category: "Residential",
    location: "Malibu, CA",
    date: "2022-11",
    displayDate: "November 2022",
    image: "https://images.unsplash.com/photo-1646917939723-5ca456967957",
    tags: ["Coastal", "Luxury", "Open-concept"],
    milestones: [
      { title: "Client Brief", date: "2022-06", displayDate: "Jun 2022" },
      { title: "Schematic Design", date: "2022-08", displayDate: "Aug 2022" },
      { title: "Construction Documents", date: "2022-11", displayDate: "Nov 2022" }
    ]
  },
  {
    id: 3,
    title: "The Vertex",
    description: "An award-winning office complex featuring innovative design and collaborative workspaces.",
    category: "Commercial",
    location: "Toronto",
    date: "2023-03",
    displayDate: "March 2023",
    image: "https://images.unsplash.com/photo-1661951933252-d8722effb21d",
    tags: ["Office", "Minimalist", "Collaborative"],
    milestones: [
      { title: "Master Planning", date: "2022-09", displayDate: "Sep 2022" },
      { title: "Design Development", date: "2022-12", displayDate: "Dec 2022" },
      { title: "Client Approval", date: "2023-03", displayDate: "Mar 2023" }
    ]
  },
  {
    id: 4,
    title: "Echo Library",
    description: "A public library designed to promote learning and community engagement through thoughtful spaces.",
    category: "Institutional",
    location: "Copenhagen",
    date: "2022-08",
    displayDate: "August 2022",
    image: "https://images.unsplash.com/photo-1649496880872-6159f729f24e",
    tags: ["Cultural", "Public", "Sustainable"],
    milestones: [
      { title: "Design Competition Win", date: "2022-02", displayDate: "Feb 2022" },
      { title: "Community Workshops", date: "2022-05", displayDate: "May 2022" },
      { title: "Final Presentation", date: "2022-08", displayDate: "Aug 2022" }
    ]
  },
  {
    id: 5,
    title: "Harmony Pavilion",
    description: "A multi-purpose event space that adapts to various cultural and entertainment functions.",
    category: "Cultural",
    location: "Melbourne",
    date: "2021-11",
    displayDate: "November 2021",
    image: "https://images.unsplash.com/photo-1647705985300-2b63d0ac9e39",
    tags: ["Events", "Versatile", "Contemporary"],
    milestones: [
      { title: "Concept Design", date: "2021-05", displayDate: "May 2021" },
      { title: "Structural Engineering", date: "2021-08", displayDate: "Aug 2021" },
      { title: "Project Completion", date: "2021-11", displayDate: "Nov 2021" }
    ]
  },
  {
    id: 6,
    title: "The Prism House",
    description: "An angular residential building that plays with light and shadow throughout the day.",
    category: "Residential",
    location: "Berlin",
    date: "2023-01",
    displayDate: "January 2023",
    image: "https://images.unsplash.com/photo-1661951933413-5dda7807de41",
    tags: ["Modern", "Geometric", "Light-focused"],
    milestones: [
      { title: "Initial Sketches", date: "2022-07", displayDate: "Jul 2022" },
      { title: "Material Selection", date: "2022-10", displayDate: "Oct 2022" },
      { title: "Construction Start", date: "2023-01", displayDate: "Jan 2023" }
    ]
  }
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function ProjectTimeline() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  // Extract all years from the project data
  const years = Array.from(
    new Set(
      timelineProjects.map(project => project.date.split('-')[0])
    )
  ).sort((a, b) => b.localeCompare(a)); // Sort years in descending order
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  const filteredProjects = selectedYear 
    ? timelineProjects.filter(project => project.date.startsWith(selectedYear))
    : timelineProjects;

  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-black -z-10"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40 -z-10"></div>
      
      <div className="container mx-auto px-4 relative" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center relative"
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-white/70 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          
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
                PROJECT TIMELINE
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
            className="text-gray-300 max-w-2xl mx-auto font-light tracking-wide backdrop-blur-sm py-2 px-4 border-l border-r border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Explore our project development journey across time. Interact with the timeline to discover our evolving design approach.
          </motion.p>
        </motion.div>
        
        {/* Year filters with futuristic styling */}
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
          
          <motion.div 
            key="all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Badge
              variant={selectedYear === null ? "default" : "outline"}
              className={`
                relative text-sm py-2.5 px-6 cursor-pointer uppercase tracking-wider backdrop-blur-sm
                ${
                  selectedYear === null 
                    ? "bg-black border border-white text-white hover:bg-white/10" 
                    : "border-white/20 text-white/70 hover:text-white hover:border-white/50"
                }
              `}
              onClick={() => setSelectedYear(null)}
            >
              All Years
              
              {/* Active indicator line */}
              {selectedYear === null && (
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/30 via-white to-white/30"
                  layoutId="activeYearLine"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Badge>
          </motion.div>
          
          {years.map((year) => (
            <motion.div 
              key={year}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                variant={selectedYear === year ? "default" : "outline"}
                className={`
                  relative text-sm py-2.5 px-6 cursor-pointer uppercase tracking-wider backdrop-blur-sm
                  ${
                    selectedYear === year 
                      ? "bg-black border border-white text-white hover:bg-white/10" 
                      : "border-white/20 text-white/70 hover:text-white hover:border-white/50"
                  }
                `}
                onClick={() => setSelectedYear(year)}
              >
                {year}
                
                {/* Active indicator line */}
                {selectedYear === year && (
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/30 via-white to-white/30"
                    layoutId="activeYearLine"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Timeline visualization */}
        <div className="relative my-20">
          {/* Central timeline line */}
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/50 via-white/30 to-white/10"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />
          
          {/* Timeline nodes */}
          <div className="relative">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center gap-8 mb-24 relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Line connecting to central timeline */}
                <motion.div 
                  className={`absolute h-[1px] bg-white/30 top-8 ${
                    index % 2 === 0 ? "right-1/2 left-auto" : "left-1/2 right-auto"
                  }`}
                  style={{ width: "calc(16.666% - 12px)" }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                />
                
                {/* Timeline node */}
                <div className="absolute left-1/2 -translate-x-1/2 top-8 w-6 h-6 rounded-full border-2 border-white bg-black z-10 flex items-center justify-center">
                  <motion.div 
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ 
                      scale: activeProject === project.id ? [1, 1.5, 1] : 1 
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: activeProject === project.id ? Infinity : 0,
                      repeatType: "loop" 
                    }}
                  />
                </div>
                
                {/* Date indicator */}
                <motion.div 
                  className={`absolute py-1 px-3 bg-black border border-white/20 text-white text-xs tracking-wider uppercase font-mono top-7 ${
                    index % 2 === 0 ? "left-1/2 ml-10" : "right-1/2 mr-10"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {project.displayDate}
                </motion.div>
                
                {/* Project content - alternating left and right */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  {/* Project card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onMouseEnter={() => setActiveProject(project.id)}
                    onMouseLeave={() => setActiveProject(null)}
                    className="group"
                  >
                    <div className="relative">
                      {/* Glowing effect on hover */}
                      <motion.div 
                        className="absolute -inset-0.5 bg-gradient-to-r from-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"
                        animate={{
                          boxShadow: activeProject === project.id 
                            ? [
                                "0 0 5px 2px rgba(255, 255, 255, 0.1)",
                                "0 0 10px 3px rgba(255, 255, 255, 0.15)",
                                "0 0 5px 2px rgba(255, 255, 255, 0.1)"
                              ]
                            : "none"
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: activeProject === project.id ? Infinity : 0,
                          repeatType: "reverse"
                        }}
                      />
                      
                      <Card className="overflow-hidden bg-black/80 backdrop-blur-sm border-white/10 hover:border-white/30 transition-all duration-300 relative">
                        {/* Corner accent */}
                        <motion.div 
                          className="absolute top-0 left-0 w-10 h-10 border-t border-l border-white/20 z-10"
                          whileHover={{ scale: 1.1 }}
                          animate={{
                            borderColor: activeProject === project.id 
                              ? ["rgba(255,255,255,0.2)", "rgba(255,255,255,0.4)", "rgba(255,255,255,0.2)"] 
                              : "rgba(255,255,255,0.2)"
                          }}
                          transition={{ duration: 2, repeat: activeProject === project.id ? Infinity : 0 }}
                        />
                        
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3 overflow-hidden">
                            <motion.div 
                              whileHover={{ filter: 'grayscale(0%)' }}
                              initial={{ filter: 'grayscale(100%)' }}
                              className="h-48 md:h-full"
                            >
                              <img
                                src={project.image}
                                alt={project.title}
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                              />
                            </motion.div>
                          </div>
                          
                          <CardContent className="p-5 bg-black/60 backdrop-blur-sm md:w-2/3">
                            <div className="mb-4">
                              <span className="text-white/70 text-xs tracking-widest uppercase font-light block mb-1">{project.category}</span>
                              <h3 className="text-xl font-bold text-white uppercase tracking-wider bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">{project.title}</h3>
                              
                              {/* Animated line */}
                              <motion.div 
                                className="h-[1px] bg-gradient-to-r from-white/80 via-white/40 to-transparent"
                                initial={{ scaleX: 0, originX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                              />
                            </div>
                            
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {project.tags.map((tag, i) => (
                                <Badge 
                                  key={i} 
                                  variant="outline" 
                                  className="border-white/20 text-white/80 text-xs uppercase tracking-wider py-0.5 hover:border-white/40 transition-colors"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            
                            <div className="flex items-start gap-2 mb-4">
                              <div className="text-white/50 text-xs uppercase tracking-wider min-w-[80px]">{project.location}</div>
                              <p className="text-white/80 text-sm font-light leading-relaxed">{project.description}</p>
                            </div>
                            
                            {/* Milestone timeline */}
                            <div className="mt-4">
                              <h4 className="text-xs uppercase text-white/70 mb-2 tracking-wider">Project Milestones</h4>
                              <div className="relative flex items-center">
                                {/* Milestone line */}
                                <div className="absolute left-0 right-0 h-[1px] bg-white/20"></div>
                                
                                {/* Milestone nodes */}
                                {project.milestones.map((milestone, i) => (
                                  <div 
                                    key={i} 
                                    className="relative flex flex-col items-center z-10"
                                    style={{ width: `${100 / project.milestones.length}%` }}
                                  >
                                    <div className="w-2 h-2 rounded-full bg-white mb-2"></div>
                                    <span className="text-white/70 text-[10px] font-mono mb-1">{milestone.displayDate}</span>
                                    <span className="text-white text-xs text-center">{milestone.title}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            {/* View button */}
                            <div className="flex justify-end mt-4">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="text-white hover:text-black hover:bg-white uppercase tracking-wider border-white/30 hover:border-white text-xs relative overflow-hidden group/btn"
                              >
                                <span className="relative z-10">View Details</span>
                                <ExternalLink className="ml-2 h-3 w-3 relative z-10" />
                                
                                {/* Button hover effect */}
                                <motion.span
                                  className="absolute inset-0 bg-white"
                                  initial={{ x: "-100%" }}
                                  whileHover={{ x: "0%" }}
                                  transition={{ duration: 0.3 }}
                                />
                              </Button>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}