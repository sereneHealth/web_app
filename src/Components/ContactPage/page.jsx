import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LuHeartHandshake } from "react-icons/lu";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

const socialIcons = [<RiInstagramFill />, <FaFacebook />, <FaXTwitter />, <FaYoutube />]

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    try {
      const { fullname, ...filteredData } = data;
  
      const response = await axios.post('https://web-api-775r.onrender.com/send', filteredData);
  
      toast.success(
        <>
          <strong>Message Sent!</strong>
          <br />
          Your message has been sent successfully!
        </>,
        {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
  
      console.log(response.data); 
    } catch (error) {
      toast.error(
        <>
          <strong>Error Sending Message</strong>
          <br />
          Please try again later.
        </>,
        {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
  
      console.error(error);
    }
  };
 
  return (
    <>
    <Navbar />
    <div className="">
    <div className="relative w-full h-[40vh] md:h-[60vh]">
          <img 
            src="/images/contact-image.jpg" 
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
              Contact Us
            </h1>
          </div>
        </div> 

    <div className='bg-[#edf9f7] py-8 md:py-20 px-6 md:px-20'>
      <div className='flex flex-col md:flex-row justify-between mx-auto gap-10 md:gap-28 items-center'>
        <div className='flex flex-col gap-5 md:gap-8 md:w-1/2 w-full' data-aos="fade-right">
          <h1 className='text-2xl md:text-4xl font-bold tracking-wide w-full md:w-[480px] mb-2 md:mb-6 text-deep-black'>Got any questions, queries and/or comments???</h1>
          <div className='flex flex-col gap-1'>
            <div className="flex items-center gap-3">
              <div className="text-xl md:text-2xl text-primary">
                <FaPhoneAlt />
              </div>
              <span className='text-black-md text-normal md:text-xl font-semibold'>Call our Office</span>
            </div>
            <p className='text-black-md'>(+234) 906 085 6551</p>
          </div>
          <div className='flex flex-col gap-1'>
            <div className="flex items-center gap-3">
              <div className="text-xl md:text-2xl text-primary">
                <BsFillSendFill />
              </div>
              <span className='text-black-md text-normal md:text-xl font-semibold'>Email Us</span>
            </div>
            <p className='text-black-md'>sereneschealinitiative@gmail.com</p>
          </div>
          <div className='flex flex-col gap-1'>
            <div className="flex items-center gap-3">
              <div className="text-xl md:text-2xl text-primary">
                <FaMapMarkerAlt />
              </div>
              <span className='text-black-md text-normal md:text-xl font-semibold'>Sereneschealthinitiative HQ</span>
            </div>
            <p className='text-black-md'>138, Lewis Street, Lafiaji-Obalende, Lagos.</p>
          </div>
          <div className='flex flex-col gap-2'>
            <div className="flex items-center gap-1">
                <div className="text-2xl md:text-4xl text-primary">
                  <LuHeartHandshake />
                </div>
                <span className='text-black-md text-xl md:text-2xl font-bold'>We are Social</span>
            </div>
            <div className='flex items-center gap-4 mt-3'>
              {socialIcons.map((icon, idx) => {
                return (
                  <a href="/" key={idx} className='p-3 rounded-full bg-primary size-fit'>
                    <span className='text-white text-xl md:text-2xl'>{icon}</span>
                  </a>
                )
              })}
            </div>
          </div>
          
        </div>
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-6 p-5 md:p-8 bg-white shadow-custom w-full md:w-1/2 rounded-3xl"
            data-aos="flip-right"
          >
          {/* Fullname Input */}
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullname", { required: true })}
              className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary w-full"
            />
            {errors.fullname && (
              <span className="text-red-500 text-sm">Full Name is required</span>
            )}

            {/* Email Address Input */}
            <input
              type="email"
              placeholder="Your Email Address"
              {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Valid email is required</span>
            )}

            {/* Subject Input */}
            <input
            type="text"
            placeholder="Subject"
            {...register("subject", { required: true })}
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
          />
            {errors.subject && (
              <span className="text-red-500 text-sm">Subject is required</span>
            )}

            {/* Message Input */}
            <textarea
              placeholder="Message"
              rows="3"
              {...register("message", { required: true })}
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm">Message is required</span>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-4 bg-primary text-white tracking-snug rounded-xl font-bold hover:focus:ring-primary transition hover:bg-white hover:border hover:border-primary hover:text-primary ease-in-out duration-70"
            >
              Send Message
            </button>
        </form>        
        <ToastContainer />
      </div>
    </div>
    <div className="bg-[#edf9f7] flex justify-center items-center max-w-full py-4 md:py-16 px-8 md:px-40 mb-12 md:mb-0" data-aos="fade-in">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5635779321665!2d3.4032497737292773!3d6.450032324015375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b3b367f1d15%3A0x4daeb8b8659d8355!2sLafiaji%20Secretariat!5e0!3m2!1sen!2sng!4v1731518805560!5m2!1sen!2sng"
        width="1195"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default ContactPage