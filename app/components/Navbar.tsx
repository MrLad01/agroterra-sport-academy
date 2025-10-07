'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useRef, useEffect } from 'react'
import { TfiMenu } from 'react-icons/tfi'
import { IoChevronDown } from 'react-icons/io5'
import { useTheme } from '../context/ThemeContext'
import logo from '@/public/ASA logo.jpg'
import Image from 'next/image'


export default function Navbar() {
  const pathname = usePathname()
  const [showSportsDropdown, setShowSportsDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { toggleTheme, setToggleTheme, toggleSidebar, setToggleSidebar } = useTheme();

  const toggle = toggleTheme;
  const setToggle = setToggleTheme;

  const sportsLinks = [
    { href: '/athletics', label: 'Athletics' },
    { href: '/football', label: 'Football' },
    { href: '/basketball', label: 'Basketball' },
    { href: '/tennis', label: 'Tennis' },
    { href: '/tt', label: 'Table Tennis' },
    { href: '/golf', label: 'Golf' },
  ]

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/lodgings', label: 'Lodgings' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowSportsDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isActive = (href: string) => pathname === href

  return (
    <nav className={`fixed top-0 left-0 py-4 px-5 w-full flex items-center justify-between z-40 backdrop-blur-md transition-all duration-300 text-sm ${
      toggle 
        ? 'bg-slate-900/90 border-b border-emerald-500/30 shadow-lg shadow-emerald-500/10' 
        : 'bg-white/90 border-b border-emerald-200/50 shadow-lg shadow-emerald-100/20'
    }`}>
      {/* Logo */}
      <Link href="/" className={`font-bold text-base bg-gradient-to-r flex items-center gap-2  ${
        toggle 
          ? 'from-emerald-400 to-green-300 text-transparent bg-clip-text' 
          : 'from-emerald-600 to-green-700 text-transparent bg-clip-text'
      } hover:scale-105 transition-transform duration-200`}>
        <Image src={logo} alt='ASA logo' width={50} height={50} />
        Agroterra Sport Academy
      </Link>

      {/* Desktop Navigation */}
      <div className='flex gap-8 items-center max-md:hidden'>
        {navLinks.slice(0, 3).map((link) => (
          <Link 
            key={link.href}
            href={link.href} 
            className={`relative font-medium transition-all duration-200 hover:scale-105 ${
              toggle 
                ? 'text-emerald-100 hover:text-emerald-300' 
                : 'text-slate-700 hover:text-emerald-700'
            } ${isActive(link.href) ? 'after:w-full after:h-0.5 after:bg-gradient-to-r after:from-emerald-500 after:to-green-400' : 'after:w-0'} after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded`}
          >
            {link.label}
          </Link>
        ))}

        {/* Sports Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowSportsDropdown(!showSportsDropdown)}
            className={`flex items-center gap-1 font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded ${
              toggle 
                ? 'text-emerald-100 hover:text-emerald-300' 
                : 'text-slate-700 hover:text-emerald-700'
            }`}
            aria-expanded={showSportsDropdown}
            aria-haspopup="true"
          >
            Sports
            <IoChevronDown className={`w-4 h-4 transition-transform duration-200 ${showSportsDropdown ? 'rotate-180' : ''}`} />
          </button>
          
          {showSportsDropdown && (
            <div className={`absolute top-full mt-2 w-48 rounded-xl shadow-xl border backdrop-blur-md transition-all duration-200 origin-top scale-100 ${
              toggle 
                ? 'bg-slate-800/95 border-emerald-500/30 shadow-emerald-500/20' 
                : 'bg-white/95 border-emerald-200/50 shadow-emerald-100/30'
            }`}>
              {sportsLinks.map((sport) => (
                <Link
                  key={sport.href}
                  href={sport.href}
                  className={`block px-4 py-3 font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded ${
                    toggle 
                      ? 'text-emerald-100 hover:text-emerald-300 hover:bg-emerald-500/20' 
                      : 'text-slate-700 hover:text-emerald-700 hover:bg-emerald-50'
                  } ${isActive(sport.href) ? ' text-emerald-300 bg-emerald-500/20' : ''} first:rounded-t-xl last:rounded-b-xl`}
                  onClick={() => setShowSportsDropdown(false)}
                >
                  {sport.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        
        {navLinks.slice(3).map((link) => (
          <Link 
            key={link.href}
            href={link.href} 
            className={`relative font-medium transition-all duration-200 hover:scale-105 ${
              toggle 
                ? 'text-emerald-100 hover:text-emerald-300' 
                : 'text-slate-700 hover:text-emerald-700'
            } ${isActive(link.href) ? 'after:w-full after:h-0.5 after:bg-gradient-to-r after:from-emerald-500 after:to-green-400' : 'after:w-0'} after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        {/* Enhanced Theme Toggle */}
        <button 
          className={`relative w-[45px] h-[26px] rounded-full p-1 cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
            toggle 
              ? 'bg-gradient-to-r from-emerald-500 to-green-400 shadow-lg shadow-emerald-500/50' 
              : 'bg-gradient-to-r from-slate-300 to-slate-400 shadow-lg shadow-slate-300/50'
          }`} 
          onClick={() => setToggle(!toggle)}
          aria-label={toggle ? 'Switch to light mode' : 'Switch to dark mode'}
          type="button"
        >
          <div className={`w-[18px] h-[18px] bg-white rounded-full transition-all duration-300 flex items-center justify-center shadow-md ${
            toggle ? 'translate-x-5' : 'translate-x-0'
          }`}>
            {toggle ? (
              <span className="text-xs">🌙</span>
            ) : (
              <span className="text-xs">☀️</span>
            )}
          </div>
        </button>

        {/* Mobile Menu Button */}
        <button 
          className={`cursor-pointer hidden max-md:block p-2 rounded-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
            toggle 
              ? 'text-emerald-300 hover:bg-emerald-500/20' 
              : 'text-emerald-700 hover:bg-emerald-100'
          }`} 
          onClick={() => setToggleSidebar(!toggleSidebar)}
          aria-label="Open mobile menu"
          type="button"
        >
          <TfiMenu size={22} />
        </button>    
      </div>
    </nav>
  )
}