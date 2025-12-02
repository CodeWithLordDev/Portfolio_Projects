"use client";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/CodeWithLordDev/" },
    { icon: <FaInstagram />, url: "https://instagram.com/codewithlord" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/@CodewithLord" },
  ];

  const policyLinks = [
    { name: "Privacy", href: "/PrivacyPolicy" },
    { name: "Terms", href: "/terms" },
    { name: "Disclaimer", href: "/Disclaimer" },
  ];

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-black border-t border-gray-800/50 py-8 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left: Branding & Year */}
          <motion.div variants={itemVariants} className="text-gray-400 text-sm">
            <p>
              <span className="text-white font-semibold">CodewithLord</span>
              <span className="text-gray-600"> • </span>
              <span>{new Date().getFullYear()}</span>
            </p>
          </motion.div>

          {/* Center: Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 text-sm"
          >
            {policyLinks.map((link, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <a
                  href={link.href}
                  className="text-gray-500 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
                {idx < policyLinks.length - 1 && (
                  <span className="text-gray-700">•</span>
                )}
              </div>
            ))}
          </motion.div>

          {/* Right: Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex gap-5 text-gray-400"
          >
            {socialLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  color: "#ffffff",
                  scale: 1.15,
                }}
                whileTap={{ scale: 0.95 }}
                className="text-lg transition-colors duration-300 cursor-pointer"
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="mt-6 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"
        />

        {/* Bottom: Tech Stack Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-4 text-center text-xs text-gray-600"
        >
          Built with <span className="text-gray-500">Next.js</span> &
          <span className="text-gray-500"> Framer Motion</span>
        </motion.div>
      </motion.div>
    </footer>
  );
}