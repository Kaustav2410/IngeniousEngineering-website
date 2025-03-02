import React, { useState,useEffect,useRef } from 'react'
import companyLogo from "/Images/Logos/Logo.png"
import { gsap } from "gsap";
const Navbar = () => {
    const [isHover,setIsHover] = useState(false);
    const navbarRef = useRef(null);
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    function handleMenuOpen(){
        setIsMenuOpen((prev) => {
            const newState = !prev;
            if (typeof window !== "undefined" && window.document) {
              document.body.style.overflow = newState ? "hidden" : "unset";
            }
            return newState;
          });


    }
    useEffect(()=>{
        gsap.set(navbarRef.current, { autoAlpha: 0 });
    },[])
    useEffect(() => {
        const items = navbarRef.current?.children; // Get all <li> children
        if (!items) return;

        // Set initial state on mount to ensure navbar matches isMenuOpen

        if (isMenuOpen) {
          // Animate in: Show navbar first, then stagger children
          const tl = gsap.timeline();
          tl.fromTo(
            navbarRef.current,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.1 } // Quick fade in
          ).fromTo(
            items,
            { opacity: 0, y: 20 }, // Start: hidden, shifted down
            {
              opacity: 1,
              y: 0, // End: visible, in place
              duration: 0.5,
              stagger: 0.2, // 0.2s delay between each child
              ease: "power2.out",
            }
          );
        } else {
          // Animate out: Stagger children, then hide navbar
          const tl = gsap.timeline();
          tl.fromTo(
            items,
            { opacity: 1, y: 0 }, // Start: visible, in place
            {
              opacity: 0,
              y: -20, // End: hidden, shifted up
              duration: 0.5,
              stagger: {
                each: 0.2, // 0.2s delay between each child
                from: "end", // Start from the last child
              },
              ease: "power2.in",
            }
          ).to(
            navbarRef.current,
            {
              autoAlpha: 0, // Fade out navbar
              duration: 0.1,
            },
            "-=0.1" // Overlap slightly with last child's animation
          );
        }
      }, [isMenuOpen]);
  return (
    <nav className='bg-black h-24 flex text-white justify-around items-center text-text '>
        <div>
            <img alt="logo" src={companyLogo} className='w-20 h-20' />
        </div>
        <ul className="hidden md:flex gap-14 transition duration-300 ease-in group" >
                <li className="hover:text-blueish transition-colors duration-300 ease-in"><a href='/'>HOME</a></li>
                <li className='relative z-10' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} >
                    <li className="hover:text-blueish transition-colors duration-300 ease-in">COMPANY</li>
                    <ul
                    className={`flex flex-col gap-3 p-4 w-[230px] absolute bg-black rounded-lg text-white ${
                        isHover ? "block" : "hidden"
                    } `}
                    >
                    <li className="hover:text-blueish transition-colors duration-300 ease-in flex gap-3">
                    <div className="bg-[url('/Images/Others/about-us-dark.jpeg')] w-8 h-8 bg-no-repeat bg-center bg-contain"></div>
                        <a href="/about-us">ABOUT US</a>
                    </li>
                    {/* <li className="hover:text-blueish transition-colors duration-300 ease-in flex gap-3">
                    <div className="bg-[url('/Images/Others/awards-dark-icon.jpeg')] w-8 h-8 bg-no-repeat bg-center bg-contain"></div>
                        <a href="/awards">AWARDS</a>
                    </li> */}
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

                <li className="hover:text-blueish transition-colors duration-300 ease-in"><a href='/products'>PRODUCT</a></li>

                <li className="hover:text-blueish transition-colors duration-300 ease-in"><a href='/career'>CAREER</a></li>

                <li className="hover:text-blueish transition-colors duration-300 ease-in" ><a href='/contact-us'>CONTACT US</a></li>
        </ul>
        <div className={`relative`}>
        <button
            className={`sticky text-white bg-black p-2 rounded z-30 ${
                isMenuOpen
                  ? "before:content-['✕'] "
                  : "before:content-['☰'] "
              }
            md:hidden
              `}
            onClick={handleMenuOpen}
        >
        </button>
        </div>
        <ul
  className={`mobile-navbar md:hidden z-10 absolute h-screen bg-blacklala w-full top-0 left-0 flex justify-center items-center flex-col gap-10  `}
  ref={navbarRef}
>
  <li className="hover:text-blueish transition-colors duration-300 ease-in">
    <a href="/">HOME</a>
  </li>
  {/* <li
    className="relative hover:text-blueish transition-colors duration-300 ease-in"
    onMouseEnter={() =>
        setIsHover(true)
    }
    onMouseLeave={() =>
            setIsHover(false)
    }
  > */}
    <li className="flex justify-center w-full">COMPANY</li>
    {/* Submenu */}
    {/* <ul
      className={` flex-col text-white justify-center items-center gap-6 ${
        isHover ? "flex" : "hidden"
      }`}
    > */}
    <li className="hover:text-blueish transition-colors duration-300 ease-in">
    <a href="/about-us">ABOUT US</a>
    </li>
    <li className="hover:text-blueish transition-colors duration-300 ease-in">
    <a href="/quality-policy">QUALITY POLICY</a>
    </li>
    <li className="hover:text-blueish transition-colors duration-300 ease-in">
    <a href="/strategy">STRATEGY</a>
    </li>
    {/* </ul> */}
  {/* </li> */}
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
  )
}

export default Navbar
