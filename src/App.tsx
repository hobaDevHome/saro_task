import { BrowserRouter, Routes, Route } from "react-router-dom";

import WatchesList from "./pages/WatchesList";
import WatchDetails from "./pages/WatchDetails";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WatchesList />} />
        <Route path='/:id' element={<WatchDetails />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
