import React, { useState } from 'react'
import companyLogo from "/Images/Logos/Logo.png"
const Navbar = () => {
    const [isHover,setIsHover] = useState(false);
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    function handleMenuOpen(){
        setIsMenuOpen(!isMenuOpen);
    }
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
                    <li className="hover:text-blueish transition-colors duration-300 ease-in flex gap-3">
                    <div className="bg-[url('/Images/Others/awards-dark-icon.jpeg')] w-8 h-8 bg-no-repeat bg-center bg-contain"></div>
                        <a href="/awards">AWARDS</a>
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

                <li className="hover:text-blueish transition-colors duration-300 ease-in"><a href='/products'>PRODUCT</a></li>

                <li className="hover:text-blueish transition-colors duration-300 ease-in"><a href='/career'>CAREER</a></li>

                <li className="hover:text-blueish transition-colors duration-300 ease-in" ><a href='/contact-us'>CONTACT US</a></li>
        </ul>
        {/* <div className={`relative`}>
        <button
            className="text-black p-2 bg-gray-300 rounded"
            onClick={handleMenuOpen}
        >
            {isMenuOpen ? "Close" : "Open"}
        </button>
        </div> */}
        <ul
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } absolute h-screen bg-blacklala w-screen top-0 left-0 flex justify-center items-center flex-col gap-16`}
      >
        <li className="hover:text-blueish transition-colors duration-300 ease-in">
          <a href="/">HOME</a>
        </li>
        <li
          className="relative hover:text-blueish transition-colors duration-300 ease-in"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          COMPANY
          {/* Submenu */}
          <ul
            className={` flex flex-col gap-3 p-4 bg-black text-white top-full w-screen left-0 ${
                isHover ? "block" : "hidden"
            }`}
          >
            <li className="hover:text-blueish transition-colors duration-300 ease-in">
              <a href="/about-us">ABOUT US</a>
            </li>
            <li className="hover:text-blueish transition-colors duration-300 ease-in">
              <a href="/awards">AWARDS</a>
            </li>
            <li className="hover:text-blueish transition-colors duration-300 ease-in">
              <a href="/quality-policy">QUALITY POLICY</a>
            </li>
            <li className="hover:text-blueish transition-colors duration-300 ease-in">
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
    </nav>
  )
}

export default Navbar
