
// import React from 'react';

// const Industries = () => {
//   const newsData = [
//     { image: './LatestNews/img1.png', title: 'ABP NEWS | January 24, 2024', description: "Empowering Universities: Finolity's Digital Campus Program And Strategic Partnerships", text: 'Read more' },
//     { image: './LatestNews/img2.png', title: 'NDTVProfit | October 25, 2024', description: "Finolity Becomes Authorized Corel Partner, Offering Cutting-Edge Software Solutions to Businesses", text: 'Read more' },
//     { image: './LatestNews/img3.png', title: 'Economictimes | December 1, 2024', description: "Finolity Achieves Certified Adobe Reseller Status, Expanding Access to Premium Creative Tools", text: 'Read more' },
//     { image: './LatestNews/img4.png', title: 'The Straits Times | November 4, 2024', description: "Finolity Launches New Brand 'Namestair' to Provide Affordable Cloud Services and Domain Solutions for SMBs", text: 'Read more' },
//   ];

//   const eventsData = [
//     {
//       image:"./UpcomingEvents/img1.png",
//       date: 'SATURDAY, MARCH 29',
//       title: 'AI Centre of Excellence in Education',
//       time: '11 AM – 1 PM',
//       type: 'Webinar',
//       description: 'Discover how Finality and Ingram Micro leverage Microsoft Teams to transform hybrid work strategies, improve collaboration, and drive productivity for businesses.',
//       // Replace with actual image path
//       registerText: 'Register Today',
//     },
//     {
//       image:"./UpcomingEvents/img2.png",
//       date: 'SUNDAY, MAY 25',
//       title: 'Join Finality Green Horizons Summit 2025',
//       time: '12 AM – 2 PM',
//       type: 'New Delhi',
//       description: 'Join the **Finality Green Horizons Summit 2025** to explore innovative solutions for sustainability and green technology. Discover actionable insights and network with industry leaders driving a cleaner, greener future.',
//       // Replace with actual image path
//       registerText: 'Register Today',
//     },
//     {
//       image:"./UpcomingEvents/img3.png",
//       date: 'SUNDAY, SEPTEMBER 14',
//       title: 'Finality Ecosystem Partnerships Summit',
//       time: '4 PM – 8:30 PM',
//       type: 'Bangalore',
//       description: 'Join the **Finality Ecosystem Partnerships Summit** to collaborate with industry leaders and explore opportunities in building robust, innovative ecosystems. Discover strategies to foster growth, partnerships, and technological advancements.',
//        // Replace with actual image path
//       registerText: 'Register Today',
//     },
//   ];

//   return (
//     <>
//       <section className="my-12 px-6 flex flex-col items-center">
//         {/* Main Image */}
//         <img
//           src="./image.png"  // Replace with your image path
//           alt="Team"
//           className="w-full max-w-5xl h-auto object-cover rounded-2xl shadow-lg mb-8"
//         />

//         {/* Tagline and Heading */}
//         <span className="text-sm text-gray-500 mb-2 bg-gray-100 w-25 border-lg">HOW WE DO</span>
//         <h2 className="text-4xl font-bold text-[#1b0a3f] mb-10 text-center">
//           Solving IT challenges in every industry, every day.
//         </h2>

//         {/* Industry Buttons Grid */}
//         <div className="grid grid-cols-3 gap-8 mb-6">
//           {[
//             { img: './finolity-industry-and-manufacuturing.jpg', text: 'Industry & Manufacturing' },
//             { img: './gettyimages.jpg', text: 'Transportation & Logistics' },
//             { img: './gettyimages2.jpg', text: 'Healthcare' },
//             { img: './gettyimages3.jpg', text: 'Banks & Insurance' },
//             { img: './gettyimages6.png', text: 'Consulting Providers' },
//             { img: 'gettyimages5.jpg', text: 'Non-Profit' }
//           ].map((industry, index) => (
//             <button
//               key={index}
//               className="flex items-center px-4 py-2 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition"
//             >
//               <img
//                 src={`./${industry.img}`}
//                 alt={industry.text}
//                 className="w-8 h-8 rounded-full mr-2"
//               />
//               <span className="text-sm text-[#1b0a3f]">{industry.text}</span>
//             </button>
//           ))}
//         </div>

//         <a href="#" className="relative text-[#570e24] text-sm mb-12 hover:text-red-600 transition after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#1b0a3f] after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300">
//           View All Industries
//         </a>
//       </section>

//       <section className="text-left px-2">
//         <a
//           href="#"
//           className="relative text-[#570e24] text-sm mb-12 hover:text-red-600 transition after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#1b0a3f] after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300"
//         >
//           About Finolity Consultancy Services
//         </a>
//         <h1 className="text-lg font-bold mt-6 mb-4">Latest News</h1>
//         <div className="grid grid-cols-4 gap-4">
//           {newsData.map((news, index) => (
//             <div
//               key={index}
//               className="border border-gray-100 rounded-lg shadow-sm"
//             >
//               <img src={news.image} alt={news.title} className="w-full h-40 object-cover rounded-t-lg" />
//               <div className="p-4">
//                 <h2 className="text-md font-semibold mb-1">{news.title}</h2>
//                 <p className="text-sm text-gray-700 mb-2">{news.description}</p>
//                 <a href="#" className="relative text-[#cf0844] text-sm mb-12 hover:text-red-600 transition after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#1b0a3f] after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300">
//                   {news.text}
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Upcoming Events Section */}
//       <section className="text-left px-2 mt-12">
//         <h1 className="text-lg font-bold mt-6 mb-4">Upcoming Events</h1>
//         <div className="grid grid-cols-3 gap-6">
//           {eventsData.map((event, index) => (
//             <div key={index} className="border border-gray-100 rounded-lg shadow-sm">
//               <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-t-lg" />
//               <div className="p-4">
//                 <h2 className="text-md font-semibold text-gray-700 mb-2">{event.date}</h2>
//                 <h3 className="text-xl font-bold text-[#1b0a3f] mb-2">{event.title}</h3>
//                 <p className="text-sm text-gray-600 mb-1">
//                   <span className="font-semibold">{event.time}</span> | {event.type}
//                 </p>
//                 <p className="text-sm text-gray-700 mb-4">{event.description}</p>
//                 <button
//                   href="#"
//                    className="border cursor-pointer  text-white bg-[#D40000] hover:bg-black font-semibold text-lg rounded px-6 py-3 transition transform duration-300 ease-in-out ">
                
