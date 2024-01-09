"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import { slideData } from "@/constants"; 
import { slideInfo } from "@/constants"; 
import './style.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';


const Accordions = () => {
  const navigateToService = (href) => {
    window.location.href = `/services#${href}`;
  };

  const [activeSlide, setActiveSlide] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveSlide(index);
  };
  
  const handleMouseLeave = () => {
    setActiveSlide(null);
  };
  return (
    <div className='mb-2'>
     <Swiper
        loop={true}
        freeMode={true}
        navigation={{
          nextEl: '.next-custom',
          prevEl: '.prev-custom',
        }}
        breakpoints={{
          320: { slidesPerView:1},
          640: { slidesPerView:2},
          1024: { slidesPerView:4 }
        }}
        modules={[Navigation, FreeMode]}
        direction='horizontal'
        className="swiper-container w-full object-cover my-2"
      >
        {slideData.map((item, idx) => (
       <SwiperSlide key={idx}
       onMouseEnter={() => handleMouseEnter(idx)}
       onMouseLeave={handleMouseLeave}
       style={{
        flexBasis: activeSlide === idx ? '50%' : '10%',
        transition: 'flex-basis 0.3s ease',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
       }}>
            <div className="container-general ">
              <div className="gallery-wrap wrap-effect">
                <div className="item hover-gradient" style={{ backgroundImage: `url(${item.imgSrc})` }}>
                  <div className="text-BGC text-4xl tablet:text-[60px] font-bold z-20 ">{item.label}</div>
                   <div className="item-content ">
                   <h2 className="tablet:w-[200px] text-White text-[27px] tablet:text-[32px] font-extrabold font-SB uppercase leading-[28px] tablet:leading-[32px] ml-[15px] ">{slideInfo[idx].label}</h2>
                    <p className="tablet:w-[200px] NPC:w-[250px]  text-White tablet:text-[14px] text-[12px] mr-[10px] font-light font-SR tablet:mt-4 mt-2">{slideInfo[idx].text}</p>
                    <a href={`/Services#${slideInfo[idx].href}`} className="inline-flex items-center clip_2 mt-5 px-[40px] tablet:px[80px] py-1 bg-Yl text-DG  text-lg tablet:text-[25px] tracking-wider font-extrabold font-SB uppercase whitespace-nowrap">More</a>
                    </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center">
      <div className="prev-custom cursor-pointer"><svg width="100" height="50" viewBox="0 0 84 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="arrows">
    <path id="Vector 3" d=" M15 21L3 12.2308L15 2" stroke="white" strokeWidth="3"/>
    </g>
    </svg></div>
      <div className="next-custom cursor-pointer"><svg width="100" height="50" viewBox="0 0 84 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="arrows">
    <path id="Vector 4" d="M69 2L81 10.7692L69 21 " stroke="white" strokeWidth="3"/>
    </g>
    </svg>
    </div>
      </div>  
  </div>
     
  );
};



export default Accordions;