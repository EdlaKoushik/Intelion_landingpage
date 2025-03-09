
// import React from 'react';
// import VideoContentSection from './VideoContentSection'
// function SuccessStories() {
//   return (
//   <>
//    <div className="bg-white-50 w-full mt-20" style={{ display:"flex"}}>
//     <section className="w-full bg-white-50 py-6">
//     <div className="px-4" style={{ marginLeft: "70px" }}>
//       {/* Main Box */}
//       <div
//         className="bg-black p-6 rounded-3xl shadow-lg border border-gray-200"
//         style={{ width: "400px", height: "400px" }} // Increased size
//       >
//         {/* Heading */}
//         <h1 className="text-left text-3xl font-bold text-white mb-6"> {/* Increased font size */}
//           Organizations recognized our work
//         </h1>

//         {/* Logos and Labels */}
//         <div className="flex justify-center space-x-8 mb-6"> {/* Increased spacing */}
//           <div className="text-center">
//             <h2 className="text-xl font-bold text-[#e1d8f5]">Forbes</h2> {/* Increased font size */}
//             <p className="text-sm text-[#c0bcc8]">Global Member Council 2020</p> {/* Increased font size */}
//           </div>
//           <div className="text-center">
//             <h2 className="text-xl font-bold text-[#e1d8f5]">Clutch</h2> {/* Increased font size */}
//             <p className="text-sm text-[#c0bcc8]">Top App Development Company in state 2023</p> {/* Increased font size */}
//           </div>
//           <div className="text-center">
//             <h2 className="text-xl font-bold text-[#e1d8f5]">Google</h2> {/* Increased font size */}
//             <p className="text-sm text-[#c0bcc8]">Development Certified Agency</p> {/* Increased font size */}
//           </div>
//         </div>

//         {/* Button */}
//         <button
//           href="#"
//           className="cursor-pointer text-white bg-[#D40000] hover:bg-white hover:text-black font-semibold text-lg rounded-lg px-6 py-3 transition transform duration-300 ease-in-out" // Increased padding and font size
//         >
//           View more awards
//         </button>
//       </div>
//     </div>
//   </section>

//   {/* Second Section */}
//   <section className="w-full bg-white-50 py-6 mt-30">
//     <div className="px-4">
//       {/* Main Box */}
//       <div
//         className="bg-[#f4ecd8] p-8 rounded-3xl shadow-lg border border-gray-200 relative"
//         style={{ width: "400px", height: "400px" }} // Increased size
//       >
//         {/* Heading */}
//         <h1 className="text-left text-3xl font-bold text-[#1b0a3f] mb-6"> {/* Increased font size */}
//           Finality has been recognized as a Leader in the 2022 Yourstory®
//         </h1>

//         {/* Arrow Dots Design */}
//         <div className="absolute bottom-8 right-8 flex space-x-3"> {/* Increased spacing */}
//           <div className="w-3 h-3 bg-[#1b0a3f] rounded-full"></div> {/* Increased dot size */}
//           <div className="w-3 h-3 bg-[#1b0a3f] rounded-full"></div> {/* Increased dot size */}
//           <div className="w-3 h-3 bg-[#1b0a3f] rounded-full"></div> {/* Increased dot size */}
//         </div>

//         {/* Link */}
//         <a
//           href="#"
//           className="absolute bottom-8 left-8 text-[#cf0844] text-base hover:text-red-600 transition after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#1b0a3f] after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300" // Increased font size
//         >
//           View the report
//         </a>
//       </div>
//     </div>
//   </section>
    

//     </div>
//     <section className="w-full bg-white py-12">
//       <div className="max-w-6xl mx-auto px-6">
//         <p className=" whitespace-nowrap text-start pl-2  text-sm text-red-500 mb-2 bg-gray-100 w-27 border-lg">WHERE WE DO</p>
//         {/* Main Heading */}
//         <h1 className=" text-start text-3xl font-bold text-center text-[#1b0a3f] mb-8">
//           Success Stories
//         </h1>

//         {/* Grid Layout for Subsections */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Case Study 1 */}
//           <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
//             <img src="./SucSto/img1.png"/>
//             <h2 className="text-xl font-bold text-[#1b0a3f] mb-4">
//               CASE FIDELS BROWS TRANSFORMATION IT CONSULTING
//             </h2>
//             <p className="text-sm text-gray-600 mb-4">
//               How Finoilty’s Consultation Revolutionized Unacademy’s Success
//             </p>
//             <a href="#" className=" text-center relative text-[#cf0844] text-sm hover:text-red-600 transition after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#1b0a3f] after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300">
//               Learn more
//             </a>
//           </div>

//           {/* Case Study 2 */}
//           <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
//           <img src="./SucSto/img2.png"/>
//             <h2 className="text-xl font-bold text-[#1b0a3f] mb-4">
//               9 MM CONSULTING TECHNOLOGY SERVICES GOOD HOSTING
//             </h2>
//             <p className="text-sm text-gray-600 mb-4">
//               Finoilty boosts MM Deemed University with SOLIDWORKS, Smart Manufacturing Lab.*
//             </p>
//             <a href="#" className=" text-center relative text-[#cf0844] text-sm hover:text-red-600 transition after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#1b0a3f] after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300">
//               Learn more
//             </a>
//           </div>

