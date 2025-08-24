"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaTrophy, FaUsers, FaBullseye, FaFootballBall, FaBasketballBall, FaRunning, FaTableTennis, FaGolfBall, FaVolleyballBall } from "react-icons/fa";
import demoImage from "@/public/Slider-Lagos-Tigers-Basketball-Launch-2024-.jpg"; // Use your actual hero image

export default function About() {
  const { toggleTheme } = useTheme();

  // Team data with expanded coaches
  const teamMembers = [
    { name: "John Doe", role: "Founder & CEO", bio: "With 20+ years in sports management, John founded Agroterra to nurture talent.", image: demoImage },
    { name: "Jane Smith", role: "Head Coach (Athletics)", bio: "Olympic medalist shaping future track stars.", image: demoImage },
    { name: "Mike Johnson", role: "Basketball Coach", bio: "Ex-pro player mentoring youth with strategic expertise.", image: demoImage },
    { name: "Sarah Lee", role: "Operations Manager", bio: "Oversees operations for top-tier facilities.", image: demoImage },
    { name: "Tom Brown", role: "Tennis Coach", bio: "Former national player coaching precision and agility.", image: demoImage },
    { name: "Emma Wilson", role: "Table Tennis Coach", bio: "Specialist in fast-paced techniques and strategy.", image: demoImage },
    { name: "David Kim", role: "Squash Coach", bio: "Brings international experience to squash training.", image: demoImage },
    { name: "Laura Adams", role: "Golf Coach", bio: "Expert in golf techniques for aspiring pros.", image: demoImage },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className={`min-h-screen pt-16 ${toggleTheme ? "bg-slate-900 text-emerald-100" : "bg-gray-50 text-slate-900"} transition-colors duration-300`}>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={demoImage}
          alt="About Agroterra Hero"
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
            About Agroterra Sport Academy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl mb-8 text-gray-200"
          >
            Empowering athletes to reach their full potential since 2024.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:shadow-lg hover:shadow-emerald-500/50"
            >
              Join Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-800" : "bg-gray-100"} relative z-10`}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-emerald-500"
          >
            Our Story
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`text-lg leading-relaxed text-center max-w-4xl mx-auto ${toggleTheme ? "text-slate-300" : "text-slate-600"}`}
          >
            Agroterra Sport Academy was founded in 2024 in Lagos, Nigeria, by a group of passionate sports enthusiasts led by John Doe, a veteran with over two decades in sports management. Inspired by the lack of accessible, high-quality training facilities for young athletes in Africa, the academy was born out of a vision to bridge this gap and nurture talent across diverse sports. Starting as a modest training center, Agroterra quickly grew into a premier institution, offering programs in football, basketball, athletics, tennis, table tennis, squash, and golf, supported by state-of-the-art facilities and a dedicated team of coaches. The academy operates through a structured system, combining rigorous training schedules, personalized coaching, and holistic development programs that include nutrition, mental conditioning, and life skills. Our next goal is to expand internationally, establishing satellite academies across Africa by 2027, while our immediate steps include hosting the Agroterra Invitational Tournament in 2026 to showcase our athletes. With a commitment to producing national stars and global champions, Agroterra continues to pave the way for the next generation of athletes.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-900" : "bg-white"} relative z-10`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-emerald-500">Our Mission</h2>
            <p className={`text-lg mb-6 ${toggleTheme ? "text-slate-300" : "text-slate-600"}`}>
              At Agroterra Sport Academy, our mission is to provide world-class training across football, basketball, athletics, tennis, table tennis, squash, and golf, empowering athletes to excel in sports and life.
            </p>
            <div className="flex items-center gap-4 text-emerald-500">
              <FaBullseye size={24} />
              <span className="font-semibold">Holistic athlete development</span>
            </div>
          </motion.div>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-emerald-500">Our Vision</h2>
            <p className={`text-lg mb-6 ${toggleTheme ? "text-slate-300" : "text-slate-600"}`}>
              To be Africa&apos;s premier sports academy, producing national stars and global champions while fostering sportsmanship and innovation across multiple disciplines.
            </p>
            <div className="flex items-center gap-4 text-emerald-500">
              <FaTrophy size={24} />
              <span className="font-semibold">Champions of tomorrow</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sports Programs Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-800" : "bg-gray-100"} relative z-10`}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-emerald-500"
          >
            Our Sports Programs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg shadow-lg bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors duration-300"
            >
              <FaFootballBall className="mx-auto text-emerald-500" size={48} />
              <h3 className="text-xl font-bold mt-4 mb-2">Football</h3>
              <p className={`${toggleTheme ? "text-slate-300" : "text-slate-600"}`}>Elite training for future football stars.</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 rounded-lg shadow-lg bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors duration-300"
            >
              <FaBasketballBall className="mx-auto text-emerald-500" size={48} />
              <h3 className="text-xl font-bold mt-4 mb-2">Basketball</h3>
              <p className={`${toggleTheme ? "text-slate-300" : "text-slate-600"}`}>Skill-building for basketball talent.</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 rounded-lg shadow-lg bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors duration-300"
            >
              <FaRunning className="mx-auto text-emerald-500" size={48} />
              <h3 className="text-xl font-bold mt-4 mb-2">Athletics</h3>
              <p className={`${toggleTheme ? "text-slate-300" : "text-slate-600"}`}>Track and field excellence training.</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-6 rounded-lg shadow-lg bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors duration-300"
            >
              <FaTableTennis className="mx-auto text-emerald-500" size={48} />
              <h3 className="text-xl font-bold mt-4 mb-2">Table Tennis</h3>
              <p className={`${toggleTheme ? "text-slate-300" : "text-slate-600"}`}>Fast-paced skill development.</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center p-6 rounded-lg shadow-lg bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors duration-300"
            >
              <FaGolfBall className="mx-auto text-emerald-500" size={48} />
              <h3 className="text-xl font-bold mt-4 mb-2">Golf</h3>
              <p className={`${toggleTheme ? "text-slate-300" : "text-slate-600"}`}>Precision training for golf pros.</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center p-6 rounded-lg shadow-lg bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors duration-300"
            >
              <FaVolleyballBall className="mx-auto text-emerald-500" size={48} />
              <h3 className="text-xl font-bold mt-4 mb-2">Tennis</h3>
              <p className={`${toggleTheme ? "text-slate-300" : "text-slate-600"}`}>Agility and strategy training.</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center p-6 rounded-lg shadow-lg bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors duration-300"
            >
              <FaVolleyballBall className="mx-auto text-emerald-500" size={48} />
              <h3 className="text-xl font-bold mt-4 mb-2">Squash</h3>
              <p className={`${toggleTheme ? "text-slate-300" : "text-slate-600"}`}>Dynamic training for squash players.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History & Achievements Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-900" : "bg-gray-100"} relative z-10`}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-emerald-500"
          >
            Our Journey & Success
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`text-lg text-center mb-8 max-w-3xl mx-auto ${toggleTheme ? "text-slate-300" : "text-slate-600"}`}
          >
            Founded in 2024 in Lagos, Agroterra has grown into a leading academy, training athletes in football, basketball, athletics, tennis, table tennis, squash, and golf. We&apos;ve produced national stars like [Star Name] and athletes such as [Athlete Name] who&apos;ve continued to international success.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <FaUsers className="mx-auto text-emerald-500" size={48} />
              <h3 className="text-xl font-bold mt-4 mb-2">Expert Coaches</h3>
              <p className={`${toggleTheme ? "text-slate-400" : "text-slate-600"}`}>A dedicated team across all sports.</p>
            </div>
            <div className="text-center">
              <FaTrophy className="mx-auto text-emerald-500" size={48} />
              <h3 className="text-xl font-bold mt-4 mb-2">National Stars</h3>
              <p className={`${toggleTheme ? "text-slate-400" : "text-slate-600"}`}>Proud producers of top athletes.</p>
            </div>
            <div className="text-center">
              <FaRunning className="mx-auto text-emerald-500" size={48} />
              <h3 className="text-xl font-bold mt-4 mb-2">Global Path</h3>
              <p className={`${toggleTheme ? "text-slate-400" : "text-slate-600"}`}>Athletes advancing worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-800" : "bg-white"} relative z-10`}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-emerald-500"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className={`rounded-2xl overflow-hidden shadow-lg border ${toggleTheme ? "bg-slate-900 border-emerald-500/30" : "bg-white border-emerald-200/50"}`}
              >
                <div className="relative h-48">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                    quality={80}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className={`text-xl font-bold mb-1 ${toggleTheme ? "text-emerald-100" : "text-emerald-600"}`}>{member.name}</h3>
                  <p className={`text-sm font-semibold mb-2 text-emerald-400`}>{member.role}</p>
                  <p className={`text-sm ${toggleTheme ? "text-slate-300" : "text-slate-600"}`}>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-800" : "bg-gray-100"} text-center relative z-10`}>
        <motion.h2
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-4 text-emerald-500"
        >
          Join the Agroterra Family
        </motion.h2>
        <motion.p
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-lg mb-8 ${toggleTheme ? "text-slate-300" : "text-slate-600"} max-w-2xl mx-auto`}
        >
          Be part of our journey to create champions across multiple sports. Contact us today!
        </motion.p>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:shadow-lg hover:shadow-emerald-500/50"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}