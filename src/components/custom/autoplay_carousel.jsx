import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback,useRef } from "react"; // Import useCallback for memoization
import HeroSection from '@/components/custom/heroSection';
import { sliderImages } from '@/constants/data';

const Autoplay_carousel = () => {
    const data = [1, 2, 3, 4, 5];
    const options = { loop: true };

    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: true, delay: 3000, stopOnInteraction: true }) // Ensure stopOnInteraction is true (default is true)
    ]);

    // Use a ref to store the timeout ID
    const autoplayTimeoutRef = useRef(null);

    // Function to start autoplay
    const startAutoplay = useCallback(() => {
        if (emblaApi) {
            const autoplay = emblaApi.plugins().autoplay;
            if (autoplay) {
                autoplay.play();
            }
        }
    }, [emblaApi]); // Recreate if emblaApi changes

    // Function to stop autoplay
    const stopAutoplay = useCallback(() => {
        if (emblaApi) {
            const autoplay = emblaApi.plugins().autoplay;
            if (autoplay) {
                autoplay.stop();
            }
        }
    }, [emblaApi]);

    // This effect handles the autoplay behavior
    useEffect(() => {
        if (!emblaApi) return;

        const autoplay = emblaApi.plugins().autoplay;

        if (autoplay) {
            // Callback to restart autoplay after a delay
            const restartAutoplayAfterDelay = () => {
                // Clear any existing timeout to prevent multiple scheduled plays
                if (autoplayTimeoutRef.current) {
                    clearTimeout(autoplayTimeoutRef.current);
                }
                autoplayTimeoutRef.current = setTimeout(() => {
                    if (emblaApi.selectedScrollSnap() === emblaApi.scrollSnapList().length - 1 && !emblaApi.options().loop) {
                        // If not looping and at the end, don't restart
                        return;
                    }
                    startAutoplay();
                }, 5000); // 5 seconds delay to restart
            };

            // Stop autoplay on any pointer down (click/drag start)
            emblaApi.on('pointerDown', stopAutoplay);

            // Restart autoplay when interaction stops and carousel settles
            emblaApi.on('settle', restartAutoplayAfterDelay);

            // Cleanup event listeners when component unmounts or emblaApi changes
            return () => {
                emblaApi.off('pointerDown', stopAutoplay);
                emblaApi.off('settle', restartAutoplayAfterDelay);
                if (autoplayTimeoutRef.current) {
                    clearTimeout(autoplayTimeoutRef.current);
                }
                if (emblaApi) {
                    emblaApi.destroy();
                }
            };
        }
    }, [emblaApi, startAutoplay, stopAutoplay]); // Add startAutoplay and stopAutoplay to dependencies

    return (
        <section className="embla overflow-hidden mx-auto max-w-screen h-screen pb-10 relative">

            <div className='absolute inset-0 z-10 flex items-center'>
                <HeroSection />
            </div>

            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container flex w-full">
                    {
                        sliderImages.map((x) => (
                            <div key={x} className="embla__slide flex-shrink-0 flex-grow-0 basis-full">
                                <div className="bg-purple-300/60 max-w-screen h-screen flex items-center justify-center text-5xl font-bold opacity-50">
                                    {/* Removed opacity-50 here if you want "Slide X" to be fully opaque */}
                                    <img src={x} className='w-full h-full object-cover object-center'/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Autoplay_carousel;
