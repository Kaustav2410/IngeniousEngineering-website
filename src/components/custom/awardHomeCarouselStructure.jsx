import React from 'react'
import image from "/chip.jpeg"
const AwardHomeCarouselStructure = ({data,optionalStyles}) => {
  return (<div
    key={data.title}
    className={`embla__slide ${optionalStyles} flex-shrink-0 flex justify-center items-center flex-col `}
    >
    <img
      width="180px"
      height="180px"
      src={data.imageUrl}
      alt={`Slide`}
    />
    <h2 className="text-center font-semibold mt-2">{data.title}</h2>
    </div>
  )
}

export default AwardHomeCarouselStructure
