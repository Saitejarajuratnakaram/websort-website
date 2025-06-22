import React from 'react';

const Careers = () => {
  const internshipOpportunities = [
    { name: 'Marketing', imgSrc: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=600&q=80' },
    { name: 'App Development', imgSrc: 'https://images.unsplash.com/photo-1607703703520-bb638e84caf2?auto=format&fit=crop&w=600&q=80' },
    { name: 'Web Development', imgSrc: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=600&q=80' },
    { name: 'UI UX', imgSrc: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <div className="bg-[#0a0f2e] text-white">
      {/* Hero Section */}
      <div className="relative bg-[#0d143a] py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-cyan-400 opacity-10 transform -skew-x-12 -translate-x-1/4"></div>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 z-10 relative">
          <div className="md:w-1/2 w-full animate-fadein-right">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Talent wins games, but teamwork and intelligence win championships.</h1>
            <p className="text-gray-300">
              At Websort, we bring digital ideas to life through expert web and app development, digital marketing, and UI/UX design. Based in Bangalore, we build responsive websites and mobile apps, enhance online visibility with SEO, PPC, and social media, and design user-friendly interfaces. Choose Websort for innovative, tailored digital solutions.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center animate-fadein-left">
            <div className="p-2 border-2 border-white rounded-xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80" alt="Career" className="rounded-lg object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Internship Opportunities Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-12 text-center bg-no-repeat bg-center" style={{backgroundImage: 'url(/path-to-wave-pattern.png)'}}>
        <h2 className="text-3xl font-bold mb-12">Internship Opportunities at Websort</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {internshipOpportunities.map((opportunity) => (
            <div key={opportunity.name} className="flex flex-col items-center group animate-fadein-up">
              <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden mb-4 transform transition-transform duration-300 group-hover:scale-105">
                <img src={opportunity.imgSrc} alt={opportunity.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-lg font-semibold">{opportunity.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-12 bg-[#0d143a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Neural network background simulation */}
          <div className="absolute top-0 left-0 w-full h-full bg-grid-red-500/10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-grid-green-500/10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-2xl font-semibold mb-8">Fill out the form and our team will get back to you shortly</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto">
            <input type="text" placeholder="First Name" className="bg-transparent border-b-2 border-red-500 focus:border-red-400 text-white p-2 outline-none" />
            <input type="text" placeholder="Second Name" className="bg-transparent border-b-2 border-red-500 focus:border-red-400 text-white p-2 outline-none" />
            <input type="email" placeholder="Email Address" className="bg-transparent border-b-2 border-red-500 focus:border-red-400 text-white p-2 outline-none" />
            <input type="text" placeholder="Phone" className="bg-transparent border-b-2 border-red-500 focus:border-red-400 text-white p-2 outline-none" />
            <input type="text" placeholder="Company" className="bg-transparent border-b-2 border-red-500 focus:border-red-400 text-white p-2 outline-none" />
            <textarea placeholder="Message" className="bg-transparent border-2 border-red-500 focus:border-red-400 text-white p-2 outline-none h-24 md:col-span-1" rows="3"></textarea>
            <div className="md:col-span-2 flex justify-center mt-6">
              <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-12 rounded-lg transition-colors duration-300">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <style>{`
        @keyframes fadein-right { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadein-left { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadein-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadein-right { animation: fadein-right 1s ease-out; }
        .animate-fadein-left { animation: fadein-left 1s ease-out; }
        .animate-fadein-up { animation: fadein-up 1s ease-out; }
        .bg-grid-red-500\\/10 { background-image: linear-gradient(to right, rgba(239, 68, 68, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(239, 68, 68, 0.1) 1px, transparent 1px); background-size: 3rem 3rem; }
        .bg-grid-green-500\\/10 { background-image: linear-gradient(to right, rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 197, 94, 0.1) 1px, transparent 1px); background-size: 2rem 2rem; }
      `}</style>
    </div>
  );
};

export default Careers; 