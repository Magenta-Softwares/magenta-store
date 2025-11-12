"use client";

// TODO: Me gustaría refactorizar este componente, estoy seguro se puede mejorar en muchos aspectos.

import { useCallback, useEffect, useState } from "react";
import { SlideButton } from "./SlideButton";

interface CarouselProps {
  content: {
    id: string;
    slide: React.ReactNode;
  }[];
  itemsPerView?: number;
}

export const Carousel = ({ content, itemsPerView = 1 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(1);

  const gapInRem = 1; // Space between slides in rem units
  const gapWidth = gapInRem * (itemsVisible - 1); // Total width of gaps in the view
  const slideWidth = `calc((100% - ${gapWidth}rem) / ${itemsVisible})`; // Width of each slide
  const transformValue = `calc(${currentIndex} * (${slideWidth} + ${gapInRem}rem))`; // Total transform value
  const totalSlides = content.length; // Total number of slides

  const handleNextButton = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalSlides - itemsVisible + 1));
  }, [totalSlides, itemsVisible]);
  const handlePrevButton = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + (totalSlides - itemsVisible + 1)) % (totalSlides - itemsVisible + 1)
    );
  }, [totalSlides, itemsVisible]);

  const handleItemsMaxPerView = useCallback(() => {
    const screenWidth = window.innerWidth;
    {
      if (screenWidth <= 640) {
        setItemsVisible(1);
      } else if (screenWidth <= 1024) {
        setItemsVisible(2);
      } else {
        setItemsVisible(itemsPerView);
      }
    }
  }, [itemsPerView]);

  useEffect(() => {
    handleItemsMaxPerView();
    window.addEventListener("resize", handleItemsMaxPerView);
    return () => {
      window.removeEventListener("resize", handleItemsMaxPerView);
    };
  }, [handleItemsMaxPerView]);

  return (
    <div className='w-full relative mx-4 overflow-hidden'>
      <SlideButton variant='prev' onClick={handlePrevButton} />
      <SlideButton variant='next' onClick={handleNextButton} />

      <ul
        className='grid transition-all ease-in-out'
        style={{
          gridTemplateColumns: `repeat(${totalSlides}, ${slideWidth})`,
          gap: `${gapInRem}rem`,
          transform: `translateX(calc(${transformValue} * -1))`,
        }}
      >
        {content.map(({ id, slide }) => (
          <li key={id} className='shrink-0'>
            {slide}
          </li>
        ))}
      </ul>
    </div>
  );
};

Carousel.displayName = "Carousel";