import React from "react";
import lolo from "../../assets/photo/loloohcrop.png";
import photo2 from "../../assets/photo/photo2.jpg";
import photo3 from "../../assets/photo/photo3.jpg";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-300 p-8 flex flex-col items-center">
      {/* About OhCrop Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        <div className="relative">
          <img
            src={lolo}
            alt="About OhCrop"
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-green-700">
            About OhCrop
          </h2>
          <p className="text-gray-700 mb-4">
            OhCrop is a revolutionary solution designed to transform the way you
            manage and monitor your hydroponic systems. With advanced control
            features, real-time adjustments, and accurate monitoring, we ensure
            that your crops are always in the best possible conditions.
          </p>
          <h3 className="text-2xl font-semibold mb-2 text-green-600">
            Our Mission
          </h3>
          <p className="text-gray-700 mb-4">
            Our mission is to provide innovative and reliable tools to
            hydroponic farmers, helping them to achieve higher yields and better
            crop quality through precise environmental control and monitoring.
          </p>
          <h3 className="text-2xl font-semibold mb-2 text-green-600">
            Features
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Real-time monitoring and adjustments</li>
            <li>Accurate sensors for environmental tracking</li>
            <li>User-friendly app for easy navigation</li>
            <li>Advanced analytics tools</li>
          </ul>
          <p className="text-gray-700">
            Join us in revolutionizing hydroponic farming with cutting-edge
            technology and unparalleled support. Experience the future of
            farming with OhCrop.
          </p>
        </div>
      </div>

      {/* Completed Projects Section */}
      <div className="w-full max-w-6xl mt-8">
        <h2 className="text-3xl font-bold mb-4 text-green-700 text-center relative">
          <span className="absolute inset-y-0 left-0 flex items-center">
            <div className="w-24 h-0.5 bg-green-700 mr-2"></div>
          </span>
          <span className="relative inline-block px-4">Completed Projects</span>
          <span className="absolute inset-y-0 right-0 flex items-center">
            <div className="w-24 h-0.5 bg-green-700 ml-2"></div>
          </span>
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 p-4">
            <img
              src={photo2}
              alt="Project 1"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-green-600">
              Urban Hydroponic Farm
            </h3>
            <p className="text-gray-700">
              A successful implementation of an urban hydroponic farm, featuring
              advanced monitoring and control systems, leading to increased crop
              yields and sustainability.
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <img
              src={photo3}
              alt="Project 2"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-green-600">
              Rural Community Project
            </h3>
            <p className="text-gray-700">
              Empowering rural communities with hydroponic systems, providing
              training and tools to improve local food production and economic
              opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose OhCrop Section */}
      <div className="w-full max-w-6xl mt-8">
        <h2 className="text-3xl font-bold mb-4 text-green-700 text-center relative">
          <span className="absolute inset-y-0 left-0 flex items-center">
            <div className="w-24 h-0.5 bg-green-700 mr-2"></div>
          </span>
          <span className="relative inline-block px-4">Why Choose OhCrop</span>
          <span className="absolute inset-y-0 right-0 flex items-center">
            <div className="w-24 h-0.5 bg-green-700 ml-2"></div>
          </span>
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 p-4 flex flex-col items-center">
            <div className="text-green-600 text-5xl mb-4">
              {/* Add your sustainability icon here */}
            </div>
            <h3 className="text-xl font-semibold text-green-600">
              Sustainability
            </h3>
            <p className="text-gray-700 text-center">
              Our systems promote sustainable farming practices, reducing water
              usage and maximizing crop yields without the need for soil.
            </p>
          </div>
          <div className="md:w-1/3 p-4 flex flex-col items-center">
            <div className="text-green-600 text-5xl mb-4">
              {/* Add your innovation icon here */}
            </div>
            <h3 className="text-xl font-semibold text-green-600">Innovation</h3>
            <p className="text-gray-700 text-center">
              We leverage cutting-edge technology to provide real-time data and
              insights, allowing farmers to make informed decisions for optimal
              crop growth.
            </p>
          </div>
          <div className="md:w-1/3 p-4 flex flex-col items-center">
            <div className="text-green-600 text-5xl mb-4">
              {/* Add your convenience icon here */}
            </div>
            <h3 className="text-xl font-semibold text-green-600">
              Convenience
            </h3>
            <p className="text-gray-700 text-center">
              Our user-friendly app makes it easy to manage your hydroponic
              systems from anywhere, ensuring your crops are always thriving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
