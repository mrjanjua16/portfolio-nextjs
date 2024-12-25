'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.215, 0.61, 0.355, 1]
      }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffa781] to-indigo-500/5 rounded-2xl transform transition-all duration-300 group-hover:scale-105" />

      <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl border border-gray-100 h-72">
        <motion.div
          whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-[#ffa781] rounded-xl text-white shadow-lg shadow-blue-500/20"
        >
          <Icon className="w-8 h-8" />
        </motion.div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
          {title}
        </h3>

        <p className="text-gray-600 text-center leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;