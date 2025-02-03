"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg sticky w-full z-50 h-28 flex justify-center items-center">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold flex items-center gap-2"
        >
          <Heart className="text-white" size={32} />
          <span className="tracking-wide">LoveNest</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-semibold text-lg">
          <li>
            <Link
              href="/"
              className="hover:text-pink-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className="hover:text-pink-300 transition duration-300"
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-pink-300 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-pink-300 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-pink-600 text-white text-center py-6 space-y-6 absolute w-full top-full left-0 shadow-lg"
        >
          <Link href="/" className="block text-xl py-3 hover:text-pink-300">
            Home
          </Link>
          <Link href="/cart" className="block text-xl py-3 hover:text-pink-300">
            Orders
          </Link>
          <Link
            href="/about"
            className="block text-xl py-3 hover:text-pink-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-xl py-3 hover:text-pink-300"
          >
            Contact
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
