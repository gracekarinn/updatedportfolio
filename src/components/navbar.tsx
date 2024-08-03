import React from "react";
import { navLinks } from "@/lib/data";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 px-5">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[70px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 items-center justify-between flex text-2xl text-white/50">
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
      </div>
    </nav>
  );
};
