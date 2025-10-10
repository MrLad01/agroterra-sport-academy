"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaTrophy, FaUsers, FaRunning, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import heroImage from "@/public/Slider-Lagos-Tigers-Basketball-Launch-2024-.jpg"; // Single image for all sections
import gym from "../../public/Gym1.jpg"
import coach from '@/public/coach.jpg'
import fac from "../../public/Screenshot 2025-09-06 154334.png"
import annual from "../../public/Screenshot 2025-09-06 161433.png"
import talent from "../../public/Screenshot 2025-09-06 161326.png"
import { useState } from "react";

export default function Football() {
  const { toggleTheme } = useTheme();
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    '/videos/fball-1-1.mp4',
    '/videos/fball-2-1.mp4',
    '/videos/pitch-1-1.mp4'
  ];
  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };


  return (
    <div className={`min-h-screen pt-16 ${toggleTheme ? "bg-slate-900 text-emerald-100" : "bg-gray-50 text-slate-900"} transition-colors duration-300 font-sans`}>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-900/50 to-slate-900/50">
        {/* Video Background with Fade Transition */}
        <AnimatePresence mode="wait">
          <motion.video
            key={currentVideo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="absolute top-0 left-0 w-full h-full object-cover object-center brightness-100 scale-105"
          >
            <source src={videos[currentVideo]} type="video/mp4" />
          </motion.video>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-xl sm:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-green-500 text-transparent bg-clip-text leading-tight"
          >
            Kick Off Your Legacy: Agroterra Football
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg mb-10 text-gray-200 leading-relaxed max-w-3xl mx-auto"
          >
            Dream of dazzling crowds with your footwork, scoring match-winning goals, and earning global scouts&apos; attention? At Agroterra, we transform raw talent into football stardom with elite coaching, top-tier facilities, and scouting programs that open doors to professional clubs. Your journey to the pitch of greatness starts now—are you ready?
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
            Coaches Who Shape Future Stars
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}
          >
            Our coaches are former pros and tactical masterminds who’ve played on global stages and now dedicate their expertise to crafting your football career. With personalized training, strategic insight, and a passion for unlocking your potential, they’ll prepare you for the spotlight of professional football.
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
                  alt="David Okeke - Head Coach"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>David Okeke - Head Coach</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  A former Super Eagles midfielder with 50 international caps, David’s coaching blends tactical brilliance with motivational fire. &quot;Football is art and strategy,&quot; he says, crafting training regimens that turn raw talent into polished pros ready for global scouts.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`relative p-6 rounded-2xl shadow-lg ${toggleTheme ? "bg-gradient-to-br from-emerald-800/20 to-slate-800/20" : "bg-white"}`}>
                <Image
                  src={coach}
                  alt="Chika Nwosu - Striker Coach"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Chika Nwosu - Striker Coach</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  A former top-flight striker with 30 goals in a single season, Chika teaches precision finishing and goal-scoring instincts. &quot;Every shot is a statement,&quot; she believes, training forwards to dominate the box and catch scouts’ eyes.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`relative p-6 rounded-2xl shadow-lg ${toggleTheme ? "bg-gradient-to-br from-emerald-800/20 to-slate-800/20" : "bg-white"}`}>
                <Image
                  src={coach}
                  alt="Emeka Ude - Defense Coach"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Emeka Ude - Defense Coach</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  A rock-solid center-back in his playing days, Emeka’s coaching builds impenetrable defenses. &quot;Own the backline, own the game,&quot; he preaches, teaching tactical positioning and resilience to shut down any attack and impress recruiters.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`relative p-6 rounded-2xl shadow-lg ${toggleTheme ? "bg-gradient-to-br from-emerald-800/20 to-slate-800/20" : "bg-white"}`}>
                <Image
                  src={coach}
                  alt="Tolu Adeyemi - Goalkeeper Coach"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Tolu Adeyemi - Goalkeeper Coach</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  A former national team goalkeeper with 20 clean sheets in a season, Tolu trains keepers to be match-winners. &quot;The goal is your fortress,&quot; he says, honing reflexes and decision-making to prepare you for professional trials.
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
            These coaches don’t just train—they build careers. Ready to kick your dreams into high gear?
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
            Facilities That Fuel Greatness
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}
          >
            Our facilities are designed to elevate your game to professional levels. From FIFA-standard pitches to advanced training and recovery centers, every element at Agroterra is crafted to hone your skills and prepare you for the eyes of top scouts. Step onto our grounds and feel the spark of your football future.
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
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  width={400}
                  height={300}
                  poster="/Screenshot 2025-09-06 154256.png"
                  className="object-cover object-center brightness-100 rounded-xl shadow-lg"
                >
                  <source src="/videos/pitch-1-1.mp4" type="video/mp4" />
                </video>

              </div>
              <div className="w-full md:w-1/2">
                <FaRunning className="text-emerald-400 text-4xl mb-4" />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>FIFA-Standard Pitch</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Launched August 10, 2024, our FIFA-standard pitch features top-tier turf, advanced drainage, and professional lighting. It’s where you’ll perfect your passes, sharpen your shots, and showcase your skills in scouting matches that attract top clubs.
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
                  alt="Training Complex"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <FaUsers className="text-emerald-400 text-4xl mb-4" />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Elite Training Complex</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Revamped March 2025, our training complex includes strength gyms, tactical analysis rooms, and agility zones. Equipped with cutting-edge tech, it’s where you’ll build the stamina, strategy, and skills to stand out in professional trials.
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
                  src={gym}
                  alt="Recovery Suite"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <FaTrophy className="text-emerald-400 text-4xl mb-4" />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Advanced Recovery Suite</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Opened July 15, 2025, our recovery suite offers cryotherapy, massage therapy, and physiotherapy tailored for footballers. Stay in peak condition, recover faster, and perform at your best during high-stakes scouting events.
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
            These facilities are your launchpad to professional football. Step in and score your future!
          </motion.p>
        </div>
      </section>

      {/* Scouting Program Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-800" : "bg-gray-100"} relative z-10`}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-emerald-500"
          >
            Scouting Programs: Your Path to the Pros
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}
          >
            Our scouting programs connect you with top clubs and international scouts. Through expertly organized trials, showcase matches, and performance analytics, we ensure your talent shines on the global stage. At Agroterra, we don’t just train you—we open doors to your professional football career.
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
                  src={annual}
                  alt="Annual Scouting Combine"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Annual Scouting Combine</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Held every June, our scouting combine brings together top clubs from Nigeria and beyond. Showcase your skills in front of scouts from European and African leagues, with performance data to highlight your strengths.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`relative p-6 rounded-2xl shadow-lg ${toggleTheme ? "bg-gradient-to-br from-emerald-800/20 to-slate-800/20" : "bg-white"}`}>
                <Image
                  src={talent}
                  alt="Youth Talent Showcase"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Youth Talent Showcase</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Our quarterly showcase matches for U-18 players attract scouts looking for the next big talent. With professional coaching and video analysis, your performance will stand out to recruiters.
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
            Our scouting programs are your ticket to the big leagues. Join Agroterra and get noticed!
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
            Every training session, every drill, every match at Agroterra is a step toward your professional dreams. Our gallery captures the passion, precision, and power of our players in action. This is where your football journey comes alive—can you see yourself on this pitch?
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
                poster="/Screenshot 2025-09-06 154256.png"
                className="object-cover object-center brightness-100 rounded-xl shadow-lg"
              >
                <source src="/videos/Rapheal.mp4" type="video/mp4" />
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
            This is where your football story begins. Join Agroterra and make every moment count!
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
            Your Football Destiny Awaits in Lagos
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl mb-10 ${toggleTheme ? "text-slate-300" : "text-slate-500"} max-w-3xl mx-auto`}
          >
            As of August 24, 2025, Agroterra Sport Academy in Lekki, Lagos, is the ultimate hub for aspiring footballers. With world-class coaches, cutting-edge facilities, and scouting programs that connect you to top clubs, this is where your professional career takes flight. Don’t just dream of the big leagues—join us and make it happen.
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
              Join Now & Score Your Future
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