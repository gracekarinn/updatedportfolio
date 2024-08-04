"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { deskripsi, socialLinks } from "@/lib/data";

const About = () => {
  return (
    <section id="about">
      <div className="flex mx-auto px-4">
        <div className="flex flex-col lg:flex-row mx-auto items-center">
          <div>
            <div className="relative w-full h-full mx-auto lg:mx-0">
              <Image
                src="/diri-sendiri.png"
                width={600}
                height={600}
                alt="Grace Karin"
                quality={100}
              />
            </div>
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-6 text-xl md:text-2xl lg:text-3xl font-semibold">
              <span className="mr-2">My name is</span>
              <TypeAnimation
                sequence={[
                  "Grace",
                  2000,
                  "",
                  1000,
                  "Grace Karin",
                  2000,
                  "",
                  1000,
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
                className="font-bold text-xl md:text-2xl lg:text-3xl text-rose-500 dark:text-rose-400"
              />
            </div>
            <p className="mb-3 justify-center leading-9 max-w-lg mx-auto lg:mx-0 text-gray-600 dark:text-white">
              {deskripsi}
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
                >
                  <link.icon className="w-[50px] h-[50px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
