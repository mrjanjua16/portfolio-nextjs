"use client";

import { links } from "@/common/lib/data";
import { smoothScrollTo } from "@/common/lib/utils";
import { useActiveSectionContext } from "@/common/stores/active-section";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      const scrollPosition = window.scrollY;
      let newActiveSection = activeSection;
      const headerHeight = headerRef.current.offsetHeight;
      let foundActive = false;


      for (const link of links) {
           const section = document.getElementById(link.id);
            if (section) {
              const sectionTop = section.offsetTop;
              const sectionBottom = sectionTop + section.offsetHeight;


                if (sectionTop < scrollPosition + headerHeight + 150) {
                   newActiveSection = link.id;
                }
            }

      }
      if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, setActiveSection]);

  return (
    <header ref={headerRef} className="relative z-[99]">
      <motion.div
        className="fixed left-1/2 top-0 h-[5.5rem] w-full rounded-none border border-[#ff7438] border-opacity-40 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.75rem] md:w-[28rem] md:h-11 lg:w-[36rem] min-[1241px]:w-[43rem] min-[1366px]:w-[48rem] min-[1440px]:w-[48rem] md:rounded-full min-[320px]:h-24"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-full flex-wrap items-center justify-center gap-y-2 text-[0.9rem] font-medium transition-colors sm:w-[initial] sm:flex-nowrap sm:gap-5 md:grid md:grid-cols-7 lg:grid lg:grid-cols-7 min-[320px]:grid min-[320px]:grid-cols-4 min-[320px]:gap-2 min-[320px]:text-[9px]">
          {links.map((link) => (
            <motion.li
              className="relative flex h-3/4 items-center justify-center text-black dark:text-white"
              key={link.id}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-3 uppercase transition"
                href={link.id}
                onClick={(e) => {
                  smoothScrollTo({ e, id: link.id });
                  setActiveSection(link.id);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.id === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-[#ffcbb4] dark:bg-[#ddbea9]"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}