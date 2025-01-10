import Carousel_custom from '@/components/custom/carousel_custom'
import HeroSection from '@/components/custom/heroSection'
import ProductCard from '@/components/custom/productCard'
import { ClientData,SectionEnum,HomeCardData } from '@/constants/data'
const Home = () => {
  return (
    <section>
        <HeroSection/>
        <div className='flex flex-col justify-around items-center h-fit gap-10 max-w-screen px-10 pb-16 relative ' >
            <div className='w-full h-2/5 bg-black absolute bottom-0'>sdafsadfasdf</div>
            <div className='max-w-[1200px] mx-auto'>
            <div className='flex flex-col justify-center items-center md:items-start gap-10'>
                    <h1 className='text-subheading font-bold pt-10'>Explore Our Equipment & Expertise</h1>
                    <p className='text-2xl text-left '>Founded nearly a decade ago, we've grown through quality, precision, and collaboration,
                    offering top-tier equipment backed by skilled engineers and a dedicated workforce.</p>
                    <section className='flex flex-col md:flex-row justify-center items-center gap-24 h-fit'>
                        {
                            HomeCardData.map((data)=>{
                                return <ProductCard cardData={data}/>
                            })
                    }
                    </section>
            </div>
            </div>
        </div>
        <div className='flex flex-col justify-around items-center h-fit gap-10 max-w-screen mx-10'>
            <h1 className='text-heading font-bold py-10'>About Us</h1>
            <p className='text-text max-w-screen-lg text-center'>Ingenious is an established engineering company in India engaged in the manufacture of fabricated
            structures of construction and mining machinery</p>
            <img src="/Images/Banner/Video_aboutUs.png" alt="about_us_image" width="600" height="300"/>
            <div className='flex justify-around items-center gap-10 flex-col md:flex-row w-full max-w-[1200px] mx-auto'>
                <div className='flex flex-col justify-center items-center gap-1'>
                    <h2 className='text-subheading font-bold'>2023</h2>
                    <div className='text-xl bg-blueish w-[100px] h-[4px]'></div>
                    <p className='text-text'>Year of Establishment</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-1'>
                    <h2 className='text-subheading font-bold'>45+</h2>
                    <div className='text-xl bg-blueish w-[70px] h-[4px]'></div>
                    <p className='text-text'>Employees</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-1'>
                    <h2 className='text-subheading font-bold'>6,000m <sup>2</sup>  </h2>
                    <div className='text-xl bg-blueish w-[160px] h-[4px]'></div>
                    <p className='text-text'>Total Land Area</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col justify-around items-center max-w-screen h-screen mx-10'>
            <div className='flex flex-col justify-center items-center gap-10'>
                <h1 className='text-heading font-bold'>Our Family of Brands</h1>
                <p className='text-text text-center '>"We proudly supply to renowned OEM clients, ensuring complete satisfaction with our quality and timely
                delivery. We focus exclusively on serving OEMs, not retail clients."</p>
            </div>
           <div>
           <Carousel_custom Data={ClientData} extraData={false} optionalStyles={"basis-full md:basis-1/5"} cardStructure={SectionEnum.HOME}/>
           </div>

        </div>

    </section>
  )
}

export default Home
