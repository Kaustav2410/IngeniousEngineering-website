import React from "react";
import Values from "@/components/custom/values";
import { careerSchema } from '@/constants/data'
import Forms from '@/components/custom/forms';
import { FormEnum } from "@/constants/data";
const Career = () => {
    const fields = [
        { name: "firstName", label: "First Name", required: true, placeholder: "First Name" },
        { name: "lastName", label: "Last Name", required: true, placeholder: "Last Name" },
        { name: "email", label: "Email", required: true, type: "email", placeholder: "Email" },
        { name: "phone", label: "Phone", required: false, placeholder: "Phone" },
        { name: "resume", label: "Resume", required: true, placeholder: "Resume",type:"file" },
        { name: "state", label: "State", required: false, placeholder: "State" },
        { name: "country", label: "Country", required: false, placeholder: "Country" },
        { name: "message", label: "Message", required: true, type: "textarea", placeholder: "Message" },
      ];
      const onSubmit  = (data) => {
        console.log("Contact Us Form Submitted", data);
      };
  return (
    <div>
      {/* Header Section */}
      <div
        className="relative w-full h-80 md:h-96 bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage:
            "url('https://s7d2.scene7.com/is/image/Caterpillar/CM20220307-56c1d-11453')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

        {/* Text Content */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start">
            {/* Text Wrapper */}
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ingenious Engineering Career
              </h2>
              <a
                href="/en/careers/apply-now.html"
                className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-5 flex justify-center">
        <div className="w-full max-w-6xl px-6 md:px-16">
          {/* Heading */}
          <h3 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
            Why You’ll Love Working Here
          </h3>

          {/* Content */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Paragraph */}
            <div className="md:w-2/3">
              <p className="text-gray-600 text-lg leading-relaxed">
                At Ingenious, we value your growth, foster creativity, and
                provide a supportive environment where your ideas make an
                impact. Together, we’re shaping the future of the heavy
                machinery industry!
              </p>
            </div>

            {/* Image/Icon */}
            <div className="md:w-1/3">
              <figure className="w-full h-48 md:h-64 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://s7d2.scene7.com/is/image/Caterpillar/CM20220307-56c1d-11453"
                  alt="Employee collage"
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <Values />
      <div className="flex flex-col md:flex-row w-full h-screen items-center justify-center p-8">
        {/* Left Section - Form */}

  <Forms
        schema={careerSchema}
        fields={fields}
        handleSubmit={onSubmit}
        formType={FormEnum.CAREER}
        />

        {/* Right Section - Text */}
        <div className="w-full h-full md:w-1/2 flex flex-col items-end text-right p-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
            Do the Work that Matters
          </h1>
          <div className="mt-auto">
            <p className="text-gray-600 font-semibold">Email</p>
            <a
              href="mailto:info@ferrum.co.in"
              className="text-blue-500 underline"
            >
              info@ferrum.co.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
