'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md z-50 shadow-sm border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            Lucas Ho
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-300 hover:text-white transition">
              Home
            </Link>
            <Link href="/#about" className="text-gray-300 hover:text-white transition">
              About
            </Link>
            <Link href="/#skills" className="text-gray-300 hover:text-white transition">
              Skills
            </Link>
            <Link href="/#experience" className="text-gray-300 hover:text-white transition">
              Experience
            </Link>
            <Link href="/#projects" className="text-gray-300 hover:text-white transition">
              Projects
            </Link>
            <Link href="/#comments" className="text-gray-300 hover:text-white transition">
              Comments
            </Link>
            <Link href="/#contact" className="text-gray-300 hover:text-white transition">
              Contact
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 rounded">
              Home
            </Link>
            <Link href="/#about" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 rounded">
              About
            </Link>
            <Link href="/#skills" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 rounded">
              Skills
            </Link>
            <Link href="/#experience" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 rounded">
              Experience
            </Link>
            <Link href="/#projects" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 rounded">
              Projects
            </Link>
            <Link href="/#comments" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 rounded">
              Comments
            </Link>
            <Link href="/#contact" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 rounded">
              Contact
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition text-center mx-4 mt-2"
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

