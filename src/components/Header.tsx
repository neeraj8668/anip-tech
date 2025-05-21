'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#18191d]/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://aniptech.com/images/logo.png"
              alt="Anip Technologies"
              width={56}
              height={56}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-pink-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-pink-500 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-pink-500 transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-white hover:text-pink-500 transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="text-white hover:text-pink-500 transition-colors">
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold rounded-lg hover:from-yellow-500 hover:to-pink-500 transition-all duration-200"
            >
              BUY NOW
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#18191d]/95 backdrop-blur-lg rounded-b-2xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-white hover:text-pink-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-white hover:text-pink-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-white hover:text-pink-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="block px-3 py-2 text-white hover:text-pink-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-white hover:text-pink-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold rounded-lg hover:from-yellow-500 hover:to-pink-500 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                BUY NOW
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 