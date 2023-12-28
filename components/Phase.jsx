"use client"
import React, { useState, useEffect } from 'react';

const blocks = [
    {
      title: "Primary Consultation",
      description: "Discuss your renovation goals, budget, and timeline.",
      image: "Phase_1.png", 
      number: "#1"
    },
    {
      title: "Phase Designing",
      description: "Create a detailed plan and design concept for your renovation.",
      image: "Phase_1.png",
      number: "#2"
    },
    {
      title: "Construction",
      description: "Will bring the design to life, following the established plan.",
      image: "Phase_1.png",
      number: "#3"
    },
    {
      title: "The Final Touches",
      description: "Add the finishing details that bring the space together.",
      image: "Phase_1.png", 
      number: "#4"
    }
  ];


  const Block = ({ block }) => {
    const [isHovered, setIsHovered] = useState(true); // Установлено в true по умолчанию
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 640) {
          setIsHovered(false); // Отменяем ховер на больших экранах
        } else {
          setIsHovered(true); // Включаем ховер на маленьких экранах
        }
      };
  
      // Вызываем функцию при монтировании и размонтировании компонента
      window.addEventListener('resize', handleResize);
      handleResize(); // Инициализируем при первом рендеринге
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <div 
      onMouseEnter={() => window.innerWidth > 640 && setIsHovered(true)}
      onMouseLeave={() => window.innerWidth > 640 && setIsHovered(false)}
      className={`flex flex-col gap-4 justify-between min-h-[280px] tablet:min-h-[350px] relative w-full p-4 transition duration-300 ease-in-out transform ${isHovered ? 'scale-110 bg-Yl' : 'bg-Light'}`}
      style={{ transformOrigin: 'bottom' }}>
      
        {/* Верхний блок: номер и стрелка */}
        <div className="flex items-center mb-4">
          <span className={`italic font-SB text-[35px] leading-[36px] uppercase mr-2 ${isHovered ? 'text-Light' : 'text-[#868686]'}`}>
            {block.number}
          </span>
          {!isHovered && (
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='#868686'>
              <path d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" />
            </svg>
          )}
        </div>
  
        {/* Основной блок: заголовок, описание и кнопка */}
        <div className="flex-grow mt-10 tablet:mt-15">
          <h2 className={`font-SB text-[20px] tablet:text-[25px] ${isHovered ? 'text-Light' : 'text-White'}`}>
            {block.title}
          </h2>
          {isHovered && (
            <div className="mt-2">
              <p className="text-Light max-w-[200px] text-[14px] tablet:text-[17px]">
                {block.description}
              </p>
              <button className="text-Light hover:text-White hidden tablet:flex items-center mt-5">
                LEARN MORE
                <svg className="ml-2 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" />
                </svg>
              </button>
            </div>
          )}
        </div>
  
        {/* Картинка, отображаемая только при наведении */}
        {isHovered && (
          <img src={block.image} alt={block.title} className="clip absolute top-0 right-0 h-[103px]" />
        )}
      </div>
    );
  };
  

  
  function Phase() {
    return (
      <section>
      <div className="flex flex-col items-center space-y-8 my-[60px]">
        <div className="w-full tablet:w-[700px] NPC:w-[900px] PC:w-[1100px] flex justify-start items-center mb-8 pl-[80px]">
          <h1 className="text-White italic text-[27px] mr-[80px] tablet:mr-0 tablet:text-5xl font-extrabold uppercase leading-7 text-left PC:max-w-[1100px] ">
            WE ARE RELIABLE HOME REPAIR CONTRACTORS IN TORONTO
          </h1>
        </div>
        <div className="grid grid-cols-1 tablet:gap-8 tablet:grid-cols-4 gap-12 w-full px-[100px]">
          {blocks.map((block, index) => (
            <Block key={index} block={block} />
          ))}
        </div>
        {/* Кнопка Learn More всегда видна под блоками */}
        <div className="text-center mt-4 tablet:hidden">
        <button className="inline-flex items-center clip_2 px-[40px] py-2 bg-White text-Black font-bold italic uppercase whitespace-nowrap">
  LEARN MORE </button>
</div>

        </div>
      </section>
    );
  }
  
  export default Phase;
  