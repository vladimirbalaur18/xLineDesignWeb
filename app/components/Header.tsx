"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, X, MailIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { navItems } from "@shared/navitems";
import { Button } from "./ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [sheetOpen, setSheetOpen] = useState(false);

  // Track scroll position to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find active section based on scroll position
      const sections = navItems.map((item) => item.key.toLowerCase());

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll functionality
  const smoothScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md py-2 border-b border-white/10"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-2xl tracking-tight"
        >
          <span className="text-white uppercase tracking-widest">x</span>
          <span className="text-white/70 uppercase tracking-widest">Line</span>
          <span className="text-white text-xs ml-1 border-l border-white/30 pl-1">
            DESIGN
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                onClick={(e) => smoothScroll(e, item.href)}
                className={`text-xs uppercase font-light tracking-widest transition-all relative py-2 px-1 ${
                  activeSection === item.key.toLowerCase()
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="relative z-10 overflow-hidden inline-block">
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/50"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </span>
                {activeSection === item.key.toLowerCase() && (
                  <motion.span
                    className="absolute top-0 right-0 w-[1px] h-full bg-white"
                    layoutId="navIndicator"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>
          <Button
            variant="outline"
            className="bg-white text-black hover:bg-white/90 hover:text-black border-none uppercase tracking-widest text-xs px-6"
            onClick={(e) => smoothScroll(e, "#contact")}
          >
            Contactează-ne
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-4 md:hidden">
          <Button
            variant="outline"
            size="sm"
            className="bg-white text-black hover:bg-white/90 hover:text-black border-none uppercase tracking-widest text-xs"
            onClick={(e) => smoothScroll(e, "#contact")}
          >
            Contactează-ne
          </Button>
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <motion.button
                className="p-2 border border-white/20 backdrop-blur-sm"
                aria-label="Menu"
                whileHover={{ borderColor: "rgba(255,255,255,0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Menu className="h-5 w-5 text-white" />
              </motion.button>
            </SheetTrigger>
            <SheetContent className="bg-black/95 backdrop-blur-lg border-white/10">
              <div className="flex flex-col space-y-6 pt-14">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={(e) => {
                      smoothScroll(e, item.href);
                      setSheetOpen(false);
                    }}
                    className={`text-lg uppercase font-light tracking-widest transition-all py-3 border-b border-white/10 ${
                      activeSection === item.key.toLowerCase()
                        ? "text-white"
                        : "text-gray-400"
                    }`}
                  >
                    {activeSection === item.key.toLowerCase() && (
                      <span className="inline-block w-2 h-2 bg-white mr-2"></span>
                    )}
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
