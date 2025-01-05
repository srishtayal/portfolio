import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname || '/');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 mt-3 text-lg font-body">
      <div className="flex justify-center items-center p-3 w-full">
        <div className="w-fit flex items-center space-x-7 text-white py-3 px-4 sm:px-8 bg-transparent backdrop-blur-xl rounded-full shadow-lg">
          <Link
            to="/"
            className={`${
              activeLink === '/' ? 'text-gray-400 border-b-2 border-gray-400' : 'hover:text-gray-400'
            } transition-colors duration-300`}
            onClick={() => handleLinkClick('/')}
          >
            Work
          </Link>
          <Link
            to="/about"
            className={`${
              activeLink === '/about' ? 'text-gray-400 border-b-2 border-gray-400' : 'hover:text-gray-400'
            } transition-colors duration-300`}
            onClick={() => handleLinkClick('/about')}
          >
            About
          </Link>
          <Link
            to="/designs"
            className={`${
              activeLink === '/designs' ? 'text-gray-400 border-b-2 border-gray-400' : 'hover:text-gray-400'
            } transition-colors duration-300`}
            onClick={() => handleLinkClick('/designs')}
          >
            Designs
          </Link>
          <Link
            to="/contact"
            className={`${
              activeLink === '/contact' ? 'text-gray-400 border-b-2 border-gray-400' : 'hover:text-gray-400'
            } transition-colors duration-300`}
            onClick={() => handleLinkClick('/contact')}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
