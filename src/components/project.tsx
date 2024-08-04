"use client";
import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Project() {
  return (
    <div id="experience" className="flex flex-col items-center">
      {projectsData.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </div>
  );
}

function ProjectItem({ project }: { project: (typeof projectsData)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 w-full max-w-[42rem]"
    >
      <section className="border border-black/5 dark:bg-gray-800/30 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-50 dark:hover:bg-gray-800 transition sm:group-even:pl-8 shadow-lg dark:shadow-gray-700/50">
        <div className="sm:hidden mb-4">
          <Image
            src={project.imageUrl}
            alt="Project I worked on"
            quality={95}
            width={300}
            height={200}
            className="w-full rounded-t-lg shadow-md dark:shadow-gray-700/50"
          />
        </div>
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-300">
            {project.description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {project.tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] dark:bg-white/[0.2] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden sm:block">
          <Image
            src={project.imageUrl}
            alt="Project I worked on"
            quality={95}
            width={450}
            height={300}
            className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
              transition
              group-hover:scale-[1.04]
              group-hover:-translate-x-3
              group-hover:translate-y-3
              group-hover:-rotate-2
              group-even:group-hover:translate-x-3
              group-even:group-hover:translate-y-3
              group-even:group-hover:rotate-2
              group-even:right-[initial] group-even:-left-40
              dark:shadow-gray-700/50"
          />
        </div>
      </section>
    </motion.div>
  );
}
