import CarouselCustom from '@/components/custom/carousel_custom'
import { AwardsData,SectionEnum } from '@/constants/data'


const Awards = () => {
  return (
    <section className="awards mt-5 mx-auto max-w-[1200px] w-full px-10 ">
            <CarouselCustom Data = {AwardsData} extraData={true} optionalStyles={"basis-1/2 lg:basis-1/4"} cardStructure={SectionEnum.AWARDS}/>
    </section>
  )
}

export default Awards
