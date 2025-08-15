"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Leaf, Globe2, Users, Award } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      title: "Sustenabilitate",
      description: "Materiale ecologice și soluții eficiente energetic.",
      icon: <Leaf className="h-6 w-6 text-primary" />,
    },
    {
      title: "Experiență internațională",
      description: "Proiecte în Moldova, România, și în Europa.",
      icon: <Globe2 className="h-6 w-6 text-primary" />,
    },
    {
      title: "Proces centrat pe client",
      description: "Ascultăm, adaptăm și livrăm exact ce îți imaginezi.",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
      title: "Creativitate premiată",
      description: "Susținută de precizie tehnică.",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-black relative overflow-hidden">
      {/* Subtle accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40 pointer-events-none"></div>
      <motion.div
        className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-white/5 rounded-full blur-[140px]"
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [0.9, 1.05, 0.9] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 w-[520px] h-[520px] bg-white/5 rounded-full blur-[160px]"
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
        transition={{
          duration: 14,
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
          <div className="inline-block relative">
            <motion.div
              className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text bg-gradient-to-b from-white to-white/70">
              De ce să alegi XLine Design?
            </h2>
          </div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Valori care transformă proiectele în experiențe memorabile.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-hidden bg-black/60 border-white/10 hover:border-white/30 transition-all duration-300 h-full">
                {/* subtle gradient outline on hover */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05))",
                  }}
                />
                <CardContent className="relative p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative shrink-0">
                      <div className="absolute -inset-2 rounded-2xl bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative rounded-xl bg-black/60 border border-white/15 p-3">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <Link href="#projects">
              <Button className="h-11 px-6 bg-white text-black hover:bg-white/90">
                Vezi proiectele
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                variant="outline"
                className="h-11 px-6 border-white/40 text-white hover:bg-white/10"
              >
                Programează o consultanță
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
