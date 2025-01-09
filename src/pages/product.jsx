import React,{useState} from 'react'
import { ProductData,SectionEnum } from '@/constants/data'
import CarouselCustom from '@/components/custom/carousel_custom'
import { Input } from '@/components/ui/input';

const Product = () => {
    const [searchTerm, setSearchTerm] = useState("");
  const [productIndex, setProductIndex] = useState(null);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    console.log(term);
    setSearchTerm(term);

    // Find the index of the matching product
    const index = ProductData.findIndex((product) =>
      product.title.toLowerCase().includes(term)
    );
    console.log(index);
    setProductIndex(index >= 0 ? index : null);
  };
  return (
    <div className="bg-[url('/Images/Banner/2.png')] max-w-screen h-fit ">
        <div className='w-full mx-auto max-w-[1200px] h-2/3'>
            <div className='flex flex-col justify-center items-start gap-10 '>
                    <h1 className='text-heading text-blueish font-bold'>
                    Engineering Heavy Machinery<br />
                    Performance<br />
                    Equipments to Elevate Your
                    </h1>
                    <p className='text-text max-w-screen-lg text-center text-white'>Precision-engineered heavy machinery equipment to power your productivity and efficiency</p>
                    <div className='flex gap-10 justify-center items-center pb-10'>
                    <button type='button' className=' w-40 h-14 rounded-xl px-6 bg-blueish text-neutral-50 shadow hover:bg-blacklala  '>GET IN TOUCH</button>
                        <button className=' w-50 h-14 rounded-xl px-6 bg-white text-black shadow hover:bg-black hover:text-white  '>VIEW PRODUCTS </button>
                    </div>
            </div>
        </div>

        <div className='bg-blacklala flex flex-col justify-center items-center text-white'>
            <h1 className='text-heading font-bold py-10 '>Our Solutions for Heavy Machinery Equipment</h1>

               <div className='w-full mx-auto max-w-[1200px] '>
               <input
                type="text"
                placeholder="Search for a product"
                value={searchTerm}
                onChange={handleSearch}
                className="p-4 border border-gray-300 rounded-xl bg-blacklala text-white "
            />
               </div>
        <CarouselCustom Data={ProductData} extraData={false} optionalStyles={"lg:basis-1/2"} cardStructure={SectionEnum.PRODUCTS}  initialSlideIndex={productIndex} />

        </div>
    </div>
  )
}

export default Product
