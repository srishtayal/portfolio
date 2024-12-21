import React, { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-transparent fixed top-0 left-0 right-0 z-10 rounded-full mt-3 text-lg font-body">
      <div className="flex justify-center items-center p-6 w-full">
        <div className="w-fit flex space-x-6 text-white gap-3">
          <a
            href="#"
            className={`${
              activeLink === '#' ? 'text-gray-400 border-b-2 border-gray-400' : 'hover:text-gray-400'
            } transition-colors duration-300`}
            onClick={() => handleLinkClick('#')}
          >
            Work
          </a>
          <a
            href="#about"
            className={`${
              activeLink === 'about' ? 'text-gray-400 border-b-2 border-gray-400' : 'hover:text-gray-400'
            } transition-colors duration-300`}
            onClick={() => handleLinkClick('about')}
          >
            About
          </a>
          <a
            href="#designs"
            className={`${
              activeLink === 'designs' ? 'text-gray-400 border-b-2 border-gray-400' : 'hover:text-gray-400'
            } transition-colors duration-300`}
            onClick={() => handleLinkClick('designs')}
          >
            Designs
          </a>
          <a
            href="#contact"
            className={`${
              activeLink === 'contact' ? 'text-gray-400 border-b-2 border-gray-400' : 'hover:text-gray-400'
            } transition-colors duration-300`}
            onClick={() => handleLinkClick('contact')}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
