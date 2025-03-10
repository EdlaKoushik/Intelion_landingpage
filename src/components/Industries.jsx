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
//       image: "./UpcomingEvents/img1.png",
//       date: 'SATURDAY, MARCH 29',
//       title: 'AI Centre of Excellence in Education',
//       time: '11 AM – 1 PM',
//       type: 'Webinar',
//       description: 'Discover how Finality and Ingram Micro leverage Microsoft Teams to transform hybrid work strategies.',
//       registerText: 'Register Today',
//     },
//     {
//       image: "./UpcomingEvents/img2.png",
//       date: 'SUNDAY, MAY 25',
//       title: 'Join Finality Green Horizons Summit 2025',
//       time: '12 AM – 2 PM',
//       type: 'New Delhi',
//       description: 'Explore innovative solutions for sustainability and green technology.',
//       registerText: 'Register Today',
//     },
//     {
//       image: "./UpcomingEvents/img3.png",
//       date: 'SUNDAY, SEPTEMBER 14',
//       title: 'Finality Ecosystem Partnerships Summit',
//       time: '4 PM – 8:30 PM',
//       type: 'Bangalore',
//       description: 'Collaborate with industry leaders and explore ecosystem opportunities.',
//       registerText: 'Register Today',
//     },
//   ];

//   return (
//     <>
//       <section className="my-12 px-4 md:px-8 lg:px-16 flex flex-col items-center">
//         <img
//           src="./image.png"
//           alt="Team"
//           className="w-full max-w-5xl h-auto object-cover rounded-2xl shadow-lg mb-8"
//         />
//         <span className="text-sm text-gray-500 mb-2 bg-gray-100 py-1 px-3 rounded-full">HOW WE DO</span>
//         <h2 className="text-3xl md:text-4xl font-bold text-[#1b0a3f] mb-10 text-center">
//           Solving IT challenges in every industry, every day.
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
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
//       </section>

//       <section className="px-4 md:px-8 lg:px-16 mb-12">
//         <h1 className="text-lg font-bold mb-4">Latest News</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {newsData.map((news, index) => (
//             <div key={index} className="border border-gray-100 rounded-lg shadow-sm">
//               <img src={news.image} alt={news.title} className="w-full h-40 object-cover rounded-t-lg" />
//               <div className="p-4">
//                 <h2 className="text-md font-semibold mb-1">{news.title}</h2>
//                 <p className="text-sm text-gray-700 mb-2">{news.description}</p>
//                 <a href="#" className="text-[#cf0844] hover:text-red-600 transition">{news.text}</a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="px-4 md:px-8 lg:px-16 mb-12">
//         <h1 className="text-lg font-bold mb-4">Upcoming Events</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
//                   className="bg-[#D40000] hover:bg-black text-white font-semibold text-lg rounded-full px-6 py-2 transition duration-300"
//                 >
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


