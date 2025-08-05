import React from 'react';

const QualityPolicy = () => {
  return (
    <section className='bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 text-gray-700 antialiased group'> {/* Softer background, consistent padding, default text color */}
      <div className='max-w-4xl mx-auto flex flex-col items-center gap-10'> {/* Centered content, appropriate max-width */}

        {/* Section Heading */}
        <div className="pb-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 relative"> {/* Larger, bolder heading, darker text */}
            Our Quality Policy
             <div className="w-0 h-[3px] mx-auto bg-gradient-to-r from-blue-600 to-indigo-700  transition-all duration-300 ease-out group-hover:w-3/4 mt-5">
        </div>
          </h1>
        </div>

        {/* Policy Content */}
        <div className='flex flex-col gap-6 text-base sm:text-lg leading-relaxed'> {/* Increased line height, adjusted font sizes */}
          <p>
            At <strong>Ingenious</strong>, our dedicated engineering team specializes in process development and achieving uncompromised quality through rigorous process control measures. We ensure quality at every stage of manufacturing—delivering excellence that meets and exceeds customer expectations.
          </p>

          <p>
            Over the years, <strong>Ingenious</strong> has successfully supplied a wide range of fabricated assemblies with a proven track record of zero complaints in both product quality and delivery schedules.
          </p>

          <p>
            Our facility is fully equipped with advanced machinery, supported by a team of experienced technologists and engineers under stable management. We take pride in executing custom and highly specialized assignments that meet unique customer specifications. From extreme engineering challenges to precision fabrication, <strong>Ingenious</strong> is capable of fulfilling diverse and complex requirements.
          </p>

          <p>
            Our strength lies in our people—qualified, skilled, and continuously evolving technical staff and consultants, along with a committed, dynamic workforce. Together, they drive innovation and performance in line with Total Quality Management (TQM) principles, ensuring that every project aligns perfectly with our clients’ specifications.
          </p>

          <p>
            At <strong>Ingenious</strong>, we don’t just aim to be the best—we aim to make the impossible achievable. We take pride in our ability to differentiate between just “doing the work” and “delivering quality.” No task is considered too difficult when backed by our extreme engineering mindset.
          </p>
        </div>
      <div>
             <div className="pb-10 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 relative"> {/* Larger, bolder heading, darker text */}
                Our Infrastructure
                <div className="w-0 h-[3px] mx-auto bg-gradient-to-r from-blue-600 to-indigo-700  transition-all duration-300 ease-out group-hover:w-3/4 mt-5">
            </div>
            </h1>
            </div>
            <p className="mt-8 text-xl font-semibold text-gray-800">
            We also offer extensive capacity for large-scale medium and heavy fabrication jobs. Our workshop is equipped with:
          </p>
          <ul className='list-disc list-inside space-y-3 text-base sm:text-lg pl-5'> {/* Changed to ul, added list-inside, more vertical spacing */}
            <li><strong>In-house Non-Destructive Testing (NDT) facilities</strong></li>
            <li><strong>Ultrasonic testing equipment</strong> with certified operators</li>
            <li><strong>6-Axis CNC Floor-Mounted Horizontal Boring Machine</strong></li>
            <li><strong>450-ton CNC Press Brake</strong></li>
            <li><strong>CNC Four-Roll Bending Machine</strong></li>
            <li><strong>High-Density CNC Plasma Cutting Machine</strong></li>
            <li><strong>EOT Cranes</strong> (10T and 5T capacities)</li>
            <li><strong>Shot Blasting and Painting Booths</strong></li>
            <li><strong>MIG Welding, Drilling, and Riveting Machines</strong></li>
          </ul>

          <p className="mt-6">
            We’ve also established a strong vendor ecosystem for outsourced processes like stress relieving and precision machining.
            <strong>Ingenious</strong> stands ready to be your partner in engineering excellence—turning bold ideas into built reality.
          </p>
      </div>
         </div>
    </section>
  );
};

export default QualityPolicy;
