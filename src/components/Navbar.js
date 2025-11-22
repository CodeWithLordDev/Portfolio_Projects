"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const links = ["Home","About","Components","Blog","Contact"];
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[75%] bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl px-6 py-3 flex justify-between items-center"
    >
      {/* LOGO */}
      <h1 className="text-xl font-bold tracking-wide text-white">
        CodewithLord<span className="text-purple-400">.</span>
      </h1>

      {/* LINKS */}
      <div className="hidden md:flex gap-8 text-white/80 text-sm font-medium">
        {links.map((linkss, i) => (
          <Link
            key={i}
            href={linkss === "Home" ? "/" : `/${linkss.toLowerCase()}`}
            className="hover:text-white transition"
          >
            {linkss}
          </Link>
        ))}
      </div>

      {/* AUTH BUTTONS */}
      {/* <div className="hidden md:flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2 rounded-xl border border-white/30 text-white/90 bg-white/10 hover:bg-white/20 backdrop-blur-lg transition"
        >
          Sign In
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-md hover:shadow-pink-500/40 transition"
        >
          Sign Up
        </motion.button>
      </div> */}

      {/* MOBILE MENU TOGGLE */}
      <div className="md:hidden">
        <button
          onClick={() => setActive(!active)}
          className="text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {active && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 left-0 w-full bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex flex-col gap-3 md:hidden"
        >
          {["Home", "About","Components","Blog","Contact"].map((link, i) => (
            <a
              key={i}
              href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              onClick={() => setActive(false)}
              className="text-white/90 hover:text-white transition"
            >
              {link}
            </a>
          ))}
          {/* <hr className="border-white/20 my-2" />
          <button className="px-4 py-2 rounded-xl border border-white/30 text-white/90 bg-white/10 hover:bg-white/20 backdrop-blur-lg transition">
            Sign In
          </button>
          <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-md hover:shadow-pink-500/40 transition">
            Sign Up
          </button> */}
        </motion.div>
      )}
    </motion.nav>
  );
}
