'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import ScrollProgressBar from '../components/ScrollProgressBar';
import Navbar from '../components/Navbar';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTopButton from '../components/ScrollToTopButton';

const OurStory = () => {
  const [activeSection] = useState('our-story');

  const milestones = [
    {
      year: '2008',
      title: 'Founded with Passion',
      description: 'Our studio was established with a vision to transform spaces through innovative design and craftsmanship.',
    },
    {
      year: '2012',
      title: 'First Major Award',
      description: 'Received our first national design award for an iconic restaurant fitout, setting a new standard in the industry.',
    },
    {
      year: '2018',
      title: 'Expanded Services',
      description: 'Introduced sustainable design and bespoke furniture services, broadening our impact in commercial interiors.',
    },
    {
      year: '2023',
      title: 'Global Recognition',
      description: 'Completed 500+ projects and earned international acclaim for innovative healthcare and commercial fitouts.',
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
        id="our-story"
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
              <span className="block">Discover Our</span>
              <span className="block bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                Story
              </span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              From humble beginnings to global recognition, our journey is rooted in passion for creating timeless, functional, and inspiring spaces.
            </motion.p>
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-amber-500/10 text-amber-600 border border-amber-500/20">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
                Over 15 Years of Excellence
              </span>
            </motion.div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            className="mb-16 bg-white/90 p-8 rounded-xl shadow-md backdrop-blur-sm border border-amber-500/10"
            variants={itemVariants}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              We are dedicated to transforming spaces into works of art that inspire, endure, and reflect the unique vision of our clients. By blending innovative design, sustainable practices, and expert craftsmanship, we create environments that elevate experiences and stand the test of time.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div className="mb-16" variants={containerVariants}>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-8">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-500/30"></div>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} justify-between`}
                  variants={itemVariants}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
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

export default OurStory;