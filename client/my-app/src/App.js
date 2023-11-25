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

  // const addToCart = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (!exist) {
  //     setCartItems([...cartItems, product]); 
  //     console.log("added")
  //   } else {
  //     console.log("not")
  //     return;

  //   }
  // };
    const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  
 const removeFromCart = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if (exist) {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  } else {
    return;
  }
};
//   const onRemove = (product) => {
//     const exist = cartItems.find((x) => x.id === product.id);
//     if (exist.qty === 1) {
//       setCartItems(cartItems.filter((x) => x.id !== product.id));
//     } else {
//       setCartItems(
//         cartItems.map((x) =>
//           x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
//         )
//       );
//     }
//   };

  useEffect(() => {
    readProducts();
  }, []);

  return (
    <>
      <BrowserRouter>
      <NavbarFunction/>
      <Routes>
        <Route path="/form" element={<Form readProducts={readProducts}/>}>Product Form</Route>
        <Route path="/" element={<ProductList products={products} cartItems={cartItems} readProducts={readProducts} addToCart={addToCart}/>}>exCHANGE</Route>
        <Route path="/register" element={<Register register={Register}/>}>Register</Route>
        <Route path="/login" element={<Login Login={Login}/>}>Log In</Route>
        <Route path="/wishlist" element={<Like Like={Like}/>}/>
        <Route path="/mail" element={<Messages Messages={Messages}/>}/>
        <Route path="/cart" element={<Cart Cart={Cart} cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart}/>}/>
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

//   const { products } = data;