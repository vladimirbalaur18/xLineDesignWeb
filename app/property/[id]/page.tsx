"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";

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
import { getVisiblePropertySections } from "@/lib/sectionsData";

// Property data (in a real app, this would come from an API)
const properties = [
  {
    id: 1,
    title: "Modern Minimalist Villa",
    address: "1234 Skyline Drive, Los Angeles, CA",
    price: "$4,850,000",
    bedrooms: 5,
    bathrooms: 6,
    area: "4,320",
    yearBuilt: 2022,
    description:
      "An architectural masterpiece with panoramic ocean views, featuring open concept living spaces, a chef's kitchen, and a stunning infinity pool. This contemporary villa seamlessly blends indoor and outdoor living with floor-to-ceiling windows that frame spectacular sunset views. The home features sustainable materials throughout, including reclaimed teak flooring and locally sourced stone accents.",
    fullDescription:
      "This exceptional modern villa represents the pinnacle of contemporary architectural design, set on a prime 1.2-acre lot with unobstructed ocean views. The home's clean lines and geometric form create a striking silhouette against the dramatic coastal landscape.\n\nThe interior features soaring 12-foot ceilings and an open-concept layout that maximizes natural light and ocean views. The gourmet kitchen boasts custom Italian cabinetry, Calacatta marble countertops, and professional-grade appliances including a 60-inch dual-fuel range and built-in espresso station.\n\nThe master suite occupies the entire upper level, featuring a private terrace, walk-in closet with custom built-ins, and a spa-like bathroom with a freestanding soaking tub and rain shower. Four additional bedroom suites provide comfortable accommodations for family and guests.\n\nOutdoor amenities include an infinity pool with integrated spa, outdoor kitchen and dining area, fire pit lounge, and multiple terraces for entertaining. The property also features a three-car garage, wine cellar, home theater, and smart home automation throughout.",
    features: [
      "Ocean Views",
      "Infinity Pool",
      "Wine Cellar",
      "Home Theater",
      "Smart Home",
      "3-Car Garage",
      "Chef's Kitchen",
      "Spa Bathroom",
    ],
    tags: ["Featured", "New Construction"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800",
        description:
          "Stunning exterior view showcasing the villa's modern architectural lines and natural landscape integration",
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800",
        description:
          "Open-concept living area with floor-to-ceiling windows and panoramic ocean views",
      },
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800",
        description:
          "Gourmet kitchen featuring custom Italian cabinetry and Calacatta marble countertops",
      },
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800",
        description:
          "Master bedroom suite with private terrace access and premium furnishings",
      },
      {
        url: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&h=800",
        description:
          "Infinity pool area with integrated spa and outdoor entertaining spaces",
      },
      {
        url: "https://images.unsplash.com/photo-1560448075-bb485b067938?w=1200&h=800",
        description:
          "Spa-like master bathroom with freestanding soaking tub and rain shower",
      },
    ],
  },
  {
    id: 2,
    title: "Sleek Downtown Penthouse",
    address: "500 Urban Heights, New York, NY",
    price: "$3,200,000",
    bedrooms: 3,
    bathrooms: 3.5,
    area: "2,850",
    yearBuilt: 2020,
    description:
      "Ultra-modern penthouse with floor-to-ceiling windows offering spectacular city views, smart home technology, and private rooftop terrace.",
    fullDescription:
      "This stunning penthouse represents the epitome of urban luxury living, occupying the top two floors of an exclusive Manhattan high-rise. The residence features 12-foot floor-to-ceiling windows that showcase breathtaking 360-degree views of the city skyline.\n\nThe main level houses an expansive living area with custom millwork and a gourmet kitchen featuring Boffi cabinetry, Calacatta gold marble countertops, and top-of-the-line Miele appliances. The master suite includes a private sitting area, custom walk-in closet, and marble bathroom with radiant heated floors.\n\nThe upper level features a private rooftop terrace with outdoor kitchen, dining area, and panoramic city views. Additional amenities include a home office, wine storage, and integrated smart home technology throughout.\n\nBuilding amenities include 24-hour concierge, fitness center, residents' lounge, and rooftop garden. The location offers easy access to the city's finest dining, shopping, and cultural attractions.",
    features: [
      "City Views",
      "Rooftop Terrace",
      "Smart Home",
      "Concierge",
      "Fitness Center",
      "Wine Storage",
      "Home Office",
      "Prime Location",
    ],
    tags: ["Penthouse", "Smart Home"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800",
        description:
          "Sleek penthouse exterior with modern glass facade and city skyline backdrop",
      },
      {
        url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800",
        description:
          "Contemporary living space with floor-to-ceiling windows and urban views",
      },
      {
        url: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=1200&h=800",
        description:
          "Ultra-modern kitchen with premium appliances and minimalist design",
      },
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800",
        description:
          "Master suite with city views and sophisticated interior design",
      },
      {
        url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800",
        description:
          "Private rooftop terrace with outdoor seating and panoramic city views",
      },
      {
        url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=800",
        description:
          "Luxurious bathroom with smart home features and premium finishes",
      },
    ],
  },
  {
    id: 3,
    title: "Geometric Glass Mansion",
    address: "789 Lakefront Road, Austin, TX",
    price: "$5,975,000",
    bedrooms: 6,
    bathrooms: 7,
    area: "6,200",
    yearBuilt: 2021,
    description:
      "Innovative geometric design with glass walls that connect indoor-outdoor living spaces, featuring a home theater, wine cellar, and meditation garden.",
    fullDescription:
      "This architectural marvel showcases cutting-edge design with its dramatic geometric form and extensive use of structural glass. Set on 2.5 acres of pristine lakefront property, the home creates a seamless connection between interior and exterior spaces.\n\nThe residence features soaring 20-foot ceilings in the main living areas, with custom steel and glass construction that maximizes natural light and lake views. The kitchen features European cabinetry, quartzite countertops, and professional-grade appliances.\n\nThe master wing includes a private study, walk-in closet with island, and spa bathroom with soaking tub overlooking the lake. Five additional bedroom suites provide ample space for family and guests.\n\nSpecial features include a state-of-the-art home theater, 1,500-bottle wine cellar, meditation garden with water features, and a boat dock. The property also includes a guest house, four-car garage, and extensive outdoor entertaining areas.",
    features: [
      "Lakefront",
      "Glass Walls",
      "Home Theater",
      "Wine Cellar",
      "Meditation Garden",
      "Boat Dock",
      "Guest House",
      "4-Car Garage",
    ],
    tags: ["Luxury", "Waterfront"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&h=800",
        description:
          "Geometric glass mansion exterior with innovative architectural design and lakefront setting",
      },
      {
        url: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&h=800",
        description:
          "Expansive glass walls connecting indoor and outdoor living spaces with lake views",
      },
      {
        url: "https://images.unsplash.com/photo-1560448075-bb485b067938?w=1200&h=800",
        description:
          "Open-concept interior featuring 20-foot ceilings and structural glass construction",
      },
      {
        url: "https://images.unsplash.com/photo-1618219944342-824e40a13285?w=1200&h=800",
        description:
          "State-of-the-art home theater with premium audio-visual equipment",
      },
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800",
        description:
          "1,500-bottle wine cellar with temperature-controlled storage and tasting area",
      },
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800",
        description:
          "Meditation garden with water features and serene lakefront views",
      },
    ],
  },
];

