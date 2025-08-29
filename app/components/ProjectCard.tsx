import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import React, { useState } from "react";

interface ProjectCardProps {
  project: any;
  projectCategory: string;
  showTags?: boolean;
  className?: string;
}

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

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  projectCategory,
  showTags = false,
  className = "",
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      key={project.id}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group ${className}`}
    >
      <div className="relative group h-full cursor-pointer">
        {/* Glowing effect on hover */}
        <motion.div
          className="absolute -inset-0.5 bg-gradient-to-r from-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"
          animate={{
            boxShadow: hovered
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
          {/* Corner accents */}
          <motion.div
            className="absolute top-0 left-0 w-10 h-10 border-t border-l border-white/20 z-10"
            whileHover={{ scale: 1.1 }}
            animate={{
              borderColor: hovered
                ? [
                    "rgba(255,255,255,0.2)",
                    "rgba(255,255,255,0.4)",
                    "rgba(255,255,255,0.2)",
                  ]
                : "rgba(255,255,255,0.2)",
            }}
            transition={{
              duration: 2,
              repeat: hovered ? Infinity : 0,
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-white/20 z-10"
            whileHover={{ scale: 1.1 }}
            animate={{
              borderColor: hovered
                ? [
                    "rgba(255,255,255,0.2)",
                    "rgba(255,255,255,0.4)",
                    "rgba(255,255,255,0.2)",
                  ]
                : "rgba(255,255,255,0.2)",
            }}
            transition={{
              duration: 2,
              repeat: hovered ? Infinity : 0,
            }}
          />

          <div className="relative overflow-hidden aspect-[3/2]">
            <motion.div className="h-full w-full">
              <Image
                loading="lazy"
                src={`${project.image}`}
                alt={project.title}
                width={1200}
                height={800}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>

            {/* Overlay gradient with grid pattern */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-black/5 group-hover:opacity-90 transition-opacity">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>
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
                    {projectCategory}
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
            {showTags && project.tags && (
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag: string, index: number) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs border-white/20 text-white/60"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
