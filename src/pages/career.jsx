import React, { useRef } from "react";
import Values from "@/components/custom/values";
import { careerSchema } from '@/constants/data';
import Forms from '@/components/custom/forms';
import { FormEnum } from "@/constants/data";

const Career = () => {
  const formRef = useRef(null); // Ref for the form section

  const fields = [
    { name: "firstName", label: "First Name", required: true, placeholder: "First Name" },
    { name: "lastName", label: "Last Name", required: true, placeholder: "Last Name" },
    { name: "email", label: "Email", required: true, type: "email", placeholder: "Email" },
    { name: "phone", label: "Phone", required: false, placeholder: "Phone" },
    { name: "resume", label: "Resume", required: true, placeholder: "Resume", type: "file" },
    { name: "state", label: "State", required: false, placeholder: "State" },
    { name: "country", label: "Country", required: false, placeholder: "Country" },
    { name: "message", label: "Message", required: true, type: "textarea", placeholder: "Message" },
  ];

  const onSubmit = (data) => {
    console.log("Contact Us Form Submitted", data);
  };

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Header Section */}
      <div
        className="relative w-full h-80 md:h-96 bg-cover bg-center bg-no-repeat flex items-center bg-[url('/Images/Banner/4.png')]"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

        {/* Text Content */}
        <div className="relative container mx-auto max-w-[1200px] w-full ">
          <div className="flex flex-col md:flex-row items-start px-10">
            {/* Text Wrapper */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white md:mb-4 py-10">
                Ingenious Engineering Career
              </h2>
              {/* <button
                onClick={scrollToForm}
                className=" bg-blueish text-white py-3 px-8 rounded-xl hover:bg-black transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Apply Now
              </button> */}
               <a
               onClick={scrollToForm}
                // Replace with the actual path to your products page
                className="w-40 h-14 mt-6 flex justify-center items-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-lg rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-800 transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
                Get in touch
            </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}

        <div className="mt-10 mx-auto px-10">
          {/* Heading */}
          <h3 className="text-heading font-bold text-gray-800 mb-8 text-center">
            Why You'll Love Working Here
          </h3>
              <p className="text-gray-600 leading-relaxed text-text text-justify max-w-[800px] mx-auto">
                At Ingenious, we value your growth, foster creativity, and
                provide a supportive environment where your ideas make an
                impact. Together, we're shaping the future of the heavy
                machinery industry!
              </p>
      </div>
      <Values />

      {/* Form Section */}
      <div
        ref={formRef}
        className="mx-auto max-w-[1200px] flex flex-col md:flex-row w-full h-fit items-center md:items-start justify-center p-8"
      >
        {/* Left Section - Form */}
        <iframe
                    width="640"
                    height="480"
                    src="https://forms.office.com/Pages/ResponsePage.aspx?id=1PzlRb6VRkuYpwiCnVKcveawZog_K_hJjNimfL73HhJURDREQkxVWEpSSTI5SjJSSFkxVEdYUk1aQi4u&embed=true"
                    frameBorder="0"
                    marginWidth="0"
                    marginHeight="0"
                   style={{ border: "none", maxWidth: "100%", maxHeight: "100vh", minHeight: "1200px" }}
                    allowFullScreen
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    msallowfullscreen="true"
                    />

        {/* Right Section - Text */}
        <div className="w-full h-full md:w-1/2 flex flex-col text-right p-8 md:py-0 ">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
            Do the Work that Matters
          </h1>
          <div className="mt-auto">
            <p className="text-gray-600 font-semibold">Email</p>
            <a
              href="mailto:info@ferrum.co.in"
              className="text-blue-500 underline"
            >
             info@ingeniousengineering.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
