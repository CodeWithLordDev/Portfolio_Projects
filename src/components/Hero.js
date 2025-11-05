"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden bg-gradient-to-b from-[#090909] via-[#0d0d0d] to-[#151515]"
    >
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

      {/* Animated Gradient Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-blue-500/20 blur-[180px] animate-pulse pointer-events-none"
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]"
      >
        Hey, I&apos;m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Ayush Aka CodewithLord
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 text-lg md:text-xl text-white/70 max-w-xl"
      >
        A Front-End Developer passionate about crafting modern, responsive, and
        animated web experiences that merge creativity and technology.
      </motion.p>

      {/* Short Bio */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-4 text-sm md:text-base text-white/60 max-w-2xl"
      >
        Currently pursuing a Bachelor&apos;s degree in Information Technology (2nd
        Year). I specialize in <span className="text-purple-400">React</span>,{" "}
        <span className="text-cyan-400">Next.js</span>,{" "}
        <span className="text-pink-400">Tailwind CSS</span>, and{" "}
        <span className="text-blue-400">Framer Motion</span>. I enjoy turning
        complex problems into smooth, interactive digital experiences.
      </motion.p>

      {/* Button */}
      <motion.a
        href="/contact"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 25px rgba(168,85,247,0.7)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:shadow-pink-500/50 transition relative z-10"
      >
        Let’s Connect 🚀
      </motion.a>

      {/* Tech Stack Tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-3 mt-10"
      >
        {[
          "JavaScript",
          "React.js",
          "Next.js",
          "Tailwind CSS",
          "Framer Motion",
          "Git & GitHub",
          "Responsive Design",
        ].map((skill) => (
          <span
            key={skill}
            className="px-5 py-2 rounded-full bg-white/10 text-gray-300 border border-white/10 text-sm backdrop-blur-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition"
          >
            {skill}
          </span>
        ))}
      </motion.div>

      {/* Floating Orbs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[300px] h-[300px] bg-purple-600/25 rounded-full blur-[150px] bottom-20 left-20 pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[300px] h-[300px] bg-pink-500/25 rounded-full blur-[150px] top-20 right-20 pointer-events-none"
      />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 flex flex-col items-center text-white/60"
      >
        <span className="text-sm">Scroll Down</span>
        <div className="w-[1px] h-6 bg-white/40 mt-2 animate-pulse"></div>
      </motion.div>
    </section>
  );
}
