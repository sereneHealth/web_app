import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer' 
import Hero from '../../common/Hero' 
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

        {/* <div className="px-4 md:px-6 lg:px-24 max-w-[1440px] py-[51px] md:py-[102px] mx-auto space-y-16 md:space-y-32">
          <div>

          </div>
        </div> */}
 
      </div>
      <Footer />
    </>
  )
}

export default AboutPage