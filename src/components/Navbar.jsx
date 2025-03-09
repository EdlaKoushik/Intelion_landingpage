import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null); // Track which section is active

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSectionHover = (section) => {
    setActiveSection(section);
  };

  const handleSectionLeave = () => {
    setActiveSection(null);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-10 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src="./logo.png" alt="Intelion" className="h-8 mr-2" />
        </div>

        {/* Hamburger Menu (Mobile Only) */}
        <button
          onClick={toggleMenu}
          className="text-gray-800 sm:hidden focus:outline-none"
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>

        {/* Navbar Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex items-center space-x-6 text-sm font-medium text-gray-800 transition-all duration-300`}
        >
          <li>
            <a href="#" className="text-red-500 font-bold transition">
              Home
            </a>
          </li>

          {/* Services */}
          <li
            className="relative group"
            onMouseEnter={() => handleSectionHover("services")}
            onMouseLeave={handleSectionLeave}
          >
            <a href="#" className="hover:text-red-500 transition">
              Services
            </a>
          </li>

          {/* Market Research */}
          <li
            className="relative group"
            onMouseEnter={() => handleSectionHover("market-research")}
            onMouseLeave={handleSectionLeave}
          >
            <a href="#" className="hover:text-red-500 transition">
              Market Research
            </a>
          </li>

          {/* Company */}
          <li
            className="relative group"
            onMouseEnter={() => handleSectionHover("company")}
            onMouseLeave={handleSectionLeave}
          >
            <a href="#" className="hover:text-red-500 transition">
              Company
            </a>
          </li>

          {/* Brands */}
          <li
            className="relative group"
            onMouseEnter={() => handleSectionHover("brands")}
            onMouseLeave={handleSectionLeave}
          >
            <a href="#" className="hover:text-red-500 transition">
              Brands
            </a>
          </li>
        </ul>

        {/* Right Section */}
        <div className="hidden sm:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button className="px-2 py-1 text-xs bg-gray-100 hover:text-red-600 hover:bg-red-100 rounded-md transition duration-300 flex items-center">
              Client Support →
            </button>
            <p className="text-gray-800">0612-2500971</p>
          </div>
          <button className="px-4 py-2 text-white bg-black rounded-md transition duration-300 hover:bg-gray-800">
            Contact Us
          </button>
        </div>
      </div>

      {/* Mega Menu (Expanded Section) */}
      {activeSection && (
        <div
          className="absolute left-0 w-full bg-white shadow-lg py-6"
          onMouseEnter={() => handleSectionHover(activeSection)}
          onMouseLeave={handleSectionLeave}
        >
          <div className="container mx-auto px-4 sm:px-10">
            {/* Services Section */}
            {activeSection === "services" && (
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">Services</h3>
                  <ul className="space-y-2">
                    {[
                      "Digital Strategy & Design",
                      "Application Development and Management",
                      "Cloud & Infrastructure",
                      "Software-as-a-Service",
                      "Digital & Brand Marketing",
                      "Generative AI & Business Intelligence",
                    ].map((service, index) => (
                      <li key={index}>
                        <a href="#" className="text-gray-700 hover:text-red-500">
                          {service}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Industry Inside Campus - CIED</h3>
                  <ul className="space-y-2">
                    {[
                      "Digital Campus",
                      "Unity Education",
                      "Manufacturing/IOT",
                      "Aerospace",
                    ].map((item, index) => (
                      <li key={index}>
                        <a href="#" className="text-gray-700 hover:text-red-500">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Industry Focus</h3>
                  <ul className="space-y-2">
                    {[
                      "Industry Manufacturing",
                      "Transportation Logistics",
                      "Healthcare",
                      "Banks & Insurance",
                      "Consulting Providers",
                      "Non Profit",
                    ].map((item, index) => (
                      <li key={index}>
                        <a href="#" className="text-gray-700 hover:text-red-500">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Market Research Section */}
            {activeSection === "market-research" && (
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">Market Reports</h3>
                  <ul className="space-y-2">
                    {[
                      "Consumer Product Reports",
                      "Packaging Industry Reports",
                      "IT & Communications Technology Reports",
                      "Food & Beverage Reports",
                      "Services and Utilities Reports",
                      "Oil and Gas Reports",
                      "Semiconductor & Electronics Reports",
                      "Travel and Tourism Reports",
                    ].map((report, index) => (
                      <li key={index}>
                        <a href="#" className="text-gray-700 hover:text-red-500">
                          {report}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Industry Focus</h3>
                  <ul className="space-y-2">
                    {[
                      "Healthcare Reports",
                      "Chemicals & Materials",
                      "Energy & Power",
                      "Automotive Reports",
                    ].map((item, index) => (
                      <li key={index}>
                        <a href="#" className="text-gray-700 hover:text-red-500">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Company Section */}
            {activeSection === "company" && (
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">Company</h3>
                  <ul className="space-y-2">
                    {[
                      "Events",
                      "Why us",
                      "Team",
                      "Careers",
                      "Partners & Certifications",
                      "Reviews & Awards",
                    ].map((item, index) => (
                      <li key={index}>
                        <a href="#" className="text-gray-700 hover:text-red-500">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Brands Section */}
            {activeSection === "brands" && (
              <div className="grid grid-cols-2 gap-8">
                <div>
                  
                  <ul className="space-y-2">
                    {[
                      "Adobe",
                      
                    ].map((brand, index) => (
                      <li key={index}>
                        <a href="#" className="text-gray-700 hover:text-red-500">
                          {brand}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-white shadow-md">
          <ul className="text-center space-y-4 py-4 text-gray-800">
            <li>
              <a href="#" className="block hover:text-red-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-red-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-red-500 transition">
                Industries
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-red-500 transition">
                Market Research
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-red-500 transition">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-red-500 transition">
                Brands
              </a>
            </li>
            <li className="py-2">
              <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;