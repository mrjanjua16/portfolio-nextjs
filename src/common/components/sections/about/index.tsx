"use client";

import portfolioImg from "../../../../../public/images/photo.jpg";
import { smoothScrollTo } from "@/common/lib/utils";
import SectionDivider from "@/common/components/shared/section-divider";
import SectionHeading from "@/common/components/shared/section-heading";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { useActiveSectionContext } from "@/common/stores/active-section";

export default function About() {
  const ref = useRef<HTMLElement | null>(null);
  const { activeSection } = useActiveSectionContext();
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeInOut" },
          });
        } else {
          controls.start({ opacity: 0, y: 50 });
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, ref]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="z-50 flex flex-col items-center leading-8 dark:bg-darkBg dark:text-white md:scroll-mt-4 lg:scroll-mt-24"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="w-full px-4 py-8"> {/* Added padding for better spacing */}
        <SectionHeading>About Me</SectionHeading>
        <motion.div className="mt-8 relative flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Image */}
          <motion.div className="relative w-full md:w-1/2 lg:w-1/3">
            <div className="relative h-72 w-full md:h-[380px] md:w-full lg:h-[470px] lg:w-full rounded-full">
              <div className="absolute inset-0 z-20 rounded-full bg-gradient-to-b from-[#ffcbb4] via-[#e0afa0] to-[#e29578] opacity-10"></div>
              <Image
                src={portfolioImg}
                alt="portfolio image"
                placeholder="blur"
                fill
                className="z-10 rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="w-full md:w-1/2 lg:w-2/3 text-left md:text-left"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="mb-4">
              Full-stack developer with 1+ years of hands-on experience building and
              deploying production-ready applications (including an ERP system and
              invoice automation platform) using technologies such as React,
              TypeScript, Redux Toolkit, AdonisJS, Express, PostgreSQL, MongoDB, and
              MySQL. Successfully implemented features like user management (including
              RBAC), CRUD APIs, and payroll generation using edge and cron jobs.
            </p>
            <p className="mb-8">
              My 3+ years of experience as an Implementation Specialist in EMR/EHR
              software, along with skills in game development and graphic design,
              provide a unique perspective and problem-solving capabilities. Seeking a
              challenging role to further develop my expertise and contribute to
              innovative projects.
            </p>
            <Link
              href="/contact"
              onClick={(e) => smoothScrollTo({ e, id: "contact" })}
              className="inline-block bg-[#ffcbb4] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#ddbea9] transition duration-300 dark:bg-[#ddbea9] dark:hover:bg-[#ffcbb4]" // Improved button styling
            >
              Contact Me!
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <SectionDivider />
    </motion.section>
  );
}