import React from 'react'
import image from "/chip.jpeg"
const ProductDetails = ({data}) => {
  return (
   <div className='w-full h-full bg-white py-20 flex justify-center items-center'>
             <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full max-w-[1200px] mx-auto  text-black">
                       <div className="flex flex-col items-start justify-center max-w-md group">
                         <h3 className="text-3xl font-bold relative group-hover:text-blue-500">{data.title}</h3>
                         <div className="w-0 h-[3px] bg-blue-500 mt-1.5  transition-all duration-300 ease-out group-hover:w-1/2"></div>
                         <ol className="flex flex-col items-start justify-center gap-2 list-disc ">
                           {data.productData.map((pdata)=>{
                            return(
                                <li key={pdata.id} className="text-text ">{pdata}</li>
                            )
                           })}
                         </ol>
                       </div>
                       {/* Image on the Left */}
                       <img
                         src={image}
                         alt="Keshava Murthy"
                         className="w-40 h-40 rounded-lg shadow-md"
                       />
                     </div>
   </div>
  )
}

export default ProductDetails
