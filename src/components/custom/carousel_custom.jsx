import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect } from "react";
import AlternateReverseTimeline from "./timeline";
import AwardHomeCarouselStructure from "./awardHomeCarouselStructure";
import { SectionEnum } from '@/constants/data'
import ProductCarouselStructure from "./productCarouselStructure";
import ProductDetails from "./productDetails";


const CarouselCustom = ({ Data, extraData, optionalStyles, cardStructure, initialSlideIndex }) => {
    const handleSlideClick = (index) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
        emblaApi.reInit();
      }
    };

    const OPTIONS = { loop: true };
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
      AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1.5 }),
    ]);

    const [activeIndex, setActiveIndex] = useState(0);

    if (initialSlideIndex !== null && initialSlideIndex >= 0 && initialSlideIndex !== activeIndex) {
      handleSlideClick(initialSlideIndex);
    }

    useEffect(() => {
      if (!emblaApi) return;

      const handleSelect = () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
      };

      emblaApi.on("select", handleSelect);
      return () => emblaApi.off("select", handleSelect);
    }, [emblaApi, initialSlideIndex, activeIndex]);

    return (
      <>
        <section className="embla overflow-hidden mx-auto w-full max-w-[1200px] pb-10">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container flex gap-4 w-full mx-auto px-4 sm:px-6 md:px-10">
              {Data &&
                Data.map((data, index) => {
                  if (SectionEnum.AWARDS === cardStructure || SectionEnum.HOME === cardStructure) {
                    return (
                      <AwardHomeCarouselStructure
                        key={index}
                        data={data}
                        optionalStyles={`${optionalStyles} flex-shrink-0`}
                      />
                    );
                  } else if (SectionEnum.PRODUCTS === cardStructure) {
                    return (
                      <ProductCarouselStructure
                        key={index}
                        data={data}
                        optionalStyles={`${optionalStyles} flex-shrink-0`}
                        index={index}
                        handleSlideClick={handleSlideClick}
                      />
                    );
                  }
                })}
            </div>
          </div>
        </section>

        {/* Render the Timeline for the Active Slide */}
        {SectionEnum.AWARDS === cardStructure && (
          <div className="timeline-container mt-8">
            {Data[activeIndex] && <AlternateReverseTimeline timelineData={Data[activeIndex].timelineData} />}
          </div>
        )}

        {/* {SectionEnum.PRODUCTS === cardStructure && Data[activeIndex] && (
          <ProductDetails data={Data[activeIndex]} />
        )} */}
      </>
    );
  };

  export default CarouselCustom;
