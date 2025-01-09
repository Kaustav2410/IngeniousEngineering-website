import CarouselCustom from '@/components/custom/carousel_custom'
import { AwardsData,SectionEnum } from '@/constants/data'
import React from 'react'

const Awards = () => {
  return (
    <section className="awards mt-5">
            <CarouselCustom Data = {AwardsData} extraData={true} optionalStyles={"basis-1/2 lg:basis-1/5"} cardStructure={SectionEnum.AWARDS}/>
    </section>
  )
}

export default Awards
