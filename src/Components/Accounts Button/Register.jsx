import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
const App = () => (
  <>
    <a href='/auth/signup' style={{ color: 'green', zIndex: 99999 }}>
      <Button type="primary">Sign Up</Button>
    </a>
  </>
);
export default App;