import React from "react";
import Values from "@/components/custom/values";

const Career = () => {
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
        <div className="w-full md:w-1/2 max-w-lg bg-white p-8 rounded-lg">
          <form className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Full Name :
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                E-Mail :
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="phone"
              >
                Phone Number :
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="resume"
              >
                Resume:
              </label>
              <div className="flex items-center mt-1">
                <input
                  type="file"
                  id="resume"
                  className="block w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-3xl file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="message"
              >
                Message :
              </label>
              <textarea
                id="message"
                placeholder="Write your message here"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-3xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

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
