import React, { useState, useRef } from "react";
import { Col, Row, Button, Modal } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import logo from "../../assets/logo/ohcropicon.png";
import photo1 from "../../assets/photo/photo1.jpg";
import photo2 from "../../assets/photo/photo2.jpg";
import photo3 from "../../assets/photo/photo3.jpg";

const slides = [logo, photo1, photo2, photo3];

const features = [
  {
    title: "Monitoring",
    description: "Real-time data on your crop environment.",
    icon: "🌱",
    modalContent:
      "Our monitoring system provides real-time data on various crop conditions such as pH, nutrients, and humidity, allowing for timely adjustments to ensure optimal growth.",
  },
  {
    title: "Control",
    description: "Manage crop conditions remotely.",
    icon: "🖥️",
    modalContent:
      "The control feature allows you to manage your crop conditions remotely, ensuring that you can make necessary adjustments even when you are not on-site.",
  },
  {
    title: "Crop Track",
    description: "Track growth progress over time.",
    icon: "📈",
    modalContent:
      "Crop Track helps you monitor and track the growth progress of your crops over time, giving you insights into their development and health.",
  },
  {
    title: "Report",
    description: "Generate detailed reports.",
    icon: "📊",
    modalContent:
      "Generate detailed reports on crop performance, environmental conditions, and system status to make informed decisions and improvements.",
  },
  {
    title: "Live",
    description: "Live video feed of your crops.",
    icon: "🎥",
    modalContent:
      "Live feature provides real-time video feeds of your crops, allowing you to visually inspect and monitor their condition from anywhere.",
  },
  {
    title: "Know How",
    description: "Guides and tutorials for optimal usage.",
    icon: "📚",
    modalContent:
      "Access guides and tutorials to help you get the most out of our system and optimize your crop management practices.",
  },
  {
    title: "Calculator",
    description: "Calculate resource needs and yields.",
    icon: "🧮",
    modalContent:
      "The calculator feature helps you determine resource needs and predict yields, aiding in efficient planning and resource management.",
  },
];