//           {/* Case Study 3 */}
//           <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
//           <img src="./SucSto/img3.png"/>
//             <h2 className="text-xl font-bold text-[#1b0a3f] mb-4">
//               Transforming Ideas with Digital Realities IT CONSULTING
//             </h2>
//             <p className="text-sm text-gray-600 mb-4">
//               “Unlocking Success: The Crucial Role of Design in the Digital Era with Finoilty”
//             </p>
//             <a href="#" className=" text-center relative text-[#cf0844] text-sm hover:text-red-600 transition after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#1b0a3f] after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300">
//               Learn more
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//     <div>
//     <VideoContentSection/>

//     </div>
    
//     </>
//   );
// }

// export default SuccessStories;


//responsive

import React from 'react';
import VideoContentSection from './VideoContentSection';

function SuccessStories() {
  return (
    <>
      <div className="bg-white w-full mt-20 flex flex-col lg:flex-row justify-center items-center">
        {/* First Section */}
        <section className="w-full bg-white py-6 px-4">
          <div className="max-w-lg mx-auto bg-black p-6 rounded-3xl shadow-lg border border-gray-200">
            <h1 className="text-3xl font-bold text-white mb-6 text-center">
              Organizations recognized our work
            </h1>
            <div className="flex justify-center space-x-8 mb-6">
              {[
                { name: 'Forbes', label: 'Global Member Council 2020' },
                { name: 'Clutch', label: 'Top App Development Company 2023' },
                { name: 'Google', label: 'Development Certified Agency' },
              ].map((org, index) => (
                <div key={index} className="text-center">
                  <h2 className="text-xl font-bold text-[#e1d8f5]">{org.name}</h2>
                  <p className="text-sm text-[#c0bcc8]">{org.label}</p>
                </div>
              ))}
            </div>
            <button className=" text-white bg-[#D40000] hover:bg-white hover:text-black font-semibold text-lg rounded-lg px-6 py-3 transition duration-300">
              View more awards
            </button>
          </div>
        </section>

        {/* Second Section */}
        {/* <section className="w-full bg-white py-6 px-4">
          <div className="max-w-lg mx-auto bg-[#f4ecd8] p-8 rounded-3xl shadow-lg border border-gray-200 relative">
            <h1 className="text-3xl font-bold text-[#1b0a3f] mb-6 text-center">
              Finality has been recognized as a Leader in the 2022 Yourstory®
            </h1>
            <div className="absolute bottom-8 right-8 flex space-x-3">
              {Array(3)
                .fill()
                .map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-[#1b0a3f] rounded-full"></div>
                ))}
            </div>
           
            <a
        href="#"
         className="absolute bottom-8 left-8 text-[#cf0844] text-base hover:text-red-600 transition after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#1b0a3f] after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300" // Increased font size
        >
          View the report
         </a>
          </div>
        </section> */}
        <section className="w-full bg-white py-6 px-4">
  <div
    className=" mt-50 max-w-lg md:max-w-xl lg:max-w-2xl mx-auto bg-[#f4ecd8] p-8 rounded-3xl shadow-lg border border-gray-200 relative"
    style={{ height: '290px' }}  
  >
    <h1 className="text-3xl font-bold text-[#1b0a3f] mb-6 text-center">
      Finality has been recognized as a Leader in the 2022 Yourstory®
    </h1>

    {/* Dots */}
    <div className="absolute bottom-8 right-8 flex space-x-3">
      {Array(3)
        .fill()
        .map((_, i) => (
          <div key={i} className="w-3 h-3 bg-[#1b0a3f] rounded-full"></div>
        ))}
    </div>

    {/* Link */}
    <a
      href="#"
      className="absolute bottom-8 left-8 text-[#cf0844] text-base hover:text-red-600 transition after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#1b0a3f] after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300"
    >
      View the report
    </a>
  </div>
</section>

      </div>

      {/* Success Stories Section */}
      <section className="w-full bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-start pl-2 text-sm text-red-500 mb-2 bg-gray-100 w-fit rounded-md">
            WHERE WE DO
          </p>
          <h1 className="text-3xl font-bold text-center text-[#1b0a3f] mb-8">
            Success Stories
          </h1>

          {/* Grid Layout for Subsections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: './SucSto/img1.png',
                title: 'CASE FIDELS BROWS TRANSFORMATION IT CONSULTING',
                description: 'How Finolity’s Consultation Revolutionized Unacademy’s Success',
              },
              {
                img: './SucSto/img2.png',
                title: '9 MM CONSULTING TECHNOLOGY SERVICES GOOD HOSTING',
                description: 'Finolity boosts MM Deemed University with SOLIDWORKS, Smart Manufacturing Lab.',
              },
              {
                img: './SucSto/img3.png',
                title: 'Transforming Ideas with Digital Realities IT CONSULTING',
                description: 'Unlocking Success: The Crucial Role of Design in the Digital Era with Finolity',
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 transition-transform transform hover:scale-105"
              >
                <img
                  src={story.img}
                  alt={story.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold text-[#1b0a3f] mb-4">{story.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{story.description}</p>
                <a
                  href="#"
                  className="text-[#cf0844] text-sm hover:text-red-600 transition block text-center"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Content Section */}
      <div className="w-full bg-white py-12">
        <VideoContentSection />
      </div>
    </>
  );
}

export default SuccessStories;
