import React from 'react';
import image from "/chip.jpeg";

const Values = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100 mt-12">
      <h1 className="text-4xl font-bold text-center mb-12">OUR VALUES</h1>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 max-w-5xl w-full mt-2">
        {/* Customer First (Top-left corner) */}
        <div className="flex flex-col items-center justify-center col-start-1 row-start-1">
          <img
            src={image} // Replace with the actual path to your icon
            alt="Customer First"
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Customer First</h2>
          <p className="text-center text-gray-600">
            We place exceptional customer experience at the center of everything we do.
          </p>
        </div>

        {/* Integrity (Top-right corner) */}
        <div className="flex flex-col items-center justify-center col-start-3 row-start-1">
          <img
            src={image} // Replace with the actual path to your icon
            alt="Integrity"
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Integrity</h2>
          <p className="text-center text-gray-600">
            We are honest, transparent, and ethical in all actions, from big to small.
          </p>
        </div>

        {/* Accountability (Bottom-left corner) */}
        <div className="flex flex-col items-center justify-center col-start-1 row-start-3">
          <img
            src={image} // Replace with the actual path to your icon
            alt="Accountability"
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Accountability</h2>
          <p className="text-center text-gray-600">
            We are proactive and take full responsibility for our decisions, behaviors, and actions.
          </p>
        </div>

        {/* Respect (Bottom-right corner) */}
        <div className="flex flex-col items-center justify-center col-start-3 row-start-3">
          <img
            src={image} // Replace with the actual path to your icon
            alt="Respect"
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Respect</h2>
          <p className="text-center text-gray-600">
            We are proactive and take full responsibility for our decisions, behaviors, and actions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
