"use client";

// TODO: header cards to be same size as stats from about sectioj, increase text size
import { useState, useRef, useEffect } from "react";
import { useIsMobile } from "../hooks/use-mobile";
import { motion } from "motion/react";
import {
  Pencil,
  Building,
  Home,
  Landmark,
  Presentation,
  RefreshCw,
  ArrowRight,
  CheckCircle,
  BrainCircuit,
  Settings,
  IterationCcw,
  Globe,
  Rocket,
  Cpu,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";

const services = [
  {
    id: "interior-design",
    title: "Design interior",
    icon: (
      <Home className="h-5 w-5 text-white group-data-[state=active]:text-black" />
    ),
    description:
      "Creăm locuințe deosebite care reflectă personalitatea și stilul de viață al proprietarilor, optimizând în același timp funcționalitatea și confortul.",
    features: [
      "Proiectare case personalizate",
      "Locuințe multifamiliale",
      "Locuințe sustenabile",
      "Vile de lux",
      "Renovări rezidențiale",
    ],
    image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da",
  },

  {
    id: "architecture",
    title: "Arhitectură",
    icon: (
      <Landmark className="h-5 w-5 text-white group-data-[state=active]:text-black" />
    ),
    description:
      "Creăm spații funcționale și inspiraționale pentru educație, sănătate și instituții culturale care deservesc comunitățile.",
    features: [
      "Instituții de învățământ",
      "Clădiri medicale",
      "Centre culturale",
      "Clădiri guvernamentale",
      "Facilități științifice și de cercetare",
    ],
    image: "/hero/6.jpg",
  },
  {
    id: "landschaft-design",
    title: "Design peisagistic",
    icon: (
      <Presentation className="h-5 w-5 text-white group-data-[state=active]:text-black" />
    ),
    description:
      "Servicii complete de master planning și design urban care creează comunități coerente, sustenabile și vibrante.",
    features: [
      "Design urban",
      "Master planning",
      "Planificare comunitară",
      "Planificare campusuri",
      "Arhitectură peisagistică",
    ],
    image: "/hero/5.jpg",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);
  const [hoveredStep, setHoveredStep] = useState<number | undefined>(undefined);
  const serviceRefs = useRef<{ [key: string]: HTMLHeadingElement | null }>({});
  const isMobile = useIsMobile();
  const tabsListRef = useRef<HTMLDivElement | null>(null);
  const processSteps = [
    {
      number: "01",
      icon: <Cpu className="h-6 w-6" />,
      title: "Analiza datelor",
      description:
        "Analiză algoritmică avansată a nevoilor tale, a condițiilor terenului și a parametrilor de mediu.",
    },
    {
      number: "02",
      icon: <BrainCircuit className="h-6 w-6" />,
      title: "Conceptualizare AI",
      description:
        "Generarea mai multor variante de design folosind instrumente avansate de proiectare computațională.",
    },
    {
      number: "03",
      icon: <IterationCcw className="h-6 w-6" />,
      title: "Rafinare parametrică",
      description:
        "Optimizare iterativă în timp real prin sisteme sofisticate de modelare parametrică.",
    },
    {
      number: "04",
      icon: <Globe className="h-6 w-6" />,
      title: "Prototipare virtuală",
      description:
        "Experiențe VR imersive ale spațiului tău cu ajutorul tehnologiei de gemeni digitali, înainte de construcție.",
    },
    {
      number: "05",
      icon: <Rocket className="h-6 w-6" />,
      title: "Construcție inteligentă",
      description:
        "Construcție de precizie cu fabricație robotică și sisteme inteligente de materiale.",
    },
  ];

  useEffect(() => {
    if (!isMobile) return;
    const ref = serviceRefs.current[activeService.id];
    if (ref) {
      const offset = 80; // Adjust this value if your sticky header is a different height
      const top = ref.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [activeService, isMobile]);

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
        {/* Futuristic Services tabs */}
        <Tabs
          defaultValue={activeService?.id}
          onValueChange={(value) => {
            const selected = services.find((s) => s.id === value);
            if (selected) setActiveService(selected);
            if (!isMobile && tabsListRef.current) {
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
              <div className="grid md:grid-cols-2 gap-10 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="backdrop-blur-sm"
                >
                  <h3
                    ref={(el) => {
                      serviceRefs.current[service.id] = el;
                    }}
                    className="text-2xl font-bold mb-4 flex items-center gap-3 relative"
                  >
                    <motion.div
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      {service.icon}
                    </motion.div>
                    <span className="uppercase tracking-wide">
                      {service.title}
                    </span>
                    <motion.div
                      className="absolute -bottom-2 left-0 h-[1px] w-1/3 bg-gradient-to-r from-white to-transparent"
                      initial={{ width: 0 }}
                      animate={{ width: "33%" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </h3>

                  <p className="text-white/70 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center gap-3 text-white/80 group"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-all">
                          <CheckCircle className="h-3.5 w-3.5 text-white/70 group-hover:text-white transition-colors" />
                        </div>
                        <span className="group-hover:text-white transition-colors">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="relative overflow-hidden group bg-black hover:bg-white text-white hover:text-black border border-white/40 hover:border-white transition-all duration-300 py-6 px-8 rounded-lg">
                      <span className="relative z-10 font-medium tracking-wider">
                        Explorează proiectele {service.title}
                      </span>
                      <motion.span className="absolute right-4 group-hover:translate-x-1 transition-transform duration-300">
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.span>

                      <motion.div
                        className="absolute inset-0 bg-white z-0"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative h-[90%] aspect-[4/3] rounded-xl overflow-hidden group"
                >
                  <div className="relative rounded-xl overflow-hidden border border-white/10 z-10 ">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={1200}
                      height={800}
                      className="object-cover w-full h-full filter transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="h-[1px] w-24 bg-gradient-to-r from-white/70 to-transparent mb-4 transform-gpu scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      <p className="text-white/90 font-light">
                        Proiectele noastre de {service.title.toLowerCase()}{" "}
                        îmbină tehnologia de ultimă generație, estetica și
                        soluțiile sustenabile.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