//                   {event.registerText}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Industries;


//responsive 


import React from 'react';

const Industries = () => {
  const newsData = [
    { image: './LatestNews/img1.png', title: 'ABP NEWS | January 24, 2024', description: "Empowering Universities: Finolity's Digital Campus Program And Strategic Partnerships", text: 'Read more' },
    { image: './LatestNews/img2.png', title: 'NDTVProfit | October 25, 2024', description: "Finolity Becomes Authorized Corel Partner, Offering Cutting-Edge Software Solutions to Businesses", text: 'Read more' },
    { image: './LatestNews/img3.png', title: 'Economictimes | December 1, 2024', description: "Finolity Achieves Certified Adobe Reseller Status, Expanding Access to Premium Creative Tools", text: 'Read more' },
    { image: './LatestNews/img4.png', title: 'The Straits Times | November 4, 2024', description: "Finolity Launches New Brand 'Namestair' to Provide Affordable Cloud Services and Domain Solutions for SMBs", text: 'Read more' },
  ];

  const eventsData = [
    {
      image: "./UpcomingEvents/img1.png",
      date: 'SATURDAY, MARCH 29',
      title: 'AI Centre of Excellence in Education',
      time: '11 AM – 1 PM',
      type: 'Webinar',
      description: 'Discover how Finality and Ingram Micro leverage Microsoft Teams to transform hybrid work strategies.',
      registerText: 'Register Today',
    },
    {
      image: "./UpcomingEvents/img2.png",
      date: 'SUNDAY, MAY 25',
      title: 'Join Finality Green Horizons Summit 2025',
      time: '12 AM – 2 PM',
      type: 'New Delhi',
      description: 'Explore innovative solutions for sustainability and green technology.',
      registerText: 'Register Today',
    },
    {
      image: "./UpcomingEvents/img3.png",
      date: 'SUNDAY, SEPTEMBER 14',
      title: 'Finality Ecosystem Partnerships Summit',
      time: '4 PM – 8:30 PM',
      type: 'Bangalore',
      description: 'Collaborate with industry leaders and explore ecosystem opportunities.',
      registerText: 'Register Today',
    },
  ];

  return (
    <>
      <section className="my-12 px-4 md:px-8 lg:px-16 flex flex-col items-center">
        <img
          src="./image.png"
          alt="Team"
          className="w-full max-w-5xl h-auto object-cover rounded-2xl shadow-lg mb-8"
        />
        <span className="text-sm text-gray-500 mb-2 bg-gray-100 py-1 px-3 rounded-full">HOW WE DO</span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1b0a3f] mb-10 text-center">
          Solving IT challenges in every industry, every day.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {[
            { img: './finolity-industry-and-manufacuturing.jpg', text: 'Industry & Manufacturing' },
            { img: './gettyimages.jpg', text: 'Transportation & Logistics' },
            { img: './gettyimages2.jpg', text: 'Healthcare' },
            { img: './gettyimages3.jpg', text: 'Banks & Insurance' },
            { img: './gettyimages6.png', text: 'Consulting Providers' },
            { img: 'gettyimages5.jpg', text: 'Non-Profit' }
          ].map((industry, index) => (
            <button
              key={index}
              className="flex items-center px-4 py-2 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition"
            >
              <img
                src={`./${industry.img}`}
                alt={industry.text}
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="text-sm text-[#1b0a3f]">{industry.text}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-16 mb-12">
        <h1 className="text-lg font-bold mb-4">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsData.map((news, index) => (
            <div key={index} className="border border-gray-100 rounded-lg shadow-sm">
              <img src={news.image} alt={news.title} className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-md font-semibold mb-1">{news.title}</h2>
                <p className="text-sm text-gray-700 mb-2">{news.description}</p>
                <a href="#" className="text-[#cf0844] hover:text-red-600 transition">{news.text}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-16 mb-12">
        <h1 className="text-lg font-bold mb-4">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData.map((event, index) => (
            <div key={index} className="border border-gray-100 rounded-lg shadow-sm">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-md font-semibold text-gray-700 mb-2">{event.date}</h2>
                <h3 className="text-xl font-bold text-[#1b0a3f] mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold">{event.time}</span> | {event.type}
                </p>
                <p className="text-sm text-gray-700 mb-4">{event.description}</p>
                <button
                  className="bg-[#D40000] hover:bg-black text-white font-semibold text-lg rounded-full px-6 py-2 transition duration-300"
                >
                  {event.registerText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Industries;
