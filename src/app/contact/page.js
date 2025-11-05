"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    console.log("SERVICE ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log("TEMPLATE ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    console.log("PUBLIC KEY:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          to_name: "CodewithLord", // must match your template variable
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (res) => {
          console.log("✅ SUCCESS:", res);
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("❌ ERROR:", err);
          setStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-[#090909] via-[#0d0d0d] to-[#151515] text-white overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      {/* Animated Gradient Blobs */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[180px] top-10 left-20"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[180px] bottom-10 right-20"
      />

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-xl w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 flex flex-col gap-6 shadow-lg"
      >
        <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-white/60 mb-6">
          Let’s collaborate or discuss your next project! 🚀
        </p>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition resize-none"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={status === "sending"}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-md hover:shadow-pink-500/40 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending"
            ? "Sending..."
            : status === "success"
            ? "Message Sent ✅"
            : status === "error"
            ? "Error ❌"
            : "Send Message"}
        </motion.button>
      </motion.form>
    </section>
  );
}
