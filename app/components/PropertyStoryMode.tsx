import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Play, Pause } from "lucide-react";
import { Button } from "./ui/button";

interface StoryChapter {
  id: number;
  title: string;
  narrative: string;
  image: string;
  focusPoint?: { x: number; y: number };
  duration: number;
  voiceOver?: string;
}

interface PropertyStoryModeProps {
  property: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function PropertyStoryMode({
  property,
  isOpen,
  onClose,
}: PropertyStoryModeProps) {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Generate story chapters from property data
  const storyChapters: StoryChapter[] = [
    {
      id: 1,
      title: "First Impressions",
      narrative: `Welcome to ${property.title}, where architectural brilliance meets modern living. As you approach this stunning property, notice how the facade creates a striking silhouette against the skyline, promising the extraordinary experience that awaits within.`,
      image: property.images[0]?.url,
      duration: 8000,
      focusPoint: { x: 50, y: 30 },
    },
    {
      id: 2,
      title: "The Journey Begins",
      narrative: `Step through the threshold and feel the immediate transformation. The entryway sets the tone with its soaring ceilings and carefully curated lighting, creating an atmosphere of sophistication that extends throughout every corner of this remarkable space.`,
      image: property.images[1]?.url,
      duration: 9000,
      focusPoint: { x: 40, y: 60 },
    },
    {
      id: 3,
      title: "Living Spaces",
      narrative: `The heart of the home reveals itself in the main living areas, where natural light cascades through expansive windows, illuminating spaces designed for both intimate gatherings and grand entertaining. Every element has been thoughtfully positioned to create harmony between form and function.`,
      image: property.images[2]?.url,
      duration: 10000,
      focusPoint: { x: 60, y: 40 },
    },
    {
      id: 4,
      title: "Private Retreats",
      narrative: `Discover the private sanctuaries within - bedrooms that serve as peaceful havens from the world outside. Here, luxury meets tranquility, with every detail crafted to ensure restful nights and inspiring mornings in your personal retreat.`,
      image: property.images[3]?.url,
      duration: 8500,
      focusPoint: { x: 30, y: 50 },
    },
    {
      id: 5,
      title: "Your New Chapter",
      narrative: `This is more than a property - it's the beginning of your next chapter. Imagine the memories you'll create, the moments you'll cherish, and the life you'll build in this extraordinary space. Your story begins here.`,
      image: property.images[4]?.url || property.images[0]?.url,
      duration: 9500,
      focusPoint: { x: 50, y: 70 },
    },
  ];

  const intervalMs = 10;
  const progressIncrement =
    100 / (storyChapters[currentChapter].duration / intervalMs);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && currentChapter < storyChapters.length - 1) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + progressIncrement;
          if (newProgress >= 100) {
            setCurrentChapter(currentChapter + 1);
            return 0;
          }
          return newProgress;
        });
      }, intervalMs);

      return () => {
        clearInterval(interval);
      };
    }
    return () => {};
  }, [isPlaying, currentChapter, progressIncrement]);

  // Reset progress when chapter changes
  useEffect(() => {
    setProgress(0);
  }, [currentChapter]);

  const nextChapter = () => {
    if (currentChapter < storyChapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
      setProgress(0);
    }
  };

  const prevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
      setProgress(0);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToChapter = (index: number) => {
    setCurrentChapter(index);
    setProgress(0);
    setIsPlaying(false);
  };

  if (!isOpen) return null;

  const currentStory = storyChapters[currentChapter];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-50 flex flex-col"
      >
        {/* Header Controls */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute top-0 left-0 right-0 z-10 p-6 bg-gradient-to-b from-black/80 to-transparent"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-white hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </Button>
              <div className="text-white">
                <h2 className="text-xl font-bold">{property.title}</h2>
                <p className="text-sm text-gray-300">Immersive Story Mode</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={togglePlayPause}
                className="text-white hover:bg-white/10"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
              </Button>

              {/* Chapter indicators */}
              <div className="flex space-x-2">
                {storyChapters.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToChapter(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentChapter
                        ? "bg-white scale-125"
                        : index < currentChapter
                        ? "bg-white/60"
                        : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 w-full bg-white/20 rounded-full h-1">
            <motion.div
              className="bg-white h-1 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentChapter}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* Background Image with Ken Burns Effect */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${currentStory.image})`,
                  backgroundPosition: currentStory.focusPoint
                    ? `${currentStory.focusPoint.x}% ${currentStory.focusPoint.y}%`
                    : "center",
                }}
                animate={{
                  scale: isPlaying ? [1, 1.05] : 1,
                }}
                transition={{
                  duration: currentStory.duration / 1000,
                  ease: "easeInOut",
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-4 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevChapter}
              disabled={currentChapter === 0}
              className="text-white hover:bg-white/10 disabled:opacity-30"
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
          </div>

          <div className="absolute inset-y-0 right-4 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={nextChapter}
              disabled={currentChapter === storyChapters.length - 1}
              className="text-white hover:bg-white/10 disabled:opacity-30"
            >
              <ChevronRight className="w-8 h-8" />
            </Button>
          </div>
        </div>

        {/* Story Content */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent"
        >
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentChapter}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {currentStory.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  {currentStory.narrative}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <div className="text-sm text-gray-400">
                    Chapter {currentChapter + 1} of {storyChapters.length}
                  </div>

                  {currentChapter === storyChapters.length - 1 && (
                    <Button
                      onClick={onClose}
                      className="bg-white text-black hover:bg-gray-200"
                    >
                      Explore Property
                    </Button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
