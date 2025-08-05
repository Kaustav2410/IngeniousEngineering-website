import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-blacklala text-gray-300 py-12 px-4 sm:px-6 lg:px-8'> {/* Darker background, more padding, softer text color */}
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12'> {/* Responsive layout with increased gap */}

        {/* Company Title and Map Section */}
        <div className='w-full md:w-2/5 lg:w-1/3 flex flex-col items-center md:items-start text-center md:text-left'>
          <h2 className='font-extrabold text-3xl md:text-4xl text-white mb-6'> {/* Larger, bolder text, distinct color */}
            Ingenious Engineering Pvt. Ltd.
          </h2>
          <div className='w-full max-w-sm sm:max-w-md md:max-w-none h-64 sm:h-72 rounded-lg overflow-hidden shadow-xl border border-gray-700'> {/* Responsive width, fixed height, rounded corners, shadow, border */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1460512324024!2d77.9719604!3d13.0899288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badfd42fe7b7817%3A0xb0e40b24851dc939!2sIngenious%20Engineering%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1753614882206!5m2!1sen!2sin"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location on Map"
            />
          </div>
        </div>

        {/* Navigation Links Section */}
        <div className='flex flex-col sm:flex-row justify-around w-full md:w-3/5 lg:w-2/3 gap-10 sm:gap-20 text-lg'> {/* Responsive gap, font size */}
          {/* Company Links */}
          <ul className='flex flex-col gap-3'> {/* Reduced gap for list items */}
            <li className='mb-3 font-bold text-white text-xl'>Company</li> {/* Stronger heading */}
            <li><a href='/' className="hover:text-blue-400 transition-colors duration-300">Home</a></li>
            <li><a href='/about-us' className="hover:text-blue-400 transition-colors duration-300">About Us</a></li>
            {/* <li><a href='/awards' className="hover:text-blue-400 transition-colors duration-300">Awards</a></li> */}
            <li><a href='/products' className="hover:text-blue-400 transition-colors duration-300">Our Products</a></li>
            <li><a href='/career' className="hover:text-blue-400 transition-colors duration-300">Career</a></li>
          </ul>

          {/* Documentation Links */}
          <ul className='flex flex-col gap-3'> {/* Reduced gap for list items */}
            <li className='mb-3 font-bold text-white text-xl'>Documentation</li> {/* Stronger heading */}
            <li><a href='/contact-us' className="hover:text-blue-400 transition-colors duration-300">Contact Us</a></li>
            {/* <li><a href='/strategy' className="hover:text-blue-400 transition-colors duration-300">Our Strategy</a></li> */}
            {/* <li><a href='/quality-policy' className="hover:text-blue-400 transition-colors duration-300">Quality Policy</a></li> */}
            {/* <li><a href='/privacy-policy' className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a></li> */}
          </ul>
        </div>
      </div>

      <hr className='border-gray-700 my-8' /> {/* Thicker, darker horizontal rule */}

      {/* Copyright and Terms */}
      <div className='flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4'> {/* Softer text color, smaller font */}
        <p>© Ingenious Engineering. All Rights Reserved {new Date().getFullYear()}</p> {/* Dynamic year */}
        <a href='/terms-conditions' className="hover:text-blue-400 transition-colors duration-300">Terms and Conditions</a> {/* Made "Terms and Conditions" a clickable link */}
      </div>
    </footer>
  );
};

export default Footer;
