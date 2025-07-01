"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Card, CardContent } from "./ui/card";
import {
  Award,
  Users,
  Globe,
  Home,
  Lightbulb,
  ChevronRight,
  Smile,
  Square,
} from "lucide-react";

const ACTIVE_FROM_YEAR = 2019;
const PROJECTS_COUNT = 250;
const COUNTRIES_COUNT = 3;
const SQUARE_METERS_COUNT = 10000;
export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const stats = [
    {
      value: `${
        new Date().getFullYear() - ACTIVE_FROM_YEAR
      }+ ani de activitate`,
      label: `Activăm din ${ACTIVE_FROM_YEAR}`,
      icon: <Award className="h-6 w-6 text-primary" />,
    },
    {
      value: `${PROJECTS_COUNT}+`,
      label: "Proiecte finalizate",
      icon: <Home className="h-6 w-6 text-primary" />,
    },
    {
      value: `${COUNTRIES_COUNT}`,
      label: "Țări de activitate",
      icon: <Globe className="h-6 w-6 text-primary" />,
    },
    {
      value: `${SQUARE_METERS_COUNT}+`,
      label: "Metri pătrați proiectați",
      icon: <Square className="h-6 w-6 text-primary" />,
    },
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

      <div className="w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center px-4">
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
                src="/hero/1.jpg"
                alt="Architectural sketch"
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[3/4]"
              />
              <div className="space-y-4">
                <img
                  src="/hero/2.jpg"
                  alt="Minimalist interior"
                  className="rounded-lg shadow-xl w-full h-auto object-cover aspect-square"
                />
                <img
                  src="/hero/3.jpg"
                  alt="Architectural blueprint"
                  className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]"
                />
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
              <span className="text-primary">Despre</span> XLINE Design
            </h2>

            <p className="text-gray-400">
              xLine Design a evoluat într-o firmă de design cu renume național,
              recunoscută pentru crearea de spații care inspiră, inovează și
              rezistă în timp. Echipa noastră multidisciplinară îmbină viziunea
              artistică cu expertiza tehnică pentru a oferi soluții
              arhitecturale de excepție.
            </p>

            <p className="text-gray-400">
              Credem că arhitectura deosebită nu ar trebui doar să captiveze
              vizual, ci și să îmbunătățească modul în care oamenii trăiesc,
              lucrează și interacționează. Proiectele noastre sunt ghidate de o
              înțelegere profundă a nevoilor clienților, a aspectelor de mediu
              și a contextului cultural.
            </p>

            <div className="flex items-center text-primary gap-2 group cursor-pointer">
              <span className="font-medium">Mai multe detalii...</span>
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
          className="mt-24 w-full"
        >
          <div className="flex flex-wrap justify-around gap-8 w-full">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all hover:transform hover:-translate-y-1 flex-1 max-w-[300px]"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </h3>
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
