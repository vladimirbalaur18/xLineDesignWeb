'use client';

import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Facebook, Youtube, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
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
              NEXUS<span className="text-white">ARCHITECTS</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Creating innovative architectural designs that inspire and transform spaces for a better future.
              We blend creativity with functionality for exceptional results.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="bg-gray-900 p-2 rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-900 p-2 rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-900 p-2 rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-900 p-2 rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-900 p-2 rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
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
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-primary transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a>
              </li>
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
                123 Architecture Boulevard
                <br />New York, NY 10001
              </li>
              <li className="text-gray-400">
                <a href="tel:2125558900" className="hover:text-primary">(212) 555-8900</a>
              </li>
              <li className="text-gray-400">
                <a href="mailto:info@nexusarchitects.com" className="hover:text-primary">info@nexusarchitects.com</a>
              </li>
            </ul>
            
            <Button
              onClick={scrollToTop}
              className="mt-6 bg-gray-900 hover:bg-primary/90 transition-all"
            >
              Back to Top <ArrowUp className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
        
        <Separator className="my-8 bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Nexus Architects. All rights reserved.
          </div>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
