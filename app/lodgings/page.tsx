"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaBed, FaMapMarkerAlt, FaStar, FaShower, FaWifi, FaFootballBall, FaSwimmer, FaUtensils, FaChevronRight } from "react-icons/fa";
import demoImage from "@/public/photo-1501854140801-50d01698950b.webp";

export default function Lodgings() {
  const { toggleTheme } = useTheme();

  // Lodging data for Agroterra Sport Academy
  const lodgings = [
    {
      id: 1,
      type: "Dormitory",
      name: "Athlete's Dormitory",
      description: "A modern dormitory designed for athletes, offering shared rooms with training-focused amenities.",
      location: "Agroterra Sport Academy Campus, Lekki",
      price: "$50/night",
      rating: 4.6,
      images: [demoImage, demoImage], // Interior views
      amenities: [
        { icon: FaBed, name: "Bunk Beds" },
        { icon: FaShower, name: "Shared Bathrooms" },
        { icon: FaWifi, name: "Free Wi-Fi" },
        { icon: FaFootballBall, name: "Training Gear Access" },
      ],
    },
    {
      id: 2,
      type: "Resort",
      name: "Agroterra Resort",
      description: "A luxurious resort owned by Agroterra, perfect for athletes and families with premium facilities.",
      location: "Victoria Island, Lagos",
      price: "$180/night",
      rating: 4.9,
      images: [demoImage, demoImage], // Interior views
      amenities: [
        { icon: FaBed, name: "King-Size Beds" },
        { icon: FaShower, name: "En-Suite Bathrooms" },
        { icon: FaWifi, name: "Free Wi-Fi" },
        { icon: FaSwimmer, name: "Swimming Pool" },
        { icon: FaUtensils, name: "On-Site Restaurant" },
      ],
    },
  ];

  // Animation variants
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
          src={lodgings[0].images[0]} // Using dormitory image as hero for now
          alt="Agroterra Lodgings Hero"
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
            Agroterra Lodgings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl mb-8 text-gray-200"
          >
            Premium accommodations for athletes and visitors at Agroterra Sport Academy.
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
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lodging Listings Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-800" : "bg-gray-100"} relative z-10`}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-emerald-500"
          >
            Our Accommodations
          </motion.h2>
          <div className="space-y-12">
            {lodgings.map((lodging) => (
              <motion.div
                key={lodging.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className={`rounded-2xl overflow-hidden shadow-lg border ${toggleTheme ? "bg-slate-900 border-emerald-500/30" : "bg-white border-emerald-200/50"}`}
              >
                <div className="relative h-64">
                  <Image
                    src={lodging.images[0]}
                    alt={`${lodging.name} Interior`}
                    fill
                    className="object-cover object-center"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-2 ${toggleTheme ? "text-emerald-100" : "text-emerald-600"}`}>
                    {lodging.name} <span className="text-sm font-medium text-emerald-400">({lodging.type})</span>
                  </h3>
                  <p className={`text-sm mb-4 ${toggleTheme ? "text-slate-300" : "text-slate-600"}`}>
                    {lodging.description}
                  </p>
                  <div className={`flex items-center gap-2 text-sm mb-2 ${toggleTheme ? "text-slate-400" : "text-slate-500"}`}>
                    <FaMapMarkerAlt />
                    {lodging.location}
                  </div>
                  <div className={`flex items-center gap-2 text-sm mb-4 ${toggleTheme ? "text-slate-400" : "text-slate-500"}`}>
                    <FaBed />
                    {lodging.price}
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${toggleTheme ? "text-yellow-300" : "text-yellow-500"}`}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar key={i} className={i < Math.floor(lodging.rating) ? "fill-current" : "text-slate-600"} />
                    ))}
                    <span className={toggleTheme ? "text-slate-400" : "text-slate-600"}>({lodging.rating}/5)</span>
                  </div>
                  <div className="mt-4">
                    <h4 className={`text-lg font-semibold mb-2 ${toggleTheme ? "text-emerald-100" : "text-emerald-600"}`}>Amenities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {lodging.amenities.map((amenity, index) => (
                        <div key={index} className={`flex items-center gap-2 ${toggleTheme ? "text-slate-300" : "text-slate-600"}`}>
                          <amenity.icon />
                          <span>{amenity.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/lodgings/${lodging.id}`}
                    className="mt-6 inline-flex items-center gap-2 text-emerald-500 font-semibold hover:text-emerald-400 transition-colors duration-300"
                  >
                    View Details <FaChevronRight className="text-xs" />
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
          Stay with Agroterra!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={`text-lg mb-8 ${toggleTheme ? "text-slate-300" : "text-slate-600"} max-w-2xl mx-auto`}
        >
          Choose the perfect accommodation for your training or leisure at Agroterra Sport Academy.
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
            Book Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
}