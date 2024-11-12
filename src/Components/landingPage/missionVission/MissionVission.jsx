import React from "react";
import { FaRocket, FaBullseye } from "react-icons/fa";
import { missionvission, } from "../../../assets";

const MissionVision = () => {
  return (
    <>
      <div className="flex justify-between items-center my-10 bg-[#F4F4F4]">
        <div className="flex flex-col gap-8 p-8 xl:w-[60%]">
          {/* Mission Card */}
          <div className="flex bg-white shadow-lg border rounded-xl p-6 flex-col items-start gap-4">
            <div className="bg-teal-100 p-3 rounded-full">
              <FaRocket className="text-teal-600 text-2xl" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Our Mission</h2>
              <p className="text-gray-600 mt-2">
                To create healthier school environments and empower students
                through comprehensive health programs with the aim to foster a
                culture of wellness that supports academic success and lifelong
                healthy habits..
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="flex bg-white shadow-lg border rounded-xl  flex-col items-start gap-4">
            <div className="bg-teal-100 p-3 rounded-full">
              <FaBullseye className="text-teal-600 text-2xl" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Our Vision</h2>
              <p className="text-gray-600 mt-2">
              To be the leading provider of innovative health solutions to generation of
              empowered individuals who thrive academically, emotionally and physically
              </p>
            </div>
          </div>
        </div>
       <div className="relative">
       <div className="absolute inset-0 bg-[#0D183A] opacity-40"></div>
       <div className="hidden md:block">
        <img src={missionvission} alt="students image" />
        </div>
       </div>
      </div>
    </>
  );
};

export default MissionVision;
