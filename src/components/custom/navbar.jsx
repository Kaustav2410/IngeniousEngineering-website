import React, { useState } from 'react'

const Navbar = () => {
    const [isHover,setIsHover] = useState(false);
  return (
    <nav className='bg-blacklala h-20 flex text-white justify-around items-center '>
        <div>
            <img alt="logo" src="#"  />
        </div>
        <ul className="flex gap-14" >
                <li><a href='/'>Home</a></li>
                <li className='relative z-10' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} >
                    <p>Company</p>
                    <ul className={`flex flex-col gap-3 p-4 md:w-[100px] lg:w-[200px] absolute bg-blacklala text-white ${isHover?"block":"hidden"} `}>
                        <li>
                            <a href='/about-us'>About Us</a>
                        </li>
                        <li >
                        <a href='/awards'>Awards</a>
                        </li>
                        <li>
                            Quality Policy
                        </li>
                    </ul>
                </li>

                <li><a href='/products'>Product</a></li>

                <li>Career</li>

                <li><a href='/contact-us'>Contact Us</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
