import React from 'react';
import { healthservice } from '../../../assets';

const ObjectivesSection = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#F4F4F4] items-center text-gray-900">

       {/* Image Section */}
       <div className="relative flex justify-center w-[40%">
        <img
          src={healthservice}
          alt="Training session"
          className=" shadow-lg w-full lg:w-[80% object-cover"
        />
        <div className="absolute inset-0 bg-[#0D183A] opacity-40"></div>
      </div>
      {/* Objectives Section */}
      <div className="lg:w-1/2 p-4 lg:pl-8">
        <h2 className="text-3xl font-bold mb-4">Objectives</h2>
        <ul className="space-y-4 text-lg">
          <li className="flex items-start">
            <span className="text-teal-500 mr-2">✓</span>
            <span>To ensure schools have access to basic first aid supplies.</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-500 mr-2">✓</span>
            <span>To provide timely health intervention and education to school communities.</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-500 mr-2">✓</span>
            <span>To promote a culture of health awareness and prevention.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ObjectivesSection;
