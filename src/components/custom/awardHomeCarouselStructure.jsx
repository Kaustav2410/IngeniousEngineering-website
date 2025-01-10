import React from 'react';

const AwardHomeCarouselStructure = ({ data, optionalStyles }) => {
    return (
      <div
        key={data.title}
        className={`embla__slide ${optionalStyles} flex-shrink-0 flex justify-center items-center flex-col p-4 md:p-6 lg:p-8 w-full max-w-[500px] box-border`}
        style={{ width: '100%', maxWidth: '500px', overflow: 'hidden' }} // Adjust maxWidth as needed
      >
        <div className="w-full h-[200px]">
          <img
            className="w-full h-full object-contain"
            src={data.imageUrl}
            alt={`Slide`}
          />
        </div>
        <h2 className="text-center font-semibold mt-2 text-sm md:text-base lg:text-lg">
          {data.title}
        </h2>
      </div>
    );
  };

  export default AwardHomeCarouselStructure;

