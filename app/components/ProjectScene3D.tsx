'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ProjectScene3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerBounds, setContainerBounds] = useState({ x: 0, y: 0, width: 0, height: 0 });
  
  useEffect(() => {
    const updateBounds = () => {
      if (containerRef.current) {
        const bounds = containerRef.current.getBoundingClientRect();
        setContainerBounds({
          x: bounds.x,
          y: bounds.y,
          width: bounds.width,
          height: bounds.height
        });
      }
    };
    
    updateBounds();
    window.addEventListener('resize', updateBounds);
    
    return () => {
      window.removeEventListener('resize', updateBounds);
    };
  }, []);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX - containerBounds.x;
    const y = e.clientY - containerBounds.y;
    setMousePosition({ 
      x: (x / containerBounds.width - 0.5) * 2, 
      y: (y / containerBounds.height - 0.5) * 2 
    });
  };
  
  const layers = [
    {
      depth: 50,
      elements: [
        { 
          type: 'square', 
          x: '15%', 
          y: '20%', 
          size: 100,
          rotation: 20,
          opacity: 0.1
        },
        { 
          type: 'square', 
          x: '70%', 
          y: '60%', 
          size: 180,
          rotation: -15,
          opacity: 0.08
        }
      ]
    },
    {
      depth: 40,
      elements: [
        { 
          type: 'circle', 
          x: '75%', 
          y: '25%', 
          size: 120,
          opacity: 0.15
        }
      ]
    },
    {
      depth: 30,
      elements: [
        { 
          type: 'text', 
          x: '50%', 
          y: '40%', 
          content: 'ARCHITECTURE',
          size: 100,
          opacity: 0.1,
          rotation: 90
        }
      ]
    },
    {
      depth: 20,
      elements: [
        { 
          type: 'line', 
          x: '30%', 
          y: '70%', 
          length: 150, 
          angle: 45,
          thickness: 2,
          opacity: 0.2
        },
        { 
          type: 'line', 
          x: '60%', 
          y: '40%', 
          length: 120, 
          angle: -30,
          thickness: 1,
          opacity: 0.15
        }
      ]
    },
    {
      depth: 10,
      elements: [
        { 
          type: 'building', 
          x: '50%', 
          y: '50%', 
          size: 250,
          opacity: 0.3
        }
      ]
    }
  ];
  
  const renderLayer = (layer: any, index: number) => {
    const depthFactor = isHovered ? layer.depth : layer.depth * 0.3;
    
    return (
      <div
        key={`layer-${index}`}
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: isHovered ? 
            `translateX(${mousePosition.x * depthFactor * -0.5}px) translateY(${mousePosition.y * depthFactor * -0.5}px)` : 
            'none',
          transition: isHovered ? 'none' : 'transform 0.5s ease-out'
        }}
      >
        {layer.elements.map((element: any, elemIndex: number) => {
          switch (element.type) {
            case 'square':
              return (
                <div
                  key={`elem-${index}-${elemIndex}`}
                  className="absolute border border-white/20 backdrop-blur-sm"
                  style={{
                    left: element.x,
                    top: element.y,
                    width: element.size,
                    height: element.size,
                    opacity: element.opacity,
                    transform: `rotate(${element.rotation}deg)`,
                  }}
                />
              );
            case 'circle':
              return (
                <div
                  key={`elem-${index}-${elemIndex}`}
                  className="absolute border border-white/20 rounded-full backdrop-blur-sm"
                  style={{
                    left: element.x,
                    top: element.y,
                    width: element.size,
                    height: element.size,
                    transform: 'translate(-50%, -50%)',
                    opacity: element.opacity,
                  }}
                />
              );
            case 'text':
              return (
                <div
                  key={`elem-${index}-${elemIndex}`}
                  className="absolute text-white/10 font-bold tracking-widest whitespace-nowrap"
                  style={{
                    left: element.x,
                    top: element.y,
                    fontSize: `${element.size / 10}px`,
                    transform: `translate(-50%, -50%) rotate(${element.rotation}deg)`,
                    opacity: element.opacity,
                  }}
                >
                  {element.content}
                </div>
              );
            case 'line':
              return (
                <div
                  key={`elem-${index}-${elemIndex}`}
                  className="absolute bg-white/20"
                  style={{
                    left: element.x,
                    top: element.y,
                    width: element.length,
                    height: element.thickness,
                    transform: `translate(-50%, -50%) rotate(${element.angle}deg)`,
                    opacity: element.opacity,
                  }}
                />
              );
            case 'building':
              // Simple building shape using divs
              return (
                <div
                  key={`elem-${index}-${elemIndex}`}
                  className="absolute"
                  style={{
                    left: element.x,
                    top: element.y,
                    width: element.size,
                    height: element.size * 1.5,
                    transform: 'translate(-50%, -50%)',
                    opacity: element.opacity,
                  }}
                >
                  {/* Building silhouette */}
                  <div className="relative w-full h-full">
                    {/* Main tower */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[25%] h-[85%] bg-white/5 backdrop-blur-sm border border-white/10"></div>
                    
                    {/* Secondary tower */}
                    <div className="absolute bottom-0 left-[25%] -translate-x-1/2 w-[15%] h-[70%] bg-white/3 backdrop-blur-sm border border-white/5"></div>
                    
                    {/* Right structure */}
                    <div className="absolute bottom-0 right-[20%] w-[30%] h-[55%] bg-white/4 backdrop-blur-sm border border-white/5"></div>
                    
                    {/* Base structure */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[30%] bg-white/3 backdrop-blur-sm border border-white/8"></div>
                    
                    {/* Window patterns */}
                    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[15%] h-[75%] grid grid-rows-8 gap-1">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="bg-white/15 h-full"></div>
                      ))}
                    </div>
                    
                    {/* Antenna */}
                    <div className="absolute bottom-[85%] left-1/2 -translate-x-1/2 w-[1%] h-[15%] bg-white/20"></div>
                  </div>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    );
  };
  
  return (
    <motion.div
      ref={containerRef}
      className="relative w-full aspect-video max-w-4xl mx-auto bg-black bg-opacity-10 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Parallax layers */}
      {layers.map(renderLayer)}
      
      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Innovative <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white">Design</span>
        </motion.h2>
        <motion.div 
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent mb-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        />
        <motion.p 
          className="max-w-md text-white/70 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Interactive 3D visualization that responds to your movement, allowing you to explore architectural concepts from multiple perspectives
        </motion.p>
      </div>
      
      {/* Interactive prompt */}
      {isHovered ? null : (
        <motion.div 
          className="absolute bottom-5 right-5 text-white/50 text-sm flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center animate-pulse">
            <div className="w-1.5 h-1.5 bg-white/70 rounded-full"></div>
          </div>
          <span>Hover to explore</span>
        </motion.div>
      )}
    </motion.div>
  );
}
