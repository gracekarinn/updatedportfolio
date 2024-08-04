"use client";
import React, { useState } from "react";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 px-5">
      <div className="container mx-auto">
        <div className="hidden md:flex w-full bg-black/20 h-[70px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 items-center justify-between text-2xl text-white/50">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="cursor-pointer text-white w-[60px] h-[60px] flex items-center justify-center"
            >
              <link.icon className="text-2xl" />
            </Link>
          ))}
        </div>
        <motion.button
          className="md:hidden fixed bottom-4 right-4 z-50 bg-black/20 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center"
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-6 h-6 flex flex-col justify-around"
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          >
            <motion.span
              className="w-full h-0.5 bg-white block"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 8 },
              }}
            />
            <motion.span
              className="w-full h-0.5 bg-white block"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
            />
            <motion.span
              className="w-full h-0.5 bg-white block"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -8 },
              }}
            />
          </motion.div>
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg p-8"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block py-2 px-4 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                    onClick={toggleMenu}
                  >
                    <link.icon className="inline-block mr-2" /> {link.name}
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
