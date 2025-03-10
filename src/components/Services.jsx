// import React from 'react';
// import { ShieldCheck, Code, Smartphone, Cloud, Settings, Briefcase } from 'lucide-react';

// const ServicesComponent = () => {
//   return (
//     <section className=" bg-gray-100 py-16  left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
//       <div className="max-w-7xl mx-auto px-8">
//         <p className="text-gray-500 text-sm mb-2">HOW WE DO</p>
//         <h2 className="text-4xl font-bold text-red-600 mb-12">Solutions</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer ">
          
//           {/* Managed Services Card */}
//           <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between h-[350px] hover:shadow-lg  transition-transform duration-300 transform hover:scale-105">
//             <Settings className="text-red-600 w-10 h-10 mb-4" />
//             <h3 className="text-xl font-semibold mb-2 hover:text-blue-500">Managed Services</h3>
//             <div className="mb-4 border-b border-gray-300 pb-4">
//               <p className="text-gray-600 text-left">
//                 Free up your internal resources to focus on the business by letting us handle day-to-day support services, management, and monitoring of your IT.
//               </p>
//             </div>
//             <a
//               href="#"
//               className="relative text-red-600 font-medium hover:text-red-800 transition duration-300 text-left"
//             >
//               Learn more
//             </a>
//           </div>

//           {/* IT Consulting & Advisory Card */}
//           <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between h-[350px] hover:shadow-lg  transition-transform duration-300 transform hover:scale-105">
//             <Briefcase className="text-red-600 w-10 h-10 mb-4" />
//             <h3 className="text-xl font-semibold mb-2 hover:text-blue-500">IT Consulting & Advisory</h3>
//             <div className="mb-4 border-b border-gray-300 pb-4">
//               <p className="text-gray-600 text-left">
//                 The right technology, implemented properly, can lead to significant gains in growth.
//               </p>
//             </div>
//             <a
//               href="#"
//               className="relative text-red-600 font-medium hover:text-red-800 transition duration-300 text-left"
//             >
//               Learn more
//             </a>  
//           </div>

//           {/* Cyber Security Card */}
//           <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between h-[350px] hover:shadow-lg  transition-transform duration-300 transform hover:scale-105">
//             <ShieldCheck className="text-red-600 w-10 h-10 mb-4" />
//             <h3 className="text-xl font-semibold mb-2 hover:text-blue-500">Cyber Security</h3>
//             <div className="mb-4 border-b border-gray-300 pb-4">
//               <p className="text-gray-600 text-left">
//                 Our experts can identify vulnerabilities, assess risks, and implement robust security measures.
//               </p>
//             </div>
//             <a
//               href="#"
//               className="relative text-red-600 font-medium hover:text-red-800 transition duration-300 text-left"
//             >
//               Learn more
//             </a>
//           </div>

//           {/* Web Development Card */}
//           <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between h-[350px] hover:shadow-lg  transition-transform duration-300 transform hover:scale-105">
//             <Code className="text-red-600 w-10 h-10 mb-4" />
//             <h3 className="text-xl font-semibold mb-2 hover:text-blue-500">Web Development</h3>
//             <div className="mb-4 border-b border-gray-300 pb-4">
//               <p className="text-gray-600 text-left">
//                 Our web development services can help you establish an impactful online presence.
//               </p>
//             </div>
//             <a
//               href="#"
//               className="relative text-red-600 font-medium hover:text-red-800 transition duration-300 text-left"
//             >
//               Learn more
//             </a>
//           </div>

//           {/* Mobile Development Card */}
//           <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between h-[350px] hover:shadow-lg  transition-transform duration-300 transform hover:scale-105">
//             <Smartphone className="text-red-600 w-10 h-10 mb-4" />
//             <h3 className="text-xl font-semibold mb-2 hover:text-blue-500">Mobile Development</h3>
//             <div className="mb-4 border-b border-gray-300 pb-4">
//               <p className="text-gray-600 text-left">
//                 We can help you create a customized mobile app that aligns with your brand and goals.
//               </p>
//             </div>
//             <a
//               href="#"
//               className="relative text-red-600 font-medium hover:text-red-800 transition duration-300 text-left"
//             >
//               Learn more
//             </a>
//           </div>

//           {/* Cloud Services Card */}
//           <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between h-[350px] hover:shadow-lg  transition-transform duration-300 transform hover:scale-105">
//             <Cloud className="text-red-600 w-10 h-10 mb-4" />
//             <h3 className="text-xl font-semibold mb-2 hover:text-blue-500">Cloud Services</h3>
//             <div className="mb-4 border-b border-gray-300 pb-4">
//               <p className="text-gray-600 text-left">
//                 With our expertise in cloud technologies, we can help you find the right cloud solutions.
//               </p>
//             </div>
//             <a
//               href="#"
//               className="relative text-red-600 font-medium hover:text-red-800 transition duration-300 text-left"
//             >
//               Learn more
//             </a>
//           </div>

//         </div>

//         <div className="flex justify-center mt-12">
//           <button className="px-6 py-2 bg-black text-white rounded-lg font-semibold transition-colors hover:bg-gray-800 cursor-pointer">
//             View All Solutions
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesComponent;



//responsive 

// import React from 'react';
// import { ShieldCheck, Code, Smartphone, Cloud, Settings, Briefcase } from 'lucide-react';

