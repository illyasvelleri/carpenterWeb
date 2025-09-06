'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ScrollProgressBar from '../components/ScrollProgressBar';
import Navbar from '../components/Navbar';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const activeSection = 'contact';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
        id="contact"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 py-24"
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
          <div className="lg:flex lg:items-center lg:space-x-12">
            {/* Text Content */}
            <motion.div className="lg:w-1/2 mb-12 lg:mb-0" variants={itemVariants}>
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
                variants={itemVariants}
              >
                <span className="block">Start Your</span>
                <span className="block bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                  Dream Project
                </span>
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-md leading-relaxed"
                variants={itemVariants}
              >
                Let’s bring your vision to life with our award-winning interior design expertise. Contact us to begin crafting a space that inspires.
              </motion.p>
              <motion.div className="flex items-center gap-4" variants={itemVariants}>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-amber-500/10 text-amber-600 border border-amber-500/20">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
                  Trusted by 500+ Clients
                </span>
              </motion.div>
            </motion.div>

            {/* Form Content */}
            <motion.div
              className="lg:w-1/2 bg-white/90 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-amber-500/10"
              variants={itemVariants}
            >
              <form className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-amber-500/30 transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-amber-500/30 transition-all duration-300"
                    placeholder="Your Email"
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-amber-500/30 transition-all duration-300"
                    required
                  >
                    <option value="">Select Project Type</option>
                    <option value="commercial">Commercial Fitout</option>
                    <option value="restaurant">Restaurant Furnishing</option>
                    <option value="cabinetry">Custom Cabinetry</option>
                    <option value="healthcare">Healthcare Interiors</option>
                  </select>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-amber-500/30 transition-all duration-300"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    className="group relative w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Submit Your Project
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
                </motion.div>
              </form>
            </motion.div>
          </div>
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

export default Contact;