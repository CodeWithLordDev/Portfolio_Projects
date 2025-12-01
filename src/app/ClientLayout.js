"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for page to fully load
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      const handleLoad = () => setLoading(false);
      window.addEventListener("load", handleLoad);
      
      // Fallback timeout (max 3 seconds)
      const timeout = setTimeout(() => setLoading(false), 3000);
      
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(timeout);
      };
    }
  }, []);

  // Show loader when route changes
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Loader />
        </motion.div>
      ) : (
        <motion.main
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen overflow-x-hidden"
        >
          {children}
        </motion.main>
      )}
    </AnimatePresence>
  );
}