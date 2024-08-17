import { Menu } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import React from "react";
const items = [
  {
    label: "Home",
    key: "home",
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

    if (e.key == "home") {
      navigate("/");
    } else if (e.key == "download") {
      navigate("/download");
    } else if (e.key == "knowhow") {
      navigate("/knowhow");
    } else if (e.key == "aboutus") {
      navigate("/aboutus");
    } else if (e.key == "contact") {
      navigate("/contact");
    }
  };
  return (
    <>
      <div className="container mx-auto">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          className=""
        />
      </div>
    </>
  );
}

export default NavComponent;