export default function PropertyDetail() {
  const params = useParams();
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isStoryModeOpen, setIsStoryModeOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  // Get dynamic sections from CMS
  const propertySections = getVisiblePropertySections();

  const idParam = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const property = properties.find((p) => p.id === parseInt(idParam || "0"));

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
              delay: 0.3,
            }}
            className="w-full h-full"
          >
            <img
              src={property.images[currentImageIndex].url}
              alt={property.title}
              className="w-full h-full object-cover"
              onLoad={() => setHeroImageLoaded(true)}
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
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 rounded-t-2xl backdrop-blur-sm  border-white/10"
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
                        <img
                          src={image.url}
                          alt={`${property.title} - Image ${index + 1}`}
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 + index * 0.8 }}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-800/20 via-black/90 to-gray-900/10 border border-white/10">
                    <img
                      src={
                        property.images[
                          (index * 2 + 2) % property.images.length
                        ]?.url || property.images[0]?.url
                      }
                      alt={`${section.name} Image 1`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-700" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 + index * 0.8 }}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-800/20 via-black/90 to-gray-900/10 border border-white/10">
                    <img
                      src={
                        property.images[
                          (index * 2 + 3) % property.images.length
                        ]?.url || property.images[1]?.url
                      }
                      alt={`${section.name} Image 2`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-700" />
                  </div>
                </motion.div>
              </div>

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
                className="absolute -top-12 right-0 text-white hover:text-white/70 z-10 p-2"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Main Image */}
              <div
                className="relative bg-black rounded-lg overflow-hidden mb-4 flex-shrink-0"
                style={{ maxHeight: "60vh" }}
              >
                <img
                  src={property.images[currentImageIndex].url}
                  alt={`${property.title} - Image ${currentImageIndex + 1}`}
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
                    <img
                      src={image.url}
                      alt={`Thumbnail ${index + 1}`}
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
    </motion.div>
  );
}
