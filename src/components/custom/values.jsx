import React from 'react';
import customer from "/Images/Others/19.svg";
import integrity from "/Images/Others/22.svg";
import account from "/Images/Others/20.svg";
import respect from "/Images/Others/21.svg";

const Values = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8  mt-12">
      <h1 className=" font-bold text-center mb-12 text-6xl">OUR VALUES</h1>
      <div className="grid grid-cols-3 gap-4 max-w-5xl w-full mt-2">
        {/* Customer First (Top-left corner) */}
        <div className="flex flex-col items-center justify-center col-start-1 row-start-1">
          <img
            src={customer} // Replace with the actual path to your icon
            alt="Customer First"
            className="w-36 h-36 mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Customer First</h2>
          <p className="text-center text-gray-600 text-text">
            We place exceptional customer experience at the center of everything we do.
          </p>
        </div>

        {/* Integrity (Top-right corner) */}
        <div className="flex flex-col items-center justify-center col-start-3 row-start-1">
          <img
            src={integrity} // Replace with the actual path to your icon
            alt="Integrity"
            className="w-36 h-36 mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Integrity</h2>
          <p className="text-center text-gray-600 text-text">
            We are honest, transparent, and ethical in all actions, from big to small.
          </p>
        </div>

        {/* Accountability (Bottom-left corner) */}
        <div className="flex flex-col items-center justify-center col-start-1 row-start-3">
          <img
            src={account} // Replace with the actual path to your icon
            alt="Accountability"
            className="w-36 h-36 mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Accountability</h2>
          <p className="text-center text-gray-600 text-text">
            We are proactive and take full responsibility for our decisions, behaviors, and actions.
          </p>
        </div>

        {/* Respect (Bottom-right corner) */}
        <div className="flex flex-col items-center justify-center col-start-3 row-start-3">
          <img
            src={respect} // Replace with the actual path to your icon
            alt="Respect"
            className="w-36 h-36 mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Respect</h2>
          <p className="text-center text-gray-600 text-text">
            We are proactive and take full responsibility for our decisions, behaviors, and actions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
