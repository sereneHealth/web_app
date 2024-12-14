// Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { brandlogo } from '../assets';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">        
        <div className='flex flex-col gap-4'>
          <div className="flex items-center space-x-2 md:space-x-4">           
            <img src={brandlogo} alt="" className='rounded-full w-12 md:w-16 h-12 md:h-16' />            
            <a href='/' className="text-base md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600">
              Serene Scheal Initiative
            </a>
          </div>
          <p className="text-gray-300 text-sm md:text-base w-full md:w-80">
            Serene Scheal Initiative is dedicated to empowering students through health education, fostering better health practices in schools.
          </p>
        </div>
        
        <div className='flex flex-col gap-4 md:gap-6'>
          <h3 className="text-lg font-semibold">Subscribe to our Newsletter</h3>
          <div className="flex items-center bg-white rounded-full overflow-hidden w-full md:w-5/6 pl-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-2 md:p-3 text-gray-800 text-sm md:text-base rounded-l-full focus:outline-none"
            />
            <button className="bg-teal-500 text-white p-2 md:p-3 rounded-full hover:bg-teal-600 shrink-0">
              SignUp
            </button>
          </div>

          <div className="flex space-x-4">
            <a href="https://www.facebook.com/Sereneschealinitiative?mibextid=ZbWKwL" className="text-gray-400 hover:text-white"><FaFacebookF size={24} /></a>
            <a href="https://twitter.com/Schoolhealthpro?t=gcW7VUk0nOFgZHknWulZwQ&s=09" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
            <a href="https://instagram.com/serene_scheal_initiative?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
            <a href="https://www.linkedin.com/company/serene-scheal-initiative/" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
          </div>
        </div>
        
        <div className='flex flex-col gap-4'>
          <h3 className="text-lg font-semibold">Quick Links</h3>

          <div className="grid grid-cols-2 gap-4">          
              <ul className="space-y-2 text-sm sm:text-base">
                <li><a href="/" className="hover:text-teal-500">Home</a></li>
                <li><a href="#" className="hover:text-teal-500">Impact Stories</a></li>
                <li><a href="#" className="hover:text-teal-500">Blog</a></li>
                <li><a href="#" className="hover:text-teal-500">Team</a></li>
                <li><a href="#" className="hover:text-teal-500">Vaccination Tracker</a></li>
              </ul>       
              <ul className="space-y-2 text-sm sm:text-base">
                <li><a href="#" className="hover:text-teal-500">Awards</a></li>
                <li><a href="#" className="hover:text-teal-500">Research and Publications</a></li>
                <li><a href="#" className="hover:text-teal-500">Digital Health Care</a></li>
                <li><a href="#" className="hover:text-teal-500">E-learning Platform</a></li>
                <li><a href="#" className="hover:text-teal-500">Contact Us</a></li>
              </ul>          
            </div>
        </div>        
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
          <p>SERENE ©{new Date().getFullYear()}. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
