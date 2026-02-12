"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.05)", "rgba(255, 255, 255, 0.1)"]
  );

 

  const links = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "About", href: "/about", icon: "👤" },
    { name: "Components", href: "/components", icon: "🧩" },
    { name: "Blog", href: "/blog", icon: "📝" },
    { name: "Contact", href: "/contact", icon: "📧" },
    { name: "Services", href: "/services", icon: "" },
    { name: "Learn", href: "/learn", icon: "" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 

  return (
    <>
      {/* Glassmorphism Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        style={{ backgroundColor }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[85%] lg:w-[75%] backdrop-blur-xl border shadow-2xl rounded-2xl px-4 md:px-6 py-3 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? "border-white/30 shadow-purple-500/20"
            : "border-white/20"
        }`}
      >
        {/* LOGO with Animated Gradient */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group cursor-pointer"
          >
            <motion.h1
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="text-xl md:text-2xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-400 to-pink-500 bg-[length:200%_auto]"
            >
              CodewithLord
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-purple-400"
              >
                .
              </motion.span>
            </motion.h1>
            {/* Animated Underline on Hover */}
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </Link>

        {/* DESKTOP LINKS with Active Indicator */}
        <div className="hidden md:flex gap-1 text-white/80 text-sm font-medium items-center">
          {links.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link key={i} href={link.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-4 py-2 rounded-xl overflow-hidden group"
                >
                  {/* Background Glow on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
                    layoutId={isActive ? "activeTab" : undefined}
                  />
                  
                  {/* Active Tab Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-xl"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Link Content */}
                  <span className="relative flex items-center gap-2 group-hover:text-white transition-colors">
                    <span className="text-base">{link.icon}</span>
                    <span>{link.name}</span>
                  </span>

                  {/* Bottom Border on Active */}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}

          
        </div>

        {/* MOBILE MENU TOGGLE - Animated Hamburger */}
        <motion.button
          onClick={() => setActive(!active)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
        >
          <motion.span
            animate={active ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white rounded-full transition-all"
          />
          <motion.span
            animate={active ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white rounded-full transition-all"
          />
          <motion.span
            animate={active ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white rounded-full transition-all"
          />
        </motion.button>
      </motion.nav>

      {/* MOBILE DROPDOWN MENU - Full Screen Overlay */}
      {active && (
        <>
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          />

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] backdrop-blur-2xl border border-white/20 rounded-3xl p-6 z-50 md:hidden shadow-2xl shadow-purple-500/20"
          >
            {/* Mobile Menu Header */}
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold text-white mb-1">Navigation</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full" />
            </div>

            {/* Mobile Links with Stagger Animation */}
            <div className="flex flex-col gap-2">
              {links.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setActive(false)}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02, x: 10 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative px-5 py-4 rounded-2xl overflow-hidden group ${
                          isActive
                            ? "bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/50"
                            : "bg-white/5 border border-white/10"
                        }`}
                      >
                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="relative flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{link.icon}</span>
                            <span className="text-white/90 group-hover:text-white font-medium transition-colors">
                              {link.name}
                            </span>
                          </div>
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-white/40 group-hover:text-white/80"
                          >
                            →
                          </motion.span>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}

            
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}