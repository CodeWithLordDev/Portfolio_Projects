"use client"
import Image from "next/image";
import Hero from "../components/Hero"
import About from "./about/page"
import ParallaxTransition from "../components/ParallaxTransition"
import Contact from "./contact/page"
import { motion } from "framer-motion";
import { metadata } from "./metadata";

export const metadataConfig = metadata; // Re-export if needed
export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      <Hero />
      {/* <ParallaxTransition /> */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>
      <Contact/>
    </main>
  );
}
