"use client";

import React, { use } from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import Image from "next/image";
import { properties } from "@/lib/properties";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Bed,
  Bath,
  Grid,
  Play,
  Calendar,
  ArrowLeft,
  Heart,
  Share2,
  Camera,
  Eye,
  ChevronLeft,
  ChevronRight,
  Home,
  Building2,
  TreePine,
  Car,
  Wifi,
  Shield,
  Zap,
  X,
} from "lucide-react";
import PropertyStoryMode from "@/components/PropertyStoryMode";
import Footer from "@/components/Footer";

export default function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: propertyId } = use(params);
  const property = properties.find((p) => String(p.id) === String(propertyId));

  if (!property) return notFound();

  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isStoryModeOpen, setIsStoryModeOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  // Get property-specific sections
  const propertySections = property.sections
    .filter((section) => section.isVisible)
    .sort((a, b) => a.order - b.order);

  useEffect(() => {
    // Trigger loading animation after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-open story mode if URL contains story=true parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("story") === "true") {
      const timer = setTimeout(() => setIsStoryModeOpen(true), 1000); // Delay to allow page to load
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    setHeroImageLoaded(false);
  }, [currentImageIndex, property]);

  if (!property) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-black flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Property Not Found
          </h1>
          <Button onClick={() => router.push("/")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </motion.div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + property.images.length) % property.images.length
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-black"
    >
      {/* Hero Section with Large Image */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {/* Hero Image with Build Effect */}
          <motion.div
            key={property.images[currentImageIndex].url}
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
              src={property.images[currentImageIndex].url}
              alt={property.title}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              onLoad={() => setHeroImageLoaded(true)}
              priority
            />
          </motion.div>

          {/* Enhanced Multi-layer Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/20" />

          {/* Animated Grid Pattern Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        {/* Navigation Controls with Entry Animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-6 left-6 z-10"
        >
          <Button
            onClick={() => router.push("/")}
            variant="outline"
            size="sm"
            className="bg-black/50 border-white/20 hover:bg-black/70 text-white backdrop-blur-sm transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute top-6 right-6 z-10 flex gap-2"
        >
          <Button
            onClick={() => setIsStoryModeOpen(true)}
            variant="outline"
            size="sm"
            className="bg-black/50 border-white/20 hover:bg-black/70 text-white backdrop-blur-sm transition-all duration-300"
          >
            <Play className="w-4 h-4 mr-2" />
            Story Mode
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-black/50 border-white/20 hover:bg-black/70 text-white backdrop-blur-sm transition-all duration-300"
          >
            <Heart className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-black/50 border-white/20 hover:bg-black/70 text-white backdrop-blur-sm transition-all duration-300"
          >
            <Share2 className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* Image Navigation */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
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
              {property.title}
            </h1>
            <div className="flex items-center text-white/80 mb-4">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-lg">{property.address}</span>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-white">
              {property.price}
            </div>
          </motion.div>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-6 right-6 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentImageIndex + 1} / {property.images.length}
        </div>
      </section>

      {/* Content Section with Entry Animation */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="py-12 px-6 md:px-8 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Property Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="bg-gradient-to-br from-gray-900/30 via-black/95 to-gray-800/20 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {[
                        {
                          icon: Bed,
                          value: property.bedrooms,
                          label: "Bedrooms",
                        },
                        {
                          icon: Bath,
                          value: property.bathrooms,
                          label: "Bathrooms",
                        },
                        { icon: Grid, value: property.area, label: "Sq Ft" },
                        {
                          icon: Calendar,
                          value: property.yearBuilt,
                          label: "Year Built",
                        },
                      ].map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.7 + index * 0.1,
                          }}
                          className="text-center group"
                        >
                          <stat.icon className="w-8 h-8 text-white/60 mx-auto mb-2 group-hover:text-white transition-colors duration-300" />
                          <div className="text-2xl font-bold text-white">
                            {stat.value}
                          </div>
                          <div className="text-white/60 text-sm">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Card className="bg-gradient-to-br from-gray-800/25 via-black/90 to-gray-900/15 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      className="text-2xl font-bold text-white mb-4"
                    >
                      Description
                    </motion.h2>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      className="text-white/80 leading-relaxed whitespace-pre-line"
                    >
                      {property.fullDescription}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Card className="bg-gradient-to-br from-black/95 via-gray-900/30 to-black/98 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                      className="text-2xl font-bold text-white mb-4"
                    >
                      Features & Amenities
                    </motion.h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {property.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 1.3 + index * 0.05,
                          }}
                          className="flex items-center text-white/80 hover:text-white transition-colors duration-300"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: 1.3 + index * 0.05,
                            }}
                            className="w-2 h-2 bg-white/60 rounded-full mr-3"
                          />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Image Gallery */}
              <Card className="bg-gradient-to-br from-gray-900/20 via-black/85 to-gray-800/25 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">
                      Gallery
                    </h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsImageModalOpen(true)}
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View All
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {property.images.slice(0, 4).map((image, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                        onClick={() => {
                          setCurrentImageIndex(index);
                          setIsImageModalOpen(true);
                        }}
                      >
                        <Image
                          src={image.url}
                          alt={`${property.title} - Image ${index + 1}`}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                        {index === 3 && property.images.length > 4 && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="text-white font-semibold">
                              +{property.images.length - 4} more
                            </span>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Agent */}
              <Card className="bg-gradient-to-br from-black/95 via-gray-900/25 to-black/90 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Interested in this property?
                  </h3>
                  <div className="space-y-3">
                    <Button className="w-full bg-white text-black hover:bg-white/90">
                      Schedule a Tour
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-white/20 text-white hover:bg-white/10"
                    >
                      Request Information
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-white/20 text-white hover:bg-white/10"
                    >
                      Contact Agent
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Dynamic Lifestyle Sections from CMS */}
        <div className="space-y-16 mt-16">
          {propertySections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 + index * 0.8 }}
              className="relative"
            >
              <div className="text-center mb-12">
                <motion.h2
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.3 + index * 0.8 }}
                  className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wider"
                >
                  {section.title}
                </motion.h2>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ duration: 0.8, delay: 1.5 + index * 0.8 }}
                  className="h-0.5 bg-white mx-auto"
                />
              </div>

              {/* Section Images */}
              {section.images.length === 1 ? (
                <div className="w-full aspect-video mb-8 relative overflow-hidden">
                  {" "}
                  {/* aspect-video = 16:9 */}
                  <Image
                    src={section.images[0]}
                    alt={section.title}
                    fill
                    className="object-cover w-full h-full absolute inset-0"
                    sizes="100vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                </div>
              ) : section.images.length === 2 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {section.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-[4/3] overflow-hidden"
                    >
                      {" "}
                      {/* 4:3 aspect ratio */}
                      <Image
                        src={img}
                        alt={`${section.title} Image ${i + 1}`}
                        fill
                        className="object-cover w-full h-full absolute inset-0"
                        sizes="50vw"
                        priority={index === 0 && i === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                    </div>
                  ))}
                </div>
              ) : null}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.8 }}
                className="text-center mt-8"
              >
                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                  {section.content}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Enhanced Image Modal with Thumbnails and Descriptions */}
      {isImageModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex flex-col p-4 max-h-screen"
        >
          <div className="flex-1 flex items-center justify-center min-h-0 overflow-hidden">
            <div className="relative max-w-5xl w-full max-h-full flex flex-col">
              {/* Close Button */}
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="absolute top-2 right-0 text-white hover:text-white/70 z-10 p-2"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Main Image */}
              <div
                className="relative bg-black rounded-lg overflow-hidden mb-4 flex-shrink-0"
                style={{ maxHeight: "70vh" }}
              >
                <Image
                  src={property.images[currentImageIndex].url}
                  alt={`${property.title} - Image ${currentImageIndex + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-full object-contain"
                />

                {/* Navigation Arrows */}
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                  {currentImageIndex + 1} / {property.images.length}
                </div>
              </div>

              {/* Current Image Description */}
              <div className="text-center mb-4 flex-shrink-0">
                <p className="text-white/90 text-base leading-relaxed max-w-2xl mx-auto">
                  {property.images[currentImageIndex].description}
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnail Gallery at Bottom */}
          <div className="max-w-5xl mx-auto w-full flex-shrink-0">
            <div className="flex gap-2 overflow-x-auto pb-2 px-2 justify-center">
              <div className="flex gap-2 mx-auto">
                {property.images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex-shrink-0 aspect-video w-24 sm:w-28 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      currentImageIndex === index
                        ? "border-white shadow-lg"
                        : "border-white/30 hover:border-white/60"
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={`Thumbnail ${index + 1}`}
                      width={112}
                      height={63}
                      className="w-full h-full object-cover"
                    />
                    {currentImageIndex === index && (
                      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Property Story Mode */}
      <PropertyStoryMode
        property={property}
        isOpen={isStoryModeOpen}
        onClose={() => setIsStoryModeOpen(false)}
      />

      <Footer />
    </motion.div>
  );
}
