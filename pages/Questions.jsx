import React, { useState } from 'react';
import Layout from "../components/Layout";
import Star from "../components/star";
import Scroller from '../components/Scroller';
import SliderWork from '../components/SliderWork';
import FaqSlider from '../components/FaqSlider';
import Copyright from '../components/Copyright';
import ContactPage from '../components/ContactPage';
import PopUpEmail from '../components/PopUpEmail';
import { FAQList } from "@/constants";
import { FAQPermit } from "@/constants";

const Stars = ({ fillColor = "#262626" }) => (
  <div className="flex">
    {Array.from({ length: 5 }, (_, index) => (
      <svg key={index} className="w-4 h-4 tablet:w-6 tablet:h-6 mx-1 my-2" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.09518 20.1036L6.57358 12.7378L0.597626 8.73061H7.91701L10.5344 0.832031L13.1981 8.73061H20.4711L14.4952 12.7378L17.0199 20.1036L10.5344 15.4015L4.09518 20.1036Z" fill={fillColor} />
      </svg>
    ))}
  </div>
);

const FAQItem = ({ title, description, iconSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mb-4">
      <div className="flex items-center pb-2 justify-between cursor-pointer border-b-[2px] border-White border-opacity-25" onClick={toggle}>
        <h2 className="text-xl text-White  font-medium font-SR italic pr-10">{title}</h2>
        <img 
          src={iconSrc} 
          alt="Expand" 
          className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          style={{ transition: 'transform 0.3s ease' }}
        />
      </div>
      {isOpen && <p className="mt-2 font-SR text-White w-[480px]">{description}</p>}
    </div>
  );
};

function Questions() {
  return (
    <Layout>
      <div className="max-w-[1440px] mx-auto">
        <Star customClass="absolute relative top-2" zIndexClass="z-20" />

        <div className="flex items-start justify-start  mt-10">
          <div className="flex flex-col NPC:flex-row ">
            <div className="bg-[url('/bg_rec_1.png')] bg-no-repeat h-[168px] w-[470px] bg-cover  flex items-center justify-center">
              <h1 className="text-BGC text-3xl font-extrabold font-SB uppercase leading-[30.57px] text-start italic">
                Frequently Asked <br/> Questions About<br/> Home Renovations:
              </h1>
            </div>

            <div className="flex flex-col m-20 NPC:mt-0 mr-20 ml-20 ">
              {FAQList.map((faq, index) => (
                <FAQItem key={index} 
                title={faq.title} 
                description={faq.description} 
                iconSrc="./Vector_V.svg" />
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end NPC:justify-between NPC:items-start flex-col-reverse NPC:flex-row">
  <div className="flex flex-col m-20 NPC:w-[600px] NPC:mt-0">
    {FAQPermit.map((faq, index) => (
      <FAQItem key={index}
      title={faq.title}
      description={faq.description}
      iconSrc="./Vector_V.svg" />
    ))}
  </div>
  <div className="bg-[url('/bg_rec_2.png')] bg-no-repeat h-[168px] w-[470px] bg-cover flex items-center justify-center">
    <h1 className="text-BGC text-3xl font-extrabold font-SB uppercase leading-[30.57px] text-start italic">
    Information<br/> on Permits<br/> and Regulations<br/>Specific to Toronto
    </h1>
  </div>
</div>

        <Scroller text="our works" />
    <SliderWork />
    <div className="bg-Yl clip_3 w-full flex flex-row justify-center my-20 items-center py-3 NPC:py-10 my-20 z-30">
      <div className="flex flex-col NPC:flex-row items-center justify-start whitespace-nowrap mx-10 ">
        <img src="./Google__G__Logo 1.svg" alt="Google" className="w-[40px] tablet:w-[60px] mx-5 my-2.5 tablet:my-0"/>
        <Stars />
        <p className="NPC:ml-5 text-lg tablet:text-2xl text-BGC font-light font-SR">(58 review)</p>
      </div>
      <div className="flex flex-col NPC:flex-row items-center justify-center whitespace-nowrap my-5 mx-10">
        <img src="./HomeStars_Logo_Cyan.svg" alt="HomeStars" className="w-[130px] mx-5"/>
        <Stars />
        <p className="NPC:ml-5 text-lg tablet:text-2xl text-BGC font-light font-SR">(99 review)</p>
      </div>
    </div>
  

    <PopUpEmail />
    <h1 className="text-White text-6xl mb-10 ml-[257px] text-start font-extrabold font-SB italic uppercase leading-[61.14px]">We work here</h1>
    <ContactPage />
    <Copyright />
      </div>
    </Layout>
  );
}

export default Questions;
