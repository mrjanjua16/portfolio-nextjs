'use client';

import { useRef } from 'react';
import { projectsData } from '@/common/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgess, opacity: opacityProgess }}
      className="group mb-3 last:mb-0 sm:mb-8 max-w-2xl mx-auto"
    >
      <Link href={link} target="_blank">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          whileHover={{ y: -8 }}
          className="relative rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#ffa781] to-indigo-500/5 rounded-2xl transform transition-all duration-300 group-hover:scale-105" />

          <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl border border-gray-100">
            {/* Image at the top */}
            <div className="relative w-full h-64 sm:h-80 mb-4"> {/* Added mb-4 for spacing */}
              <Image
                src={imageUrl}
                alt="Project I worked on"
                fill
                style={{ objectFit: 'cover' }}
                quality={95}
                className="rounded-t-lg transition"
              />
            </div>

            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {title}
              </h3>
              <p className="text-black leading-relaxed text-center">
                {description}
              </p>
              <ul className="flex flex-wrap gap-2 justify-center">
                {tags.map((tag, index) => (
                  <li
                    key={index}
                    className="rounded-full bg-[#ffa781] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:bg-[#ddbea9] dark:text-black"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}