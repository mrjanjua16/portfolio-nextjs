"use client"

import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#fdf2ed] via-[#ffa781] to-[#fdf2ed] bg-clip-text text-transparent">
        What I Offer
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Comprehensive full-stack solutions with a focus on Node.js excellence
        and scalable architecture
      </p>
    </motion.div>
  );
};

export default SectionHeader;