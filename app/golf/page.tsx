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
import heroImage from "@/public/Screenshot 2025-09-06 153708.png"; // Single image for all sections
import { useState } from "react";

export default function Golf() {
  const { toggleTheme } = useTheme();
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    '/videos/golf-1.mp4',
    '/videos/golf-2-1.mp4',
    '/videos/golf-3-1.mp4'
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
            Tee Off to Greatness: Agroterra Golf
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg mb-10 text-gray-200 leading-relaxed max-w-3xl mx-auto"
          >
            Dream of mastering the fairways, sinking putts, and competing on a world-class course? Since breaking ground in 2020, our 9-hole golf course at Agroterra has been crafted to elevate your game. With elite coaching and stunning facilities, your journey to golfing excellence starts here—ready to swing for the green?
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
            Coaches Who Shape Champions
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}
          >
            Our coaches are seasoned professionals with a passion for refining your swing, strategy, and mental game. With personalized instruction and years of experience, they’ll guide you to master the 9-hole course and prepare for competitive success.
          </motion.p>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            className="mb-12"
          >
            <SwiperSlide>
              <div className={`relative p-6 rounded-2xl shadow-lg ${toggleTheme ? "bg-gradient-to-br from-emerald-800/20 to-slate-800/20" : "bg-white"}`}>
                <Image
                  src={heroImage}
                  alt="Ifeanyi Okafor - Head Coach"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Ifeanyi Okafor - Head Coach</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  A former pro with 10 years on regional tours, Ifeanyi’s coaching hones your swing and course strategy. &quot;Golf is precision and patience,&quot; he says, crafting plans to elevate your game on our 9-hole course.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`relative p-6 rounded-2xl shadow-lg ${toggleTheme ? "bg-gradient-to-br from-emerald-800/20 to-slate-800/20" : "bg-white"}`}>
                <Image
                  src={heroImage}
                  alt="Ada Nwosu - Short Game Coach"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Ada Nwosu - Short Game Coach</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  A putting and chipping specialist, Ada refines your finesse around the greens. &quot;The short game wins tournaments,&quot; she believes, teaching precision to sink putts and master our course’s challenges.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`relative p-6 rounded-2xl shadow-lg ${toggleTheme ? "bg-gradient-to-br from-emerald-800/20 to-slate-800/20" : "bg-white"}`}>
                <Image
                  src={heroImage}
                  alt="Emeka Ude - Mental Conditioning Coach"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Emeka Ude - Mental Conditioning Coach</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  With a background in sports psychology, Emeka builds mental resilience for the course. &quot;Golf is a mental marathon,&quot; he teaches, helping players stay focused under pressure on every hole.
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
            These coaches are your path to golfing excellence. Ready to tee off with the best?
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
            A Course Built for Champions
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}
          >
            Since construction began in 2020, our 9-hole golf course has been designed to challenge and inspire. Paired with top-tier practice facilities and recovery centers, Agroterra provides the perfect environment to refine your swing and prepare for competitive play.
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
                  src={heroImage}
                  alt="9-Hole Golf Course"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <FaRunning className="text-emerald-400 text-4xl mb-4" />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>9-Hole Golf Course</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Construction began in 2020, and our 9-hole course, completed in 2023, features meticulously designed fairways, bunkers, and greens. Hone your skills across varied terrain, perfect for both practice and competitive rounds.
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
                  src={heroImage}
                  alt="Practice Facilities"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <FaUsers className="text-emerald-400 text-4xl mb-4" />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Practice Facilities</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Opened in 2024, our practice facilities include a driving range, putting greens, and chipping areas. Equipped with the latest tech, they’re designed to sharpen every aspect of your game for tournament readiness.
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
                  src={heroImage}
                  alt="Recovery Center"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <FaTrophy className="text-emerald-400 text-4xl mb-4" />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Advanced Recovery Center</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Launched July 15, 2025, our recovery center offers physiotherapy, cryotherapy, and massage therapy tailored for golfers. Stay in peak condition, recover faster, and perform at your best on every hole.
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
            This course is your path to golfing greatness. Step up and swing for the stars!
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
            Our golf programs are designed to build players from beginners to future pros. With personalized coaching, advanced drills, and a focus on technique and strategy, we prepare you for tournaments on our 9-hole course and beyond. Join Agroterra and start your journey to the leaderboard.
          </motion.p>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            className="mb-12"
          >
            <SwiperSlide>
              <div className={`relative p-6 rounded-2xl shadow-lg ${toggleTheme ? "bg-gradient-to-br from-emerald-800/20 to-slate-800/20" : "bg-white"}`}>
                <Image
                  src={heroImage}
                  alt="Junior Golf Academy"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Junior Golf Academy</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Launched in 2023, our junior program for ages 8-18 focuses on fundamentals, swing mechanics, and course strategy. Build the skills to compete on our 9-hole course and grow into a future star.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`relative p-6 rounded-2xl shadow-lg ${toggleTheme ? "bg-gradient-to-br from-emerald-800/20 to-slate-800/20" : "bg-white"}`}>
                <Image
                  src={heroImage}
                  alt="Elite Golf Camps"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? "text-emerald-100" : "text-emerald-500"}`}>Elite Golf Camps</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Starting in 2025, our intensive camps offer advanced training for competitive players. With course simulations and performance analytics, you’ll refine your skills for regional and national tournaments.
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
            Our programs are your fairway to success. Join Agroterra and aim for the top!
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
            Moments of Precision
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}
          >
            Every drive, every chip, every putt on our 9-hole course captures the artistry of golf. Our gallery showcases the passion and precision of players mastering their craft at Agroterra. This is where your golf journey begins—can you see yourself on the green?
          </motion.p>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            className="rounded-2xl max-w-2xl mx-auto"
          >
            <SwiperSlide>
              <Image src={heroImage} alt="Agroterra Golf Moment" width={600} height={400} className="rounded-xl shadow-lg" />
            </SwiperSlide>
          </Swiper>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center text-lg sm:text-xl text-emerald-400"
          >
            This is your course to conquer. Join Agroterra and make every shot count!
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
            Your Golf Destiny Awaits in Lagos
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl mb-10 ${toggleTheme ? "text-slate-300" : "text-slate-500"} max-w-3xl mx-auto`}
          >
            As of August 24, 2025, Agroterra Sport Academy in Lekki, Lagos, is home to a stunning 9-hole golf course, built since 2020. With expert coaches, world-class facilities, and a vision for golfing excellence, this is where your journey to the leaderboard begins. Don’t just dream of the green—join us and make it happen.
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
            <a href="https://facebook.com/agroterra" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 text-3xl transition-colors">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/agroterra" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 text-3xl transition-colors">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/agroterra" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 text-3xl transition-colors">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/agroterra" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 text-3xl transition-colors">
              <FaLinkedin />
            </a>
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
              Join Now & Tee Off Your Future
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