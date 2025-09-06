'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Services = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Backgrounds with rotating gradient patterns
  const backgroundImages = [
    `linear-gradient(135deg, rgba(244, 241, 237, 0.9), rgba(232, 228, 221, 0.7)), url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d8a25a' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    `linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(244, 241, 237, 0.7)), url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d8a25a' fill-opacity='0.15'%3E%3Cpath d='M20 20c0-8.837-7.163-16-16-16S-12 11.163-12 20s7.163 16 16 16 16-7.163 16-16zm0 0c0 8.837 7.163 16 16 16s16-7.163 16-16-7.163-16-16-16-16 7.163-16 16z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const services = [
    {
      title: 'Custom Cabinetry',
      description:
        'Precision-crafted cabinets tailored to your commercial space’s unique requirements, blending aesthetic vision with unmatched functionality.',
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
      title: 'Restaurant Furnishing',
      description:
        'Stylish, durable tables, chairs, booths, and counters designed for high-traffic restaurant environments, ensuring both elegance and resilience.',
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
      title: 'Commercial Fitouts',
      description:
        'Comprehensive interior solutions for offices, clinics, and retail spaces, balancing cutting-edge design with practical functionality.',
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
      title: 'Healthcare Interiors',
      description:
        'Specialized furnishings for hospitals and clinics, meeting stringent hygiene standards while prioritizing comfort and style.',
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
  ];

  return (
    <section id="services" className="relative min-h-screen py-24 flex items-center overflow-hidden">
      {/* Fading background */}
      <motion.div
        key={currentImage}
        className="absolute inset-0"
        style={{
          backgroundImage: backgroundImages[currentImage],
          backgroundSize: 'cover, 80px 80px',
          backgroundPosition: 'center, 0 0',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
      />

      {/* Gradient overlay with glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-gray-100/60 to-white/80 backdrop-blur-sm" />

      {/* Floating design elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/5 left-1/5 w-32 h-32 rounded-full bg-[#d8a25a]/10 backdrop-blur-sm"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-24 h-24 rounded-full bg-[#d8a25a]/15 backdrop-blur-sm"
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
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-[#d8a25a] backdrop-blur-md border border-[#d8a25a]/20 mb-6">
              <span className="w-2 h-2 bg-[#d8a25a] rounded-full mr-2 animate-pulse"></span>
              Award-Winning Design Studio
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3e3e3e] mb-4"
            variants={itemVariants}
          >
            <span className="block">Elevating</span>
            <span className="block bg-gradient-to-r from-[#d8a25a] to-amber-400 bg-clip-text text-transparent">
              Commercial Spaces
            </span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-[#666666] max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Comprehensive carpentry and interior design solutions tailored to your business, blending{' '}
            <span className="text-[#d8a25a] font-medium">luxury aesthetics</span> with functional excellence.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-white/90 p-8 rounded-xl shadow-sm hover:shadow-lg backdrop-blur-sm border border-[#d8a25a]/10 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              variants={itemVariants}
            >
              <motion.div className="mb-6" variants={itemVariants}>
                {service.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-semibold text-[#3e3e3e] mb-3"
                variants={itemVariants}
              >
                {service.title}
              </motion.h3>
              <motion.p className="text-[#666666] leading-relaxed" variants={itemVariants}>
                {service.description}
              </motion.p>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#d8a25a]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"
                variants={itemVariants}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div className="text-center mt-12" variants={itemVariants}>
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-[#d8a25a] to-amber-400 text-white font-semibold rounded-full shadow-lg hover:shadow-amber-400/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              Explore Our Services
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-[#d8a25a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          className="flex flex-col items-center cursor-pointer group"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[#666666]/60 text-sm font-medium mb-2 group-hover:text-[#666666]/80 transition-colors">
            Discover More
          </span>
          <div className="w-6 h-10 border-2 border-[#d8a25a]/30 rounded-full flex justify-center group-hover:border-[#d8a25a]/50 transition-colors">
            <motion.div
              className="w-1 h-3 bg-[#d8a25a]/60 rounded-full mt-2"
              animate={{ height: [12, 6, 12], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* Background Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImage === index
                ? 'bg-[#d8a25a] scale-125'
                : 'bg-gray-300/50 hover:bg-gray-300/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Services; 