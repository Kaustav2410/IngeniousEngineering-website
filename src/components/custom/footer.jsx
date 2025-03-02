import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white p-10 flex flex-col gap-5 max-w-screen '>
        <div className='w-full max-w-[1200px] mx-auto flex flex-col justify-center md:items-start'>
                <h2 className='font-extrabold text-3xl pb-10'>Ingenious Engineering Pvt. Ltd. </h2>
            <div>
            </div>
            <div className='flex justify-between gap-10 md:items-start flex-col-reverse md:flex-row w-full pb-20'>
                <div className=' max-w-[400px] h-80'>
                <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31085.47100014029!2d77.827653!3d13.119202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae042fb2da2d9d%3A0xf9b73806ec289f63!2sFerrum%20Extreme%20Engineering%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1736357932635!5m2!1sen!2sus"
                        style={{ border: 0, width: '100%',
                            height: '100%', }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className='flex gap-20 text-2xl flex-wrap'>
                    <ul className='flex flex-col gap-5'>
                        <li className='pb-5 font-bold text-2xl '>Company</li>
                        <li className="hover:text-blueish transition-colors duration-300 ease-in"><a href='/home'>Home</a></li>
                        <li className="hover:text-blueish transition-colors duration-300 ease-in"><a href='/about-us'>About</a></li>
                        {/* <li className="hover:text-blueish transition-colors duration-300 ease-in"><a href='/awards'>Awards</a></li> */}
                        <li className="hover:text-blueish transition-colors duration-300 ease-in"><a href='/about-us'>Clients</a></li>
                        <li className="hover:text-blueish transition-colors duration-300 ease-in"><a href='/career'>Career</a></li>
                    </ul>
                    <ul className='flex flex-col gap-5 '>
                        <li className='pb-5 font-bold text-2xl'>Documentaion</li>
                        <li className="hover:text-blueish transition-colors duration-300 ease-in"><a href='/contact-us'>Contact us</a></li>
                        <li className="hover:text-blueish transition-colors duration-300 ease-in"><a href='/strategy'>Strategy</a></li>
                        <li className="hover:text-blueish transition-colors duration-300 ease-in"><a href='/quality-policy'>Quality Policy</a></li>
                        <li className="hover:text-blueish transition-colors duration-300 ease-in">Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </div>
        <hr />
        <div className='flex md:flex-row flex-col justify-between items-start md:items-center pt-5 text-text gap-5'>
            <p>© Ingenious Engineering . All Rights Reserved 2025</p>
            <p>Terms and Conditions</p>
        </div>
    </footer>
  )
}

export default Footer