// const ServicesComponent = () => {
//   return (
//     <section className="bg-gray-100 py-16 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <p className="text-gray-500 text-sm mb-2 text-center">HOW WE DO</p>
//         <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-12 text-center">Solutions</h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
//           {[
//             {
//               icon: <Settings className="text-red-600 w-10 h-10 mb-4" />,
//               title: 'Managed Services',
//               description: 'Free up your internal resources to focus on the business by letting us handle day-to-day support services, management, and monitoring of your IT.',
//             },
//             {
//               icon: <Briefcase className="text-red-600 w-10 h-10 mb-4" />,
//               title: 'IT Consulting & Advisory',
//               description: 'The right technology, implemented properly, can lead to significant gains in growth.',
//             },
//             {
//               icon: <ShieldCheck className="text-red-600 w-10 h-10 mb-4" />,
//               title: 'Cyber Security',
//               description: 'Our experts can identify vulnerabilities, assess risks, and implement robust security measures.',
//             },
//             {
//               icon: <Code className="text-red-600 w-10 h-10 mb-4" />,
//               title: 'Web Development',
//               description: 'Our web development services can help you establish an impactful online presence.',
//             },
//             {
//               icon: <Smartphone className="text-red-600 w-10 h-10 mb-4" />,
//               title: 'Mobile Development',
//               description: 'We can help you create a customized mobile app that aligns with your brand and goals.',
//             },
//             {
//               icon: <Cloud className="text-red-600 w-10 h-10 mb-4" />,
//               title: 'Cloud Services',
//               description: 'With our expertise in cloud technologies, we can help you find the right cloud solutions.',
//             },
//           ].map((service, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between h-auto hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
//             >
//               {service.icon}
//               <h3 className="text-xl font-semibold mb-2 hover:text-blue-500">{service.title}</h3>
//               <div className="mb-4 border-b border-gray-300 pb-4">
//                 <p className="text-gray-600 text-left">{service.description}</p>
//               </div>
//               <a
//                 href="#"
//                 className="relative text-red-600 font-medium hover:text-red-800 transition duration-300 text-left"
//               >
//                 Learn more
//               </a>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center mt-12">
//           <button className="px-6 py-2 bg-black text-white rounded-lg font-semibold transition-colors hover:bg-gray-800 cursor-pointer">
//             View All Solutions
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesComponent;


// with plain css

import React from 'react';
import { ShieldCheck, Code, Smartphone, Cloud, Settings, Briefcase } from 'lucide-react';

const ServicesComponent = () => {
  return (
    <section className="services-section">
      <style>
        {`
          .services-section {
            background-color: #f3f4f6;
            padding: 4rem 0;
            position: relative;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
            width: 100vw;
          }
          .services-container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 1rem;
          }
          @media (min-width: 640px) {
            .services-container {
              padding: 0 1.5rem;
            }
          }
          @media (min-width: 1024px) {
            .services-container {
              padding: 0 2rem;
            }
          }
          .services-section p {
            color: #6b7280;
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
            text-align: center;
          }
          .services-section h2 {
            color: #dc2626;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 3rem;
            text-align: center;
          }
          @media (min-width: 768px) {
            .services-section h2 {
              font-size: 2.25rem;
            }
          }
          .services-grid {
            display: grid;
            gap: 2rem;
          }
          @media (min-width: 640px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          .service-card {
            background-color: white;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            border-radius: 0.5rem;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: auto;
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .service-card:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
          .service-card svg {
            color: #dc2626;
            width: 2.5rem;
            height: 2.5rem;
            margin-bottom: 1rem;
          }
          .service-card h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #1e293b;
            transition: color 0.3s;
          }
          .service-card h3:hover {
            color: #3b82f6;
          }
          .service-card .description {
            color: #4b5563;
            margin-bottom: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #e5e7eb;
          }
          .service-card a {
            color: #dc2626;
            font-weight: 500;
            text-align: left;
            transition: color 0.3s;
          }
          .service-card a:hover {
            color: #991b1b;
          }
          .view-all-button {
            display: flex;
            justify-content: center;
            margin-top: 3rem;
          }
          .view-all-button button {
            background-color: black;
            color: white;
            padding: 0.5rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          .view-all-button button:hover {
            background-color: #1f2937;
          }
        `}
      </style>

      <div className="services-container">
        <p>HOW WE DO</p>
        <h2>Solutions</h2>

        <div className="services-grid">
          {[
            {
              icon: <Settings className="service-icon" />,
              title: 'Managed Services',
              description:
                'Free up your internal resources to focus on the business by letting us handle day-to-day support services, management, and monitoring of your IT.',
            },
            {
              icon: <Briefcase className="service-icon" />,
              title: 'IT Consulting & Advisory',
              description:
                'The right technology, implemented properly, can lead to significant gains in growth.',
            },
            {
              icon: <ShieldCheck className="service-icon" />,
              title: 'Cyber Security',
              description:
                'Our experts can identify vulnerabilities, assess risks, and implement robust security measures.',
            },
            {
              icon: <Code className="service-icon" />,
              title: 'Web Development',
              description:
                'Our web development services can help you establish an impactful online presence.',
            },
            {
              icon: <Smartphone className="service-icon" />,
              title: 'Mobile Development',
              description:
                'We can help you create a customized mobile app that aligns with your brand and goals.',
            },
            {
              icon: <Cloud className="service-icon" />,
              title: 'Cloud Services',
              description:
                'With our expertise in cloud technologies, we can help you find the right cloud solutions.',
            },
          ].map((service, index) => (
            <div key={index} className="service-card">
              {service.icon}
              <h3>{service.title}</h3>
              <div className="description">{service.description}</div>
              <a href="#">Learn more</a>
            </div>
          ))}
        </div>

        <div className="view-all-button">
          <button>View All Solutions</button>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;