"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import Hexagon from "./subcomponent/Hexagon";

export default function About() {
  return (
    <div className="w-full">
      <AuroraBackground className="overflow-hidden h-auto pt-24 sm:pt-32 md:pt-40 lg:pt-48">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col items-center justify-start px-6 sm:px-10 md:px-14 lg:px-20 py-6"
        >
          <div className=" min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-heading text-center">
              I'm Srishti.
            </h1>
            <div className="flex flex-col md:flex-col sm:flex-col lg:flex-row items-center p-10 sm:p-20 gap-12">
              <div 
                className="bg-[url('/photos/srishti.jpeg')] bg-cover rounded-full bg-no-repeat bg-center w-60 h-60 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-128 lg:h-96 shadow-lg"
              ></div>
              <div className="text-left">
                <h2 className="text-3xl font-semibold text-white leading-relaxed">
                  I'm a Sophomore at NSUT, pursuing Engineering in Electronics.
                </h2>
                <p className="text-xl mt-2 font-body text-white">
                  I'm passionate about technology and innovation, I focus on web development, AI solutions, and innovative solutions. 
                  I actively participate in hackathons, building impactful projects that address real-world challenges through 
                  creativity, problem-solving, and continuous learning.
                </p>
              </div>
            </div>
            <Hexagon />
          </div>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}
