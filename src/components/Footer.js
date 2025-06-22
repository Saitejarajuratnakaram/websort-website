import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const FooterLogo = () => (
    <div className="flex items-center gap-3">
      <div className="w-14 h-14 flex items-center justify-center">
        <div className="w-full h-full relative">
          <div className="w-full h-full rounded-full border-2 border-gray-400"></div>
          <div className="absolute top-0 left-0 w-full h-full transform scale-90">
            <div className="absolute w-1/2 h-1/2 top-0 left-0 border-r-2 border-b-2 border-gray-400"></div>
            <div className="absolute w-1/2 h-1/2 top-0 right-0 border-l-2 border-b-2 border-gray-400"></div>
            <div className="absolute w-1/2 h-1/2 bottom-0 left-0 border-r-2 border-t-2 border-gray-400"></div>
            <div className="absolute w-1/2 h-1/2 bottom-0 right-0 border-l-2 border-t-2 border-gray-400"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-white text-3xl font-bold leading-none">WebSort</span>
        <span className="text-gray-300 text-sm leading-none">Your Vision Our Web</span>
      </div>
    </div>
  );

  const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );

  return (
    <>
      <footer style={{ background: 'linear-gradient(to bottom, #000010, #0A0F2E)', color: '#FFFFFF' }} className="pt-12 pb-8 px-4 sm:px-6 lg:px-12 relative">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <FooterLogo />
          </div>

          <div className="text-center text-sm sm:text-base mb-6 space-x-1 sm:space-x-2">
            <span>Web Development</span>
            <span className="text-gray-500">|</span>
            <span>App Development</span>
            <span className="text-gray-500">|</span>
            <span>UI/UX Design</span>
            <span className="text-gray-500">|</span>
            <span>Digital Marketing</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base">
            <p>Based in Bangalore</p>
            <span className="hidden sm:inline text-gray-500">|</span>
            <Link to="/contact" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <MailIcon />
              contact@websort.com
            </Link>
            <span className="hidden sm:inline text-gray-500">|</span>
            <a href="tel:+91-XXXXXXXXXX" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <PhoneIcon />
              +91-XXXXXXXXXX
            </a>
          </div>
        </div>
      </footer>
      <div className="bg-blue-100 text-center py-4 px-4 sm:px-6 lg:px-12">
        <p className="text-sm text-gray-800">© 2025 Websort. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer; 