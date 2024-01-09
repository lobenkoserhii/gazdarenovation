
import React from 'react';
import Star from './star'
import Cslider from '../components/Cslider'
import Accordions from "./Accordions"
import Scroller from './Scroller'
import SliderWork from './SliderWork'
import Phase from './Phase'
import TestimonialsSlider from './TestimonialsSlider'
import FaqSlider from './FaqSlider'
import Copyright from './Copyright'
import ContactPage from './ContactPage'
import PopUpEmail from './PopUpEmail'

import Test from "./Test"


const Stars = ({ fillColor = "#262626" }) => (
  <div className="flex">
    {Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className="w-4 h-4 tablet:w-6 tablet:h-6 mx-1 my-2" 
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.09518 20.1036L6.57358 12.7378L0.597626 8.73061H7.91701L10.5344 0.832031L13.1981 8.73061H20.4711L14.4952 12.7378L17.0199 20.1036L10.5344 15.4015L4.09518 20.1036Z"
          fill={fillColor}
        />
      </svg>
    ))}
  </div>
);


function Hero() {
  return (
    <>
   <Star customClass="NPC:absolute NPC:top-2 top-[600px]" zIndexClass="z-50" />


    <section className='h-[733px] relative'>
    <div className="bg-[url('/bg_hero-mob.png')] NPC:bg-[url('/Hero_bg.png')] bg-cover bg-no-repeat bg-center h-full z-10 bg-gradient-with-image_2">
      <div className='absolute top-[43px] inset-0 NPC:flex items-center'>
        <div className='text-center'>
        <h1 className="NPC:pl-[170px] pl-[100px] tracking-widest italic text-left text-4xl NPC:text-6xl font-extrabold font-SBE leading-15 text-White uppercase text-white">Revitalize Your</h1>
          <h1 className="NPC:pl-[150px] pl-[80px] tracking-widest italic text-left text-4xl NPC:text-6xl font-extrabold font-SBE leading-15 text-White uppercase  text-white ">Home, Exceeding</h1>
          <h1 className="NPC:pl-[130px] pl-[60px] tracking-widest italic text-left text-4xl NPC:text-6xl font-extrabold font-SBE leading-15 text-White uppercase  text-white ">Expectations </h1>
          <h1 className="NPC:pl-[110px] pl-[40px] tracking-widest italic text-left text-4xl NPC:text-6xl font-extrabold font-SBE leading-15 text-White uppercase  text-white ">with <span className='text-Yl uppercase'>gazda </span></h1>
          <h1 className="NPC:pl-[90px]  pl-[20px] tracking-widest italic text-left text-4xl NPC:text-6xl font-extrabold font-SBE leading-15 text-White uppercase  text-white ">Renovations!</h1>
        </div>
      </div>
    </div>
  </section>

  
  
  
  <div className="bg-Yl clip z-30">
  <div className="grid z-30 grid-cols-2 gap-[1.75rem] justify-center py-[20px] px-[80px] NPC:px-[170px]  NPC:py-[45px] NPC:grid-cols-4">
    <div>
      <p className="text-stone-950 text-[40px] tablet:text-[60px] NPC:text-[75px] text-center font-extrabold font-SB uppercase leading-[76.42px]">14</p>
      <h2 className="text-center text-stone-950 leading-5 text-sm NPC:text-[25px] NPC:leading-8 font-light font-SR">years of experience</h2>
    </div>
    <div>
      <p className="text-stone-950 text-[40px] tablet:text-[60px] NPC:text-[75px] text-center font-extrabold font-SB uppercase leading-[76.42px]">1000</p>
      <h2 className="text-center text-stone-950 leading-5 text-sm NPC:text-[25px] NPC:leading-8 font-light font-SR">satisfied customers</h2>
    </div>
    <div>
      <p className="text-stone-950 text-[40px] tablet:text-[60px] NPC:text-[75px] text-center font-extrabold font-SB uppercase leading-[76.42px]">75</p>
      <h2 className="text-center text-stone-950 leading-5 text-sm NPC:text-[25px] NPC:leading-8 font-light font-SR">types of high-quality services</h2>
    </div>
    <div>
      <p className="text-stone-950 text-[40px] tablet:text-[60px] NPC:text-[75px] text-center font-extrabold font-SB uppercase leading-[76.42px]">875</p>
      <h2 className="text-center text-stone-950 leading-5 text-sm NPC:text-[25px] NPC:leading-8 font-light font-SR">successfully completed projects</h2>
    </div>
  </div>
</div>
  

<Accordions/>
<Phase/>
<Scroller text="our works" />
<SliderWork/>
<Scroller text="ABOUT US" />


<div className="flex justify-center items-center w-full min-h-[400px] NPC:max-h-[500px] tablet:mb-[270px] bg-Yl px-10 py-20 tablet:py-0">
  <div className="flex flex-col tablet:flex-row justify-center mx-auto z-10">
      <div className="flex flex-col tablet:flex-row items-center">
      <div className="text-BGC max-w-[650px] p-10">
        <h1 className="mb-3 text-xl tablet:text-3xl italic font-extrabold font-SB uppercase leading-tight">Welcome to Gazda Group Inc.</h1>
        <div className="text-sm tablet:text-lg ">
          <p className="font-SR pb-4 font-normal italic">Your trusted partner for exceptional home renovations and repairs in Toronto and GTA.</p>
          <p className="font-SR pb-4 font-normal italic">With 14 years of experience, we specialize in transforming houses into stunning, functional spaces and providing top-notch repair services.</p>
          <p className="font-SR pb-4 font-normal italic">From kitchen remodels to bathroom renovations and comprehensive home repairs, our dedicated team delivers craftsmanship and personalized service. Contact us today to bring your dream home to life or to address any repair needs you may have.</p>
        </div>
        <div className="flex text-center mt-4">
        <a href="/AboutUs">
        <button className="inline-flex items-center clip_2 px-[40px] py-2 bg-White text-xl font-bold font-SBE italic uppercase whitespace-nowrap">
  LEARN MORE </button>
  </a>
</div>
      </div>

      
      <div className="relative hidden tablet:block tablet:ml-10 flex-shrink-0">
      <img src="/aboautus_1.jpeg" alt="About Us" className="w-[306px] h-[417px] object-cover shadow-lg" style={{ transform: 'translateY(15%) translateX(50%)' }} />
      <img src="/aboautus_2.jpeg" alt="About Us" className="w-[306px] h-[417px] object-cover shadow-lg mt-4" style={{ transform: 'translateY(-5%) translateX(0%)' }} />
    </div>
    </div>
  </div>
</div>


<h1 className="text-White text-[27px] tablet:text-6xl my-3 tablet:my-10 text-center font-extrabold font-SB italic uppercase leading-[61.14px]">review</h1>
<TestimonialsSlider/>

<div className="bg-Yl clip_3 w-full flex flex-row justify-center items-center py-3 NPC:py-10 NPC:my-10 z-30">
  <div className="flex flex-col NPC:flex-row items-center justify-start whitespace-nowrap mx-10 ">
<img src="./Google__G__Logo 1.svg" alt="Google"  className="w-[40px] tablet:w-[60px] mx-5 my-2.5 tablet:my-0"/>
<Stars/>
<p className="NPC:ml-5 text-lg tablet:text-2xl text-BGC font-light font-SR">
  (58 review)
</p>
  </div>
  <div className= "flex flex-col NPC:flex-row items-center justify-center whitespace-nowrap my-5 mx-10">
<img src="./HomeStars_Logo_Cyan.svg" alt="HomeStars" className="w-[130px] mx-5" />
<Stars/>
<p className="NPC:ml-5 text-lg tablet:text-2xl text-BGC font-light font-SR">
  (99 review)
</p>
  </div>
  
</div>

<h1 className="text-White text-[27px] tablet:text-6xl my-3 tablet:my-10 text-center font-extrabold font-SB italic uppercase leading-[61.14px]">faq</h1>


<FaqSlider/>
<div className='relative flex flex-row justify-between items-center px-3 mt-8 tablet:my-[140px] NPC:mx-[200px]'>
  <img src="./2022 Digital Medal.png" alt="Digital Medal" className="w-[60px] tablet:w-[130px]" />
  <img src="./2021 CBRB Inc Logo.png" alt="CBRB" className="w-[60px] tablet:w-[130px]" />
  <img src="./2022 CBRB Verified.png" alt="CBRB" className="w-[60px] tablet:w-[130px]" />
  <img src="./HomeStar_2022.png" alt="HomeStars" className="w-[60px] tablet:w-[130px]" />
  <img src="./2022 CBRB Inc Logo.png" alt="CBRB" className="w-[60px] tablet:w-[130px]" />
</div>




<PopUpEmail/>

<h1 className="text-White text-[27px] tablet:text-6xl tablet:mb-10 ml-[40px] tablet:ml-[257px] text-start font-extrabold font-SB italic uppercase leading-[61.14px]">We work here</h1>



<ContactPage/>
<Copyright/>

  </>
  
  )
}

export default Hero