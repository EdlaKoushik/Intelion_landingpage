// import React from 'react';

// function RecognizedByTheBest() {
//   return (
//     <section className="w-full bg-white py-12 mt-10">
//       <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        
//         {/* Left Side: Content */}
//         <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
//           <span className="text-sm text-gray-500 mb-2 bg-gray-100 py-1 px-2 inline-block">
//             WHERE WE DO
//           </span>
//           <h1 className="text-4xl font-bold text-[#1b0a3f] mb-4">
//             Recognized by the best
//           </h1>
//           <p className="text-lg text-gray-600 mb-8">
//             The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.
//           </p>
//         </div>

//         {/* Right Side: Images */}
//         <div className="w-full md:w-1/2 grid grid-cols-3 gap-4 justify-items-center">
//           <img src="./Recognised/image2.png" alt="Intel Technology Provider" className="h-24" />
//           <img src="./Recognised/image1.png" alt="Microsoft Gold Partner" className=" h-20 " />
//           <img src="./Recognised/image3.png" alt="Lenovo Business Partner" className="w-24 h-24" />
         
//           <img src="./Recognised/image4.png" alt="Cisco Partner" className=" h-24" />
//           <img src="./Recognised/image8.png" alt="FCS Finolity" className=" h-24" />
//           <img src="./Recognised/image5.png" alt="HP Silver Partner" className="h-24 " />
        
//          <img src="./Recognised/image6.png" alt="Dell PartnerDirect" className=" " />
        
          
//           <img src="./Recognised/image7.png" alt="Ubiquiti Networks" className=" "/>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default RecognizedByTheBest;


//responsive 

import React from 'react';

function RecognizedByTheBest() {
  return (
    <section className="w-full bg-white py-12 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <span className="text-sm text-gray-500 mb-2 bg-gray-100 py-1 px-2 inline-block rounded-md">
            WHERE WE DO
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1b0a3f] mb-4">
            Recognized by the best
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.
          </p>
        </div>

        {/* Right Side: Images */}
        <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          <img src="./Recognised/image2.png" alt="Intel Technology Provider" className="h-20 md:h-24 object-contain" />
          <img src="./Recognised/image1.png" alt="Microsoft Gold Partner" className="h-20 md:h-24 object-contain" />
          <img src="./Recognised/image3.png" alt="Lenovo Business Partner" className="h-20 md:h-24 object-contain" />
          <img src="./Recognised/image4.png" alt="Cisco Partner" className="h-20 md:h-24 object-contain" />
          <img src="./Recognised/image8.png" alt="FCS Finolity" className="h-20 md:h-24 object-contain" />
          <img src="./Recognised/image5.png" alt="HP Silver Partner" className="h-20 md:h-24 object-contain" />
          <img src="./Recognised/image6.png" alt="Dell PartnerDirect" className="h-20 md:h-24 object-contain" />
          <img src="./Recognised/image7.png" alt="Ubiquiti Networks" className="h-20 md:h-24 object-contain" />
        </div>
      </div>
    </section>
  );
}

export default RecognizedByTheBest;






