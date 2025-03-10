// import React from 'react';

// function ContactSection() {
//   return (
//     <section className="w-full bg-gradient-to-b from-black to-red-500 py-12">
//       <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
//         {/* Left Side: Contact Info and Benefits */}
//         <div className="text-white space-y-6">
//           <h4 className="text-sm tracking-wider text-white">CONTACT US</h4>
//           <h1 className="text-4xl font-bold text-white">Partner with Us for Comprehensive IT</h1>
//           <p className="text-gray-200">
//             We’re happy to answer any questions you may have and help you determine which of our services best fit your needs.
//           </p>
//           <p className="font-semibold">Call us at: <span className="text-white">0612-2500-971</span></p>
          
//           <div className="space-y-4">
//             <h2 className="text-lg font-bold pr-6">Your benefits:</h2>
//             <ul className="grid grid-cols-2 gap-2 text-gray-200 text-start">
//             <li><i class="fa-regular fa-circle-check circle-check-red text-white"></i>Client-oriented</li>

//               <li><i class="fa-regular fa-circle-check circle-check-red text-white"></i> Results-driven</li>
//               <li><i class="fa-regular fa-circle-check circle-check-red text-white"></i> Independent</li>
//               <li><i class="fa-regular fa-circle-check circle-check-red text-white"></i> Problem-solving</li>
//               <li><i class="fa-regular fa-circle-check circle-check-red text-white"></i> Competent</li>
//               <li> <i class="fa-regular fa-circle-check circle-check-red text-white"></i>Transparent</li>
//             </ul>
//           </div>

//           <div className="mt-8  bg-opacity-10 p-4 rounded-lg text-white space-y-2">
//             <h2 className="text-lg font-bold">What happens next?</h2>
//             <div className="space-y-2 ">
//               <div className="flex items-start">
//                 <span className="text-[16px] font-bold mr-2 ">1</span>
//                 <p>We schedule a call at your convenience</p>
//               </div>
//               <div className="flex items-start">
//                 <span className="text-[16px] font-bold mr-2">2</span>
//                 <p >We do a discovery and consulting meeting</p>
//               </div>
//               <div className="flex items-start">
//                 <span className="text-[16px] font-bold mr-2">3</span>
//                 <p>We prepare a proposal</p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Right Side: Consultation Form */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-bold text-[#1b0a3f] mb-4 text-center">
//             Schedule a Free Consultation <span className="text-green-500">✔️</span>
//           </h2>
//           <form className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <input type="text" placeholder="First name" className="border p-2 rounded  focus:border-blue-500 hover:border-blue-500 focus:outline-none" />
//               <input type="text" placeholder="Last name" className="border p-2 rounded  focus:border-blue-500 hover:border-blue-500 focus:outline-none" />
//             </div>
//             <input type="text" placeholder="Company / Organization" className="w-full border p-2 rounded  focus:border-blue-500 hover:border-blue-500 focus:outline-none" />
//             <input type="email" placeholder="Company email" className="w-full border p-2 rounded  focus:border-blue-500 hover:border-blue-500 focus:outline-none" />
//             <input type="text" placeholder="Phone" className="w-full border p-2 rounded focus:border-blue-500 hover:border-blue-500 focus:outline-none" />
//             <label for="select"> How Can We Help You ?</label>
//             <select  id="select" className="w-full border p-2 rounded  focus:border-blue-500 hover:border-blue-500 focus:outline-none">
//             <option value="" disabled selected>Web Development</option>
//               <option>Managed Services</option>
//               <option> IT Consulting & Advisory</option>
//               <option>Cyber Security</option>
//               <option>Web development</option>
//               <option>Mobile development</option>
//               <option>Cloud Services</option>
//               <option>Other</option>
//             </select>
//             <label for="mesge" > Message</label>
//             <textarea id="mesge" placeholder="To better assist you, please describe how we can help..." className="w-full border p-2 rounded   focus:border-blue-500 hover:border-blue-500 focus:outline-none" rows="4"></textarea>
//             <button type="submit" className=" w-[90px] cursor-pointer bg-black text-white py-2 rounded hover:bg-gray-800">
//               Submit
//             </button>
//           </form>
//         </div>
        
//       </div>
//     </section>
//   );
// }

// export default ContactSection;



//responsive

import React from 'react';

function ContactSection() {
  return (
    <section id="contact-form" className="w-full bg-gradient-to-b from-black to-red-500 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side: Contact Info and Benefits */}
        <div className="text-white space-y-6">
          <h4 className="text-sm tracking-wider text-white">CONTACT US</h4>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Partner with Us for Comprehensive IT</h1>
          <p className="text-gray-200">
            We’re happy to answer any questions you may have and help you determine which of our services best fit your needs.
          </p>
          <p className="font-semibold">
            Call us at: <span className="text-white">0612-2500-971</span>
          </p>
          
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-start">Your benefits:</h2>
            <ul className="grid grid-cols-2 gap-2 text-gray-200 text-start">
              {['Client-oriented', 'Results-driven', 'Independent', 'Problem-solving', 'Competent', 'Transparent'].map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <i className="fas fa-check-circle text-red-500 mr-2"></i> {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 bg-opacity-10 p-4 rounded-lg text-white space-y-2 px-2">
            <h2 className="text-lg font-bold text-start">What happens next?</h2>
            <div className="space-y-2">
              {['We schedule a call at your convenience', 'We do a discovery and consulting meeting', 'We prepare a proposal'].map((step, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-[16px] font-bold mr-2">{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Side: Consultation Form */}
        <div id="contact-form" className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold text-[#1b0a3f] mb-4 text-center">
            Schedule a Free Consultation <span className="text-green-500">✔️</span>
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="border p-2 rounded focus:border-blue-500 hover:border-blue-500 focus:outline-none" />
              <input type="text" placeholder="Last name" className="border p-2 rounded focus:border-blue-500 hover:border-blue-500 focus:outline-none" />
            </div>
            <input type="text" placeholder="Company / Organization" className="w-full border p-2 rounded focus:border-blue-500 hover:border-blue-500 focus:outline-none" />
            <input type="email" placeholder="Company email" className="w-full border p-2 rounded focus:border-blue-500 hover:border-blue-500 focus:outline-none" />
            <input type="text" placeholder="Phone" className="w-full border p-2 rounded focus:border-blue-500 hover:border-blue-500 focus:outline-none" />
            
            <label htmlFor="select" className="block text-sm text-gray-700">How Can We Help You?</label>
            <select id="select" className="w-full border p-2 rounded focus:border-blue-500 hover:border-blue-500 focus:outline-none">
              <option value="" disabled selected>Choose a service...</option>
              {['Web Development', 'Managed Services', 'IT Consulting & Advisory', 'Cyber Security', 'Mobile Development', 'Cloud Services', 'Other'].map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            
            <label htmlFor="message" className="block text-sm text-gray-700">Message</label>
            <textarea id="message" placeholder="To better assist you, please describe how we can help..." className="w-full border p-2 rounded focus:border-blue-500 hover:border-blue-500 focus:outline-none" rows="4"></textarea>
            
            {/* <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors">
              Submit
            </button> */}
            <button type="submit" className=" w-[90px] cursor-pointer bg-black text-white py-2 rounded hover:bg-gray-800">
              Submit
           </button>
          </form>
        </div> 
        
      </div>
    </section>
  );
}

export default ContactSection;
