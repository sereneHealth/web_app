// Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { brandlogo } from '../assets';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
          <div>
              <img src={brandlogo} alt="" width={100} height={100}/>
              </div>
            <span className="text-xl font-semibold">Sereneschealthinitiative</span>
          </div>
          <p className="text-gray-300">
          Sereneschealthinitiative is a social enterprise birthed with the mission to provide health education to pupils.
          </p>
        </div>
        
        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
          <div className="flex items-center bg-white rounded-full p-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-2 text-gray-800 rounded-l-full focus:outline-none"
            />
            <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600">
              SignUp
            </button>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaYoutube size={24} /></a>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-teal-500">Home</a></li>
              <li><a href="#" className="hover:text-teal-500">Impact Stories</a></li>
              <li><a href="#" className="hover:text-teal-500">Blog</a></li>
              <li><a href="#" className="hover:text-teal-500">Team</a></li>
              <li><a href="#" className="hover:text-teal-500">Vaccination Tracker</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 mt-8">
              <li><a href="#" className="hover:text-teal-500">Awards</a></li>
              <li><a href="#" className="hover:text-teal-500">Research and Publications</a></li>
              <li><a href="#" className="hover:text-teal-500">Digital Health Care</a></li>
              <li><a href="#" className="hover:text-teal-500">E-learning Platform</a></li>
              <li><a href="#" className="hover:text-teal-500">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>SERENE ©{new Date().getFullYear()}. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
