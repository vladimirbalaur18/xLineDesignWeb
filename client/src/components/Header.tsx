import { useState, useEffect } from "react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Find active section based on scroll position
      const sections = navItems.map(item => item.name.toLowerCase());
      
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
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled 
          ? "bg-background/80 py-2 shadow-lg" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-xl text-primary tracking-tighter"
        >
          NEXUS<span className="text-white">ARCHITECTS</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => smoothScroll(e, item.href)}
              className={`text-sm transition-all hover:text-primary relative tracking-wide ${
                activeSection === item.name.toLowerCase() 
                  ? "text-primary" 
                  : "text-gray-300"
              }`}
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {item.name}
              {activeSection === item.name.toLowerCase() && (
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                  layoutId="navIndicator"
                />
              )}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <button className="p-2" aria-label="Menu">
              <Menu className="h-6 w-6 text-gray-200" />
            </button>
          </SheetTrigger>
          <SheetContent className="bg-background/95 backdrop-blur-lg border-gray-800">
            <div className="flex flex-col space-y-6 pt-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    smoothScroll(e, item.href);
                    document.querySelector('[data-state="open"]')?.dispatchEvent(
                      new Event("close", { bubbles: true })
                    );
                  }}
                  className={`text-xl transition-colors hover:text-primary py-2 ${
                    activeSection === item.name.toLowerCase() 
                      ? "text-primary" 
                      : "text-gray-300"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
