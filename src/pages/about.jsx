import logo from "/Images/Logos/Logo.png"
import Values from "@/components/custom/values";
import Certificate_1 from "/Images/Others/Certificate_1.png";
import Certificate_2 from "/Images/Others/Certificate_2.png";

const About = () => {
  return (
    <section>
      <div className="flex flex-col justify-around items-center h-fit gap-10 max-w-screen py-10 pb-10 bg-gray-100">
        {/* About Us Title */}
        <h1 className="md:text-6xl text-heading font-bold pt-5">ABOUT US</h1>
        <div className="flex flex-col lg:flex-row justify-around items-center gap-10 w-full mt-[52px]">
          {/* Left Section */}
          <div className="flex flex-col gap-10 max-w-md text-left mx-2">
            <div>
              <h2 className="text-4xl text-gray-700 font-bold">MISSION</h2>
              <p className="text-xl mt-4">
                Ingenious is an established engineering company in India engaged
                in the manufacture of fabricated structures of construction and
                mining machinery.
              </p>
            </div>
            <div>
              <h2 className="text-4xl text-gray-700 font-bold">MOTTO</h2>
              <p className="text-xl mt-4">Timely Delivery and High Quality</p>
            </div>
          </div>
          {/* Right Section (Image) */}
          <div className="hidden lg:flex">
            <img
              width="400px"
              height="400px"
              src={logo}
              alt="About Us"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-4">
  <h1 className="md:text-6xl text-heading font-bold mb-14">CERTIFICATES</h1>
  <div className="flex md:flex-row flex-col gap-24"> {/* Increased gap to add more space */}
    {/* Certificate 1 */}
    <div className="flex flex-col items-center bg-white shadow-md p-4 rounded-lg max-w-sm">
      <img
        src={Certificate_1}
        alt="Certificate 1"
        className="w-full rounded-md mb-4 transition-transform duration-300 ease-in-out hover:scale-105"
      />
      <p className="text-gray-600 text-center">
        Ingenious Engineering Pvt. Ltd. is certified under DIN EN ISO 3834-3, demonstrating compliance with standard quality requirements for fusion welding of metallic materials, ensuring high-quality welding practices in both workshop and field installations.
      </p>
    </div>
    {/* Certificate 2 */}
    <div className="flex flex-col items-center bg-white shadow-md p-4 rounded-lg max-w-sm">
      <img
        src={Certificate_2}
        alt="Certificate 2"
        className="w-full rounded-md mb-4 transition-transform duration-300 ease-in-out hover:scale-105"
      />
      <p className="text-gray-600 text-center">
        The company adheres to ISO 3834-3 standards, reflecting its commitment to maintaining standard quality requirements in fusion welding processes, thereby ensuring the reliability and safety of its welded products.
      </p>
    </div>
  </div>
</div>



      <Values />


      {/* Leadership Team Section */}
      <div className="flex flex-col justify-center items-center max-w-screen mx-auto mt-10 pb-14 bg-gray-100">
        <div className="mx-auto max-w-[1200px] w-full p-10 ">
            <h2 className="md:text-6xl text-heading font-bold text-center mb-14">LEADERSHIP TEAM</h2>
            <div className="flex flex-col gap-16 w-full">
            {/* Leader 1 */}


            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
                {/* Text on the Left */}
                <div className="text-left max-w-md group">
                <h3 className="text-subheading font-bold relative group-hover:text-blue-500">RAJESH GOEL</h3>
                <div className="w-0 h-[3px] bg-blue-500 mt-1.5 transition-all duration-300 ease-out group-hover:w-1/2"></div>
                <p className="text-lg font-semibold text-gray-600 mt-2">MD</p>
                <p className="mt-4 text-gray-600 text-md">
                I, Mr. Rajesh Goel, an MBA Graduate and a successful Business man, is the promoter of Ingenious Engineering Pvt. Ltd.,  for more than 15 years catering the needs of OEMs and export of fabricated structures.
                Now, after being successful in managing the family business in running an Industry for more than a decade, I have started a new Industry independently, in the name of “Ingenious Engineering Pvt. Ltd.,
                Two of his senior management persons from his earlier company have joined hands with Mr. Rajesh Goel, in establishing the new company.
                </p>
                </div>
                {/* Image on the Right */}

                <img
                src="/Images/newImags/Management/Rajesh Goel.JPG"
                alt="Rajesh Goel"
                className="w-64 h-64 rounded-lg shadow-md"
                />
            </div>

            {/* Leader 2 */}
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-6 md:items-end">
                {/* Text on the Right */}
                <div className="text-right max-w-md group">
                <h3 className="text-subheading font-bold relative group-hover:text-blue-500 leader-name w-full">KESHAVA MURTHY </h3>
                <div className="w-0 h-[3px] bg-blue-500 mt-1.5 ml-auto transition-all duration-300 ease-out group-hover:w-full "></div>
                <p className="text-lg font-semibold text-gray-600 mt-2">Sr. GM</p>
                <p className="mt-4 text-gray-600 text-md">
                Mr. Keshava Murthy, one of them, having more than 50 years of Industrial experience, and having worked in Larsen Toubro Ltd in their heavy fabrication and Excavator manufacturing units, for more than 30 years. He has the expertise in development of manufacturing processes for both fabrication and machining operations. He has worked with Mr. Rajesh Goel in his earlier company, for more than 15 years.
                </p>
                </div>
                {/* Image on the Left */}
                <img
                src="/Images/newImags/Management/Rajesh Goel.JPG"
                alt="Keshava Murthy"
                className="w-64 h-64 rounded-lg shadow-md"
                />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:items-end">
                {/* Text on the Left */}
                <div className="text-left max-w-md group">
                <h3 className="text-subheading font-bold relative group-hover:text-blue-500">SOMANATHA REDDY</h3>
                <div className="w-0 h-[3px] bg-blue-500 mt-1.5 transition-all duration-300 ease-out group-hover:w-1/2"></div>
                <p className="text-lg font-semibold text-gray-600 mt-2">Sr. GM</p>
                <p className="mt-4 text-gray-600 text-md">
                The second senior management person, a production expert, having more than 20 years of experience in production of fabricated structures. He has also worked with Mr. Rajesh Goel for more than 15 years in the earlier company.
                </p>
                </div>
                {/* Image on the Right */}
                <img
                src="/Images/newImags/Management/Somanatha Reddy.JPG"
                alt="Rajesh Goel"
                className="w-64 h-64 rounded-lg shadow-md"
                />
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
