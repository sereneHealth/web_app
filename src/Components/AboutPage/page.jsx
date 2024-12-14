import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer' 
import Hero from '../../common/Hero' 
import { GiSmartphone } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import { aboutPageData, socials , achievements} from '../../constants/constants'

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col space-y-8 md:space-y-16'>
      <Hero title="About us" image="/images/serene2.jpg" />
       
        <div className="px-4 md:px-6 lg:px-24 max-w-[1440px] py-[32px] md:py-[52px] mx-auto space-y-16 md:space-y-32">
          {aboutPageData.map((data, idx) => {
            const { title, desc, image } = data;
            return (
              <div
                key={idx}
                className={`flex flex-col ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start gap-8 justify-between`}
              >
                <div className="w-full md:w-1/2 flex justify-center order-1 md:order-none">
                  <img
                    data-aos="fade-in"
                    src={image}
                    alt={title}
                    className="rounded-lg shadow-md w-full h-[252px] md:h-[367px] object-cover"
                  />
                </div>

                <div className="w-full md:w-1/2 space-y-4 order-2 md:order-none">
                  <h1
                    data-aos="zoom-in"
                    className="relative text-xl md:text-4xl font-bold text-gray-800 after:content-[''] after:absolute after:w-1/5 after:h-[5px] after:bg-teal-500 after:bottom-[-10px] md:after:bottom-[-20px] after:left-0 mb-6 md:mb-10 font-poppins"
                  >
                    {title}
                  </h1>
                  <p className="text-base md:text-lg text-gray-600 md:w-[90%] font-inter" data-aos="fade-up" data-aos-duration="1500">
                    {desc}
                  </p>
                </div>
                    </div>
              );
            })}
        </div>
        <CEOSection />
      </div>
      <Footer />
    </>
  )
}

export default AboutPage

const CEOSection = () => {
  return (
    <section className="px-4 md:px-6 lg:px-24 w-full md:max-w-[1440px] py-4 md:py-12 mx-auto space-y-8 overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 
          data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          className="relative text-xl md:text-4xl font-bold text-gray-800 
                    after:content-[''] after:absolute after:w-[100px] after:h-[6px] 
                    after:bg-teal-500 after:bottom-[-10px] md:after:bottom-[-20px] 
                    after:left-1/2 after:-translate-x-1/2 text-center 
                    mb-6 md:mb-10 font-poppins"
        >
          MEET OUR CEO
        </h1>
       
        <p 
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className="text-[#505050] text-[16px]/[24px] md:text-[20px]/[30px] md:mt-[24px] mt-[16px] md:pb-[48px] pb-[32px] text-center w-full md:w-[932px]">
            Get to know the visionary behind SERENE SCHEAL INTIATIVE. Our CEO is deeply committed to creating sustainable solutions that ensure every child has access to healthcare services and thrives in a safe learning environment.  
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div data-aos="zoom-in-right" className="w-full md:w-1/3 flex justify-center md:justify-start">
          <img 
            src="/images/founder.jpg" 
            alt="CEO" 
            className="w-full h-60 md:w-[400px] md:h-[370px] object-cover shadow-lg"
          />
        </div>

        <div data-aos="zoom-in-left" className="w-full md:w-2/3 text-center md:text-left space-y-4 justify-start">
          <h3 className="text-2xl md:text-3xl font-bold text-[#212121] font-poppins">
            Bilikis Adeshokan Oluwatoyin
          </h3>
          <p className="text-sm md:text-base text-[#505050] font-semibold">
            CEO & Founder of SERENE SCHEAL INTIATIVE
          </p>
          <div className="flex items-center gap-1 md:gap-3 flex-col md:flex-row justify-center md:justify-start">
            <div className="flex items-center gap-1 text-[#505050] text-base">
              <GiSmartphone />
              <span>(+234) 9060856551</span>
            </div>
            <div className="flex items-center gap-1 text-[#505050] text-base">
              <AiOutlineMail />
              <span>ballyunique3568@gmail.com</span>
            </div>
          </div>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            "a pioneering social enterprise committed to enhancing the health and safety of school children across Nigeria. With over a decade of experience as a teacher and school administrator, coupled with her expertise as a licensed community health practitioner."
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed font-inter">
            With over 5 years of experience in healthcare and a passion for education, Bilikis combines education and healthcare knowledge to address critical gaps in school health systems.
          </p>
          <div className='flex items-center justify-center md:justify-start gap-3 md:gap-6 pt-2 md:pt-4'>
            {socials.map((data, idx) => {
              const Icon = data.icon;
              return (
                <div key={idx} className='h-10 w-10 flex items-center justify-center rounded-full size-fit border-primary border-2 bg-inherit text-primary hover:border-primary hover:bg-primary hover:text-white transition duration-75 ease-in-out cursor-pointer'>
                  <a href={data.link} className='text-lg md:text-xl'><Icon /></a>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 py-4 md:py-8">
        <div data-aos="fade-right" className="w-full md:w-2/3 text-center md:text-left space-y-4 justify-start flex flex-col order-2 md:order-1">
          <h1 className='text-[#212121] md:text-start text-center text-[18px]/[28px] md:text-[30px]/[38px] font-bold'>
          Under Bilikis Adeshokan's leadership, Serene Scheal Initiative has achieved several significant milestones:        
          </h1>
          <ul className='flex flex-col text-secondary text-[16px]/[24px] md:text-[20px]/[30px] gap-2 list-none'>
            {achievements.map((data) => {
              const {id, heading} = data
              return (
                <li key={id} className='flex items-start justify-start text-start'><span className='list-disc mr-2'> •</span>  <span className='text-start'>{heading}</span>              
                </li>
              )
            })}             
            
          </ul>
        </div>

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-full md:w-1/3 flex justify-center md:justify-start order-1 md:order-2">
            <img 
              src="/assets/award.jpg" 
              alt="CEO" 
              className="w-full h-60 md:w-[400px] md:h-[450px] object-cover shadow-lg"
            />
        </div>
      </div>
    </section>
  );
};





