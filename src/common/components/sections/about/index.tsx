'use client'
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";
import Link from "next/link";
import portfolioImg from "../../../../../public/images/photo.jpg";
import { smoothScrollTo } from "@/common/lib/utils";
import SectionDivider from "@/common/components/shared/section-divider";
import SectionHeading from "@/common/components/shared/section-heading";
import { useActiveSectionContext } from "@/common/stores/active-section";

export default function About() {
  const ref = useRef(null);
  const { activeSection } = useActiveSectionContext();
  const controls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          controls.start("visible");
          imageControls.start("visible");
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, imageControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      rotate: -10
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1
      }
    }
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: -30
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 1
      }
    },
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

  return (
    <motion.section
      className="z-50 flex flex-col items-center leading-8 dark:bg-darkBg dark:text-white md:scroll-mt-4 lg:scroll-mt-24"
      ref={ref}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="about"
    >
      <div className="w-full px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading><span className='text-[#ffa781]'>About Me</span></SectionHeading>
        </motion.div>

        <motion.div className="mt-8 relative flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Image with animated container */}
          <motion.div
            className="relative w-full md:w-1/2 lg:w-1/3"
            variants={imageVariants}
          >
            <motion.div
              className="relative h-72 w-full md:h-[380px] md:w-full lg:h-[470px] lg:w-full rounded-full overflow-hidden"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(255,203,180,0.3)",
                  "0 0 0 20px rgba(255,203,180,0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <div className="absolute inset-0 z-20 rounded-full bg-gradient-to-b from-[#ffcbb4] via-[#e0afa0] to-[#e29578] opacity-10"></div>
              <motion.div
                className="w-full h-full"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Image
                  src={portfolioImg}
                  alt="portfolio image"
                  placeholder="blur"
                  fill
                  className="z-10 rounded-full object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="w-full md:w-1/2 lg:w-2/3 text-left md:text-left"
            variants={textContainerVariants}
          >
            <motion.p
              className="mb-4"
              variants={textVariants}
            >
              I'm a full-stack developer crafting innovative, user-centric web applications.  My passion lies in building elegant solutions with clean, efficient code.  I've honed my skills over years, delivering production-ready projects—including an ERP system and invoice automation platform—using React, TypeScript, Redux Toolkit, AdonisJS, Express, PostgreSQL, MongoDB, and MySQL
            </motion.p>

            <motion.p
              className="mb-8"
              variants={textVariants}
            >
              My diverse background—including 4 years in EMR/EHR implementation, game development, and graphic design—gives me a unique perspective on problem-solving and a creative edge in tackling complex challenges.  I'm adept at translating complex technical concepts into user-friendly experiences.
            </motion.p>

            <motion.div
              variants={buttonVariants}
              // whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/contact"
                onClick={(e) => smoothScrollTo({ e, id: "contact" })}
                className="inline-block bg-gradient-to-r from-[#ffa781] to-purple-500 hover:from-[#ffa781] hover:to-purple-600 transition-all duration-300 text-white font-bold py-2 px-6 rounded-lg hover:bg-[#ff8534] dark:bg-[#ddbea9] dark:hover:bg-[#ffcbb4]"
              >
                Contact Me!
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <SectionDivider />
      </motion.div>
    </motion.section>
  );
}