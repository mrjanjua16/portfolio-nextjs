"use client";

import portfolioImg from "@/../public/images/photo.jpg";
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
    const { activeSection } =
    useActiveSectionContext();
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'easeInOut' },
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
      className="z-50 flex h-[1000px] w-full flex-col items-center justify-start leading-8 dark:bg-darkBg dark:text-white md:scroll-mt-4 lg:h-[1100px] lg:scroll-mt-24"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex w-full flex-col items-center pt-8">
        <SectionHeading>About Me</SectionHeading>
        <motion.div
          className="w-full overflow-hidden px-4 py-12 sm:w-[60%] sm:text-center lg:h-[700px] lg:w-[1040px] xl:w-[1180px]"
        >
          <div className="group relative w-full flex flex-col lg:flex-row items-center justify-center">
            <motion.div
              className="lg:order-2 lg:relative z-40 lg:max-w-[580px] lg:text-start lg:text-lg xl:h-[442px] xl:max-w-[650px]"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
              <div className="flex flex-col gap-6 ml-5 relative">
                <motion.span variants={textVariants}>
                  Full-stack developer with 1+ years of hands-on experience
                  building and deploying production-ready applications
                  (including an ERP system and invoice automation platform)
                  using technologies such as React, TypeScript, Redux Toolkit,
                  AdonisJS, Express PostgreSQL, Mongodb and MySQL. Successfully
                  implemented features like user management (including RBAC),
                  CRUD APIs, and payroll generation using edge and cron jobs.
                </motion.span>
                <motion.span variants={textVariants}>
                  My 3+ years of experience as an Implementation Specialist in
                  EMR/EHR software, along with skills in game development and
                  graphic design, provide a unique perspective and
                  problem-solving capabilities. Seeking a challenging role to
                  further develop my expertise and contribute to innovative
                  projects.
                </motion.span>
                <motion.p
                  className="flex flex-col items-start sm:items-center lg:items-start"
                  variants={textVariants}
                >
                  <span>So if you are interested,</span>
                  <Link
                    href={'contact'}
                    onClick={(e) => {
                      smoothScrollTo({ e, id: 'contact' });
                    }}
                    className="w-52 lg:w-40"
                  >
                    <motion.span
                      className="bg-[#ffcbb4] text-2xl font-bold uppercase dark:bg-[#ddbea9] lg:normal-case"
                      variants={textVariants}
                    >
                      <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-400 before:hover:bg-green-500 relative inline-block">
                        <span className="relative text-white">Contact me!</span>
                      </span>
                    </motion.span>
                  </Link>
                </motion.p>
              </div>
            </motion.div>
            <motion.div className="lg:order-1 relative mt-8 lg:mt-0">
              <div className="relative h-72 w-72 lg:h-[380px] lg:w-[380px] xl:h-[470px] xl:w-[470px]">
                <div className="absolute inset-0 z-20 rounded-full bg-gradient-to-b from-[#ffcbb4] via-[#e0afa0] to-[#e29578] opacity-10"></div>
                <Image
                  src={portfolioImg}
                  alt="portfolio image"
                  placeholder="blur"
                  width={470}
                  height={470}
                  className="z-10 rounded-full lg:h-[380px] lg:w-[380px] xl:h-[470px] xl:w-[470px]"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <SectionDivider />
    </motion.section>
  );
}