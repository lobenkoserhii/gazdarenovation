
import React from 'react';
import { servicesDataWholeHouse } from "@/constants";




function WholeHouse() {
  return (

      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col tablet:flex-row items-center justify-center my-[120px] mx-[100px]">
        <img className="w-[518px] h-[346px] object-cover shadow" src="./wholehouse_p1.png" alt="Whole-House" />
        <div>
          <p className="text-White py-5 text-xl font-normal font-SR mx-10">
          Our whole-house renovation services offer a comprehensive makeover for your entire home. We cover everything from structural changes to cosmetic upgrades.
          </p>
          <p className="text-White text-[17px] font-normal font-SR mx-10">
          Our team ensures that every aspect of your home renovation reflects your personal style and meets your lifestyle needs.
          </p>
        </div>
      </div>

      <h1 className="text-White text-6xl  text-center font-extrabold font-SB italic uppercase leading-[61.14px]">Remodeling Services:</h1>

      <div className="flex flex-col tablet:flex-row items-center justify-center my-[120px]">
        <div className="relative">
          <img className="w-[300px] h-[450px] shadow relative absolute top-0 left-[130px] z-10" src="./kitchen_p2.png" alt="Whole-House" />
          <img className="w-[300px] h-[450px] shadow relative absolute top-[-80px] left-0 " src="./kitchen_p3.png" alt="Whole-House" />
        </div>
        <div className="ml-[280px] mx-[56px]">
          {servicesDataWholeHouse.map((service, index) => (
            <div key={index}>
              <h2 className="text-White text-[25px] font-extrabold font-SB uppercase leading-relaxed italic service-title">
                {service.title}
              </h2>
              <p className="text-White text-[17px] font-light italic  font-SR">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>


   
  );
}

export default WholeHouse;
