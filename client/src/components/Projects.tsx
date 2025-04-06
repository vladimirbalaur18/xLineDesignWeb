import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Project data
const projects = [
  {
    id: 1,
    title: "Azure Sky Tower",
    description: "A modern skyscraper with sustainable features and panoramic views of the city skyline.",
    category: "Commercial",
    location: "Singapore",
    year: "2023",
    image: "https://images.unsplash.com/photo-1646917939502-5f124b08bd97",
    tags: ["Sustainable", "High-rise", "Urban"]
  },
  {
    id: 2,
    title: "Oceanfront Residence",
    description: "A luxurious beachfront home that seamlessly blends indoor and outdoor living spaces.",
    category: "Residential",
    location: "Malibu, CA",
    year: "2022",
    image: "https://images.unsplash.com/photo-1646917939723-5ca456967957",
    tags: ["Coastal", "Luxury", "Open-concept"]
  },
  {
    id: 3,
    title: "The Vertex",
    description: "An award-winning office complex featuring innovative design and collaborative workspaces.",
    category: "Commercial",
    location: "Toronto",
    year: "2023",
    image: "https://images.unsplash.com/photo-1661951933252-d8722effb21d",
    tags: ["Office", "Minimalist", "Collaborative"]
  },
  {
    id: 4,
    title: "Echo Library",
    description: "A public library designed to promote learning and community engagement through thoughtful spaces.",
    category: "Institutional",
    location: "Copenhagen",
    year: "2022",
    image: "https://images.unsplash.com/photo-1649496880872-6159f729f24e",
    tags: ["Cultural", "Public", "Sustainable"]
  },
  {
    id: 5,
    title: "Harmony Pavilion",
    description: "A multi-purpose event space that adapts to various cultural and entertainment functions.",
    category: "Cultural",
    location: "Melbourne",
    year: "2021",
    image: "https://images.unsplash.com/photo-1647705985300-2b63d0ac9e39",
    tags: ["Events", "Versatile", "Contemporary"]
  },
  {
    id: 6,
    title: "The Prism House",
    description: "An angular residential building that plays with light and shadow throughout the day.",
    category: "Residential",
    location: "Berlin",
    year: "2023",
    image: "https://images.unsplash.com/photo-1661951933413-5dda7807de41",
    tags: ["Modern", "Geometric", "Light-focused"]
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15 
    }
  }
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });
  
  const filters = ["All", "Commercial", "Residential", "Institutional", "Cultural"];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const loadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
  };

  const loadLess = () => {
    setVisibleProjects(prev => Math.max(3, prev - 3));
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight uppercase">
            <span className="text-white border-b-2 border-white pb-1">FEATURED</span> PROJECTS
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Explore our portfolio of innovative architectural designs spanning various scales and typologies.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Badge
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`text-sm py-2 px-4 cursor-pointer uppercase tracking-wider ${
                activeFilter === filter 
                  ? "bg-white text-black hover:bg-gray-200" 
                  : "border-white text-white hover:bg-white/10"
              }`}
              onClick={() => {
                setActiveFilter(filter);
                setVisibleProjects(3);
              }}
            >
              {filter}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group"
            >
              <Card className="overflow-hidden bg-gray-900/50 border-white/10 h-full hover:border-white/50 transition-all duration-300">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <motion.div 
                    whileHover={{ filter: 'grayscale(0%)' }}
                    initial={{ filter: 'grayscale(100%)' }}
                    className="h-full w-full"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:opacity-90 transition-opacity"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white text-xs tracking-widest uppercase font-light">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mt-1 uppercase">{project.title}</h3>
                    <div className="flex gap-1 mt-2 flex-wrap">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="border-white/30 text-white text-xs uppercase">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-5 bg-black/40">
                  <div className="flex justify-between items-center mb-3 border-b border-white/10 pb-2">
                    <span className="text-gray-400 text-xs uppercase tracking-wider">{project.location}</span>
                    <span className="text-white font-mono">{project.year}</span>
                  </div>
                  <p className="text-gray-300 text-sm font-light">{project.description}</p>
                  
                  <motion.div 
                    className="mt-4 flex justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0,
                      y: hoveredProject === project.id ? 0 : 10
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-white hover:text-black hover:bg-white uppercase tracking-wider border-white/30 hover:border-white text-xs"
                    >
                      View Project <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Load more/less buttons */}
        <div className="flex justify-center mt-12 gap-6">
          {visibleProjects > 3 && (
            <Button 
              variant="outline" 
              onClick={loadLess}
              className="border-white/30 hover:bg-white hover:text-black hover:border-white gap-2 uppercase tracking-wider text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Show Less
            </Button>
          )}
          
          {visibleProjects < filteredProjects.length && (
            <Button 
              variant="outline" 
              onClick={loadMore}
              className="border-white/30 hover:bg-white hover:text-black hover:border-white gap-2 uppercase tracking-wider text-sm"
            >
              Show More
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
