"use client";

import { useState } from "react";
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
    image: "/hero/6.jpg",
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
    image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da",
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
    image: "https://images.unsplash.com/photo-1717245232884-f03d8bce756d",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);
  const [hoveredStep, setHoveredStep] = useState<number | undefined>(undefined);
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

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
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
          className="mb-20"
          onValueChange={(value) => {
            const selected = services.find((s) => s.id === value);
            if (selected) setActiveService(selected);
          }}
        >
          <TabsList className="h-fit flex justify-around flex-wrap  bg-black border border-white/10 rounded-2xl p-1 mb-16 backdrop-blur-sm">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="rounded-xl w-36 py-3 px-4 data-[state=active]:bg-white data-[state=active]:text-black transition-all duration-300"
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
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="backdrop-blur-sm"
                >
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 relative">
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
                  className="relative aspect-[4/3] rounded-xl overflow-hidden group"
                >
                  {/* Animated border glow on hover */}
                  <motion.div className="absolute -inset-0.5 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur rounded-xl" />

                  <div className="relative rounded-xl overflow-hidden border border-white/10 z-10">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-full filter grayscale hover:grayscale-0 transition-all duration-700"
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

        {/* Futuristic Process section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="text-center mb-16 relative">
            <motion.div
              className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Cum are loc procesul de colaborare?
            </h3>
            <motion.div
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="relative pb-16">
            {/* Glowing process line with animation */}
            <motion.div
              className="absolute top-20 left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent hidden md:block"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            ></motion.div>

            {/* Responsive vertical line for mobile */}
            <motion.div
              className="absolute top-10 bottom-40 left-[10%] sm:left-[20%] md:left-1/2 w-0.5 bg-gradient-to-b from-transparent via-white/30 to-transparent sm:hidden"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            ></motion.div>

            {/* Second responsive vertical line for tablet */}
            <motion.div
              className="absolute top-10 bottom-40 right-[20%] w-0.5 bg-gradient-to-b from-transparent via-white/30 to-transparent hidden sm:block md:hidden"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            ></motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 gap-y-10 md:gap-8 md:gap-y-16">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number + step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(undefined)}
                  className="relative"
                  whileHover={{
                    z: 20,
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                >
                  {/* Animated glow effect on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredStep === index ? 0.2 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -inset-3 bg-white rounded-2xl blur-xl z-0"
                  ></motion.div>

                  {/* Card with glass morphism effect */}
                  <Card
                    className="relative backdrop-blur-md bg-black/40 border border-white/10 shadow-lg overflow-hidden h-full z-10 md:transform md:transition-transform md:hover:translate-z-10"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Gradient border effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0"
                      animate={{ opacity: hoveredStep === index ? 0.5 : 0 }}
                      transition={{ duration: 0.4 }}
                      style={{ height: "1px", top: 0 }}
                    ></motion.div>

                    <CardContent className="p-4 sm:p-6 md:p-8 text-center relative">
                      {/* Futuristic numbered icon */}
                      <div className="mb-4 sm:mb-6 relative">
                        <div className="absolute -inset-3 bg-white/5 rounded-full blur-sm"></div>
                        <motion.div
                          className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-black to-black/80 border border-white/20 rounded-full flex items-center justify-center relative"
                          whileHover={{ scale: 1.05 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <span className="text-2xl sm:text-3xl">
                            {step.icon}
                          </span>
                          <motion.div
                            className="absolute -inset-0.5 rounded-full opacity-0"
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: hoveredStep === index ? [0, 0.5, 0] : 0,
                            }}
                            transition={{
                              duration: 2,
                              repeat:
                                hoveredStep === index ? Infinity : undefined,
                              ease: "easeInOut",
                            }}
                            style={{
                              border: "1px solid rgba(255,255,255,0.3)",
                            }}
                          ></motion.div>
                        </motion.div>
                        <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 text-xs text-white/50 font-mono bg-black/50 px-2 rounded-md">
                          {step.number}
                        </div>
                      </div>

                      {/* Title with gradient effect */}
                      <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 relative inline-block">
                        {step.title}
                      </h4>

                      {/* Description with animated opacity */}
                      <motion.p
                        className="text-white/70 text-xs sm:text-sm leading-relaxed"
                        animate={{ opacity: hoveredStep === index ? 1 : 0.7 }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.description}
                      </motion.p>
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
