"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { deskripsi } from "@/lib/data";

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
                className="font-bold text-xl md:text-2xl lg:text-3xl text-rose-500"
              />
            </div>
            <p className="mb-8 justify-center leading-9 max-w-lg mx-auto lg:mx-0 text-gray-600">
              {deskripsi}
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
                Contact Me!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
