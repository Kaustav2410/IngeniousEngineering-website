import Navbar from "@/components/custom/navbar";
import Values from "@/components/custom/values";
import image from "/Images/Others/4.svg";

const About = () => {
  return (
    <section>
      <div className="flex flex-col justify-around items-center h-fit gap-10 max-w-screen py-10 pb-10 bg-gray-100">
        {/* About Us Title */}
        <h1 className="text-7xl font-bold pt-5">ABOUT US</h1>
        <div className="flex flex-col md:flex-row justify-around items-center gap-10 w-full mt-[52px]">
          {/* Left Section */}
          <div className="flex flex-col gap-10 max-w-md text-left">
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
          <div>
            <img
              width="400px"
              height="400px"
              src={image}
              alt="About Us"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>
        </div>
      </div>

      <Values />

      {/* Leadership Team Section */}
      <div className="flex flex-col justify-center items-center max-w-screen mx-auto mt-10 pb-14 bg-gray-100">
        <div className="mx-auto max-w-[1200px] w-full p-10 ">
            <h2 className="text-6xl font-bold text-center mb-14">Leadership Team</h2>
            <div className="flex flex-col gap-16 w-full">
            {/* Leader 1 */}


            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Text on the Left */}
                <div className="text-left max-w-md group">
                <h3 className="text-subheading font-bold relative group-hover:text-blue-500">Rajesh Goel</h3>
                <div className="w-0 h-[3px] bg-blue-500 mt-1.5 transition-all duration-300 ease-out group-hover:w-1/2"></div>
                <p className="text-lg font-semibold text-gray-600 mt-2">MD</p>
                <p className="mt-4 text-gray-600 text-md">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s.
                </p>
                </div>
                {/* Image on the Right */}
                <img
                src={image}
                alt="Rajesh Goel"
                className="w-48 h-48 rounded-lg shadow-md"
                />
            </div>

            {/* Leader 2 */}
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-6">
                {/* Text on the Right */}
                <div className="text-right max-w-md group">
                <h3 className="text-subheading font-bold relative group-hover:text-blue-500 leader-name">Keshava Murthy</h3>
                <div className="w-0 h-[3px] bg-blue-500 mt-1.5 ml-auto transition-all duration-300 ease-out group-hover:w-full "></div>
                <p className="text-lg font-semibold text-gray-600 mt-2">Sr. GM</p>
                <p className="mt-4 text-gray-600 text-md">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s.
                </p>
                </div>
                {/* Image on the Left */}
                <img
                src={image}
                alt="Keshava Murthy"
                className="w-48 h-48 rounded-lg shadow-md"
                />
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
