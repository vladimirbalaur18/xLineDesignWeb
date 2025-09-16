"use client";

import { useEffect, useRef } from "react";
import { User, Home, Globe, Square } from "lucide-react";

const ACTIVE_FROM_YEAR = 2019;

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      section.style.setProperty("--mouse-x", `${x}%`);
      section.style.setProperty("--mouse-y", `${y}%`);
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    {
      icon: User,
      number: `${new Date().getFullYear() - ACTIVE_FROM_YEAR}+`,
      label: "ani de activitate",
      subtitle: `Activăm din ${ACTIVE_FROM_YEAR}`,
      delay: "0s",
    },
    {
      icon: Home,
      number: "250+",
      label: "Proiecte finalizate",
      subtitle: "",
      delay: "0.2s",
    },
    {
      icon: Globe,
      number: "3",
      label: "Țări de activitate",
      subtitle: "",
      delay: "0.4s",
    },
    {
      icon: Square,
      number: "10000+",
      label: "Metri pătrați proiectați",
      subtitle: "",
      delay: "0.6s",
    },
  ];

  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        />
      </div>

      {/* Scanning Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
          style={{
            animation: "scanVertical 8s linear infinite",
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-white to-transparent opacity-20"
          style={{
            animation: "scanHorizontal 12s linear infinite",
            animationDelay: "3s",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: stat.delay }}
              >
                {/* Card Background with Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-500 group-hover:border-white/30 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]" />

                {/* Ambient Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl blur-xl" />
                </div>

                {/* Scanning Effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      animation: "scanCard 2s ease-in-out infinite",
                      animationDelay: `${index * 0.5}s`,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative p-8 text-center">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/10 rounded-full blur-md group-hover:bg-white/20 transition-all duration-500" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all duration-500 group-hover:scale-110">
                        <Icon
                          className="w-8 h-8 text-white transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                          style={{
                            animation: "iconFloat 3s ease-in-out infinite",
                            animationDelay: `${index * 0.3}s`,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Number */}
                  <div className="mb-3">
                    <span
                      className="text-5xl font-bold  group-hover:from-white group-hover:to-white transition-all duration-500"
                      style={{
                        textShadow: "0 0 20px rgba(255,255,255,0.3)",
                        animation: "numberPulse 4s ease-in-out infinite",
                        animationDelay: `${index * 0.4}s`,
                      }}
                    >
                      {stat.number}
                    </span>
                  </div>

                  {/* Label */}
                  <div className="text-gray-300 font-medium text-lg mb-2 group-hover:text-white transition-colors duration-500">
                    {stat.label}
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-white/20 group-hover:border-white/50 transition-colors duration-500" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-white/20 group-hover:border-white/50 transition-colors duration-500" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-white/20 group-hover:border-white/50 transition-colors duration-500" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-white/20 group-hover:border-white/50 transition-colors duration-500" />
                </div>

                {/* Data Stream Effect */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes scanVertical {
          0% {
            top: -2px;
          }
          100% {
            top: 100%;
          }
        }

        @keyframes scanHorizontal {
          0% {
            left: -2px;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes scanCard {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes iconFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes numberPulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
