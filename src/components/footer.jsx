import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black-100 py-2"
    >
      <div className="container mx-auto text-center">
        <p className="text-secondary text-xs mt-1 flex justify-between items-center">
          © {new Date().getFullYear()} Raghvendrasing Pal. All Rights Reserved.
          <div className="flex justify-end gap-3 items-center  mr-1">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white hover:text-blue-500 text-xl transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-blue-500 text-xl transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:dev.raghvendrasing@gmail.com"
              aria-label="Email"
              className="text-white hover:text-blue-500 text-xl transition-colors duration-300"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://instagram.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-blue-500 text-xl transition-colors duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
