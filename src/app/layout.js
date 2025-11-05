"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CodewithLord | Front-End Developer & Web Designer | React, Next.js, JavaScript Expert",
  description:
    "CodewithLord is a creative Front-End Developer who builds responsive, modern, and interactive web experiences using React, Next.js, Tailwind CSS, and JavaScript. Explore projects, UI designs, and smooth animations crafted with clean and efficient code.",
  keywords: [
    "CodewithLord",
    "Front End Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "Tailwind CSS",
    "Portfolio",
    "Web Designer",
    "Responsive Design",
    "UI/UX Developer",
    "CodewithLord Portfolio",
    "CodewithLord Projects",
  ],
  authors: [{ name: "CodewithLord", url: "https://yourdomain.com" }],
  creator: "CodewithLord",
  publisher: "CodewithLord",
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "https://yourdomain.com",
  },
  openGraph: {
    title: "CodewithLord | Front-End Developer & Web Designer",
    description:
      "Explore CodewithLord’s portfolio showcasing creative front-end projects built with React, Next.js, and JavaScript. Discover modern UI designs and interactive websites.",
    url: "https://yourdomain.com",
    siteName: "CodewithLord Portfolio",
    images: [
      {
        url: "https://yourdomain.com/Assets/Images/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "CodewithLord Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodewithLord | Front-End Developer & Web Designer",
    description:
      "Discover CodewithLord’s modern web projects crafted using React, Next.js, and JavaScript.",
    images: ["https://yourdomain.com/Assets/Images/portfolio-preview.png"],
    creator: "@CodewithLord",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideLayout = pathname === "/404"; // Hide layout for 404 page
  return (
    <html lang="en">
      <body
        className="bg-black text-white font-sans"
      ><AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen overflow-x-hidden"
          >
          {!hideLayout && <Navbar/>}
        {children}
        {!hideLayout && <Footer />}
        </motion.main>
        </AnimatePresence>
      </body>
    </html>
  );
}
