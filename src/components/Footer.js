"use client";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/CodeWithLordDev/" },
    { icon: <FaInstagram />, url: "https://instagram.com/codewithlord" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/@CodewithLord" }, // Added YouTube

  ];

  return (
    <footer className="relative bg-black/80 backdrop-blur-xl border-t border-white/20 py-6 px-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

      {/* Left Side: Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white text-lg font-semibold"
      >
        &copy; {new Date().getFullYear()} CodewithLord
      </motion.div>

      {/* Middle: Policy Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-4 text-gray-400 text-sm"
      >
        <a href="/PrivacyPolicy" className="hover:text-purple-400 transition-colors">
          Privacy Policy
        </a>
        <span className="text-gray-600">|</span>
        <a href="/terms" className="hover:text-purple-400 transition-colors">
          Terms & Conditions
        </a>
        <span className="text-gray-600">|</span>
        <a href="/Disclaimer" className="hover:text-purple-400 transition-colors">
          Disclaimer
        </a>
      </motion.div>

      {/* Right Side: Social Icons */}
      <motion.div
        className="flex gap-6 text-white text-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {socialLinks.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.2 }}
            className="transition-colors hover:text-purple-400"
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>

    </footer>
  );
}
