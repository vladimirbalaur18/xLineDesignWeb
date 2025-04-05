import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Pencil, 
  Building, 
  Home, 
  Landmark, 
  Presentation, 
  RefreshCw, 
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const services = [
  {
    id: "residential",
    title: "Residential",
    icon: <Home className="h-6 w-6" />,
    description: "Creating distinctive homes that reflect the personality and lifestyle of their owners while optimizing functionality and comfort.",
    features: [
      "Custom Home Design",
      "Multi-Family Residences",
      "Sustainable Housing",
      "Luxury Villas",
      "Home Renovations"
    ],
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88"
  },
  {
    id: "commercial",
    title: "Commercial",
    icon: <Building className="h-6 w-6" />,
    description: "Designing dynamic commercial spaces that enhance productivity, foster collaboration, and create memorable experiences for visitors.",
    features: [
      "Office Buildings",
      "Retail Spaces",
      "Hotels & Resorts",
      "Mixed-Use Developments",
      "Corporate Headquarters"
    ],
    image: "https://images.unsplash.com/photo-1648318440207-ef1893eb8ac0"
  },
  {
    id: "institutional",
    title: "Institutional",
    icon: <Landmark className="h-6 w-6" />,
    description: "Creating functional, inspirational spaces for education, healthcare, and cultural institutions that serve communities.",
    features: [
      "Educational Facilities",
      "Healthcare Buildings",
      "Cultural Centers",
      "Government Facilities",
      "Science & Research Facilities"
    ],
    image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da"
  },
  {
    id: "planning",
    title: "Planning",
    icon: <Presentation className="h-6 w-6" />,
    description: "Comprehensive master planning and urban design services that create cohesive, sustainable, and vibrant communities.",
    features: [
      "Urban Design",
      "Master Planning",
      "Community Planning",
      "Campus Planning",
      "Landscape Architecture"
    ],
    image: "https://images.unsplash.com/photo-1717245232884-f03d8bce756d"
  },
  {
    id: "renovation",
    title: "Renovation",
    icon: <RefreshCw className="h-6 w-6" />,
    description: "Revitalizing existing spaces with modern design solutions while preserving historical and architectural significance.",
    features: [
      "Historic Preservation",
      "Adaptive Reuse",
      "Building Retrofits",
      "Interior Renovations",
      "Facade Improvements"
    ],
    image: "https://images.unsplash.com/photo-1717445130415-d43ebd8fed1c"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "We meet to understand your vision, requirements, and project goals."
  },
  {
    number: "02",
    title: "Concept Design",
    description: "Our team develops initial design concepts based on your requirements."
  },
  {
    number: "03",
    title: "Design Development",
    description: "Refining the approved concept with detailed plans and specifications."
  },
  {
    number: "04",
    title: "Documentation",
    description: "Creating comprehensive technical drawings and construction documents."
  },
  {
    number: "05",
    title: "Construction",
    description: "Overseeing the building process to ensure design integrity and quality."
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background/95 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            <span className="text-primary">Our</span> Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive architectural services tailored to meet the unique needs of each client 
            and project, from initial concept to construction completion.
          </p>
        </motion.div>

        {/* Services tabs */}
        <Tabs defaultValue="residential" className="mb-20" onValueChange={(value) => {
          const selected = services.find(s => s.id === value);
          if (selected) setActiveService(selected);
        }}>
          <TabsList className="grid grid-cols-2 md:grid-cols-5 bg-gray-900/50 border border-gray-800 rounded-lg p-1 mb-8">
            {services.map((service) => (
              <TabsTrigger 
                key={service.id} 
                value={service.id}
                className="rounded-md data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
              >
                <div className="flex flex-col items-center gap-1.5 py-1">
                  {service.icon}
                  <span className="text-sm">{service.title}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    {service.icon}
                    <span>{service.title} Architecture</span>
                  </h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="mt-2 bg-primary hover:bg-primary/90">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden"
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm text-gray-300">
                      Our {service.title.toLowerCase()} projects combine functionality, aesthetics, and sustainable solutions.
                    </p>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Process section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-12 text-center">Our Design Process</h3>
          
          <div className="relative mb-16">
            {/* Process line */}
            <div className="absolute top-12 left-9 right-9 h-0.5 bg-gray-800 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="relative"
                >
                  <Card className={`bg-gray-900/70 border-gray-800 transition-all duration-300 h-full ${
                    hoveredStep === index ? "border-primary" : ""
                  }`}>
                    <CardContent className="p-6 text-center relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 border-2 border-gray-800 w-10 h-10 rounded-full flex items-center justify-center font-bold text-primary">
                        {step.number}
                      </div>
                      <h4 className="text-xl font-medium mt-6 mb-2">{step.title}</h4>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
