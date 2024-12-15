"use client";

import "next-cloudinary/dist/cld-video-player.css";
import SectionDivider from "@/common/components/shared/section-divider";
import TextAnimation from "./_components/text-animation";
import { useActiveSectionContext } from "@/common/stores/active-section";
import { smoothScrollTo } from "@/common/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const controls = useAnimation();
 const videoRef = useRef<HTMLVideoElement>(null);


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

             if(videoRef.current) {
            videoRef.current.play();
            }
          } else {
            controls.start({ opacity: 0, y: 50 });
             if(videoRef.current) {
           videoRef.current.pause();
           }
          }
        },
        { threshold: 0.5 },
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

  useEffect(() => {
    if(activeSection === 'home' && videoRef.current) {
      videoRef.current.play();
    }else {
      if(videoRef.current) {
        videoRef.current.pause();
      }
    }

  }, [activeSection,videoRef]);




  return (
    <>
      <section
        className="relative flex h-screen w-full scroll-mt-36 flex-col items-center justify-center"
        id="home"
        ref={ref}
      >
        <div
          className={
            "absolute left-0 top-0 h-screen w-full dark:bg-[#0000007c]"
          }
        ></div>
        <motion.video
            ref={videoRef}
          width="480"
          height="720"
          preload="none"
          autoPlay
            crossOrigin="anonymous"
            muted
          loop
          className="absolute -z-10 h-screen w-screen object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
        >
          <source src="/layout.mp4" />
        </motion.video>
        <motion.div className="container flex flex-col items-start justify-center tracking-wide text-black dark:text-white">
          <motion.div
            className="container relative flex h-full w-full flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
          >
            <motion.div
              className="h-72 w-[280px] text-center text-[2rem] font-extrabold sm:w-[520px] md:w-[700px] lg:mb-5 lg:w-[920px] lg:text-[3rem]"
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0.2, ease: "easeInOut" },
              }}
            >
              <motion.span
                className="mb-10 text-start font-extrabold"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
              >
                Hey!
              </motion.span>
              <br />
              <motion.span
                className="text-start font-extrabold"
                initial={{ y: 100, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, delay: 0.8, ease: "easeInOut" },
                }}
              >
                I'm Mubashir
                <TextAnimation delay={1} baseText={``} />
              </motion.span>
            </motion.div>
            <motion.div
              className="w-92 flex flex-col items-center justify-center gap-3 px-4 text-sm font-medium md:mt-12 md:flex-row lg:text-lg"
              initial={{ opacity: 0, y: 100 }}
              animate={controls}
              transition={{
                duration: 1,
                delay: 1.2,
                ease: "easeInOut",
              }}
            >
              <a
                className="group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full bg-darkBg px-7 py-3 text-white outline-none transition hover:bg-green-400 hover:text-white hover:dark:text-white sm:w-auto"
                onClick={(e) => {
                  smoothScrollTo({ e, id: "contact" });
                  setActiveSection("contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                <span>Contact me here</span>
              </a>

              <a
                className="borderBlack group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-black outline-none transition hover:bg-green-400 hover:text-white hover:dark:text-white dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:w-auto"
                href="/mubashir-ahmad.pdf"
                download
              >
                <span>Download CV</span>
              </a>

              <div className="flex gap-2">
                <a
                  className="borderBlack flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-2 text-black transition hover:bg-green-400 hover:text-white dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20"
                  href="https://www.linkedin.com/in/mrjanjua/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a
                  className="borderBlack flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-2 text-black transition hover:bg-green-400 hover:text-white dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20"
                  href="https://github.com/mrjanjua16"
                  target="_blank"
                >
                  <Github />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </>
  );
}