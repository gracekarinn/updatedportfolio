"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Skill } from "@/lib/interface";
import { skills } from "@/lib/data";

const Bahasa: React.FC = () => {
  const [currentSkill, setCurrentSkill] = useState<Skill>(skills[0]);
  const circumference = 2 * Math.PI * 100;

  return (
    <main className="min-h-screen  p-4 flex items-center justify-center">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 space-y-6 bg-white/10 backdrop-blur-md rounded-xl shadow-xl max-w-4xl w-full mx-auto"
      >
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Programming Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <motion.button
              key={skill.title}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 text-sm sm:text-base text-black transition rounded-full border-2 border-black hover:border-white ${
                currentSkill.title === skill.title
                  ? "bg-white/20 font-bold"
                  : "bg-transparent"
              }`}
              onClick={() => setCurrentSkill(skill)}
            >
              {skill.title}
            </motion.button>
          ))}
        </div>
        <div className="flex items-center justify-center mt-8">
          <div className="relative">
            <svg className="transform -rotate-90 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="currentColor"
                strokeWidth="10%"
                fill="transparent"
                className="text-white/20"
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="currentColor"
                strokeWidth="10%"
                fill="transparent"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{
                  strokeDashoffset:
                    circumference -
                    (currentSkill.percent / 100) * circumference,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-black"
              />
            </svg>
            <motion.span
              className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl font-bold text-black"
              key={currentSkill.percent}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {`${currentSkill.percent}%`}
            </motion.span>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Bahasa;
