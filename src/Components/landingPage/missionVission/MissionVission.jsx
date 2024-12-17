import React from "react";
import { FaRocket, FaBullseye } from "react-icons/fa";
import { missionvission } from "../../../assets";

const MissionVision = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:my-20 my-4 px-4 md:px-8 lg:px-24">
      {/* Mission & Vision Section */}
      <div className="flex flex-col gap-8 w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        {/* Mission Card */}
        <div className="flex bg-white shadow-lg border rounded-xl p-6 flex-col items-start gap-4 w-full md:w-[37rem]">
          <div className="bg-teal-100 p-3 rounded-full">
            <FaRocket className="text-teal-600 text-2xl" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-gray-600 mt-2 md:mt-4">
              To create healthier school environments and empower students
              through comprehensive health programs with the aim to foster a
              culture of wellness that supports academic success and lifelong
              healthy habits.
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="flex bg-white shadow-lg border rounded-xl p-6 flex-col items-start gap-4  w-full md:w-[37rem]">
          <div className="bg-teal-100 p-3 rounded-full">
            <FaBullseye className="text-teal-600 text-2xl" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Our Vision</h2>
            <p className="text-gray-600 mt-2 md:mt-4">
              To be the leading provider of innovative health solutions to a
              generation of empowered individuals who thrive academically,
              emotionally, and physically.
            </p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full md:w-1/2 mt-8 md:mt-0">
        <div className="absolute inset-0 bg-[#0D183A] opacity-40 rounded-lg"></div>
        <img
          src={missionvission}
          alt="students image"
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default MissionVision;
