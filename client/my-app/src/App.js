import axios from "axios";
import {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/productAdditionForm";
import ProductList from "./components/productList.js";
import Navbar from "./components/navbar.js";
import Login from "./components/login.js";
import Register from "./components/register.js";

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
      </Routes>
      </BrowserRouter>
  );
}

export default App;
