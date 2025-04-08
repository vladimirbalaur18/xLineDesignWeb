"use client";

import { motion } from "motion/react";
import {
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Youtube,
  ArrowUp,
} from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { navItems } from "@shared/navitems";
import { i } from "vite/dist/node/types.d-aGj9QkWt";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="font-bold text-xl text-primary tracking-tighter mb-6">
              XLINE<span className="text-white">DESIGN</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Creăm designuri arhitecturale inovatoare care inspiră și
              transformă spațiile pentru un viitor mai bun. Îmbinăm
              creativitatea cu funcționalitatea pentru rezultate excepționale.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-900 p-2 rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-900 p-2 rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-900 p-2 rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-900 p-2 rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-900 p-2 rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Str. Habad Liubavici 12
                <br />
                mun. Chisinau, Republica Moldova
              </li>
              <li className="text-gray-400">
                <a href="tel:+37360131693" className="hover:text-primary">
                  0601 31 693
                </a>
              </li>
              <li className="text-gray-400">
                <a
                  href="mailto:xlinemd@gmail.com"
                  className="hover:text-primary"
                >
                  xlinemd@gmail.com
                </a>
              </li>
            </ul>

            <Button
              onClick={scrollToTop}
              className="mt-6 hover:bg-primary/90 transition-all"
            >
              Spre pagina principală <ArrowUp className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} xLine Design. Toate drepturile
            rezervate.
          </div>
        </div>
      </div>
    </footer>
  );
}
