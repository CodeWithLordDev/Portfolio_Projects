"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/CodeWithLordDev/CodeWithLordDev/blob/main/README.md"},
    // { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername" },
    // { icon: <FaTwitter />, url: "https://twitter.com/yourusername" },
    { icon: <FaInstagram />, url: "https://instagram.com/codewithlord" },
  ];

  return (
    <footer className="relative bg-black/80 backdrop-blur-xl border-t border-white/20 py-6 px-8 flex flex-col md:flex-row items-center justify-between">
      
      {/* Left Side: Name / Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white text-lg font-semibold"
      >
        &copy; {new Date().getFullYear()} CodewithLord
      </motion.div>

      {/* Right Side: Social Icons */}
      <motion.div
        className="flex gap-6 text-white text-2xl mt-4 md:mt-0"
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
