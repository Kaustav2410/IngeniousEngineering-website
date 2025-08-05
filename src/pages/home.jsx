import Autoplay_carousel from '@/components/custom/autoplay_carousel'
import Carousel_custom from '@/components/custom/carousel_custom'
import HeroSection from '@/components/custom/heroSection'
import ProductCard from '@/components/custom/productCard'
import WorldMap from '@/components/custom/worldMap'
import { ClientData,SectionEnum,HomeCardData } from '@/constants/data'
const Home = () => {
  return (
      <section>
        {/* <div className=' flex flex-col justify-center items-center md:items-start gap-10'>
                <h1 className='text-subheading font-bold pt-10'>Explore Our Equipment & Expertise</h1>
                <p className='text-text text-left max-w-[800px] mx-auto '>Founded nearly a decade ago, we've grown through quality, precision, and collaboration,
                offering top-tier equipment backed by skilled engineers and a dedicated workforce.</p>
                <section className="flex flex-col custom-lg:flex-row justify-center items-center gap-24 h-fit w-full">
                {HomeCardData.map((data) => (
                    <ProductCard cardData={data} key={data.id} />
                ))}
                </section>
        </div> */}
        {/* <HeroSection/> */}
        <Autoplay_carousel/>
       <div className='flex flex-col justify-around items-center h-fit gap-10 max-w-screen px-10 pb-16 relative'>
            <div className='w-full h-2/5 bg-black absolute bottom-0'></div> {/* Background element */}

            <div className='max-w-screen mx-auto relative z-10'> {/* Added z-10 to bring content above the absolute black div */}
                {/* Original commented out section (kept as requested) */}
                {/*
                <div className=' flex flex-col justify-center items-center md:items-start gap-10'>
                    <h1 className='text-subheading font-bold pt-10'>Explore Our Equipment & Expertise</h1>
                    <p className='text-text text-left max-w-[800px] mx-auto '>Founded nearly a decade ago, we've grown through quality, precision, and collaboration,
                    offering top-tier equipment backed by skilled engineers and a dedicated workforce.</p>
                    <section className="flex flex-col custom-lg:flex-row justify-center items-center gap-24 h-fit w-full">
                        {HomeCardData.map((data) => (
                            <ProductCard cardData={data} key={data.id} />
                        ))}
                    </section>
                </div>
                */}

                <div className='flex flex-col justify-center items-center gap-10'>
                    <h1 className='text-subheading font-bold pt-10 '>Explore Our Equipment & Expertise</h1>
                    <p className='text-text text-left max-w-[800px] mx-auto '>Founded nearly a decade ago, we've grown through quality, precision, and collaboration,
                    offering top-tier equipment backed by skilled engineers and a dedicated workforce.</p>

                    {/* UPDATED PRODUCT SECTION START: Modern Card with Emphasis */}
                    <section className="relative w-full overflow-hidden rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl
                                        bg-gradient-to-br from-white to-gray-100 border border-gray-200">
                        <div className="flex flex-col custom-lg:flex-row justify-between items-center custom-lg:items-stretch p-8 gap-10">
                            {/* Image Container */}
                            <div className="flex-shrink-0 w-full custom-lg:w-1/2 flex justify-center items-center">
                                <img
                                    src="/Images/Others/homepage_explore.jpg" // Make sure this path is correct relative to your public folder
                                    alt="Custom OEM Equipment"
                                    className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col justify-center items-center custom-lg:items-start text-center custom-lg:text-left custom-lg:w-1/2 gap-6 p-4">
                                <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
                                    Precision OEM Manufacturing
                                </h2>
                                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                                    We specialize in manufacturing high-quality OEM equipment tailored to your exact specifications, backed by our robust in-house engineering and innovative design capabilities.
                                </p>
                                {/* Button */}
                                <a
                                    href="/products" // Replace with the actual path to your products page
                                    className="mt-6 px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-lg rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-800 transition duration-300 ease-in-out transform hover:-translate-y-1"
                                >
                                    Discover Our Products
                                </a>
                            </div>
                        </div>


                        <div className="absolute inset-0 bg-gradient-to-tl from-white/50 via-transparent to-white/0 opacity-50 pointer-events-none rounded-2xl"></div>
                    </section>
                    {/* UPDATED PRODUCT SECTION END */}

                </div>
            </div>
        </div>
        <div className='flex flex-col justify-around items-center h-fit gap-10 max-w-screen mx-10'>
            <h1 className='text-heading font-bold py-10'>About Us</h1>
            <p className='text-text max-w-screen-lg text-justify'>
                <p>
                    At Ingenious Engineering Pvt. Ltd., we specialize in the manufacture and supply of precision-machined and
                    expertly fabricated components, serving diverse sectors with consistent quality and engineering excellence.
                    Backed by ISO-certified processes, our commitment to precision, performance, and reliability has made us a
                    trusted partner in the industry.
                </p>
                <br/>
                 <p>
                    With a well-equipped facility, skilled workforce, and a customer-centric approach, we deliver tailored
                    engineering solutions that meet exacting specifications and global standards. From small-batch prototypes to
                    high-volume production, our focus remains on innovation, timely delivery, and value-driven service.

                    We take pride in our ability to turn complex engineering challenges into high-performance solutions.
                    <a href="/about-us" className='text-blue-500' > Know more </a>
                 </p>
            </p>
            {/* <img src="/Images/Banner/Video_aboutUs.png" alt="about_us_image" width="600" height="300"/> */}
           <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mt-16 max-w-5xl mx-auto'> {/* Responsive layout, increased gap */}
            {/* Start of Founders Journey */}
            <div className='flex flex-col justify-center items-center gap-2 p-6 rounded-lg shadow-md bg-white transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl w-full md:w-auto'>
                <h2 className='text-3xl sm:text-4xl font-bold text-blue-700'>2005</h2>
                <div className='bg-gradient-to-r from-blue-600 to-indigo-700 w-24 h-1'></div> {/* Thicker, bolder line */}
                <p className='text-base sm:text-lg text-gray-600 mt-2'>Start of Founders Journey</p>
            </div>
            {/* Employees */}
            <div className='flex flex-col justify-center items-center gap-2 p-6 rounded-lg shadow-md bg-white transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl w-full md:w-auto'>
                <h2 className='text-3xl sm:text-4xl font-bold text-blue-700'>150+</h2>
                <div className='bg-gradient-to-r from-blue-600 to-indigo-700 w-20 h-1'></div>
                <p className='text-base sm:text-lg text-gray-600 mt-2'>Employees</p>
            </div>
            {/* Built up area */}
            <div className='flex flex-col justify-center items-center gap-2 p-6 rounded-lg shadow-md bg-white transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl w-full md:w-auto'>
                <h2 className='text-3xl sm:text-4xl font-bold text-blue-700'>3,200m<sup>2</sup></h2>
                <div className='bg-gradient-to-r from-blue-600 to-indigo-700 w-36 h-1'></div>
                <p className='text-base sm:text-lg text-gray-600 mt-2'>Built up area</p>
            </div>
        </div>
        </div>
        <div>
            <h1 className='md:text-heading text-subheading font-bold text-center py-10'>Our Reach</h1>
            <WorldMap/>
        </div>
        <div className='py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center'>
            <div className='flex flex-col justify-center items-center gap-8 mb-12'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900'>Our  Customers</h1>
                <p className='text-base sm:text-lg max-w-3xl mx-auto leading-relaxed text-gray-700 italic'>"We proudly supply to renowned OEM clients, ensuring complete satisfaction with our quality and timely delivery. We focus exclusively on serving OEMs."</p>
            </div>
            <div className='mt-8 max-w-[1200px] w-full mx-auto'>
                <Carousel_custom Data={ClientData} extraData={false} optionalStyles={"basis-full sm:basis-1/2 lg:basis-1/4"} cardStructure={SectionEnum.HOME}/>
            </div>
        </div>

    </section>
  )
}

export default Home
