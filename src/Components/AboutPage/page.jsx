import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer' 

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="relative w-full h-[75vh]">
          <img 
            src="/images/serene2.jpg" 
            alt="Contact Us Background" 
            className="w-full h-full object-fill" 
          />
          <div 
            className="absolute top-0 left-0 w-full h-full bg-[#111111cc]"
          />
          <div 
            className="absolute inset-0 flex items-center justify-center text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide uppercase">
              About Us
            </h1>
          </div>
        </div>    
      </div>
      <Footer />
    </>
  )
}

export default AboutPage