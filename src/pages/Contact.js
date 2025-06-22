import React from 'react';
// import ContactBg from '../assets/contact-bg.jpg';
// import FormBg from '../assets/form-bg.jpg';

const Contact = () => {
  const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );

  return (
    <div style={{ background: 'linear-gradient(to bottom, #000010, #0A0F2E)', color: '#FFFFFF' }} className="py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg sm:text-xl text-gray-200 mb-8">
                    Have a question, idea, or project in mind? We're here to help — get in touch with us today.
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold">Need support or want to collaborate?</h2>
                <p className="text-gray-400 mt-2 mb-12">Fill out the form and our team will get back to you shortly</p>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Address</h3>
                        <p className="mb-4">Based in Bangalore</p>
                    </div>
                     <div className="space-y-4">
                        <a href="mailto:contact@websort.com" className="flex items-center hover:text-gray-300">
                            <MailIcon />
                            contact@websort.com
                        </a>
                        <a href="tel:+91-XXXXXXXXXX" className="flex items-center hover:text-gray-300">
                            <PhoneIcon />
                            +91-XXXXXXXXXX
                        </a>
                    </div>
                </div>

            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Form Fields */}
                {['First Name', 'Second Name', 'Email Address', 'Phone', 'Company'].map(label => (
                <div key={label}>
                    <label htmlFor={label.toLowerCase().replace(/ /g, '')} className="text-gray-400 text-sm">{label}</label>
                    <input
                    type={label.includes('Email') ? 'email' : 'text'}
                    id={label.toLowerCase().replace(/ /g, '')}
                    name={label.toLowerCase().replace(/ /g, '')}
                    className="w-full bg-transparent border-b border-gray-600 focus:border-indigo-500 text-white py-2 outline-none transition-colors"
                    />
                </div>
                ))}
                
                {/* Message Field */}
                <div className="md:col-span-2">
                <label htmlFor="message" className="text-gray-400 text-sm">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full bg-transparent border border-gray-600 focus:border-indigo-500 text-white p-2 rounded-md outline-none transition-colors"
                ></textarea>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 flex justify-start mt-6">
                <button type="submit" className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-opacity">
                    Submit
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact; 