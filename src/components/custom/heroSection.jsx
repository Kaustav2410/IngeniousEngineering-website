import React from 'react'

const HeroSection = () => {
  return (
    <section className='flex flex-col gap-10 pl-10 pt-10 max-w-[1200px] mx-auto'>
            <img src="#" alt="hero-section-logo"/>
            <h1 className='text-heading flex gap-10 leading-relaxed'>
                Timely<br />
                Delivery &<br />
                High Quality
            </h1>
            <p className='text-text'>Delivery excellence in engineering with precision-crafted solution for construction and mining machinery.</p>
            <button type='button' className=' w-40 h-14 rounded-xl px-6 bg-blueish text-neutral-50 shadow hover:bg-blacklala  '>GET IN TOUCH</button>
    </section>
  )
}

export default HeroSection;
