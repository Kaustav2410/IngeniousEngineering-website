import React from 'react'
const LeadershipCard = ({memeberData}) => {
  return (
    <div className="flex flex-col max-w-md group">
                   <div className='w-full flex flex-col items-center relative'>
                     <img
                src={memeberData.imageUrl}
                alt={memeberData.Name}
                className="w-60 h-60 rounded-full shadow-md"
                />
                <img src={memeberData.banner} className='w-56 absolute -bottom-[60px]' />
                   </div>

                <p className="text-text font-semibold mt-16 text-blue-500">Designation</p>
                <p className="text-text font-semibold text-gray-600">{memeberData.Designation}</p>
                <p className="mt-4 text-gray-600 text-md text-justify">
                {memeberData.Description}
                </p>
            </div>
  )
}

export default LeadershipCard
