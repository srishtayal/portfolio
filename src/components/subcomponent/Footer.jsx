import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="font-body text-white py-6 relative w-full mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Copyright Text */}
        <div className="text-lg md:text-2xl mb-4 md:mb-0">
          © 2025 Srishti
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/srishtayal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/srish-tayal-st1506/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/srish.tayal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="mailto:srishti.tayal.ug23@nsut.ac.in"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
