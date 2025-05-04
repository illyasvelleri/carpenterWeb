import { motion, AnimatePresence } from 'framer-motion';

// Services Section
const Services = () => {
    const services = [
        {
            title: "Custom Cabinetry",
            description: "Precision-crafted cabinets tailored to your commercial space's unique requirements and aesthetic vision.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#d8a25a" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            title: "Restaurant Furnishing",
            description: "Stylish and durable tables, chairs, booths, and counters designed for high-traffic restaurant environments.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#d8a25a" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
            )
        },
        {
            title: "Commercial Fitouts",
            description: "Complete interior solutions for offices, clinics, and retail spaces that balance functionality with design.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#d8a25a" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            title: "Healthcare Interiors",
            description: "Specialized furnishings for hospitals and clinics that meet strict hygiene standards while maintaining comfort.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#d8a25a" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            )
        },
    ];

    return (
        <section id="services" className="py-24 bg-[#f4f1ed]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3e3e3e] mb-4">Our Services</h2>
                    <p className="text-lg text-[#666666] max-w-2xl mx-auto">
                        We offer comprehensive commercial carpentry and interior design solutions tailored to your business needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-[#3e3e3e] mb-3">{service.title}</h3>
                            <p className="text-[#666666]">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Services;