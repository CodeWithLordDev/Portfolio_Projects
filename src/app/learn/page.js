"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Palette, Braces } from "lucide-react";

const topics = [
  {
    title: "HTML",
    description: "Learn structure, tags, semantics & how the web works.",
    href: "/learn/html",
    icon: <Code size={40} />,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "CSS",
    description: "Style websites with layouts, animations & responsive design.",
    href: "/learn/css",
    icon: <Palette size={40} />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "JavaScript",
    description: "Add logic, interactivity & dynamic behavior to web apps.",
    href: "/learn/javascript",
    icon: <Braces size={40} />,
    color: "from-yellow-400 to-amber-500",
  },
];

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center px-6">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Start Learning Web Development 🚀
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Choose a technology and start your journey from basics to advanced concepts.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {topics.map((topic, index) => (
          <motion.div
            key={topic.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <Link href={topic.href}>
              <div className="group relative h-full cursor-pointer rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-white/20">
                
                {/* Glow */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl bg-gradient-to-r ${topic.color}`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 flex items-center justify-center rounded-xl mb-6 bg-gradient-to-r ${topic.color}`}
                  >
                    {topic.icon}
                  </div>

                  <h2 className="text-2xl font-semibold mb-3">
                    {topic.title}
                  </h2>

                  <p className="text-gray-400 leading-relaxed">
                    {topic.description}
                  </p>

                  <span className="inline-block mt-6 text-sm font-medium text-white/80 group-hover:text-white">
                    Start Learning →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
