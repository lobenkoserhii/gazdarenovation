
import React, { useState } from 'react';
import { useEffect } from 'react';
import Layout from "../components/Layout";
import Star from "../components/star";
import NavServices from "../components/NavServices";
import Scroller from '../components/Scroller';
import SliderWork from '../components/SliderWork';
import Phase from '../components/Phase';
import Copyright from '../components/Copyright';
import ContactPage from '../components/ContactPage';
import PopUpEmail from '../components/PopUpEmail';
import Kitchen from './Kitchen';
import Bathroom from './Bathroom';
import Basement from './Basement';
import WholeHouse from './WholeHouse';
import Exterior from './Exterior';

const Stars = ({ fillColor = "#262626" }) => (
  <div className="flex">
    {Array.from({ length: 5 }, (_, index) => (
      <svg key={index} className="w-4 h-4 tablet:w-6 tablet:h-6 mx-1 my-2" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.09518 20.1036L6.57358 12.7378L0.597626 8.73061H7.91701L10.5344 0.832031L13.1981 8.73061H20.4711L14.4952 12.7378L17.0199 20.1036L10.5344 15.4015L4.09518 20.1036Z" fill={fillColor} />
      </svg>
    ))}
  </div>
);

function Services() {
  const [activeCategory, setActiveCategory] = useState('Kitchen');
  const [backgroundImage, setBackgroundImage] = useState('/kitchen.png');
  const [pageTitle, setPageTitle] = useState('Kitchen Remodeling');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash !== activeCategory) {
        setActiveCategory(hash);
        handleCategoryChange(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Инициализируем состояние при первой загрузке страницы
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [activeCategory]);

  const handleCategoryChange = (categoryKey) => {
    setActiveCategory(categoryKey);
    window.location.hash = categoryKey;
    switch (categoryKey) {
      case 'Kitchen':
        setBackgroundImage('/kitchen.png');
        setPageTitle('Kitchen Remodeling');
        break;
      case 'Bathroom':
        setBackgroundImage('/bathroom.png');
        setPageTitle('Bathroom Renovations');
        break;
      case 'Basement':
        setBackgroundImage('/basement.png');
        setPageTitle('Basement Finishing');
        break;
      case 'WholeHouse':
        setBackgroundImage('/wholehouse.png');
        setPageTitle('Whole-House Renovations');
        break;
      case 'Exterior':
        setBackgroundImage('/exterior.png');
        setPageTitle('Exterior Renovations');
        break;
      default:
        setBackgroundImage('/default.png');
        setPageTitle('Default Title');
    }
  };

  const renderCategoryComponent = () => {
    switch (activeCategory) {
      case 'Kitchen':
        return <Kitchen />;
      case 'Bathroom':
        return <Bathroom />;
      case 'Basement':
        return <Basement />;
      case 'WholeHouse':
        return <WholeHouse />;
      case 'Exterior':
        return <Exterior />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="h-[733px] relative max-w-[1440px] mx-auto">
      <Star customClass="absolute top-2" zIndexClass="z-20" />
        <div style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          opacity: '0.5',
          position: 'absolute',
          inset: 0,
          zIndex: 0
        }}></div>
        <div className="relative flex justify-center items-center h-full z-10">
          <h1 className="text-White text-6xl text-center font-extrabold font-SB italic uppercase leading-[61.14px]">
            {pageTitle}
          </h1>
        </div>
      </div>
      <NavServices onCategorySelect={handleCategoryChange} activeKey={activeCategory} />
      {renderCategoryComponent()}
      <div className='max-w-[1440px] mx-auto'>
      <Phase />
      <Scroller text="our works" />
      <SliderWork />
      <div className="bg-Yl clip_3 w-full flex flex-row justify-center items-center py-3 NPC:py-10 NPC:my-10 z-30">
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
      <h1 className="text-White text-[27px] tablet:text-6xl tablet:mb-10 ml-[40px] tablet:ml-[257px] text-start font-extrabold font-SB italic uppercase leading-[61.14px]">We work here</h1>
      <ContactPage />
      <Copyright />
      </div>
    </Layout>
  );
}

export default Services;
