import React, { useState } from "react";
import { Button, Card } from "antd";
import photo1 from "../../assets/photo/photo1.jpg";
import photo2 from "../../assets/photo/photo2.jpg";
import photo3 from "../../assets/photo/photo3.jpg";

const categories = [
  {
    name: "OhCrop Monitoring & Control",
    icon: "📊",
    description:
      "Manage and monitor your hydroponic systems with our advanced control features. Our system allows real-time adjustments and monitoring, ensuring your crops are always in the best conditions.",
    additionalInfo:
      "Advanced analytics tools provide insights into system performance and crop health.",
    image: photo1,
  },
  {
    name: "OhCrop Monitoring Sensors",
    icon: "🖥️",
    description:
      "Accurate sensors to track the environmental conditions of your hydroponic setup. These sensors monitor pH levels, humidity, temperature, and nutrient concentrations, providing crucial data for optimal growth.",
    additionalInfo:
      "Sensors are calibrated for high precision and reliability.",
    image: photo2,
  },
  {
    name: "OhCrop App Navigation",
    icon: "📱",
    description:
      "User-friendly app for navigating and managing your hydroponic systems. With intuitive design and easy access to all features, our app makes managing your hydroponic farm simple and efficient.",
    additionalInfo:
      "The app includes a dashboard for quick access to critical system data.",
    image: photo3,
  },
  {
    name: "What is Hydroponic",
    icon: "🌿",
    description:
      "Learn about hydroponics, its benefits, and how it can transform your farming practices. Hydroponics allows for soil-free farming, which can lead to faster growth, higher yields, and reduced resource usage.",
    additionalInfo:
      "Explore various hydroponic techniques and their advantages.",
    image: photo1, // Update with the appropriate photo if needed
  },
  {
    name: "Hydroponic Crops",
    icon: "🍅",
    description:
      "Discover the variety of crops that can be grown hydroponically. From leafy greens to fruits, many crops thrive in hydroponic systems, offering fresh produce year-round.",
    additionalInfo:
      "Includes a guide to selecting the best crops for your system.",
    image: photo2, // Update with the appropriate photo if needed
  },
  {
    name: "Hydroponics Systems",
    icon: "💧",
    description:
      "Explore different hydroponic systems and their applications. Learn about nutrient film technique (NFT), deep water culture (DWC), aeroponics, and other methods to find the best fit for your needs.",
    additionalInfo:
      "Comparative analysis of various hydroponic systems to help you choose the right one.",
    image: photo3, // Update with the appropriate photo if needed
  },
];

function KnowHow() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-300 flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 p-4">
        <h2 className="text-3xl font-bold mb-8 text-violet-700">Know How</h2>
        <div className="flex flex-col space-y-2">
          {categories.map((category, index) => (
            <Button
              key={index}
              onClick={() => setActiveCategory(category)}
              className="flex items-center p-4 rounded-lg transition-colors duration-300 text-left"
              style={{
                border: "none",
                width: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent to blend with background
                color: "#333",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
              }}
              // Add subtle hover effect
              hover={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
            >
              <span className="mr-3 text-2xl">{category.icon}</span>
              <span className="flex-1">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
      <div className="w-full md:w-3/4 p-4">
        {activeCategory ? (
          <div>
            <Card
              title={
                <div className="flex items-center">
                  <span className="text-3xl mr-3">{activeCategory.icon}</span>
                  <span className="text-2xl font-semibold">
                    {activeCategory.name}
                  </span>
                </div>
              }
              cover={
                <img
                  src={activeCategory.image}
                  alt={activeCategory.name}
                  className="w-full h-64 object-cover rounded-t-lg" // Rounded top corners
                />
              }
              bordered={false}
              className="mb-4 shadow-lg rounded-lg"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }} // Slightly opaque to blend with background
            >
              <p className="mb-4">{activeCategory.description}</p>
              <p className="font-semibold">{activeCategory.additionalInfo}</p>
            </Card>
          </div>
        ) : (
          <p className="text-center text-lg text-gray-600">
            Select a category to see more information
          </p>
        )}
      </div>
    </div>
  );
}

export default KnowHow;
