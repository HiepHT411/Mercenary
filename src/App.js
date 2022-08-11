import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart/Cart";
import ListProduct from "./pages/ListProduct/ListProduct";
import ListOrder from "./pages/ListOrder/ListOrder";
import Payment from "./components/Payment/Payment";


function App() {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProductList());
  // }, [])

  return (
    <div className="wrapper">
      <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path="/list/product" element={<ListProduct/>} />
        <Route path="/list/order" element={<ListOrder/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path={`/checkout/:id`} element={<Payment/>}/>
        <Route path="/" element={<ListProduct/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
