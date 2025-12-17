"use client";
import Image from "next/image";
import Hero from "../components/Hero";
import About from "./about/page";
import ParallaxTransition from "../components/ParallaxTransition";
import Contact from "./contact/page";
import { motion, useScroll, useTransform } from "framer-motion";
import { metadata } from "./metadata";
import { useEffect, useState } from "react";

export const metadataConfig = metadata;

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  // Transform scroll   progress to various values
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0.2]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative bg-black text-white overflow-hidden">
      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated Gradient Mesh */}
        <motion.div
          style={{
            y: backgroundY,
            x: mousePosition.x * 0.3,
          }}
          className="absolute inset-0 opacity-30"
        >
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] animate-pulse" />
        </motion.div>

        {/* Floating Particles Throughout Page */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: typeof window !== "undefined" ? window.innerHeight + Math.random() * 500 : 1000,
              opacity: 0,
            }}
            animate={{
              y: -100,
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            className="absolute w-1 h-1 bg-purple-400/60 rounded-full"
          />
        ))}

        {/* Grid Pattern */}
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:60px_60px]"
        />
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
      </motion.div>

      {/* Section Divider with Animation */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative h-32 flex items-center justify-center"
      >
        {/* Animated Line */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-full max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent bg-[length:200%_auto]"
          />
        </div>

        {/* Floating Icon */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 360],
          }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
          className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-2xl shadow-lg shadow-purple-500/50"
        >
          ⚡
        </motion.div>
      </motion.div>

      {/* About Section with Enhanced Animations */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative"
      >
        {/* Section Background Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}o
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]" />
          <div className="absolute  bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px]" />
        </motion.div>

        <About />
      </motion.div>

      {/* Section Divider 2 with Different Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative h-32 flex items-center justify-center"
      >
        {/* Orbiting Elements */}
        <div className="relative w-32 h-32">
          {[0, 120, 240].map((rotation, i) => (
            <motion.div
              key={i}
              animate={{ rotate: 360 }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0"
              style={{ rotate: rotation }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50" />
            </motion.div>
          ))}
          
          {/* Center Icon */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center text-3xl"
          >
            💼
          </motion.div>
        </div>

        {/* Animated Dots */}
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              }}
              className="w-2 h-2 rounded-full bg-purple-500"
            />
          ))}
        </div>
      </motion.div>

      {/* Contact Section with Reveal Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative"
      >
        {/* Section Background Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px]" />
        </motion.div>

        <Contact />
      </motion.div>

      
      {/* Scroll to Top Indicator (Floating) */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-2xl shadow-purple-500/30 cursor-pointer z-40 group"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]),
        }}
      >
        <motion.span
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white text-2xl"
        >
          ↑
        </motion.span>
        
        {/* Pulse Ring */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full border-2 border-purple-500"
        />
      </motion.button>
    </main>
  );
}