import React, { useState, useEffect, useRef } from 'react';

const ANIMATION_DURATION = 1.5; // Animation duration in seconds

const ProductCard = ({ cardData }) => {
  const [isHover, setIsHover] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'rotateY(0deg)'; // Reset rotation on data change
    }
  }, [cardData]);

  const handleHover = () => {
    setIsHover(!isHover);
  };

  return (
    <section>
      <div
        ref={cardRef}
        className={`${!isHover ? 'flex' : 'hidden'} bg-cover bg-center relative w-[300px] h-[300px] flex items-center text-white transition-transform translate--16`}
        style={{
          backgroundImage: `url(${cardData.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <div className='flex flex-col items-center gap-10 px-5'>
          <h1 className='text-heading font-bold'>{cardData.title}</h1>
          <p className='text-text text-center'>{cardData.description}</p>
        </div>
      </div>
      <div
        className={`${isHover ? 'flex' : 'hidden'} bg-cover bg-center relative w-[300px] h-[300px] flex items-center text-white`}
        style={{
          backgroundImage: `url(${cardData.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='flex flex-col items-center gap-10 px-5'>
          <h1 className='text-heading font-bold'>{cardData.tagline}</h1>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
