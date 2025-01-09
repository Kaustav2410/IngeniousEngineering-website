import React from 'react'

//   import image from ""
const ProductCard = () => {
  return (
    <section className='flex flex-col md:flex-row gap-24 h-fit'>
        <div className="bg-[url('/Images/Others/1.svg')] bg-cover bg-center relative w-[300px] h-[300px] flex items-center text-white ">
            <div className='flex flex-col justify-center items-center gap-10 px-5'>
                        <h1 className='text-heading font-bold'>Product</h1>
                        <p className='text-text max-w-screen-lg text-center'>We manufacture OEM equipment to specifications,supported by in-house engineering and design</p>
            </div>
        </div>
        <div className="bg-[url('/Images/Others/2.svg')] bg-cover bg-center relative w-[300px] h-[300px] flex  items-center text-white pb-10 ">
            <div className='flex flex-col justify-center items-center gap-10 px-5'>
                        <h1 className='text-heading font-bold'>Strategy
                        </h1>
                        <p className='text-text max-w-screen-lg text-center'>Success through precision,efficiency, and continuous improvement.
                        </p>
            </div>
        </div>
        <div className="bg-[url('/Images/Others/3.svg')] bg-cover bg-center relative w-[300px] h-[300px] flex  items-center text-white ">
            <div className='flex flex-col justify-center items-center gap-10 px-5'>
                        <h1 className='text-heading font-bold'>Awards</h1>
                        <p className='text-text max-w-screen-lg text-center'>Honored with awards for
innovation, quality, and
leadership.</p>
            </div>
        </div>
    </section>
  )
}

export default ProductCard
