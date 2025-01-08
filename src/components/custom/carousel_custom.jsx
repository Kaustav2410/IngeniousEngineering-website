import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import AutoScroll from "embla-carousel-auto-scroll";
  import image from "../../assets/chip.jpeg";
  import useEmblaCarousel from "embla-carousel-react";
  import { useState, useEffect } from "react";
  import AlternateReverseTimeline from "./timeline";



  const CarouselCustom = ({Data,extraData}) => {
    console.log(Data,extraData);
    const OPTIONS = { loop: true };
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
      AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: .3 }),
    ]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      if (!emblaApi) return;

      const handleSelect = () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
      };

      emblaApi.on("select", handleSelect);
      return () => emblaApi.off("select", handleSelect);
    }, [emblaApi]);

    return (
      <>
        <section className="embla overflow-hidden max-w-[1200px] mx-auto">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container flex">
              {Data && Data.map((data, index) => (
                <div
                  key={index}
                  className="embla__slide basis-1/2 lg:basis-1/5 flex-shrink-0 flex justify-center items-center flex-col"
                >
                  <img
                    width="180px"
                    src={image}
                    alt={`Slide ${index + 1}`}
                  />
                  <h2 className="text-center font-semibold mt-2">{data.title}</h2>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Render the Timeline for the Active Slide */}
        {extraData===true &&  <div className="timeline-container mt-8">
          {Data[activeIndex] && (
            <AlternateReverseTimeline
              timelineData={Data[activeIndex].timelineData}
            />
          )}
        </div>}
      </>
    );
  };

  export default CarouselCustom;
