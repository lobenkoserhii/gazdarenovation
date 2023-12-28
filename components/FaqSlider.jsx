"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow,Navigation,Autoplay } from 'swiper/modules';
import { FAQ } from "@/constants";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';



const TestimonialCard = ({ title, text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showExpandButton, setShowExpandButton] = useState(false);
  const textRef = useRef(null);


  
  return (
    <div className="mx-auto flex items-center justify-center flex-col bg-Yl p-4 shadow relative max-w-[670px]" style={{ minHeight: '450px' }}>
      <div className="flex items-center justify-center flex-col bg-Yl px-10 py-[100px] shadow border-2 border-DG w-full h-full">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-DG text-xl tablet:text-3xl text-SB italic uppercase">{title}</h3>
            </div>
        <div className="m-4 text-start overflow-hidden">
        <p className="text-DG text-sm tablet:text-lg font-SR leading-[30px]">
    {text}
</p>
<div className="opacity-20 text-zinc-800 text-[35px] font-extrabold font-SB uppercase leading-9 tablet:text-[80px] italic uppercase absolute bottom-[50px] right-[50px]">FAQ </div>
        </div>
      </div>
    </div>
  );
};
const ArrowLeft_2 = () => (
  <svg width="200" height="100" viewBox="0 0 84 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
    <g id="arrows">
      <path id="Vector 3" d="M15 21L3 12.2308L15 2" stroke="white" strokeWidth="3"/>
    </g>
  </svg>
);

const ArrowRight_2 = () => (
  <svg width="200" height="100" viewBox="0 0 84 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
    <g id="arrows">
      <path id="Vector 3" d="M69 2L81 10.7692L69 21" stroke="white" strokeWidth="3"/>
    </g>
  </svg>
);

const FAQSlider = () => {
  const swiperRef = useRef(null);

  const updateBlurEffect = () => {
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.slides.forEach((slide, index) => {
        const isBlur = index !== swiper.activeIndex;
        slide.classList.toggle('swiper-slide-blur', isBlur);
      });
    }
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current;
    if (swiperInstance) {
      updateBlurEffect(); // Обновление при монтировании компонента
      swiperInstance.on('slideChangeTransitionEnd', updateBlurEffect);
      swiperInstance.on('sliderMove', updateBlurEffect);

      // Очистка при размонтировании компонента
      return () => {
        swiperInstance.off('slideChangeTransitionEnd', updateBlurEffect);
        swiperInstance.off('sliderMove', updateBlurEffect);
      };
    }
  }, []);

  return (
    <div className="relative faq-slider">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        autoplay={{
          delay: 9000,
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
          nextEl: '.faq-slider .button-next-custom_2',
          prevEl: '.faq-slider .button-prev-custom_2',
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 }
        }}
        onSwiper={(swiper) => swiperRef.current = swiper}
        className="mySwiper"
      >
        {FAQ.map((review, index) => (
          <SwiperSlide key={index} className="swiper-slide-blur">
            <TestimonialCard {...review} />
          </SwiperSlide>
        ))}
      </Swiper>
        
      <div className="button-prev-custom_2 cursor-pointer absolute top-1/2 left-10 transform -translate-y-1/2 z-10">
        <ArrowLeft_2 />
      </div>
      <div className="button-next-custom_2 cursor-pointer absolute top-1/2 right-10 transform -translate-y-1/2 z-10">
        <ArrowRight_2 />
      </div>
      </div>
      
  );
};

export default FAQSlider;
