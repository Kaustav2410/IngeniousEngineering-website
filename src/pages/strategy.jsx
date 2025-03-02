import React, { useState, useRef } from 'react';
import strategyFlow from '/Images/Banner/5.png';
import { machinesData } from '@/constants/data';

const Strategy = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const equipmentsRef = useRef(null); // Ref for Equipments section

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
    if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
    document.body.style.overflow = 'unset';

  };

  const scrollToEquipments = () => {
    if (equipmentsRef.current) {
      equipmentsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[url('/Images/Banner/3.png')] max-w-screen h-fit bg-cover">
        <div className="w-full mx-auto max-w-[1200px] h-2/3 px-10">
          <div className="flex flex-col justify-center items-start gap-10">
            <h1 className="text-subheading md:text-heading text-blueish font-bold">
              Engineering Heavy Machinery<br />
              Performance<br />
              Equipments to Elevate Your
            </h1>
            <p className="text-text max-w-screen-lg text-left text-white">
              Precision-engineered heavy machinery equipment to power your productivity and efficiency
            </p>
            <div className="md:flex-row flex-col items-start flex gap-10 justify-center md:items-center pb-10">
              <button
                type="button"
                className=" w-40 h-14 rounded-xl px-6 bg-blueish text-neutral-50 shadow hover:bg-blacklala"
              >
                <a href="/contact-us">GET IN TOUCH</a>
              </button>
              <button
                type="button"
                onClick={scrollToEquipments} // Add scroll handler
                className="w-50 h-14 rounded-xl px-6 bg-white text-black shadow hover:bg-black hover:text-white"
              >
                VIEW EQUIPMENTS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Plan Section */}
      <div className="bg-[url('/Images/Banner/Quality_Background.png')] max-w-screen h-fit bg-cover">
        <div className="px-10 pb-10 w-full mx-auto max-w-[1200px] flex flex-col justify-center items-start gap-10 text-gray-700">
          <div className="group">
            <h1 className="text-heading font-bold group-hover:text-blue-500 pt-5">QUALITY PLAN</h1>
            <div className="w-0 h-[3px] bg-blue-500 mt-1.5 transition-all duration-300 ease-out group-hover:w-full"></div>
          </div>
          <ul className="text-xl flex flex-col gap-4">
            <li>Incoming Material Inspection</li>
            <li>Prepare AutoCAD Drawings</li>
            <li>Prepare Nest for Gas Cutting</li>
            <li>Audit Check for Gas Cut Dimensions</li>
            <li>Visual Inspection of Gas Cut / Bevel Components for Gas Cut Quality</li>
            <li>Audit Inspection of Bend Components</li>
            <li>Ultrasonic Testing / X-Ray</li>
            <li>Inspection of Tack Welded Assemblies</li>
            <li>Final Inspection of Structures</li>
            <li>Visual Inspection for Shot Blasting Quality and Painting Quality</li>
            <li>Customer's Inspection (If required)</li>
          </ul>
        </div>
      </div>

      {/* Process Flow Section */}
      <div className="w-full bg-black py-10">
        <div className="px-10 text-white flex flex-col justify-center items-start w-full max-w-[1200px] mx-auto">
          <h1 className="text-subheading font-bold py-10">STRUCTURE FABRICATION PROCESS FLOW</h1>
          <img src={strategyFlow} alt="timing-alt" />
        </div>
      </div>

      {/* Machines Data Table */}
      <div ref={equipmentsRef} className="py-10 flex flex-col justify-center items-center max-w-screen">
        <div className="px-10 w-full max-w-[1200px] mx-auto">
          <div className="text-subheading md:text-heading font-bold py-10">EQUIPMENTS</div>
          <table className="table-auto border-collapse border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 hidden md:table-cell">Id</th>
                <th className="border border-gray-300 px-4 py-2">Name of Machine</th>
                <th className="border border-gray-300 px-4 py-2">Qty</th>
                <th className="border border-gray-300 px-4 py-2 hidden md:table-cell">Size and Capacity</th>
                <th className="border border-gray-300 px-4 py-2">Image</th>
              </tr>
            </thead>
            <tbody>
              {machinesData.map((machine) => (
                <tr key={machine.slNo}>
                  <td className="border border-gray-300 px-4 py-2 hidden md:table-cell">{machine.slNo}</td>
                  <td className="border border-gray-300 px-4 py-2">{machine.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{machine.qty}</td>
                  <td className="border border-gray-300 px-4 py-2 hidden md:table-cell">
                    {machine.sizeAndCapacity}
                  </td>
                  <td className="border border-gray-300 px-4 py-4">
                    <a
                      href="#!"
                      onClick={(e) => {
                        e.preventDefault();
                        openModal(machine.imageUrl);
                      }}
                    >
                      <img
                        src={machine.imageUrl}
                        alt={`Machine ${machine.slNo}`}
                        className=" w-20 h-20 object-contain transform transition-transform duration-700 cursor-pointer hover:scale-110 "
                      />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Image Preview */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-4 rounded-lg relative w-[calc(100vw-2rem)] max-w-[448px] overflow-hidden">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-xl text-gray-700 z-10"
          >
            ✖
          </button>
          <img
            src={selectedImage}
            alt="Modal Preview"
            className="w-full max-w-[400px] max-h-[400px] object-contain mx-auto block"
          />
        </div>
      </div>
      )}
    </div>
  );
};

export default Strategy;
