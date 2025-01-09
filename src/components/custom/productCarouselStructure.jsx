import React from 'react'

const ProductCarouselStructure = ({optionalStyles,data,index,handleSlideClick}) => {
  return (
    <div className={`embla__slide ${optionalStyles} flex-shrink-0 flex justify-center items-start gap-20 py-20 flex-col  text-white `} onClick={() => handleSlideClick(index)}>
        <div>
        <h3 className="text-3xl font-bold relative group-hover:text-blue-500">{data.title}</h3>
        <div className="w-0 h-[3px] bg-blue-500 mt-1.5  transition-all duration-300 ease-out group-hover:w-1/2"></div>
        <p className='text-text max-w-[300px]'>Precision-driven performance for unmatched
        cutting efficiency and versatility</p>
    </div>
    <button className=' w-40 h-14 rounded-xl px-6 bg-blueish text-black shadow hover:bg-white '>Read More</button>
    </div>
  )
}

export default ProductCarouselStructure
