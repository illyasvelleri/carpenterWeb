"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

// Projects Section
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "restaurant", name: "Restaurants" },
    { id: "office", name: "Offices" },
    { id: "healthcare", name: "Healthcare" },
  ]

  const projects = [
    {
      title: "Oasis Restaurant",
      category: "restaurant",
      description:
        "Custom dining furniture and bar with sustainable materials.",
      image: "/Images/restaurant-project.jpg",
    },
    {
      title: "Vista Medical Center",
      category: "healthcare",
      description:
        "Reception area and patient room furnishings with antimicrobial finishes.",
      image: "/Images/healthcare-project.jpg",
    },
    {
      title: "Horizon Tech Offices",
      category: "office",
      description:
        "Open-concept workstations and collaborative spaces for a modern tech company.",
      image: "/Images/office-project.jpg",
    },
    {
      title: "Skyline Bistro",
      category: "restaurant",
      description:
        "Full interior renovation including custom booths and statement bar.",
      image: "/Images/restaurant-project2.jpg",
    },
    {
      title: "Wellness Clinic",
      category: "healthcare",
      description:
        "Calming reception area and treatment room cabinetry.",
      image: "/Images/healthcare-project2.jpg",
    },
    {
      title: "Creative Agency HQ",
      category: "office",
      description:
        "Flexible meeting spaces and creative studios with custom storage solutions.",
      image: "/Images/office-project2.jpg",
    },
  ]

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3e3e3e] mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            Browse our portfolio of commercial carpentry and interior design
            projects.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm bg-[#f4f1ed] p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeCategory === category.id
                    ? "bg-white text-[#3e3e3e] shadow-sm"
                    : "text-[#666666] hover:text-[#3e3e3e]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                className="bg-[#f4f1ed] rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                layout
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-sm font-medium text-[#d8a25a] uppercase tracking-wider">
                    {project.category.charAt(0).toUpperCase() +
                      project.category.slice(1)}
                  </span>
                  <h3 className="text-xl font-semibold text-[#3e3e3e] mt-2 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#666666]">{project.description}</p>
                  <button className="mt-4 text-[#d8a25a] font-medium hover:text-[#c79248] transition-colors flex items-center">
                    View Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Projects
