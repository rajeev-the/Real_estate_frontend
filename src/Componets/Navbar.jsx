import React, { useState } from "react";
import { Menu, Button } from "antd";
import { HomeOutlined, FileDoneOutlined, GlobalOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import '@ant-design/v5-patch-for-react-19';

const Navbar = () => {
  const [current, setCurrent] = useState("home");
  const [userin, setUserin] = useState(true);
  const navigator = useNavigate();

  const handleClick = (e) => {
    setCurrent(e.key);
    navigator(`/${e.key}`);
  };

  const items = [
    {
      key: 'home',
      icon: <HomeOutlined style={{ fontSize: '19px' }} />,
      label: 'Home',
    },
    {
      key: 'landlist',
      icon: <FileDoneOutlined style={{ fontSize: '19px' }} />,
      label: 'Land Listings',
    },
    {
      key: 'map',
      icon: <GlobalOutlined style={{ fontSize: '19px' }} />,
      label: 'Map Views',
    },
    {
      key: 'contact',
      icon: <UserOutlined style={{ fontSize: '19px' }} />,
      label: 'Contact Us',
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', position: 'relative' }}>
      <Menu
        mode="horizontal"
        selectedKeys={[current]}
        onClick={handleClick}
        items={items}
        style={{
          fontSize: '16px',
          height: '60px',
          lineHeight: '60px',
          width: "990px",
          display: 'flex',
          gap: '25px',
          justifyContent: 'center',
          background: '#ffffff',
          borderRadius: '30px',
          padding: '0 20px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          border: '2px solid #ddd',
        }}
      />

      {userin ? (
        <Button
          type="primary"
          style={{
            position: 'absolute',
            right: 30,
            top: '50%',
            transform: 'translateY(-50%)',
            borderRadius: '20px',
            padding: '5px 15px'
          }}
        >
          <UserOutlined />
        </Button>
      ) : (
        <Button
          type="primary"
          style={{
            position: 'absolute',
            right: 30,
            top: '50%',
            transform: 'translateY(-50%)',
            borderRadius: '20px',
            padding: '5px 15px'
          }}
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default Navbar;
