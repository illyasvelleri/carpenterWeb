'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import ScrollProgressBar from '../components/ScrollProgressBar';
import Navbar from '../components/Navbar';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Services = () => {
  const [activeSection] = useState('services');

  const services = [
    {
      id: 1,
      title: 'Custom Cabinetry',
      description: 'Precision-crafted cabinets tailored to your commercial space’s unique requirements, blending aesthetic vision with unmatched functionality.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#d8a25a"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Restaurant Furnishing',
      description: 'Stylish, durable tables, chairs, booths, and counters designed for high-traffic restaurant environments, ensuring elegance and resilience.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#d8a25a"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Commercial Fitouts',
      description: 'Comprehensive interior solutions for offices, clinics, and retail spaces, balancing cutting-edge design with practical functionality.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#d8a25a"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Healthcare Interiors',
      description: 'Specialized furnishings for hospitals and clinics, meeting stringent hygiene standards while prioritizing comfort and style.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#d8a25a"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Bespoke Furniture Design',
      description: 'Custom-designed furniture pieces crafted to elevate your space with unique style and superior craftsmanship.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#d8a25a"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 9h18M6 12h12v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6zM9 12v-2a2 2 0 012-2h2a2 2 0 012 2v2"
          />
        </svg>
      ),
    },
    {
      id: 6,
      title: 'Lighting Design Solutions',
      description: 'Tailored lighting plans that enhance ambiance and functionality, creating inviting and dynamic commercial environments.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#d8a25a"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-3-9v3m-9 6h18M5 21h14a2 2 0 002-2v-4H3v4a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 7,
      title: 'Sustainable Interior Consulting',
      description: 'Eco-conscious design strategies using sustainable materials and practices to create environmentally responsible spaces.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#d8a25a"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"
          />
        </svg>
      ),
    },
    {
      id: 8,
      title: 'Space Planning & Optimization',
      description: 'Strategic space planning to maximize functionality and flow, tailored to your commercial or residential needs.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#d8a25a"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 5h16M4 10h16M4 15h16M4 20h16"
          />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen font-sans antialiased">
      <ScrollProgressBar />
      <Navbar activeSection={activeSection} />
      <WhatsAppButton />
      <ScrollToTopButton />
      <section
        id="services"
        className="relative min-h-screen py-24 flex items-center justify-center overflow-hidden bg-gray-50"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-gray-100/80 to-white/80" />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/5 left-1/5 w-32 h-32 rounded-full bg-amber-500/10 backdrop-blur-sm"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/5 w-24 h-24 rounded-full bg-amber-500/15 backdrop-blur-sm"
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
              variants={itemVariants}
            >
              <span className="block">Explore Our</span>
              <span className="block bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Discover our comprehensive interior design and carpentry solutions, crafted to elevate your spaces with luxury, sustainability, and functionality.
            </motion.p>
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-amber-500/10 text-amber-600 border border-amber-500/20">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
                Award-Winning Design Studio
              </span>
            </motion.div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="relative bg-white/90 p-8 rounded-xl shadow-md hover:shadow-lg backdrop-blur-sm border border-amber-500/10 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div className="mb-6" variants={itemVariants}>
                  {service.icon}
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold text-gray-900 mb-3"
                  variants={itemVariants}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-sm leading-relaxed"
                  variants={itemVariants}
                >
                  {service.description}
                </motion.p>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  variants={itemVariants}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div className="text-center mt-12" variants={itemVariants}>
            <Link href="/contact">
              <motion.button
                className="group relative px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <motion.div
            className="flex flex-col items-center cursor-pointer group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-gray-600/60 text-sm font-medium mb-2 group-hover:text-gray-600/80 transition-colors">
              Explore More
            </span>
            <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex justify-center group-hover:border-gray-400/80 transition-colors">
              <motion.div
                className="w-1 h-3 bg-gray-400/80 rounded-full mt-2"
                animate={{ height: [12, 6, 12], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;