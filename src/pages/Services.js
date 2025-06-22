import React from 'react';

const ServiceCard = ({ title, description, imgSrc, imageLeft = false, highlightedWords = [] }) => {
  const renderDescription = () => {
    if (highlightedWords.length === 0) {
      return description;
    }

    const regex = new RegExp(`(${highlightedWords.join('|')})`, 'gi');
    const parts = description.split(regex);

    return parts.map((part, index) =>
      highlightedWords.some(word => new RegExp(`^${word}$`, 'i').test(part)) ? (
        <span key={index} className="text-cyan-400 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${imageLeft ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-1/2 w-full">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-300 leading-relaxed">
          {renderDescription()}
        </p>
      </div>
      <div className="md:w-1/2 w-full flex justify-center">
        <div className="relative p-2 border-2 border-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <img src={imgSrc} alt={title} className="rounded-lg object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const servicesData = [
    {
      title: 'UI/UX Design',
      description: 'We design clean, intuitive, and engaging user interfaces that enhance the overall user experience. From wireframes to final designs, our focus is on usability, consistency, and creating visually appealing digital products that users love.',
      imgSrc: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
      imageLeft: false,
    },
    {
      title: 'Web Development',
      description: 'Planned and executed a digital marketing strategy including SEO, social media marketing, and content creation. Improved website traffic and engagement through targeted campaigns and regular performance tracking.',
      imgSrc: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=600&q=80',
      imageLeft: true,
      highlightedWords: ['SEO', 'social media marketing', 'content creation'],
    },
    {
      title: 'App Development',
      description: 'Developed a cross-platform mobile app using Flutter for Android and iOS. The app allows users to browse services, make bookings, and receive real-time updates. Designed with a clean UI and smooth navigation to ensure a seamless user experience.',
      imgSrc: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80',
      imageLeft: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f2e] to-[#1a1440] text-white py-16 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
       {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500 rounded-full opacity-10 blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto relative z-10 space-y-24">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services; 