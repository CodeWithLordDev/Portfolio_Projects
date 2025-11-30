"use client";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20,
      });

      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const skills = [
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Git & GitHub",
    "Responsive Design",
  ];

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden bg-gradient-to-b from-[#090909] via-[#0d0d0d] to-[#151515]"
    >
      {/* Background Grid with Parallax */}
      <motion.div
        style={{
          x: mousePosition.x * 0.3,
          y: mousePosition.y * 0.3,
        }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:38px_38px] opacity-[0.17] pointer-events-none"
      />

      {/* Gradient Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay bg-[url('/Assets/Images/noise.png')] pointer-events-none" />

      {/* Animated Gradient Spotlight with Mouse Tracking */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute w-[900px] h-[900px] rounded-full bg-gradient-to-r from-purple-600/25 via-pink-500/25 to-blue-500/25 blur-[180px] animate-pulse pointer-events-none"
      />

      {/* Interactive Floating Code Symbols */}
      <motion.span
        animate={{
          y: [0, -18, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] top-[30%] text-purple-400/40 text-5xl font-bold cursor-pointer hover:text-purple-400/80 transition-colors"
      >
        {"</>"}
      </motion.span>

      <motion.span
        animate={{
          y: [0, -18, 0],
          rotate: [0, -5, 0, 5, 0],
        }}
        whileHover={{ scale: 1.2, rotate: -360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[14%] top-[35%] text-pink-400/40 text-5xl font-bold cursor-pointer hover:text-pink-400/80 transition-colors"
      >
        {"{}"}
      </motion.span>

      {/* Additional Floating Elements */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute left-[5%] bottom-[25%] w-16 h-16 border-2 border-cyan-500/30 rounded-lg backdrop-blur-sm pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute right-[8%] bottom-[30%] w-20 h-20 border-2 border-purple-500/30 rounded-full backdrop-blur-sm pointer-events-none"
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * -200 - 100],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeOut",
          }}
          className="absolute w-1 h-1 bg-purple-400 rounded-full pointer-events-none"
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10">
        {/* Heading with Enhanced Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]"
        >
          Hey, I&apos;m{" "}
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-[length:200%_auto] cursor-pointer inline-block"
            style={{
              filter: isHovering
                ? "drop-shadow(0 0 30px rgba(168, 85, 247, 0.8))"
                : "drop-shadow(0 0 15px rgba(168, 85, 247, 0.4))",
            }}
          >
            <motion.span
              animate={isHovering ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              Ayush Aka CodewithLord
            </motion.span>
          </motion.span>
        </motion.h1>

        {/* Subtitle with Typewriter Effect */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed"
        >
          A Front-End Developer passionate about crafting modern, responsive, and
          animated digital experiences.
        </motion.p>

        {/* Bio with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="mt-6 mx-auto max-w-2xl p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            Currently pursuing a Bachelor&apos;s degree in Information Technology (2nd
            Year). Skilled in{" "}
            <span className="text-purple-400 font-semibold">React</span>,{" "}
            <span className="text-cyan-400 font-semibold">Next.js</span>,{" "}
            <span className="text-pink-400 font-semibold">Tailwind CSS</span>, and{" "}
            <span className="text-blue-400 font-semibold">Framer Motion</span>. I love
            building smooth, creative, and interactive UIs.
          </p>
        </motion.div>

        {/* Enhanced CTA Button with Magnetic Effect */}
        <motion.a
          href="/contact"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
          whileHover={{
            scale: 1.07,
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-8 relative group cursor-pointer"
        >
          {/* Glowing Background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse bg-[length:200%_auto]" />
          
          {/* Button Content */}
          <div className="relative px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg flex items-center gap-2">
            <span>Let&apos;s Connect</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🚀
            </motion.span>
          </div>
        </motion.a>

        {/* Enhanced Tech Stack with Stagger Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                delay: 0.9 + index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.15,
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(168, 85, 247, 0.6)",
                backgroundColor: "rgba(168, 85, 247, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full bg-white/10 text-gray-300 border border-white/10 text-sm backdrop-blur-md hover:border-purple-500/50 hover:text-white transition-all cursor-pointer"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Floating Blobs with Parallax */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.1, 1],
        }}
        style={{
          x: mousePosition.x * -0.3,
          y: mousePosition.y * -0.3,
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[150px] bottom-20 left-20 pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        style={{
          x: mousePosition.x * 0.3,
          y: mousePosition.y * 0.3,
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[150px] top-20 right-20 pointer-events-none"
      />

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 flex flex-col items-center text-white/60 cursor-pointer group z-10"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-sm group-hover:text-white/90 transition-colors"
        >
          Scroll Down
        </motion.span>
        <motion.div
          animate={{
            height: ["20px", "28px", "20px"],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[2px] bg-gradient-to-b from-purple-400 via-pink-500 to-transparent mt-2 rounded-full"
        />
      </motion.div>

      {/* Cursor Follow Effect (Optional - for desktop) */}
      <motion.div
        className="hidden lg:block pointer-events-none absolute w-8 h-8 border-2 border-purple-500/30 rounded-full z-50"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </section>
  );
}