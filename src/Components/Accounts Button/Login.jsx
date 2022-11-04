import { Button, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
const App = () => (
  <a href='/auth/login' style={{ color: 'red', zIndex: 99999 }}>
    <Space>
      <Button type="text">Sign In</Button>
    </Space>
  </a>
);
export default App;