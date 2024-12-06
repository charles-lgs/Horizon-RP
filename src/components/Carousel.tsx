import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../sass/Carousel.scss';

interface CarouselItem {
  id: number;
  src: string;
  alt: string;
  title: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const InfiniteCarousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState(items);

  const moveSlide = useCallback((direction: 'next' | 'prev') => {
    setCurrentIndex(prevIndex => {
      let newIndex = direction === 'next' ? prevIndex + 1 : prevIndex - 1;
      
      // Update slides array for infinite effect
      if (newIndex >= slides.length - 2) {
        setSlides(prev => [...prev, ...items]);
      }
      
      return newIndex;
    });
  }, [slides.length, items]);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide('next');
    }, 6000);

    return () => clearInterval(interval);
  }, [moveSlide]);

  const visibleSlides = slides.slice(currentIndex, currentIndex + 3);

  return (
    <div className="carousel-container">
      <button 
        className="carousel-button prev"
        onClick={() => moveSlide('prev')}
        disabled={currentIndex === 0}
      >
        <ChevronLeft size={24} />
      </button>

      <div className="carousel-track">
        {visibleSlides.map((item, index) => (
          <div 
            key={`${item.id}-${currentIndex + index}`}
            className={`carousel-slide ${index === 1 ? 'active' : ''}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="carousel-image"
            />
            {index === 1 && (
              <div className="slide-title">
                {item.title}
              </div>
            )}
          </div>
        ))}
      </div>

      <button 
        className="carousel-button next"
        onClick={() => moveSlide('next')}
      >
        <ChevronRight size={24} />
      </button>

      <div className="carousel-dots">
        {items.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex % items.length ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;

