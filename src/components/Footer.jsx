// import React from "react";
// import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Main Content */}
//       <div className="flex-grow">
//         {/* Your main content goes here */}
//         <div className="p-4">
//           <h1>Your Main Content</h1>
//           <p>This is where your main content will be displayed.</p>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-black text-white">
//         <div className="container mx-auto py-10 px-40">
//           <div className="grid grid-cols-2 gap-10">
//             <div>
//               <h2 className="text-xl font-bold mb-4 text-start px-6 text-[22px]">
//                 Solutions
//               </h2>
//               <div className="grid grid-cols-2 gap-4 text-start px-6 text-[#f5f5f1B3] text-[16px]">
//                 <ul>
//                   <li>Digital Strategy & Design</li>
//                   <li>Application Development and Management</li>
//                   <li>Cloud & Infrastructure</li>
//                   <li>Software-as-a-Service</li>
//                 </ul>
//                 <ul>
//                   <li>Digital & Brand Marketing</li>
//                   <li>Generative AI & Business Intelligence</li>
//                   <li>Network Connectivity</li>
//                   <li>ERP Solutions</li>
//                 </ul>
//               </div>

//               <h2 className="text-xl font-bold mt-8 mb-4 text-start px-6  text-[22px]">
//                 Company
//               </h2>
//               <div className="grid grid-cols-2 gap-4 text-start px-6 text-[16px] text-[#f5f5f1B3]">
//                 <ul>
//                   <li>Events</li>
//                   <li>Why us</li>
//                   <li>Team</li>
//                   <li>Careers</li>
//                   <li>Partners & Certifications</li>
//                   <li>Reviews & Awards</li>
//                 </ul>
//                 <ul>
//                   <li>Blog</li>
//                   <li>Case studies</li>
//                   <li>Events</li>
//                   <li>FAQ</li>
//                 </ul>
//               </div>

//               <div className="mt-8 px-5">
//                 <input
//                   type="text"
//                   placeholder="Don’t miss out updates"
//                   className="w-full p-2 mb-2 text-white  border border-white-200"
//                 />
//                 <div className="flex items-start mb-2 text-start ">
//                   <input type="checkbox" className="mr-2 mt-1" />
//                   <span>
//                     I agree to the Privacy Policy and give my permission to
//                     process my personal data for the purposes specified in the
//                     Privacy Policy.
//                   </span>
//                 </div>
//                 <div className="text-start ">
//                   <button className="bg-red-500 text-[20px] rounded-lg text-white px-4 py-2 w-20">
//                     Send
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="text-center mt-50">
//               <div className="mb-4 ">
//                 <div className="px-15 mb-5">
//                   <img src="./whitelogo/image.png" alt="Recognition" />
//                 </div>
//                 <div className="bg-red-500 text-white px-4 py-2 inline-block rounded-lg hover:text-black  hover:bg-white   cursor-pointer">
//                   Schedule Consultation
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Bottom Section */}
//       <section className="bg-white">
//         <div className="text-black pt-6">
//           <div className="flex items-start space-x-4 ">
//             <div className="flex flex-col text-start">
//               <span className="text-sm text-gray-600">REVIEWED ON</span>
//               <img src="./clutch-logo.svg" alt="Clutch" className="h-5 mt-1" />
//             </div>
//             <div className="flex flex-col text-start pr-10">
//               <span className="text-sm text-[#cf0844]">★★★★★</span>
//               <span className="text-sm text-gray-600 mt-1">2K+ REVIEWS</span>
//             </div>

//             <div className="w-px h-8  bg-gray-300 "></div>
//             <p className="pl-10 pr-10">
//               {" "}
//               R-7 Street, Yamuna
//               <br />
//               Nagar, Haryana 135001
//             </p>
//             <div className="w-px h-8 bg-gray-300"></div>
//             <p className="pl-10">
//               T: 0612-2500-971 <br />
//               E: connect@finolity.com
//             </p>
//             <div className="flex justify-center gap-6 pl-20">
//               <a
//                 href="https://www.linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedin className="text-gray-600 hover:text-blue-700 text-xl " />
//               </a>
//               <a
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaGithub className="text-gray-600 hover:text-black text-xl" />
//               </a>
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaTwitter className="text-gray-600 hover:text-blue-500 text-xl" />
//               </a>
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaFacebook className="text-gray-600 hover:text-blue-600 text-xl" />
//               </a>
//             </div>
//           </div>

//           {/* Second Row */}
//           <div className="flex justify-between items-center mt-5 ">
//             <div className="text-center">
//               <div>
//                 © 2025 &nbsp; &nbsp;&nbsp; Finolity &nbsp;&nbsp;&nbsp;&nbsp;
//                 Terms & Conditions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Privacy
//                 Policy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Refund and Cancellation
//                 Policy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 Blog&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Case
//                 studies&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 Events&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FAQ{" "}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Footer;

//responsive

