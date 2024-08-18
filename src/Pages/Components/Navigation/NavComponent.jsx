import { Menu, Layout } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/ohcroplogo.png";

const { Header } = Layout;

const items = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "Product",
    key: "product",
  },
  {
    label: "Download",
    key: "download",
  },
  {
    label: "Know How",
    key: "knowhow",
  },
  {
    label: "About Us",
    key: "aboutus",
  },
  {
    label: "Contact",
    key: "contact",
  },
];

function NavComponent() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("home");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);

    switch (e.key) {
      case "home":
        navigate("/");
        break;
      case "product":
        navigate("/product");
        break;
      case "download":
        navigate("/download");
        break;
      case "knowhow":
        navigate("/knowhow");
        break;
      case "aboutus":
        navigate("/aboutus");
        break;
      case "contact":
        navigate("/contact");
        break;
      default:
        break;
    }
  };

  return (
    <Layout>
      <Header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center h-full">
          <img src={logo} alt="ohcroplogo" className="h-12" />
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            className="flex-grow-0 flex-shrink"
          />
        </div>
      </Header>
    </Layout>
  );
}

export default NavComponent;
