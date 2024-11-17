import React,{useEffect} from "react";
import { award, experts, firstaidbox, menstrualhealth1 } from "../../../assets";
import "aos/dist/aos.css";
import AOS from "aos";

const WhyUs = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize the animation duration
      once: false,     // Animation only happens once
    });
  }, []);
  return (
    <>
      <div className=" bg-gray-100 p-8 overflow-hidden">
        <div className="flex text-[24px] lg:text-[48px] justify-center my-10 text-teal-500">
          <p> Why Serene Scheal Initiative?</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div data-aos="fade-right" className="text-teal-500 font-bold text-2xl">
            Affordable access to quality health resources.
          </div>
          <div data-aos="fade-up" className="flex justify-center md:w-[51%]">
            <img
              src={firstaidbox}
              alt="Health Resources Brochure"
              className=""
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-5">
          <div data-aos="fade-down" className="flex justify-center md:w-[51%]">
            <img src={experts} alt="School Health Program" className="" />
          </div>
          <div data-aos="fade-left" className="text-teal-500 font-bold text-2xl">
            Expertise from health and education professionals
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-5">
          <div data-aos="fade-right" className="text-teal-500 font-bold text-2xl">
            Tailored health programs that meet school-specific needs.
          </div>

          <div data-aos="fade-up" className="flex justify-center md:w-[51%]">
            <img
              src={menstrualhealth1}
              alt="Student Health Guide picture"
              className=""
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-5">
          <div data-aos="fade-down" className="flex justify-center md:w-[51%]">
            <img src={award} alt="award picture" className="" />
          </div>
          <div data-aos="fade-left" className="text-teal-500 font-bold text-2xl">
            Proven impact on children’s safety and well-being.
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
