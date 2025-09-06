'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Background images for subtle transitions
  const backgroundImages = [
    `linear-gradient(135deg, rgba(245, 245, 245, 0.9), rgba(255, 255, 255, 0.7)), url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d8a25a' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    `linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(232, 228, 221, 0.7)), url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d8a25a' fill-opacity='0.15'%3E%3Cpath d='M20 20c0-8.837-7.163-16-16-16S-12 11.163-12 20s7.163 16 16 16 16-7.163 16-16zm0 0c0 8.837 7.163 16 16 16s16-7.163 16-16-7.163-16-16-16-16 7.163-16 16z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 flex items-center overflow-hidden"
    >
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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-gray-100/70 to-white/90" />

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
        <div className="lg:flex lg:items-center lg:space-x-12">
          {/* Image Section */}
          <motion.div className="lg:w-1/2 mb-12 lg:mb-0" variants={itemVariants}>
            <div className="relative">
              <div className="aspect-w-3 aspect-h-2 rounded-xl overflow-hidden">
                <div className="w-full h-96 bg-[#e9e4dd] rounded-xl">
                  <Image
                    src="/Images/restaurant-project2.jpg"
                    alt="CraftSpace Project"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </div>
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#d8a25a]/10 rounded-xl -z-10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3e3e3e] mb-6"
              variants={itemVariants}
            >
              <span className="block">Crafting</span>
              <span className="block bg-gradient-to-r from-[#d8a25a] to-amber-400 bg-clip-text text-transparent">
                Excellence
              </span>
              <span className="block">Since 2010</span>
            </motion.h2>
            <motion.p
              className="text-lg text-[#666666] mb-8 leading-relaxed"
              variants={itemVariants}
            >
              CraftSpace transforms commercial environments with{' '}
              <span className="text-[#d8a25a] font-medium">exceptional carpentry</span> and thoughtful interior design. Blending traditional craftsmanship with modern innovation, we create spaces that are both functional and breathtaking.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              variants={itemVariants}
            >
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#d8a25a"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ),
                  title: 'Expert Craftsmanship',
                  description: 'Precision work with premium materials',
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#d8a25a"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ),
                  title: 'Sustainable Practices',
                  description: 'Eco-friendly materials and methods',
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#d8a25a"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ),
                  title: 'Timely Delivery',
                  description: 'Projects completed on schedule',
                },

                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#d8a25a"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ),
                  title: 'Customer Satisfaction',
                  description: '95% repeat client rate',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 h-10 w-10 bg-[#d8a25a]/20 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#3e3e3e]">
                      {item.title}
                    </h3>
                    <p className="text-[#666666]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <Link href="/aboutUs">
              <motion.button
                className="group relative px-8 py-3 bg-gradient-to-r from-[#d8a25a] to-amber-400 text-white font-semibold rounded-full shadow-lg hover:shadow-amber-400/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <span className="relative z-10 flex items-center">
                  Discover Our Story
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
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Background indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentImage === index
                ? 'bg-[#d8a25a] scale-125'
                : 'bg-gray-300/50 hover:bg-gray-300/80'
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default About;