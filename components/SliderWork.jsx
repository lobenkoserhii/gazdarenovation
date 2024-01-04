"use client"
import React from 'react';
import { slidesData } from "@/constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Autoplay} from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

  
function SliderWork() {
  // Общие свойства для обоих Swiper компонентов
  const swiperBaseProps = {
    loop: true,
    freeMode: true,
    
    navigation: {
      nextEl: '.next-work',
      prevEl: '.prev-work',
    },
    modules: [Navigation, FreeMode, Autoplay],
    className: "w-full object-cover tablet-h-[300px] h-[400px] my-2",
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 40
      }
    }
  };

  return (
    <div className='my-[50px]' dir="rtl">
      {/* Swiper для меньших экранов без автопрокрутки */}
      <div className="NPC:hidden">
        <Swiper {...swiperBaseProps}>
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="clip_1 w-[400px] h-[400px] relative">
                <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover absolute"/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper для экранов NPC и больше с автопрокруткой */}
      <div className="hidden NPC:block">
        <Swiper {...swiperBaseProps} autoplay={{ delay: 2500, disableOnInteraction: false }} speed={9000}>
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="clip_1 w-[400px] h-[400px] relative">
                <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover absolute"/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  <div className="flex justify-center items-center">
      <div className="prev-work cursor-pointer"><svg width="100" height="50" viewBox="0 0 84 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="arrows">
    <path id="Vector 4" d="M69 2L81 10.7692L69 21 "
     stroke="white" strokeWidth="3"/>
    </g>
    </svg></div>
      <div className="next-work cursor-pointer"><svg width="100" height="50" viewBox="0 0 84 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="arrows"><path id="Vector 3" d=" M15 21L3 12.2308L15 2"
     stroke="white" strokeWidth="3"/>
    </g>
    </svg>
    </div>
      </div>  
  </div>
   
  );
}

export default SliderWork;