import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./componets/Navbar"
import Footer from "./componets/Footer"
import Home from "./componets/Home"
import Shop from "./componets/Shop"
import Blog from "./componets/Blog"
import Contact from "./componets/Contact"
import Cart from "./componets/Cart";
import Register from "./componets/Register/Register";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
