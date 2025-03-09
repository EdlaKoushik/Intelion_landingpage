// import React, { useState } from 'react';

// function UseComponent() {
//   const [scrollIndex, setScrollIndex] = useState(0);

//   const cardsData = [
//     {
//       title: 'Collaboration',
//       description:
//         'Quarter modern retail technology, your arm spreads in a brand’s Research Office environment and better from brand compatibility and low-iterational access.',
//     },
//     {
//       title: 'Cloud Platform',
//       description:
//         'Customized cloud platform designed to improve performance. Some IT stores, and provide faster and reliable access to your company data from any device, anytime, contact us.',
//     },
//     {
//       title: 'Network & Connectivity',
//       description:
//         'Network topology includes like, home, mix, and star shapes, such as wind or ice streaming processes connecting between computers or devices.',
//     },
//     {
//       title: 'Datacenter & Hosting',
//       description:
//         'Our hosting – Our content – is time first in the USA that reviews the strict adoption and overall scientific requirements for sharing health and warmth.',
//     },
//   ];

//   const handleScroll = (direction) => {
//     if (direction === 'left') {
//       setScrollIndex((prev) => (prev > 0 ? prev - 1 : prev));
//     } else {
//       setScrollIndex((prev) => (prev < cardsData.length - 3 ? prev + 1 : prev));
//     }
//   };

//   return (
//     <>
//     <section className="w-full bg-black py-12 mt-20 relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
//       {/* Full-width black background */}
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Heading */}
//         <h3 className="text-white mb-4">What we use</h3>
//         <h1 className="text-3xl font-bold text-center text-white mb-4">
//           Bringing the best IT vendors to you.
//         </h1>
//         {/* Description */}
//         <p className="text-lg text-gray-300 text-center mb-12">
//           Working only with the best, to ensure the quality of our services, and to bring state of the art technology to those who need it.
//         </p>

//         {/* Your IT Challenges Section */}
//         <div className="text-left relative">
//           <h2 className="text-2xl font-bold text-white mb-8 text-center">Your IT Challenges</h2>

//           {/* Left Arrow */}
//           <button
//             onClick={() => handleScroll('left')}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 z-10"
//             style={{ left: '-2rem' }}
//           >
//             &lt;
//           </button>

//           {/* Cards Container */}
//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-300 cursor-pointer"
//               style={{ transform: `translateX(-${scrollIndex * 33.33}%)` }}
//             >
//               {cardsData.map((card, index) => (
//                 <div
//                   key={index}
//                   className="w-1/3 flex-shrink-0 bg-gray-800 p-6 rounded-lg shadow-md mx-2"
//                 >
//                   <h3 className="text-xl font-bold text-white mb-4 ">{card.title}</h3>
//                   <p className="text-sm text-gray-300 mb-4">{card.description}</p>
//                   <a href="#" className="text-[#cf0844] text-sm hover:text-red-600 transition">
//                     View more
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={() => handleScroll('right')}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 z-10 cursor-pointer"
//             style={{ right: '-2rem' }}
//           >
//             &gt;
//           </button>
//         </div>
//       </div>
//     </section>
   
//     </>
//   );
// }

// export default UseComponent;


//responsive

import React, { useState } from 'react';

function UseComponent() {
  const [scrollIndex, setScrollIndex] = useState(0);

  const cardsData = [
    {
      title: 'Collaboration',
      description:
        'Quarter modern retail technology, your arm spreads in a brand’s Research Office environment and better from brand compatibility and low-iterational access.',
    },
    {
      title: 'Cloud Platform',
      description:
        'Customized cloud platform designed to improve performance. Access your company data from any device, anytime, contact us.',
    },
    {
      title: 'Network & Connectivity',
      description:
        'Network topology includes like, home, mix, and star shapes, such as wind or ice streaming processes connecting between computers or devices.',
    },
    {
      title: 'Datacenter & Hosting',
      description:
        'Our hosting – Our content – is time first in the USA that reviews the strict adoption and overall scientific requirements for sharing health and warmth.',
    },
  ];

  const handleScroll = (direction) => {
    if (direction === 'left') {
      setScrollIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else {
      setScrollIndex((prev) => (prev < cardsData.length - 1 ? prev + 1 : prev));
    }
  };

  return (
    <section className="w-full bg-black py-12 mt-20 relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* Full-width black background */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h3 className="text-white mb-4 text-center">What we use</h3>
        <h1 className="text-3xl font-bold text-center text-white mb-4">
          Bringing the best IT vendors to you.
        </h1>
        {/* Description */}
        <p className="text-lg text-gray-300 text-center mb-12">
          Working only with the best, to ensure the quality of our services, and to bring state-of-the-art technology to those who need it.
        </p>

        {/* Your IT Challenges Section */}
        <div className="text-left relative">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Your IT Challenges</h2>

          {/* Left Arrow */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 z-10"
            style={{ left: '-1rem' }}
          >
            &lt;
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 cursor-pointer"
              style={{ transform: `translateX(-${scrollIndex * 100}%)` }}
            >
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 bg-gray-800 p-6 rounded-lg shadow-md mx-2 transition-transform hover:scale-105"
                >
                  <h3 className="text-xl font-bold text-white mb-4 ">{card.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{card.description}</p>
                  <a href="#" className="text-[#cf0844] text-sm hover:text-red-600 transition">
                    View more
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 z-10 cursor-pointer"
            style={{ right: '-1rem' }}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default UseComponent;
