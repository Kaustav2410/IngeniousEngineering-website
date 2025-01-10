import React from 'react';

const ProductCarouselStructure = ({optionalStyles, data, index, handleSlideClick}) => {
  return (
    <div
      className={`embla__slide ${optionalStyles} flex-shrink-0 flex justify-around items-start gap-20 px-10 flex-col text-white group  max-w-[500px] max-h-[400px] md:w-[400px]  mb-10`}
      onClick={() => handleSlideClick(index)}
      style={{ backgroundImage: `url(${data.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="flex flex-col justify-center items-start w-full h-full py-10">
        <h3 className="text-3xl font-bold relative group-hover:text-blue-500">
          {data.title}
        </h3>
        <div className="w-0 h-[3px] bg-blue-500 mt-1.5 transition-all duration-300 ease-out group-hover:w-full"></div>
        <p className="text-text max-w-[300px] mt-2 hidden md:block">
          Precision-driven performance for unmatched cutting efficiency and versatility
        </p>
      </div>
      <button className="w-32 py-3 rounded-xl px-6 bg-blueish text-black shadow hover:bg-white mb-4">
        Read More
      </button>
    </div>
  );
};

export default ProductCarouselStructure;
