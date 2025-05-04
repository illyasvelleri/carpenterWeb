'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Mobile navigation links
const sections = ['home', 'about', 'services', 'projects', 'testimonials', 'contact'];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.3 } }
  };

  return (
    <motion.header
      className="absolute inset-x-0 top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <nav className="flex items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center -m-1.5 p-1.5">
            {/* <div className="h-10 w-10 rounded-full bg-[#ffe808] flex items-center justify-center">
              <Image
                src="/images/Logo.png"
                alt="True Fix Logo"
                width={32}
                height={32}
                className="h-8 w-8"
                priority
                sizes="(max-width: 768px) 32px, 32px"
              />
            </div> */}
            <span
              className="ml-2 text-xl font-bold text-gray-900"
              style={{ fontFamily: "'Tactic Sans', 'Inter', system-ui, sans-serif" }}
            >
              True Fix
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <motion.button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2.5 text-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Open menu"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {sections.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              <a
                href={`#${item}`}
                className="relative text-sm font-semibold text-gray-900 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-500"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Follow */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <motion.a
            href="https://www.instagram.com/gasmocion"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-green-500 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <FaInstagram className="text-lg" />
            Follow <span aria-hidden="true">→</span>
          </motion.a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden bg-gray-800 bg-opacity-75 flex items-center justify-end"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.3 } },
            exit: { opacity: 0, transition: { duration: 0.3 } }
          }}
        >
          <motion.div
            className="relative w-full max-w-sm h-full max-h-screen overflow-y-auto bg-white p-6"
            variants={mobileMenuVariants}
          >
            <motion.button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </motion.button>

            <div className="mt-8">
              {sections.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <a
                    href={`#${item}`}
                    className="block px-4 py-2 text-lg font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-500 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-6 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <a
                href="https://www.instagram.com/gasmocion"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-green-500 transition"
              >
                <FaInstagram className="text-lg" />
                Follow <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.header>
  );
}
