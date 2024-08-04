import React from "react";
import { motion } from "framer-motion";

const Preloader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-400 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="relative">
        <motion.div
          className="w-24 h-24 bg-white rounded-full"
          initial={{ scale: 0.5, opacity: 0.5 }}
          animate={{ scale: [0.5, 1, 0.5], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-purple-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          GK
        </motion.div>
      </div>
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-4 h-4 bg-white rounded-full"
          initial={{
            x: `${(index - 1) * 30}px`,
            y: "60px",
            opacity: 0,
          }}
          animate={{
            y: ["60px", "40px", "60px"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      ))}
    </motion.div>
  );
};

export default Preloader;
