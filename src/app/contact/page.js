"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import emailjs from "@emailjs/browser";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [focusedField, setFocusedField] = useState(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["stnart end", "ed start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          to_name: "CodewithLord",
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
          setTimeout(() => setStatus(""), 3000);
        },
        (err) => {
          console.log("❌ ERROR:", err);
          setStatus("error");
          setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      detail: "ayushtemkar@gmail.com",
      color: "from-cyan-500 to-blue-500",
      link: "mailto:ayushtemkar2@gmail.com",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      detail: "Connect with me",
      color: "from-blue-500 to-blue-700",
      link: "https://www.linkedin.com/in/ayush-temkar-03b26a28a/",
    },
    {
      icon: "🐙",
      title: "GitHub",
      detail: "@CodewithLord",
      color: "from-gray-600 to-gray-800",
      link: "https://github.com/CodewithLordDev",
    },
    {
      icon: "🎬",
      title: "YouTube",
      detail: "CodewithLord",
      color: "from-red-500 to-red-700",
      link: "https://youtube.com/@CodewithLord",
    },
  ];

  const links = [
    { emoji: "💬", url: "/contact" },
    { emoji: "🌐", url: "https://portfolio-ochre-rho-ax0gh5qo21.vercel.app/" },
    { emoji: "✉️", url: "mailto:ayushtemkar2@gmail.com" },
  ];

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b  text-white overflow-hidden"
    >
      {/* Background Grid from-[#090909] via-[#0d0d0d] to-[#151515] */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div> */}

      {/* Animated Gradient Blobs with Parallax */}
      <motion.div
        style={{ y }}
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[180px] top-10 left-20"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        animate={{ y: [0, 20, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[180px] bottom-10 right-20"
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x:
              Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1000),
            y:
              Math.random() *
              (typeof window !== "undefined" ? window.innerHeight : 1000),
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * -300 - 100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeOut",
          }}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full pointer-events-none"
        />
      ))}

      <div className="relative z-10 max-w-6xl w-full">
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-[length:200%_auto]"
          >
            Let &apos;s Connect
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full"
          />
          <p className="text-white/60 mt-4 text-lg">
            Have a project in mind? Let&apos;s make it happen! 🚀
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Get In Touch
              </h3>
              <p className="text-white/70 leading-relaxed mb-8">
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach out
                through any of these channels!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    x: 10,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden"
                >
                  {/* Animated Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                  />

                  <div className="relative flex items-center gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`text-5xl w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br ${method.color} bg-opacity-20`}
                    >
                      {method.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-lg">
                        {method.title}
                      </h4>
                      <p className="text-white/60 text-sm">{method.detail}</p>
                    </div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-white/40 group-hover:text-white/80 transition-colors"
                    >
                      →
                    </motion.div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links Quick Access */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 pt-6"
            >
              {links.map((item, i) => (
                <Link key={i} href={item.url} target="_blank">
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all"
                  >
                    {item.emoji}
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glowing Border Effect */}
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-30"
            />

            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Send Me a Message
              </h3>

              <div className="space-y-5">
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="relative"
                >
                  <motion.div
                    animate={
                      focusedField === "name" ? { scale: 1.02 } : { scale: 1 }
                    }
                    className="relative"
                  >
                    {focusedField === "name" && (
                      <motion.div
                        layoutId="inputGlow"
                        className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-50"
                      />
                    )}
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="relative w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:border-cyan-500 transition-all"
                    />
                  </motion.div>
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <motion.div
                    animate={
                      focusedField === "email" ? { scale: 1.02 } : { scale: 1 }
                    }
                    className="relative"
                  >
                    {focusedField === "email" && (
                      <motion.div
                        layoutId="inputGlow"
                        className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-50"
                      />
                    )}
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="relative w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:border-purple-500 transition-all"
                    />
                  </motion.div>
                </motion.div>

                {/* Message Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <motion.div
                    animate={
                      focusedField === "message"
                        ? { scale: 1.02 }
                        : { scale: 1 }
                    }
                    className="relative"
                  >
                    {focusedField === "message" && (
                      <motion.div
                        layoutId="inputGlow"
                        className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-xl blur opacity-50"
                      />
                    )}
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="relative w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:border-pink-500 transition-all resize-none"
                    />
                  </motion.div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === "sending"}
                  className="relative w-full group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl opacity-100 group-hover:opacity-80 transition-opacity" />
                  <div className="relative px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg flex items-center justify-center gap-2">
                    {status === "sending" && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    )}
                    <span>
                      {status === "sending"
                        ? "Sending..."
                        : status === "success"
                        ? "Message Sent! ✅"
                        : status === "error"
                        ? "Failed to send ❌"
                        : "Send Message 🚀"}
                    </span>
                  </div>
                </motion.button>

                {/* Success/Error Message */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-300"
                  >
                    Thanks for reaching out! I&apos;ll get back to you soon. 🎉
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-300"
                  >
                    Oops! Something went wrong. Please try again.
                  </motion.div>
                )}
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
