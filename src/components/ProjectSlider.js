import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
  {
    title: 'App Development',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    desc: 'Custom mobile and desktop apps for your business.',
  },
  {
    title: 'UI/UX Design',
    img: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg',
    desc: 'Modern, user-focused interfaces and experiences.',
  },
  {
    title: 'Web Development',
    img: 'https://img.freepik.com/free-photo/website-development-banner_23-2151201992.jpg',
    desc: 'Responsive, high-performance websites.',
  },
  {
    title: 'E-Commerce Solutions',
    img: 'https://img.freepik.com/free-photo/e-commerce-online-shopping-sale-concept_53876-120107.jpg',
    desc: 'Online stores with seamless shopping experiences.',
  },
  {
    title: 'Branding & Identity',
    img: 'https://img.freepik.com/free-photo/branding-identity-marketing-concept_53876-167088.jpg',
    desc: 'Build a memorable brand for your business.',
  },
  {
    title: 'Digital Marketing',
    img: 'https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg',
    desc: 'Grow your reach with SEO, PPC, and social media.',
  },
  {
    title: 'SEO Optimization',
    img: 'https://img.freepik.com/free-photo/seo-search-engine-optimization-digital-concept_53876-94841.jpg',
    desc: 'Boost your visibility on search engines.',
  },
];

const AnimatedBg = () => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <svg width="100%" height="100%" className="w-full h-full">
      <defs>
        <radialGradient id="bg-gradient" cx="50%" cy="50%" r="80%">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0a0f2e" stopOpacity="0.9" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg-gradient)" />
      <circle cx="80%" cy="20%" r="120" fill="#a78bfa" opacity="0.08">
        <animate attributeName="cx" values="80%;20%;80%" dur="12s" repeatCount="indefinite" />
      </circle>
      <circle cx="20%" cy="80%" r="90" fill="#38bdf8" opacity="0.07">
        <animate attributeName="cy" values="80%;20%;80%" dur="10s" repeatCount="indefinite" />
      </circle>
    </svg>
  </div>
);

const ProjectSlider = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-b from-[#1a1440] to-[#0a0f2e] relative overflow-hidden">
      <AnimatedBg />
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-white tracking-tight relative z-10">Our Projects</h2>
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.2}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 250,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        className="w-full max-w-5xl mx-auto"
        breakpoints={{
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2.5 },
        }}
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx}>
            {({ isActive }) => (
              <div className="flex flex-col items-center group transition-all duration-700 animate-fadein">
                <div
                  className={`relative rounded-3xl overflow-hidden border-4 shadow-xl bg-black transition-all duration-700 ${isActive ? 'border-fuchsia-500 scale-110 shadow-2xl z-10 bg-opacity-60' : 'border-white scale-95 opacity-80'}`}
                  style={{ width: 320, height: 320, boxShadow: isActive ? '0 8px 32px 0 rgba(111, 0, 255, 0.25)' : '' }}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 group-hover:brightness-110 transition-transform duration-700"
                  />
                  {/* Glassmorphism overlay for active slide (no blur) */}
                  {isActive && (
                    <div className="absolute inset-0 bg-white bg-opacity-10 rounded-3xl border border-fuchsia-300 pointer-events-none"></div>
                  )}
                  {/* Project description overlay on hover (no blur) */}
                  <div className={`absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-700 ${isActive ? '' : 'pointer-events-none'}`}>
                    <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-700 px-6 text-center">{project.desc}</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <span className={`text-white font-bold text-xl tracking-wide drop-shadow-lg ${isActive ? 'bg-gradient-to-r from-fuchsia-600 to-blue-600 px-6 py-2 rounded-full shadow-md' : ''}`}>{project.title}</span>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein { animation: fadein 1.2s cubic-bezier(.4,0,.2,1); }
      `}</style>
    </div>
  );
};

export default ProjectSlider; 