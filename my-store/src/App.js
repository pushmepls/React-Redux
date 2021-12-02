import React, { useEffect } from "react";
import ProductsScreen from "./screen/ProductsScreen";
import HomeScreen from "./screen/HomeScreen";
import ProductDetailScreen from "./screen/ProductDetailScreen";
import ProductsByCategory from "./screen/ProductsByCategory";
import NavHead from "./components/NavHead";
import LoginScreen from "./screen/LoginScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/App.css";
import Cart from "./screen/CartScreen.js";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { fetchLocal } from "./features/userSlice";
import { fetchCart } from "./features/cartSlice";
import Footer from "./components/Footer";


function App() {
  const userStore = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log('user id ',user);
    if (localStorage.getItem("user") !== null && userStore.data !== null) {
      dispatch(fetchLocal(user));
      dispatch(fetchCart(user));
    }
  }, []);

  

  return (
    <div className="App">
     
      <Router>
        <NavHead />
        
        <Routes>
          <Route path="/products/:id" element={<ProductDetailScreen />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductsScreen />} />
          <Route path="/:category" element={<ProductsByCategory />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
