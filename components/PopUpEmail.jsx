"use client";
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
      const formData = {
        email: event.target.email.value,
        name: event.target.name.value,
        phone: event.target.phone.value,
        address: event.target.address.value,
        repair: event.target.repair.value,
      };

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Email sent successfully');
      handleClosePopup(); // Закрытие формы после успешной отправки
    } else {
      console.error('Error sending email');
      const errorText = await response.text();
      console.error('Server error message:', errorText);
    }
  };

  return (
    <div>
      <div className="relative flex flex-col items-start NPC:flex-row NPC:items-center NPC:justify-between mt-[120px] tablet:mt-[200px] mb-10 px-10 py-5 tablet:p-10 bg-Yl">
        <div className="flex flex-col">
          <h1 className="text-BGC text-[40px] NPC:text-[70px] NPC:leading-[70px] leading-[40px] font-extrabold font-SB italic uppercase tracking-wide pr-[130px]">have any question?</h1>
          <h3 className="text-BGC text-xl NPC:text-[25px] font-extrabold font-SB uppercase italic">
            Email us
          </h3>
        </div>
        <div className="drop-shadow-md NPC:pr-[250px]">
          <button
            onClick={handleEmailButtonClick}
            className="bg-White text-BGC text-2xl tablet:text-3xl px-[40px] NPC:px-[50px] clip_2 font-extrabold font-SB italic uppercase hover:bg-Yl drop-shadow-2xl hover:text-White py-1 mt-5 NPC:mt-0 whitespace-nowrap"
          >
            E-Mail
          </button>
        </div>
        <img src="./man_email.png" alt="Email Form" className="w-[170px] tablet:w-[200px]  absolute bottom-0 right-2 tablet:right-10" />
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-Black bg-opacity-80 flex justify-center items-center z-50">
          <div className="w-full max-w-[60rem] h-[38rem] bg-BGC relative flex-shrink-0 p-10 rounded-lg">
            <div className="absolute right-0 top-0 mt-4 mr-4">
              <button onClick={handleClosePopup} className="text-White absolute top-1 right-1">
                <CloseIcon /> 
              </button>
            </div>
            <div className="w-full h-full bg-BGC rounded-lg flex flex-col items-center justify-center">
              <div className="absolute top-[3.5rem] right-[-7rem]">
                <div className="w-[42rem] h-[8.25rem] bg-cover bg-[url('/poligon.svg')] bg-no-repeat flex flex-col items-center justify-center">
                  <h1 className="text-BGC text-6xl font-extrabold font-SB italic uppercase">Leave an application</h1>
                  <h3 className="text-BGC text-[25px] font-extrabold font-SB italic uppercase">
                    Start Your Repair Journey Today
                  </h3>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col items-center pt-4 gap-5 tablet:gap-10 w-full px-10 mt-[10rem]">
              
                <label className={labelClass('repair')}>
                  I need repair for:
                  <input type="text" name="repair" className="input-custom w-full p-2" 
                         onFocus={() => handleFocus('repair')} 
                         onBlur={handleBlur} />
                </label>
                <div className="flex flex-col tablet:flex-row gap-5 tablet:gap-5 w-full">
                  <label className={labelClass('name')}>
                    Name:
                    <input type="text" name="name" className="input-custom w-full p-2" 
                           onFocus={() => handleFocus('name')} 
                           onBlur={handleBlur} />
                  </label>
                  <label className={labelClass('email')}>
                    Email:
                    <input type="email" name="email" className="input-custom w-full p-2" 
                           onFocus={() => handleFocus('email')} 
                           onBlur={handleBlur} />
                  </label>
                  <label className={labelClass('phone')}>
                    Phone Number:
                    <input type="tel" name="phone" className="input-custom w-full p-2" 
                           onFocus={() => handleFocus('phone')} 
                           onBlur={handleBlur} />
                  </label>
                </div>
                <label className={labelClass('address')}>
                  Address:
                  <input type="text" name="address" className="input-custom w-full p-2" 
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
