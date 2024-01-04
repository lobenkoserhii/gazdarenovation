import Layout from "../components/Layout";
import PhaseDetails from '../components/PhaseDetails'
import Star from "../components/star";
import Scroller from '../components/Scroller';
import SliderWork from '../components/SliderWork';

import Copyright from '../components/Copyright';
import ContactPage from '../components/ContactPage';
import PopUpEmail from '../components/PopUpEmail';


const Stars = ({ fillColor = "#262626" }) => (
  <div className="flex">
    {Array.from({ length: 5 }, (_, index) => (
      <svg key={index} className="w-4 h-4 tablet:w-6 tablet:h-6 mx-1 my-2" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.09518 20.1036L6.57358 12.7378L0.597626 8.73061H7.91701L10.5344 0.832031L13.1981 8.73061H20.4711L14.4952 12.7378L17.0199 20.1036L10.5344 15.4015L4.09518 20.1036Z" fill={fillColor} />
      </svg>
    ))}
  </div>
);

function Process() {

  return (
    <Layout>
      <div className="h-[733px] relative max-w-[1440px] mx-auto">
      <Star customClass="absolute top-2" zIndexClass="z-20" />
        
        <div className="h-full bg-[url('/Phase_2.png')] bg-cover bg-no-repeat bg-center opacity-50 blur-sm bg-gradient-with-image"></div>
    
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-White text-6xl text-center font-extrabold font-SB italic uppercase leading-[61.14px]">
    Phases
  </h1>
       
     
<PhaseDetails/>


     
      <Scroller text="our works" />
      <SliderWork />
      <div className="bg-Yl clip_3 w-full flex flex-row justify-center items-center py-3 NPC:py-10 my-20 z-30">
        <div className="flex flex-col NPC:flex-row items-center justify-start whitespace-nowrap mx-10 ">
          <img src="./Google__G__Logo 1.svg" alt="Google" className="w-[40px] tablet:w-[60px] mx-5 my-2.5 tablet:my-0"/>
          <Stars />
          <p className="NPC:ml-5 text-lg tablet:text-2xl text-BGC font-light font-SR">(58 review)</p>
        </div>
        <div className="flex flex-col NPC:flex-row items-center justify-center whitespace-nowrap my-5 mx-10">
          <img src="./HomeStars_Logo_Cyan.svg" alt="HomeStars" className="w-[130px] mx-5"/>
          <Stars />
          <p className="NPC:ml-5 text-lg tablet:text-2xl text-BGC font-light font-SR">(99 review)</p>
        </div>
      </div>
      <PopUpEmail />
      <h1 className="text-White text-6xl mb-10 ml-[257px] text-start font-extrabold font-SB italic uppercase leading-[61.14px]">We work here</h1>
      <ContactPage />
      <Copyright />
      
      </div>
     </Layout>
  )
}

export default Process