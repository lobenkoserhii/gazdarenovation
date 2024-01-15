import React from 'react';
import { servicesDataBasemen } from "@/constants";




function Basement() {
  return (
    
      <div className="mx-auto max-w-[1440px]">



<div className="flex flex-col tablet:flex-row  items-center justify-center my-10 tablet:my-[120px]  tablet:mx-[100px]">
<img className="w-[350px] tablet:w-[518px] tablet:h-[346px] object-cover shadow" src="./basement_p1.png" alt="Basement" />
        <div>
          <p className="text-White py-5 text-xl font-normal font-SR mx-10">
          Our basement finishing services transform your basement into a functional living space. Options include room partitioning, flooring, lighting, and insulation.
          </p>
          <p className="text-White text-[17px] font-normal font-SR mx-10">
          Our team ensures your basement is not only aesthetically pleasing but also fully functional, aligning with your vision and requirements.
          </p>
        </div>
      </div>

      <h1 className="text-White text-6xl  text-center font-extrabold font-SB italic uppercase leading-[61.14px]">Remodeling Services:</h1>

      <div className="flex flex-col tablet:flex-row items-center justify-center my-10  tablet:my-[120px] ">
        <div className="relative">
        <img className="w-[300px] h-[450px] shadow tablet:relative flex flex-col tablet:absolute tablet:top-0 tablet:left-[130px] z-10"  src="./basement_p2.png" alt="Basement" />
        <img className="w-[300px] h-[450px] shadow tablet:relative flex flex-col tablet:absolute tablet:top-[-80px] tablet:left-0 " src="./basement_p3.jpg" alt="Basement" />
        </div>
        <div className="tablet:ml-[280px] mx-[56px]">
          {servicesDataBasemen.map((service, index) => (
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

export default Basement;
