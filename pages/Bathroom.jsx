import React from 'react';
import { servicesDataBathroom } from "@/constants";




function Bathroom() {
  return (
 
      <div className="max-w-[1440px] mx-auto">
     

      <div className="flex flex-col tablet:flex-row items-center justify-center my-[120px] mx-[100px]">
        <img className="w-[518px] h-[346px] shadow" src="./bathroom_p1.jpg" alt="Bathroom" />
        <div>
          <p className="text-White py-5 text-xl font-normal font-SR mx-10">
          Our bathroom renovation service aims to turn your bathroom into a modern and relaxing retreat. We provide various options including bathtub and shower installation, vanity and sink upgrades, flooring, lighting, and toilet installation.
          </p>
          <p className="text-White text-[17px] font-normal font-SR mx-10">
          Our experienced team collaborates with you to capture your unique needs and aesthetic choices, ensuring your renovated bathroom is both stylish and practical. 
          </p>
        </div>
      </div>

      <h1 className="text-White text-6xl  text-center font-extrabold font-SB italic uppercase leading-[61.14px]">Remodeling Services:</h1>

      <div className="flex flex-col tablet:flex-row items-center justify-center my-[120px]">
        <div className="relative">
          <img className="w-[300px] h-[450px] shadow relative absolute top-0 left-[130px] z-10" src="./bathroom_p2.png" alt="Bathroom" />
          <img className="w-[300px] h-[450px] object-cover shadow relative absolute top-[-80px] left-0 " src="./bathroom_p3.jpg" alt="Bathroom" />
        </div>
        <div className="ml-[280px] mx-[56px]">
          {servicesDataBathroom.map((service, index) => (
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

export default Bathroom;
