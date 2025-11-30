"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ContactLayout({ children }) {
  // Example scroll animation (you can modify or remove)
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section className="relative min-h-screen w-full bg-black text-white px-6 py-12 overflow-hidden">
      
      {/* Background Grid Animation */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:60px_60px]"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {children}
      </div>

    </section>
  );
}
