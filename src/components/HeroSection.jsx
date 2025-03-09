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

