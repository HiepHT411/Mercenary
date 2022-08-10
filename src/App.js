import React, { useEffect } from "react";
import './App.css';
import { useDispatch } from 'react-redux';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart/Cart";
import ListProduct from "./pages/ListProduct/ListProduct";
import ListOrder from "./pages/ListOrder/ListOrder";


function App() {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProductList());
  // }, [])

  return (
    <div>
    
    <BrowserRouter>
      <Routes>
      <Route path="/list/product" element={<ListProduct/>} />
      <Route path="/list/order" element={<ListOrder/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/" element={<ListProduct/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
