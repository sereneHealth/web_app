import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer' 
import Hero from '../../common/Hero' 
import { GiSmartphone } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import { aboutPageData } from '../../constants/constants'

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
    <section className="px-4 md:px-6 lg:px-24 w-full md:max-w-[1440px] py-12 mx-auto space-y-8">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 
          className="relative text-xl md:text-4xl font-bold text-gray-800 
                    after:content-[''] after:absolute after:w-[100px] after:h-[6px] 
                    after:bg-teal-500 after:bottom-[-10px] md:after:bottom-[-20px] 
                    after:left-1/2 after:-translate-x-1/2 text-center 
                    mb-6 md:mb-10 font-poppins"
        >
          MEET THE CEO
        </h1>
       
        <p className="text-[#505050] text-[16px]/[24px] md:text-[20px]/[30px] md:mt-[24px] mt-[16px] md:pb-[48px] pb-[32px] text-center w-full md:w-[932px]">
          Get to know the visionary behind SERENE SCHEAL INTIATIVE. Our CEO is dedicated 
          to driving innovation, empowering communities, and fostering growth 
          with a mission to make a difference globally.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <img 
            src="/assets/award.jpg" 
            alt="CEO" 
            className="w-full h-60 md:w-[400px] md:h-[370px] object-cover shadow-lg"
          />
        </div>

        <div className="w-full md:w-2/3 text-center md:text-left space-y-4 justify-start">
          <h3 className="text-2xl md:text-3xl font-bold text-[#212121] font-poppins">
            Jane Doe
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
              <span>sereneschealinitiative@gmail.com</span>
            </div>
          </div>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            "At SSI, we believe in creating opportunities for everyone, everywhere. Our mission is to use innovative solutions to empower individuals and communities globally."
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            With over 15 years of experience in technology and a passion for education, Jane is committed to bridging gaps and fostering growth.
          </p>
        </div>
      </div>
    </section>
  );
};





