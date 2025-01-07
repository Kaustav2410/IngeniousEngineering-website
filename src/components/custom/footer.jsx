import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white p-10 flex flex-col gap-5  '>
        <div className='flex justify-around'>
            <div>
                <h2 className='font-bold'>Ingenious Engineering</h2>
                <p>map</p>
            </div>
            <div className='flex gap-20'>
                <ul>
                    <li className='pb-5 font-bold'>Company</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Awards</li>
                    <li>Clients</li>
                    <li>Career</li>
                </ul>
                <ul>
                    <li className='pb-5 font-bold'>Documentation</li>
                    <li>Contact Us</li>
                    <li>Strategy</li>
                    <li>Quality Policy</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
        <hr/>
        <div className='flex justify-between items-center'>
            <p>© Ingenious Engineering . All Rights Reserved 2025</p>
            <p>Terms and Conditions</p>
        </div>
    </footer>
  )
}

export default Footer
