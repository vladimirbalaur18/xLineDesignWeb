"use client";

// TODO: header cards to be same size as stats from about sectioj, increase text size
import { useState, useRef } from "react";
import { useIsMobile } from "../hooks/use-mobile";
import { motion } from "motion/react";
import { Home, Landmark, Presentation } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: "interiorDesign",
    title: "Design interior",
    icon: (
      <Home className="h-5 w-5 text-white group-data-[state=active]:text-black" />
    ),
    description:
      "Amenajări personalizate pentru locuințe rezidențiale, spații comerciale și proiecte HoReCa. De la minimalism modern la clasic elegant, creăm interioare care inspiră și funcționează impecabil.",
    features: [
      "Proiectare case personalizate",
      "Locuințe multifamiliale",
      "Locuințe sustenabile",
      "Vile de lux",
      "Renovări rezidențiale",
    ],
    image:
      "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/31%2C1.jpg",
  },

  {
    id: "architecture",
    title: "Arhitectură",
    icon: (
      <Landmark className="h-5 w-5 text-white group-data-[state=active]:text-black" />
    ),
    description:
      "Servicii complete de proiectare pentru construcții noi, renovări și dezvoltări mixte. Combinăm estetica, funcționalitatea și responsabilitatea față de mediu.",
    features: [
      "Instituții de învățământ",
      "Clădiri medicale",
      "Centre culturale",
      "Clădiri guvernamentale",
      "Facilități științifice și de cercetare",
    ],
    image:
      "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/0.jpg",
  },
  {
    id: "landscapeDesign",
    title: "Design peisagistic",
    icon: (
      <Presentation className="h-5 w-5 text-white group-data-[state=active]:text-black" />
    ),
    description:
      "Spații exterioare care îmbină natura și arhitectura — de la grădini private la parcuri publice. Planificăm cu accent pe frumusețe, sustenabilitate și durabilitate.",
    features: [
      "Design urban",
      "Master planning",
      "Planificare comunitară",
      "Planificare campusuri",
      "Arhitectură peisagistică",
    ],
    image: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/5.jpg",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);
  const serviceRefs = useRef<{ [key: string]: HTMLHeadingElement | null }>({});
  const isMobile = useIsMobile();
  const tabsListRef = useRef<HTMLDivElement | null>(null);

  return (
    <section id="services" className="pt-24 bg-black relative overflow-hidden">
      {/* Futuristic decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40 pointer-events-none"></div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-40 right-10 w-[400px] h-[400px] bg-white/5 rounded-full blur-[150px] pointer-events-none"
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none"
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Section heading with futuristic styling */}
          <motion.div
            className="inline-block relative mb-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 uppercase bg-clip-text  bg-gradient-to-b from-white to-white/70">
              <span className="relative">
                Serviciile noastre
                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-white via-white/80 "
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </span>
            </h2>
          </motion.div>

          <motion.p
            className="text-white/70 max-w-2xl mx-auto text-lg backdrop-blur-sm py-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Oferim servicii arhitecturale de ultimă generație, adaptate pentru a
            răspunde nevoilor unice ale fiecărui client și proiect, de la design
            computațional la execuția construcției.
          </motion.p>
        </motion.div>

        {/* Mobile view - Services as cards */}
        {isMobile ? (
          <div className="space-y-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                isMobile={true}
                serviceRefs={serviceRefs}
              />
            ))}
          </div>
        ) : (
          /* Desktop view - Tabs */
          <Tabs
            defaultValue={activeService?.id}
            onValueChange={(value) => {
              const selected = services.find((s) => s.id === value);
              if (selected) setActiveService(selected);
              if (tabsListRef.current) {
                // Scroll the tabs to the top of the viewport with a small offset
                const offset = 64; // Adjust if you have a sticky header
                const top =
                  tabsListRef.current.getBoundingClientRect().top +
                  window.scrollY -
                  offset;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
          >
            <TabsList
              ref={tabsListRef}
              className="
                h-fit flex flex-col sm:flex-row justify-around
                bg-black border border-white/10 rounded-2xl p-1 mb-16 backdrop-blur-sm
                gap-2
              "
            >
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="
                    rounded-xl
                    w-full sm:w-36
                    py-2 sm:py-3
                    px-2 sm:px-4
                    text-xs sm:text-base
                    data-[state=active]:bg-white data-[state=active]:text-black
                    transition-all duration-300
                    flex-shrink-0
                  "
                >
                  <div className="flex flex-col items-center gap-3 py-1">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative w-12 h-12 flex items-center justify-center bg-black/50 rounded-xl border border-white/10"
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-white">{service.icon}</div>
                      <div className="absolute -inset-0.5 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 blur-sm"></div>
                    </motion.div>
                    <span className="text-sm font-medium tracking-wider">
                      {service.title}
                    </span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-0">
                <ServiceCard
                  service={service}
                  index={0}
                  isMobile={false}
                  serviceRefs={serviceRefs}
                />
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </section>
  );
}
