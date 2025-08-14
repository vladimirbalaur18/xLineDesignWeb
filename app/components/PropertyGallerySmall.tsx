import React from "react";
import { motion } from "framer-motion";
import { OptimizedImage } from "./OptimizedImage";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface PropertyGallerySmallProps {
  images: { url: string; description?: string }[];
  title?: string;
  onImageClick: (index: number) => void;
  className?: string;
}

export const PropertyGallerySmall: React.FC<PropertyGallerySmallProps> = ({
  images,
  title = "Gallery",
  onImageClick,
  className = "",
}) => {
  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onImageClick(0)}
          className="border-white/20 text-white hover:bg-white/10"
        >
          <Eye className="w-4 h-4 mr-2" />
          Vezi toate
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {images.slice(0, 4).map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
            onClick={() => onImageClick(index)}
          >
            <OptimizedImage
              src={image.url}
              alt={title + " - Image " + (index + 1)}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
            {index === 3 && images.length > 4 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-semibold">
                  +{images.length - 4} more
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
