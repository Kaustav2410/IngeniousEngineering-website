import React, { useState, useEffect, useRef } from "react";
import companyLogo from "/Images/Logos/Ingenious_Logo.png";
import { gsap } from "gsap";

const Navbar = () => {
  const [isHover, setIsHover] = useState(false);
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
    <nav className="bg-black h-24 flex text-white justify-around items-center text-text">
      <div>
        <img alt="logo" src={companyLogo} className="w-20 h-20" />
      </div>
      <ul className="hidden md:flex gap-14 transition duration-300 ease-in group">
        <li className="hover:text-blueish transition-colors duration-300 ease-in">
          <a href="/">HOME</a>
        </li>
        <li
          className="relative z-10"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <span className="hover:text-blueish transition-colors duration-300 ease-in">
            COMPANY
          </span>
          <ul
            className={`flex flex-col gap-3 p-4 w-[230px] absolute bg-black rounded-lg text-white ${
              isHover ? "block" : "hidden"
            }`}
          >
            <li className="hover:text-blueish transition-colors duration-300 ease-in flex gap-3">
              <div className="bg-[url('/Images/Others/about-us-dark.jpeg')] w-8 h-8 bg-no-repeat bg-center bg-contain"></div>
              <a href="/about-us">ABOUT US</a>
            </li>
            <li className="hover:text-blueish transition-colors duration-300 ease-in flex gap-3">
              <div className="bg-[url('/Images/Others/quality-dark-icon.jpeg')] w-8 h-8 bg-no-repeat bg-center bg-contain"></div>
              <a href="/quality-policy">QUALITY POLICY</a>
            </li>
            <li className="hover:text-blueish transition-colors duration-300 ease-in flex gap-3">
              <div className="bg-[url('/Images/Others/strategy-icon.jpeg')] w-8 h-8 bg-no-repeat bg-center bg-contain"></div>
              <a href="/strategy">STRATEGY</a>
            </li>
          </ul>
        </li>
        <li className="hover:text-blueish transition-colors duration-300 ease-in">
          <a href="/products">PRODUCT</a>
        </li>
        <li className="hover:text-blueish transition-colors duration-300 ease-in">
          <a href="/career">CAREER</a>
        </li>
        <li className="hover:text-blueish transition-colors duration-300 ease-in">
          <a href="/contact-us">CONTACT US</a>
        </li>
      </ul>
      <div className="relative">
        <button
          className={`sticky text-white bg-black p-2 rounded z-30 md:hidden ${
            isMenuOpen ? "before:content-['✕']" : "before:content-['☰']"
          }`}
          onClick={handleMenuOpen}
        ></button>
      </div>
      <ul
        ref={navbarRef}
        className="mobile-navbar md:hidden z-10 absolute h-screen bg-blacklala w-full top-0 left-0 flex justify-center items-center flex-col gap-10"
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
        <li className="hover:text-blueish transition-colors duration-300 ease-in">
          <a href="/strategy">STRATEGY</a>
        </li>
        <li className="hover:text-blueish transition-colors duration-300 ease-in">
          <a href="/products">PRODUCT</a>
        </li>
        <li className="hover:text-blueish transition-colors duration-300 ease-in">
          <a href="/career">CAREER</a>
        </li>
        <li className="hover:text-blueish transition-colors duration-300 ease-in">
          <a href="/contact-us">CONTACT US</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
