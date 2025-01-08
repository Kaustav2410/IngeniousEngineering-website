import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white p-10 flex flex-col gap-5  '>
        <div className='flex justify-around'>
            <div>
                <h2 className='font-bold'>Ingenious Engineering</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31085.47100014029!2d77.827653!3d13.119202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae042fb2da2d9d%3A0xf9b73806ec289f63!2sFerrum%20Extreme%20Engineering%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1736357932635!5m2!1sen!2sus"
                    width="300"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

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
