import React from 'react';
import ProjectSlider from '../components/ProjectSlider';

const About = () => {
  return (
    <>
      {/* Existing About Page Content */}
      <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(to bottom, #0A0F2E, #000010)' }}>
        <div className="max-w-4xl mx-auto text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Digitizing Ideas with<br />Clean Code & Modern Design
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            At Websort, we turn digital visions into reality with expert web and app development, UI/UX design, and digital marketing. Based in Bangalore, we craft responsive websites, innovative mobile apps, and drive results through SEO, PPC, and social media strategies.
          </p>
          <div className="flex space-x-4">
            <button className="border border-white text-white font-bold py-2 px-6 rounded hover:bg-white hover:text-gray-900 transition duration-300">
              Contact Us
            </button>
            <button className="border border-white text-white font-bold py-2 px-6 rounded hover:bg-white hover:text-gray-900 transition duration-300">
              Know More
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(to bottom, #000010, #0A0F2E)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-lg font-semibold text-gray-400 uppercase tracking-wider">About Us</h2>
              <h1 className="text-4xl md:text-5xl font-extrabold mt-2 leading-tight">
                Where Innovation<br />Meets Execution
              </h1>
            </div>
            <div>
              <p className="text-lg text-gray-300 mb-8">
                Websort builds websites, apps, and digital marketing solutions to help you grow online. Based in Bangalore, we focus on smart design, strong tech, and real results. We specialize in web development, mobile app development, UI/UX design, and digital marketing—delivering responsive websites, high-performance Android/iOS apps, and visually engaging interfaces. Our digital marketing expertise spans SEO, PPC, social media marketing, and content creation, helping businesses grow and connect with their ideal audience.
              </p>
              <button className="border border-white text-white font-bold py-2 px-6 rounded hover:bg-white hover:text-gray-900 transition duration-300">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProjectSlider />

      {/* --- New Sections from Image Start --- */}
      {/* Hero Section with Animated Background and Glassmorphism */}
      <div className="relative flex flex-col items-center justify-center pt-10 pb-16 px-4 overflow-hidden animate-fadein">
        {/* Animated SVG Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg width="100%" height="100%" className="w-full h-full">
            <defs>
              <radialGradient id="hero-bg-gradient" cx="50%" cy="50%" r="80%">
                <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#0a0f2e" stopOpacity="0.9" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-bg-gradient)" />
            <circle cx="80%" cy="20%" r="120" fill="#a78bfa" opacity="0.08">
              <animate attributeName="cx" values="80%;20%;80%" dur="12s" repeatCount="indefinite" />
            </circle>
            <circle cx="20%" cy="80%" r="90" fill="#38bdf8" opacity="0.07">
              <animate attributeName="cy" values="80%;20%;80%" dur="10s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
        <div className="relative z-10 w-full flex flex-col items-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg overflow-hidden shadow-lg w-full max-w-xl mb-4 p-4 animate-fadein-up">
            <div className="relative w-full h-[250px]">
              <img src="https://images.unsplash.com/photo-1677756119517-756a188d2d94?auto=format&fit=crop&w=600&q=80" alt="AI and IoT" className="w-full h-full object-cover rounded-md border-4 border-white shadow-xl transition-transform duration-300 hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md"></div>
              <div className="absolute w-full text-center left-0 right-0 top-1/2 transform -translate-y-1/2">
                <p className="text-xl font-semibold text-white drop-shadow-lg">AI and IoT-driven products</p>
              </div>
            </div>
          </div>
          {/* Slider Dots */}
          <div className="flex space-x-2 mb-4">
            <span className="w-4 h-4 rounded-full bg-red-600 inline-block border-2 border-white"></span>
            <span className="w-4 h-4 rounded-full bg-gray-400 inline-block border-2 border-white"></span>
            <span className="w-4 h-4 rounded-full bg-gray-400 inline-block border-2 border-white"></span>
          </div>
          <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-[#0a0f2e] transition mb-2 font-semibold shadow-lg animate-fadein">Know More</button>
        </div>
      </div>

      {/* Why We Stand Out Section with Glowing Lightbulb */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#1a1440] px-4 py-16 md:py-20 md:px-24 animate-fadein">
        <div className="md:w-2/3 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-fuchsia-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Why We Stand Out</h2>
          <p className="text-gray-300 max-w-xl">At <span className="font-bold text-fuchsia-300">Websort</span>, we don't just build digital products — we build <span className="font-bold text-blue-300">careers</span>. By joining our team, you become part of a creative and collaborative environment that values <span className="font-bold text-cyan-300">innovation</span>, continuous learning, and personal growth.</p>
          <button className="mt-8 border border-fuchsia-400 text-fuchsia-200 px-6 py-2 rounded hover:bg-fuchsia-400 hover:text-[#1a1440] transition font-semibold shadow-lg animate-fadein-up">Join Us</button>
        </div>
        <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
          <div className="relative flex items-center justify-center animate-fadein-up">
            <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Lightbulb" className="rounded-lg shadow-lg w-48 h-64 object-contain bg-black z-10 border-4 border-white transition-transform duration-300 hover:scale-105" />
            <div className="absolute w-60 h-60 rounded-full bg-blue-400 opacity-30 blur-2xl animate-pulse z-0"></div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein { animation: fadein 1.2s cubic-bezier(.4,0,.2,1); }
        @keyframes fadein-up {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein-up { animation: fadein-up 1.2s cubic-bezier(.4,0,.2,1); }
      `}</style>
      {/* --- New Sections from Image End --- */}
    </>
  );
};

export default About; 