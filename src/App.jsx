import React from 'react'
import 'antd/dist/reset.css'; // Import Ant Design styles
import { Route, Routes , Router} from 'react-router-dom';
import Home from './Page/Home';
import LandList from './Page/LandList';
import Layout from './Layout';
import Admin from './Page/Admin';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='not' element={<Home />} />
        <Route path="landlist" element={<LandList />} />
        <Route path='home' element={<Admin/>}/>
      </Route>
    </Routes>
  );
};

export default App
