"use client"
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

  
function Cslider() {
  return (
    <div className='mb-2'>
    <Swiper
      loop={true}
      freeMode={true}
      navigation={{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      }}
      modules={[Navigation, FreeMode]}
      className="w-full object-cover tablet-h-[420px] h-[700px] my-2"
      breakpoints={{
        320: { // На маленьких экранах
          slidesPerView: 2,
          spaceBetween: 100
        },
        768: { // На средних экранах
          slidesPerView: 4,
          spaceBetween: 100
        },
        1024: { // На больших экранах
          slidesPerView: 5,
          spaceBetween: 70
        
        }
      }}

      >

<SwiperSlide>
  <a href="/entryway" className="group w-[400px] h-full flex flex-col justify-center items-center relative">
    <div className="clip_1 w-[400px] h-full relative">
      <img src="/entryway-h.png" alt="entryway" className="w-full h-full object-cover absolute"/>
      <div className="gradient-overlay absolute inset-0 z-10"></div>
      <div className="hover-gradient absolute inset-0 z-10"></div>
    </div>
    <span className="text-BGC ml-[-150px] tablet:ml-[-100px] text-[41px] tablet:text-[50px] NPC:text-[50px] PC:text-[72px] font-bold p-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0">Entryway</span>
  </a>
</SwiperSlide>

        <SwiperSlide>
            <a href="/bathroom" className="group w-[400px] h-full flex flex-col justify-center items-center relative">
    <div className="clip_1 w-[400px] h-full relative">
      <img src="/bathroom-h.png" alt="bathroom" className="w-[400px] h-full object-cover absolute"/>
      <div className="gradient-overlay absolute inset-0 z-10"></div>
      <div className="hover-gradient absolute inset-0 z-10"></div>
    </div>
    <span className="text-BGC ml-[-150px] tablet:ml-[-100px] text-[41px] tablet:text-[50px] NPC:text-[50px] PC:text-[72px] font-bold p-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0">Bathroom</span>
  </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="/kitchen" className="group w-[400px] h-full flex flex-col justify-center items-center relative">
    <div className="clip_1 w-[400px] h-full relative">
      <img src="/kitchen-h.png" alt="kitchen" className="w-[400px] h-full object-cover absolute"/>
      <div className="gradient-overlay absolute inset-0 z-10"></div>
      <div className="hover-gradient absolute inset-0 z-10"></div>
    </div>
    <span className="text-BGC ml-[-150px] tablet:ml-[-100px] text-[41px] tablet:text-[50px] NPC:text-[50px] PC:text-[72px] font-bold p-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0">Kitchen</span>
  </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="/bedroom" className="group w-[400px] h-full flex flex-col justify-center items-center relative">
    <div className="clip_1 w-[400px] h-full relative">
      <img src="/bedroom-h.jpg" alt="bedroom" className="w-[400px] h-full object-cover absolute"/>
      <div className="gradient-overlay absolute inset-0 z-10"></div>
      <div className="hover-gradient absolute inset-0 z-10"></div>
    </div>
    <span className="text-BGC ml-[-150px] tablet:ml-[-100px] text-[41px] tablet:text-[50px] NPC:text-[50px] PC:text-[72px] font-bold p-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0">Bedroom</span>
  </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="/living" className="group w-[400px] h-full flex flex-col justify-center items-center relative">
    <div className="clip_1 w-[400px] h-full relative">
      <img src="/living-h.png" alt="living" className="w-[400px] h-full object-cover absolute"/>
      <div className="gradient-overlay absolute inset-0 z-10"></div>
      <div className="hover-gradient absolute inset-0 z-10"></div>
    </div>
    <span className="text-BGC ml-[-150px] tablet:ml-[-100px] text-[41px] tablet:text-[50px] NPC:text-[50px] PC:text-[72px] font-bold p-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0">Living room</span>
  </a>
  </SwiperSlide>
  </Swiper>
  <div className="flex justify-center items-center">
  <div className="swiper-button-prev-custom cursor-pointer"><svg width="100" height="50" viewBox="0 0 84 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="arrows">
<path id="Vector 3" d=" M15 21L3 12.2308L15 2" stroke="white" strokeWidth="3"/>
</g>
</svg></div>
  <div className="swiper-button-next-custom cursor-pointer"><svg width="100" height="50" viewBox="0 0 84 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="arrows">
<path id="Vector 4" d="M69 2L81 10.7692L69 21 " stroke="white" strokeWidth="3"/>
</g>
</svg></div>
  </div>
  </div>
   
  );
}

export default Cslider;