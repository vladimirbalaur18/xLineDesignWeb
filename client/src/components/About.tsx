import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  Globe, 
  Home, 
  Lightbulb, 
  ChevronRight 
} from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const stats = [
    { value: "25+", label: "Years of Experience", icon: <Award className="h-6 w-6 text-primary" /> },
    { value: "130+", label: "Projects Completed", icon: <Home className="h-6 w-6 text-primary" /> },
    { value: "80+", label: "Design Awards", icon: <Lightbulb className="h-6 w-6 text-primary" /> },
    { value: "18", label: "Countries Worldwide", icon: <Globe className="h-6 w-6 text-primary" /> },
    { value: "45", label: "Team Members", icon: <Users className="h-6 w-6 text-primary" /> }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gray-950"
    >
      {/* Decorative elements */}
      <motion.div 
        className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        style={{ y: y1, opacity }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"
        style={{ y: y2, opacity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1618385455730-2571c38966b7" 
                alt="Architectural sketch" 
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[3/4]"
              />
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1445510861639-5651173bc5d5" 
                  alt="Minimalist interior" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover aspect-square"
                />
                <img 
                  src="https://images.unsplash.com/photo-1637968892928-705abff0e1b3" 
                  alt="Architectural blueprint" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
            
            {/* Badge overlay */}
            <div className="absolute -right-8 bottom-12 md:bottom-24 bg-background border border-gray-800 rounded-xl p-4 shadow-lg max-w-[240px]">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Award Winning</p>
                  <p className="font-semibold">Design Studio</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="text-primary">About</span> Nexus Architects
            </h2>
            
            <p className="text-gray-400">
              Founded in 1998, Nexus Architects has evolved into a global design firm recognized for 
              creating spaces that inspire, innovate, and endure. Our multidisciplinary team blends 
              artistic vision with technical expertise to deliver exceptional architectural solutions.
            </p>
            
            <p className="text-gray-400">
              We believe that great architecture should not only captivate visually but also enhance 
              the way people live, work, and interact. Our designs are driven by a deep understanding 
              of our clients' needs, environmental considerations, and cultural context.
            </p>
            
            <div className="flex items-center text-primary gap-2 group cursor-pointer">
              <span className="font-medium">Learn more about our approach</span>
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </div>
        
        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all hover:transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
