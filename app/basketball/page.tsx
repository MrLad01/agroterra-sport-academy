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
import fac from "../../public/Screenshot 2025-09-06 161621.png"
import gym from "../../public/Screenshot 2025-09-06 161027.png"
import gym1 from "../../public/Gym1.jpg"
import coach from '@/public/coach.jpg'
import b from '@/public/bball.png'
import b1 from '@/public/bball1.png'
import b2 from '@/public/bball2.png'
import b3 from '@/public/bball3.png'
import b4 from '@/public/bball4.png'
import b5 from '@/public/bball5.png'

export default function Basketball() {
  const { toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen pt-16 ${toggleTheme ? "bg-slate-900 text-emerald-100" : "bg-gray-50 text-slate-900"} transition-colors duration-300 font-sans`}>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-900/50 to-slate-900/50">
         {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/Screenshot 2025-09-06 161621.png"
          className="absolute top-0 left-0 w-full h-full object-cover object-center brightness-100 scale-105"
        >
          <source src="/videos/basket-1-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-xl sm:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-green-500 text-transparent bg-clip-text leading-tight"
          >
            Rise to Greatness: Agroterra Basketball
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg mb-10 text-gray-200 leading-relaxed max-w-3xl mx-auto"
          >
            Launched in August 2025, Agroterra’s basketball program is just the beginning of a new era in hoops excellence. With elite coaching, cutting-edge facilities, and a vision to build champions, we’re here to help you slam-dunk your dreams. Ready to be part of our founding legacy and soar to new heights?
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
            Coaches Building a Legacy
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}
          >
            Our basketball program is new, but our coaches are seasoned veterans with a passion for shaping the next generation of hoop stars. With expertise in strategy, skill development, and mental toughness, they’re here to lay the foundation for your rise to greatness.
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
                  alt="Nkechi Okoro - Head Coach"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Nkechi Okoro - Head Coach</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  A former national team point guard with 10 years of pro experience, Nkechi brings tactical brilliance to Agroterra. &quot;Basketball is chess on the court,&quot; she says, crafting strategies to elevate your game and prepare you for the big leagues.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`relative p-6 rounded-2xl shadow-lg ${toggleTheme ? "bg-gradient-to-br from-emerald-800/20 to-slate-800/20" : "bg-white"}`}>
                <Image
                  src={coach}
                  alt="Bola Ade - Shooting Coach"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Bola Ade - Shooting Coach</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Known for a 40% three-point shooting career, Bola trains sharpshooters to dominate from beyond the arc. &quot;Every shot is a chance to shine,&quot; he believes, honing your form and confidence to make every bucket count.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`relative p-6 rounded-2xl shadow-lg ${toggleTheme ? "bg-gradient-to-br from-emerald-800/20 to-slate-800/20" : "bg-white"}`}>
                <Image
                  src={coach}
                  alt="Uche Eze - Defense Coach"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Uche Eze - Defense Coach</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  A former defensive anchor with multiple All-Defensive honors, Uche builds players who lock down opponents. &quot;Defense wins games,&quot; he preaches, teaching agility and instincts to make you a court fortress.
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
            Our coaches are laying the groundwork for a basketball revolution. Be part of the founding team and rise with us!
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
            Facilities for Future Champions
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}
          >
            Our basketball program is just beginning, but our facilities are built for greatness. From brand-new courts to advanced training and recovery spaces, Agroterra provides the tools to hone your skills and launch your basketball journey. Step in and start building your legacy.
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
                  src={fac}
                  alt="Basketball Court"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <FaRunning className="text-emerald-400 text-4xl mb-4" />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Basketball Court</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Opened August 2025, our FIBA-standard indoor court features premium hardwood flooring and professional lighting. Perfect your dribbling, shooting, and teamwork in an environment designed to elevate your game from day one.
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
                  src={gym}
                  alt="Training Gym"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <FaUsers className="text-emerald-400 text-4xl mb-4" />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Basketball Training Gym</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Launched with our program in August 2025, our gym includes strength equipment, agility zones, and basketball-specific drills. Build the explosiveness and endurance needed to dominate the court and catch the eye of future scouts.
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
                  alt="Recovery Suite"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <FaTrophy className="text-emerald-400 text-4xl mb-4" />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Recovery Suite</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Introduced July 2025, our recovery suite offers physiotherapy, ice baths, and recovery tech tailored for basketball players. Stay in top form, recover faster, and be ready to shine in every training session.
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
            Our facilities are the foundation of our basketball revolution. Join us and build your future on the court!
          </motion.p>
        </div>
      </section>

      {/* Vision Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-800" : "bg-gray-100"} relative z-10`}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-emerald-500"
          >
            Our Vision: Building Basketball’s Future
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}
          >
            Agroterra’s basketball program is just starting, but our vision is bold: to create a powerhouse that produces national and international stars. Through elite training, community-building, and future scouting initiatives, we’re laying the groundwork for a legacy of champions. Be among the first to shape this exciting journey.
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
                  src={b}
                  alt="Youth Development Program"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Youth Development Program</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Starting in 2025, our youth program focuses on players aged 12-18, building skills, teamwork, and basketball IQ. Join the foundation of our program and grow into a future star.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`relative p-6 rounded-2xl shadow-lg ${toggleTheme ? "bg-gradient-to-br from-emerald-800/20 to-slate-800/20" : "bg-white"}`}>
                <Image
                  src={b}
                  alt="Community Tournaments"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Community Tournaments</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Planned for 2026, our local tournaments will showcase emerging talent and build a basketball community in Lagos. Be part of our inaugural events and make your mark.
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
            Our basketball journey is just beginning. Join us to shape the future of hoops in Nigeria!
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
            The Dawn of Greatness
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}
          >
            Our basketball program is new, but the energy is electric. Our gallery captures the early moments of training, passion, and potential as we build a legacy from the ground up. This is your chance to be part of something historic—can you feel the momentum?
          </motion.p>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="rounded-2xl max-w-2xl mx-auto"
          >
            <SwiperSlide>
              <Image src={b} alt="Agroterra Basketball Moment" width={600} height={400} className="rounded-xl shadow-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={b1} alt="Agroterra Basketball Moment" width={600} height={400} className="rounded-xl shadow-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={b2} alt="Agroterra Basketball Moment" width={600} height={400} className="rounded-xl shadow-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={b3} alt="Agroterra Basketball Moment" width={600} height={400} className="rounded-xl shadow-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={b4} alt="Agroterra Basketball Moment" width={600} height={400} className="rounded-xl shadow-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={b5} alt="Agroterra Basketball Moment" width={600} height={400} className="rounded-xl shadow-lg" />
            </SwiperSlide>
          </Swiper>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center text-lg sm:text-xl text-emerald-400"
          >
            This is the start of something epic. Join Agroterra and be a pioneer in our basketball legacy!
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
            Your Basketball Journey Begins in Lagos
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl mb-10 ${toggleTheme ? "text-slate-300" : "text-slate-500"} max-w-3xl mx-auto`}
          >
            As of August 24, 2025, Agroterra Sport Academy in Lekki, Lagos, is launching its basketball program with a vision to redefine hoops in Nigeria. With elite coaches, state-of-the-art facilities, and a commitment to building champions, this is your chance to be part of a groundbreaking movement. Don’t miss out—join us and shape the future of basketball.
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
              Join Now & Launch Your Legacy
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