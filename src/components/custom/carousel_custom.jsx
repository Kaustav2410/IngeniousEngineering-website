import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import image from "../../assets/chip.jpeg";
import { useRef } from "react";

const CarouselCustom = () => {
    const autoplay = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

    return (
        <section className="relative">
            <Carousel
                className="px-20"
                options={{ loop: true }} // Enables continuous loop mode
                plugins={[autoplay.current]} // Autoplay plugin
            >
                <CarouselContent>
                    {/* Dynamically render carousel items */}
                    {[...Array(10)].map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="sm:basis-1/3 md:basis-1/3 lg:basis-1/5"
                        >
                            <img
                                width="180px"
                                src={image}
                                alt={`Slide ${index + 1}`}
                            />
                            {/* <p>{index}</p> */}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="bg-blueish text-white absolute left-0 top-1/2 transform -translate-y-1/2" />
                <CarouselNext className="bg-blueish text-white absolute right-0 top-1/2 transform -translate-y-1/2" />
            </Carousel>
        </section>
    );
};

export default CarouselCustom;
