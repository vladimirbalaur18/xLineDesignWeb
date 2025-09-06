"use client";

import { motion } from "motion/react";
import { Instagram, Facebook, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { navItems } from "@/shared/navitems";
import { i } from "vite/dist/node/types.d-aGj9QkWt";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Social media URLs from environment variables
  const socialUrls = {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    pinterest: process.env.NEXT_PUBLIC_PINTEREST_URL,
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL,
    behance: process.env.NEXT_PUBLIC_BEHANCE_URL,
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
              {socialUrls.instagram && (
                <a
                  href={socialUrls.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 p-2 rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}

              {socialUrls.pinterest && (
                <a
                  href={socialUrls.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 p-2 rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                  </svg>
                </a>
              )}
              {socialUrls.facebook && (
                <a
                  href={socialUrls.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 p-2 rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {socialUrls.behance && (
                <a
                  href={socialUrls.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 p-2 rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.561-5.92 5.466-5.92 3.082 0 4.964 1.982 5.375 4.426.078.506.109 1.188.095 2.14H13.96c.13 3.211 3.483 3.312 4.588 2.029h3.178zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h4.164c2.722 0 4.562 1.519 4.562 4.9 0 3.42-1.84 5.067-4.562 5.067zM2.575 7.605v6.603h1.4c1.504 0 2.269-.662 2.269-3.334 0-2.658-.765-3.269-2.269-3.269h-1.4z" />
                  </svg>
                </a>
              )}
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
                    href={`/${item.href}`}
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
                {process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINE1}
                <br />
                {process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINE2}
              </li>
              <li className="text-gray-400">
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_BUSINESS_PHONE}`}
                  className="hover:text-primary"
                >
                  {process.env.NEXT_PUBLIC_BUSINESS_PHONE}
                </a>
              </li>
              <li className="text-gray-400">
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_BUSINESS_EMAIL}`}
                  className="hover:text-primary"
                >
                  {process.env.NEXT_PUBLIC_BUSINESS_EMAIL}
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
