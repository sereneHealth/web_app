import React from 'react';
import { healthservice } from '../../../assets';

const ObjectivesSection = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#F4F4F4] gap-4 md:gap-12 mx-auto text-gray-900 px-4 md:px-8 lg:px-24 py-6 md:py-20">

       {/* Image Section */}
       <div className="relative w-full md:w-1/2 mt-6 md:mt-0 order-2 md:order-1">
        <img
          src={healthservice}
          alt="Training session"
          className="rounded-lg object-cover w-full h-full md:h-[30rem]"
        />
        <div className="absolute inset-0 bg-[#0D183A] opacity-40 rounded-lg"></div>
      </div>
      {/* Objectives Section */}
      <div className="lg:w-1/2 flex flex-col gap-2 md:gap-6 text-[#1a202c] order-1 md:order-2">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 text-center md:text-start">Objectives</h2>
        <ul className="space-y-4 md:space-y-8 text-base md:text-xl w-full md:w-2/3">
          <li className="flex items-start gap-4 md:gap-6">
            <div className='rounded-full px-3 py-1 border border-teal-500'>
              <span className="text-teal-500">✓</span>
            </div>
            <span className="leading-snug">To ensure schools have access to basic first aid supplies.</span>
          </li>
          <li className="flex items-start gap-4 md:gap-6">
              <div className='rounded-full px-3 py-1 border border-teal-500'>
                <span className="text-teal-500">✓</span>
              </div>
            <span className="leading-snug">To provide timely health intervention and education to school communities.</span>
          </li>
          <li className="flex items-start gap-4 md:gap-6">
              <div className='rounded-full px-3 py-1 border border-teal-500'>
                <span className="text-teal-500">✓</span>
              </div>
            <span className="leading-snug">To promote a culture of health awareness and prevention.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ObjectivesSection;
