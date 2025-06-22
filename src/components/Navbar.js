import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-100 px-4 sm:px-6 lg:px-12 py-3 sm:py-4 border-t-2 border-b-2 border-black w-full box-border">
      <div className="flex justify-between items-center max-w-full mx-auto">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-4 lg:space-x-8">
            <li><Link to="/about" className="text-blue-900 text-base lg:text-lg font-medium flex items-center no-underline hover:text-blue-700 transition-colors duration-200"><span className="h-2 w-2 lg:h-2.5 lg:w-2.5 bg-blue-700 rounded-full inline-block mr-2"></span>About us</Link></li>
            <li><Link to="/services" className="text-blue-900 text-base lg:text-lg font-medium flex items-center no-underline hover:text-blue-700 transition-colors duration-200"><span className="h-2 w-2 lg:h-2.5 lg:w-2.5 bg-blue-700 rounded-full inline-block mr-2"></span>Services</Link></li>
            <li><Link to="/projects" className="text-blue-900 text-base lg:text-lg font-medium flex items-center no-underline hover:text-blue-700 transition-colors duration-200"><span className="h-2 w-2 lg:h-2.5 lg:w-2.5 bg-blue-700 rounded-full inline-block mr-2"></span>Projects</Link></li>
            <li><Link to="/careers" className="text-blue-900 text-base lg:text-lg font-medium flex items-center no-underline hover:text-blue-700 transition-colors duration-200"><span className="h-2 w-2 lg:h-2.5 lg:w-2.5 bg-blue-700 rounded-full inline-block mr-2"></span>Careers</Link></li>
          </ul>
        </nav>

        {/* Desktop Contact Button */}
        <Link to="/contact" className="hidden md:block bg-indigo-900 text-white font-bold py-2 px-4 lg:py-4 lg:px-8 rounded-full text-sm lg:text-base cursor-pointer hover:bg-indigo-800 transition-colors duration-200 no-underline text-center">
          Contact us
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-blue-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-blue-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-blue-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="py-4 border-t border-blue-200 mt-3">
          <ul className="flex flex-col space-y-4">
            <li><Link to="/about" className="text-blue-900 text-lg font-medium flex items-center no-underline hover:text-blue-700 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}><span className="h-2.5 w-2.5 bg-blue-700 rounded-full inline-block mr-3"></span>About us</Link></li>
            <li><Link to="/services" className="text-blue-900 text-lg font-medium flex items-center no-underline hover:text-blue-700 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}><span className="h-2.5 w-2.5 bg-blue-700 rounded-full inline-block mr-3"></span>Services</Link></li>
            <li><Link to="/projects" className="text-blue-900 text-lg font-medium flex items-center no-underline hover:text-blue-700 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}><span className="h-2.5 w-2.5 bg-blue-700 rounded-full inline-block mr-3"></span>Projects</Link></li>
            <li><Link to="/careers" className="text-blue-900 text-lg font-medium flex items-center no-underline hover:text-blue-700 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}><span className="h-2.5 w-2.5 bg-blue-700 rounded-full inline-block mr-3"></span>Careers</Link></li>
            <li className="pt-2">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="w-full block bg-indigo-900 text-white font-bold py-3 px-6 rounded-full text-base cursor-pointer hover:bg-indigo-800 transition-colors duration-200 no-underline text-center">
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
