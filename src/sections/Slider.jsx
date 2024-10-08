import React, { useState, useEffect } from 'react';
import { SliderConstants } from '../constants';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatischer Bildwechsel nach 10 Sekunden
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // 10 Sekunden

    return () => clearInterval(interval); // Bereinigt das Intervall, wenn die Komponente neu gerendert wird
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? SliderConstants.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === SliderConstants.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-bg w-full h-[60vh] md:h-[90vh] flex justify-center items-center relative">
      <div className="w-full h-full overflow-hidden relative"> 
        <img
          src={SliderConstants[currentIndex].img}
          alt={SliderConstants[currentIndex].text}
          className="slider-image w-full h-full object-cover brightness-75 transition duration-1000 ease-in-out"
          loading="lazy"
        />
        <div className="absolute top-20 left-1/4 transform -translate-x-1/2 text-white text-center p-4 bg-black bg-opacity-50 rounded-md">
          <p className="font-montserrat text-lg md:text-[30px] font-semibold drop-shadow-lg">
            {SliderConstants[currentIndex].text}
          </p>
        </div>

        {/* Navigationspfeile */}
        <div className="absolute top-1/2 left-5 text-white text-2xl cursor-pointer" onClick={prevSlide}>
          ❮
        </div>
        <div className="absolute top-1/2 right-5 text-white text-2xl cursor-pointer" onClick={nextSlide}>
          ❯
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 w-full flex justify-center space-x-2">
          {SliderConstants.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
