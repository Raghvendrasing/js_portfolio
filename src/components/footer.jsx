import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaBriefcase, FaFilePdf, FaTimes } from "react-icons/fa";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleResumeClick = () => {
    setIsModalOpen(true);
  };

  const handleModalAction = (action) => {
    if (action === "download") {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsModalOpen(false);
      }, 3000);
      const link = document.createElement("a");
      link.href = "https://drive.google.com/u/0/uc?id=1WDs7q6EZR0QkmTfgwij_hfo8FNIFT6AI&export=download";
      link.download = "Raghvendrasing_Pal_Resume-Call-(+918999006347).pdf";
      link.click();
    } else if (action === "view") {
      window.open("https://drive.google.com/file/d/1WDs7q6EZR0QkmTfgwij_hfo8FNIFT6AI/view?usp=drive_link", "_blank");
      setIsModalOpen(false);
    } else {
      setIsModalOpen(false);
    }
  };

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
          <div className="flex justify-end gap-3 items-center mr-1">
            <a
              href="https://github.com/Raghvendrasing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="Go to GitHub"
              className="text-white hover:text-blue-500 text-xl transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/raghupal2001/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="Go to LinkedIn"
              className="text-white hover:text-blue-500 text-xl transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.naukri.com/mnjuser/profile?id=&altresid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Naukri"
              title="Go to Naukri Profile"
              className="text-white hover:text-blue-500 text-xl transition-colors duration-300"
            >
              <FaBriefcase />
            </a>
            <a
              href="mailto:dev.raghvendrasing@gmail.com"
              aria-label="Email"
              title="Send an Email"
              className="text-white hover:text-blue-500 text-xl transition-colors duration-300"
            >
              <FaEnvelope />
            </a>
            <button
              onClick={handleResumeClick}
              aria-label="Resume"
              title="View or Download Resume"
              className="text-white hover:text-blue-500 text-xl transition-colors duration-300"
            >
              <FaFilePdf />
            </button>
          </div>
        </p>
      </div>

{/* Modal */}
{isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 transition-opacity duration-300">
    <div className="bg-white rounded-2xl p-8 shadow-2xl w-11/12 max-w-md relative animate-fadeIn">
      {/* Close Icon */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
        aria-label="Close"
      >
        <FaTimes size={22} />
      </button>

      {/* Modal Header */}
      <h2 className="text-2xl font-extrabold mb-4 text-center text-gray-800">
        Resume Options
      </h2>

      {/* Modal Description */}
      <p className="text-gray-600 text-center mb-8">
        Would you like to <span className="font-medium text-blue-600">download</span> or <span className="font-medium text-green-600">view</span> the resume?
      </p>

      {/* Loader or Buttons */}
      {isLoading ? (
        <div className="flex justify-center items-center mb-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-gray-300"></div>
        </div>
      ) : (
        <div className="flex justify-center gap-4">
          {/* Download Button */}
          <button
            onClick={() => handleModalAction("download")}
            className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105"
          >
            Download
          </button>

          {/* View Button */}
          <button
            onClick={() => handleModalAction("view")}
            className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition-all transform hover:scale-105"
          >
            View
          </button>

          {/* Cancel Button */}
          <button
            onClick={() => handleModalAction("cancel")}
            className="bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-300 transition-all transform hover:scale-105"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  </div>
)}


    </motion.footer>
  );
};

export default Footer;
