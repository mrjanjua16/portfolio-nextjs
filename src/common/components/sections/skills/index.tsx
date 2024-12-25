"use client";

import React from "react";
import { skillsData } from "@/common/lib/data";
import { useSectionInView } from "@/common/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/common/components/shared/section-heading";
import SectionDivider from "@/common/components/shared/section-divider";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index:any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const skillItemVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.95
  }
};

export default function Skills() {
  const { ref } = useSectionInView("skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="flex w-full flex-col items-center justify-center py-24 pb-[150px] text-center bg-gradient-to-b from-white to-gray-50 dark:from-darkBg dark:to-darkBg/95 dark:text-white sm:pb-40"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading><span className='text-[#ffa781]'>My skills</span></SectionHeading>
      </motion.div>

      <ul className="my-26 mb-[150px] flex max-w-[53rem] flex-wrap items-center justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="borderBlack flex items-center justify-center rounded-xl bg-white/80 px-5 py-3 backdrop-blur-sm transition-colors hover:bg-white dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20 shadow-sm hover:shadow-md"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            whileTap="tap"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <motion.div
              className="flex items-center"
              variants={skillItemVariants}
            >
              <div className="relative mr-2 h-6 w-6">
                <Image
                  src={skill[1]}
                  alt={skill[0]}
                  fill
                  className="object-contain transition-transform group-hover:scale-110"
                />
              </div>
              <span className="font-medium">{skill[0]}</span>
            </motion.div>
          </motion.li>
        ))}
      </ul>

      <motion.div
        className="flex w-full justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <SectionDivider />
      </motion.div>
    </section>
  );
}