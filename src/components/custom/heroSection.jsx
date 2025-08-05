import React from 'react';


const HeroSection = () => {
  return (
    // Outer section for full-screen height and positioning the background image
    <section className="relative w-full h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image with Overlay for Readability */}

        <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Container - positioned relative to the section, above the background */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white text-left">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-blue-300 drop-shadow-lg">
           Delivering Excellence,<br />
          On Time—Every<br />
           Time.
        </h1>

        {/* Sub-headline/Paragraph */}
        <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-gray-200 drop-shadow-md">
          Delivering excellence in engineering with precision-crafted solutions for construction and mining machinery.
        </p>

        {/* Call to Action Button */}
        <a
          href="/contact-us"
          className="mt-10 inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-lg rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
