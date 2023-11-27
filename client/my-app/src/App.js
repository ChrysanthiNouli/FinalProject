import axios from "axios";
import {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/productAdditionForm";
import ProductList from "./components/productList.js";
import NavbarFunction from "./components/navbar.js";
import Login from "./components/login.js";
import Register from "./components/register.js";
import Like from "./components/wishlist.js";
import Messages from "./components/messages.js";
import Cart from "./components/cart.js";
import MenuList from "./components/menu.js";
import Account from "./components/myAccount.js";
import Product from "./components/product.js";
import Footer from "./components/footer.js";
import About from "./components/about.js";
//import addToCart from "./components/product.js";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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
    <>
      <BrowserRouter>
      <NavbarFunction/>
      <Routes>
        <Route path="/form" element={<Form readProducts={readProducts}/>}>Product Form</Route>
        <Route path="/" element={<ProductList products={products} cartItems={cartItems}/>}>exCHANGE</Route>
        <Route path="/register" element={<Register register={Register}/>}>Register</Route>
        <Route path="/login" element={<Login Login={Login}/>}>Log In</Route>
        <Route path="/wishlist" element={<Like Like={Like}/>}/>
        <Route path="/mail" element={<Messages Messages={Messages}/>}/>
        <Route path="/cart" element={<Cart Cart={Cart} cartItems={cartItems}/>}/>
        <Route path="/menu" element={<MenuList MenuList={MenuList}/>}/>
        <Route path="/account" element={<Account Account={Account}/>}/>
        <Route path="/about" element={<About About={About}/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
      </>
  );
}

export default App;
