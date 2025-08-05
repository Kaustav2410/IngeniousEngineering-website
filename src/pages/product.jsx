import React, { useState, useRef, useEffect } from 'react';
import { ProductData, SectionEnum } from '@/constants/data';
import CarouselCustom from '@/components/custom/carousel_custom';
import { useLocation } from 'react-router'; // Corrected import from 'react-router' to 'react-router-dom'

const Product = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [productIndex, setProductIndex] = useState(null);
  const location = useLocation();
  // Reference to the carousel section
  const carouselRef = useRef(null);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    // Find the index of the matching product
    // const index = ProductData.findIndex((product) =>
    //   product.title.toLowerCase().includes(term)
    // );
    // setProductIndex(index >= 0 ? index : null);
  };

  useEffect(() => {
    // Check if there's a hash in the URL (e.g., #heavy-machinery)
    if (location.hash) {
      // Get the ID from the hash (remove the leading '#')
      const id = location.hash.substring(1);
      const targetElement = document.getElementById(id);

      if (targetElement) {
        // Give the browser a moment to render the page fully before scrolling
        // This can be important if content loading is dynamic
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 100); // Small delay, adjust as needed
      }
    }
  }, [location]);

  const scrollToCarousel = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Applied a neutral background color to the entire page for consistency
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-16 pb-24 sm:py-32 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-blue-800 leading-tight">
            Engineering Heavy Machinery<br />
            Performance Equipments to Elevate Your Industry
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-700 max-w-2xl mx-auto">
            Precision-engineered heavy machinery and industrial equipment designed to power your productivity and efficiency. Explore our range of robust and reliable solutions.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/contact-us"
              className="w-full sm:w-52 h-14 flex justify-center items-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-lg rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
            >
              Get in touch
            </a>
            <button
              onClick={scrollToCarousel}
              className="w-full sm:w-52 h-14 flex justify-center items-center bg-transparent border-2 border-blue-700 text-blue-700 font-bold text-lg rounded-full shadow-md hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
            >
              View Products
            </button>
          </div>
        </div>
      </div>

      {/* Product Categories Section */}
      {/* Used a dark background to create a strong visual contrast with the hero */}
      <div className="bg-gray-900 text-white py-16 sm:py-24" ref={carouselRef}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 tracking-tight">
          Our Products
        </h2>

        <div className='w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8'>
          {ProductData.map((data) => (
            <section
              key={data.id} // Ensure key is unique
              id={data.id} // Essential for direct scrolling
              className="py-12 sm:py-16 border-b border-gray-700 last:border-b-0" // Adds a subtle separator line between sections
            >
              <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-white tracking-tight">
                {data.title}
              </h3>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-10'>
                {data.products.map((x, index) => (
                  <div
                    key={x.id || index} // Use x.id if available, fallback to index
                    id={x.id}
                    className='flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl group'
                  >
                    <div className="w-full h-48 overflow-hidden rounded-md mb-4 bg-gray-700 flex items-center justify-center"> {/* Fixed height for images */}
                      <img
                        src={x.imageUrl || "https://via.placeholder.com/250x180/6366F1/FFFFFF?text=No+Image"} // Fallback image for missing imageUrl
                        alt={x.title || 'Product Image'} // Always add alt text for accessibility
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300' // Image zoom on hover
                      />
                    </div>
                    <p className='text-lg font-medium text-white text-center group-hover:text-blue-400 transition-colors duration-300'>
                      {x.title}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
