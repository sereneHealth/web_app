import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Services = () => {
  const slides = [
    {
      title: "Installation/Management of School Healing Bay",
      content:
        "This service provides the setup and ongoing management of a dedicated 'Healing Bay' within schools, a safe and supportive space where students can receive first aid, health checks, and emotional support. Our team ensures the Healing Bay is equipped with necessary medical supplies, staffed with trained personnel, and maintained to promote students' health and well-being in a caring environment",
      image: "/src/assets/installation.jpg",
    },
    {
      title: "Health Education & Promotion",
      content:
        "We focus on educating students and staff about essential health topics, including nutrition, hygiene, mental health, and physical wellness. Through workshops, interactive sessions, and resource materials, we promote healthy habits and empower the school community to make informed decisions, fostering a culture of wellness and proactive health management.",
      image: "/src/assets/eduPromotion.jpg",
    },
    // Add more slides as needed
    {
      title: "Nutrition/Medical Screening",
      content:
        "We provide comprehensive health screenings, including assessments of nutritional status and basic medical checks for students. Our team evaluates key health indicators to identify any potential concerns early on, supporting students' physical well-being and ensuring they receive appropriate guidance or referrals for further care if needed. This proactive approach helps maintain a healthy school environment and promotes optimal growth and development.",
      image: "/src/assets/healthservice.png",
    },
    {
      title: "Psychological Counseling",
      content:
        "We offer confidential counseling and mental health support for students, helping them navigate emotional challenges, stress, and personal issues. Our trained counselors provide a safe, non-judgmental space to foster emotional well-being, build resilience, and support students in developing healthy coping strategies for school and life.",
      image: "/src/assets/counseling.jpg",
    },
    {
      title: "Standby Health Officer",
      content:
        "We also provides a dedicated health professional on-site at schools to ensure immediate response to medical emergencies and ongoing health support for students and staff. The Standby Health Officer is trained in first aid, emergency care, and general health management, offering peace of mind and quick assistance in case of health-related incidents throughout the school day.",
      // image: "/src/assets/healthservice.jpg",
      image: "/src/assets/healthedu.jpg",
    },
    {
      title: "Seminars and Health Fair",
      content:
        "We organizes engaging seminars and health fairs to promote health awareness and education within the school community. Through interactive sessions and informative displays, students, staff, and parents gain valuable insights into various health topics, including nutrition, mental well-being, and preventive care. The events aim to foster a culture of health, encourage healthy habits, and provide access to resources and expert advice in a fun and engaging environment.",
      image: "/src/assets/health.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center text-center xl:text-[48px] text-[24px] mb-5">
        <p>Our Services</p>
      </div>
      <div className="flex gap-5 w-[85%] mx-auto">
        <button
          onClick={prevSlide}
          className="flex justify-center items-center text-teal-600 bg-[#DFF2E7] rounded-full p-2 shadow-md h-12 w-12"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="flex justify-center items-center text-teal-600 bg-[#DFF2E7] rounded-full p-2 shadow-md h-12 w-12"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
      <div className="flex items-center justify-center p-8">
        <div className="relative bg-white rounded-lg xl:shadow-lg flex overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${slides.length * 100}%`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row-reverse w-full"
                style={{ minWidth: "100%" }}
              >
                {/* Content Part */}
                <div className="w-1/2 flex flex-col justify-center xl:p-8">
                  <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-gray-700 xl:w-[80%] w-[70%]">{slide.content}</p>
                </div>

                {/* Image Part */}
                <div
                  className="w-1/2 h-[300px] xl:h-[80vh] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    borderRadius: "8px",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
