// import React from "react";

import { Card, Col, Row } from "antd";
import logo from "../../assets/logo/ohcroplogo.png";

function Home() {
  return (
    <>
      <Row>
        <Col span={24}>
          <img src={logo} alt="ohcroplogo" className="h-13" />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Homepage</h1>
            <p className="text-lg text-green-400">
              This is a simple homepage built with React, Ant Design, and
              Tailwind CSS.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            title="Card title"
            bordered={false}
            style={{
              width: 300,
            }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Home;
