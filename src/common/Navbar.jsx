import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { brandlogo } from "../assets";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-white shadow-md sticky top-0 z-10">
      {/* Logo */}
      <div className="flex items-center">
        <img src={brandlogo} alt="" width={60} height={60}/>
        <span className="">Serenescheal</span>
      </div>

      {/* Desktop Nav Items */}
      <ul className="hidden md:flex space-x-8">
        <NavItems activeTab={activeTab} onTabClick={handleTabClick} />
      </ul>

      {/* Contact Us Button */}
      <button className="hidden md:block border border-teal-500 text-teal-500 px-4 py-2 rounded-full hover:bg-teal-50">
        <a href="/contact">Contact Us</a>
      </button>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center" onClick={toggleMenu}>
        <div className="flex flex-col justify-center items-center space-y-1 w-6 h-6 cursor-pointer">
          <span
            className={`block h-0.5 w-full bg-gray-800 transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-gray-800 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-gray-800 transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`fixed inset-y-0 left-0 bg-white w-3/4 max-w-xs z-50 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden shadow-lg`}
      >
        <div className="p-4">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            Close
          </button>
        </div>
        <ul className="mt-4 space-y-4 px-4">
          <NavItems activeTab={activeTab} onTabClick={handleTabClick} />
        </ul>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black opacity-50 md:hidden z-40"
        ></div>
      )}
    </nav>
  );
};

const NavItems = ({ activeTab, onTabClick }) => (
  <>
    <li>
      <a
        href="/"
        className={`flex items-center ${
          activeTab === "home" ? "text-teal-500" : "text-gray-800"
        } hover:text-teal-500`}
        onClick={() => onTabClick("home")}
      >
        Home
      </a>
    </li>
    <li className="relative group">
      <a
        href="#"
        className={`flex items-center ${
          activeTab === "about" ? "text-teal-500" : "text-gray-800"
        } hover:text-teal-500`}
        onClick={() => onTabClick("about")}
      >
        About
        <FaChevronDown className="ml-1 transform transition-transform group-hover:rotate-180" />
      </a>
      <div className="absolute top-full left-0 hidden w-48 bg-white border border-gray-200 shadow-lg rounded-md group-hover:block">
        <a href="/about-us" className="block px-4 py-2 hover:text-teal-500">
          About Us
        </a>
        <hr />
        <a href="#" className="block px-4 py-2 hover:text-teal-500">
          Our Mission
        </a>
      </div>
    </li>
    <li className="relative group">
      <a
        href="#"
        className={`flex items-center ${
          activeTab === "digital" ? "text-teal-500" : "text-gray-800"
        } hover:text-teal-500`}
        onClick={() => onTabClick("digital")}
      >
        Digital Innovations
        <FaChevronDown className="ml-1 transform transition-transform group-hover:rotate-180" />
      </a>
      <div className="absolute top-full left-0 hidden w-48 bg-white border border-gray-200 shadow-lg rounded-md group-hover:block">
        <a href="#" className="block px-4 py-2 hover:text-teal-500">
          Innovation 1
        </a>
        <hr />
        <a href="#" className="block px-4 py-2 hover:text-teal-500">
          Innovation 2
        </a>
      </div>
    </li>
    <li className="relative group">
      <a
        href="#"
        className={`flex items-center ${
          activeTab === "programs" ? "text-teal-500" : "text-gray-800"
        } hover:text-teal-500`}
        onClick={() => onTabClick("programs")}
      >
        Programs and Products
        <FaChevronDown className="ml-1 transform transition-transform group-hover:rotate-180" />
      </a>
      <div className="absolute top-full left-0 hidden w-48 bg-white border border-gray-200 shadow-lg rounded-md group-hover:block">
        <a href="#" className="block px-4 py-2 hover:text-teal-500">
          Program 1
        </a>
        <hr />
        <a href="#" className="block px-4 py-2 hover:text-teal-500">
          Program 2
        </a>
      </div>
    </li>
    <li className="relative group">
      <a
        href="#"
        className={`flex items-center ${
          activeTab === "research" ? "text-teal-500" : "text-gray-800"
        } hover:text-teal-500`}
        onClick={() => onTabClick("research")}
      >
        Research and Publications
        <FaChevronDown className="ml-1 transform transition-transform group-hover:rotate-180" />
      </a>

      <div className="absolute top-full left-0 hidden w-48 bg-white border border-gray-200 shadow-lg rounded-md group-hover:block">
        <a href="/blog" className="block px-4 py-2 hover:text-teal-500">
          Publications
        </a>
        <hr />
        <a href="#" className="block px-4 py-2 hover:text-teal-500">
          Research 2
        </a>
      </div>
    </li>
  </>
);

export default Navbar;
