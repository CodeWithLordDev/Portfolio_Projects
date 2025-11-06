"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideLayout = pathname === "/404"; // Hide layout for 404

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 5000); // simulate loading time
    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen overflow-x-hidden"
          >
            {!hideLayout && <Navbar />}
            {loading ? <Loader /> : children }
            {!hideLayout && <Footer />}
          </motion.main>
        </AnimatePresence>
      </body>
    </html>
  );
}
