import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";

// Card Flip Animation Variants
const cardVariants = {
  hidden: { opacity: 0, rotateY: -180 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.6, type: "spring", stiffness: 100 },
  },
};

const SkillCard = ({ technology }) => {
  return (
    <motion.div
      className="relative group w-full max-w-xs mx-auto transform perspective-1000"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full h-[300px] bg-white shadow-xl rounded-lg overflow-hidden transform-style-preserve-3d group-hover:rotate-y-180 transition-all duration-500">
        {/* Front of the card */}
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-teal-500 text-white p-6 flex flex-col justify-center items-center rounded-lg">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-20 h-20 mb-4 transform transition duration-300 group-hover:scale-110"
            onError={(e) => (e.target.src = "/path/to/default-icon.png")}
          />
          <h3 className="text-lg font-semibold">{technology.name}</h3>
        </div>

        {/* Back of the card (when flipped) */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gray-800 text-white p-6 flex items-center justify-center text-center transform rotate-y-180">
          <p className="text-sm">{technology.description || "No description available."}</p>
        </div> */}
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div className="relative px-6 sm:px-8 md:px-16 py-12">
      {/* Section Heading */}
      <motion.h1
        className="text-center text-5xl font-extrabold text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h1>

      {/* Section Description */}
      <motion.p
        className="text-center text-gray-300 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Here’s a collection of technologies and tools that I specialize in. These are the building blocks I use to create dynamic, scalable applications and solutions.
      </motion.p>

      {/* Technology Cards */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3, ease: "easeOut" }}
      >
        {technologies.map((technology) => (
          <SkillCard technology={technology} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "skill");
