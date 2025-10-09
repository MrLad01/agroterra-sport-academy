"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaTrophy, FaUsers, FaRunning, FaMapMarkerAlt, FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import heroImage from "@/public/Slider-Lagos-Tigers-Basketball-Launch-2024-.jpg"; // Single image for all sections
import ronkeImage from '@/public/ronke.jpg'
import gym1 from '@/public/Gym1.jpg'
import gym3 from '@/public/Gym2.jpg'
import track from '@/public/Screenshot 2025-09-06 161536.png'
import coach from '@/public/coach.jpg'
import ach from '@/public/achh.jpg'
import ach1 from '@/public/achh1.jpg'
import ach2 from '@/public/achh2.jpg'
import { useState } from "react";
import { X } from "lucide-react";

interface AthleteDetails {
  age: number;
  specialty: string;
  achievements: string[];
  story: string;
}

interface Athlete {
  id: number;
  name: string;
  title: string;
  achievement: string;
  quote: string;
  image: string;
  details: AthleteDetails;
}

export default function Athletics() {
  const { toggleTheme } = useTheme();

  const [selectedAthlete, setSelectedAthlete] = useState<Athlete | null>(null);

  const athletes: Athlete[] = [
    {
      id: 1,
      name: "Ronke Akanbi",
      title: "3000m Sensation",
      achievement: "National Champion 2024 | 11.2s Record",
      quote: "Agroterra gave me the tools to sprint past my fears. At 18, I'm a national champ—your turn is next!",
      image: ronkeImage.src,
      details: {
        age: 20,
        specialty: "3000m Sprint",
        achievements: [
          "National Champion 2024",
          "Personal Best: 11.2 seconds",
          "Regional Record Holder",
          "Youth Olympic Qualifier"
        ],
        story: "Ronke's journey began on the dusty tracks of her local community. With determination and the support of Agroterra's training program, she transformed from a promising talent into a national champion. Her explosive speed and mental fortitude have made her one of the most exciting prospects in Nigerian athletics."
      }
    },
    {
      id: 2,
      name: "Kwame Adebayo",
      title: "Long Jump Prodigy",
      achievement: "African Silver 2025 | 8.1m Leap",
      quote: "From local tracks to global podiums, Agroterra made me soar. Take the leap and join the revolution!",
      image: heroImage.src,
      details: {
        age: 20,
        specialty: "Long Jump",
        achievements: [
          "African Silver Medal 2025",
          "Personal Best: 8.1 meters",
          "Continental Championship Finalist",
          "National Record Holder"
        ],
        story: "Kwame's athletic prowess was evident from an early age, but it was the structured training and mentorship at Agroterra that unlocked his true potential. His powerful technique and consistent performance have earned him recognition across the continent, and he's now setting his sights on global competitions."
      }
    },
        {
      id: 3,
      name: "Kwame Adebayo",
      title: "Long Jump Prodigy",
      achievement: "African Silver 2025 | 8.1m Leap",
      quote: "From local tracks to global podiums, Agroterra made me soar. Take the leap and join the revolution!",
      image: heroImage.src,
      details: {
        age: 20,
        specialty: "Long Jump",
        achievements: [
          "African Silver Medal 2025",
          "Personal Best: 8.1 meters",
          "Continental Championship Finalist",
          "National Record Holder"
        ],
        story: "Kwame's athletic prowess was evident from an early age, but it was the structured training and mentorship at Agroterra that unlocked his true potential. His powerful technique and consistent performance have earned him recognition across the continent, and he's now setting his sights on global competitions."
      }
    },
    {
      id: 4,
      name: "Ronke Akanbi",
      title: "3000m Sensation",
      achievement: "National Champion 2024 | 11.2s Record",
      quote: "Agroterra gave me the tools to sprint past my fears. At 18, I'm a national champ—your turn is next!",
      image: ronkeImage.src,
      details: {
        age: 20,
        specialty: "3000m Sprint",
        achievements: [
          "National Champion 2024",
          "Personal Best: 11.2 seconds",
          "Regional Record Holder",
          "Youth Olympic Qualifier"
        ],
        story: "Ronke's journey began on the dusty tracks of her local community. With determination and the support of Agroterra's training program, she transformed from a promising talent into a national champion. Her explosive speed and mental fortitude have made her one of the most exciting prospects in Nigerian athletics."
      }
    },
  ];

  const openModal = (athlete: Athlete): void => {
    setSelectedAthlete(athlete);
  };

  const closeModal = (): void => {
    setSelectedAthlete(null);
  };


  return (
    <div className={`min-h-screen pt-16 ${toggleTheme ? "bg-slate-900 text-emerald-100" : "bg-gray-50 text-slate-900"} transition-colors duration-300 font-sans`}>
      {/* Hero Section - Adjusted colors to match Contact.jsx, more vibrant */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-900/50 to-slate-900/50">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/Screenshot 2025-09-06 161536.png"
          className="absolute top-0 left-0 w-full h-full object-cover object-center brightness-100 scale-105"
        >
          <source src="/videos/athletics-1.mp4" type="video/mp4" />
        </video>

        {/* Keep your existing overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        {/* All your existing content remains the same */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-xl sm:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-green-500 text-transparent bg-clip-text leading-tight"
          >
            Unleash Your Epic: Agroterra Athletics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg mb-10 text-gray-200 leading-relaxed max-w-3xl mx-auto"
          >
            Picture yourself breaking records, standing on Olympic podiums, and inspiring millions. At Agroterra, we transform passion into power with elite coaching, world-class facilities, and a community that thrives on victory. Your journey to global stardom begins here—ready to make history?
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
              Begin Your Legend
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Coaches Section - Updated colors, more narrative, autoplaying quotes */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-800" : "bg-gray-100"} relative z-10`}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-emerald-500"
          >
            Mentors Who Forge Champions
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}
          >
            Our coaches are more than trainers—they’re legends who’ve conquered global stages and now dedicate their lives to sculpting your success. With personalized strategies, cutting-edge techniques, and an unwavering belief in your potential, they’ll guide you to surpass your dreams and etch your name in athletic history.
          </motion.p>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
            }}
            // pagination={{ clickable: true }}
            // navigation
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="mb-12"
          >
            <SwiperSlide>
              <div className={`relative p-6 rounded-2xl shadow-lg ${toggleTheme ? 'bg-gradient-to-br from-emerald-800/20 to-slate-800/20' : 'bg-white'} `}>
                <Image
                  src={coach}
                  alt="Jane Smith - Head Coach"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? 'text-emerald-100' : 'text-emerald-500'}`}>Jane Smith - Head Coach</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Olympic gold medalist with 15 years of coaching expertise, Jane has mentored athletes to national records. &quot;Your limits are your launchpad,&quot; she says, crafting bespoke plans that blend technique, resilience, and vision to propel you to global glory.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`relative p-6 rounded-2xl shadow-lg ${toggleTheme ? 'bg-gradient-to-br from-emerald-800/20 to-slate-800/20' : 'bg-white'} `}>
                <Image
                  src={coach}
                  alt="Mike Johnson - Sprint Coach"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? 'text-emerald-100' : 'text-emerald-500'}`}>Mike Johnson - Sprint Coach</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  A 10.1s 100m national sprinter, Mike’s coaching fuses biomechanics with mental toughness. &quot;Speed is a mindset,&quot; he insists, turning raw talent into Olympic hopefuls. Join him to outrun your doubts and dominate the track.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`relative p-6 rounded-2xl shadow-lg ${toggleTheme ? 'bg-gradient-to-br from-emerald-800/20 to-slate-800/20' : 'bg-white'} `}>
                <Image
                  src={coach}
                  alt="Sarah Lee - Long Jump Coach"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? 'text-emerald-100' : 'text-emerald-500'}`}>Sarah Lee - Long Jump Coach</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  With a 7.2m leap and world-class experience, Sarah teaches precision and power. &quot;Every jump tells a story,&quot; she believes, guiding athletes to soar physically and mentally. Her jumpers are rewriting records—be the next.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`relative p-6 rounded-2xl shadow-lg ${toggleTheme ? 'bg-gradient-to-br from-emerald-800/20 to-slate-800/20' : 'bg-white'} `}>
                <Image
                  src={coach}
                  alt="Tom Brown - Cross Country Coach"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? 'text-emerald-100' : 'text-emerald-500'}`}>Tom Brown - Cross Country Coach</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  A marathon icon, Tom builds endurance titans. &quot;Win the race in your mind first,&quot; he coaches, blending stamina and strategy to conquer distances. His runners earn national titles—start your journey to greatness with him.
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
            These visionaries don’t just coach—they ignite your fire. Ready to train with the best and become the best?
          </motion.p>
        </div>
      </section>

      {/* Facilities Section - Aligned colors, more engaging narrative */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-900" : "bg-white"} relative z-10`}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-emerald-500"
          >
            Facilities That Breed Victory
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}
          >
            Step into a world where every detail is crafted for your success. Our facilities aren’t just state-of-the-art—they’re the crucible where champions are forged. From tracks that have hosted record-breakers to recovery suites that keep you at your peak, Agroterra is your unfair advantage in the race to greatness.
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
                  src={track}
                  alt="Olympic Track"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <FaRunning className="text-emerald-400 text-4xl mb-4" />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? 'text-emerald-100' : 'text-emerald-500'}`}>Olympic-Standard Track</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Unveiled August 10, 2024, our 400m synthetic track is engineered for speed and safety. With pro-grade lighting and advanced surfaces, it’s where national records are shattered. Feel the pulse of champions beneath your feet and sprint toward your destiny.
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
                  src={gym3}
                  alt="Training Gym"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <FaUsers className="text-emerald-400 text-4xl mb-4" />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? 'text-emerald-100' : 'text-emerald-500'}`}>Elite Training Gym</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Revamped March 2025, our gym is a powerhouse of strength. Olympic-grade equipment, cutting-edge cardio, and injury-prevention tech transform raw potential into unstoppable force. Build the physique of a champion and dominate your field.
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
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? 'text-emerald-100' : 'text-emerald-500'}`}>Advanced Recovery Center</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  Launched July 15, 2025, our recovery center offers cryotherapy, hydrotherapy, and expert physiotherapy. It’s your sanctuary to rebound stronger and stay in peak form. Recover like a pro and keep pushing the boundaries of what’s possible.
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
            These aren’t just facilities—they’re your gateway to immortality. Step in and claim your victory!
          </motion.p>
        </div>
      </section>

      {/* Stars Section - Updated colors, autoplaying testimonials */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-800" : "bg-gray-100"} relative z-10`}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-emerald-500"
          >
            Rising Stars: Your Inspiration
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}
          >
            Our athletes began as dreamers, just like you, fueled by ambition and nurtured by Agroterra’s elite program. Now, they’re national champions, global contenders, and Olympic hopefuls. Their journeys prove that with our support, your potential is limitless. Will you be our next legend?
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
          {athletes.map((athlete) => (
            <SwiperSlide key={athlete.id}>
              <div 
                onClick={() => openModal(athlete)}
                className={`relative p-6 rounded-2xl shadow-lg cursor-pointer transition-transform hover:scale-105 ${
                  toggleTheme ? 'bg-gradient-to-br from-emerald-800/20 to-slate-800/20' : 'bg-white'
                }`}
              >
                <img
                  src={athlete.image}
                  alt={athlete.name}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? 'text-emerald-100' : 'text-emerald-500'}`}>
                  {athlete.name} - {athlete.title}
                </h3>
                <p className={`text-base ${toggleTheme ? 'text-slate-300' : 'text-slate-500'} mb-2`}>
                  {athlete.achievement}
                </p>
                <p className={`text-sm ${toggleTheme ? 'text-emerald-100' : 'text-emerald-400'} italic`}>
                  &quot;{athlete.quote}&quot;
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-lg sm:text-xl text-emerald-400"
          >
            These stars were once dreamers like you. Join Agroterra and carve your path to greatness!
          </motion.p>
        </div>
      </section>

      {/* Achievements Section - Aligned colors, more emotional narrative */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-900" : "bg-white"} relative z-10`}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-emerald-500"
          >
            A Legacy of Triumph
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}
          >
            Every medal, every record, every roar from the crowd tells the story of Agroterra’s relentless pursuit of excellence. Our athletes have conquered national titles, stunned continental stages, and set their sights on the Olympics. These victories are your invitation to join a legacy of greatness and write your own chapter of glory.
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
                  alt="Relay Championship 2024"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <FaTrophy className="text-emerald-400 text-4xl mb-4" />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? 'text-emerald-100' : 'text-emerald-500'}`}>National Relay Champions 2024</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  On August 20, 2024, our relay team blazed to a historic 3:12.50, clinching the national title with sheer heart and teamwork. This wasn’t just a win—it was a testament to what’s possible when passion meets precision. Join us and add your name to this legacy.
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
                  alt="National Medalists"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <FaUsers className="text-emerald-400 text-4xl mb-4" />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? 'text-emerald-100' : 'text-emerald-500'}`}>Five National Medalists</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  In two years, we’ve produced five national medalists and two African Championship qualifiers. Each medal reflects our commitment to unlocking your potential. Your podium awaits—step up and claim it with Agroterra.
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
                  alt="Invitational Meet 2025"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <FaRunning className="text-emerald-400 text-4xl mb-4" />
                <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? 'text-emerald-100' : 'text-emerald-500'}`}>Agroterra Invitational 2025</h3>
                <p className={`text-base ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}>
                  On August 15, 2025, our Invitational Meet drew 200+ elite athletes, showcasing our world-class facilities. This wasn’t just an event—it was a launchpad for careers. Compete here and let your journey to global stardom begin.
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
            Our victories are just the beginning. Join Agroterra and make your mark on history!
          </motion.p>
        </div>
      </section>

      {/* Gallery Section - Single image with autoplay, updated colors */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-800" : "bg-gray-100"} relative z-10`}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-emerald-500"
          >
            A Glimpse of Glory
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto ${toggleTheme ? "text-slate-300" : "text-slate-500"}`}
          >
            Every moment at Agroterra captures the thrill of ambition, the sweat of dedication, and the joy of triumph. Our gallery showcases the energy of athletes chasing their dreams. This isn’t just a training ground—it’s where legends are born. See yourself in this story?
          </motion.p>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            // pagination={{ clickable: true }}
            // navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="rounded-2xl max-w-2xl mx-auto"
          >
            <SwiperSlide>
              <Image src={ach} alt="Agroterra Moment" width={600} height={400} className="rounded-xl shadow-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={ach1} alt="Agroterra Moment" width={600} height={400} className="rounded-xl shadow-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={ach2} alt="Agroterra Moment" width={600} height={400} className="rounded-xl shadow-lg" />
            </SwiperSlide>
          </Swiper>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center text-lg sm:text-xl text-emerald-400"
          >
            This is your moment to shine. Join Agroterra and create your own iconic story!
          </motion.p>
        </div>
      </section>

      {/* Location & Invitation Section - Updated colors, social links aligned with Contact.jsx */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${toggleTheme ? "bg-slate-900" : "bg-white"} relative z-10`}>
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-emerald-500"
          >
            Your Destiny Awaits in Lagos
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl mb-10 ${toggleTheme ? "text-slate-300" : "text-slate-500"} max-w-3xl mx-auto`}
          >
            As of August 24, 2025, Agroterra Sport Academy in Lekki, Lagos, is the epicenter of athletic excellence. Mentored by Olympic icons, empowered by world-class facilities, and fueled by a community of champions, this is where dreams become reality. From national titles to global podiums, your journey to stardom starts here. Don’t wait—seize this chance to become unstoppable and leave your mark on the world.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center items-center gap-4 mb-10"
          >
            <FaMapMarkerAlt className="text-emerald-400 text-3xl" />
            <span className={`text-lg sm:text-xl ${toggleTheme ? 'text-emerald-100' : 'text-emerald-400'}`}>Agroterra Sport Academy, Lekki, Lagos</span>
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
              Join Now & Become Unstoppable
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Modal */}
        {selectedAthlete && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div 
              className={`relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
                toggleTheme ? 'bg-slate-800' : 'bg-white'
              }`}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className={`absolute top-4 right-4 p-2 rounded-full transition-colors z-10 ${
                  toggleTheme ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
              >
                <X size={24} />
              </button>

              {/* Modal Content */}
              <div className="p-8">
                <img
                  src={selectedAthlete.image}
                  alt={selectedAthlete.name}
                  className="w-60 h-60 object-cover rounded-xl mb-6"
                />

                <h2 className={`text-4xl font-bold mb-2 ${toggleTheme ? 'text-emerald-100' : 'text-emerald-600'}`}>
                  {selectedAthlete.name}
                </h2>
                
                <p className={`text-xl mb-4 ${toggleTheme ? 'text-emerald-300' : 'text-emerald-500'}`}>
                  {selectedAthlete.title}
                </p>

                <div className={`mb-6 p-4 rounded-lg ${toggleTheme ? 'bg-slate-700/50' : 'bg-emerald-50'}`}>
                  <p className={`text-lg italic ${toggleTheme ? 'text-slate-300' : 'text-slate-700'}`}>
                    &quot;{selectedAthlete.quote}&quot;
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? 'text-emerald-200' : 'text-emerald-600'}`}>
                    Profile
                  </h3>
                  <div className={`grid grid-cols-2 gap-4 ${toggleTheme ? 'text-slate-300' : 'text-slate-700'}`}>
                    <div>
                      <span className="font-semibold">Age:</span> {selectedAthlete.details.age}
                    </div>
                    <div>
                      <span className="font-semibold">Specialty:</span> {selectedAthlete.details.specialty}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? 'text-emerald-200' : 'text-emerald-600'}`}>
                    Achievements
                  </h3>
                  <ul className={`space-y-2 ${toggleTheme ? 'text-slate-300' : 'text-slate-700'}`}>
                    {selectedAthlete.details.achievements.map((achievement: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-emerald-500 mr-2">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className={`text-2xl font-bold mb-3 ${toggleTheme ? 'text-emerald-200' : 'text-emerald-600'}`}>
                    Story
                  </h3>
                  <p className={`leading-relaxed ${toggleTheme ? 'text-slate-300' : 'text-slate-700'}`}>
                    {selectedAthlete.details.story}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

// Animation variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};