import CarouselCustom from '@/components/custom/carousel_custom'
import { AwardsData } from '@/constants/data'
import React from 'react'

const Awards = () => {
  return (
    <section className="awards mt-5">
            <CarouselCustom Data = {AwardsData} extraData={true} />
    </section>
  )
}

export default Awards
