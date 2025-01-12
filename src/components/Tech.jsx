import React, { useState, useEffect } from "react";
import { SectionWrapper } from "../hoc"; // SectionWrapper HOC to wrap the component
import { technologies } from "../constants"; // Technologies data
import { motion } from "framer-motion"; // For animations

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15, // Slightly faster stagger for smoother flow
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const Tech = () => {
  // Cursor effect state
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Track cursor movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative">
      {/* Heading */}
      <motion.h1
        className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-center text-gray-600 max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        A showcase of technologies that I use to build robust and interactive applications. Click or hover to explore.
      </motion.p>

      {/* Technology Cards */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {technologies.map((technology) => (
          <motion.div
            key={technology.name}
            className="relative group p-4 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl shadow-lg transform transition-all duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Icon */}
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-16 h-16 mx-auto mb-4 drop-shadow-lg"
              onError={(e) => (e.target.src = "/path/to/default-icon.png")}
            />
            {/* Technology Name */}
            <p className="text-center text-white text-sm font-semibold">
              {technology.name}
            </p>
            {/* Interactive Glow */}
            <div className="absolute inset-0 rounded-xl bg-blue-500 opacity-0 group-hover:opacity-40 transition duration-300"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "skill");
