"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "./ui/dialog";
import Image from "next/image";

// Gallery data
const galleryImages = [
  {
    id: 1,
    title: "Azure Sky Tower - Exterior",
    category: "interiorDesign",
    description:
      "The landmark façade featuring sustainable materials and energy-efficient design.",
    image:
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=1200&h=800",
  },
  {
    id: 2,
    title: "Oceanfront Residence - Living Space",
    category: "interiorDesign",
    description:
      "Open-concept living area with panoramic views of the Pacific Ocean.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800",
  },
  {
    id: 3,
    title: "The Vertex - Central Atrium",
    category: "interiorDesign",
    description:
      "Multi-story atrium with natural light and collaborative work areas.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800",
  },
  {
    id: 4,
    title: "Echo Library - Reading Hall",
    category: "interiorDesign",
    description:
      "The main reading hall with its distinctive curved ceiling and acoustic design.",
    image:
      "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1200&h=800",
  },
  {
    id: 5,
    title: "Harmony Pavilion - Event Space",
    category: "interiorDesign",
    description:
      "Configurable event space with advanced lighting and sound systems.",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=800",
  },
  {
    id: 6,
    title: "The Prism House - Interior",
    category: "interiorDesign",
    description:
      "Living room with geometric light patterns created by the prismatic exterior.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800",
  },
];

export default function ProjectGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const categoryMapName: Record<string, string> = {
    interiorDesign: "Design Interior",
    architecture: "Arhitectură",
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-background/90 -z-10"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] -z-10"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center relative"
        >
          {/* Section heading with modern styling */}
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight uppercase relative">
              <motion.span
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                GALERIA LUCRĂRILOR
              </motion.span>

              {/* Underline */}
              <motion.span
                className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-white via-white/80 to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              />

              {/* Vertical accents */}
              <div className="absolute -left-4 top-0 h-full w-[1px] bg-white/30"></div>
              <div className="absolute -right-4 top-0 h-full w-[1px] bg-white/30"></div>
            </h2>
          </div>

          <motion.p
            className="text-gray-300 max-w-2xl mx-auto font-light tracking-wide backdrop-blur-sm py-2 px-4 border-l border-r border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Descoperă proiectele noastre arhitecturale prin această galerie
            selectată. Fă clic pe orice imagine pentru a o explora în detaliu.”
          </motion.p>
        </motion.div>

        {/* Main Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {galleryImages.map((image) => (
            <Dialog
              key={image.id}
              open={openDialog && selectedImage === image.id}
              onOpenChange={(open) => {
                setOpenDialog(open);
                if (!open) setSelectedImage(null);
              }}
            >
              <DialogTrigger asChild>
                <motion.div
                  className="relative group cursor-pointer overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    setSelectedImage(image.id);
                    setOpenDialog(true);
                  }}
                >
                  {/* Aspect ratio container */}
                  <div className="aspect-[4/3] relative">
                    {/* Image */}
                    <Image
                      src={`${image.image}`}
                      alt={image.title}
                      fill
                      sizes="100vw"
                      className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 grayscale-[20%]"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300">
                      {/* Grid pattern overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-white/20 group-hover:border-white/50 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-white/20 group-hover:border-white/50 transition-colors duration-300"></div>

                    {/* Text content */}
                    <div className="absolute bottom-0 left-0 p-4 z-10">
                      <span className="text-white/70 text-xs uppercase tracking-widest">
                        {categoryMapName[image.category]}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-white mt-1">
                        {image.title}
                      </h3>

                      {/* Animated line */}
                      <motion.div
                        className="h-[1px] bg-gradient-to-r from-white/50 to-transparent mt-2 w-0 group-hover:w-full transition-all duration-300"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>

                    {/* Expand icon */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 3H21M21 3V9M21 3L14 10M9 21H3M3 21V15M3 21L10 14"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>

              <DialogContent className="sm:max-w-5xl bg-black/95 border-white/10 p-0">
                <DialogTitle className="sr-only">{image.title}</DialogTitle>
                <DialogDescription className="sr-only">
                  {image.description}
                </DialogDescription>

                {/* Full Screen Modal View */}
                <div className="relative">
                  {/* Close button */}
                  <button
                    className="absolute top-4 right-4 z-50 bg-black/70 backdrop-blur-sm p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                    onClick={() => setOpenDialog(false)}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6L6 18M6 6L18 18"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={`${image.image}`}
                      alt={image.title}
                      width={1200}
                      height={800}
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                  </div>

                  {/* Caption */}
                  <div className="p-6 bg-black/90 backdrop-blur-md">
                    <h3 className="text-xl font-bold text-white">
                      {image.title}
                    </h3>
                    <p className="text-white/70 mt-2">{image.description}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold bg-clip-text  bg-gradient-to-r from-white to-white/80 inline-block">
              Proiecte în prim-plan
            </h3>
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mt-3"></div>
          </div>

          <Carousel className="w-full max-w-6xl mx-auto relative">
            <CarouselContent>
              {galleryImages.map((image) => (
                <CarouselItem
                  key={image.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Dialog
                    onOpenChange={(open) => {
                      setOpenDialog(open);
                      if (!open) setSelectedImage(null);
                    }}
                  >
                    <DialogTrigger asChild>
                      <motion.div
                        className="relative h-80 cursor-pointer group overflow-hidden rounded-sm border border-white/10"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => {
                          setSelectedImage(image.id);
                          setOpenDialog(true);
                        }}
                      >
                        <Image
                          src={`${image.image}`}
                          alt={image.title}
                          width={1200}
                          height={800}
                          className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

                        {/* Text content */}
                        <div className="absolute bottom-0 left-0 p-4 z-10">
                          <h4 className="text-base font-bold text-white truncate">
                            {image.title}
                          </h4>
                          <div className="h-[1px] bg-white/40 w-0 group-hover:w-full transition-all duration-300 mt-2"></div>
                        </div>
                      </motion.div>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-5xl bg-black/95 border-white/10 p-0">
                      <DialogTitle className="sr-only">
                        {image.title}
                      </DialogTitle>
                      <DialogDescription className="sr-only">
                        {image.description}
                      </DialogDescription>

                      <div className="relative">
                        {/* Close button */}
                        <button
                          className="absolute top-4 right-4 z-50 bg-black/70 backdrop-blur-sm p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                          onClick={() => setOpenDialog(false)}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18 6L6 18M6 6L18 18"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>

                        {/* Image */}
                        <div className="relative overflow-hidden">
                          <Image
                            src={`${image.image}`}
                            alt={image.title}
                            width={1200}
                            height={800}
                            className="w-full h-auto max-h-[80vh] object-contain"
                          />
                        </div>

                        {/* Caption */}
                        <div className="p-6 bg-black/90 backdrop-blur-md">
                          <h3 className="text-xl font-bold text-white">
                            {image.title}
                          </h3>
                          <p className="text-white/70 mt-2">
                            {image.description}
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 space-x-4">
              <CarouselPrevious className="relative bg-black/50 hover:bg-white/10 border border-white/20 rounded-none static" />
              <CarouselNext className="relative bg-black/50 hover:bg-white/10 border border-white/20 rounded-none static" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
