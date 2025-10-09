"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import demoImage from "@/public/IMG_20231014_074350.jpg";

export default function Contact() {
  const { toggleTheme } = useTheme();

  // Current date and time
  const currentDate = new Date().toLocaleString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Lagos",
    hour12: true,
  }); // Outputs: "Sunday, August 24, 2025, 06:42 AM WAT"

  return (
    <div className={`min-h-screen pt-16 ${toggleTheme ? "bg-slate-900 text-emerald-100" : "bg-gray-50 text-slate-900"} transition-colors duration-300`}>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src={demoImage}
          alt="Contact Hero"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-green-500 text-transparent bg-clip-text"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl mb-8 text-gray-200"
          >
            Get in touch with Agroterra Sport Academy today!
          </motion.p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-800" : "bg-gray-100"} relative z-10`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <FaEnvelope className={`text-4xl mx-auto mb-4 ${toggleTheme ? "text-emerald-400" : "text-emerald-600"}`} />
            <h3 className={`text-xl font-bold mb-2 ${toggleTheme ? "text-emerald-100" : "text-emerald-600"}`}>Email</h3>
            <p className={`text-lg ${toggleTheme ? "text-slate-300" : "text-slate-600"}`}>info@agroterrasport.com</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <FaPhone className={`text-4xl mx-auto mb-4 ${toggleTheme ? "text-emerald-400" : "text-emerald-600"}`} />
            <h3 className={`text-xl font-bold mb-2 ${toggleTheme ? "text-emerald-100" : "text-emerald-600"}`}>Phone</h3>
            <p className={`text-lg ${toggleTheme ? "text-slate-300" : "text-slate-600"}`}>+234 123 456 7890</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <FaMapMarkerAlt className={`text-4xl mx-auto mb-4 ${toggleTheme ? "text-emerald-400" : "text-emerald-600"}`} />
            <h3 className={`text-xl font-bold mb-2 ${toggleTheme ? "text-emerald-100" : "text-emerald-600"}`}>Location</h3>
            <p className={`text-lg ${toggleTheme ? "text-slate-300" : "text-slate-600"}`}>Lekki, Lagos, Nigeria</p>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-900" : "bg-white"} relative z-10`}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-6 text-emerald-500"
          >
            Connect With Us
          </motion.h2>
          <div className="flex justify-center gap-6">
            {[
              { href: "https://facebook.com", icon: FaFacebook, label: "Facebook" },
              { href: "https://twitter.com", icon: FaTwitter, label: "Twitter" },
              { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
              { href: "https://linkedin.com", icon: FaLinkedin, label: "LinkedIn" },
            ].map((social) => (
              <motion.a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
                className={`text-3xl ${toggleTheme ? "text-emerald-400 hover:text-emerald-300" : "text-emerald-600 hover:text-emerald-500"} transition-colors duration-300`}
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-800" : "bg-gray-100"} relative z-10`}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-emerald-500"
          >
            Send Us a Message
          </motion.h2>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto space-y-6"
          >
            <div>
              <label htmlFor="name" className={`block text-sm font-medium ${toggleTheme ? "text-slate-300" : "text-slate-700"} mb-1`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full px-4 py-2 rounded-lg border ${toggleTheme ? "bg-slate-700 border-slate-600 text-emerald-100" : "bg-white border-gray-300 text-slate-900"} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className={`block text-sm font-medium ${toggleTheme ? "text-slate-300" : "text-slate-700"} mb-1`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-4 py-2 rounded-lg border ${toggleTheme ? "bg-slate-700 border-slate-600 text-emerald-100" : "bg-white border-gray-300 text-slate-900"} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className={`block text-sm font-medium ${toggleTheme ? "text-slate-300" : "text-slate-700"} mb-1`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`w-full px-4 py-2 rounded-lg border ${toggleTheme ? "bg-slate-700 border-slate-600 text-emerald-100" : "bg-white border-gray-300 text-slate-900"} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                placeholder="Your message here..."
                required
              />
            </div>
            <motion.button
              type="submit"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full px-6 py-3 rounded-full font-semibold text-lg bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:bg-emerald-600 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>
          <p className={`text-center mt-4 text-sm ${toggleTheme ? "text-slate-400" : "text-slate-600"}`}>
            Current Date & Time: {currentDate}
          </p>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-900" : "bg-white"} relative z-10`}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-emerald-500"
          >
            Find Us
          </motion.h2>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <div className={`w-full h-full ${toggleTheme ? "bg-slate-700" : "bg-gray-300"} flex items-center justify-center text-lg ${toggleTheme ? "text-slate-300" : "text-slate-600"}`}>
              Map Placeholder (Integrate Google Maps API here)
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}