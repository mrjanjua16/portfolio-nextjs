"use client";

import React from "react";
import { useSectionInView } from "@/common/lib/hooks";
import { projectsData } from "@/common/lib/data";
import Project from "./_components/project";
import SectionHeading from "@/common/components/shared/section-heading";
import SectionDivider from "@/common/components/shared/section-divider";
import { motion } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("projects", 0.25);

    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      className="flex min-h-screen w-full scroll-mt-28 flex-col items-center justify-center dark:bg-darkBg dark:text-white"
      id="projects"
      ref={ref}
    >
        <SectionHeading>Projects</SectionHeading>
        <motion.div
            className="my-24"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
        >
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                <Project {...project} />
                </React.Fragment>
            ))}
        </motion.div>
        <SectionDivider />
    </section>
  );
}