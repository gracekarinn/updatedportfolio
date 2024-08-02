"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { TimelineItemType } from "@/lib/interface";
import { timelineData } from "@/lib/data";

const Timeline: React.FC = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 py-5">
      <div className="absolute max-lg:right-0 max-lg:-translate-x-[60px] lg:left-1/2 transform -translate-x-1/2 w-1 h-[500px] bg-gray-300"></div>
      {timelineData.map((item, index) => (
        <TimelineItem key={index} item={item} index={index} />
      ))}
    </div>
  );
};

const TimelineItem: React.FC<{ item: TimelineItemType; index: number }> = ({
  item,
  index,
}) => {
  const isEven = index % 2 === 0;
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={`mb-16 flex items-center justify-center w-full ${
        isEven ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full lg:w-5/12">
        <motion.div
          className={`bg-white rounded-lg shadow-xl p-6 ${
            isEven ? "lg:ml-8" : "lg:mr-8"
          }`}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="mb-3 font-bold text-gray-800 text-xl">{item.title}</h3>
          <p className="text-sm leading-snug tracking-wide text-gray-900">
            {item.description}
          </p>
        </motion.div>
      </div>

      <motion.div
        className="z-20 flex items-center justify-center bg-blue-500 shadow-xl w-16 h-16 rounded-full mx-4 flex-shrink-0"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h1 className="font-semibold text-lg text-white">{item.year}</h1>
      </motion.div>

      <div className="hidden lg:block w-5/12"></div>
    </motion.div>
  );
};

export default Timeline;
