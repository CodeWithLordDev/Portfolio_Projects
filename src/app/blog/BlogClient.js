"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BackgroundGrid from "@/components/BackgroundGrid";

export default function BlogClient({ blogs }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main className="min-h-screen relative bg-black text-white p-6 md:p-8">
      <BackgroundGrid />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mt-14 z-10 mb-16"
      >
        <div className="max-w-7xl  mx-auto text-center">
          
          <h1 className="text-3xl md:text-5xl font-bold">
            Latest Articles<span className="text-gray-600">.</span>
          </h1>
          <p className="text-gray-400 mt-4 text-sm max-w-2xl mx-auto">
            Insights, tutorials, and technical deep dives
          </p>
        </div>
      </motion.div>

      {/* Blog Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {blogs.map((data) => (
          <motion.div
            key={data.slug}
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group"
          >
            <Link href={`/blogpost/${data.slug}`}>
              <div className="h-full flex flex-col rounded-lg border border-gray-800/50 hover:border-gray-700 transition-all duration-300 bg-gray-900/30 overflow-hidden">
                
                {/* Image */}
                <div className="relative h-40 overflow-hidden bg-gray-800/50">
                  <Image
                    src={data.image}
                    alt={data.title}
                    width={400}
                    height={160}
                    priority
                    className="w-full h-full object-contain
                     group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-xs text-gray-500 font-mono">
                    {new Date(data.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>

                  <h2 className="text-lg font-semibold text-white mt-3 group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                    {data.title}
                  </h2>

                  <p className="text-gray-400 text-sm mt-3 line-clamp-3 flex-grow">
                    {data.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-800/50 flex justify-between items-center">
                    <span className="text-xs text-gray-500">{data.author}</span>
                    <span className="text-gray-600 group-hover:text-gray-400 transition-colors duration-300">
                      <span className="text-xs font-mono">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
