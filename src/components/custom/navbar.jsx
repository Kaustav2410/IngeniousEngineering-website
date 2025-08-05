import React, { useState, useEffect, useRef } from "react";
import companyLogo from "/Images/Logos/Ingenious_Logo.png";
import { gsap } from "gsap";
import { ProductData } from "@/constants/data";

const Navbar = () => {
  const [isHover, setIsHover] = useState(false);
  const [isHoverP, setIsHoverP] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const tlRef = useRef(null);

  function handleMenuOpen() {
    setIsMenuOpen((prev) => {
      const newState = !prev;
      if (typeof window !== "undefined" && window.document) {
        document.body.style.overflow = newState ? "hidden" : "unset";
      }
      return newState;
    });
  }

  useEffect(() => {
    const items = navbarRef.current?.children;
    if (!items || !navbarRef.current) return;

    // Set initial state: far off-screen to prevent visibility during resize
    gsap.set(navbarRef.current, { y: "-100vw" ,opacity:0}); // Use viewport width for consistency

    // Create the timeline
    tlRef.current = gsap.timeline({ paused: true });
    tlRef.current
      .to(navbarRef.current, {
        y: 0, // Slide in from right
        duration: 0.75,
        ease: "power2.inOut",
        opacity:1
      })
      .fromTo(
        items,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.5"
      );

    return () => {
      tlRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      console.log("opened");
      tlRef.current?.play();
    } else {
      console.log("closed");
      tlRef.current?.reverse();
    }
  }, [isMenuOpen]);

  return (
    <section className="sticky top-0 z-50 bg-blacklala shadow-md transition-shadow duration-300">
        <nav className=" flex text-white  justify-around md:w-full mx-auto lg:justify-between lg:px-5 py-3 items-center text-text">
     <div className="flex justify-center items-center gap-4 ">
            <div className="z-50">
                <a href="/"><img alt="logo" src={companyLogo} className="max-w-[4rem] " /></a>
            </div>

            <div className="flex gap-4  ">
                <p>Ingenious</p>
                <p className="text-blue-400">Engineering</p>
            </div>
     </div>

      <ul className=" hidden lg:flex gap-4 text-lg font-medium ">
  {/* HOME Link */}
  <li className="relative">
    <a
      href="/"
      className="block py-2 px-3 rounded-md hover:text-blue-600 transition-colors duration-300 ease-in-out"
    >
      HOME
    </a>
  </li>

  {/* COMPANY Dropdown */}
  <li
    className="relative group"
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}
  >
    <span className="cursor-pointer block py-2 px-3 rounded-md hover:text-blue-600 transition-colors duration-300 ease-in-out">
      COMPANY
      {/* Optional: Add a small arrow icon to indicate dropdown */}
      <svg
        className={`inline-block ml-1 w-4 h-4 transform transition-transform duration-300 ${
          isHover ? 'rotate-180' : 'rotate-0'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </span>
    <ul
      className={`absolute left-1/2 -translate-x-1/2 mt-3 w-[200px] bg-blacklala rounded-lg shadow-xl py-2 z-20
        transition-all duration-300 ease-in-out origin-top
        ${isHover ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}`}
    >
      <li className="flex items-center gap-3 px-4 py-2 text-white hover:bg-gray-800 hover:text-blue-400 transition-all duration-200">
        <div
          className="w-6 h-6 bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: "url('/Images/Others/about-us-dark.jpeg')" }}
        ></div>
        <a href="/about-us" className="block w-full">
          ABOUT US
        </a>
      </li>
      <li className="flex items-center gap-3 px-4 py-2 text-white hover:bg-gray-800 hover:text-blue-400 transition-all duration-200">
        <div
          className="w-6 h-6 bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: "url('/Images/Others/quality-dark-icon.jpeg')" }}
        ></div>
        <a href="/quality-policy" className="block w-full">
          QUALITY POLICY
        </a>
      </li>
      {/* <li className="flex items-center gap-3 px-4 py-2 text-white hover:bg-gray-800 hover:text-blue-400 transition-colors duration-300 ease-in">
        <div className="w-6 h-6 bg-no-repeat bg-center bg-contain"
             style={{ backgroundImage: "url('/Images/Others/strategy-icon.jpeg')" }}></div>
        <a href="/strategy" className="block w-full">STRATEGY</a>
      </li> */}
    </ul>
  </li>

  {/* OUR PRODUCTS Mega-Dropdown */}
  <li
    className="relative group"
    onMouseEnter={() => setIsHoverP(true)}
    onMouseLeave={() => setIsHoverP(false)}
  >
    <span className="cursor-pointer block py-2 px-3 rounded-md hover:text-blue-600 transition-colors duration-300 ease-in-out">
      OUR PRODUCTS
      {/* Optional: Add a small arrow icon to indicate dropdown */}
      <svg
        className={`inline-block ml-1 w-4 h-4 transform transition-transform duration-300 ${
          isHoverP ? 'rotate-180' : 'rotate-0'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </span>
    <div
      className={`absolute left-0 right-0 md:left-auto md:md:right-auto md:w-auto mx-auto mt-3 bg-blacklala rounded-lg shadow-xl py-6 px-4 md:px-6 z-30
        transition-all duration-300 ease-in-out origin-top
        ${isHoverP ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}`}
      style={{ minWidth: '280px', maxWidth: '100vw' }}
    >
      <div className="flex flex-col md:flex-row justify-start flex-wrap gap-x-8 md:gap-x-12 gap-y-6">
        {/* Assuming ProductData is available in scope */}
        {ProductData.map((data, index) => (
          <div key={index} className="flex flex-col gap-2 min-w-[150px] md:min-w-[180px]">
            <p className="font-semibold text-white text-lg mb-2 border-b border-gray-700 pb-2">
              <a
                href={`/products#${data.id}`}
                className="hover:text-blue-400 transition-colors duration-200 block"
              >
                {data.title}
              </a>
            </p>
            {/* <ul className="flex flex-col gap-1">
              {data.products.map((x, subIndex) => (
                <li key={subIndex}>
                  <a
                    href={`/products#${x.id}`}
                    className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 text-base"
                  >
                    {x.title}
                  </a>
                </li>
              ))}
            </ul> */}
          </div>
        ))}
      </div>
    </div>
  </li>

  {/* CAREER Link */}
  <li className="relative">
    <a
      href="/career"
      className="block py-2 px-3 rounded-md hover:text-blue-600 transition-colors duration-300 ease-in-out"
    >
      CAREER
    </a>
  </li>

  {/* CONTACT US Link */}
  <li className="relative">
    <a
      href="/contact-us"
      className="block py-2 px-3 rounded-md hover:text-blue-600 transition-colors duration-300 ease-in-out"
    >
      CONTACT US
    </a>
  </li>
</ul>
      {/* mobile navbar */}
      <div className="sticky lg:hidden z-50">
        <button
          className={` text-white to-blacklala p-2 rounded  ${
            isMenuOpen ? "before:content-['✕']" : "before:content-['☰']"
          }`}
          onClick={handleMenuOpen}
        ></button>
      </div>
      <ul
        ref={navbarRef}
        className="mobile-navbar lg:hidden z-40 absolute h-screen bg-blacklala w-full top-0 left-0 flex justify-center items-center flex-col gap-10 "
      >
        <li className="hover:text-blueish transition-colors duration-300 ease-in">
          <a href="/">HOME</a>
        </li>
        <li className="hover:text-blueish transition-colors duration-300 ease-in">
          <a href="/about-us">ABOUT US</a>
        </li>
        <li className="hover:text-blueish transition-colors duration-300 ease-in">
          <a href="/quality-policy">QUALITY POLICY</a>
        </li>
        {/* <li className="hover:text-blueish transition-colors duration-300 ease-in">
          <a href="/strategy">STRATEGY</a>
        </li> */}
        <li className="hover:text-blueish transition-colors duration-300 ease-in">
          <a href="/products">OUR PRODUCTS</a>
        </li>
        <li className="hover:text-blueish transition-colors duration-300 ease-in">
          <a href="/career">CAREER</a>
        </li>
        <li className="hover:text-blueish transition-colors duration-300 ease-in">
          <a href="/contact-us">CONTACT US</a>
        </li>
      </ul>
    </nav>
    </section>
  );
};

export default Navbar;
