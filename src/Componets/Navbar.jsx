import React, { useState } from 'react';
import { HomeOutlined, UserOutlined, GlobalOutlined, FileDoneOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [current, setCurrent] = useState('home'); // Ensure default is valid
  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log("Clicked Key:", e.key); // Debugging log
    setCurrent(e.key);
    navigate(`/${e.key}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <Menu
        mode="horizontal"
        selectedKeys={[current]}
        onClick={handleClick}
        style={{
          fontSize: '16px',
          height: '60px',
          lineHeight: '60px',
          width: "990px",
          display: 'flex',
          gap: '25px',
          justifyContent: 'center', // Corrected typo
          background: '#ffffff', // White background
          borderRadius: '30px', // Oval shape
          padding: '0 20px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow
          border: '2px solid #ddd', // Light border
        }}
      >
        <Menu.Item key="home" icon={<HomeOutlined style={{ fontSize: '19px' }} />}>
          Home
        </Menu.Item>
        <Menu.Item key="landlist" icon={<FileDoneOutlined style={{ fontSize: '19px' }} />}>
          Land Listings
        </Menu.Item>
        <Menu.Item key="map" icon={<GlobalOutlined style={{ fontSize: '19px' }} />}>
          Map Views
        </Menu.Item>
        <Menu.Item key="contact" icon={<UserOutlined style={{ fontSize: '19px' }} />}>
          Contact Us
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
