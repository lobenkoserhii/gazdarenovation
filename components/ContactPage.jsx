import React from 'react';

const ContactInfoItem = ({ iconSrc, altText, contactDetails }) => (
  <div className="flex items-center">
    <img src={iconSrc} alt={altText} className="mr-4" /> 
    <div className="flex flex-col">
      {contactDetails.map((detail, index) => (
        <p key={index} className="text-BGC text-[25px] font-extrabold font-SB uppercase leading-relaxed tracking-normal italic">
          {detail}
        </p>
      ))}
    </div>
  </div>
);

const ContactPage = () => {
  return (
    <div className="flex w-full relative">
      <div className="bg-Yl text-BGC flex flex-col justify-center pl-12 w-[55%] h-[32rem] z-10 clip_4">
        <div className="flex flex-col items-start justify-center self-center gap-4 z-10">
          <h3 className="text-BGC text-[2.8rem] font-extrabold font-SB uppercase italic leading-[2.8rem] tracking-wide">Gazda Group Inc.</h3>
          
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

      <div className="w-[55%] h-[32rem] absolute right-0 z-[-1]">
        <img src="./map.png" alt="Map" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default ContactPage;
