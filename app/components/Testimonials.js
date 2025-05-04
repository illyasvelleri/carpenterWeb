

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Testimonials Section
const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
            quote: "CraftSpace transformed our restaurant with stunning custom furniture that perfectly balances style and durability. Our customers regularly compliment the unique design.",
            author: "Sarah Johnson",
            position: "Owner, Altitude Restaurant",
            rating: 5
        },
        {
            quote: "The team delivered exceptional quality for our medical center. Their attention to detail and understanding of healthcare requirements resulted in beautiful, functional spaces.",
            author: "Dr. Michael Chen",
            position: "Director, Panorama Medical",
            rating: 5
        },
        {
            quote: "Working with CraftSpace on our office redesign was seamless. Their craftsmanship is unmatched, and they completed the project ahead of schedule.",
            author: "Alex Rodriguez",
            position: "Operations Manager, Nexus Technologies",
            rating: 4
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-24 bg-[#f4f1ed]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3e3e3e] mb-4">Client Testimonials</h2>
                    <p className="text-lg text-[#666666] max-w-2xl mx-auto">
                        Hear from our satisfied clients about their experience working with us.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-xl p-8 md:p-12 shadow-sm"
                        >
                            <div className="flex justify-center mb-6">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#d8a25a" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                ))}
                            </div>
                            <blockquote className="text-xl text-center text-[#3e3e3e] italic mb-8">
                                &quot;{testimonials[currentIndex].quote}&quot;
                            </blockquote>

                            <div className="text-center">
                                <div className="font-semibold text-[#3e3e3e]">{testimonials[currentIndex].author}</div>
                                <div className="text-[#666666]">{testimonials[currentIndex].position}</div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-[#d8a25a]' : 'bg-[#d8a25a]/30'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>

                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12">
                        <button
                            onClick={prevTestimonial}
                            className="p-2 rounded-full bg-white shadow-md text-[#3e3e3e] hover:text-[#d8a25a] transition-colors focus:outline-none"
                            aria-label="Previous testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>

                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 md:translate-x-12">
                        <button
                            onClick={nextTestimonial}
                            className="p-2 rounded-full bg-white shadow-md text-[#3e3e3e] hover:text-[#d8a25a] transition-colors focus:outline-none"
                            aria-label="Next testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Testimonials;
