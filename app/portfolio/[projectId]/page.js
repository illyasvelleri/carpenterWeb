'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import projects from '@/data/projects';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId) || projects[0];

  // Debug image paths
  console.log('Selected Project:', project);
  console.log('Hero Image:', project.heroImage);
  console.log('Gallery Images:', project.gallery);

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
      <Navbar activeSection="portfolio" />
      <WhatsAppButton />
      <ScrollToTopButton />
      <section
        id="project-detail"
        className="relative min-h-screen py-24 flex items-center justify-center overflow-hidden bg-gray-50"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-gray-100/80 to-white/80" />
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
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
              variants={itemVariants}
            >
              {project.title}
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              {project.description}
            </motion.p>
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-amber-500/10 text-amber-600 border border-amber-500/20">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </span>
            </motion.div>
          </motion.div>
          <motion.div className="mb-16" variants={itemVariants}>
            <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={project.heroImage || 'https://via.placeholder.com/1200x600?text=Hero+Image'}
                alt={project.title}
                fill
                className="object-cover"
                onError={(e) => {
                  console.log(`Failed to load hero image: ${project.heroImage}`);
                  e.target.src = 'https://via.placeholder.com/1200x600?text=Hero+Image';
                }}
              />
            </div>
          </motion.div>
          <motion.div className="mb-16" variants={containerVariants}>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-amber-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-base">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div className="mb-16" variants={containerVariants}>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative w-full h-64 rounded-xl overflow-hidden shadow-md"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Image
                    src={image || 'https://via.placeholder.com/600x400?text=Gallery+Image'}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      console.log(`Failed to load gallery image: ${image}`);
                      e.target.src = 'https://via.placeholder.com/600x400?text=Gallery+Image';
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
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

export default ProjectDetail;