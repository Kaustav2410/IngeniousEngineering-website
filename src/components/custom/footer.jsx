import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white p-10 flex flex-col gap-5 max-w-screen '>
        <div className=' w-full'>
            <div>
                <h2 className='font-extrabold text-3xl pb-10'>Ingenious Engineering Pvt. Ltd. </h2>
            </div>
            <div className='flex justify-around items-start w-full pb-20'>
                <div>
                <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31085.47100014029!2d77.827653!3d13.119202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae042fb2da2d9d%3A0xf9b73806ec289f63!2sFerrum%20Extreme%20Engineering%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1736357932635!5m2!1sen!2sus"
                        width="350"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className='flex gap-20 text-2xl'>
                    <ul className='flex flex-col gap-5'>
                        <li className='pb-5 font-bold text-2xl'>Company</li>
                        <li>Home</li>
                        <li>About</li>
                        <li>Awards</li>
                        <li>Clients</li>
                        <li>Career</li>
                    </ul>
                    <ul className='flex flex-col gap-5'>
                        <li className='pb-5 font-bold text-2xl'>Documentation</li>
                        <li>Contact Us</li>
                        <li>Strategy</li>
                        <li>Quality Policy</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </div>
        <hr />
        <div className='flex justify-between items-center pt-5 text-text'>
            <p>© Ingenious Engineering . All Rights Reserved 2025</p>
            <p>Terms and Conditions</p>
        </div>
    </footer>
  )
}

export default Footer
