import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import image from "../../assets/chip.jpeg";
import useEmblaCarousel from 'embla-carousel-react'
import { useRef,useEffect } from "react";

const CarouselCustom = () => {
    // Initialize the AutoScroll plugin
    const OPTIONS = { loop: true }
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
        AutoScroll({ playOnInit: true ,stopOnInteraction:false })
      ])

        useEffect(() => {
          if (!emblaApi) return;

          const autoScroll = emblaApi.plugins().autoScroll;

          if (!autoScroll) {
            console.error("AutoScroll plugin is not initialized.");
            return;
          }
        }, [emblaApi]);

    return (
        <section className="embla overflow-hidden max-w-[1200px] mx-auto">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container flex">
                  {[...Array(10)].map((_, index) => (
                        <div
                            key={index}
                            className="embla__slide basis-1/2 lg:basis-1/5 flex-shrink-0"
                        >
                            <img
                                width="180px"
                                src={image}
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
              </div>
            </section>
    );
};

export default CarouselCustom;
