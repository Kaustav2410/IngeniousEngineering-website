import React, { useState } from 'react'

const Navbar = () => {
    const [isHover,setIsHover] = useState(false);
  return (
    <nav className='bg-blacklala h-20 flex text-white justify-around items-center '>
        <div>
            <img alt="logo" src="#"  />
        </div>
        <ul className="flex gap-14" >
                <li>Home</li>
                <li className='relative' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} >
                    <p>Company</p>
                    <ul className={`flex flex-col gap-3 p-4 md:w-[100px] lg:w-[200px] absolute bg-blacklala text-white ${isHover?"block":"hidden"} `}>
                        <li href="/docs" title="Introduction">
                            About Us
                        </li>
                        <li href="/docs/installation" title="Installation">
                        Awards
                        </li>
                        <li href="/docs/primitives/typography" title="Typography">
                            Quality Policy
                        </li>
                    </ul>
                </li>

                <li>Products</li>

                <li>Career</li>

                <li>Contact us</li>
        </ul>
    </nav>
  )
}

export default Navbar
