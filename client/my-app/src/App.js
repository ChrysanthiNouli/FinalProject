import axios from "axios";
import {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/productAdditionForm";
import Product from "./components/product.js";
import ProductList from "./components/productList.js";
import Navbar from "./components/navbar.js";
import Login from "./components/login.js";
import Register from "./components/register.js";


function App() {

  const [products, setProducts] = useState([]);

  async function readProducts() {
    try {
      await axios
      .get("http://localhost:8080/products")
      .then((res) => setProducts(res.data));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    readProducts();
  }, []);

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/form" element={<Form readProducts={readProducts}/>}></Route>
        <Route path="/" element={<ProductList products={products} readProducts={readProducts}/>}></Route>
        <Route path="/login" element={<Login login={Login}/>}></Route>
        <Route path="/register" element={<Register register={Register}/>}></Route>
      </Routes>
      </BrowserRouter>
      
      <div></div>
    </div>
  );
}

export default App;
