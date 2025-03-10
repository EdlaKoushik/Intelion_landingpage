import React from 'react';

const HeroSection = () => {
  return (
    <>
      <section className="bg-white py-8 md:py-16 px-4 md:px-8 flex items-center justify-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug">
              We manage your IT, <br /> so you can manage your business.
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              Take charge of your business continuity with innovative IT solutions.
            </p>
            <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ">
              <button className="bg-red-500 text-white py-2 px-4 rounded-md font-medium shadow-lg cursor-pointer hover:bg-red-600 transition duration-300">
                Schedule a Free Consultation
              </button>
              <button className="bg-black text-white py-2 px-4 rounded-md font-medium shadow-lg cursor-pointer hover:bg-gray-900 transition duration-300">
                Services
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div
              className="overflow-hidden rounded-lg shadow-lg"
              style={{
                clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
              }}
            >
              <img
                src="./heroimage.jpg"
                alt="Team"
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-gray-300 my-8 mx-auto max-w-7xl" />

      {/* Stats Section */}
      <section className="bg-white py-8 px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
          <div>
            <p className="text-xs text-gray-500">REVIEWED ON</p>
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900">Clutch</h3>
            <p className="text-red-500 text-sm md:text-lg font-bold">★★★★★</p>
            <p className="text-xs text-gray-500">2K+ REVIEWS</p>
          </div>

          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900">08 Years</h4>
            <p className="text-xs text-gray-500">Proven Track Record</p>
          </div>

          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900">98%</h4>
            <p className="text-xs text-gray-500">Customer Satisfaction</p>
          </div>

          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900">470+ Projects</h4>
            <p className="text-xs text-gray-500">We Have Completed</p>
          </div>

          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900">3 Mins</h4>
            <p className="text-xs text-gray-500">Average Answer Time</p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-12 text-center px-4">
        <p className="text-yellow-400 text-sm font-semibold mb-4">WHAT WE DO</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Simplifying IT <br /> for a complex world.
        </h2>
      </section>

      {/* Services Section */}
      <section className="bg-white py-8 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <img src="./coinimage.png" alt="Cost-effectiveness" className="w-12 h-12 mb-4" />
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Cost-effectiveness</h3>
            <p className="text-sm text-gray-600">
              Affordable IT solutions to reduce costs and improve your bottom line.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src="./innovative.png" alt="Innovative Technology" className="w-12 h-12 mb-4" />
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Innovative Technology</h3>
            <p className="text-sm text-gray-600">
              Keeping you ahead with the latest technology trends.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src="./industries.png" alt="Industry Expertise" className="w-12 h-12 mb-4" />
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Industry Expertise</h3>
            <p className="text-sm text-gray-600">
              Specialized in healthcare, finance, and manufacturing industries.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src="./industries-1.png" alt="Scalability" className="w-12 h-12 mb-4" />
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Scalability</h3>
            <p className="text-sm text-gray-600">
              Solutions that grow with your business efficiently.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

 // with plain css

// import React from 'react';

// const HeroSection = () => {
//   return (
//     <>
//       <style>
//         {`
//           .hero-section {
//             background-color: white;
//             padding: 2rem 1rem;
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
//           .stats-section {
//             background-color: white;
//             padding: 2rem 1rem;
//           }
//           .stats-grid {
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
//           .services-section {
//             background-color: white;
//             padding: 2rem 1rem;
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
//               <button>Services</button>
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
//       <hr className="border-t-2 border-gray-300 my-8 mx-auto max-w-7xl" />

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
//     </>
//   );
// };

// export default HeroSection;



//updated plain css 
// import React from 'react';

// const HeroSection = () => {
//   return (
//     <>
//       <style>
//         {`
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
//           .services-section {
//             background-color: white;
//             padding: 2rem 1rem;
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
//               <button>Services</button>
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
//       <section className="services-section mb-4">
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
//     </>
//   );
// };

// export default HeroSection;

// import React from 'react';

// const HeroSection = () => {
//   return (
//     <>
//       <style>
//         {`
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
//               <button>Services</button>
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
//     </>
//   );
// };

// export default HeroSection;



// import React from 'react';

// const HeroSection = () => {
//   return (
//     <>
//       <style>
//         {`
//           .hero-section {
//             background-color: white;
//             padding: 2rem 1rem;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//           }
//           .hero-container {
//             max-width: 1280px;
//             margin: 0 auto;
//             display: grid;
//             grid-template-columns: 1fr;
//             gap: 3rem;
//           }
//           @media (min-width: 768px) {
//             .hero-section {
//               padding: 4rem 2rem;
//             }
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
//           .hero-heading {
//             font-size: 2rem;
//             font-weight: 800;
//             color: #1f2937;
//             line-height: 1.2;
//           }
//           @media (min-width: 768px) {
//             .hero-heading {
//               font-size: 3rem;
//             }
//           }
//           .hero-description {
//             margin-top: 1rem;
//             font-size: 1rem;
//             color: #4b5563;
//           }
//           .button-group {
//             margin-top: 2rem;
//             display: flex;
//             flex-direction: column;
//             gap: 1rem;
//           }
//           @media (min-width: 768px) {
//             .button-group {
//               flex-direction: row;
//             }
//           }
//           .btn {
//             padding: 0.5rem 1rem;
//             border-radius: 0.375rem;
//             font-weight: 500;
//             cursor: pointer;
//             transition: background-color 0.3s;
//             box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//           }
//           .btn-red {
//             background-color: #ef4444;
//             color: white;
//           }
//           .btn-red:hover {
//             background-color: #dc2626;
//           }
//           .btn-black {
//             background-color: #000;
//             color: white;
//           }
//           .btn-black:hover {
//             background-color: #171717;
//           }
//           .hero-image {
//             overflow: hidden;
//             border-radius: 0.5rem;
//             box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//             clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
//           }
//           .hero-image img {
//             width: 100%;
//             height: auto;
//             transition: transform 0.3s;
//           }
//           .hero-image img:hover {
//             transform: scale(1.05);
//           }
//           .stats-section {
//             background-color: white;
//             padding: 2rem 1rem;
//             text-align: center;
//           }
//           .stats-grid {
//             display: grid;
//             grid-template-columns: repeat(2, 1fr);
//             gap: 1.5rem;
//           }
//           @media (min-width: 768px) {
//             .stats-grid {
//               grid-template-columns: repeat(6, 1fr);
//             }
//           }
//           .stats-item {
//             text-align: center;
//           }
//           .divider {
//             border-top: 2px solid #d1d5db;
//             margin: 2rem 0;
//             max-width: 1280px;
//             margin-left: auto;
//             margin-right: auto;
//           }
//           .what-we-do {
//             background-color: #000;
//             color: white;
//             padding: 3rem 1rem;
//             text-align: center;
//           }
//           .what-we-do-heading {
//             color: #fbbf24;
//             font-size: 1rem;
//             font-weight: 600;
//             margin-bottom: 1rem;
//           }
//           .services-section {
//             background-color: white;
//             padding: 2rem 1rem;
//           }
//           .services-grid {
//             display: grid;
//             grid-template-columns: 1fr;
//             gap: 2rem;
//             text-align: center;
//             max-width: 1280px;
//             margin: 0 auto;
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
//         `}
//       </style>

//       <section className="hero-section">
//         <div className="hero-container">
//           <div className="hero-text">
//             <h2 className="hero-heading">
//               We manage your IT, <br /> so you can manage your business.
//             </h2>
//             <p className="hero-description">
//               Take charge of your business continuity with innovative IT solutions.
//             </p>
//             <div className="button-group">
//               <button className="btn btn-red">
//                 Schedule a Free Consultation
//               </button>
//               <button className="btn btn-black">
//                 Services
//               </button>
//             </div>
//           </div>

//           <div className="hero-image">
//             <img
//               src="./heroimage.jpg"
//               alt="Team"
//             />
//           </div>
//         </div>
//       </section>

//       <hr className="divider" />

//       <section className="stats-section">
//         <div className="stats-grid">
//           <div className="stats-item">
//             <p>REVIEWED ON</p>
//             <h3>Clutch</h3>
//             <p className="text-red-500">★★★★★</p>
//             <p>2K+ REVIEWS</p>
//           </div>
//           <div className="stats-item">
//             <h4>08 Years</h4>
//             <p>Proven Track Record</p>
//           </div>
//         </div>
//       </section>

//       <section className="what-we-do">
//         <p className="what-we-do-heading">WHAT WE DO</p>
//         <h2>Simplifying IT <br /> for a complex world.</h2>
//       </section>

//       <section className="services-section">
//         <div className="services-grid">
//           <div>
//             <h3>Cost-effectiveness</h3>
//             <p>Affordable IT solutions to reduce costs and improve your bottom line.</p>
//           </div>
//           <div>
//             <h3>Innovative Technology</h3>
//             <p>Keeping you ahead with the latest technology trends.</p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HeroSection;



//updated $ plain css import React from 'react';

// const HeroSection = () => {
//   return (
//     <>
//       <style>
//         {`
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
//               <button>Services</button>
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
//     </>
//   );
// };

// export default HeroSection;

// import React from 'react';

// const HeroSection = () => {
//   return (
//     <>
//       <style>
//         {`
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
//               <button>Services</button>
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
//     </>
//   );
// };

// export default HeroSection;