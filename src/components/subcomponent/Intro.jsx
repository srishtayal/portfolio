"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";

export default function AuroraBackgroundDemo() {
  return (
    (<AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-heading text-center">
                Hi, I'm Srishti.
                <span className='block mt-5'>
                    A developer.
                </span>
            </h1>

            <p className="pt-10 font-body text-lg sm:text-xl md:text-2xl text-white text-center leading-relaxed">
                A sophomore at NSUT, passionate about building 
                <br /> innovative web applications.
            </p>
        </div>
      </motion.div>
    </AuroraBackground>)
  );
}
