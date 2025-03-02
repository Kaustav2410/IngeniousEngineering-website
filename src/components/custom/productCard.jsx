import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ANIMATION_DURATION = 1; // Animation duration in seconds

const ProductCard = ({ cardData }) => {
  const [isHover, setIsHover] = useState(false);
  const cardRef = useRef(null);

  const handleClick = (value) => {
    setIsHover(value);
  };

  useEffect(() => {
    if (cardRef.current) {
      const rotation = isHover ? 180 : 0;
      gsap.to(cardRef.current, {
        duration: ANIMATION_DURATION,
        rotationY: rotation,
        ease: 'power2.out',
      });
    }
  }, [isHover]);

  return (
    <section>
      <div
        ref={cardRef}
        className="product-card-container relative w-[300px] h-[300px] flex items-center justify-center"
        style={{
          perspective: '1000px', // Adds depth for 3D effect
        }}
        // onClick={handleClick}
        onMouseEnter={()=>handleClick(true)}
        onMouseLeave={()=>handleClick(false)}
      >
        {/* Inner Card */}
        <div
          className="card-inner relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            transition: `transform ${ANIMATION_DURATION}s ease-in-out`,
            transform: `rotateY(${isHover ? 180 : 0}deg)`, // Flip the card
          }}
        >
          {/* Front Side */}
          <div
            className="front absolute w-full h-full flex items-center justify-center bg-black text-white"
            style={{
              backfaceVisibility: 'hidden', // Hide when flipped
              transform: 'rotateY(0deg)', // Default position
              backgroundImage: `url(${cardData.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex flex-col items-center gap-4 px-5">
              <h1 className="text-heading font-bold">{cardData.title}</h1>
              <p className="text-text text-center">{cardData.description}</p>
            </div>
          </div>

          {/* Back Side */}
          <div
            className="back absolute w-full h-full flex items-center justify-center bg-black text-white"
            style={{
              backfaceVisibility: 'hidden', // Hide when flipped
              transform: 'rotateY(180deg)', // Positioned behind initially
              backgroundImage: `url(${cardData.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              className="flex flex-col items-center gap-4 "
              style={{
                transform: 'rotateY(180deg)', // Correct text orientation
              }}
            >
              <h1 className="text-4xl font-bold w-full hover:scale-110 duration-300">{`${cardData.tagline}`}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
