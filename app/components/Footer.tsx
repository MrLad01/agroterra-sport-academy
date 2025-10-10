import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useTheme } from '../context/ThemeContext';

export default function Footer() {

    const { toggleTheme } = useTheme();

  return (
    <footer
            className={`py-16 px-4 sm:px-6 lg:px-8 ${
                toggleTheme ? "bg-slate-900 border-t border-emerald-500/30" : "bg-emerald-50 border-t border-emerald-200/50"
            } relative z-10`}
            >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-500 to-green-500 text-transparent bg-clip-text mb-4">
                    Agroterra Sport Academy
                </h3>
                <p className="text-sm text-slate-600">
                    Empowering athletes to achieve greatness since 2024.
                </p>
                </div>
                <div>
                <h4 className="text-lg font-semibold mb-4 text-emerald-500">Quick Links</h4>
                <ul className="space-y-2">
                    {[
                    { href: "/", label: "Home" },
                    { href: "/events", label: "Events" },
                    { href: "/lodgings", label: "Lodgings" },
                    { href: "/about", label: "About Us" },
                    { href: "/contact", label: "Contact Us" },
                    ].map((link) => (
                    <li key={link.href}>
                        <Link
                        href={link.href}
                        className="text-sm transition-colors duration-200 hover:underline hover:underline-offset-4 text-slate-600 hover:text-emerald-500"
                        >
                        {link.label}
                        </Link>
                    </li>
                    ))}
                </ul>
                </div>
                <div>
                <h4 className="text-lg font-semibold mb-4 text-emerald-500">Connect With Us</h4>
                <p className="text-sm mb-4 text-slate-600">
                    Email: info@agroterrasport.com
                    <br />
                    Phone: +234 123 456 7890
                </p>
                <div className="flex gap-4">
                    {[
                    { href: "https://facebook.com", icon: <FaFacebook size={24} />, label: "Facebook" },
                    { href: "https://twitter.com", icon: <FaTwitter size={24} />, label: "Twitter" },
                    { href: "https://instagram.com", icon: <FaInstagram size={24} />, label: "Instagram" },
                    { href: "https://linkedin.com", icon: <FaLinkedin size={24} />, label: "LinkedIn" },
                    ].map((social) => (
                    <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 text-slate-600 hover:text-emerald-500"
                        aria-label={social.label}
                    >
                        {social.icon}
                    </a>
                    ))}
                </div>
                </div>
            </div>
            <div className="mt-8 text-center text-sm text-slate-600">
                &copy; {new Date().getFullYear()} Agroterra Sport Academy. All rights reserved.
            </div>
    </footer>
  )
}
