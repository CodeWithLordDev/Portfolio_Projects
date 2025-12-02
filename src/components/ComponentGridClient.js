"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ComponentGridClient({ shown }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mt-12 z-10 mb-12"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            UI Components
            <span className="text-gray-600">.</span>
          </h1>
          <p className="text-gray-400 text-center mt-4 text-sm max-w-2xl mx-auto">
            Minimal, reusable components crafted with precision
          </p>
        </div>
      </motion.div>
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {shown.map((comp) => (
        <motion.div
          key={comp.slug}
          variants={itemVariants}
          whileHover={{ y: -4 }}
          className="group"
        >
          <Link href={`/components/${comp.slug}`}>
            <div className="relative overflow-hidden rounded-lg border border-gray-800/50 hover:border-gray-700 transition-all duration-300 bg-gray-900/30">
              <div className="relative h-40 overflow-hidden bg-gray-800/50">
                <Image
                  width={400}
                  height={160}
                  src={comp.image}
                  alt={comp.title}
                  priority
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <h2 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors duration-300">
                  {comp.title}
                </h2>
                <p className="text-gray-500 text-xs mt-3 line-clamp-2">
                  {comp.description}
                </p>
                <span className="text-xs font-mono text-gray-600 group-hover:text-gray-400">→</span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div></>
  );
}
