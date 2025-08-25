'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, Variants } from 'framer-motion'
// import Navbar from './components/Navbar'
// import { SidebarComponent } from './components/Sidebar'
import bgImage from '@/public/Slider-Lagos-Tigers-Basketball-Launch-2024-.jpg'
import bgImage2 from '@/public/DAY2L (305).jpg'
import bgImage3 from '@/public/DAY2L (307).jpg'
import bgImage4 from '@/public/DAY2L (311).jpg'
import adImage from '@/public/LTFC-2025-Summer-Camp-1.jpg'
import { useState, useEffect, useRef } from 'react'
import { FaArrowLeft, FaArrowRight, FaPlay, FaRunning, FaStar, FaDumbbell, FaSwimmer, FaFire, FaClock, FaUsers, FaChevronRight } from 'react-icons/fa'
import { useTheme } from './context/ThemeContext'


export default function Home() {
  const { toggleTheme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0)

  const containerRef = useRef(null)
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start end", "end start"]
  // })

  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  // const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4])

  const slides = [
    { src: bgImage2, alt: 'Agroterra Sport Academy Event 1', title: 'Unleash Your Potential', subtitle: 'Join our world-class sports academy today!' },
    { src: bgImage3, alt: 'Agroterra Sport Academy Event 2', title: 'Train Like a Champion', subtitle: 'Elite coaching for all skill levels.' },
    { src: bgImage4, alt: 'Agroterra Sport Academy Event 3', title: 'Discover Excellence', subtitle: 'State-of-the-art facilities await you.' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const handlePrevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  const handleNextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)

  const buttonVariants: Variants = {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { 
      scale: 1.1, 
      boxShadow: '0 0 15px rgba(16, 185, 129, 0.5)',
      transition: { duration: 0.3 }
    },
  }

  const indicatorVariants: Variants = {
    inactive: { scale: 1, width: '12px', backgroundColor: 'rgba(167, 243, 208, 0.5)' },
    active: { 
      scale: 1.2, 
      width: '24px', 
      background: 'linear-gradient(to right, #10b981, #4ade80)',
      transition: { duration: 0.4, ease: 'easeInOut' }
    },
  }

  const events = [
    { 
      title: '5-WEEK INTENSIVE SUMMER CAMP', 
      date: '21st July - 22nd August', 
      desc: 'Train Like A Pro - This summer, give your child the opportunity to train like a pro at the Lagos Tigers Academy Summer Soccer Camp.',
      duration: '5',
      durationLabel: 'Weeks Intensive Summer Soccer Camp',
      venue: 'Greenfield Stadium, Plot 123 Agodele Odubiyi Lekki',
      time: '10:00am to 1:00pm Daily',
      discount: '5% OFF EARLY BIRD',
      discountDesc: 'Register for more than 2 weeks Register/Pay before 16th July'
    },
    { 
      title: 'ANNUAL ATHLETICS CHAMPIONSHIP', 
      date: 'September 10, 2025', 
      desc: 'Compete in our premier track and field event featuring top athletes from across the region.',
      duration: '10',
      durationLabel: 'Events Championship',
      venue: 'Lagos National Stadium',
      time: '8:00am to 6:00pm',
      discount: 'REGISTER NOW',
      discountDesc: 'Early registration closes soon'
    },
    { 
      title: 'FOOTBALL SKILLS BOOTCAMP', 
      date: 'August 15-22, 2025', 
      desc: 'Intensive week-long camp focused on developing core football skills and techniques.',
      duration: '7',
      durationLabel: 'Days Intensive Training',
      venue: 'Academy Training Grounds',
      time: '9:00am to 3:00pm Daily',
      discount: 'LIMITED SPOTS',
      discountDesc: 'Only 30 participants accepted'
    },
    { 
      title: 'MULTI-SPORT DEVELOPMENT', 
      date: 'Ongoing Program', 
      desc: 'Year-round program covering basketball, tennis, athletics and swimming.',
      duration: '3+',
      durationLabel: 'Sports Programs',
      venue: 'Multiple Venues',
      time: 'Flexible Scheduling',
      discount: 'JOIN ANYTIME',
      discountDesc: 'Flexible payment options available'
    },
  ]

  const trainingPrograms = [
    {
      id: 1,
      title: 'Elite Performance Academy',
      subtitle: 'Professional Athlete Development Program',
      desc: 'Transform into a world-class athlete with our comprehensive elite training program. Featuring Olympic-level coaching, personalized nutrition plans, and cutting-edge sports science.',
      image: bgImage,
      badge: 'PROFESSIONAL',
      duration: '12 Months',
      level: 'Advanced',
      students: '50+',
      rating: 4.9,
      features: ['Olympic Coaches', 'Sports Science Lab', 'Nutrition Plan', '24/7 Support'],
      icon: <FaFire className="text-xl" />,
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      id: 2,
      title: 'Youth Champion Development',
      subtitle: 'Future Stars Training Program',
      desc: 'Nurture young talent with our comprehensive youth development program. Age-appropriate training, character building, and fun-focused learning environment for tomorrow\'s champions.',
      image: bgImage,
      badge: 'AGES 8-16',
      duration: '6 Months',
      level: 'Beginner to Intermediate',
      students: '120+',
      rating: 4.8,
      features: ['Youth Specialists', 'Character Building', 'Fun Activities', 'Parent Updates'],
      icon: <FaStar className="text-xl" />,
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      id: 3,
      title: 'Ultimate Fitness Transformation',
      subtitle: 'Complete Athletic Conditioning',
      desc: 'Revolutionary fitness program combining strength training, endurance building, and athletic conditioning. Transform your body and performance with our science-backed approach.',
      image: bgImage,
      badge: 'ALL LEVELS',
      duration: '3 Months',
      level: 'All Levels',
      students: '200+',
      rating: 4.7,
      features: ['HIIT Training', 'Strength Building', 'Body Transformation', 'Meal Plans'],
      icon: <FaDumbbell className="text-xl" />,
      gradient: 'from-emerald-500 to-green-500'
    }
  ]

  const facilities = [
    {
      title: 'Olympic Aquatic Center',
      desc: 'World-class 50m Olympic pool with advanced filtration, underwater cameras, and temperature control systems.',
      image: bgImage,
      category: 'AQUATIC',
      icon: <FaSwimmer />,
      stats: { capacity: '500 swimmers', depth: '2-4 meters', lanes: '8 Olympic lanes' },
      highlights: ['Advanced Filtration', 'Underwater Cameras', 'Climate Control']
    },
    {
      title: 'Elite Performance Gym',
      desc: 'State-of-the-art fitness center with premium equipment, specialized training zones, and recovery facilities.',
      image: bgImage,
      category: 'FITNESS',
      icon: <FaDumbbell />,
      stats: { equipment: '200+ machines', area: '5000 sq ft', access: '24/7 access' },
      highlights: ['Premium Equipment', 'Training Zones', 'Recovery Suites']
    },
    {
      title: 'Championship Sports Arena',
      desc: 'Multi-purpose indoor arena with professional courts for basketball, volleyball, badminton, and more.',
      image: bgImage,
      category: 'COURTS',
      icon: <FaRunning />,
      stats: { courts: '6 professional courts', capacity: '2000 spectators', sports: '8 different sports' },
      highlights: ['Multi-Sport Courts', 'Spectator Seating', 'LED Lighting']
    },
    {
      title: 'Athletic Performance Track',
      desc: 'Regulation 400m track with synthetic surface, field event areas, and professional timing systems.',
      image: bgImage,
      category: 'TRACK',
      icon: <FaRunning />,
      stats: { distance: '400m regulation', surface: 'Synthetic track', events: '12 field events' },
      highlights: ['Regulation Track', 'Synthetic Surface', 'Timing Systems']
    },
    {
      title: 'Recovery & Wellness Spa',
      desc: 'Luxury recovery center with ice baths, saunas, massage therapy, and sports medicine facilities.',
      image: bgImage,
      category: 'RECOVERY',
      icon: <FaStar />,
      stats: { services: '12 wellness services', therapists: 'Licensed professionals', hours: 'Extended hours' },
      highlights: ['Ice Baths', 'Sauna Therapy', 'Sports Medicine']
    },
    {
      title: 'Natural Training Fields',
      desc: 'Premium natural grass fields perfect for football, rugby, and outdoor team sports with professional drainage.',
      image: bgImage,
      category: 'OUTDOOR',
      icon: <FaRunning />,
      stats: { fields: '4 regulation fields', surface: 'Natural grass', drainage: 'Professional system' },
      highlights: ['Natural Grass', 'Professional Drainage', 'Team Sports']
    }
  ]

  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' })
    }
  }

  return (
    <div className={`font-sans pt-12 relative ${toggleTheme ? 'bg-slate-900 text-emerald-100' : 'bg-gray-50 text-slate-900'} transition-colors duration-300`} ref={containerRef}>

      {/* Hero Slideshow */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].src}
              alt={slides[currentSlide].alt}
              fill
              className="object-cover object-center"
              priority
              quality={90}
              placeholder="blur"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </motion.div>
        </AnimatePresence>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-green-500 text-transparent bg-clip-text"
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200"
          >
            {slides[currentSlide].subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:shadow-lg hover:shadow-emerald-500/50"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
        <div className="absolute inset-y-0 left-2 opacity-20 flex items-center z-20 sm:left-8">
          <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            onClick={handlePrevSlide}
            className="p-3 sm:p-4 rounded-full transition-all cursor-pointer duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black/50 bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg shadow-emerald-500/30"
            aria-label="Previous slide"
          >
            <FaArrowLeft className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce-slow" />
          </motion.button>
        </div>
        <div className="absolute inset-y-0 right-2 opacity-20 flex items-center z-20 sm:right-8">
          <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            onClick={handleNextSlide}
            className="p-3 sm:p-4 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black/50 bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg shadow-emerald-500/30"
            aria-label="Next slide"
          >
            <FaArrowRight className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce-slow" />
          </motion.button>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              variants={indicatorVariants}
              animate={currentSlide === index ? 'active' : 'inactive'}
              className="h-2 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black/50"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Latest News & Events Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${toggleTheme ? 'bg-slate-800' : 'bg-gray-100'} relative z-10`}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-4 text-emerald-500"
          >
            Latest News & Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-center mb-12 text-slate-600 max-w-2xl mx-auto"
          >
            Stay updated with our exciting programs, camps, and sporting events.
          </motion.p>

          <div className="relative">
            <div
              ref={carouselRef}
              className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  className="min-w-[400px] h-[280px] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 snap-center bg-gradient-to-r from-emerald-500 to-green-500 shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex h-full">
                    <div className="flex-1 p-6 text-white flex flex-col justify-between">
                      <div>
                        <div className="text-sm font-medium opacity-90 mb-2">
                          {event.date}
                        </div>
                        <h3 className="text-xl font-bold mb-3 leading-tight">
                          {event.title}
                        </h3>
                        <p className="text-sm opacity-90 mb-4 leading-relaxed">
                          {event.desc}
                        </p>
                        <div className="text-xs opacity-75 mb-4">
                          <div>{event.venue}</div>
                          <div>{event.time}</div>
                        </div>
                      </div>
                      <button className="self-start px-6 py-2 rounded-t-full cursor-pointer font-bold text-sm transition-all duration-300 hover:scale-105 bg-emerald-600 hover:bg-emerald-500 text-white">
                        VISIT NOW
                      </button>
                    </div>
                    <div className="w-32 relative flex flex-col items-center justify-center">
                      <div className="text-6xl font-black text-white opacity-80 mb-2">
                        {event.duration}
                      </div>
                      <div className="text-xs text-white text-center px-2 leading-tight">
                        {event.durationLabel}
                      </div>
                      <div className="absolute top-4 right-4 bg-white/20 px-2 py-1 rounded text-xs text-white">
                        Boys & Girls<br />3-15 Years
                      </div>
                      {index === 0 && (
                        <div className="absolute bottom-4 right-4">
                          <div className="bg-emerald-500 px-2 py-1 rounded text-xs text-white font-bold">
                            {event.discount}
                          </div>
                          <div className="text-xs text-white mt-1 text-right leading-tight">
                            {event.discountDesc}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                    <motion.div
                      className="h-full bg-white"
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${calculateProgress(event.date)}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            <button
              onClick={scrollLeft}
              className="absolute cursor-pointer left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg"
            >
              ←
            </button>
            <button
              onClick={scrollRight}
              className="absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg"
            >
              →
            </button>
          </div>
          <div className="text-center mt-12">
            <Link href={`/events`}>
              <button className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 bg-emerald-500 hover:bg-emerald-400 text-white cursor-pointer">
                View All Events
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ads */}
      <section className="py-16 px-4 sm:px-6 lg:px-32 flex flex-col md:flex-row gap-12 justify-between relative z-10">
        <div className="flex flex-col w-full md:w-[42rem] justify-between">
          <div className="block space-y-3">
            <h4 className="text-emerald-500">22nd July - 23rd August</h4>
            <h2 className="uppercase text-3xl">5 week intensive summer camp</h2>
            <div className="h-0.5 w-[100px] bg-emerald-500"></div>
          </div>
          <h3 className="text-xl font-semibold mt-4">Think like a pro</h3>
          <div className="block text-base text-wrap text-[17px] mt-2">
            This summer, give your child the opportunity to train like a pro at the Lagos Tigers Academy Summer Soccer Camp – a fun, structured, and skill-packed experience for boys and girls aged 3 to 15. Whether your child is a beginner or already showing showing promise, our 5-week camp combines professional football training, life skill development, and matchday excitement – all in a safe, inclusive environment.
          </div>
          <button className="border uppercase py-4 cursor-pointer hover:text-white border-emerald-500 text-emerald-500 hover:bg-emerald-500 mt-4">
            Contact Us
          </button>
        </div>
        <div className="relative w-full md:w-[30rem] h-64 md:h-[26rem]">
          <Image src={adImage} alt='' fill className="object-cover object-center rounded-lg" quality={90} />
        </div>
      </section>

      <div className={`relative transition-all duration-500 ${toggleTheme ? 'bg-slate-900 text-white' : 'bg-gray-50 text-slate-900'}`}>
        {/* Training Programs Section - Stacked Layout */}
        <section className={`py-8 px-4 sm:px-6 lg:px-8 ${toggleTheme ? 'bg-slate-900' : 'bg-white'} relative z-20 min-h-screen overflow-visible pb-24`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <motion.div
                className="inline-block"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-6 py-2 rounded-full text-xs font-bold tracking-wide uppercase mb-6 bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-500 border border-emerald-500/30">
                  ✨ Transform Your Athletic Journey
                </span>
              </motion.div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-green-500 text-transparent bg-clip-text">
                Training Programs
              </h2>
              <p className="text-base max-w-3xl mx-auto font-medium text-slate-600">
                Unlock your potential with our world-class training programs designed to transform athletes into champions
              </p>
              <motion.div
                className="w-24 h-1 mx-auto mt-8 rounded-full bg-gradient-to-r from-emerald-500 to-green-500"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.div>

            <div className="space-y-16">
              {trainingPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg border border-emerald-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-48 md:h-auto md:w-1/2 overflow-hidden">
                      <Image
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent`} />
                      <div className="absolute top-4 left-4">
                        <motion.div
                          className="flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-xl border bg-white/90 border-white/50 text-slate-800"
                          whileHover={{ scale: 1.05 }}
                        >
                          {program.icon}
                          <span className="font-bold text-xs">{program.badge}</span>
                        </motion.div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <motion.div
                          className="flex items-center gap-2 px-2 py-1 bg-emerald-500/90 rounded-full text-white font-bold text-xs backdrop-blur-xl"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <FaStar />
                          <span>{program.rating}</span>
                        </motion.div>
                      </div>
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border-2 border-white/30">
                          <FaPlay className="text-white text-xl ml-1" />
                        </div>
                      </motion.div>
                    </div>
                    <div className="p-6 flex flex-col justify-between md:w-1/2">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-sm">
                          <span className="px-2 py-1 rounded-full font-bold bg-emerald-100 text-emerald-500">
                            {program.level}
                          </span>
                          <span className="flex items-center gap-1 text-slate-500">
                            <FaClock />
                            {program.duration}
                          </span>
                          <span className="flex items-center gap-1 text-slate-500">
                            <FaUsers />
                            {program.students}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-slate-900">
                            {program.title}
                          </h3>
                          <p className="text-sm font-medium text-emerald-500">
                            {program.subtitle}
                          </p>
                        </div>
                        <p className="text-sm text-slate-600">
                          {program.desc}
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {program.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center gap-2 text-xs font-medium text-slate-600"
                              whileHover={{ x: 5 }}
                            >
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500" />
                              {feature}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      <motion.button
                        className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm mt-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-md hover:shadow-lg group/btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Enroll Now</span>
                        <FaChevronRight className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                    </div>
                  </div>
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
                    <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Facilities Section - Stacked Layout with Improved Design */}
        <section className={`py-8 px-4 sm:px-6 lg:px-8 ${toggleTheme ? 'bg-slate-900' : 'bg-gray-50'} relative z-30 pb-24 overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-green-500/10 transform -skew-y-6 origin-top-left" />
          <motion.div
            className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-10"
            initial={{ y: 0 }}
            animate={{ y: 50 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 10 }}
          />
          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <motion.span
                className="inline-block px-8 py-3 rounded-full text-sm font-bold tracking-wide uppercase mb-6 bg-gradient-to-r from-emerald-500/30 to-green-500/30 text-emerald-500 border border-emerald-500/50 backdrop-blur-sm"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                🏟️ World-Class Infrastructure
              </motion.span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-emerald-500 to-green-500 text-transparent bg-clip-text">
                Elite Facilities
              </h2>
              <p className="text-lg max-w-3xl mx-auto font-medium text-slate-600">
                Experience training in state-of-the-art facilities designed to elevate your performance to new heights
              </p>
              <motion.div
                className="w-32 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-emerald-500 to-green-500"
                initial={{ width: 0 }}
                whileInView={{ width: 128 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.div>

            <div className="space-y-16">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-lg shadow-2xl border border-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-500 hover:-translate-y-3"
                >
                  <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-3xl">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute top-6 left-6">
                      <motion.div
                        className="flex items-center gap-3 px-4 py-2 rounded-full backdrop-blur-xl bg-white/90 border border-white/50 text-slate-800 shadow-md"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {facility.icon}
                        <span className="font-bold text-sm">{facility.category}</span>
                      </motion.div>
                    </div>
                    <motion.div
                      className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      <button className="w-12 h-12 bg-emerald-500/80 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/30 hover:bg-emerald-600/90 transition-all duration-300 shadow-lg">
                        <FaArrowRight className="text-lg" />
                      </button>
                    </motion.div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="grid grid-cols-3 gap-4 text-white text-xs sm:text-sm">
                        {Object.entries(facility.stats).map(([key, value], idx) => (
                          <motion.div
                            key={idx}
                            className="flex flex-col items-center bg-white/10 backdrop-blur-xl rounded-lg px-3 py-2 border border-white/20"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * idx }}
                          >
                            <span className="capitalize font-medium text-emerald-300">{key}</span>
                            <span className="font-bold">{value}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-8 sm:p-10">
                    <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 group-hover:text-emerald-500 transition-all duration-300">
                      {facility.title}
                    </h3>
                    <p className="text-base text-slate-600 mb-6">
                      {facility.desc}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      {facility.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-3 bg-emerald-500/10 rounded-lg p-3 text-sm text-slate-700"
                          whileHover={{ scale: 1.05, x: 5 }}
                        >
                          <div className="w-3 h-3 rounded-full bg-emerald-500" />
                          {highlight}
                        </motion.div>
                      ))}
                    </div>
                    <motion.div
                      className="flex items-center gap-3 text-emerald-500 font-bold text-base cursor-pointer group-hover:text-emerald-400 transition-colors duration-300"
                      whileHover={{ x: 10 }}
                    >
                      <span>Explore Facility</span>
                      <FaChevronRight className="text-sm" />
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-emerald-500/50 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl -z-10" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${toggleTheme ? 'bg-slate-800' : 'bg-gray-100'} text-center relative z-10`}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-4 text-emerald-500"
        >
          Ready to Start Your Journey?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg mb-8 text-slate-600 max-w-2xl mx-auto"
        >
          Join Agroterra Sport Academy and take the first step towards athletic greatness.
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
            Get Started
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

function calculateProgress(eventDate: string): number {
  const now = new Date()
  const event = new Date(eventDate)
  const totalTime = event.getTime() - new Date('2020-07-01').getTime()
  const timePassed = now.getTime() - new Date('2025-07-01').getTime()
  const progress = (timePassed / totalTime) * 100
  return Math.min(Math.max(progress, 0), 100)
}