const hydroponicsArticles = [
  {
    title: "Introduction to Hydroponics",
    description:
      "Hydroponics is a method of growing plants without soil, using nutrient-rich water to deliver essential nutrients directly to the plant roots. This technique allows for precise control over the growing conditions, leading to faster growth and higher yields. Discover the fundamental principles of hydroponics and how it can revolutionize modern agriculture.",
    image: photo1,
    link: "https://example.com/introduction-to-hydroponics",
  },
  {
    title: "Hydroponic Systems Explained",
    description:
      "Explore various hydroponic systems, including Deep Water Culture (DWC), Nutrient Film Technique (NFT), and Ebb and Flow systems. Each system has its advantages and is suitable for different types of crops and growing environments. Learn how these systems work and their benefits for efficient crop production.",
    image: photo2,
    link: "https://example.com/hydroponic-systems",
  },
  {
    title: "Nutrient Solutions in Hydroponics",
    description:
      "Nutrient solutions are crucial in hydroponics, providing plants with essential nutrients they would normally obtain from the soil. This article covers the composition of nutrient solutions, how to mix them correctly, and how to maintain the right pH and nutrient levels for optimal plant growth.",
    image: photo3,
    link: "https://example.com/nutrient-solutions",
  },
  {
    title: "Advanced Hydroponic Techniques",
    description:
      "Delve into advanced hydroponic techniques such as vertical farming, aeroponics, and aquaponics. These methods offer innovative ways to maximize space, enhance plant growth, and integrate with aquaculture. Learn about the latest advancements and how they can be applied to modern hydroponic systems.",
    image: photo1,
    link: "https://example.com/advanced-techniques",
  },
  {
    title: "Troubleshooting Common Issues",
    description:
      "Identify and resolve common issues in hydroponic systems, such as nutrient deficiencies, pH imbalances, and pest infestations. This guide provides practical solutions and tips to ensure your hydroponic system runs smoothly and your plants remain healthy.",
    image: photo2,
    link: "https://example.com/troubleshooting-issues",
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalContent, setModalContent] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const featuresRef = useRef(null);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const showModal = (content) => {
    setModalContent(content);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-300">
      {/* Hero Section */}
      <Row justify="center" align="middle" className="min-h-screen py-8">
        <Col xs={24} md={12} className="relative">
          <div className="relative">
            <img
              src={slides[currentSlide]}
              alt="Slide"
              className="w-full h-90 object-cover rounded-lg"
            />
            <Button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-800"
              icon={<LeftOutlined />}
              style={{
                fontSize: "24px",
                width: "40px",
                height: "40px",
                border: "none",
                background: "none",
              }}
            />
            <Button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-800"
              icon={<RightOutlined />}
              style={{
                fontSize: "24px",
                width: "40px",
                height: "40px",
                border: "none",
                background: "none",
              }}
            />
          </div>
        </Col>
        <Col xs={24} md={12} className="flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-800">
              Innovative Solutions for Modern Farming
            </h2>
            <p className="text-lg text-gray-500 mt-4">
              Explore our cutting-edge technology that transforms traditional
              farming into efficient, sustainable practices.
            </p>
            <Button
              type="primary"
              size="large"
              className="mt-8"
              icon={<ArrowRightOutlined />}
              onClick={scrollToFeatures}
            >
              Get Started
            </Button>
          </div>
        </Col>
      </Row>

      {/* Blog Section */}
      <Row justify="center" className="py-16">
        <Col span={24}>
          <h2 className="text-3xl font-semibold mb-8 text-blue-900 text-center">
            About Hydroponics
          </h2>

          <div className="max-w-6xl mx-auto">
            {hydroponicsArticles.map((article, index) => (
              <Row
                key={index}
                className={`mb-16 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } items-center`}
                gutter={16}
              >
                <Col xs={24} md={12}>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-90 object-cover rounded-lg"
                    />
                  </a>
                </Col>
                <Col xs={24} md={12}>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="p-4">
                      <h3 className="text-2xl font-bold mb-2 text-green-600">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {article.description}
                      </p>
                      <div>
                        <Button
                          type="primary"
                          className="bg-green-600 text-white px-4 py-2 hover:bg-green-700"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </a>
                </Col>
              </Row>
            ))}
          </div>
        </Col>
      </Row>

      {/* Features Section */}
      <Row justify="center" className="py-16" ref={featuresRef}>
        <Col span={24} className="text-center">
          <h2 className="text-3xl font-semibold mb-8 text-blue-900">
            Features
          </h2>
          <Row gutter={16} justify="center">
            {features.map((feature, index) => (
              <Col xs={24} sm={12} md={3} key={index} className="mb-6">
                <div className="flex flex-col items-center">
                  <div
                    className="w-24 h-24 flex items-center justify-center rounded-full bg-white border border-gray-300 shadow-lg cursor-pointer hover:bg-gray-100 transition-colors duration-300"
                    onClick={() => showModal(feature.modalContent)}
                  >
                    <span className="text-4xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-l font-semibold mt-4 text-green-600">
                    {feature.title}
                  </h3>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Contact Us Section */}
      <Row justify="center" className="py-16">
        <Col span={24} className="text-center">
          <h2 className="text-3xl font-semibold mb-8 text-blue-900">
            Contact Us
          </h2>
          <p className="max-w-xl mx-auto text-lg text-gray-600">
            Have questions or need more information? Get in touch with us today!
          </p>
          <Button
            type="primary"
            size="large"
            className="mt-8"
            icon={<ArrowRightOutlined />}
          >
            Get in Touch
          </Button>
        </Col>
      </Row>

      {/* Modal for Feature Details */}
      <Modal
        visible={isModalVisible}
        title="Feature Details"
        onCancel={handleCancel}
        footer={null}
      >
        <p>{modalContent}</p>
      </Modal>
    </div>
  );
}

export default Home;
