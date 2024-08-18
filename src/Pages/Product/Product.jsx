import React from "react";
import { Card, Col, Row, Button } from "antd";
import photo1 from "../../assets/photo/photo1.jpg";
import photo2 from "../../assets/photo/photo2.jpg";
import photo3 from "../../assets/photo/photo3.jpg";

const products = [
  {
    title: "Hydroponic Grow Kit",
    description:
      "Complete hydroponic grow kit with everything you need to start growing your own plants.",
    image: photo1, // Replace with your image URL
    link: "https://example.com/hydroponic-grow-kit",
  },
  {
    title: "LED Grow Lights",
    description:
      "High-efficiency LED grow lights to promote healthy plant growth.",
    image: photo2, // Replace with your image URL
    link: "https://example.com/led-grow-lights",
  },
  {
    title: "Nutrient Solutions",
    description:
      "Premium nutrient solutions designed for optimal plant health and growth.",
    image: photo3, // Replace with your image URL
    link: "https://example.com/nutrient-solutions",
  },
  {
    title: "pH and TDS Meters",
    description:
      "Accurate pH and TDS meters to monitor and maintain optimal growing conditions.",
    image: photo1, // Replace with your image URL
    link: "https://example.com/ph-tds-meters",
  },
];

function Product() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-300 py-16">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Our Products
      </h1>
      <Row gutter={16} justify="center">
        {products.map((product, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index} className="mb-8">
            <Card
              hoverable
              cover={
                <img
                  alt={product.title}
                  src={product.image}
                  className="object-cover h-48 w-full"
                />
              }
              actions={[
                <Button type="link" href={product.link} target="_blank">
                  Buy Now
                </Button>,
              ]}
              className="shadow-lg"
            >
              <Card.Meta
                title={product.title}
                description={product.description}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Product;
