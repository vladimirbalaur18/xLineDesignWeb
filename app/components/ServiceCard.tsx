"use client";

import { motion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  image: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  isMobile?: boolean;
  serviceRefs: React.MutableRefObject<{
    [key: string]: HTMLHeadingElement | null;
  }>;
}

// Content component for text content only
const ServiceContent = ({
  service,
  serviceRefs,
  isMobile,
}: {
  service: Service;
  serviceRefs: React.MutableRefObject<{
    [key: string]: HTMLHeadingElement | null;
  }>;
  isMobile: boolean;
}) => (
  <>
    {/* Header */}
    <h3
      ref={(el) => {
        serviceRefs.current[service.id] = el;
      }}
      className="text-2xl font-bold mb-4 flex items-center gap-3 relative"
    >
      <motion.div
        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
      >
        {service.icon}
      </motion.div>
      <span className="uppercase tracking-wide">{service.title}</span>
      <motion.div
        className="absolute -bottom-2 left-0 h-[1px] w-1/3 bg-gradient-to-r from-white to-transparent"
        initial={{ width: 0 }}
        {...(isMobile
          ? { whileInView: { width: "33%" }, viewport: { once: true } }
          : { animate: { width: "33%" } })}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </h3>

    {/* Description */}
    <p
      className={`text-white/70 leading-relaxed ${isMobile ? "mb-6" : "mb-8"}`}
    >
      {service.description}
    </p>

    {/* Features */}
    <ul
      className={`grid grid-cols-1 ${
        isMobile ? "gap-3 mb-6" : "sm:grid-cols-2 gap-4 mb-8"
      }`}
    >
      {service.features.map((feature, featureIndex) => (
        <motion.li
          key={featureIndex}
          className="flex items-center gap-3 text-white/80 group"
          initial={{ opacity: 0, x: -10 }}
          {...(isMobile
            ? { whileInView: { opacity: 1, x: 0 }, viewport: { once: true } }
            : { animate: { opacity: 1, x: 0 } })}
          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
          whileHover={{ x: 5 }}
        >
          <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-all">
            <CheckCircle className="h-3.5 w-3.5 text-white/70 group-hover:text-white transition-colors" />
          </div>
          <span className="group-hover:text-white transition-colors">
            {feature}
          </span>
        </motion.li>
      ))}
    </ul>

    {/* Button */}
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      <Link href={`/projects?filter=${service.id}`}>
        <Button
          className={`relative overflow-hidden group bg-black hover:bg-white text-white hover:text-black border border-white/40 hover:border-white transition-all duration-300 py-6 px-8 rounded-lg ${
            isMobile ? "w-full" : ""
          }`}
        >
          <span className="relative z-10 font-medium tracking-wider">
            Explorează proiectele {service.title}
          </span>
          <motion.span className="absolute right-4 group-hover:translate-x-1 transition-transform duration-300">
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.span>

          <motion.div
            className="absolute inset-0 bg-white z-0"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </Button>
      </Link>
    </motion.div>
  </>
);

// Image component
const ServiceImage = ({
  service,
  isMobile,
}: {
  service: Service;
  isMobile: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    {...(isMobile
      ? { whileInView: { opacity: 1, scale: 1 }, viewport: { once: true } }
      : { animate: { opacity: 1, scale: 1 } })}
    transition={{ duration: 0.5, delay: 0.2 }}
    className={`relative ${
      isMobile ? "w-full max-w-full" : "h-full"
    } aspect-[4/3] rounded-xl overflow-hidden group`}
  >
    <div
      className={`relative rounded-xl overflow-hidden border border-white/10 z-10 ${
        isMobile ? "w-full h-full" : ""
      }`}
    >
      <Image
        src={service.image}
        alt={service.title}
        width={1200}
        height={800}
        className="object-cover w-full h-full filter transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="h-[1px] w-24 bg-gradient-to-r from-white/70 to-transparent mb-4 transform-gpu scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        <p className="text-white/90 font-light">
          Proiectele noastre de {service.title.toLowerCase()} îmbină tehnologia
          de ultimă generație, estetica și soluțiile sustenabile.
        </p>
      </div>
    </div>
  </motion.div>
);

export default function ServiceCard({
  service,
  index,
  isMobile = false,
  serviceRefs,
}: ServiceCardProps) {
  if (isMobile) {
    return (
      <motion.div
        key={service.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8"
      >
        <div className="space-y-8">
          <div className="backdrop-blur-sm">
            <ServiceContent
              service={service}
              serviceRefs={serviceRefs}
              isMobile={isMobile}
            />
          </div>
          <div className="backdrop-blur-sm">
            <ServiceImage service={service} isMobile={isMobile} />
          </div>
        </div>
      </motion.div>
    );
  }

  // Desktop version - full card layout like mobile but with desktop styling
  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8"
    >
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="backdrop-blur-sm"
        >
          <ServiceContent
            service={service}
            serviceRefs={serviceRefs}
            isMobile={isMobile}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="backdrop-blur-sm"
        >
          <ServiceImage service={service} isMobile={isMobile} />
        </motion.div>
      </div>
    </motion.div>
  );
}
