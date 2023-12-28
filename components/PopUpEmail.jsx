"use client"
import React, { useState } from 'react';

function PopUpEmail() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleEmailButtonClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="cross icon" opacity="0.14">
        <path d="M1 1L26 26" stroke="white" strokeWidth="2"/>
        <path d="M26 1L1 26" stroke="white" strokeWidth="2"/>
      </g>
    </svg>
  );

  const handleFocus = (inputId) => {
    setFocusedInput(inputId);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const labelClass = (inputId) => 
    `flex flex-row items-end text-[17px] font-medium font-SR w-full ${focusedInput === inputId ? 'text-Yl' : 'text-White'} whitespace-nowrap overflow-hidden`;
    
    const handleSubmit = async (event) => {
      event.preventDefault();
  

    };
    

  return (
    <div>
      <div className="relative flex flex-row items-center justify-center mb-20 mt-20 py-10 bg-Yl ">
        <div className="flex flex-col items-start">
          <h1 className="text-BGC text-[70px] font-extrabold font-SB italic uppercase tracking-wide ">have any question?</h1>
          <h3 className="text-BGC text-[25px] font-extrabold font-SB uppercase italic mt-[-20px]">
            Email us
          </h3>
        </div>
        <div className="drop-shadow-md">
          <button
            onClick={handleEmailButtonClick}
            className="bg-White text-BGC text-3xl px-[70px] clip_2 ml-[100px] font-extrabold font-SB italic uppercase hover:bg-Yl drop-shadow-2xl hover:text-White"
          >
            E-Mail
          </button>
        </div>
        <img src="./man_email.png" alt="Email Form" className="w-[200px] absolute bottom-0 right-10" />
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-Black bg-opacity-80 flex justify-center items-center z-50">
          <div className="w-[60rem] h-[38rem] bg-BGC relative flex-shrink-0 p-10 rounded-lg">
            <div className="absolute right-0 top-0 mt-4 mr-4">
              <button onClick={handleClosePopup} className="text-White absolute top-1 right-1">
                <CloseIcon /> 
              </button>
            </div>
            <div className="w-full h-full bg-BGC rounded-lg flex flex-col items-center justify-center">
              <div className="absolute top-[3.5rem] right-[-7rem]">
                <div className="w-[42rem] h-[8.25rem] bg-cover bg-[url('/poligon.svg')] bg-no-repeat flex flex-col items-center justify-center">
                  <h1 className="text-BGC text-6xl font-extrabold font-SB italic uppercase">Leave an application</h1>
                  <h3 className="text-BGC text-[25px] font-extrabold font-SB italick uppercase">
                    Start Your Repair Journey Today
                  </h3>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col items-center pt-4 gap-10 w-full px-10 mt-[10rem] ">
                <label className={labelClass('repair')}>
                  I need repair for:
                  <input type="text" className="input-custom w-full p-2" 
                         onFocus={() => handleFocus('repair')} 
                         onBlur={handleBlur} />
                </label>
                <div className="flex gap-4 w-full">
                  <label className={labelClass('name')}>
                    Name:
                    <input type="text" className="input-custom w-full p-2" 
                           onFocus={() => handleFocus('name')} 
                           onBlur={handleBlur} />
                  </label>
                  <label className={labelClass('email')}>
                    Email:
                    <input type="email" className="input-custom w-full p-2" 
                           onFocus={() => handleFocus('email')} 
                           onBlur={handleBlur} />
                  </label>
                  <label className={labelClass('phone')}>
                    Phone Number:
                    <input type="tel" className="input-custom w-full p-2" 
                           onFocus={() => handleFocus('phone')} 
                           onBlur={handleBlur} />
                  </label>
                </div>
                <label className={labelClass('address')}>
                  Address:
                  <input type="text" className="input-custom w-full p-2" 
                         onFocus={() => handleFocus('address')} 
                         onBlur={handleBlur} />
                </label>
                <button type="submit" className="bg-Yl clip_2 text-BGC text-[29px] px-[5rem] mt-4 font-extrabold font-SB uppercase">
                  Submit request
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopUpEmail;
