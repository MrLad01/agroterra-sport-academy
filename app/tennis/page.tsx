"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaTrophy, FaUsers, FaRunning, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import heroImage from "@/public/Slider-Lagos-Tigers-Basketball-Launch-2024-.jpg"; // Single image for all sections
import coach from '@/public/coach.jpg';
import court from '@/public/Screenshot 2025-09-06 161544.png';
import training from '@/public/Screenshot 2025-09-06 161902.png';
import gym1 from '@/public/Gym1.jpg';
import fac from "../../public/Screenshot 2025-09-06 154334.png";

export default function Tennis() {
  const { toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen pt-16 ${toggleTheme ? "bg-slate-900 text-emerald-100" : "bg-gray-50 text-slate-900"} transition-colors duration-300 font-sans`}>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-900/50 to-slate-900/50">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/Screenshot 2025-09-06 161621.png"
          className="absolute top-0 left-0 w-full h-full object-cover object-center brightness-100 scale-105"
        >
          <source src="/videos/tennis-1-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-xl sm:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-green-500 text-transparent bg-clip-text leading-tight"
          >
            Ace Your Future: Agroterra Tennis
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg mb-10 text-gray-200 leading-relaxed max-w-3xl mx-auto"
          >
            Dream of smashing serves, outsmarting opponents, and competing on global courts? At Agroterra, our tennis program transforms passion into precision with elite coaching, world-class courts, and a community built for champions. Your journey to tennis stardom starts here—ready to swing for greatness?
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full font-semibold text-lg sm:text-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-offset-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:shadow-xl hover:shadow-emerald-500/40"
            >
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-800" : "bg-gray-100"} relative z-10`}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-emerald-500"
          >
            Coaches Who Craft Champions
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}
          >
            Our coaches are former pros and strategic masterminds who’ve competed at high levels and now dedicate their expertise to shaping your tennis career. With personalized training, technical precision, and mental conditioning, they’ll help you dominate the court and aim for global rankings.
          </motion.p>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="mb-12"
          >
            <SwiperSlide>
              <div className={`relative p-6 rounded-2xl shadow-lg ${toggleTheme ? "bg-gradient-to-br from-emerald-800/20 to-slate-800/20" : "bg-white"}`}>
                <Image
                  src={coach}
                  alt="Adaeze Obi - Head Coach"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Adaeze Obi - Head Coach</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  A former national champion with 12 years of pro experience, Adaeze’s coaching blends power and finesse. &quot;Tennis is a mind game won with heart,&quot; she says, crafting tailored plans to elevate your serve, volley, and mental toughness for the big stage.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`relative p-6 rounded-2xl shadow-lg ${toggleTheme ? "bg-gradient-to-br from-emerald-800/20 to-slate-800/20" : "bg-white"}`}>
                <Image
                  src={coach}
                  alt="Tunde Afolabi - Technical Coach"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Tunde Afolabi - Technical Coach</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  A doubles specialist with a national title, Tunde focuses on precision and footwork. &quot;Every point is a battle,&quot; he believes, training players to master spins, angles, and agility to outmaneuver any opponent.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`relative p-6 rounded-2xl shadow-lg ${toggleTheme ? "bg-gradient-to-br from-emerald-800/20 to-slate-800/20" : "bg-white"}`}>
                <Image
                  src={coach}
                  alt="Ngozi Eke - Mental Conditioning Coach"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Ngozi Eke - Mental Conditioning Coach</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  With a background in sports psychology, Ngozi builds unshakable mental resilience. &quot;The court tests your mind first,&quot; she teaches, helping players stay calm under pressure and perform at their peak in high-stakes matches.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-lg sm:text-xl text-emerald-400"
          >
            These coaches are your key to unlocking tennis greatness. Ready to rally with the best?
          </motion.p>
        </div>
      </section>

      {/* Facilities Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-900" : "bg-white"} relative z-10`}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-emerald-500"
          >
            Courts Built for Champions
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}
          >
            Our tennis facilities are designed to elevate your game to professional levels. From ITF-standard courts to advanced training and recovery centers, Agroterra provides the perfect environment to hone your skills and prepare for competitive success. Step onto our courts and start your rise to the top.
          </motion.p>
          <div className="space-y-16">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={court}
                  alt="ITF-Standard Tennis Courts"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <FaRunning className="text-emerald-400 text-4xl mb-4" />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>ITF-Standard Tennis Courts</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Launched August 10, 2024, our ITF-standard courts feature high-performance surfaces and professional lighting. Perfect your serves, volleys, and groundstrokes in an environment built for precision and competitive play.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row-reverse items-center gap-8"
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={fac}
                  alt="Training Facility"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <FaUsers className="text-emerald-400 text-4xl mb-4" />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Elite Training Facility</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Opened March 2025, our training facility includes strength gyms, agility zones, and tennis-specific equipment. Build the power, speed, and endurance needed to dominate rallies and stand out in tournaments.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={gym1}
                  alt="Recovery Center"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <FaTrophy className="text-emerald-400 text-4xl mb-4" />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Advanced Recovery Center</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Introduced July 15, 2025, our recovery center offers physiotherapy, cryotherapy, and massage therapy tailored for tennis players. Recover faster, stay injury-free, and perform at your peak in every match.
                </p>
              </div>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center text-lg sm:text-xl text-emerald-400"
          >
            These courts are your stage for greatness. Step in and ace your tennis journey!
          </motion.p>
        </div>
      </section>

      {/* Training Program Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-800" : "bg-gray-100"} relative z-10`}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-emerald-500"
          >
            Training Programs: Your Path to the Pros
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}
          >
            Our tennis programs are designed to build champions from the ground up. With personalized coaching, competitive drills, and a focus on mental and physical excellence, we prepare you for tournaments and future scouting opportunities. Join Agroterra and start your climb to the top ranks.
          </motion.p>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="mb-12"
          >
            <SwiperSlide>
              <div className={`relative p-6 rounded-2xl shadow-lg ${toggleTheme ? "bg-gradient-to-br from-emerald-800/20 to-slate-800/20" : "bg-white"}`}>
                <Image
                  src={training}
                  alt="Junior Tennis Academy"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Junior Tennis Academy</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Launched in August 2025, our junior program for ages 8-18 focuses on fundamentals, technique, and competitive spirit. Build the skills to dominate local and regional tournaments and set the stage for a pro career.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`relative p-6 rounded-2xl shadow-lg ${toggleTheme ? "bg-gradient-to-br from-emerald-800/20 to-slate-800/20" : "bg-white"}`}>
                <Image
                  src={training}
                  alt="Elite Training Camps"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Elite Training Camps</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Starting in 2026, our intensive camps offer advanced training for competitive players. With match simulations and performance analytics, you’ll be ready to impress in tournaments and catch the eye of scouts.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-lg sm:text-xl text-emerald-400"
          >
            Our programs are your stepping stones to tennis stardom. Join Agroterra and serve your future!
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-800" : "bg-gray-100"} relative z-10`}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-emerald-500"
          >
            Moments of Mastery
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}
          >
            Every swing, every rally, every moment at Agroterra captures the passion and precision of tennis. Our gallery showcases the energy of players honing their craft on our courts. This is where your tennis journey begins—can you see yourself acing it here?
          </motion.p>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="rounded-2xl max-w-2xl mx-auto"
          >
            <SwiperSlide>
              <video
                autoPlay
                loop
                muted
                playsInline
                width={600}
                height={400}
                poster="/Screenshot 2025-09-06 161902.png"
                className="object-cover object-center brightness-100 rounded-xl shadow-lg"
              >
                <source src="/videos/tennis-1-1.mp4" type="video/mp4" />
              </video>
            </SwiperSlide>
          </Swiper>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center text-lg sm:text-xl text-emerald-400"
          >
            This is your court to conquer. Join Agroterra and make every shot count!
          </motion.p>
        </div>
      </section>

      {/* Location & Invitation Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-900" : "bg-white"} relative z-10`}>
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-emerald-500"
          >
            Your Tennis Destiny Awaits in Lagos
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl mb-10 ${toggleTheme ? "text-slate-300" : "text-slate-500"} max-w-3xl mx-auto`}
          >
            As of August 24, 2025, Agroterra Sport Academy in Lekki, Lagos, is the hub for aspiring tennis players. With world-class coaches, top-tier facilities, and a vision for competitive excellence, this is where your tennis dreams take flight. Don’t just aim for the court—join us and aim for the stars.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center items-center gap-4 mb-10"
          >
            <FaMapMarkerAlt className="text-emerald-400 text-3xl" />
            <span className={`text-lg sm:text-xl ${toggleTheme ? "text-emerald-100" : "text-emerald-400"}`}>Agroterra Sport Academy, Lekki, Lagos</span>
          </motion.div>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-6 mb-10"
          >
            <a href="https://facebook.com/agroterra" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 text-3xl transition-colors"><FaFacebook /></a>
            <a href="https://twitter.com/agroterra" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 text-3xl transition-colors"><FaTwitter /></a>
            <a href="https://instagram.com/agroterra" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 text-3xl transition-colors"><FaInstagram /></a>
            <a href="https://linkedin.com/agroterra" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 text-3xl transition-colors"><FaLinkedin /></a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full font-semibold text-lg sm:text-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-offset-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:shadow-xl hover:shadow-emerald-500/40"
            >
              Join Now & Ace Your Future
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Animation variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};