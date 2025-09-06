"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { Property } from "@/types/properties";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bed, Bath, Grid, Play, Calendar, ArrowLeft } from "lucide-react";
import { SharePopover } from "@/components/SharePopover";
import { PropertyHeroImage } from "@/components/PropertyHeroImage";
import { PropertyStats } from "@/components/PropertyStats";
import { PropertyGallerySmall } from "@/components/PropertyGallerySmall";
import { PropertyGalleryModal } from "@/components/PropertyGalleryModal";
import PropertyStoryMode from "@/components/PropertyStoryMode";
import Footer from "@/components/Footer";
import { OptimizedImage } from "@/components/OptimizedImage";

function LazySection({
  section,
  index,
  totalSections,
}: {
  section: any;
  index: number;
  totalSections: number;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [loadingStates, setLoadingStates] = useState<{
    [key: number]: boolean;
  }>({});
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-50px 0px",
  });

  useEffect(() => {
    if (
      isInView &&
      Array.isArray(section.images) &&
      section.images.length > 0
    ) {
      const initialStates: { [key: number]: boolean } = {};
      initialStates[0] = true;
      setLoadingStates(initialStates);
    }
  }, [isInView, section?.images?.length]);

  const handleImageLoad = (imageIndex: number) => {
    setLoadingStates((prev) => {
      const newStates = { ...prev, [imageIndex]: false };
      const nextIndex = imageIndex + 1;
      if (
        nextIndex < (section?.images?.length || 0) &&
        !(nextIndex in newStates)
      ) {
        newStates[nextIndex] = true;
      }
      return newStates;
    });
  };

  const isAnyImageLoading = Object.values(loadingStates).some((l) => l);

  return (
    <motion.div
      ref={sectionRef}
      key={section?.name || index}
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
          {section?.title}
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 1.5 + index * 0.8 }}
          className="h-0.5 bg-white mx-auto"
        />
      </div>

      {isInView && (
        <>
          {isAnyImageLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center items-center py-16 mb-8"
            >
              <div className="flex justify-center items-center">
                <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              </div>
            </motion.div>
          )}

          {Array.isArray(section.images) && section.images.length === 1 ? (
            <div className="w-full mb-8 relative">
              {0 in loadingStates && (
                <div
                  className={`transition-opacity duration-300 ${
                    loadingStates[0] ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <OptimizedImage
                    src={section.images[0]}
                    alt={section.title}
                    width={1920}
                    height={1080}
                    className="object-contain w-full h-auto max-h-[90vh]"
                    sizes="100vw"
                    priority={index === 0}
                    onLoad={() => handleImageLoad(0)}
                  />
                </div>
              )}
            </div>
          ) : Array.isArray(section.images) && section.images.length === 2 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {section.images.map((img: string, i: number) => (
                <div key={i} className="relative">
                  {i in loadingStates && (
                    <div
                      className={`transition-opacity duration-300 ${
                        loadingStates[i] ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      <OptimizedImage
                        src={img}
                        alt={`${section.title} Image ${i + 1}`}
                        width={960}
                        height={720}
                        className="object-contain w-full h-auto max-h-[60vh]"
                        sizes="50vw"
                        priority={index === 0 && i === 0}
                        onLoad={() => handleImageLoad(i)}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : null}
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 + index * 0.8 }}
        className="text-center mt-8"
      >
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          {section?.content}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function PropertyPageView({
  property,
  onBack,
  storyAutoOpen,
}: {
  property: Property;
  onBack?: () => void;
  storyAutoOpen?: boolean;
}) {
  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isStoryModeOpen, setIsStoryModeOpen] = useState(false);
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const [currentGalleryImageIndex, setCurrentGalleryImageIndex] = useState(0);

  const propertySections = property?.sections;

  useEffect(() => {
    setHeroImageLoaded(false);
  }, [currentHeroImageIndex, property]);

  useEffect(() => {
    if (storyAutoOpen && property?.storyChapters?.length) {
      const timer = setTimeout(() => setIsStoryModeOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [storyAutoOpen, property?.storyChapters?.length]);

  const nextImage = () => {
    if (property?.heroImages && property.heroImages.length > 0) {
      setCurrentHeroImageIndex(
        (prev) => (prev + 1) % property.heroImages.length
      );
    }
  };

  const prevImage = () => {
    if (property?.heroImages && property.heroImages.length > 0) {
      setCurrentHeroImageIndex(
        (prev) =>
          (prev - 1 + property.heroImages.length) % property.heroImages.length
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-black"
    >
      <PropertyHeroImage
        images={property.heroImages || []}
        currentImageIndex={currentHeroImageIndex}
        onPrev={prevImage}
        onNext={nextImage}
        onImageLoad={() => setHeroImageLoaded(true)}
        heroImageLoaded={heroImageLoaded}
        title={property.title}
        address={property.address}
        price={property.price}
        controls={
          <>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-6 left-6 z-10"
            >
              <Button
                onClick={() => onBack?.()}
                variant="outline"
                size="sm"
                className="bg-black/50 border-white/20 hover:bg-black/70 text-white backdrop-blur-sm transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Înapoi
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute top-6 right-6 z-10 flex gap-2"
            >
              {property?.storyChapters && property.storyChapters.length > 0 && (
                <Button
                  onClick={() => setIsStoryModeOpen(true)}
                  variant="outline"
                  size="sm"
                  className="bg-black/50 border-white/20 hover:bg-black/70 text-white backdrop-blur-sm transition-all duration-300"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Vezi prezentare
                </Button>
              )}
              <SharePopover />
            </motion.div>
          </>
        }
      />

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="py-12 px-6 md:px-8 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {(property.bedrooms !== undefined ||
                property.bathrooms !== undefined ||
                property.area !== undefined ||
                property.yearBuilt !== undefined) && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Card className="bg-gradient-to-br from-gray-900/30 via-black/95 to-gray-800/20 border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <PropertyStats
                        stats={[
                          ...(!!property.bedrooms
                            ? [
                                {
                                  icon: Bed,
                                  value: property.bedrooms,
                                  label: "Dormitoare",
                                },
                              ]
                            : []),
                          ...(!!property.bathrooms
                            ? [
                                {
                                  icon: Bath,
                                  value: property.bathrooms,
                                  label: "Blocuri sanitare",
                                },
                              ]
                            : []),
                          ...(!!property.area
                            ? [
                                {
                                  icon: Grid,
                                  value: property.area,
                                  label: "Suprafață",
                                },
                              ]
                            : []),
                          ...(!!property.yearBuilt
                            ? [
                                {
                                  icon: Calendar,
                                  value: property.yearBuilt,
                                  label: "An construcție",
                                },
                              ]
                            : []),
                        ]}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {property.fullDescription && (
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
                        Descriere
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
              )}

              {property.features && property.features.length > 0 && (
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
                        Caracteristici
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
              )}
            </div>

            <div className="space-y-6">
              {property?.galleryImages && property.galleryImages.length > 0 && (
                <Card className="bg-gradient-to-br from-gray-900/20 via-black/85 to-gray-800/25 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <PropertyGallerySmall
                      images={property.galleryImages}
                      title="Galerie"
                      onImageClick={(index) => {
                        const safeIndex = Math.min(
                          Math.max(0, index),
                          property.galleryImages.length - 1
                        );
                        setCurrentGalleryImageIndex(safeIndex);
                        setIsImageModalOpen(true);
                      }}
                    />
                  </CardContent>
                </Card>
              )}

              <Card className="bg-gradient-to-br from-black/95 via-gray-900/25 to-black/90 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Ești interesat de acest proiect?
                  </h3>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full border-white/20 text-white hover:bg-white/10"
                    >
                      Contactează-ne acum
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {propertySections && propertySections.length > 0 && (
          <div className="space-y-16 mt-16">
            {propertySections.map((section, index) => (
              <LazySection
                key={`section-${index}`}
                section={section}
                index={index}
                totalSections={propertySections.length}
              />
            ))}
          </div>
        )}
      </motion.section>

      <PropertyGalleryModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        images={property?.galleryImages || []}
        initialImageIndex={currentGalleryImageIndex}
        propertyTitle={property?.title || "Previzualizare"}
      />

      <PropertyStoryMode
        property={property}
        isOpen={isStoryModeOpen}
        onClose={() => setIsStoryModeOpen(false)}
      />

      <Footer />
    </motion.div>
  );
}
