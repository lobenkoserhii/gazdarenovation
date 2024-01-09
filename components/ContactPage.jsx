import React from 'react';

const ContactInfoItem = ({ iconSrc, altText, contactDetails }) => (
  <div className="flex items-center">
    <img src={iconSrc} alt={altText} className="mr-4" /> 
    <div className="flex flex-col">
      {contactDetails.map((detail, index) => (
        <p key={index} className="text-BGC text-base tablet:text-[25px] font-extrabold font-SB uppercase leading-relaxed tracking-normal italic">
          {detail}
        </p>
      ))}
    </div>
  </div>
);

const ContactPage = () => {
  return (
    <div className="flex w-full h-[40rem] tablet:h-[32rem] relative">
      <div className="bg-Yl text-BGC flex flex-col w-full h-[20rem] tablet:flex-row justify-center tablet:pl-12 tablet:w-[55%] tablet:h-[32rem] z-10 clip_4">
        <div className="flex flex-col items-start justify-center self-center gap-4 z-10">
          <h3 className="text-BGC text-3xl tablet:text-[2.8rem] font-extrabold font-SB uppercase italic leading-[2.8rem] tracking-wide">Gazda Group Inc.</h3>
          
          <ContactInfoItem 
            iconSrc="/phone.svg" 
            altText="Phone" 
            contactDetails={["+1-647-464-2932"]} 
          />
          <ContactInfoItem 
            iconSrc="/locations.svg" 
            altText="Location" 
            contactDetails={["Toronto + gta"]} 
          />
          <ContactInfoItem 
            iconSrc="/email.svg" 
            altText="Email" 
            contactDetails={["gazda.group.inc@gmail.com", "info@gazdaplumbing.com"]} 
          />
        </div>
      </div>

      <div className="h-[40rem] w-full tablet:w-[55%] tablet:h-[32rem] absolute top-0 tablet:right-0 z-[-1]">
        <img src="./map_mob.png" alt="Map" className="map-image h-[40rem] tablet:h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default ContactPage;
