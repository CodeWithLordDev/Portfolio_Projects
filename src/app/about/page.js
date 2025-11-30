"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

export default function Page() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const skills = [
    { name: "JavaScript", color: "from-yellow-400 to-yellow-600", level: 90 },
    { name: "React.js", color: "from-cyan-400 to-blue-500", level: 85 },
    { name: "Next.js", color: "from-gray-700 to-gray-900", level: 80 },
    { name: "Tailwind CSS", color: "from-teal-400 to-cyan-500", level: 95 },
    { name: "Framer Motion", color: "from-pink-500 to-purple-600", level: 88 },
    { name: "MongoDB", color: "from-green-500 to-green-700", level: 75 },
    { name: "Git & GitHub", color: "from-gray-600 to-gray-800", level: 82 },
    { name: "Responsive Design", color: "from-indigo-500 to-purple-600", level: 92 },
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20  text-white overflow-hidden"
    >
      {/* Background gradient
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-black pointer-events-none" />

      {/* Grid Pattern Overlay */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none" /> */} 

      {/* Floating Glow Orbs with Parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute w-80 h-80 bg-purple-500/30 rounded-full blur-3xl top-24 left-16 animate-pulse pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute w-72 h-72 bg-cyan-500/25 rounded-full blur-3xl bottom-24 right-16 animate-pulse pointer-events-none"
      />

      {/* Animated Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * -300 - 100],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeOut",
          }}
          className="absolute w-1 h-1 bg-purple-400 rounded-full pointer-events-none"
        />
      ))}

      {/* Main Content */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 80 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl w-full"
      >
        {/* Animated Title */}
        <div className="text-center mb-12">
          <motion.h2
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-[length:200%_auto]"
            style={{
              textShadow: "0 0 30px rgba(168, 85, 247, 0.3)",
            }}
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full"
          />
        </div>

        {/* Profile Section with Interactive Card */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Left: Avatar Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 border border-purple-500/30 overflow-hidden">
                {/* Animated Scan Line */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative z-10">
                  {/* Avatar */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-1 cursor-pointer"
                  >
                    <div className="w-full h-full rounded-full bg-[#0d0d0d] flex items-center justify-center text-6xl">
                      👨‍💻
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-center mb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                      Ayush Rajesh Temkar
                    </span>
                  </h3>
                  <p className="text-white/60 text-center text-sm mb-6 italic">
                    Front-End Developer & Creative Coder
                  </p>

                  {/* Animated Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Projects", value: "15+", delay: 0.3 },
                      { label: "Experience", value: "2 Yrs", delay: 0.4 },
                      { label: "Tech Stack", value: "8+", delay: 0.5 },
                    ].map((stat) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: stat.delay, type: "spring" }}
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
                        }}
                        className="text-center p-3 rounded-xl bg-[#0f172a] border border-purple-500/20 cursor-pointer"
                      >
                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                          {stat.value}
                        </div>
                        <div className="text-xs text-white/60 mt-1">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-[#1a1a2e]/50 border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                Hey there! I'm{" "}
                <span className="text-cyan-400 font-semibold">
                  Ayush Rajesh Temkar
                </span>
                , a
                <span className="text-purple-400 font-semibold">
                  {" "}
                  Front-End Developer
                </span>{" "}
                and second-year IT student passionate about building sleek,
                responsive, and interactive websites that blend functionality
                with creativity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-[#1a1a2e]/50 border border-purple-500/20 hover:border-purple-500/50 transition-all"
            >
              <p className="text-gray-400 text-base leading-relaxed">
                My tech stack includes{" "}
                <span className="text-cyan-400">JavaScript</span>,{" "}
                <span className="text-purple-400">React</span>,{" "}
                <span className="text-pink-400">Next.js</span>,{" "}
                <span className="text-blue-400">Tailwind CSS</span>, and{" "}
                <span className="text-yellow-400">Framer Motion</span>. I love
                transforming ideas into digital experiences that inspire and
                engage users. Whether it's a smooth animation, a responsive
                layout, or a futuristic UI, I enjoy pushing boundaries to make
                every project unique.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl bg-[#1a1a2e]/50 border border-pink-500/20 hover:border-pink-500/50 transition-all"
            >
              <p className="text-gray-500 text-base">
                Beyond coding, I'm deeply interested in AI, UI/UX design, and
                video content creation for my YouTube channel{" "}
                <span className="text-pink-400 font-semibold">
                  CodewithLord
                </span>
                . I aim to keep learning, experimenting, and creating tools that
                empower developers and designers alike.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Interactive Skill Tags with Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Tech Stack & Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 20px 40px -10px rgba(168, 85, 247, 0.4)",
                }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="relative group cursor-pointer"
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity`}
                />

                {/* Card */}
                <div className="relative p-5 rounded-2xl bg-[#1a1a2e]/70 border border-white/10 group-hover:border-white/30 transition-all overflow-hidden">
                  {/* Progress Bar Background */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                      className={`h-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>

                  <div className="text-white font-semibold text-center text-sm">
                    {skill.name}
                  </div>
                  <div className="text-center text-xs text-white/40 mt-1">
                    {skill.level}%
                  </div>
                </div>

                {/* Tooltip */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 rounded-lg bg-black/90 border border-white/20 text-white text-xs whitespace-nowrap z-20"
                  >
                    Proficiency: {skill.level}%
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45 border-r border-b border-white/20" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Floating Shapes */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [12, 22, 12],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl border border-white/10 pointer-events-none"
      />
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md rounded-full border border-white/5 pointer-events-none"
      />
    </section>
  );
}