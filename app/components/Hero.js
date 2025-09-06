// 'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    // Background images with subtle patterns
    const backgroundImages = [
        'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(245, 245, 245, 0.7)), url("/Images/restaurant-project.jpg")',
        'linear-gradient(135deg, rgba(245, 245, 245, 0.9), rgba(232, 228, 221, 0.7)), url("/Images/restaurant-project.jpg")',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

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
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50"
        >
            {/* Fading background */}
            <motion.div
                key={currentImage}
                className="absolute inset-0"
                style={{
                    backgroundImage: backgroundImages[currentImage],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <motion.div
                    className="text-center lg:text-left lg:w-1/2"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
                        variants={itemVariants}
                    >
                        <span className="block">Crafting Spaces</span>
                        <span className="block bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                            That Inspire
                        </span>
                    </motion.h1>
                    <motion.p
                        className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed"
                        variants={itemVariants}
                    >
                        Transform your environment with our award-winning interior design, blending timeless elegance with innovative functionality.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                        variants={itemVariants}
                    >
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
                        <Link href="/portfolio">
                            <motion.button
                                className="px-6 py-3 text-gray-900 font-medium rounded-full border-2 border-gray-300 hover:bg-gray-100 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Portfolio
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    className="lg:w-1/2 relative"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="relative w-full max-w-lg mx-auto">
                        <Image
                            src="/Images/restaurant-project.jpg"
                            alt="Interior Design Showcase"
                            width={600}
                            height={400}
                            className="rounded-xl shadow-lg"
                            objectFit="cover"
                        />
                        <motion.div
                            className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-500/20 rounded-xl -z-10"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                <motion.div
                    className="flex flex-col items-center cursor-pointer group"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex justify-center group-hover:border-gray-400/80 transition-colors">
                        <motion.div
                            className="w-1 h-3 bg-gray-400/80 rounded-full mt-2"
                            animate={{ height: [12, 6, 12], opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Background indicators */}
            <div className="absolute bottom-8 right-8 flex space-x-2 z-20">
                {backgroundImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImage === index
                                ? 'bg-amber-500 scale-125'
                                : 'bg-gray-400/50 hover:bg-gray-400/80'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;