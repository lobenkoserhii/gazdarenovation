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
  return (
    <div className='my-[50px]' dir="rtl">
    <Swiper

      loop={true}
      freeMode={true}
      rtl={true}
      autoplay={{ 
        delay: 0,
        disableOnInteraction: false
      }}
      speed={9000}
      navigation={{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      }}
      
      modules={[Navigation, FreeMode, Autoplay]}
      className="w-full object-cover tablet-h-[300px]  h-[400px] my-2"
      breakpoints={{
        320: { 
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: { // 
          slidesPerView: 3,
          spaceBetween: 30
        },
        1024: { 
          slidesPerView: 5,
          spaceBetween: 40
        
        }
      }}

      >

 {slidesData.map((slide, index) => (
          <SwiperSlide key={index} style={{ margin: '0 30px' }}>
            <div className="clip_1 w-[400px] h-[400px] relative">
              <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover absolute"/>
            </div>
          </SwiperSlide>

))}

  </Swiper>
  </div>
   
  );
}

export default SliderWork;