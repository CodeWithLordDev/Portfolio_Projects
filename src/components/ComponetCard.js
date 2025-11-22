"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ComponentCard({ component }) {
  return (
    <Link href={`/components/${component.id}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
      >
        <Image
          src={component.image}
          alt={component.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-white mb-2">
            {component.title}
          </h2>
          <p className="text-gray-400 text-sm line-clamp-2">
            {component.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
