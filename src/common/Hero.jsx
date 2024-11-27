import React from 'react'

const Hero = ({title, image}) => {
  return (
    <div >
        <div className="relative w-full h-[40vh] md:h-[60vh]">
          <img 
            src={image} 
            alt="Contact Us Background" 
            className="w-full h-full object-fill" 
          />
          <div 
            className="absolute top-0 left-0 w-full h-full bg-[#111111cc]"
          />
          <div 
            className="absolute inset-0 flex items-center justify-center text-center text-white font-poppins"
          >
            <h1 className="text-3xl md:text-6xl font-bold tracking-wide uppercase">
                {title}
            </h1>
          </div>
        </div> 
    </div>
  )
}

export default Hero