//with plain css
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
      <style>
        {`
          .industries-section {
            margin: 3rem 0;
            padding: 0 1rem;
          }
          @media (min-width: 768px) {
            .industries-section {
              padding: 0 2rem;
            }
          }
          @media (min-width: 1024px) {
            .industries-section {
              padding: 0 4rem;
            }
          }
          .industries-section img {
            width: 100%;
            max-width: 80rem;
            height: auto;
            object-fit: cover;
            border-radius: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            margin-bottom: 2rem;
          }
          .industries-section span {
            font-size: 0.875rem;
            color: #6b7280;
            background-color: #f3f4f6;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            margin-bottom: 0.5rem;
          }
          .industries-section h2 {
            font-size: 2rem;
            font-weight: 700;
            color: #1b0a3f;
            margin-bottom: 2.5rem;
            text-align: center;
          }
          @media (min-width: 768px) {
            .industries-section h2 {
              font-size: 2.25rem;
            }
          }
          .industries-grid {
            display: grid;
            gap: 1.5rem;
            margin-bottom: 1.5rem;
          }
          @media (min-width: 640px) {
            .industries-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 768px) {
            .industries-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          .industry-button {
            display: flex;
            align-items: center;
            padding: 0.5rem 1rem;
            background-color: #f3f4f6;
            border-radius: 9999px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            transition: background-color 0.3s;
          }
          .industry-button:hover {
            background-color: #e5e7eb;
          }
          .industry-button img {
            width: 2rem;
            height: 2rem;
            border-radius: 9999px;
            margin-right: 0.5rem;
          }
          .industry-button span {
            font-size: 0.875rem;
            color: #1b0a3f;
          }
          .news-section {
            padding: 0 1rem;
            margin-bottom: 3rem;
          }
          @media (min-width: 768px) {
            .news-section {
              padding: 0 2rem;
            }
          }
          @media (min-width: 1024px) {
            .news-section {
              padding: 0 4rem;
            }
          }
          .news-section h1 {
            font-size: 1.125rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }
          .news-grid {
            display: grid;
            gap: 1.5rem;
          }
          @media (min-width: 640px) {
            .news-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 1024px) {
            .news-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }
          .news-card {
            border: 1px solid #f3f4f6;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .news-card img {
            width: 100%;
            height: 10rem;
            object-fit: cover;
            border-radius: 0.5rem 0.5rem 0 0;
          }
          .news-card-content {
            padding: 1rem;
          }
          .news-card h2 {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }
          .news-card p {
            font-size: 0.875rem;
            color: #4b5563;
            margin-bottom: 0.5rem;
          }
          .news-card a {
            color: #cf0844;
            font-size: 0.875rem;
            transition: color 0.3s;
          }
          .news-card a:hover {
            color: #dc2626;
          }
          .events-section {
            padding: 0 1rem;
            margin-bottom: 3rem;
          }
          @media (min-width: 768px) {
            .events-section {
              padding: 0 2rem;
            }
          }
          @media (min-width: 1024px) {
            .events-section {
              padding: 0 4rem;
            }
          }
          .events-section h1 {
            font-size: 1.125rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }
          .events-grid {
            display: grid;
            gap: 1.5rem;
          }
          @media (min-width: 640px) {
            .events-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 1024px) {
            .events-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          .event-card {
            border: 1px solid #f3f4f6;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .event-card img {
            width: 100%;
            height: 12rem;
            object-fit: cover;
            border-radius: 0.5rem 0.5rem 0 0;
          }
          .event-card-content {
            padding: 1rem;
          }
          .event-card h2 {
            font-size: 0.875rem;
            font-weight: 600;
            color: #4b5563;
            margin-bottom: 0.5rem;
          }
          .event-card h3 {
            font-size: 1.25rem;
            font-weight: 700;
            color: #1b0a3f;
            margin-bottom: 0.5rem;
          }
          .event-card p {
            font-size: 0.875rem;
            color: #4b5563;
            margin-bottom: 0.5rem;
          }
          .event-card button {
            background-color: #d40000;
            color: white;
            font-weight: 600;
            font-size: 1rem;
            padding: 0.5rem 1.5rem;
            border-radius: 9999px;
            transition: background-color 0.3s;
          }
          .event-card button:hover {
            background-color: black;
          }
        `}
      </style>

      <section className="industries-section">
        <img src="./image.png" alt="Team" />
        <span>HOW WE DO</span>
        <h2>Solving IT challenges in every industry, every day.</h2>

        <div className="industries-grid">
          {[
            { img: './finolity-industry-and-manufacuturing.jpg', text: 'Industry & Manufacturing' },
            { img: './gettyimages.jpg', text: 'Transportation & Logistics' },
            { img: './gettyimages2.jpg', text: 'Healthcare' },
            { img: './gettyimages3.jpg', text: 'Banks & Insurance' },
            { img: './gettyimages6.png', text: 'Consulting Providers' },
            { img: 'gettyimages5.jpg', text: 'Non-Profit' }
          ].map((industry, index) => (
            <button key={index} className="industry-button">
              <img src={industry.img} alt={industry.text} />
              <span>{industry.text}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="news-section">
        <h1>Latest News</h1>
        <div className="news-grid">
          {newsData.map((news, index) => (
            <div key={index} className="news-card">
              <img src={news.image} alt={news.title} />
              <div className="news-card-content">
                <h2>{news.title}</h2>
                <p>{news.description}</p>
                <a href="#">{news.text}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="events-section">
        <h1>Upcoming Events</h1>
        <div className="events-grid">
          {eventsData.map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.image} alt={event.title} />
              <div className="event-card-content">
                <h2>{event.date}</h2>
                <h3>{event.title}</h3>
                <p>
                  <span>{event.time}</span> | {event.type}
                </p>
                <p>{event.description}</p>
                <button>{event.registerText}</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Industries;