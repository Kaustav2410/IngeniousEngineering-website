import React, { useState } from 'react'
import companyLogo from "/Images/Logos/Logo.png"
const Navbar = () => {
    const [isHover,setIsHover] = useState(false);
  return (
    <nav className='bg-blacklala h-24 flex text-white justify-around items-center text-text '>
        <div>
            <img alt="logo" src={companyLogo} className='w-20 h-20' />
        </div>
        <ul className="flex gap-14" >
                <li><a href='/'>HOME</a></li>
                <li className='relative z-10' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} >
                    <p>COMPANY</p>
                    <ul className={`flex flex-col gap-3 p-4 md:w-[100px] lg:w-[200px] absolute bg-blacklala text-white ${isHover?"block":"hidden"} `}>
                        <li>
                            <a href='/about-us'>ABOUT US</a>
                        </li>
                        <li >
                        <a href='/awards'>AWARDS</a>
                        </li>
                        <li>
                            <a href='/quality-policy'>QUALITY POLICY</a>
                        </li>
                        <li>
                            <a href='/strategy'>STRATEGY</a>
                        </li>
                    </ul>
                </li>

                <li><a href='/products'>PRODUCT</a></li>

                <li><a href='/career'>CAREER</a></li>

                <li><a href='/contact-us'>CONTACT US</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
