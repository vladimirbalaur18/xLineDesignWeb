import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PropertyHeroImageProps {
  images: { url: string }[];
  currentImageIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onImageLoad: () => void;
  heroImageLoaded: boolean;
  title: string;
  address: string;
  price: string;
  /**
   * Optional: Render navigation controls (Back, Story, Like, Share) in the top corners.
   * Typically, pass a React node with your controls/buttons.
   */
  controls?: React.ReactNode;
}

export const PropertyHeroImage: React.FC<PropertyHeroImageProps> = ({
  images,
  currentImageIndex,
  onPrev,
  onNext,
  onImageLoad,
  heroImageLoaded,
  title,
  address,
  price,
  controls,
}) => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        {/* Hero Image with Build Effect */}
        <motion.div
          key={images[currentImageIndex].url}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{
            scale: heroImageLoaded ? 1 : 1.2,
            opacity: heroImageLoaded ? 1 : 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="w-full h-full"
        >
          <Image
            src={images[currentImageIndex].url}
            alt={title}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            onLoad={onImageLoad}
            priority
          />
        </motion.div>

        {/* Enhanced Multi-layer Gradient Overlay */}
      </div>

      {/* Controls (Back, Story, Like, Share) */}
      <div className="relative top-16">{controls}</div>

      {/* Image Navigation */}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Property Info Overlay with Gradient Container */}
      <div className="absolute bottom-0 left-0 right-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-t from-black/60 via-black/40 to-transparent  p-12  backdrop-blur-sm  border-white/10"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <div className="flex items-center text-white/80 mb-4">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-lg">{address}</span>
          </div>
          <div className="text-4xl md:text-5xl font-bold text-white">
            {price}
          </div>
        </motion.div>
      </div>

      {/* Image Counter */}
      <div className="absolute bottom-6 right-6 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {currentImageIndex + 1} / {images.length}
      </div>
    </section>
  );
};
