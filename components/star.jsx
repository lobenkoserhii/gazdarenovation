import React from 'react'

const Stars = ({ fillColor = "#262626" }) => (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          className="w-4 h-4 tablet:w-6 tablet:h-6 mx-1 my-2" 
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.09518 20.1036L6.57358 12.7378L0.597626 8.73061H7.91701L10.5344 0.832031L13.1981 8.73061H20.4711L14.4952 12.7378L17.0199 20.1036L10.5344 15.4015L4.09518 20.1036Z"
            fill={fillColor}
          />
        </svg>
      ))}
    </div>
  );
  

function Star({ customClass = "", zIndexClass = "z-30" }) {
  return (
    <div className={`${customClass} ${zIndexClass} absolute right-0 left-0`}>
    <div className="flex flex-row justify-center items-center z-30">
    <div className="flex flex-col NPC:flex-row items-center justify-start whitespace-nowrap mx-10 ">
  <img src="./Google__G__Logo 2.svg" alt="Google"  className="w-[1.5rem] tablet:w-[2rem] mx-5 my-2.5 tablet:my-0"/>
  <Stars fillColor="#F4C300" />
  <p className="NPC:ml-5 text-lg tablet:text-lg text-White font-light font-SR">
    (58 review)
  </p>
    </div>
    <div className= "flex flex-col NPC:flex-row items-center justify-center whitespace-nowrap my-5 mx-10">
  <img src="./HomeStars_Logo_White.svg" alt="HomeStars" className="w-[5rem] mx-5" />
  <Stars fillColor="#F4C300" />
  <p className="NPC:ml-5 text-lg tablet:text-lg text-White font-light font-SR">
    (99 review)
  </p>
    </div>
    
    </div>
    </div>
  )
}

export default Star