import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col bg-black text-white  relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]  mt-20">
      {/* Footer */}
      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side: Solutions and Company */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Solutions</h2>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mb-8">
              {[
                "Digital Strategy & Design",
                "Application Development and Management",
                "Cloud & Infrastructure",
                "Software-as-a-Service",
                "Digital & Brand Marketing",
                "Generative AI & Business Intelligence",
                "Network Connectivity",
                "ERP Solutions",
              ].map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-4">Company</h2>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
              {[
                "Events",
                "Why us",
                "Team",
                "Careers",
                "Partners & Certifications",
                "Reviews & Awards",
                "Blog",
                "Case studies",
                "FAQ",
              ].map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>

            <div className="mt-8">
              <input
                type="text"
                placeholder="Don’t miss out updates"
                className="w-full p-2 mb-2 text-white border rounded focus:outline-none "
              />
              <div className="flex items-start mb-2">
                <input type="checkbox" className="mr-2 mt-1" />
                <span className="text-sm text-gray-400">
                  I agree to the Privacy Policy and give my permission to process my personal data.
                </span>
              </div>
              <button className="bg-red-500 text-white text-lg rounded-lg px-4 py-2 hover:bg-red-600 transition">
                Send
              </button>
            </div>
          </div>

          {/* Right Side: Logo and Social Media */}
          <div className="text-center">
            <div className="mb-6">
              <img src="./whitelogo/image.png" alt="Finolity Logo" className="mx-auto" />
            </div>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-white  hover:text-black  transition cursor-pointer ">
              Schedule Consultation
            </button>
            
          </div>
        </div>
      </footer>

      
{/* <section className="bg-white  border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-10">
   
    <div className="flex flex-wrap items-center justify-between py-2">
      
     
      <div className="flex items-center space-x-6">
       
        <div className="flex items-start space-x-2">
          <div className="flex flex-col text-start">
            <span className="text-sm text-gray-600">REVIEWED ON</span>
            <img src="./clutch-logo.svg" alt="Clutch" className="h-5 mt-1" />
          </div>
          <div className="flex flex-col text-start">
            <span className="text-sm text-[#cf0844]">★★★★★</span>
            <span className="text-sm text-gray-600">2K+ REVIEWS</span>
          </div>
        </div>

       
        <div className="w-px h-8 bg-gray-300"></div>

      
        <p className="text-sm text-gray-800">
          R-7 Street, Yamuna Nagar, Haryana 135001
        </p>

       
        <div className="w-px h-8 bg-gray-300"></div>

       
        <p className="text-sm text-gray-800">
          T: 0612-2500-971 <br />
          E: connect@finolity.com
        </p>
      </div>

      
      <div className="flex space-x-4">
       
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-400 hover:text-blue-700 text-2xl" />
         </a>
         <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-400 hover:text-blue-500 text-2xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-gray-400 hover:text-blue-500 text-2xl" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-gray-400 hover:text-blue-600 text-2xl" />
              </a>
              
      </div>
    </div>

   
    <div className="flex flex-wrap justify-center text-sm text-gray-800 space-x-4 py-2 border-t border-gray-200 mt-4">
      <span>© 2025</span>
      <span>Finolity</span>
      <a href="#" className="hover:text-red-500 transition">Terms & Conditions</a>
      <a href="#" className="hover:text-red-500 transition">Privacy Policy</a>
      <a href="#" className="hover:text-red-500 transition">Refund and Cancellation Policy</a>
      <a href="#" className="hover:text-red-500 transition">Blog</a>
      <a href="#" className="hover:text-red-500 transition">Case studies</a>
      <a href="#" className="hover:text-red-500 transition">Events</a>
      <a href="#" className="hover:text-red-500 transition">FAQ</a>
    </div>
  </div>
</section> */}
{/* Compact Bottom Section */}
<section className="bg-white border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-6">
    {/* Top Row */}
    <div className="flex flex-wrap items-center justify-center gap-4 py-1">
      
      {/* Clutch Review and Address */}
      <div className="flex items-center space-x-4 ">
        {/* Clutch Review */}
        <div className="flex items-start space-x-1">
          <div className="flex flex-col text-start">
            <span className="text-xs text-gray-500">REVIEWED ON</span>
            <img src="./clutch-logo.svg" alt="Clutch" className="h-4 mt-0.5" />
          </div>
          <div className="flex flex-col text-start">
            <span className="text-xs text-[#cf0844]">★★★★★</span>
            <span className="text-xs text-gray-500">2K+ REVIEWS</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-300"></div>

        {/* Address */}
        <p className="text-xs text-gray-600">
          R-7 Street, Yamuna Nagar, Haryana 135001
        </p>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-300"></div>

        {/* Contact Info */}
        <p className="text-xs text-gray-600">
          T: 0612-2500-971 <br />
          E: connect@finolity.com
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-2 ml-10">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-400 hover:text-blue-700 text-3xl mr-2" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-400 hover:text-black text-3xl mr-2" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer ">
          <FaTwitter className="text-gray-400 hover:text-blue-500 text-3xl mr-2" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-gray-400 hover:text-blue-600 text-3xl mr-2" />
        </a>
      </div>
    </div>

    {/* Bottom Row */}
    <div className="flex flex-wrap justify-center text-xs text-gray-600 space-x-2 py-1 border-t border-gray-200 mt-2">
      <span>© 2025</span>
      <span>Finolity</span>
      <a href="#" className="hover:text-red-500 transition ">Terms & Conditions</a>
      <a href="#" className="hover:text-red-500 transition ">Privacy Policy</a>
      <a href="#" className="hover:text-red-500 transition ">Refund and Cancellation Policy</a>
      <a href="#" className="hover:text-red-500 transition ">Blog</a>
      <a href="#" className="hover:text-red-500 transition ">Case studies</a>
      <a href="#" className="hover:text-red-500 transition ">Events</a>
      <a href="#" className="hover:text-red-500 transitionpx-2">FAQ</a>
    </div>
  </div>
</section>




    </div>
  );
};

export default Footer;
