import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProductDetails from './Details';
import Cart from './Cart';
import Main from './Main';

const MainContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default MainContainer;
