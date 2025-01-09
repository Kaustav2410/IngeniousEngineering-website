import React from 'react';
import strategyFlow from '/Images/Banner/5.png';
import { machinesData } from '@/constants/data';

const Strategy = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[url('/Images/Banner/3.png')] max-w-screen h-fit bg-cover">
        <div className="w-full mx-auto max-w-[1200px] h-2/3">
          <div className="flex flex-col justify-center items-start gap-10">
            <h1 className="text-heading text-blueish font-bold">
              Engineering Heavy Machinery<br />
              Performance<br />
              Equipments to Elevate Your
            </h1>
            <p className="text-text max-w-screen-lg text-center text-white">
              Precision-engineered heavy machinery equipment to power your productivity and efficiency
            </p>
            <div className="flex gap-10 justify-center items-center pb-10">
              <button
                type="button"
                className="w-40 h-14 rounded-xl px-6 bg-blueish text-neutral-50 shadow hover:bg-blacklala"
              >
                GET IN TOUCH
              </button>
              <button className="w-50 h-14 rounded-xl px-6 bg-white text-black shadow hover:bg-black hover:text-white">
                VIEW EQUIPMENTS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Plan Section */}
      <div className="bg-[url('/Images/Banner/1.png')] max-w-screen h-screen bg-cover">
        <div className="w-full mx-auto max-w-[1200px] flex flex-col justify-center items-start gap-10 text-white">
          <div className="group">
            <h1 className="text-heading font-bold group-hover:text-blue-500 pt-5">Quality Plan</h1>
            <div className="w-0 h-[3px] bg-blue-500 mt-1.5 transition-all duration-300 ease-out group-hover:w-full"></div>
          </div>
          <ul className="text-text flex flex-col gap-4">
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
        <div className="text-white flex flex-col justify-center items-start w-full max-w-[1200px] mx-auto">
          <h1 className="text-subheading font-bold py-10">STRUCTURE FABRICATION PROCESS FLOW</h1>
          <img src={strategyFlow} alt="timing-alt" />
        </div>
      </div>

      {/* Machines Data Table */}
      <div className="py-10 flex flex-col justify-center items-center max-w-screen ">
        <div className='w-full max-w-[1200px] mx-auto'>
            <div className='text-heading font bold py-10 '>EQUIPMENTS</div>
            <table className="table-auto border-collapse border border-gray-300 text-left">
            <thead>
                <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 hidden md:table-cell">Sl No</th>
                <th className="border border-gray-300 px-4 py-2">Name of Machine</th>
                <th className="border border-gray-300 px-4 py-2">Qty</th>
                <th className="border border-gray-300 px-4 py-2 hidden md:table-cell">Size and Capacity</th>
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
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    </div>
  );
};

export default Strategy;
