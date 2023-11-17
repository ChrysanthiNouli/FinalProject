import axios from "axios";
import {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/productAdditionForm";
import ProductList from "./components/productList.js";
import Navbar from "./components/navbar.js";
import Login from "./components/login.js";
import Register from "./components/register.js";
import Like from "./components/wishlist.js";
import Messages from "./components/messages.js";
import Cart from "./components/cart.js";
import Menu from "./components/menu.js";

function App() {

  const [products, setProducts] = useState([]);

  const readProducts = () => {
    try {
      axios
      .get("http://localhost:8080/products")
      .then((res) => setProducts(res.data))
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    readProducts();
  }, []);

  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/form" element={<Form readProducts={readProducts}/>}>Product Form</Route>
        <Route path="/" element={<ProductList products={products} readProducts={readProducts}/>}>exCHANGE</Route>
        <Route path="/register" element={<Register register={Register}/>}>Register</Route>
        <Route path="/login" element={<Login Login={Login}/>}>Log In</Route>
        <Route path="/wishlist" element={<Like Like={Like}/>}/>
        <Route path="/mail" element={<Messages Messages={Messages}/>}/>
        <Route path="/cart" element={<Cart Cart={Cart}/>}/>
        <Route path="/menu" element={<Menu Menu={Menu}/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
