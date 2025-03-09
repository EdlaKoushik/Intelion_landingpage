import React, { useState } from 'react';

function VideoContentSection() {
  // Data for customer reviews
  const reviews = [
    {
      text: "I've been a customer for more than a decade. Finolity is an example of the way Managed Services should be done. They do their very best to make sure you succeed. If there's an issue, they step in immediately. We will continue to be a customer for years to come.",
      author: "Shivam Rana",
      role: "CIO, Kailasa Pictures",
      rating: "4.9",
      reviewsCount: "2K+ REVIEWS",
    },
    {
      text: "The platform is incredibly reliable and has made remote work seamless for our team. The support team is always available to help with any issues.",
      author: "Priya Sharma",
      role: "CTO, Tech Innovators",
      rating: "4.8",
      reviewsCount: "1.5K+ REVIEWS",
    },
    {
      text: "Finolity has transformed the way we work. Their platform is user-friendly, and their customer service is top-notch.",
      author: "Rahul Mehta",
      role: "CEO, Digital Solutions",
      rating: "5.0",
      reviewsCount: "2.5K+ REVIEWS",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  const handlePrevious = () => {
    setCurrentReview((prev) => (prev > 0 ? prev - 1 : reviews.length - 1));
  };

  const handleNext = () => {
    setCurrentReview((prev) => (prev < reviews.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Flex Container for Video and Content */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Side: Video */}
          <div className="w-full md:w-1/2 ">
            <div className="relative aspect-w-16 aspect-h-9 h-50 ">
              <iframe
                src="https://www.youtube.com/embed/ooc07OyCQDI" // Replace with your video URL
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-1/2">
            {/* Customer Reviews Section */}
            <div className="relative">
              
              {/* Review Content */}
              <div className="text-start">
                <p className="text-lg text-gray-600 mb-4">
                  {reviews[currentReview].text}
                </p>
                <h3 className="text-xl font-bold text-[#1b0a3f] mb-1">
                  {reviews[currentReview].author}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {reviews[currentReview].role}
                </p>

                {/* Div Container for Arrows and Reviews */}
                <div className="flex space-x-4 items-center">
                  {/* Left and Right Arrows */}
                  <div className="flex space-x-4">
                    <button
                      onClick={handlePrevious}
                      className="bg-gray-300 p-2 rounded-full shadow-lg text-gray-700 hover:text-[#cf0844] transition"
                    >
                      &lt;
                    </button>
                    <button
                      onClick={handleNext}
                      className="bg-gray-300 p-2 rounded-full shadow-lg text-gray-700 hover:text-[#cf0844] transition"
                    >
                      &gt;
                    </button>
                  </div>

                  {/* Clutch Review */}
                  <div className="flex items-start space-x-4">
                    <div className="flex flex-col text-start">
                      <span className="text-sm text-gray-600">REVIEWED ON</span>
                      <img src="./clutch-logo.svg" alt="Clutch" className="h-5 mt-1" />
                    </div>
                    <div className="flex flex-col text-start">
                      <span className="text-sm text-[#cf0844]">★★★★★</span>
                      <span className="text-sm text-gray-600 mt-1">2K+ REVIEWS</span>
                    </div>
                  </div>

                  {/* Google Review */}
                  <div className="flex items-start space-x-4 pl-4">
                    <img src="./Google_22G22_Logo.svg" alt="Google" className="h-12" />
                    <div className="flex flex-col text-start">
                      <div className="flex items-center space-x-1">
                        <span className="bg-gray-200 p-1 rounded">4.9</span>
                        <span className="text-yellow-500">★★★★☆</span>
                      </div>
                      <span className="text-sm text-gray-600 mt-1">CUSTOMER REVIEWS</span>
                    </div>
                  </div>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoContentSection;



