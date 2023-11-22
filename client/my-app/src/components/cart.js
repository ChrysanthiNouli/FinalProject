import React from "react";
// import axios from "axios";
import { useEffect, useState } from "react";
// import Product from "../components/product.js"

const Cart = () => {
  const [cart, setCart] = useState([]);
    return (
        <div>
            <h2>My cart</h2>
            {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <span>{product.title}</span>
              {/* <button onClick={() => removeFromCart(product)}>Remove</button> */}

            </li>
          ))}
        </ul>
      )}
      
        </div>
    )
}

export default Cart;