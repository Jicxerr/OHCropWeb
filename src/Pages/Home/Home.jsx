import React, { useState, useRef } from "react";
import { Col, Row, Button, Modal } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import logo from "../../assets/logo/ohcropicon.png";

import { useNavigate } from "react-router-dom";
import { features } from "./Features";
import { hydroponicsArticles } from "./hydroponicsArticles";
import photo1 from "../../assets/photo/photo1.jpg";
import photo2 from "../../assets/photo/photo2.jpg";
import photo3 from "../../assets/photo/photo3.jpg";

const slides = [logo, photo1, photo2, photo3];


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

  const navigate = useNavigate();  // Initialize navigate hook

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
            onClick={() => navigate("/Contact")} 
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