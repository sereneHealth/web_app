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

const socialIcons = [<RiInstagramFill />, <FaFacebook />, <FaXTwitter />, <FaYoutube />]

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    toast.success(
      <>
        <strong>Message sent!</strong>
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
    console.log(data)
  }
  return (
    <>
    <Navbar />
    <div className="">
    <div className="relative w-full h-[75vh]">
      <img 
        src="/images/contact-bg.jpg" 
        alt="Contact Us Background" 
        className="w-full h-full object-cover" 
      />
      <div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"
      />
      <div 
        className="absolute inset-0 flex items-center justify-center text-center text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide uppercase">
          Contact Us
        </h1>
      </div>
    </div>
    <div className='bg-[#edf9f7] py-6 md:py-20 px-6 md:px-40'>
      <div className='flex flex-col md:flex-row justify-between mx-auto gap-6 md:gap-28'>
        <div className='flex flex-col gap-4 md:gap-8'>
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
            className="flex flex-col space-y-6 p-5 md:p-8 bg-white shadow-custom w-full rounded-3xl"
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
              placeholder="Email Address"
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
    </div>
    <Footer />
    </>
  )
}

export default ContactPage