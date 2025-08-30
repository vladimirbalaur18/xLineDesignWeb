"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, X, MailIcon, Instagram, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { navItems } from "@shared/navitems";
import { Button } from "./ui/button";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const router = useRouter();
  const isAdmin = pathname.startsWith("/admin");

  // Social media URLs from environment variables
  const socialUrls = {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    pinterest: process.env.NEXT_PUBLIC_PINTEREST_URL,
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL,
    behance: process.env.NEXT_PUBLIC_BEHANCE_URL,
  };

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
      className={`fixed h-16 top-0 left-0 right-0 z-50 transition-all duration-300  bg-black/80 backdrop-blur-md py-2 border-b border-white/10`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="cursor-pointer"
          onClick={() => router.push("/#home")}
        >
          <Image src="/logo.png" alt="Logo" width={150} height={55} />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {isHome && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-8"
            >
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
            </motion.nav>
          )}
          <Button
            variant="outline"
            className="bg-white text-black hover:bg-white/90 hover:text-black border-none uppercase tracking-widest text-xs px-6"
            onClick={(e) =>
              isHome ? smoothScroll(e, "#contact") : router.push("/#contact")
            }
          >
            Contactează-ne
          </Button>
        </div>

        {/* Mobile Navigation */}
        {
          <div className="flex items-center space-x-4 lg:hidden">
            <Button
              variant="outline"
              size="sm"
              className="bg-white text-black hover:bg-white/90 hover:text-black border-none uppercase tracking-widest text-xs"
              onClick={(e) =>
                isHome ? smoothScroll(e, "contact") : router.push("/#contact")
              }
            >
              Contactează-ne
            </Button>
            {isHome && (
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
                  <div className="flex flex-col h-full">
                    <div className="flex flex-col space-y-6 pt-14 flex-1">
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

                    {/* Social Media Icons */}
                    <div className="border-t border-white/10 pt-6 pb-8">
                      <h4 className="text-sm uppercase font-light tracking-widest text-gray-400 mb-4">
                        Urmărește-ne
                      </h4>
                      <div className="flex gap-4">
                        {socialUrls.instagram && (
                          <motion.a
                            href={socialUrls.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 border border-white/20 rounded-full hover:border-white/40 hover:text-white transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Instagram className="h-5 w-5" />
                          </motion.a>
                        )}
                        {socialUrls.pinterest && (
                          <motion.a
                            href={socialUrls.pinterest}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 border border-white/20 rounded-full hover:border-white/40 hover:text-white transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                            </svg>
                          </motion.a>
                        )}
                        {socialUrls.facebook && (
                          <motion.a
                            href={socialUrls.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 border border-white/20 rounded-full hover:border-white/40 hover:text-white transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Facebook className="h-5 w-5" />
                          </motion.a>
                        )}
                        {socialUrls.behance && (
                          <motion.a
                            href={socialUrls.behance}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 border border-white/20 rounded-full hover:border-white/40 hover:text-white transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.561-5.92 5.466-5.92 3.082 0 4.964 1.982 5.375 4.426.078.506.109 1.188.095 2.14H13.96c.13 3.211 3.483 3.312 4.588 2.029h3.178zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h4.164c2.722 0 4.562 1.519 4.562 4.9 0 3.42-1.84 5.067-4.562 5.067zM2.575 7.605v6.603h1.4c1.504 0 2.269-.662 2.269-3.334 0-2.658-.765-3.269-2.269-3.269h-1.4z" />
                            </svg>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        }
      </div>
    </header>
  );
}
