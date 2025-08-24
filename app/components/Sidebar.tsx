"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect, useCallback } from 'react'
import { IoChevronDown, IoClose } from 'react-icons/io5'
import { useTheme } from '../context/ThemeContext'


export const SidebarComponent: React.FC = () => {
  const pathname = usePathname()
  const [showSportsDropdown, setShowSportsDropdown] = useState(false)

  const { toggleTheme, toggleSidebar, setToggleSidebar } = useTheme();

  const theme = toggleTheme

  const onClose = useCallback(() => setToggleSidebar(false), [setToggleSidebar]);

  

  const sportsLinks = [
    { href: '/athletics', label: 'Athletics', emoji: '🏃‍♂️' },
    { href: '/football', label: 'Football', emoji: '⚽' },
    { href: '/basketball', label: 'Basketball', emoji: '🏀' },
    { href: '/tennis', label: 'Tennis', emoji: '🎾' },
    { href: '/tt', label: 'Table Tennis', emoji: '🏓' },
    { href: '/golf', label: 'Golf', emoji: '⛳' },
  ]

  const navLinks = [
    { href: '/', label: 'Home', emoji: '🏠' },
    { href: '/events', label: 'Events', emoji: '📅' },
    { href: '/lodgings', label: 'Lodgings', emoji: '🏨' },
    { href: '/about', label: 'About Us', emoji: 'ℹ️' },
    { href: '/contact', label: 'Contact Us', emoji: '📞' },
  ]

  // Close sidebar on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && toggleSidebar) {
        onClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [toggleSidebar, onClose])

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (toggleSidebar) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [toggleSidebar])

  if (!toggleSidebar) return null

  const isActive = (href: string) => pathname === href

  return (
    <div 
      className={`fixed inset-0 transition-opacity duration-300 ease-in-out z-50 ${
        theme 
          ? 'bg-slate-900/80 backdrop-blur-sm' 
          : 'bg-black/50 backdrop-blur-sm'
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="sidebar-title"
    >
      <div className="w-full h-full relative">
        <div 
          className={`absolute right-0 w-[min(40vw,320px)] max-sm:w-[75vw] h-full shadow-2xl transform transition-all duration-300 ease-in-out ${
            theme 
              ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-l border-emerald-500/30' 
              : 'bg-gradient-to-br from-white to-emerald-50 border-l border-emerald-200/50'
          } ${toggleSidebar ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          {/* Sidebar header with gradient accent */}
          <div className={`flex items-center justify-between px-6 py-6 border-b ${
            theme 
              ? 'border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-green-400/10' 
              : 'border-emerald-200/50 bg-gradient-to-r from-emerald-100/50 to-green-50/50'
          }`}>
            <h2 id="sidebar-title" className={`text-xl font-bold bg-gradient-to-r ${
              theme 
                ? 'from-emerald-400 to-green-300 text-transparent bg-clip-text' 
                : 'from-emerald-600 to-green-700 text-transparent bg-clip-text'
            }`}>
              Menu
            </h2>
            <button
              onClick={onClose}
              className={`p-2 rounded-xl transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                theme 
                  ? 'text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-200' 
                  : 'text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800'
              }`}
              aria-label="Close sidebar"
              type="button"
            >
              <IoClose className="w-6 h-6" />
            </button>
          </div>
          
          {/* Sidebar content */}
          <div className="p-6 h-[calc(100%-theme(py-6)*2)] overflow-y-auto">
            <nav className="space-y-2">
              {navLinks.slice(0, 3).map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  onClick={onClose}
                  className={`block py-3 px-4 rounded-xl font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                    theme 
                      ? 'text-emerald-100 hover:bg-emerald-500/20 hover:text-emerald-300 hover:shadow-lg hover:shadow-emerald-500/20' 
                      : 'text-slate-700 hover:bg-emerald-100 hover:text-emerald-700 hover:shadow-lg hover:shadow-emerald-100/50'
                  } ${isActive(link.href) ? (theme ? 'bg-emerald-500/20' : 'bg-emerald-100') : ''}`}
                >
                  {link.emoji} {link.label}
                </Link>
              ))}

              {/* Sports Dropdown in Sidebar */}
              <div className="space-y-1">
                <button
                  onClick={() => setShowSportsDropdown(!showSportsDropdown)}
                  className={`w-full flex items-center justify-between py-3 px-4 rounded-xl font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                    theme 
                      ? 'text-emerald-100 hover:bg-emerald-500/20 hover:text-emerald-300 hover:shadow-lg hover:shadow-emerald-500/20' 
                      : 'text-slate-700 hover:bg-emerald-100 hover:text-emerald-700 hover:shadow-lg hover:shadow-emerald-100/50'
                  }`}
                  aria-expanded={showSportsDropdown}
                  aria-haspopup="true"
                  type="button"
                >
                  <span>🏆 Sports</span>
                  <IoChevronDown className={`w-5 h-5 transition-transform duration-200 ${showSportsDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {showSportsDropdown && (
                  <div className={`ml-4 space-y-1 border-l-2 pl-4 transition-all duration-200 ${
                    theme 
                      ? 'border-emerald-500/30' 
                      : 'border-emerald-200/50'
                  }`}>
                    {sportsLinks.map((sport) => (
                      <Link
                        key={sport.href}
                        href={sport.href}
                        onClick={onClose}
                        className={`block py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                          theme 
                            ? 'text-emerald-200 hover:bg-emerald-500/20 hover:text-emerald-300' 
                            : 'text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
                        } ${isActive(sport.href) ? (theme ? 'bg-emerald-500/20' : 'bg-emerald-50') : ''}`}
                      >
                        {sport.emoji} {sport.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {navLinks.slice(3).map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  onClick={onClose}
                  className={`block py-3 px-4 rounded-xl font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                    theme 
                      ? 'text-emerald-100 hover:bg-emerald-500/20 hover:text-emerald-300 hover:shadow-lg hover:shadow-emerald-500/20' 
                      : 'text-slate-700 hover:bg-emerald-100 hover:text-emerald-700 hover:shadow-lg hover:shadow-emerald-100/50'
                  } ${isActive(link.href) ? (theme ? 'bg-emerald-500/20' : 'bg-emerald-100') : ''}`}
                >
                  {link.emoji} {link.label}
                </Link>
              ))}
            </nav>

            {/* Decorative bottom accent */}
            <div className={`mt-8 p-4 rounded-xl ${
              theme 
                ? 'bg-gradient-to-r from-emerald-500/10 to-green-400/10 border border-emerald-500/20' 
                : 'bg-gradient-to-r from-emerald-100/50 to-green-50/50 border border-emerald-200/30'
            }`}>
              <p className={`text-sm font-medium text-center ${
                theme 
                  ? 'text-emerald-300' 
                  : 'text-emerald-700'
              }`}>
                Agroterra Sport Academy
              </p>
              <p className={`text-xs text-center mt-1 ${
                theme 
                  ? 'text-emerald-400' 
                  : 'text-emerald-600'
              }`}>
                Excellence in Sports
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}