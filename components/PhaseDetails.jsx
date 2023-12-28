import React from 'react';
import { Phase } from "@/constants";


const PhaseDetails = () => {
  const renderRow = (items, reverse = false) => {
    const flexRowClasses = reverse ? 'tablet:flex-row-reverse' : 'flex-row';

    return (
      <div className={`flex flex-col tablet:flex-row ${flexRowClasses} justify-center items-stretch z-10 mb-8`}>
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-start text-white p-6 rounded-lg w-full tablet:w-1/3 relative">
            {/* Изменение позиционирования линии для 9-го блока */}
            {item.lineWidth && (
              <div 
                className={`hidden tablet:block absolute top-[153px] ${index === 2 ? 'left-0' : (reverse ? 'left-0' : 'right-0')} h-[6px] bg-DG z-0`}
                style={{ width: item.lineWidth }}
              ></div>
            )}

            {/* Номер и точка */}
            <div className="self-center ">
              <span className="opacity-30 text-gray-500 text-[75px] italic font-extrabold uppercase">
                {item.number.toString().padStart(2, '0')}
              </span>
            </div>
            <div className="self-end tablet:self-center mr-[-20px] mb-4 z-10 w-5 h-5 bg-Yl rounded-full shadow-md mt-2"></div>

            {/* Контент */}
            <div className="text-center w-full">
            <h2 className="text-White text-2xl italic font-extrabold mb-3 uppercase">{item.title}</h2>
  {item.text.split('\n').map((paragraph, idx) => (
    <p key={idx} className="text-White text-lg font-normal mb-3">{paragraph}</p>
  ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 relative">
      {renderRow(Phase.slice(0, 3))}
      {renderRow(Phase.slice(3, 6), true)}
      {renderRow(Phase.slice(6, 9))}

      {/* Вертикальная линии*/}
      <div className="w-[6px] bg-DG h-[2000px] absolute top-[180px] right-[27px] z-0 block tablet:hidden"></div>
      <div className="w-[6px] bg-DG h-[2000px] absolute bottom-[286px] right-[27px] z-0 block tablet:hidden"></div>
      <div className="w-[6px] bg-DG min-h-[450px] absolute top-[185px] right-0 z-0 mr-3 hidden tablet:block"></div>
      <div className="w-[6px] bg-DG min-h-[478px]  absolute bottom-[346px] left-0 z-0 ml-3 hidden tablet:block"></div>


    </div>
  );
};

export default PhaseDetails;
