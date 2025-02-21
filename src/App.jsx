import React from 'react'
import 'antd/dist/reset.css'; // Import Ant Design styles
import { Route, Routes , Router} from 'react-router-dom';
import Home from './Page/Home';
import LandList from './Page/LandList';
import Layout from './Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='home' element={<Home />} />
        <Route path="landlist" element={<LandList />} />
      </Route>
    </Routes>
  );
};

export default App