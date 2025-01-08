import Carousel_custom from '@/components/custom/carousel_custom'
import HeroSection from '@/components/custom/heroSection'
import image from "../assets/chip.jpeg"
import ProductCard from '@/components/custom/productCard'
import Footer from '@/components/custom/footer'
import { ClientData } from '@/constants/data'
const Home = () => {
  return (
    <section>
        <HeroSection/>
        <div className='flex flex-col justify-around items-center h-fit gap-10 max-w-screen bg-[linear-gradient(to-top, white 50%, blacklala 50%)]'>
            <div className='max-w-[1200px] mx-auto'>
            <div className='flex flex-col justify-center items-center gap-10'>
                    <h1 className='text-subheading'>Explore Our Equipment & Expertise</h1>
                    <p className='text-text max-w-screen-lg text-center'>Founded nearly a decade ago, we've grown through quality, precision, and collaboration,
                    offering top-tier equipment backed by skilled engineers and a dedicated workforce</p>
                    <ProductCard/>
            </div>
            </div>
        </div>
        <div className='flex flex-col justify-around items-center h-fit gap-10 max-w-screen mx-10'>
            <h1 className='text-heading font-bold '>About Us</h1>
            <p className='text-text max-w-screen-lg text-center'>Ingenious is an established engineering company in India engaged in the manufacture of fabricated
            structures of construction and mining machinery</p>
            <img src={image} alt="about_us_image"/>
            <div className='flex justify-around items-center gap-10 flex-col md:flex-row w-full'>
                <div className='flex flex-col justify-center items-center gap-1'>
                    <h2 className='text-subheading font-bold'>2023</h2>
                    <div className='text-xl bg-blueish w-[100px] h-[4px]'></div>
                    <p className='text-text'>Year of Establishment</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-1'>
                    <h2 className='text-subheading font-bold'>45+</h2>
                    <div className='text-xl bg-blueish w-[100px] h-[4px]'></div>
                    <p className='text-text'>Employees</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-1'>
                    <h2 className='text-subheading font-bold'>6,000m <sup>2</sup>  </h2>
                    <div className='text-xl bg-blueish w-[100px] h-[4px]'></div>
                    <p className='text-text'>Total Land Area</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col justify-around items-center h-screen'>
            <div className='flex flex-col justify-center items-center gap-10'>
                <h1 className='text-heading'>Our Family of Brands</h1>
                <p className='text-text max-w-screen-lg text-center'>"We proudly supply to renowned OEM clients, ensuring complete satisfaction with our quality and timely
                delivery. We focus exclusively on serving OEMs, not retail clients."</p>
            </div>
            <Carousel_custom Data={ClientData} extraData={false}/>

        </div>

    </section>
  )
}

export default Home
