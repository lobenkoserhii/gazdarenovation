"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow,Navigation,Autoplay } from 'swiper/modules';
import { REVIEWS } from "@/constants";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';



const TestimonialCard = ({ name, date, rating, text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showExpandButton, setShowExpandButton] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement.scrollHeight > textElement.clientHeight) {
      setShowExpandButton(true);
      setIsExpanded(false); // Начальное состояние - не раскрыто
    } else {
      setShowExpandButton(false);
      setIsExpanded(true); // Блок раскрыт, если текст помещается
    }
  }, []);

  const toggleExpand = () => {
    if (showExpandButton) {
      setIsExpanded(!isExpanded);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-300'}>
        {i < rating ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <div className="mx-auto mb-[70px] flex items-center justify-center flex-col bg-Yl p-4 shadow relative max-w-[670px]" style={{ minHeight: '450px' }}>
      <div className="flex items-center justify-center flex-col bg-Yl px-10 py-[100px] shadow border-2 border-DG w-full h-full">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-DG text-xl tablet:text-3xl text-SB italic uppercase">{name}</h3>
          <p className="text-DG text-base tablet:text-xl opacity-60">{date}</p>
          <div className="flex text-DG text-2xl">
            {renderStars(rating)}
          </div>
        </div>
        <div className="m-4 text-start overflow-hidden">
        <p ref={textRef} className={`text-DG text-sm tablet:text-lg font-SR leading-[30px] ${!isExpanded ? 'line-clamp-3' : ''}`} onClick={showExpandButton ? toggleExpand : undefined}>
    {text}
</p>
        </div>
      </div>
    </div>
  );
};
const ArrowLeft = () => (
  <svg width="200" height="100" viewBox="0 0 84 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
    <g id="arrows">
      <path id="Vector 3" d="M15 21L3 12.2308L15 2" stroke="white" strokeWidth="3"/>
    </g>
  </svg>
);

const ArrowRight = () => (
  <svg width="200" height="100" viewBox="0 0 84 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
    <g id="arrows">
      <path id="Vector 3" d="M69 2L81 10.7692L69 21" stroke="white" strokeWidth="3"/>
    </g>
  </svg>
);



const TestimonialsSlider = () => {
  return (
    <div className="relative testimonials-slider">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        autoplay={{ 
          delay: 6000,
          disableOnInteraction: false
        }}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={{
          nextEl: '.testimonials-slider .button-next-custom_1',
          prevEl: '.testimonials-slider .button-prev-custom_1',
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1},
          768: { slidesPerView: 1},
          1024: { slidesPerView: 2 }
        }}
        className="mySwiper"
      >
        {REVIEWS.map((review, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard {...review} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="button-prev-custom_1 cursor-pointer absolute top-1/2 left-10 transform -translate-y-1/2 z-10">
        <ArrowLeft />
      </div>
      <div className="button-next-custom_1 cursor-pointer absolute top-1/2 right-10 transform -translate-y-1/2 z-10">
        <ArrowRight />
        </div>
    </div>
  );
};


export default TestimonialsSlider;
