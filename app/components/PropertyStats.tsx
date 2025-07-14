import React from "react";
import { motion } from "framer-motion";

interface Stat {
  icon: React.ElementType;
  value: React.ReactNode;
  label: string;
}

interface PropertyStatsProps {
  stats: Stat[];
  className?: string;
}

export const PropertyStats: React.FC<PropertyStatsProps> = ({
  stats,
  className = "",
}) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            className="text-center group"
          >
            <stat.icon className="w-8 h-8 text-white/60 mx-auto mb-2 group-hover:text-white transition-colors duration-300" />
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-white/60 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
