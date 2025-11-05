"use client";
import { motion } from "framer-motion";

export default function page() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-black text-white overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-black pointer-events-none" />

      {/* Floating Glow Orbs */}
      <div className="absolute w-80 h-80 bg-purple-500/30 rounded-full blur-3xl top-24 left-16 animate-pulse pointer-events-none" />
      <div className="absolute w-72 h-72 bg-cyan-500/25 rounded-full blur-3xl bottom-24 right-16 animate-pulse pointer-events-none" />

      {/* Main Content */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 80 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl text-center"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
          About Me
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          Hey there! I’m{" "}
          <span className="text-cyan-400 font-semibold">Ayush Rajesh Temkar</span>, a
          <span className="text-purple-400 font-semibold"> Front-End Developer</span> and second-year IT student
          passionate about building sleek, responsive, and interactive websites that blend
          functionality with creativity.
        </p>

        <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
          My tech stack includes{" "}
          <span className="text-cyan-400">JavaScript</span>,{" "}
          <span className="text-purple-400">React</span>,{" "}
          <span className="text-pink-400">Next.js</span>,{" "}
          <span className="text-blue-400">Tailwind CSS</span>, and{" "}
          <span className="text-yellow-400">Framer Motion</span>.  
          I love transforming ideas into digital experiences that inspire and engage users.  
          Whether it’s a smooth animation, a responsive layout, or a futuristic UI, I enjoy
          pushing boundaries to make every project unique.
        </p>

        <p className="mt-6 text-gray-500 text-base md:text-lg">
          Beyond coding, I’m deeply interested in AI, UI/UX design, and video content creation
          for my YouTube channel <span className="text-pink-400 font-semibold">CodewithLord</span>.  
          I aim to keep learning, experimenting, and creating tools that empower developers and designers alike.
        </p>

        {/* Skill Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          {[
            "JavaScript",
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "Framer Motion",
            "MongoDB",
            "Git & GitHub",
            "Responsive Design",
          ].map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 rounded-full bg-white/10 text-gray-200 border border-white/20 text-sm backdrop-blur-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating Shapes */}
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/10 backdrop-blur-lg rounded-2xl rotate-12 animate-bounce-slow pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-white/5 backdrop-blur-md rounded-full animate-spin-slow pointer-events-none" />
    </section>
  );
}
