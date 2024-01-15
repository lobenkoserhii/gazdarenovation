
import React from 'react';
import { servicesDataExterior } from "@/constants";



function Exterior() {
  return (
   
      <div className=" max-w-[1440px] mx-auto">
       <div className="flex flex-col tablet:flex-row  items-center justify-center my-10 tablet:my-[120px]  tablet:mx-[100px]">
       <img className="w-[350px] tablet:w-[518px] tablet:h-[346px] shadow" src="./exterior_p1.jpg" alt="Kichen" />
        <div>
          <p className="text-White py-5 text-xl font-normal font-SR mx-10">
          Our exterior renovation services focus on enhancing the curb appeal and functionality of your home's exterior. Services include siding, roofing, windows, and outdoor living spaces.
          </p>
          <p className="text-White text-[17px] font-normal font-SR mx-10">
          Our professionals work with you to ensure your home’s exterior is both beautiful and resilient.
          </p>
        </div>
      </div>

      <h1 className="text-White text-6xl  text-center font-extrabold font-SB italic uppercase leading-[61.14px]">Remodeling Services:</h1>

      <div className="flex flex-col tablet:flex-row items-center justify-center my-10  tablet:my-[120px] ">
        <div className="relative">
        <img className="w-[300px] h-[450px] shadow tablet:relative flex flex-col tablet:absolute tablet:top-0 tablet:left-[130px] z-10" src="./kitchen_p2.png" alt="Kichen" />
        <img className="w-[300px] h-[450px] shadow tablet:relative flex flex-col tablet:absolute tablet:top-[-80px] tablet:left-0 " src="./kitchen_p3.png" alt="Kichen" />
        </div>
        <div className="tablet:ml-[280px] mx-[56px]">
          {servicesDataExterior.map((service, index) => (
            <div key={index}>
              <h2 className="text-White text-[25px] font-extrabold font-SB uppercase leading-relaxed service-title italic ">
                {service.title}
              </h2>
              <p className="text-White text-[17px] font-light font-SR italic ">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      </div>


  );
}

export default Exterior;
