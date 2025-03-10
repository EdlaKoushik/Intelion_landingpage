// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState(null); // Track which section is active

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const handleSectionHover = (section) => {
//     setActiveSection(section);
//   };

//   const handleSectionLeave = () => {
//     setActiveSection(null);
//   };

//   return (
//     <nav className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="flex items-center justify-between px-4 sm:px-10 py-4 max-w-7xl mx-auto">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img src="./logo.png" alt="Intelion" className="h-8 mr-2" />
//         </div>

//         {/* Hamburger Menu (Mobile Only) */}
//         <button
//           onClick={toggleMenu}
//           className="text-gray-800 sm:hidden focus:outline-none"
//           aria-label="Toggle navigation"
//         >
//           {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
//         </button>

//         {/* Navbar Links */}
//         <ul
//           className={`${
//             isOpen ? "block" : "hidden"
//           } sm:flex items-center space-x-6 text-sm font-medium text-gray-800 transition-all duration-300`}
//         >
//           <li>
//             <a href="#" className="text-red-500 font-bold transition">
//               Home
//             </a>
//           </li>

//           {/* Services */}
//           <li
//             className="relative group"
//             onMouseEnter={() => handleSectionHover("services")}
//             onMouseLeave={handleSectionLeave}
//           >
//             <a href="#" className="hover:text-red-500 transition">
//               Services
//             </a>
//           </li>

//           {/* Market Research */}
//           <li
//             className="relative group"
//             onMouseEnter={() => handleSectionHover("market-research")}
//             onMouseLeave={handleSectionLeave}
//           >
//             <a href="#" className="hover:text-red-500 transition">
//               Market Research
//             </a>
//           </li>

//           {/* Company */}
//           <li
//             className="relative group"
//             onMouseEnter={() => handleSectionHover("company")}
//             onMouseLeave={handleSectionLeave}
//           >
//             <a href="#" className="hover:text-red-500 transition">
//               Company
//             </a>
//           </li>

//           {/* Brands */}
//           <li
//             className="relative group"
//             onMouseEnter={() => handleSectionHover("brands")}
//             onMouseLeave={handleSectionLeave}
//           >
//             <a href="#" className="hover:text-red-500 transition">
//               Brands
//             </a>
//           </li>
//         </ul>

//         {/* Right Section */}
//         <div className="hidden sm:flex items-center space-x-4">
//           <div className="flex items-center space-x-2">
//             <button className="px-2 py-1 text-xs bg-gray-100 hover:text-red-600 hover:bg-red-100 rounded-md transition duration-300 flex items-center">
//               Client Support →
//             </button>
//             <p className="text-gray-800">0612-2500971</p>
//           </div>
//           <button className="px-4 py-2 text-white bg-black rounded-md transition duration-300 hover:bg-gray-800">
//             Contact Us
//           </button>
//         </div>
//       </div>

//       {/* Mega Menu (Expanded Section) */}
//       {activeSection && (
//         <div
//           className="absolute left-0 w-full bg-white shadow-lg py-6"
//           onMouseEnter={() => handleSectionHover(activeSection)}
//           onMouseLeave={handleSectionLeave}
//         >
//           <div className="container mx-auto px-4 sm:px-10">
//             {/* Services Section */}
//             {activeSection === "services" && (
//               <div className="grid grid-cols-3 gap-8">
//                 <div>
//                   <h3 className="text-lg font-bold mb-4">Services</h3>
//                   <ul className="space-y-2">
//                     {[
//                       "Digital Strategy & Design",
//                       "Application Development and Management",
//                       "Cloud & Infrastructure",
//                       "Software-as-a-Service",
//                       "Digital & Brand Marketing",
//                       "Generative AI & Business Intelligence",
//                     ].map((service, index) => (
//                       <li key={index}>
//                         <a href="#" className="text-gray-700 hover:text-red-500">
//                           {service}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold mb-4">Industry Inside Campus - CIED</h3>
//                   <ul className="space-y-2">
//                     {[
//                       "Digital Campus",
//                       "Unity Education",
//                       "Manufacturing/IOT",
//                       "Aerospace",
//                     ].map((item, index) => (
//                       <li key={index}>
//                         <a href="#" className="text-gray-700 hover:text-red-500">
//                           {item}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold mb-4">Industry Focus</h3>
//                   <ul className="space-y-2">
//                     {[
//                       "Industry Manufacturing",
//                       "Transportation Logistics",
//                       "Healthcare",
//                       "Banks & Insurance",
//                       "Consulting Providers",
//                       "Non Profit",
//                     ].map((item, index) => (
//                       <li key={index}>
//                         <a href="#" className="text-gray-700 hover:text-red-500">
//                           {item}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             )}

//             {/* Market Research Section */}
//             {activeSection === "market-research" && (
//               <div className="grid grid-cols-2 gap-8">
//                 <div>
//                   <h3 className="text-lg font-bold mb-4">Market Reports</h3>
//                   <ul className="space-y-2">
//                     {[
//                       "Consumer Product Reports",
//                       "Packaging Industry Reports",
//                       "IT & Communications Technology Reports",
//                       "Food & Beverage Reports",
//                       "Services and Utilities Reports",
//                       "Oil and Gas Reports",
//                       "Semiconductor & Electronics Reports",
//                       "Travel and Tourism Reports",
//                     ].map((report, index) => (
//                       <li key={index}>
//                         <a href="#" className="text-gray-700 hover:text-red-500">
//                           {report}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold mb-4">Industry Focus</h3>
//                   <ul className="space-y-2">
//                     {[
//                       "Healthcare Reports",
//                       "Chemicals & Materials",
//                       "Energy & Power",
//                       "Automotive Reports",
//                     ].map((item, index) => (
//                       <li key={index}>
//                         <a href="#" className="text-gray-700 hover:text-red-500">
//                           {item}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             )}

//             {/* Company Section */}
//             {activeSection === "company" && (
//               <div className="grid grid-cols-2 gap-8">
//                 <div>
//                   <h3 className="text-lg font-bold mb-4">Company</h3>
//                   <ul className="space-y-2">
//                     {[
//                       "Events",
//                       "Why us",
//                       "Team",
//                       "Careers",
//                       "Partners & Certifications",
//                       "Reviews & Awards",
//                     ].map((item, index) => (
//                       <li key={index}>
//                         <a href="#" className="text-gray-700 hover:text-red-500">
//                           {item}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             )}

//             {/* Brands Section */}
//             {activeSection === "brands" && (
//               <div className="grid grid-cols-2 gap-8">
//                 <div>
                  
//                   <ul className="space-y-2">
//                     {[
//                       "Adobe",
                      
//                     ].map((brand, index) => (
//                       <li key={index}>
//                         <a href="#" className="text-gray-700 hover:text-red-500">
//                           {brand}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="sm:hidden bg-white shadow-md">
//           <ul className="text-center space-y-4 py-4 text-gray-800">
//             <li>
//               <a href="#" className="block hover:text-red-500 transition">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block hover:text-red-500 transition">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block hover:text-red-500 transition">
//                 Industries
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block hover:text-red-500 transition">
//                 Market Research
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block hover:text-red-500 transition">
//                 Company
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block hover:text-red-500 transition">
//                 Brands
//               </a>
//             </li>
//             <li className="py-2">
//               <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
//                 Contact Us
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


//with plain css 
// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState(null); // Track which section is active

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const handleSectionHover = (section) => {
//     setActiveSection(section);
//   };

//   const handleSectionLeave = () => {
//     setActiveSection(null);
//   };

//   return (
//     <nav className="navbar">
//       <style>
//         {`
//           .navbar {
//             background-color: white;
//             box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
//             position: sticky;
//             top: 0;
//             z-index: 50;
//           }
//           .navbar-container {
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//             padding: 0 1rem;
//             max-width: 1280px;
//             margin: 0 auto;
//           }
//           .navbar-logo img {
//             height: 2rem;
//             margin-right: 0.5rem;
//           }
//           .navbar-toggle {
//             color: #1a202c;
//             display: none;
//           }
//           .navbar-links {
//             display: flex;
//             align-items: center;
//             gap: 1.5rem;
//             font-size: 0.875rem;
//             font-weight: 500;
//             color: #1a202c;
//           }
//           .navbar-links a {
//             color: #1a202c;
//             transition: color 0.3s;
//           }
//           .navbar-links a:hover {
//             color: #ef4444;
//           }
//           .navbar-links .active {
//             color: #ef4444;
//             font-weight: bold;
//           }
//           .navbar-right {
//             display: flex;
//             align-items: center;
//             gap: 1rem;
//           }
//           .navbar-right button {
//             padding: 0.25rem 0.5rem;
//             font-size: 0.75rem;
//             background-color: #f3f4f6;
//             color: #1a202c;
//             border-radius: 0.375rem;
//             transition: all 0.3s;
//           }
//           .navbar-right button:hover {
//             color: #dc2626;
//             background-color: #fee2e2;
//           }
//           .navbar-right .contact-btn {
//             padding: 0.5rem 1rem;
//             background-color: black;
//             color: white;
//             border-radius: 0.375rem;
//             transition: background-color 0.3s;
//           }
//           .navbar-right .contact-btn:hover {
//             background-color: #1f2937;
//           }
//           .mega-menu {
//             position: absolute;
//             left: 0;
//             width: 100%;
//             background-color: white;
//             box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//             padding: 1.5rem 0;
//           }
//           .mega-menu .container {
//             max-width: 1280px;
//             margin: 0 auto;
//             padding: 0 1rem;
//           }
//           .mega-menu .grid {
//             display: grid;
//             gap: 2rem;
//           }
//           .mega-menu h3 {
//             font-size: 1.125rem;
//             font-weight: bold;
//             margin-bottom: 1rem;
//           }
//           .mega-menu ul {
//             display: flex;
//             flex-direction: column;
//             gap: 0.5rem;
//           }
//           .mega-menu a {
//             color: #374151;
//             transition: color 0.3s;
//           }
//           .mega-menu a:hover {
//             color: #ef4444;
//           }
//           .mobile-menu {
//             display: none;
//             background-color: white;
//             box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//             text-align: center;
//             padding: 1rem 0;
//           }
//           .mobile-menu ul {
//             display: flex;
//             flex-direction: column;
//             gap: 1rem;
//           }
//           .mobile-menu a {
//             color: #1a202c;
//             transition: color 0.3s;
//           }
//           .mobile-menu a:hover {
//             color: #ef4444;
//           }
//           .mobile-menu button {
//             width: 100%;
//             background-color: black;
//             color: white;
//             padding: 0.5rem;
//             border-radius: 0.375rem;
//             transition: background-color 0.3s;
//           }
//           .mobile-menu button:hover {
//             background-color: #1f2937;
//           }
//           @media (max-width: 640px) {
//             .navbar-toggle {
//               display: block;
//             }
//             .navbar-links {
//               display: none;
//             }
//             .navbar-right {
//               display: none;
//             }
//             .mobile-menu {
//               display: block;
//             }
//           }
//         `}
//       </style>

//       <div className="navbar-container">
//         {/* Logo */}
//         <div className="navbar-logo">
//           <img src="./logo.png" alt="Intelion" />
//         </div>

//         {/* Hamburger Menu (Mobile Only) */}
//         <button
//           onClick={toggleMenu}
//           className="navbar-toggle"
//           aria-label="Toggle navigation"
//         >
//           {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
//         </button>

//         {/* Navbar Links */}
//         <ul className={`navbar-links ${isOpen ? "block" : "hidden"}`}>
//           <li>
//             <a href="#" className="active">
//               Home
//             </a>
//           </li>
//           <li
//             onMouseEnter={() => handleSectionHover("services")}
//             onMouseLeave={handleSectionLeave}
//           >
//             <a href="#">Services</a>
//           </li>
//           <li
//             onMouseEnter={() => handleSectionHover("market-research")}
//             onMouseLeave={handleSectionLeave}
//           >
//             <a href="#">Market Research</a>
//           </li>
//           <li
//             onMouseEnter={() => handleSectionHover("company")}
//             onMouseLeave={handleSectionLeave}
//           >
//             <a href="#">Company</a>
//           </li>
//           <li
//             onMouseEnter={() => handleSectionHover("brands")}
//             onMouseLeave={handleSectionLeave}
//           >
//             <a href="#">Brands</a>
//           </li>
//         </ul>

//         {/* Right Section */}
//         <div className="navbar-right">
//           <div className="flex items-center gap-2">
//             <button>Client Support →</button>
//             <p>0612-2500971</p>
//           </div>
//           <button className="contact-btn">Contact Us</button>
//         </div>
//       </div>

//       {/* Mega Menu (Expanded Section) */}
//       {activeSection && (
//         <div
//           className="mega-menu"
//           onMouseEnter={() => handleSectionHover(activeSection)}
//           onMouseLeave={handleSectionLeave}
//         >
//           <div className="container">
//             {activeSection === "services" && (
//               <div className="grid grid-cols-3 gap-8">
//                 {/* Services Content */}
//               </div>
//             )}
//             {activeSection === "market-research" && (
//               <div className="grid grid-cols-2 gap-8">
//                 {/* Market Research Content */}
//               </div>
//             )}
//             {activeSection === "company" && (
//               <div className="grid grid-cols-2 gap-8">
//                 {/* Company Content */}
//               </div>
//             )}
//             {activeSection === "brands" && (
//               <div className="grid grid-cols-2 gap-8">
//                 {/* Brands Content */}
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="mobile-menu">
//           <ul>
//             <li>
//               <a href="#">Home</a>
//             </li>
//             <li>
//               <a href="#">Services</a>
//             </li>
//             <li>
//               <a href="#">Industries</a>
//             </li>
//             <li>
//               <a href="#">Market Research</a>
//             </li>
//             <li>
//               <a href="#">Company</a>
//             </li>
//             <li>
//               <a href="#">Brands</a>
//             </li>
//             <li>
//               <button>Contact Us</button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


//with updated plain css
// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState(null); // Track which section is active

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const handleSectionHover = (section) => {
//     setActiveSection(section);
//   };

//   const handleSectionLeave = () => {
//     setActiveSection(null);
//   };

//   return (
//     <nav className="navbar">
//       <style>
//         {`
//           .navbar {
//             background-color: white;
//             box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
//             position: sticky;
//             top: 0;
//             z-index: 50;
//           }
//           .navbar-container {
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//             padding: 0 1rem;
//             max-width: 1280px;
//             margin: 0 auto;
//           }
//           .navbar-logo img {
//             height: 2rem;
//             margin-right: 0.5rem;
//           }
//           .navbar-toggle {
//             color: #1a202c;
//             display: none;
//           }
//           .navbar-links {
//             display: flex;
//             align-items: center;
//             gap: 1.5rem;
//             font-size: 0.875rem;
//             font-weight: 500;
//             color: #1a202c;
//           }
//           .navbar-links a {
//             color: #1a202c;
//             transition: color 0.3s;
//           }
//           .navbar-links a:hover {
//             color: #ef4444;
//           }
//           .navbar-links .active {
//             color: #ef4444;
//             font-weight: bold;
//           }
//           .navbar-right {
//             display: flex;
//             align-items: center;
//             gap: 1rem;
//           }
//           .navbar-right button {
//             padding: 0.25rem 0.5rem;
//             font-size: 0.75rem;
//             background-color: #f3f4f6;
//             color: #1a202c;
//             border-radius: 0.375rem;
//             transition: all 0.3s;
//           }
//           .navbar-right button:hover {
//             color: #dc2626;
//             background-color: #fee2e2;
//           }
//           .navbar-right .contact-btn {
//             padding: 0.5rem 1rem;
//             background-color: black;
//             color: white;
//             border-radius: 0.375rem;
//             transition: background-color 0.3s;
//           }
//           .navbar-right .contact-btn:hover {
//             background-color: #1f2937;
//           }
//           .mega-menu {
//             position: absolute;
//             left: 0;
//             width: 100%;
//             background-color: white;
//             box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//             padding: 1.5rem 0;
//           }
//           .mega-menu .container {
//             max-width: 1280px;
//             margin: 0 auto;
//             padding: 0 1rem;
//           }
//           .mega-menu .grid {
//             display: grid;
//             gap: 2rem;
//           }
//           .mega-menu h3 {
//             font-size: 1.125rem;
//             font-weight: bold;
//             margin-bottom: 1rem;
//           }
//           .mega-menu ul {
//             display: flex;
//             flex-direction: column;
//             gap: 0.5rem;
//           }
//           .mega-menu a {
//             color: #374151;
//             transition: color 0.3s;
//           }
//           .mega-menu a:hover {
//             color: #ef4444;
//           }
//           .mobile-menu {
//             display: none;
//             background-color: white;
//             box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//             text-align: center;
//             padding: 1rem 0;
//           }
//           .mobile-menu ul {
//             display: flex;
//             flex-direction: column;
//             gap: 1rem;
//           }
//           .mobile-menu a {
//             color: #1a202c;
//             transition: color 0.3s;
//           }
//           .mobile-menu a:hover {
//             color: #ef4444;
//           }
//           .mobile-menu button {
//             width: 100%;
//             background-color: black;
//             color: white;
//             padding: 0.5rem;
//             border-radius: 0.375rem;
//             transition: background-color 0.3s;
//           }
//           .mobile-menu button:hover {
//             background-color: #1f2937;
//           }
//           @media (max-width: 640px) {
//             .navbar-toggle {
//               display: block;
//             }
//             .navbar-links {
//               display: none;
//             }
//             .navbar-right {
//               display: none;
//             }
//             .mobile-menu {
//               display: block;
//             }
//           }
//         `}
//       </style>

//       <div className="navbar-container">
//         {/* Logo */}
//         <div className="navbar-logo">
//           <img src="./logo.png" alt="Intelion" />
//         </div>

//         {/* Hamburger Menu (Mobile Only) */}
//         <button
//           onClick={toggleMenu}
//           className="navbar-toggle"
//           aria-label="Toggle navigation"
//         >
//           {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
//         </button>

//         {/* Navbar Links */}
//         <ul className={`navbar-links ${isOpen ? "block" : "hidden"}`}>
//           <li>
//             <a href="#" className="active">
//               Home
//             </a>
//           </li>
//           <li
//             onMouseEnter={() => handleSectionHover("services")}
//             onMouseLeave={handleSectionLeave}
//           >
//             <a href="#">Services</a>
//           </li>
//           <li
//             onMouseEnter={() => handleSectionHover("market-research")}
//             onMouseLeave={handleSectionLeave}
//           >
//             <a href="#">Market Research</a>
//           </li>
//           <li
//             onMouseEnter={() => handleSectionHover("company")}
//             onMouseLeave={handleSectionLeave}
//           >
//             <a href="#">Company</a>
//           </li>
//           <li
//             onMouseEnter={() => handleSectionHover("brands")}
//             onMouseLeave={handleSectionLeave}
//           >
//             <a href="#">Brands</a>
//           </li>
//         </ul>

//         {/* Right Section */}
//         <div className="navbar-right">
//           <div className="flex items-center gap-2">
//             <button>Client Support →</button>
//             <p>0612-2500971</p>
//           </div>
//           <button className="contact-btn">Contact Us</button>
//         </div>
//       </div>

//       {/* Mega Menu (Expanded Section) */}
//       {activeSection && (
//         <div
//           className="mega-menu"
//           onMouseEnter={() => handleSectionHover(activeSection)}
//           onMouseLeave={handleSectionLeave}
//         >
//           <div className="container">
//             {/* Services Section */}
//             {activeSection === "services" && (
//               <div className="grid grid-cols-3 gap-8">
//                 <div>
//                   <h3>Services</h3>
//                   <ul>
//                     {[
//                       "Digital Strategy & Design",
//                       "Application Development and Management",
//                       "Cloud & Infrastructure",
//                       "Software-as-a-Service",
//                       "Digital & Brand Marketing",
//                       "Generative AI & Business Intelligence",
//                     ].map((service, index) => (
//                       <li key={index}>
//                         <a href="#">{service}</a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div>
//                   <h3>Industry Inside Campus - CIED</h3>
//                   <ul>
//                     {[
//                       "Digital Campus",
//                       "Unity Education",
//                       "Manufacturing/IOT",
//                       "Aerospace",
//                     ].map((item, index) => (
//                       <li key={index}>
//                         <a href="#">{item}</a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div>
//                   <h3>Industry Focus</h3>
//                   <ul>
//                     {[
//                       "Industry Manufacturing",
//                       "Transportation Logistics",
//                       "Healthcare",
//                       "Banks & Insurance",
//                       "Consulting Providers",
//                       "Non Profit",
//                     ].map((item, index) => (
//                       <li key={index}>
//                         <a href="#">{item}</a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             )}

//             {/* Market Research Section */}
//             {activeSection === "market-research" && (
//               <div className="grid grid-cols-2 gap-8">
//                 <div>
//                   <h3>Market Reports</h3>
//                   <ul>
//                     {[
//                       "Consumer Product Reports",
//                       "Packaging Industry Reports",
//                       "IT & Communications Technology Reports",
//                       "Food & Beverage Reports",
//                       "Services and Utilities Reports",
//                       "Oil and Gas Reports",
//                       "Semiconductor & Electronics Reports",
//                       "Travel and Tourism Reports",
//                     ].map((report, index) => (
//                       <li key={index}>
//                         <a href="#">{report}</a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div>
//                   <h3>Industry Focus</h3>
//                   <ul>
//                     {[
//                       "Healthcare Reports",
//                       "Chemicals & Materials",
//                       "Energy & Power",
//                       "Automotive Reports",
//                     ].map((item, index) => (
//                       <li key={index}>
//                         <a href="#">{item}</a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             )}

//             {/* Company Section */}
//             {activeSection === "company" && (
//               <div className="grid grid-cols-2 gap-8">
//                 <div>
//                   <h3>Company</h3>
//                   <ul>
//                     {[
//                       "Events",
//                       "Why us",
//                       "Team",
//                       "Careers",
//                       "Partners & Certifications",
//                       "Reviews & Awards",
//                     ].map((item, index) => (
//                       <li key={index}>
//                         <a href="#">{item}</a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             )}

//             {/* Brands Section */}
//             {activeSection === "brands" && (
//               <div className="grid grid-cols-2 gap-8">
//                 <div>
                  
//                   <ul>
//                     {["Adobe"].map((brand, index) => (
//                       <li key={index}>
//                         <a href="#">{brand}</a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="mobile-menu">
//           <ul>
//             <li>
//               <a href="#">Home</a>
//             </li>
//             <li>
//               <a href="#">Services</a>
//             </li>
//             <li>
//               <a href="#">Industries</a>
//             </li>
//             <li>
//               <a href="#">Market Research</a>
//             </li>
//             <li>
//               <a href="#">Company</a>
//             </li>
//             <li>
//               <a href="#">Brands</a>
//             </li>
//             <li>
//               <button>Contact Us</button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
// import React from 'react';

// const HeroSection = () => {
//   return (
//     <>
//       <style>
//         {`
//           /* General Styles */
//           .hero-section {
//             background-color: white;
//             padding: 2rem 1rem;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//           }
//           @media (min-width: 768px) {
//             .hero-section {
//               padding: 4rem 2rem;
//             }
//           }

//           .hero-container {
//             max-width: 1280px;
//             margin: 0 auto;
//             display: grid;
//             gap: 3rem;
//             align-items: center;
//           }
//           @media (min-width: 768px) {
//             .hero-container {
//               grid-template-columns: 1fr 1fr;
//             }
//           }

//           .hero-text {
//             text-align: center;
//           }
//           @media (min-width: 768px) {
//             .hero-text {
//               text-align: left;
//             }
//           }

//           .hero-text h2 {
//             font-size: 1.875rem;
//             font-weight: 800;
//             color: #1a202c;
//             line-height: 1.375;
//           }
//           @media (min-width: 768px) {
//             .hero-text h2 {
//               font-size: 3rem;
//             }
//           }

//           .hero-text p {
//             margin-top: 1rem;
//             font-size: 1rem;
//             color: #4a5568;
//           }
//           @media (min-width: 768px) {
//             .hero-text p {
//               font-size: 1.125rem;
//             }
//           }

//           .hero-buttons {
//             margin-top: 2rem;
//             display: flex;
//             flex-direction: column;
//             gap: 1rem;
//           }
//           @media (min-width: 768px) {
//             .hero-buttons {
//               flex-direction: row;
//               gap: 1rem;
//             }
//           }

//           .hero-buttons button {
//             padding: 0.5rem 1rem;
//             border-radius: 0.375rem;
//             font-weight: 500;
//             box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//             cursor: pointer;
//             transition: background-color 0.3s;
//           }

//           .hero-buttons button:first-child {
//             background-color: #ef4444;
//             color: white;
//           }

//           .hero-buttons button:first-child:hover {
//             background-color: #dc2626;
//           }

//           .hero-buttons button:last-child {
//             background-color: black;
//             color: white;
//           }

//           .hero-buttons button:last-child:hover {
//             background-color: #1a202c;
//           }

//           .hero-image {
//             position: relative;
//           }

//           .hero-image div {
//             overflow: hidden;
//             border-radius: 0.5rem;
//             box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//             clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
//           }

//           .hero-image img {
//             width: 100%;
//             height: auto;
//             object-fit: cover;
//             transition: transform 0.3s;
//           }

//           .hero-image img:hover {
//             transform: scale(1.05);
//           }

//           .divider {
//             border-top: 2px solid #e5e7eb;
//             margin: 2rem auto;
//             max-width: 1280px;
//           }

//           .stats-section {
//             background-color: white;
//             padding: 2rem 1rem;
//           }

//           .stats-grid {
//             max-width: 1280px;
//             margin: 0 auto;
//             display: grid;
//             gap: 1.5rem;
//             text-align: center;
//           }
//           @media (min-width: 768px) {
//             .stats-grid {
//               grid-template-columns: repeat(6, 1fr);
//             }
//           }

//           .stats-grid div {
//             padding: 1rem;
//           }

//           .stats-grid p {
//             font-size: 0.75rem;
//             color: #6b7280;
//           }

//           .stats-grid h3 {
//             font-size: 1.5rem;
//             font-weight: 700;
//             color: #1a202c;
//           }
//           @media (min-width: 768px) {
//             .stats-grid h3 {
//               font-size: 2.25rem;
//             }
//           }

//           .stats-grid .stars {
//             color: #ef4444;
//             font-size: 0.875rem;
//             font-weight: 700;
//           }
//           @media (min-width: 768px) {
//             .stats-grid .stars {
//               font-size: 1.125rem;
//             }
//           }

//           .what-we-do-section {
//             background-color: black;
//             color: white;
//             padding: 3rem 1rem;
//             text-align: center;
//           }

//           .what-we-do-section p {
//             color: #fbbf24;
//             font-size: 0.875rem;
//             font-weight: 600;
//             margin-bottom: 1rem;
//           }

//           .what-we-do-section h2 {
//             font-size: 1.875rem;
//             font-weight: 800;
//             line-height: 1.375;
//           }
//           @media (min-width: 768px) {
//             .what-we-do-section h2 {
//               font-size: 2.25rem;
//             }
//           }

//           /* Services Section */
//           .services-section {
//             background-color: white;
//             padding: 4rem 1rem;
//             margin-top: 2rem;
//             margin-bottom: 2rem;
//           }
//           @media (min-width: 768px) {
//             .services-section {
//               padding: 4rem 2rem;
//             }
//           }

//           .services-grid {
//             max-width: 1280px;
//             margin: 0 auto;
//             display: grid;
//             gap: 2rem;
//           }
//           @media (min-width: 640px) {
//             .services-grid {
//               grid-template-columns: repeat(2, 1fr);
//             }
//           }
//           @media (min-width: 768px) {
//             .services-grid {
//               grid-template-columns: repeat(4, 1fr);
//             }
//           }

//           .services-grid div {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             text-align: center;
//           }

//           .services-grid img {
//             width: 3rem;
//             height: 3rem;
//             margin-bottom: 1rem;
//           }

//           .services-grid h3 {
//             font-size: 1.125rem;
//             font-weight: 700;
//             color: #1a202c;
//             margin-bottom: 0.5rem;
//           }
//           @media (min-width: 768px) {
//             .services-grid h3 {
//               font-size: 1.25rem;
//             }
//           }

//           .services-grid p {
//             font-size: 0.875rem;
//             color: #4a5568;
//           }

//           /* Contact Form Section */
//           .contact-form-section {
//             background-color: white;
//             padding: 4rem 1rem;
//             margin-top: 2rem;
//             margin-bottom: 2rem;
//           }
//           @media (min-width: 768px) {
//             .contact-form-section {
//               padding: 4rem 2rem;
//             }
//           }

//           .contact-form-section h2 {
//             font-size: 2rem;
//             font-weight: 700;
//             color: #1a202c;
//             text-align: center;
//             margin-bottom: 2rem;
//           }

//           .contact-form {
//             max-width: 600px;
//             margin: 0 auto;
//             display: flex;
//             flex-direction: column;
//             gap: 1rem;
//           }

//           .contact-form input,
//           .contact-form textarea {
//             padding: 0.75rem;
//             border: 1px solid #e5e7eb;
//             border-radius: 0.375rem;
//             font-size: 1rem;
//           }

//           .contact-form button {
//             padding: 0.75rem;
//             background-color: #ef4444;
//             color: white;
//             border: none;
//             border-radius: 0.375rem;
//             font-size: 1rem;
//             font-weight: 600;
//             cursor: pointer;
//             transition: background-color 0.3s;
//           }

//           .contact-form button:hover {
//             background-color: #dc2626;
//           }
//         `}
//       </style>

//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="hero-container">
//           {/* Left Side - Text Content */}
//           <div className="hero-text">
//             <h2>
//               We manage your IT, <br /> so you can manage your business.
//             </h2>
//             <p>
//               Take charge of your business continuity with innovative IT solutions.
//             </p>
//             <div className="hero-buttons">
//               <button>Schedule a Free Consultation</button>
//               <a href="#contact-form">
//                 <button>Contact Us</button>
//               </a>
//             </div>
//           </div>

//           {/* Right Side - Image */}
//           <div className="hero-image">
//             <div>
//               <img src="./heroimage.jpg" alt="Team" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Divider */}
//       <hr className="divider" />

//       {/* Stats Section */}
//       <section className="stats-section">
//         <div className="stats-grid">
//           <div>
//             <p>REVIEWED ON</p>
//             <h3>Clutch</h3>
//             <p className="stars">★★★★★</p>
//             <p>2K+ REVIEWS</p>
//           </div>
//           <div>
//             <h4>08 Years</h4>
//             <p>Proven Track Record</p>
//           </div>
//           <div>
//             <h4>98%</h4>
//             <p>Customer Satisfaction</p>
//           </div>
//           <div>
//             <h4>470+ Projects</h4>
//             <p>We Have Completed</p>
//           </div>
//           <div>
//             <h4>3 Mins</h4>
//             <p>Average Answer Time</p>
//           </div>
//         </div>
//       </section>

//       {/* What We Do Section */}
//       <section className="what-we-do-section">
//         <p>WHAT WE DO</p>
//         <h2>
//           Simplifying IT <br /> for a complex world.
//         </h2>
//       </section>

//       {/* Services Section */}
//       <section className="services-section">
//         <div className="services-grid">
//           <div>
//             <img src="./coinimage.png" alt="Cost-effectiveness" />
//             <h3>Cost-effectiveness</h3>
//             <p>
//               Affordable IT solutions to reduce costs and improve your bottom line.
//             </p>
//           </div>
//           <div>
//             <img src="./innovative.png" alt="Innovative Technology" />
//             <h3>Innovative Technology</h3>
//             <p>
//               Keeping you ahead with the latest technology trends.
//             </p>
//           </div>
//           <div>
//             <img src="./industries.png" alt="Industry Expertise" />
//             <h3>Industry Expertise</h3>
//             <p>
//               Specialized in healthcare, finance, and manufacturing industries.
//             </p>
//           </div>
//           <div>
//             <img src="./industries-1.png" alt="Scalability" />
//             <h3>Scalability</h3>
//             <p>
//               Solutions that grow with your business efficiently.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section id="contact-form" className="contact-form-section">
//         <h2>Contact Us</h2>
//         <form className="contact-form">
//           <input type="text" placeholder="Your Name" required />
//           <input type="email" placeholder="Your Email" required />
//           <textarea placeholder="Your Message" rows="5" required></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//       </section>
//     </>
//   );
// };

// export default HeroSection;


import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSectionHover = (section) => {
    setActiveSection(section);
  };

  const handleSectionLeave = () => {
    setActiveSection(null);
  };

  return (
    <>
      <style>
        {`
          .navbar {
            background-color: white;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 1000; /* Ensure navbar is above other elements */
          }

          .navbar-container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 4rem;
          }

          .navbar-logo img {
            height: 2rem;
          }

          .navbar-toggle {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            color: #1a202c;
          }

          .navbar-links {
            display: flex;
            align-items: center;
            gap: 1.5rem;
          }

          .navbar-links a {
            color: #1a202c;
            font-size: 0.875rem;
            font-weight: 500;
            transition: color 0.3s;
          }

          .navbar-links a:hover {
            color: #ef4444;
          }

          .navbar-right {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .navbar-right button {
            padding: 0.5rem 1rem;
            background-color: #f3f4f6;
            color: #1a202c;
            border: none;
            border-radius: 0.375rem;
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .navbar-right button:hover {
            background-color: #e5e7eb;
          }

          .navbar-right .contact-btn {
            background-color: black;
            color: white;
          }

          .navbar-right .contact-btn:hover {
            background-color: #1f2937;
          }

          .mega-menu {
            position: absolute;
            left: 0;
            width: 100%;
            background-color: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 1.5rem 0;
            z-index: 999; /* Ensure mega menu is below navbar */
          }

          .mobile-menu {
            display: none;
            background-color: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 1rem 0;
          }

          @media (max-width: 768px) {
            .navbar-toggle {
              display: block;
            }

            .navbar-links {
              display: none;
            }

            .navbar-right {
              display: none;
            }

            .mobile-menu {
              display: block;
            }
          }
        `}
      </style>

      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <img src="./logo.png" alt="Intelion" />
          </div>

          {/* Hamburger Menu (Mobile Only) */}
          <button className="navbar-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navbar Links */}
          <ul className="navbar-links">
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li
              onMouseEnter={() => handleSectionHover('services')}
              onMouseLeave={handleSectionLeave}
            >
              <a href="#">Services</a>
            </li>
            <li
              onMouseEnter={() => handleSectionHover('market-research')}
              onMouseLeave={handleSectionLeave}
            >
              <a href="#">Market Research</a>
            </li>
            <li
              onMouseEnter={() => handleSectionHover('company')}
              onMouseLeave={handleSectionLeave}
            >
              <a href="#">Company</a>
            </li>
            <li
              onMouseEnter={() => handleSectionHover('brands')}
              onMouseLeave={handleSectionLeave}
            >
              <a href="#">Brands</a>
            </li>
          </ul>

          {/* Right Section */}
          <div className="navbar-right">
            <div className="flex items-center gap-2">
              <button>Client Support →</button>
              <p>0612-2500971</p>
            </div>
            <button className="contact-btn">Contact Us</button>
          </div>
        </div>

        {/* Mega Menu (Expanded Section) */}
        {activeSection && (
          <div
            className="mega-menu"
            onMouseEnter={() => handleSectionHover(activeSection)}
            onMouseLeave={handleSectionLeave}
          >
            <div className="container mx-auto px-4 sm:px-10">
              {/* Services Section */}
              {activeSection === 'services' && (
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <h3>Services</h3>
                    <ul>
                      {[
                        'Digital Strategy & Design',
                        'Application Development and Management',
                        'Cloud & Infrastructure',
                        'Software-as-a-Service',
                        'Digital & Brand Marketing',
                        'Generative AI & Business Intelligence',
                      ].map((service, index) => (
                        <li key={index}>
                          <a href="#">{service}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Industry Inside Campus - CIED</h3>
                    <ul>
                      {['Digital Campus', 'Unity Education', 'Manufacturing/IOT', 'Aerospace'].map(
                        (item, index) => (
                        <li key={index}>
                          <a href="#">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Industry Focus</h3>
                    <ul>
                      {[
                        'Industry Manufacturing',
                        'Transportation Logistics',
                        'Healthcare',
                        'Banks & Insurance',
                        'Consulting Providers',
                        'Non Profit',
                      ].map((item, index) => (
                        <li key={index}>
                          <a href="#">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Market Research Section */}
              {activeSection === 'market-research' && (
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3>Market Reports</h3>
                    <ul>
                      {[
                        'Consumer Product Reports',
                        'Packaging Industry Reports',
                        'IT & Communications Technology Reports',
                        'Food & Beverage Reports',
                        'Services and Utilities Reports',
                        'Oil and Gas Reports',
                        'Semiconductor & Electronics Reports',
                        'Travel and Tourism Reports'
                      ].map((report, index) => (
                        <li key={index}>
                          <a href="#">{report}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Industry Focus</h3>
                    <ul>
                      {[
                        'Healthcare Reports',
                        'Chemicals & Materials',
                        'Energy & Power',
                        'Automotive Reports',
                      ].map((item, index) => (
                        <li key={index}>
                          <a href="#">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Company Section */}
              {activeSection === 'company' && (
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3>Company</h3>
                    <ul>
                      {[
                        'Events',
                        'Why us',
                        'Team',
                        'Careers',
                        'Partners & Certifications',
                        'Reviews & Awards',
                      ].map((item, index) => (
                        <li key={index}>
                          <a href="#">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Brands Section */}
              {activeSection === 'brands' && (
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3>Brands</h3>
                    <ul>
                      {['Adobe'].map((brand, index) => (
                        <li key={index}>
                          <a href="#">{brand}</a>
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
          <div className="mobile-menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Market Research</a>
              </li>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Brands</a>
              </li>
              <li>
                <a href='#contact-form'>
                <button className="contact-btn">Contact Us</button>
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;