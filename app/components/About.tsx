"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import StatsSection from "./StatsSection";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

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
      {/* ONLY 2 IMG */}
      {/* TODO: increase text size, add more text to the bottom */}

      <div className="w-full relative z-10">
        <div className="grid md:grid-cols-2  gap-8 items-center px-2">
          {/* Left column - Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-2">
              <Image
                src="https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/1.jpg"
                alt="Architectural sketch"
                width={1200}
                height={800}
                className="rounded-lg shadow-xl w-full h-full object-cover "
              />
              <div className="space-y-2">
                <Image
                  src="https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/2.jpg"
                  alt="Minimalist interior"
                  width={1200}
                  height={800}
                  className="rounded-lg shadow-xl w-full h-auto object-cover aspect-square"
                />
                <Image
                  src="https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/3.jpg"
                  alt="Architectural blueprint"
                  width={1200}
                  height={800}
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
            <div className="md:text-xl space-y-4 ">
              <p className="text-gray-400">
                XLine Design este un studio premiat de arhitectură și design
                interior din Chișinău, Moldova, care creează spații vizionare
                din 2019.
              </p>

              <p className="text-gray-400">
                Cu peste 250 de proiecte finalizate în 3 țări și mai mult de
                10.000 m² de spații proiectate, echipa noastră combină
                creativitatea, funcționalitatea și sustenabilitatea pentru a
                transforma locuințe, birouri și spații exterioare..
              </p>
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
          <StatsSection />
        </motion.div>
      </div>
    </section>
  );
}
