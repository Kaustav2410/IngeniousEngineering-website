import React from 'react';
import logo from "/Images/Logos/Ingenious_Logo.png";
import Values from "@/components/custom/values";
import Certificate_1 from "/Images/Others/Certificate_1.png";
import Certificate_2 from "/Images/Others/Certificate_2.png";
import Certificate_3 from "/Images/Others/ISO140001.png";
// Assuming leadershipTeamData and LeadershipCard are used for an alternate leadership section,
// but for the provided code, we'll use the direct markup.
// import { leadershipTeamData } from "@/constants/data";
// import LeadershipCard from "@/components/custom/leadershipCard";

const About = () => {
  return (
    <section className="bg-gray-50 text-gray-800 antialiased"> {/* Overall light background for the page */}

      {/* About Us Header and Mission/Vision/Motto Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center gap-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 text-center mb-8">
          ABOUT US
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full gap-12">
          {/* Mission, Vision, Motto - Left Section */}
          <div className="flex flex-col gap-8 max-w-xl text-center md:text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-3">MISSION</h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                To deliver high-quality machined and fabricated components through innovative
                engineering, world-class manufacturing practices, and a customer-focused approach —
                ensuring value, reliability, and long-term partnerships.
              </p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-3">VISION</h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                To be a globally recognized engineering company known for excellence in
                precision manufacturing, continuous improvement, and contributing to the
                success of our clients across industries.
              </p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-3">MOTTO</h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Delivering Excellence, On Time—Every Time.
              </p>
            </div>
          </div>

          {/* Company Logo Image - Right Section */}
          <div className="hidden lg:flex flex-shrink-0 justify-center items-center p-6">
            <img
              src={logo}
              alt="Ingenious Engineering Logo"
              className="w-full max-w-sm rounded-xl shadow-2xl transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* --- */}

      {/* Certificates Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8"> {/* White background for this section */}
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-14">
            CERTIFICATIONS
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 lg:gap-12 flex-wrap"> {/* Use items-stretch for equal height cards */}
            {/* Certificate 1 (ISO 9001:2015) */}
            <div className="flex flex-col items-center bg-gray-50 shadow-lg p-6 rounded-xl max-w-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 border border-gray-200">
              {/* <img
                src={Certificate_2}
                alt="ISO 9001:2015 Certificate"
                className="w-full h-auto max-h-[400px] object-contain rounded-md mb-6 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              /> */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center">
                The Company adheres to <strong>ISO 9001:2015</strong>, which sets the foundation for an effective Quality Management System (QMS), helping organizations consistently meet customer and regulatory requirements. It emphasizes leadership, risk management, process control, performance evaluation, and continual improvement.
              </p>
            </div>

            {/* Certificate 2 (ISO 14001:2015) */}
            <div className="flex flex-col items-center bg-gray-50 shadow-lg p-6 rounded-xl max-w-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 border border-gray-200">
              {/* <img
                src={Certificate_3}
                alt="ISO 14001:2015 Certificate"
                className="w-full h-auto max-h-[400px] object-contain rounded-md mb-6 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              /> */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center">
                Ingenious Engineering Pvt. Ltd. is certified under <strong>ISO 14001:2015</strong>, reflecting our commitment to effective environmental management practices. This certification demonstrates our dedication to minimizing environmental impact, complying with applicable regulations, and continually improving our environmental performance across all operations.
              </p>
            </div>

            {/* Certificate 3 (DIN EN ISO 3834-3) */}
            <div className="flex flex-col items-center bg-gray-50 shadow-lg p-6 rounded-xl max-w-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 border border-gray-200">
              {/* <img
                src={Certificate_1}
                alt="DIN EN ISO 3834-3 Certificate"
                className="w-full h-auto max-h-[400px] object-contain rounded-md mb-6 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              /> */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center">
                Ingenious Engineering Pvt. Ltd. is certified under <strong>DIN EN ISO 3834-3</strong>, demonstrating compliance with standard quality requirements for fusion welding of metallic materials, ensuring high-quality welding practices in both workshop and field installations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- */}

      {/* Values Section - Assuming Values component is well-styled internally */}
      <Values />

      {/* --- */}

      {/* Leadership Team Section */}
      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8"> {/* Light gray background for this section */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 text-center mb-16">
            LEADERSHIP TEAM
          </h2>

          <div className="flex flex-col gap-20"> {/* Increased gap between leader profiles */}

            {/* Leader 1: Rajesh Goel */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image on the Right for this profile */}
              <img
                src="/Images/Website/Pictures/Management/rajesh_goel.jpg"
                alt="Rajesh Goel"
                className="w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-full shadow-md border-4 border-blue-500 flex-shrink-0"
              />
              {/* Text Content */}
              <div className="text-center md:text-left w-full md:w-auto flex-grow">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 relative group">
                  RAJESH GOEL
                  <span className="block w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-700 mt-2  transition-all duration-300 ease-out group-hover:w-1/2"></span>
                </h3>
                <p className="text-xl font-semibold text-blue-600 mt-2 mb-4">Managing Director</p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Mr. Rajesh Goel, an MBA Graduate and a successful businessman, is the promoter of Ingenious Engineering Pvt. Ltd. With over 15 years of experience catering to the needs of OEMs and exporting fabricated structures, he has now independently established this new industry. Two of his senior management personnel from his earlier company have joined him in this venture, bringing extensive experience to the team.
                </p>
              </div>
            </div>
            {/* Leader 5: Raj Kasera */}
            <div className="flex flex-col md:flex-row-reverse justify-between items-center md:items-start gap-10 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image on the Right for this profile */}
              <img
                src="/Images/Website/Pictures/Management/raj.jpg" // Corrected path to be relative to public
                alt="Raj Kasera"
                className="w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-full shadow-md border-4 border-blue-500 flex-shrink-0"
              />
              {/* Text Content */}
              <div className="text-center md:text-right w-full md:w-auto flex-grow">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 relative group">
                  RAJ KASERA
                  <span className="block w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-700 mt-2 ml-auto transition-all duration-300 ease-out group-hover:w-1/2"></span>
                </h3>
                <p className="text-xl font-semibold text-blue-600 mt-2 mb-4">Director</p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                With over 30 years of global leadership, Raj Kasera is a strategic investor empowering Indian enterprises worldwide. At Unex Ventures, he drives U.S. market entry via investment and partnerships. As Director of Ingenious Engineering, he elevates Indian manufacturing in Engineering, Mining, Recycling, and Defence to world-class standards.
                </p>
              </div>
            </div>

            {/* Leader 2: Keshava Murthy */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image on the Left for this profile */}
              <img
                src="/Images/Website/Pictures/Management/Keshav_Murthy.jpg"
                alt="Keshava Murthy"
                className="w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-full shadow-md border-4 border-blue-500 flex-shrink-0"
              />
              {/* Text Content */}
              <div className="text-center md:text-left w-full md:w-auto flex-grow">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 relative group">
                  KESHAVA MURTHY
                  <span className="block w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-700 mt-2 transition-all duration-300 ease-out group-hover:w-1/2"></span>
                </h3>
                <p className="text-xl font-semibold text-blue-600 mt-2 mb-4">Senior General Manager</p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Mr. Keshava Murthy brings over 50 years of industrial experience, including more than 30 years at Larsen & Toubro Ltd. in their heavy fabrication and excavator manufacturing units. He possesses deep expertise in developing manufacturing processes for both fabrication and machining operations. Mr. Murthy has worked alongside Mr. Rajesh Goel for over 15 years prior to joining Ingenious Engineering Pvt. Ltd.
                </p>
              </div>
            </div>

            {/* Leader 3: Somanatha Reddy */}
            <div className="flex flex-col md:flex-row-reverse justify-between items-center md:items-start gap-10 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image on the Right for this profile */}
              <img
                src="/Images/Website/Pictures/Management/SOMANATHA.jpg"
                alt="Somanatha Reddy"
                className="w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-full shadow-md border-4 border-blue-500 flex-shrink-0"
              />
              {/* Text Content */}
              <div className="text-center md:text-right w-full md:w-auto flex-grow">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 relative group">
                  SOMANATHA REDDY
                  <span className="block w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-700 mt-2 ml-auto transition-all duration-300 ease-out group-hover:w-1/2"></span>
                </h3>
                <p className="text-xl font-semibold text-blue-600 mt-2 mb-4">Senior General Manager</p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Mr. Somanatha Reddy is a production expert with over 20 years of experience in the production of fabricated structures. He has worked with Mr. Rajesh Goel for more than 15 years in their previous company, bringing valuable continuity and expertise to Ingenious Engineering Pvt. Ltd.
                </p>
              </div>
            </div>

            {/* Leader 4: Mahammed Ghouspeer */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image on the Left for this profile */}
              <img
                src="/Images/Website/Pictures/Management/Mahammed_Ghouspeer.jpg"
                alt="Mahammed Ghouspeer"
                className="w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-full shadow-md border-4 border-blue-500 flex-shrink-0"
              />
              {/* Text Content */}
              <div className="text-center md:text-left w-full md:w-auto flex-grow">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 relative group">
                  MAHAMMED GHOUSPEER
                  <span className="block w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-700 mt-2 transition-all duration-300 ease-out group-hover:w-1/2"></span>
                </h3>
                <p className="text-xl font-semibold text-blue-600 mt-2 mb-4">General Manager</p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Mr. Mahammed Ghouspeer serves as the General Manager - PPC at Ingenious Engineering Pvt. Ltd., where he oversees end-to-end operations related to production planning, process development, and manufacturing execution. With over 15 years of experience in the heavy fabrication industry, he plays a key role in aligning operational performance with the company's strategic objectives.
                </p>
              </div>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
