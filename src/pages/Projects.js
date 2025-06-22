import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const AnimatedBg = () => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <svg width="100%" height="100%" className="w-full h-full">
      <defs>
        <radialGradient id="projects-bg-gradient" cx="50%" cy="50%" r="80%">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0a0f2e" stopOpacity="0.9" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#projects-bg-gradient)" />
      <circle cx="80%" cy="20%" r="150" fill="#a78bfa" opacity="0.06">
        <animate attributeName="cx" values="80%;20%;80%" dur="15s" repeatCount="indefinite" />
      </circle>
      <circle cx="20%" cy="80%" r="120" fill="#38bdf8" opacity="0.05">
        <animate attributeName="cy" values="80%;20%;80%" dur="12s" repeatCount="indefinite" />
      </circle>
    </svg>
  </div>
);

const Projects = () => {
  const projectData = [
    { title: 'Web Development', imgSrc: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=600&q=80' },
    { title: 'UI/UX Design', imgSrc: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80' },
    { title: 'App Development', imgSrc: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80' },
    { title: 'Marketing', imgSrc: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=600&q=80' },
    { title: 'SEO Optimization', imgSrc: 'https://images.unsplash.com/photo-1560415755-bd80d06eda60?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 text-white bg-[#0a0f2e] overflow-hidden">
      <AnimatedBg />
      <div className="relative z-10 w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-fuchsia-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Our Project
        </h1>
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 250,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          className="w-full max-w-6xl"
        >
          {projectData.map((project, index) => (
            <SwiperSlide key={index} style={{ width: '400px', height: '400px', perspective: '1000px' }}>
              {({ isActive }) => (
                <div className="flex flex-col items-center justify-center h-full group">
                  <div
                    className={`relative p-2 border-2 rounded-xl shadow-lg transition-all duration-500 w-[380px] h-[300px] ${
                      isActive
                        ? 'border-cyan-400 shadow-cyan-400/20'
                        : 'border-white/50'
                    }`}
                    style={{ transformStyle: 'preserve-3d', transform: isActive ? 'rotateY(0)' : 'rotateY(0) scale(0.9)' }}
                  >
                    <img
                      src={project.imgSrc}
                      alt={project.title}
                      className={`rounded-lg object-cover w-full h-full transition-all duration-500 ${
                        isActive ? 'brightness-100' : 'brightness-50'
                      }`}
                    />
                     <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
                  </div>
                  <div className="h-16 mt-4 transition-all duration-500">
                    {isActive && (
                      <h2 className="text-2xl font-semibold text-white animate-slide-up">
                        {project.title}
                      </h2>
                    )}
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
      `}</style>
    </div>
  );
};

export default Projects; 