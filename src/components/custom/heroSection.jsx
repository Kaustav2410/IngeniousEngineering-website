import React from 'react'
import heroSectionBanner from "/Images/Banner/1.png"
const HeroSection = () => {
  return (
    <section className="bg-[url('/Images/Banner/1.png')] max-w-screen h-screen bg-cover flex flex-col gap-10 pl-10 pt-10 text-white mx-auto">
            <div className='w-full max-w-[1200px] mx-auto flex flex-col gap-10'>
            <h1 className='text-6xl flex gap-10 leading-relaxed text-blueish'>
                Timely<br />
                Delivery &<br />
                High Quality
            </h1>
            <p className='text-3xl'>Delivery excellence in engineering with precision-crafted solution for construction and mining machinery.</p>
            <button type='button' className=' w-40 h-14 rounded-xl px-6 bg-blueish text-neutral-50 shadow hover:bg-blacklala mt-3 '>GET IN TOUCH</button>
            </div>
    </section>
  )
}

export default HeroSection;
