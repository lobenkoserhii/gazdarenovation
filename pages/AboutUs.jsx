import Layout from "../components/Layout";
import Star from "../components/star";
import Scroller from '../components/Scroller';
import SliderWork from '../components/SliderWork';
import Phase from '../components/Phase'
import FaqSlider from '../components/FaqSlider'
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

function AboutUs() {
  return (
    <Layout>
<div className="relative max-w-[1440px] mx-auto">
<Star customClass="absolute top-2" zIndexClass="z-20" />

       <div className="flex flex-col tablet:flex-row items-start justify-center mt-10 tablet:mt-0">
        
     
        <div className="flex-1 tablet:my-[150px] mt-[150px] mx-10 tablet:ml-[150px] tablet:mr-[200px]">
            <h1 className="text-White text-6xl text-left font-extrabold font-SB italic uppercase leading-[61.14px] mb-4">
                About us
            </h1>
            <h2 className="text-White text-[25px] font-extrabold font-SB uppercase leading-relaxed mb-3">
                Welcome to Gazda group inc.
            </h2>
            <p className="text-White text-[17px] font-normal font-SR">
                Gazda, founded in 2009, is a reputable company dedicated to providing top-quality services in the home renovation industry. With over a decade of experience, we have established ourselves as a trusted name in Toronto and GTA.
                <br /><br />
                At Gazda, we understand that your home is a reflection of your personal style and preferences. That's why we offer a comprehensive range of services, including kitchen and bathroom remodeling, basement finishing, and whole-house renovations.
                <br /><br />
                Our skilled team of professionals, from architects and designers to skilled craftsmen, is committed to delivering outstanding results that exceed your expectations.
            </p>
        </div>

        
        <div className="flex flex-col items-end justify-center ml-10 tablet:ml-0">
        <img className="w-[225px] h-[300px] mr-[150px] object-cover shadow relative absolute top-10 right-[-120px] tablet:top-[100px]  tablet:right-0" src="./About_us1.png" alt="About_us" />
          <img className="w-[225px] h-[300px] mr-[150px] object-cover shadow relative absolute tablet:top-[0px] tablet:right-[150px] " src="./About_us2.png" alt="About_us" />
        </div>

    </div>

    <div className="flex flex-col-reverse tablet:flex-row-reverse items-center tablet:items-start justify-center space-y-20 tablet:space-y-0 tablet:space-x-[150px] tablet:mb-[50px]">
    
   
    <div className="flex-1">
      <p className="text-White text-[17px] m-10 tablet:ml-[50px] tablet:mr-[150px] tablet:mt-[50px] font-normal font-SR">
        What sets us apart is our unwavering commitment to customer satisfaction. We prioritize open communication, attention to detail, 
        and timely project completion. We believe in working closely with our clients, understanding their vision, and translating it into reality.
        <br /><br />
        Over the years, we have built a solid reputation for our professionalism, integrity, and superior workmanship. Our goal is to not only enhance 
        the aesthetics and functionality of your home but also create spaces that enhance your everyday life. Whether you have a specific renovation project in mind or need guidance in transforming your space, Gazda 
        is here to help.
        <br /><br />
        Contact us today for a consultation and let us turn your house into the home you've always dreamed of.
      </p>
    </div>

    {/* Блок для изображения */}
    <div className="shrink-0">
      <img className="w-[330px] h-[447px] shadow object-cover" src="./About_us3.png" alt="About_us" />
    </div>
  </div>



      

    


     

    <Phase/>
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
    <h1 className="text-White text-[27px] tablet:text-6xl tablet:mb-10 ml-[40px] tablet:ml-[257px] text-start font-extrabold font-SB italic uppercase leading-[61.14px]">We work here</h1>
    <ContactPage />
    <Copyright />
    
    </div>
   </Layout>
  )
}

export default AboutUs