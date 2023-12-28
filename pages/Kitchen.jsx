import React from 'react';
import { servicesDataKitchen } from "@/constants";

function Kitchen() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="flex flex-col tablet:flex-row  items-center justify-center my-[120px] mx-[100px]">
        <img className="w-[518px] h-[346px] shadow" src="./kitchen_p1.jpeg" alt="Kitchen" />
        <div>
          <p className="text-White py-5 text-xl font-normal font-SR mx-10">
            Our kitchen remodeling service is designed to transform your kitchen into a functional and visually appealing space. We offer a range of options, including cabinet installation or replacement, countertop upgrades, flooring, lighting, and appliance installation.
          </p>
          <p className="text-White text-xl font-normal font-SR mx-10">
            Our team of experts will work closely with you to understand your specific needs and design preferences, ensuring that your new kitchen reflects your style while maximizing efficiency and functionality.
          </p>
        </div>
      </div>
      <h1 className="text-White text-6xl text-center font-extrabold font-SB italic uppercase leading-[61.14px]">Remodeling Services:</h1>
      <div className="flex flex-col tablet:flex-row items-center justify-center my-[120px] ">
        <div className="relative">
          <img className="w-[300px] h-[450px] shadow relative absolute top-0 left-[130px] z-10" src="./kitchen_p2.png" alt="Kitchen" />
          <img className="w-[300px] h-[450px] shadow relative absolute top-[-80px] left-0 " src="./kitchen_p3.png" alt="Kitchen" />
        </div>
        <div className="ml-[280px] mx-[56px]">
          {servicesDataKitchen.map((service, index) => (
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

export default Kitchen;
