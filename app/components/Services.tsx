"use client";

// TODO: header cards to be same size as stats from about sectioj, increase text size
import { useRef } from "react";
import { useIsMobile } from "../hooks/use-mobile";
import { motion } from "motion/react";
import { Home, Landmark, Presentation } from "lucide-react";

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
      "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/services/design.jpg",
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
      "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/services/architecture.jpg",
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
    image:
      "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/services/landscaping.jpg",
  },
];

export default function Services() {
  const serviceRefs = useRef<{ [key: string]: HTMLHeadingElement | null }>({});
  const isMobile = useIsMobile();

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

        {/* Services as cards - both mobile and desktop */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isMobile={isMobile}
              serviceRefs={serviceRefs}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
