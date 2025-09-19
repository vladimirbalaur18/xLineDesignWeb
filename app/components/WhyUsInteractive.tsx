"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Calculator,
  Clock,
  Users,
  Palette,
  ArrowRight,
  Zap,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import { useVisibleViewportItems } from "@/hooks/use-visible-viewport-items";

export default function WhyUsInteractive() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const visibleItemsIndexArr = useVisibleViewportItems(cardRefs, {
    threshold: 0.5,
  });
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      icon: Calculator,
      title: "Gestionare eficientă a bugetului",
      description:
        "Îți oferim soluții adaptate bugetului tău, fără costuri ascunse și cu prețuri transparente.",
    },
    {
      icon: Clock,
      title: "Termene respectate",
      description:
        "Plan clar de lucru și livrare la timp, ca să te bucuri de casa ta fără întârzieri.",
    },
    {
      icon: Users,
      title: "Furnizori și echipe de execuție verificate",
      description:
        "Colaborăm cu mesteri și producători de încredere din Moldova și România, pentru calitate garantată.",
    },
    {
      icon: Palette,
      title: "Design practic și modern",
      description:
        "Amenajări care arată spectaculos, dar sunt și funcționale, ușor de întreținut și adaptate vieții de zi cu zi.",
    },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0">
        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />

        {/* Dynamic mouse-following glow */}
        <div
          className="absolute w-96 h-96 rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
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
              De ce să alegi XLine?
            </h2>
          </div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Valori care transformă proiectele în experiențe memorabile.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHoveredOrInMobileView =
              hoveredCard === index ||
              (visibleItemsIndexArr.includes(index) && isMobile);

            return (
              <Card
                ref={(el: HTMLDivElement | null) => {
                  if (el) cardRefs.current[index] = el;
                }}
                key={index}
                className="group relative p-8 border-0 bg-gray-950/50 backdrop-blur-xl hover:bg-gray-800/60 transition-all duration-700 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: isHoveredOrInMobileView
                    ? "translateY(-8px) scale(1.02)"
                    : "translateY(0) scale(1)",
                  boxShadow: isHoveredOrInMobileView
                    ? "0 20px 40px rgba(255, 255, 255, 0.2)"
                    : "none",
                }}
              >
                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg">
                  <div
                    className={`absolute inset-0 rounded-lg border-2 transition-all duration-700 ${
                      isHoveredOrInMobileView
                        ? "border-white"
                        : "border-gray-700/50"
                    }`}
                  />
                  {isHoveredOrInMobileView && (
                    <div
                      className="absolute inset-0 rounded-lg animate-pulse"
                      style={{
                        background:
                          "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                        animation: "border-glow 2s ease-in-out infinite",
                      }}
                    />
                  )}
                </div>

                {/* Holographic effect */}
                {isHoveredOrInMobileView && (
                  <div
                    className="absolute inset-0 rounded-lg opacity-30"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%, rgba(255, 255, 255, 0.2) 100%)",
                      animation: "hologram 3s ease-in-out infinite",
                    }}
                  />
                )}

                <div className="relative z-10">
                  {/* Futuristic icon container */}
                  <div className="relative w-20 h-20 mb-6">
                    <div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 p-5 transition-all duration-500"
                      style={{
                        transform: isHoveredOrInMobileView
                          ? "rotate(10deg) scale(1.1)"
                          : "rotate(0deg) scale(1)",
                        boxShadow: isHoveredOrInMobileView
                          ? "0 10px 30px rgba(255, 255, 255, 0.3)"
                          : "none",
                      }}
                    >
                      <Icon className="w-full h-full text-white" />
                    </div>
                    {/* Icon glow ring */}
                    {isHoveredOrInMobileView && (
                      <div
                        className="absolute inset-0 rounded-2xl border-2 border-white animate-ping"
                        style={{ animationDuration: "2s" }}
                      />
                    )}
                  </div>

                  {/* Text content with futuristic styling */}
                  <h3
                    className={`text-2xl font-bold mb-4 transition-all duration-500 ${
                      isHoveredOrInMobileView ? "text-white" : "text-gray-200"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-pretty group-hover:text-gray-200 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>

                {/* Scanning line effect */}
                {isHoveredOrInMobileView && (
                  <div
                    className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
                    style={{
                      animation: "scan 2s ease-in-out infinite",
                      top: "0%",
                    }}
                  />
                )}
              </Card>
            );
          })}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes border-glow {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes hologram {
          0%,
          100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }

        @keyframes scan {
          0% {
            top: 0%;
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
