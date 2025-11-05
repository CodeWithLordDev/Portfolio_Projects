"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxTransition() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Multi-layer parallax
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yMidground = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yForeground = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <section ref={ref} className="relative h-[90vh] overflow-hidden">
      {/* Background Layer */}
      <motion.div
        style={{ y: yBackground, opacity }}
        className="absolute inset-0 bg-[url('/Assets/Images/ParallaxBackground.jpg')] bg-cover bg-center"
      />

      {/* Midground Layer with subtle blur */}
      <motion.div
        style={{ y: yMidground }}
        className="absolute inset-0 bg-[url('/Assets/Images/ParallaxMidground.png')] bg-contain bg-no-repeat bg-center opacity-50 blur-sm"
      />

      {/* Foreground Floating Orbs / Glow Elements */}
      <motion.div
        style={{ y: yForeground }}
        className="absolute w-64 h-64 bg-purple-500/20 rounded-full top-20 left-10 blur-3xl animate-pulse"
      />
      <motion.div
        style={{ y: yForeground }}
        className="absolute w-72 h-72 bg-cyan-400/20 rounded-full bottom-10 right-20 blur-3xl animate-pulse"
      />
      <motion.div
        style={{ y: yForeground }}
        className="absolute w-32 h-32 bg-pink-400/10 rounded-full top-1/2 left-1/2 blur-2xl animate-bounce-slow"
      />

      {/* Overlay gradient to blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent"></div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Discover My Story
        </h2>
        <p className="text-gray-300 mt-3 max-w-xl">
          Smooth parallax scroll with layered depth and floating elements creates
          a modern aesthetic transition into my About section.
        </p>
      </motion.div>
    </section>
  );
}
