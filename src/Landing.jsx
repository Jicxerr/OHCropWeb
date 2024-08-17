// import React from "react";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

import FooterComponent from "./Pages/Components/Footer/FooterComponent";
import { Outlet } from "react-router-dom";
import NavComponent from "./Pages/Components/Navigation/NavComponent";

function Landing() {
  return (
    <>
      <Layout className="min-h-screen flex flex-col">
        <Header className="bg-white shadow-md">
          <NavComponent />
        </Header>

        <Content
          className="min-w-full 
"
        >
          <Outlet />
        </Content>

        <Footer className="bg-gray-800 text-white text-center py-4">
          <FooterComponent />
        </Footer>
      </Layout>
    </>
  );
}

export default Landing;
