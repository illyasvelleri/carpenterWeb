
import { motion, AnimatePresence } from 'framer-motion';

// Hero Section
const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#f4f1ed] to-[#e9e4dd]">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#3e3e3e]/10" />
            </div>
            <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h1
                    className="text-5xl md:text-6xl font-bold text-[#3e3e3e] mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Craftsmanship Meets Modern Design
                </motion.h1>
                <motion.p
                    className="text-xl md:text-2xl text-[#666666] mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    We transform commercial spaces with premium carpentry and thoughtful interior design.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <button className="bg-[#d8a25a] text-white font-medium py-3 px-8 rounded-lg hover:bg-[#c79248] transition-colors shadow-md">
                        Get Free Quote
                    </button>
                </motion.div>
            </div>
            <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#3e3e3e" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
};
export default Hero;