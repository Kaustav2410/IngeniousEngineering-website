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
        <div className='w-full mx-auto max-w-[1200px] h-2/3 px-10'>
            <div className='flex flex-col justify-center items-start gap-10 '>
                    <h1 className='text-heading text-blueish font-bold'>
                    Engineering Heavy Machinery<br />
                    Performance<br />
                    Equipments to Elevate Your
                    </h1>
                    <p className='text-text max-w-screen-lg text-left text-white'>Precision-engineered heavy machinery equipment to power your productivity and efficiency</p>
                    <div className='flex gap-10 justify-center items-center pb-10'>
                    <button type='button' className=' w-40 h-14 rounded-xl px-6 bg-blueish text-neutral-50 shadow hover:bg-blacklala  '>GET IN TOUCH</button>
                        <button className=' w-50 h-14 rounded-xl px-6 bg-white text-black shadow hover:bg-black hover:text-white  '>VIEW PRODUCTS </button>
                    </div>
            </div>
        </div>

        <div className='bg-blacklala flex flex-col justify-center items-center text-white py-0'>
            <h1 className='text-heading font-bold p-10 mx-auto max-w-[1200px] w-full '>Our Solutions for Heavy Machinery Equipment</h1>

               <div className='w-full mx-auto max-w-[1200px] py-10'>
               <input
                type="text"
                placeholder="Search for a product"
                value={searchTerm}
                onChange={handleSearch}
                className="ml-10 border border-gray-300 rounded-xl bg-blacklala text-white px-10 py-4"
            />
               </div>
        <CarouselCustom Data={ProductData} extraData={false} optionalStyles={"basis-full mx-10 overflow:hidden"} cardStructure={SectionEnum.PRODUCTS}  initialSlideIndex={productIndex} />

        </div>
    </div>
  )
}

export default Product
