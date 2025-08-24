"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react"; // Removed useState since it's managed by ThemeContext
import { FaArrowLeft, FaArrowRight, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";
import bgImage from "@/public/Slider-Lagos-Tigers-Basketball-Launch-2024-.jpg";
import { useTheme } from "../context/ThemeContext"; // Import the context hook

export default function Events() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const { toggleTheme } = useTheme(); // Access the theme state from context

  // Sample event data
  const upcomingEvents = [
    {
      title: "5-WEEK INTENSIVE SUMMER CAMP",
      date: "July 21 - August 22, 2026",
      desc: "Join our immersive summer camp for young athletes aged 3-15, featuring professional football training and skill development.",
      venue: "Greenfield Stadium, Plot 123 Agodele Odubiyi Lekki",
      time: "10:00 AM - 1:00 PM Daily",
      image: bgImage,
      discount: "5% OFF EARLY BIRD",
      discountDesc: "Register before July 16, 2026",
    },
    {
      title: "ANNUAL ATHLETICS CHAMPIONSHIP",
      date: "September 10, 2026",
      desc: "Compete in our premier track and field event featuring top athletes from across the region.",
      venue: "Lagos National Stadium",
      time: "8:00 AM - 6:00 PM",
      image: bgImage,
      discount: "REGISTER NOW",
      discountDesc: "Early registration closes August 30, 2026",
    },
    {
      title: "FOOTBALL SKILLS BOOTCAMP",
      date: "August 15-22, 2026",
      desc: "Intensive week-long camp focused on developing core football skills and techniques.",
      venue: "Academy Training Grounds",
      time: "9:00 AM - 3:00 PM Daily",
      image: bgImage,
      discount: "LIMITED SPOTS",
      discountDesc: "Only 30 participants accepted",
    },
  ];

  const pastEvents = [
    {
      title: "2025 Summer Soccer Camp",
      date: "July 21 - August 22, 2025",
      desc: "Our 2025 summer camp was a huge success, with over 200 young athletes trained by professional coaches.",
      highlight: "Awarded Best Youth Program 2025",
      image: bgImage,
    },
    {
      title: "2025 Lagos Marathon",
      date: "February 15, 2025",
      desc: "Hosted a thrilling marathon with thousands of participants from across Nigeria.",
      highlight: "Record-breaking participation",
      image: bgImage,
    },
    {
      title: "2024 Basketball Tournament",
      date: "December 10-15, 2024",
      desc: "A competitive tournament showcasing top basketball talent in the region.",
      highlight: "Featured on national TV",
      image: bgImage,
    },
  ];

  // Carousel scroll functions
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: "0 0 15px rgba(16, 185, 129, 0.5)" },
  };

  return (
    <div className={`min-h-screen pt-16 ${toggleTheme ? "bg-slate-900 text-emerald-100" : "bg-gray-50 text-slate-900"} transition-colors duration-300`}>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={bgImage}
          alt="Events Hero"
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
            Our Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl mb-8 text-gray-200"
          >
            Discover upcoming sports events and relive the excitement of our past successes.
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
              Register Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-800" : "bg-gray-100"} relative z-10`}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-4 text-emerald-500"
          >
            Upcoming Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-lg text-center mb-12 ${toggleTheme ? 'text-slate-500' : 'text-slate-600'} max-w-2xl mx-auto`}
          >
            Join our exciting lineup of sports events and training camps.
          </motion.p>

          <div className="relative">
            <div
              ref={carouselRef}
              className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className={`min-w-[300px] sm:min-w-[400px] rounded-2xl overflow-hidden ${toggleTheme ? "bg-slate-900" : "bg-white"} shadow-lg border border-emerald-500/30 snap-center`}
                >
                  <div className="relative h-48">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover object-center"
                      quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4 bg-emerald-500/90 px-3 py-1 rounded text-xs text-white font-bold">
                      {event.discount}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${toggleTheme ? "text-emerald-100": "text-emerald-500"}`}>
                        {event.title}
                      </h3>
                      <div className={`flex items-center gap-2 text-sm ${toggleTheme ? "text-slate-300" : "text-slate-500"}  mb-2`}>
                        <FaCalendarAlt />
                        {event.date}
                      </div>
                      <div className={`flex items-center gap-2 text-sm ${toggleTheme ? "text-slate-300" : "text-slate-500"}  mb-2`}>
                        <FaMapMarkerAlt />
                        {event.venue}
                      </div>
                      <div className={`flex items-center gap-2 text-sm ${toggleTheme ? "text-slate-300" : "text-slate-500"}  mb-4`}>
                        <FaClock />
                        {event.time}
                      </div>
                      <p className={`text-sm ${toggleTheme ? "text-slate-300" : "text-slate-500"} mb-4`}>
                        {event.desc}
                      </p>
                      <p className="text-xs text-emerald-500">{event.discountDesc}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="mt-4 inline-block px-6 py-2 rounded-full font-semibold text-sm bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-300"
                    >
                      Register
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              onClick={scrollLeft}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg"
              aria-label="Previous event"
            >
              <FaArrowLeft />
            </motion.button>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              onClick={scrollRight}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg"
              aria-label="Next event"
            >
              <FaArrowRight />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-900" : "bg-white"} relative z-10`}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-4 text-emerald-500"
          >
            Past Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-lg text-center mb-12 ${toggleTheme ? "text-slate-300" : "text-slate-500"} max-w-2xl mx-auto`}
          >
            Relive the highlights of our memorable past events.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className={`rounded-2xl overflow-hidden ${toggleTheme ? "bg-slate-800" : "bg-white"} shadow-lg border border-emerald-500/30`}
              >
                <div className="relative h-40">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover object-center"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 bg-emerald-500/90 px-3 py-1 rounded text-xs text-white font-bold">
                    {event.highlight}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-lg font-bold mb-2 ${toggleTheme ? "text-emerald-100": "text-emerald-500"}`}>
                    {event.title}
                  </h3>
                  <div className={`flex items-center gap-2 text-sm ${toggleTheme ? "text-slate-300" : "text-slate-500"} mb-2`}>
                    <FaCalendarAlt />
                    {event.date}
                  </div>
                  <p className={`text-sm ${toggleTheme ? "text-slate-300" : "text-slate-500"}  mb-4`}>
                    {event.desc}
                  </p>
                  <Link
                    href="/events/recaps"
                    className="inline-flex items-center gap-2 text-emerald-500 font-semibold text-sm hover:text-emerald-400 transition-colors duration-300"
                  >
                    View Recap <FaChevronRight className="text-xs" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-800" : "bg-gray-100"} text-center relative z-10`}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-4 text-emerald-500"
        >
          Don’t Miss Out!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={`text-lg mb-8 ${toggleTheme ? "text-slate-300" : "text-slate-500"}  max-w-2xl mx-auto`}
        >
          Register for our upcoming events and be part of the Agroterra Sport Academy experience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:shadow-lg hover:shadow-emerald-500/50"
          >
            Get Involved
          </Link>
        </motion.div>
      </section>
    </div>
  );
}